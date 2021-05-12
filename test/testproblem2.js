let { inventory } = require("../data.js");
const problem2 = require("../problem2");

const problemresult = problem2(inventory);

if (Object.keys(problemresult).length > 0) {
  console.log(`Last car is a ${problemresult.car_make} ${problemresult.car_model}`);
}


