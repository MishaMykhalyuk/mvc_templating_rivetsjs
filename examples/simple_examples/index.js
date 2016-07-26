/*-----------------simple binding--------------*/
var personData = {
	firstName: "Sergey",
	lastName: "Esenin",
	updateName: function(){
		personData.firstName = "Oleg";
	}
};

var person = document.getElementById('person');

rivets.bind(person, {model: personData});

/*-----------------formaters-------------------*/
var noteData = {
	note1: "I have learned the rivets.js",
	note2: "monday",
	price: 20,
	getPrice: function(){
		console.log(noteData.price);
	}
};

var noteWrapper = document.getElementById('note');

rivets.formatters.toUpperCase = function(value){
	return value.toUpperCase();
};

rivets.formatters.currency = {
	read: function(value) {
		return (value / 100).toFixed(2);
	},
	publish: function(value) {
		console.log("publish = ", value);
		return Math.round(parseFloat(value) * 100);
	}
};

rivets.formatters.toDollar = function(value){
	return value * 24.5 + " $";
};

rivets.bind(noteWrapper, {m: noteData});

/*----------------custom one-way binder--------------*/
var colorData = {
	color: "blue",
	text: "my first binder"
};

rivets.binders.color = function(el, value) {
  el.style.color = value;
};

rivets.bind(document.getElementById('colorBinder'), {m: colorData});

/*----------------custom two-way binder--------------*/
var ioData = {
	text: ""
};

rivets.binders.io = {
	bind: function (element) {
		element.addEventListener('input', this.publish)
		// element.addEventListener('input', function(){})
	},
	routine: function (element, value){
		console.log(value);
	},
	unbind: function (element) {
		element.removeEventListener('input', this.publish)
	}
};

rivets.bind(document.getElementById('ioBinder'), {m: ioData});

/*--------------------component------------------*/
rivets.components['clickable'] = {
  template: function() {
	return '<div>' +
				'<button rv-on-click="showContent">show content</button>' +
			'</div>';
  },
  initialize: function(el, data) {
	return new clickableConstructor();
  }
};

function clickableConstructor(){
	this.content = "my awesome data";
};

clickableConstructor.prototype.showContent = function(ev, data){
	alert(data.content);
};

rivets.bind(document.getElementById('clickableComponent'), {});

/*---------------computed properties---------------*/
var durationModel = {
	duration: function(){
		console.log("duration function called");
	},
	start: 1,
	end: 10,
	updateStart: function(){
		durationModel.start = 22;
	},
	updateEnd: function(){
		durationModel.end = 100;
	}
};

rivets.bind(document.getElementById('duration'), durationModel);