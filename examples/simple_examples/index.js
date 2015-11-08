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

/*-----------------formater-------------------*/
var noteData = {
	note1: "I have learned the rivets.js",
	note2: "monday"
};

var noteWrapper = document.getElementById('note');

rivets.formatters.toUpperCase = function(value){
	return value.toUpperCase();
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

rivets.bind(document.getElementById('clickableComponent', {}));