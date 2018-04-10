// Jaime
// ****
// Author : Carmen Rivera
// ***
// 10/04/2018
// *****
//
// IndexController es el contolador de la vista index tiene funciones de control de vistas y funciones de la 
// barra de navegacion como el PrevPage la cual regresa a la pagina visitada anterior mente ademas.

(function() {

    var IndexController = function($scope, $log, $location, $routeParams, $cookieStore, $rootScope) {


        // La funcion de isActive nos retorna el valor del path en el que se encuentra el cliente y en base a esto
        //y la directiva ng-hide se valida si la barra y el footer se muestran
        $scope.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };
        //la funcion de PrevPage regresa a la pagina anterior 
        $scope.PrevPage = function() {
            window.history.back();
        };

    };

    IndexController.$inject = ['$scope', '$log', '$location', '$routeParams', '$cookieStore', '$rootScope'];

    angular.module('jaimeapp')
        .controller('IndexController', IndexController);

}());