//Find the odd int

//Given an array, find the int that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.

// TEST CASES

function doTest(a, n) {
  console.log("A = ", a);
  console.log("n = ", n);
  Test.assertEquals(findOdd(a), n);
}
Test.describe('Example tests', function() {
  doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
  doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
  doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
  doTest([10], 10);
  doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
  doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
});

// MY SOLUTION

function findOdd(A) {  
  var result;
  A.forEach(function(item, index, source){
    var counter = 0;
    for (var i = 0; i < source.length; i++){
      if (item == source[i]){
        counter++;
      }
    }
    if (counter%2 > 0){
      result = item;
    }
  });
  return result;
}