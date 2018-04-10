// Jaime
// ****
// Author : Carmen Rivera
// ***
// 10/04/2018
// *****
//
//LoginController  es el contolador de la vista login tiene funciones de control de vistas y funciones de autenticasion 
(function() {
    var LoginController = function($scope, $log, $location, $routeParams, $cookieStore, LoginFactory, $rootScope) {
        $scope.clientes = null;
        //La actual funcion llamada get login es traida de la carpeta factory 
        //que contiene los servicios a los que se conecta la aplicasion
        //la funcion principal de la funcion getLogin es enviar el contenido de 
        // los textbox de de user y password enviandolos a nuesta API en node para ser validados 
        // y este envie un json ecriptado con la respuesta y de esta manera validar estos campos
        // asi mismo se escribe la cookie de sesion para que la sesion del cliente se guarde.




        $scope.calldata = function(user) {
            console.log(user);
            if (user.login === "saulo" && user.password === "1234") {
                var unombre = user.login;
                var usertype = user.password;
                var pass = true;
                var expireDate = new Date();
                var login = true;
                expireDate.setDate(expireDate.getDate() + 1);
                $cookieStore.put('uname', unombre, { 'expires': expireDate });
                $cookieStore.put('passs', pass, { 'expires': expireDate });
                $cookieStore.put('login', login, { 'expires': expireDate });

                console.log($cookieStore.get('login'));
                $rootScope.isLoged = $cookieStore.get('login');

                console.log($rootScope.isLoged);
                $location.path('/home');
            } else {
                console.log("No es la contra chavo");
            }
            /* Comento esta funcion con ella podras enviar los datos 
            LoginFactory.getLogin(user).success(function(data, status, header) {
                    console.log(data);
                    var codificado = data.token.split('.')[1];
                    var perfil = JSON.parse(decode(codificado));
                    var unombre = perfil.usuario;
                    var usertype = perfil.rol;
                    var login = true;
                    var expireDate = new Date();
                    expireDate.setDate(expireDate.getDate() + 1);
                    $cookieStore.put('uname', unombre, { 'expires': expireDate });
                    $cookieStore.put('login', login, { 'expires': expireDate });
                    $cookieStore.put('rol', usertype, { 'expires': expireDate });

                    $rootScope.isLoged = $cookieStore.get('login');
                    console.log(perfil);
                    console.log($rootScope.isLoged);
                    $location.path('/Home');
                })
                .error(function(data, status, headers, config) {
                    $log.log('data error: ' + data + ' status: ' + status + ' headers: ' + headers + ' config: ' + config);
                    $scope.error = "Campos incorrectos";
                });
                */

            // La funcion decode decodifica el texto del json el cual esta codificado en base64
            // y regresa a la funcion de get login los campos descriptados del cliente como su nombre
            function decode(str) {
                var output = str.replace('-', '+').replace('_', '/');
                switch (output.length % 4) {
                    case 0:
                        break;
                    case 2:
                        output += '==';
                        break;
                    case 3:
                        output += '=';
                        break;
                    default:
                        throw 'Illegal base64url string!';
                }
                return window.atob(output);
            }
        }

    };
    LoginController.$inject = ['$scope', '$log', '$location', '$routeParams', '$cookieStore', 'LoginFactory', '$rootScope'];
    angular.module('jaimeapp')
        .controller('LoginController', LoginController);

}());