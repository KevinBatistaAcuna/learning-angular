angular.module("finalApp",["lumx","ngRoute"])
.config(function($routeProvider){
	$routeProvider
		.when("/",{
			controller: "mainController",
			templateUrl: "templates/home.html"
		})
});