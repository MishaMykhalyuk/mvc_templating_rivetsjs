var model = {
	notifier: function(){
		console.log("Notifier is called");
	},
	start: 1,
	end: 10,
	updateStart: function(){
		model.start++;
	},
	updateEnd: function(){
		model.end++;
	}
};

rivets.bind(document.getElementById('wrapper'), { model:  model});