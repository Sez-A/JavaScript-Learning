function calculateExpenses(input) {
  let dogFoodPrice = Number(input[0]);
  let catFoodPrice = Number(input[1]);

  let totalPrice = dogFoodPrice * 2.5 + catFoodPrice * 4;

  console.log(`${totalPrice} lv.`);
}

calculateExpenses(["5", "4"]);
