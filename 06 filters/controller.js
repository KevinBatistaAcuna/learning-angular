angular.module('mainModule',[])
	.filter("removeHtml",function(){
		return function(text){
			return String(text).replace(/<[^>]+>/gm,'');
		}
	})
	.controller("FiltersController", function($scope){
		$scope.my_html = "<p>Hola Kevin</p>";
		$scope.my_text = {};
		$scope.my_text.title = "Hola";
		$scope.my_text.body = "Hola Mundo";
		$scope.costo = 2;
	})