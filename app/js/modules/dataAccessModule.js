/**
 * Created by Neurosis on 30.09.13.
 */


var dataAccessModule = angular.module('dataAccessModule', []);

dataAccessModule.service('boardRepository', function () {
	var boards = [
		{
			id: 1,
			name: "The first test board",
			links: [
				{
					name: "Google",
					href: "http://www.google.com"
				},
				{
					name: "Tut",
					href: "http://www.tut.by"
				},
				{
					name: "Tut",
					href: "http://www.tut.by"
				},
				{
					name: "Tut",
					href: "http://www.tut.by"
				}
			]
		},
		{
			id: 2,
			name: "The 2nd test board",
			links: [
				{
					name: "Google2",
					href: "http://www.google.com"
				},
				{
					name: "Tut",
					href: "http://www.tut.by"
				},
				{
					name: "Tut",
					href: "http://www.tut.by"
				}
			]
		},
		{
			id: 3,
			name: "The 3rd test board",
			links: [
				{
					name: "Google3",
					href: "http://www.google.com"
				},
				{
					name: "Tut",
					href: "http://www.tut.by"
				},
				{
					name: "Google3",
					href: "http://www.google.com"
				},
				{
					name: "Tut",
					href: "http://www.tut.by"
				}
			]
		},
		{
			id: 4,
			name: "The 3rd test board",
			links: [
				{
					name: "Google3",
					href: "http://www.google.com"
				},
				{
					name: "Tut",
					href: "http://www.tut.by"
				},
				{
					name: "Google3",
					href: "http://www.google.com"
				},
				{
					name: "Tut",
					href: "http://www.tut.by"
				}
			]
		},
		{
			id: 5,
			name: "The 3rd test board",
			links: [
				{
					name: "Google3",
					href: "http://www.google.com"
				},
				{
					name: "Tut",
					href: "http://www.tut.by"
				},
				{
					name: "Google3",
					href: "http://www.google.com"
				},
				{
					name: "Tut",
					href: "http://www.tut.by"
				}
			]
		}
	];

	this.getBoard = function (id) {
		var length = boards.length,
			intId = parseInt(id);

		for (var i = 0; i < length; i += 1) {
			var board = boards[i];
			if (board.id === intId) {
				return board;
			}
		}

		return null;
	}

	this.getBoards = function () {
		return boards;
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