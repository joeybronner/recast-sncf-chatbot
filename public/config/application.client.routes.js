'use strict';

// Setting up route
angular.module('mean')

.config(['$routeProvider',
    function ($routeProvider) {
        // Application routing definition
        $routeProvider.
        when('/', {
            title: 'SAP x Recast.AI',
            templateUrl: 'views/bot.html',
            controller: 'BotController',
            access: {restricted: false}
        }).
        otherwise({
            redirectTo: '/'
        });
    }
])
.run(function ($rootScope, $location) {
    // Redirect restricted URLs if user not logged in
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        // Nothing
    });

    // Change menu content dynamically & title
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        // Nothing
    });
});
