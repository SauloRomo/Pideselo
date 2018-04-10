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

    var LogoutController = function($scope, $log, $location, $routeParams, $cookieStore, $rootScope) {


        //Se iguala el valor del scope.welcome para obtener el nombre del cliente atravez de la cookie

        console.log("logout");
        $scope.timerRunning = true;
        $cookieStore.remove("login");
        //La funcion de timerout nos arroja la redireccion de las de la pagina una vez
        // borrada la cookie de sesion
        setTimeout(function() {
            window.location.href = '/APP/#!/';
        }, 5000);

    };

    LogoutController.$inject = ['$scope', '$log', '$location', '$routeParams', '$cookieStore', '$rootScope'];

    angular.module('jaimeapp')
        .controller('LogoutController', LogoutController);

}());