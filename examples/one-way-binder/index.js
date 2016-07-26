var data = {
	red: 0,
	green: 0,
	blue: 0
};

rivets.binders.color = function(el, value){
	el.style.color = 'rgb(' + data.red + ',' + data.green + ',' + data.blue + ')';
};

rivets.bind(document.getElementById('wrapper'), {model: data});