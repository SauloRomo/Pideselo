// Jaime
// ****
// Author : Carmen Rivera
// ***
// 10/04/2018
// *****
//
// App.js es el moderador princpal de la aplicasion dentro se encuentran las funciones de directivas 
// la injecsion de nuevas directivas , tambien se encuentran las validacion de logeo como tambien 
// la aplicasion de controllers a las vistas.


(function() {

    var app = angular.module('jaimeapp', ['ngRoute', 'ngCookies']);


    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                resolve: {
                    "check": function($location, $rootScope, $cookieStore) {
                        $rootScope.isLoged = $cookieStore.get('login');
                        if ($rootScope.isLoged === true) {
                            $location.path('/dashboard');

                        }
                    }
                },
                controller: 'LoginController',
                templateUrl: 'app/views/login.html'

            })
            .when('/dashboard', {
                resolve: {
                    "check": function($location, $rootScope, $cookieStore) {
                        $rootScope.isLoged = $cookieStore.get('login');
                        if ($rootScope.isLoged === undefined) {
                            $location.path('/');

                        }
                    }
                },
                controller: 'HomeController',
                templateUrl: 'app/views/home.html'
            })



        .otherwise({ templateUrl: 'app/views/error.html' });
    });




}());