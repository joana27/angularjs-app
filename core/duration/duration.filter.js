'use strict';

angular.
    module('core').
    filter('duration', function () {
        return function (input) {

            var input = input || '';
            var regex = /\d+/g;
            var found = input.match(regex);


            // convert number to hours:min
            var timeConvert = function (n) {
                var num = n;
                var hours = (num / 60);
                var rhours = Math.floor(hours);
                var minutes = (hours - rhours) * 60;
                var rminutes = Math.round(minutes);
                var finalResult = rhours + "h " + rminutes + "m";

                return finalResult;
            }
            return timeConvert(found);
        }

    });
