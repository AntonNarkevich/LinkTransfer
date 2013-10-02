/**
 * Created by Neurosis on 30.09.13.
 */
//
//var myApp = angular.module('myApp', []);
//
//myApp.controller('GreetingCtrl', function ($scope) {
//	$scope.greeting = 'Hola!';
//});

var coreModule = angular.module('coreModule', ['dataAccessModule']);

coreModule.controller('testController', function ($scope, testRepository) {
	$scope.links = testRepository.getLinks();

	$scope.addLink = function () {
		var name = $scope.newLink.name,
			href = $scope.newLink.href;

		testRepository.create(name, href);
	}

	$scope.keyPressed = function ($event) {
		EVENT = $event;
	};
});

coreModule.filter('windowPropertyFilter', function () {
	return function (input) {
		if (input !== undefined) {
			var property = window[input];

			if (property) {
				return property.toString();
			}
		}

		return "can't do this";
	}
});
