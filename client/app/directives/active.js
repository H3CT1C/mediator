angular.module('mediatorApp')
    .directive("active", function() {
        return {
            restrict: 'A',
            link: function(scope, elem, attrs) {
                scope.$watch(attrs.active, function(value) {
                    if (value) {
                        elem.addClass("active");
                    } else {
                        elem.removeClass("active");
                    }
                });
            }
        };
    });
