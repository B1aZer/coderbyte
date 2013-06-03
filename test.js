// 1.String in reverse

function FirstReverse(str) { 
  
  var str2 = '';
  for (var i=0; i <= str.length; i++) {
    str2 = str2 + str.charAt(str.length - i);
  }
  str = str2; 

  // code goes here  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(FirstReverse(readline()));           

