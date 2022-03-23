let list = [
  "learn javascript",
  "open system76 laptop",
  "spray weeds",
  "pick up garden shed",
];
let launcher = NaN;

while (launcher !== "quit") {
  launcher = prompt("What would you like to do?");
  console.log(launcher);
  if (launcher === "new") {
    list.push(prompt("What would you like to add?"));
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
    list.splice(remove, 1);
  }
}
