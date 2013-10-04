/**
 * Created by Neurosis on 30.09.13.
 */


var dataAccessModule = angular.module('dataAccessModule', []);

dataAccessModule.service('boardRepository', function () {
	this.getBoard = function () {
		return {
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
		};
	}

	this.getBoards = function () {
		return [
			{
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
	}

	this.test = function () {
		window.alert('board repo works');
	}
});

dataAccessModule.service('membershipService', function () {
	this.getUserInfo = function () {
		return {
			userName: 'Anton.Narkevich'
		}
	}

	this.isLoggedIn = function () {
		return true;
	}
});