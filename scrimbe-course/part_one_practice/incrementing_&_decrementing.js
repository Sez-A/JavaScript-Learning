let points = 3;

function addThreePoints() {
    points += 3;
}

function removeOnePoint() {
    points -= 1;
}

addThreePoints();
addThreePoints();
removeOnePoint();
removeOnePoint();
addThreePoints();

console.log(points);