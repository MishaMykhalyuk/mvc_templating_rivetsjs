var wrapper = document.getElementById('wrapper');

rivets.formatters.toDollar = function(value){
	return value * 24.7 + " USD";
};

rivets.bind(wrapper, {model: { value: 0 }});