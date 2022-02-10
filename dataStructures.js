// level 2
//WORKING IN RESPECTIVE HTML FILES
// 1. Write a function to remove all even numbers from an Array.

function evenNumber() {
  var arraySample = [1, 3, 4, 6, 7, 8];
  let value = arraySample.filter((n) => n % 2 == 0);
  document.writeln(value);
}

evenNumber();

// 2. Replace all the vowels in a string with uppercase vowels.

function upperCase() {
  let text = "Elie";
  let upper = text.toUpperCase();

  document.writeln(upper);
}

upperCase();

// 3. Write a function to find the maximum number in an array.

function maxNum() {
  var arraySample = [1, 3, 4, 6, 7, 8, 2, 5];
  let n = Math.max(...arraySample);

  document.writeln(n);
}

maxNum();
