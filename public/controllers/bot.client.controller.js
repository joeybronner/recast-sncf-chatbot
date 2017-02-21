'use strict';

angular.module('mean').controller('BotController', ['$scope', '$http',
        function($scope, $http) {

        $scope.clearChat = function () {
            _init();
        };

        $scope.postMessage = function () {
            var now = new Date();
            var msg = $scope.newmessage;

            if (msg !== '') {

                $scope.messages.push({
                    message: msg,
                    when: now,
                    firstName: 'You',
                    avatar: 'person'
                });
                $scope.newmessage = '';

                var textToBox = {
                    text: msg,
                    language: 'fr',
                    conversationToken: $scope.conversationToken
                };

                // Call Recast
                $http({
                    method: 'POST',
                    url: '/recast/bot',
                    data: textToBox
                }).then(function successCallback(response) {

                    // Write Recast response in console
                    console.log(response.data);

                    if (response.data.action === null) {
                        var sDefaultReply = response.replies[0];
                        $scope.writeBot(sDefaultReply);
                    } else {
                        var sIntention = response.data.action.slug;
                        var sReply = response.data.action.reply;
                        var bStepDone = response.data.action.done;

                        // Stay up to date the conversation token (important!)
                        $scope.conversationToken = response.data.conversation_token;

                        // Greetings
                        if (!$scope.stepGreetingsValidated && sIntention === 'bonjour') {
                            $scope.writeBot(sReply);
                            if (bStepDone) {
                                $scope.stepGreetingsValidated = true;
                            }
                        } else if (!$scope.stepGreetingsValidated) {
                            $scope.writeBot('Bonjour!');
                            $scope.stepGreetingsValidated = true;
                        }

                        // Destination
                        if ($scope.destination === '' && sIntention === 'destination') {
                            $scope.writeBot(sReply);
                            if (bStepDone) {
                                $scope.destination = response.data.memory.traindestination.raw;
                            }
                        }

                        // Departure
                        if ($scope.destination !== '' && $scope.departure === '' && sIntention === 'departure') {
                            if (bStepDone) {
                                $scope.departure = response.data.memory.traindeparture.raw;
                            }
                        }

                        // SNCF Search/Result Departure/Destination next trains
                        if ($scope.departure !== '' && $scope.destination !== '') {
                            var iIdDeparture = getStationByName($scope.departure);
                            var iIdDestination = getStationByName($scope.destination);
                            $http({
                                method: 'GET',
                                url: '/sncf/nextdeparture/' + iIdDeparture + '/to/' + iIdDestination
                            }).then(function successCallback (response) {

                                console.log(response.data);

                                var sDeparture = response.data.passages.$.gare;
                                var aTrains = response.data.passages.train;

                                if (aTrains === undefined || aTrains.length === 0) {
                                    $scope.writeBot('Je n\'ai trouvé aucun train pour ce trajet, désolé.');
                                    $scope.writeBot('Au revoir.');
                                    _init();
                                } else {
                                    var sDestination = aTrains[0].term[0];
                                    var dFirstDeparture = aTrains[0].date[0]._;
                                    var dFirstDepartureNum = aTrains[0].num[0];
                                    var dSecondDeparture = aTrains[1].date[0]._;
                                    var dSecondDepartureNum = aTrains[1].num[0];
                                    var dThirdDeparture = aTrains[2].date[0]._;
                                    var dThirdDepartureNum = aTrains[2].num[0];

                                    $scope.writeBot('Les trois prochains trains au départ de ' + getStationById(sDeparture) + ', et à destination de ' + getStationById(sDestination) + ' sont :');
                                    $scope.writeBot('➝ Train n° ' + dFirstDepartureNum + ' - ' + dFirstDeparture);
                                    $scope.writeBot('➝ Train n° ' + dSecondDepartureNum + ' - ' + dSecondDeparture);
                                    $scope.writeBot('➝ Train n° ' + dThirdDepartureNum + ' - ' + dThirdDeparture);
                                }

                            }, function errorCallback (response) {
                                $scope.writeBot(response);
                            });
                        }
                    }

                });
            }
        };

        $scope.writeBot = function (msg) {
            $scope.messages.push({
                message: msg,
                when: new Date(),
                firstName: 'Bot',
                avatar: 'grade'
            });
        };

        // Private functions
        var _init = function () {
            // Global values
            $scope.messages = [];
            $scope.newmessage = '';
            $scope.conversationToken = null;
            $scope.stepGreetingsValidated = false;
            $scope.destination = '';
            $scope.departure = '';
        };

        _init();

}]);
