/**
 * Created by Neurosis on 30.09.13.
 */


var dataAccessModule = angular.module('dataAccessModule', []);

dataAccessModule.service('testRepository', function () {
	var links;

	(function init() {
		var st = localStorage.getItem('links');

		try {
			links = JSON.parse(st);
		}
		catch(e) {
			console.log(e.message);
			links = [];
		}
	})();

	this.create = function (name, href) {
		var link = {};
		link.name = name;
		link.href = href;

		links.push(link);

		this.submit();
	}

	this.getLinks = function () {
		return links;
	}

	this.submit = function () {
		window.localStorage.setItem('links', JSON.stringify(links));
	}
});