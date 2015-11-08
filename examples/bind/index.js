var view = document.getElementById('view');

var model = {
	text: ''
};

var user = {
	name: 'Albert'
}

rivets.formatters.toUpper = function(value) {
	return value.toUpperCase();
}

rivets.bind(view, {'vm': model, 'user': user});

var toDo = document.getElementById('toDo');


var todoModel = {
		todoList: [
			{name: "11",
			 isCheck: true
			},
			{name: "22",
			 isCheck: true
			},
			{name: "33",
			 isCheck: false
			},
			{name: "44",
			 isCheck: true
			},
			{name: "55",
			 isCheck: true
			},
			{name: "66",
			 isCheck: false
			}
		],
		removeItem: function(event, element){
			todoModel.todoList.splice(element.index, 1);
		}
}


rivets.bind(toDo, {'todo': todoModel});

