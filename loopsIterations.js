// level 2
// ## Level 2

// ---

// Write a function in Javascript to print the sum of the first n fibonacci numbers.

// **Input:** 6

// **Output:**

// ```
// 1 1 2 3 5 8
// Sum: 20
// ```

function fibonacci() {
  let number = 4;
  let sum = 0;
  let n1 = 1,
    n2 = 1,
    nextTerm;
  document.writeln("fibonaci series");
  for (let i = 1; i <= number; i++) {
    console.log(n1);
    document.writeln(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}

fibonacci();

function fibonacci2(n) {
  let n = [];
  if (n <= 0) return 0;

  n[0] = 0;
  n[1] = 1;
  let sum = n[0] + n[1];
  for (let i = 2; i <= n; i++) {
    n[i] = n[i - 1] + n[i - 2];
    sum += n[i];
  }

  document.writeln("sum", +sum);
}
fibonacci2(4);
