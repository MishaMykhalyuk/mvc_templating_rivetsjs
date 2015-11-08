var todoModel = {
	tasks: [
		{
			name: "Read a book",
			done: false
		},
		{
			name: "Make a presentation",
			done: false
		},
		{
			name: "Prepare lection",
			done: false
		},
		{
			name: "Play football",
			done: false
		},

	],
	removeTask: function(event, element){
		todoModel.tasks.splice(element.index, 1);
	}
};

rivets.bind(document.getElementById('toDoList'), {model: todoModel});