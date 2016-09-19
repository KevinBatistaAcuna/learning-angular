angular.module("CustomDirective", [])
	.directive('myAutocomplete', function(){
		function link(scope,element,attrs){
			$(element).autocomplete({
				source: scope.$eval[attrs.myAutocomplete],
				select: function(ev,ui){
					ev.preventDefault();
					if(ui.item){
						scope.optionSelected(ui.item.value);
					}
				},
				focus: function(ev,ui){
					ev.preventDefault();
					$(this).val(ui.item.label);
				}
			});
		};
		return {
			link: link
		}
	})

	.directive('backImg', function(){
		return function(scope,element,attrs){
			attrs.$observe('backImg', function(value){
				element.css({
					"background":"url("+value+")",
					"background-size":("cover"),
					"background-position":("center"),
					"display":("inline-block")
				});
			});
		}
	})
	.controller("AppCtrl", function($scope,$http){
		$scope.repos = [];
		$http.get("https://api.github.com/users/KevinBatistaAcuna/repos")
		.success(function(data){
			$scope.repos=data;
			for(var i = data.length - i; 1>=0; i--) {
				var repo = data[i];
				$scope.repos.push(repo.name);
			}
		})
		.error(function(err){
			console.log(err);
		})
		$scope.optionSelected = function(data){
			$scope.apply(function(){
				$scope.main_repo = data
			})
		}
	})
