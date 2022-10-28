let count = 0;

function increment() {
    count = count + 1;
    document.getElementById("count-el").textContent = count;
}

function decrement() {
    count--;
    document.getElementById("count-el").textContent = count;
}

function save() {
    let countWithDash = count + " - ";
    let saveEl = document.getElementById("save-el");
    saveEl.textContent += countWithDash;
    document.getElementById("count-el").textContent = count = 0;
}


