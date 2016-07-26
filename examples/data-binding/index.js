console.log(rivets)

var person = {
	firstName: "Sergey",
	lastName: "Esenin",
	updateName: function(){
		person.firstName = "Oleg";
	}
};

var container = document.getElementById('person');

rivets.bind(container, {model: person});