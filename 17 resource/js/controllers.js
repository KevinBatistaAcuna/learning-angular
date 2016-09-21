angular.module("finalApp")
.controller("mainController", function($scope,$resource){
	Post = $resource("http://jsonplaceholder.typicode.com/posts/:id", {id: "@id"});
	User = $resource("http://jsonplaceholder.typicode.com/users/:id", {id: "@id"});

	$scope.posts = Post.query();
	$scope.users = User.query();
	// query() -> GET /posts -> Returns an array of posts

	$scope.removePost = function(post){
		Post.delete({id: post.id}, function(data){
			console.log(data);
		});
		$scope.posts = $scope.posts.filter(function(element){
			return element.id !== post.id;
		});
	}
})
.controller("postController", function($scope,$resource,$routeParams){
	Post = $resource("http://jsonplaceholder.typicode.com/posts/:id", {id: "@id"});
	$scope.post = Post.get({id: $routeParams.id})
});