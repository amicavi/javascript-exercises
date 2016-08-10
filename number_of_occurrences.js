// Number Of Occurrences

// The numberOfOccurrences function must return 
// the number of occurrences of an element in an array. 

// var arr = [0,1,2,2,3];
// arr.numberOfOccurrences(0) === 1;
// arr.numberOfOccurrences(4) === 0;
// arr.numberOfOccurrences(2) === 2;
// arr.numberOfOccurrences("a") === 0;

// TEST CASES

var arr = [4, 0, 4];
Test.assertEquals(arr.numberOfOccurrences(4), 2);

// MY SOLUTION

Array.prototype.numberOfOccurrences = function(n) {
  var counter = 0;
  for (i = 0; i < this.length; i++){
    if (n == this[i]){
      counter++;
    }
  }
  return counter;
}

// SOLUTION MOST POPULAR

// Array.prototype.numberOfOccurrences = function(search) {
//   return this.filter( function(num){ return search === num } ).length;
// }