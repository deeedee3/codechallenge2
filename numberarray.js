//Function that allows 2 numbers and generates an array between them.
function getArray(firstNumber, lastNumber) {
    //This variable is assigned to an empty array
    let array = [];
    for (let i = firstNumber; i <= lastNumber; i++) {
      array.push(i);
    }
    return array;
}
//When an argument is passed an array is given between the two numbers provided.
console.log(getArray(2, 8))