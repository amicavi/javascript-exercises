// Descending Order 

// Your task is to make a function that can take any non-negative integer as a argument 
// and return it with it's digits in descending order. 
// Descending order means that you take the highest digit and place the next highest digit 
// immediately after it.

// Examples:
// Input: 145263 Output: 654321
// Input: 1254859723 Output: 9875543221

// TEST CASES

Test.assertEquals(descendingOrder(0), 0)
Test.assertEquals(descendingOrder(1), 1)
Test.assertEquals(descendingOrder(123456789), 987654321)

// MY SOLUTION

function descendingOrder(n){
  return parseInt((n + '').split('').sort().reverse().join(''));
}

// SOLUTION MOST POPULAR 

// function descendingOrder(n){
//   return parseInt(String(n).split('').sort().reverse().join(''))
// }