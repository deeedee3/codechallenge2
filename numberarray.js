//Function that allows 2 numbers and generates an array between them.
function getArray(firstNumber, lastNumber) {
    //Variable 
    let array = [];
    for (let i = firstNumber; i <= lastNumber; i++) {
      array.push(i);
    }
    return array;
}
  
var myArray = getArray(2, 8);
console.log(myArray)