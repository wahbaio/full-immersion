var todos = [];
window.setTimeout(function() {
  // put all the rest of your JS code from the lecture here
  var input="";
  while(input!=="quit"){
	input = prompt("What you want to do?");
	if(input==="new"){
		newTodo();
	} else if(input==="list"){
		listTodo(); 
	} else if (input==="delete"){
		deleteTodo();
		}
	}
	console.log("Bye");
  }, 500);

function deleteTodo() {
	var deleteItemNumber = prompt("Insert the number of the item to delete");
	todos.splice(deleteItemNumber, 1);
	console.log("Item deleted");
}

function listTodo() {
	console.log("******************");
	todos.forEach(function (x, i) {
		console.log(i + ". " + x);
	});
	console.log("******************");
}

function newTodo() {
	var todo = prompt("Insert the new todo item");
	todos.push(todo);
	console.log("New todo item inserted");
}
