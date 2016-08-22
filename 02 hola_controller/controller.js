var app = angular.module("MyFirstApp", []);
app.controller("FirstController", function($scope){
	$scope.nombre = "Kevin";
	$scope.nuevoComentario = {};
	$scope.comentarios = [
		{
			comentario: "Buen tutorial",
			username: "Kevin Batista"
		},
		{
			comentario: "Pesimo tutorial",
			username: "somebody"
		}
	];
	$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario = {};
	}
})