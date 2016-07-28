rivets.binders.io = {
	bind: function (element) {
		element.addEventListener('input', this.publish);
		// element.addEventListener('input', function(){});
	},
	routine: function (element, value){
		console.log(value);
	},
	unbind: function (element) {
		element.removeEventListener('input', this.publish);
	}
};

var model = {
	text: 'Initial value'
}

rivets.bind(document.getElementById('wrapper'), {m: model});