var app = angular.module("MyFirstApp", []);
app.controller("FirstController", ["$scope", "$http",function(a,b){
	a.name = "Kevin";
	a.newComment = {};
	a.comments = [
		{
			comment: "Good tutorial",
			username: "Kevin Batista"
		},
		{
			comment: "Bad tutorial",
			username: "somebody"
		}
	];
	a.addComment = function(){
		a.comments.push(a.newComment);
		a.newComment = {};
	}
}])