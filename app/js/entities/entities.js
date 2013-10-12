/**
 * Created by Neurosis on 13.10.13.
 */
function Link(name, href, boardId) {
	this.id = Math.uuid();
	this.boardId = boardId;
	this.name = name;
	this.href = href;

	return this;
}

function Board(name, userId) {
	this.id = Math.uuid();
	this.name = name;
	this.userId = userId;
	this.links = [];

	this.addLink = function (link) {
		if (link.boardId === this.id) {
			this.links.push(link);
		}
		else {
			throw "Incorrect boardId";
		}
	}

	this.removeLink = function (linkId) {
		var length = this.links.length;

		for (var i = 0; i < length; i++) {
			var link = this.links[i];

			if (link.id = linkId) {
				this.links.splice(i, 1);
			}
		}
	}

	return this;
}