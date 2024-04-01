function swapCase(str) {
    return str.split('').map(char => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
      //used to join the strings
    }).join('');
}
console.log(swapCase('Deee is Fine'))
