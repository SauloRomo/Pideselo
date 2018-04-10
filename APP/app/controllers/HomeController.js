// Jaime
// ****
// Author : Carmen Rivera
// ***
// 10/04/2018
// *****
//
// Tesselar 2016
// HomeController es el contolador de la vista Home tiene funciones de control de vistas 


(function() {

    var HomeController = function($scope, $log, $location, $routeParams, $cookieStore, $rootScope) {


        //Se iguala el valor del scope.welcome para obtener el nombre del cliente atravez de la cookie

        $scope.welcome = $cookieStore.get('uname');
        $scope.timerRunning = true;


    };

    HomeController.$inject = ['$scope', '$log', '$location', '$routeParams', '$cookieStore', '$rootScope'];

    angular.module('jaimeapp')
        .controller('HomeController', HomeController);

}());