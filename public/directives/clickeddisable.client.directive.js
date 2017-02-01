angular.module('mean').directive('clickedDisable', function (){
    return {
        restrict: 'A',
        link: function (scope, ele, attrs){
            $(ele).click(function() {
                var parent = ele[0].parentElement;
                for (var i = 0; i < parent.childNodes.length; i++) {
                    console.log(parent.childNodes[i]);
                    $(parent.childNodes[i]).attr('disabled', true);
                }
            });
        }
    };
});
