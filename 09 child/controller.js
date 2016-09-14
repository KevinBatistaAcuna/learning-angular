angular.module("MyFirstApp", [])
	
	//There is two ways to use $rootScope, I can injected in my controller o using the function run

	.run(function($rootScope){
		$rootScope.name = "Kevin Batista";
	})
	.controller("FirstController", function($scope){
		$scope.name = "kb";
		setTimeout(function(){
			$scope.$apply(function(){
				$scope.name = "mauricio"
			})
		}, 1000);
	})
	.controller("ChildController", function($scope){

	});
