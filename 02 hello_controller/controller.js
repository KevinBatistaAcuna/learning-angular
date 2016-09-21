var app = angular.module("MyFirstApp", []);
app.controller("FirstController", function($scope){
	$scope.name = "Kevin";
	$scope.newComment = {};
	$scope.comments = [
		{
			comment: "Good tutorial",
			username: "Kevin Batista"
		},
		{
			comment: "Bad tutorial",
			username: "somebody"
		}
	];
	$scope.addComment = function(){
		$scope.comments.push($scope.newComment);
		$scope.newComment = {};
	}
})