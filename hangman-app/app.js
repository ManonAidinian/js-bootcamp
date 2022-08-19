const product = {
  name: "Sapiens",
};

console.log(product.hasOwnProperty("name"));
Object.prototype.hasOwnProperty = () => "new function";
console.log(product.hasOwnProperty());

Object.prototype.someNewMethod = () => "whatever";
console.log(product.someNewMethod());
