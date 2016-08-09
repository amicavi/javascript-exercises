
//Isograms

// An isogram is a word that has no repeating letters, 
// consecutive or non-consecutive. Implement a function 
// that determines whether a string that contains only 
// letters is an isogram. Assume the empty string is an isogram. 
// Ignore letter case.

// isIsogram( "Dermatoglyphics" ) == true
// isIsogram( "aba" ) == false
// isIsogram( "moOse" ) == false // -- ignore letter case

// TEST CASES

Test.assertSimilar( isIsogram("Dermatoglyphics"), true );
Test.assertSimilar( isIsogram("isogram"), true );
Test.assertSimilar( isIsogram("aba"), false, "same chars may not be adjacent" );
Test.assertSimilar( isIsogram("moOse"), false, "same chars may not be same case" );
Test.assertSimilar( isIsogram("isIsogram"), false );
Test.assertSimilar( isIsogram(""), true, "an empty string is a valid isogram" );

// MY SOLUTION

function isIsogram(str){
if (str.length > 0) {
  var strLowerCase = str.toLowerCase();
  var regexp = /[a-z]/gi;
  var matches_array = strLowerCase.match(regexp);
  
  var result = matches_array.every(areEqual);
  
  
function areEqual(item){
  
    for (var i = 0; i < matches_array.length;) {
    
        if(matches_array.indexOf(item) == i) {
          i++;
        
            if (item == matches_array[i]) {
              return false;
              break; 
            } else {
              return true;
            }
        } else {  
      
            if (item == matches_array[i]) {
              return false;
              break; 
            } else {
              return true;
            }
        }

        i++;
        return result;

        }else{
        return true;
        }
    };
}