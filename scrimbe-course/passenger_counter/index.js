let count = 0;
let countEl =  document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
    count = count + 1;
    countEl.textContent = count;
}

function decrement() {
    count--;
    countEl.textContent = count;
}

function save() {
    let countWithDash = count + " :: ";
    saveEl.textContent += countWithDash;
    countEl.textContent = count = 0;
}


