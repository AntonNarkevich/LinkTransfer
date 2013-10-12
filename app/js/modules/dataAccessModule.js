/**
 * Created by Neurosis on 30.09.13.
 */


var dataAccessModule = angular.module('dataAccessModule', []);

dataAccessModule.service('boardRepository', function () {
	var testBoard = (function generateFakeBoard() {
		var board = new Board("The first test board", Math.uuid()),
			link = new Link("Google", "http://www.google.com", board.id);

		board.addLink(link);

		return board;
	}());

	var boards = [ testBoard ];

	this.getBoard = function (id) {
		var length = boards.length;

		for (var i = 0; i < length; i += 1) {
			var board = boards[i];
			if (board.id === id) {
				return board;
			}
		}

		return null;
	}

	this.getBoards = function () {
		return boards;
	}

	this.createLink = function(link) {
		//Some kind of a hxr request to the server
		console.log('Creating links at server side is still not implemented');
	}
});

dataAccessModule.service('membershipService', function () {
	this.getUserInfo = function () {
		return {
			userName: 'Anton.Narkevich'
		};
	}

	this.isLoggedIn = function () {
		return true;
	}
});