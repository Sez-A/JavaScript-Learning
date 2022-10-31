let name = "Linda";
let greeting = "Hi there";

function greet() {
    console.log(greeting + ", " + name + "!");
    document.getElementById("greeting_field").textContent = greeting + ", " + name + "!";
}

greet();