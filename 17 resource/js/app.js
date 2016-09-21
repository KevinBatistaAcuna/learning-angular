angular.module("finalApp",["lumx","ngRoute","ngResource"])
.config(function($routeProvider){
	$routeProvider
		.when("/",{
			controller: "mainController",
			templateUrl: "templates/home.html"
		})
});