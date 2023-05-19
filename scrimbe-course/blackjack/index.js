let firstCard = Math.floor((Math.random() * 11) + 2);
let secondCard = Math.floor((Math.random() * 11) + 2);

let sum = firstCard + secondCard;

if(sum < 21) {
    console.log("Do you want a new card?🙂");
}else if (sum === 21) {
    console.log("You've got Blackjack!🥳")
}else {
    console.log("You're out of the game!😭")
}

console.log(sum);