let count = 0;

function increment() {
    count = count + 1;
    document.getElementById("count-el").innerText = count;
}

function decrement() {
    count--;
    document.getElementById("count-el").innerText = count;
}

function save() {
    let countWithDash = count + " - ";
    let saveEl = document.getElementById("save-el");
    saveEl.innerText += " " + countWithDash;
}


