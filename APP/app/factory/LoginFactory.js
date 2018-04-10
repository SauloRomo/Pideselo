(function() {
    var LoginFactory = function($http, $rootScope) {

        var factory = {};


        factory.getLogin = function(data) {
            return $http.post($rootScope.API + '/login', data);
        }

        return factory;
    };
    LoginFactory.$inject = ['$http', '$rootScope'];

    angular.module('jaimeapp').factory('LoginFactory', LoginFactory);
}());