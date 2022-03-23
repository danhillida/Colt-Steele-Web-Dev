let list = [
  "learn javascript",
  "open system76 laptop",
  "spray weeds",
  "pick up garden shed",
];
let launcher = NaN;

while (launcher !== "quit") {
  launcher = prompt("What would you like to do?");
  if (launcher === "new") {
    let add = prompt("What would you like to add?");
    list.push(add);
    console.log(`${add} was added to the list.`);
  } else if (launcher === "list") {
    console.log("*************");
    for (let i = 0; i < list.length; i++) {
      console.log(i, list[i]);
    }
    console.log("*************");
  } else if (launcher === "delete") {
    let remove = prompt(
      "What is the index of the item you would like to remove?"
    );
    console.log(`${list[remove]} was deleted from list.`);
    list.splice(remove, 1);
  } else {
    console.log("I don't recognize that.");
  }
}

console.log("You have quit the app");
