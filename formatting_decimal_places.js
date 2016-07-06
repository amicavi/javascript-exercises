// Problem
// Each number should be formatted that it is rounded to two decimal places. 
// You don't need to check whether the input is a valid number because only 
// valid numbers are used in the tests.

// Example:    
// 5.5589 is rounded 5.56   
// 3.3424 is rounded 3.34

// Solution 
function twoDecimalPlaces(n) {
  return Math.round(n*100)/100;
}


// Test Cases

Test.describe("twoDecimalPlaces", function() {
  Test.it("works for some examples", function() {
    Test.assertEquals(twoDecimalPlaces(4.659725356), 4.66, "didn't work for 4.659725356");
    Test.assertEquals(twoDecimalPlaces(173735326.3783732637948948), 173735326.38, "didn't work for 173735326.3783732637948948");
    Test.assertEquals(twoDecimalPlaces(4.653725356), 4.65, "didn't work for 4.653725356");
  });
  
  Test.it("works for random numbers", function() {
    const solution = (number) => Math.round(number * 100) / 100;
    
    for (let i = 0; i < 100; ++i) {
      let number = Math.random() * 250.95316 - 125.47658;
      
      Test.assertEquals(twoDecimalPlaces(number), solution(number), `didn't work for ${number}`)
    }
  });
});