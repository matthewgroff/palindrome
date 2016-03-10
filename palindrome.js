function palindrome(str) {
  
  var newString = str.replace(/[\W_]+/g, '');
  var lowerCaseString = newString.toLowerCase();
  var array = lowerCaseString.split("");
  var reverseArray= array.reverse();
  var newestString = reverseArray.join();
  var finalString = newestString.replace(/\W+/g, '');
  
 
  if (finalString === lowerCaseString) {
     return true;
    
  }
  
  else {
    return false;
 }
   
  
}
