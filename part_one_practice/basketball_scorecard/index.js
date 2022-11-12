let homeTeamPoints = document.getElementById("home_points");
let currentHomeTeamPoints = 0;

let guestTeamPoints = document.getElementById("guest_points");
let currentGuestTeamPoints = 0;

function plusOneHome() {
    currentHomeTeamPoints += 1;
    homeTeamPoints.textContent = currentHomeTeamPoints;
}

function plusTwoHome() {
    currentHomeTeamPoints += 2;
    homeTeamPoints.textContent = currentHomeTeamPoints;
}

function plusThreeHome() {
    currentHomeTeamPoints += 3;
    homeTeamPoints.textContent = currentHomeTeamPoints;
}


function plusOneGuest() {
    currentGuestTeamPoints += 1;
    guestTeamPoints.textContent = currentGuestTeamPoints;
}

function plusTwoGuest() {
    currentGuestTeamPoints += 2;
    guestTeamPoints.textContent = currentGuestTeamPoints;
}

function plusThreeGuest() {
    currentGuestTeamPoints += 3;
    guestTeamPoints.textContent = currentGuestTeamPoints;
}