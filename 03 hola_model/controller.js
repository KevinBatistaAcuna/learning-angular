var app = angular.module("MyFirstApp", []);
app.controller("FirstController", ["$scope", "$http",function(a,b){
	a.nombre = "Kevin";
	a.nuevoComentario = {};
	a.comentarios = [
		{
			comentario: "Buen tutorial",
			username: "Kevin Batista"
		},
		{
			comentario: "Pesimo tutorial",
			username: "somebody"
		}
	];
	a.agregarComentario = function(){
		a.comentarios.push(a.nuevoComentario);
		a.nuevoComentario = {};
	}
}])