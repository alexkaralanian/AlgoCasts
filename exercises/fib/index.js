// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  // linear runtime
  const series = [0, 1];
  for (let i = 2; i <= n; i++) {
    series.push(series[i - 2] + series[i - 1]);
  }
  console.log(series[n]);
  return series[n];
}

fib(10);

function recursiveFib(n) {
  // exponential runtime
  if (n < 2) return n;
  return recursiveFib(n - 1) + recursiveFib(n - 2);
}
// console.log('REC FIB', recursiveFib(10));

function memoize(fn) {
  // whenever the function gets caqlled with same args, it will return same value
  // we can use memoization to improve runtime (which is exponential)
  // memoization stores results of each function call

  return function(...args) {
    // we assume func can be called w multiple args so we destructure
    const cache = {};
    // calls the fn with the args we woud normally pass to original func
    if (cache[args]) {
      // return cached value if func has been called w this arg before
      return cache[args];
    }
    // we apply the args array to the func and return
    // this binds context to the function which is returned.
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

console.log('MEMOIZED FIB', memoize(recursiveFib)(10));

module.exports = fib;
