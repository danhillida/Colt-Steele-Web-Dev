// Colt's solution to the app
let input = prompt("what would you like to do?");
const todos = ["collect eggs", "clean litter box"];
while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("**************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("**************");
  } else if (input === "new") {
    const newTodo = prompt("Okay, what is the new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list`);
  } else if (input === "delete") {
    const index = parseInt(prompt("Okay, enter an index to delete"));
    if (!Number.isNan(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`Okay, deleted ${deleted}`);
    }
    console.log("Unknown Index");
  }
  input = prompt("what would you like to do?");
}
console.log("You quit the app");
