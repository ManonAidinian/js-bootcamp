const products = ["product1"];
const product = products[0];

// if (product !== undefined) {
if (product) {
  console.log("product found");
} else {
  console.log("not found");
}

console.log(product ? "product found" : "not found");

//falsy values : false, 0, empty string, null, undefined. NaN (not a  number)
