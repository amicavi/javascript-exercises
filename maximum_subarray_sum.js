// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence
// in an array or list of integers:

// Example:
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

// Easy case is when the list is made up of only positive numbers and the maximum sum
// is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead. 

// Empty list is considered to have zero greatest sum. Note that the empty list or array
// is also a valid sublist/subarray.

// TEST CASES

describe( "maxSequence", function(){
  it("should work on an empty array",function(){
    Test.assertEquals(maxSequence([]), 0);
  });
  it("should work on the example",function(){
    Test.assertEquals(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
  });

// MY SOLUTION
var maxSequence = function(arr){
    var getMax = arr.map(function(item, index, source){
        var a = source.slice(index);
        var max = 0;        

        while (a.length > 1){
            var sumArray = a.reduce(function(previousValue, currentValue) {
                return previousValue + currentValue;
            });     

            if (sumArray > max) {max = sumArray};       

            a.pop();
        }       

        return max;
    })

    var result;

    if(arr.length > 0){   
        result = Math.max.apply(null,getMax);
    }else{
        result = 0;
    }

    return result;
};

// MY FIRST SOLUTION

// var maxSequence = function(arr){
//   var bigResult = 0;
//   arr.forEach(function(item, index, source){
//     var turns      = source.length - index;
//     var itemResult = [];

//     for (var i = turns; i > index; i--) {
//       var result = item;

//       for (var j = index + 1; j <= i; j++){
//         result = result + source[j];
//       };

//       itemResult.push(result);
//     };

//     max = 0;
//     itemResult.forEach(function(e){if(e > max){max = e}});
//     if (max > bigResult){bigResult = max}
//   });
//   return bigResult;
// }

// SOLUTION MOST POPULAR

// var maxSequence = function(arr){
//   var min = 0, ans = 0, i, sum = 0;
//   for (i = 0; i < arr.length; ++i) {
//     sum += arr[i];
//     min = Math.min(sum, min);
//     ans = Math.max(ans, sum - min);
//   }
//   return ans;
//}

