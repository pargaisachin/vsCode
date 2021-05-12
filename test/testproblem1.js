let { inventory } = require("../data.js");
const problem1 = require("../problem1");

const problemResult = problem1(inventory, 33);

if (Object.keys(problemResult).length > 0) {
	console.log(

    `"Car 33 is a ${problemResult.car_year} ${problemResult.car_make} ${problemResult.car_model}"`
  );
}
//comment

