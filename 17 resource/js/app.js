angular.module("finalApp",["lumx","ngRoute","ngResource"])
.config(function($routeProvider){
	$routeProvider
		.when("/",{
			controller: "mainController",
			templateUrl: "templates/home.html"
		})
		.when("/post/:id",{
			controller: "postController",
			templateUrl:"templates/post.html"
		})
		.when("/posts/new",{
			controller: "newPostController",
			templateUrl:"templates/post_form.html"
		})
		.when("/post/edit/:id",{
			controller: "postController",
			templateUrl:"templates/post_form.html"
		})
});