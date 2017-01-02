var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function greaterThanFive(value){
  return value>5;
}
var greaterThanFiveArray = numberArray.filter(greaterThanFive);
console.log("Original Number Array : " + numberArray);
console.log("Greater Than Five Number Array : " + greaterThanFiveArray);

var shopList = ["Hello", "MilkMan", "Gello", "TonedMilk"];
function containsMilk(value){
  return (value.indexOf("Milk") !== -1);
}
var filteredMilkList = shopList.filter(containsMilk);

console.log("Original Shop Array : " + shopList);
console.log("Filtered Milk List : " + filteredMilkList);
