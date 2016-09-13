angular.module("mainModule", [])
	.controller("firstController",function($scope){
		$scope.name = "Kevin";
		setTimeout(function(){
			$scope.$apply(function(){
				$scope.name="Kevin Batista";
			});
			console.log($scope.name);
		},2000);
		document.querySelector("#myButton").addEventListener("click",function(){
			$scope.$apply(function(){
				$scope.name="Kevin Batista Acuña";
			});
			console.log($scope.name);
		});
		$scope.middleName = function(){
			$scope.name="Kevin Mauricio Batista Acuna";
			console.log($scope.name);
		}
		$scope.clean = function(){
			$scope.name="Kevin";
			setTimeout(function(){
				$scope.$apply(function(){
					$scope.name="Kevin Batista";
				});
				console.log($scope.name);
			},2000);
		}
	});