/**
 * Created by Neurosis on 30.09.13.
 */
//
//var myApp = angular.module('myApp', []);
//
//myApp.controller('GreetingCtrl', function ($scope) {
//	$scope.greeting = 'Hola!';
//});

//	Determining dependencies
var coreModule = angular.module('coreModule', ['dataAccessModule']);

//Registering controllers

//UserInfo
coreModule.controller('masterController', ['$scope', 'membershipService', function ($scope, membershipService) {
	$scope.userInfo = membershipService.getUserInfo();
	$scope.isLoggedIn = membershipService.isLoggedIn();
}]);

//Boards
coreModule.controller('boardController', ['$scope', 'boardRepository', function ($scope, boardRepository) {
	//[1,1,1,1,1,1] => [[1,1],[1,1],[1,1]]
	var chunks = function (array, size) {
		var arrayClone = array.slice(0),
			results = [];

		while (arrayClone.length) {
			results.push(arrayClone.splice(0, size));
		}
		return results;
	};

	var boards = boardRepository.getBoards();

	$scope.boardChunks = chunks(boards, 3);
}]);

//Adding links
coreModule.controller('addLinkController', ['$scope', '$routeParams', 'boardRepository', function ($scope, $routeParams, boardRepository) {
	var board = boardRepository.getBoard($routeParams.boardId);

	$scope.board = board;

	$scope.addLink = function () {
		var link = new Link($scope.newLink.name, $scope.newLink.href, board.id);

		board.addLink(link);
		boardRepository.createLink(link);
	}
}]);

//Settings
coreModule.controller('settingsController', ['$scope', function () {

}]);

//Membership. Login/Logout
coreModule.controller('loginController', ['$scope', function () {

}]);


//Routing configuration
coreModule.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/boards', {templateUrl: 'partials/boards.html', controller: 'boardController'})
		.when('/addlink/:boardId', {templateUrl: 'partials/addlink.html', controller: 'addLinkController'})
		.when('/settings', {templateUrl: 'partials/settings.html', controller: 'settingsController'})
		.when('/login', {templateUrl: 'partials/login.html', controller: 'loginController'})
		.otherwise({redirectTo: '/boards'});
}]);
