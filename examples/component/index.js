rivets.components['slider'] = {
	template: function() {
		return '<div>' +
					'<input type="range" rv-value="value" />' +
					'<output rv-text="value"></output>' +
				'</div>';
		},
	initialize: function(el) {
		return new Slider();
	}
};

function Slider(){
	this.value = 20;
};

rivets.bind(document.getElementById('wrapper'), {});