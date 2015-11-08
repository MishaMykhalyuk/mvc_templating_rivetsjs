rivets.binders.input = {
	routine: function (el, data) {
		//this.model.title = data;
	},
	bind: function (el) {
		item = this.model;
		el.addEventListener('input', this.publish)
	},
	unbind: function (el) {
		el.removeEventListener('input', this.publish)
	}
};

rivets.formatters.length = function (value) {
	return value.length
};

var item = {
	title: "Rivets.js",
	text: "change me",
	tags: [
		{name: "Data binding"},
		{name: "DOM-based templating"}
	]
};

var viewModel = {
	addTag: function () {
		item.tags.push({name: item.newTag});
		item.newTag = "";
	},
	removeItem: function(event, element){
		item.tags.splice(element.index, 1);
	}
};

var el = document.getElementById('view');
rivets.bind(el, {item: item, vm: viewModel});
