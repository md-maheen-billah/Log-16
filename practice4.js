var varOne = [1, 2, 3, 4, 5];
var varTwo = "1,2,3,4,5";
console.log(Array.isArray(varOne));
console.log(Array.isArray(varTwo));
if (Array.isArray(varOne)) {
  console.log("Variable 1 is an array");
} else {
  console.log("Variable 1 is not an array");
}
if (Array.isArray(varTwo)) {
  console.log("Variable 2 is an array");
} else {
  console.log("Variable 2 is not an array");
}
