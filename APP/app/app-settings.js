// Jaime
// ****
// Author : Carmen Rivera
// ***
// 10/04/2018
// *****
//
// app-settings es el puente entre la API y nuestra APP con ella se sobrescriben las rutas 
// para que nuestra API nos pueda prover la informacion a travez de sus modelos o routes

angular.module('jaimeapp')

.run(function($rootScope) {

    $rootScope.API = "http://" + window.location.hostname;

});