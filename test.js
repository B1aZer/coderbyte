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


// 2. Factorial 

function FirstFactorial(num) { 
  var fct = 1;
  while (num > 0) {
      fct = fct * num;
      num = num - 1;   
  }
  num = fct;
  // code goes here  
  return num; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(FirstFactorial(readline()));                            

// 3. Max Length string
//
function LongestWord(sen) { 
  
  var slp = sen.replace(/\W/g,' ').split(' ');
  
  var lng = slp.length;
  var max = 0,
     maxi = 0;
  
  for (var i=0; i< lng; i++) {
    if (slp[i].length > max) {
        maxi = i;
        max = slp[i].length;
    }
    
  }
  
  sen = slp[maxi];

  // code goes here  
  return sen; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(LongestWord(readline()));                            


//4 . Replace Vowels and Chars
//
function LetterChanges(str) { 
  function testvow(vow) {
    if (/[aeiou]/.test(vow)) {
      return vow.toUpperCase();    
    }
    return vow;
  }
  var chr = 0,
      newstr = '';
  for (var i=0; i < str.length; i++) {
    if (/(\d|\W)/.test(str[i])) {
      newstr = newstr + testvow(str[i]);
    } else {
      chr = str.charCodeAt(i);
      newstr = newstr + testvow(String.fromCharCode(chr + 1));
     }
    
    
  }
  str = newstr;
  //str = chr;
  // code goes here  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(LetterChanges(readline())); 
//

// 5 . Sum up 
//
function SimpleAdding(num) { 
  var start = 1,
      sum = 0;
  
  while (start <= num) {
    sum += start;
    start += 1;
  }
  num = sum;
  // code goes here  
  return num; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(SimpleAdding(readline()));   

//6. Capitalize Words

function LetterCapitalize(str) { 
  
  var spl = str.split(' '),
      newstr = '';
  
  for (var i=0; i < spl.length; i++) {
    newstr += spl[i][0].toUpperCase() + spl[i].substr(1,spl[i].length) + ' ';
  }
  str = newstr;
  // code goes here  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(LetterCapitalize(readline()));    

// 7. String validation

function SimpleSymbols(str) { 
  
  for (var i=0; i< str.length; i++) {
    if (/[A-z]/.test(str[i])) {
        try {
          if (str[i-1] == '+' && str[i+1] == '+') {
            return true;
          } else {
            return false;
          }
        }
        catch(err) {
          return false;
        }
  }
}

  // code goes here  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(SimpleSymbols(readline()));    

// 8. Check Numbers
//

function CheckNums(num1,num2) { 
  
  if (num1 === num2) {
    return -1;
  }
  else if (num1 < num2) {
    return true;
  }
  else {
    return false;
  }

  // code goes here  
  return num1 + num2; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(CheckNums(readline())); 


// 9. Convert Time

function TimeConvert(num) {
  var hours = 0,
      mins = 0,
      val = 0;
  
  val = num / 60.0;
  
  hours = parseInt(val);
  mins = parseInt((num / 60.0 - hours) * 60);
  
  num = '' + hours + ':' + mins;

  // code goes here  
  return num; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(TimeConvert(readline()));  

// 10 . Aplha sort string

function AlphabetSoup(str) { 
  var pos = 0,
      dubs = [];
  for (var i=0; i< str.length; i++) {
    pos = str.charCodeAt(i);
   
   
      dubs.push(str[i]);
    
  }
  
  str = dubs.sort().join(' ').replace(/\s/g,'');
  // code goes here  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(AlphabetSoup(readline()));                            

// 11. a b separation
//

function ABCheck(str) { 
  var space = 0;
  for (var i=0; i < str.length; i++) {
    if (str[i] === 'a') {
      space += 1;
    }
    if (space === 2 && str[i] === 'b') {
      return true;
    }
  }
  
  return false;

  // code goes here  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(ABCheck(readline()));    


// 12. Vowels in string

function VowelCount(str) { 
  
  var vow = 0;
  
  for (var i = 0; i < str.length; i++) {
    if (/[aeuio]/.test(str[i])) {
        vow += 1;
     }
  }

  str = vow;
  // code goes here  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(VowelCount(readline()));   


// 13. Words in sentence
//
function WordCount(str) { 
  
  var spl = str.split(' ');
  
  str = spl.length;

  // code goes here  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(WordCount(readline()));                            

// 14. Prime numbers
// 10 , 594


function PrimeTime(num) { 
  
  var sq = Math.round(Math.sqrt(num)),
      prime = false;
  
  for (var i=2; i<=sq; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  
  return true;

  // code goes here  
  return num; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(PrimeTime(readline()));    


// 15. XO count

function ExOh(str) { 
  var x = 0,
      o = 0;
  
  for (var i=0; i< str.length; i++) {
    if (str[i] == 'o') {
      o += 1;
    } 
    else if (str[i] == 'x') {
      x += 1;
    } 
  }
  
  if ( x === o ) {
    return true;
  }
  else {
    return false; 
  }

  // code goes here  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(ExOh(readline()));    

// 16. String equality
//
function Palindrome(str) { 
  
  var str = str.replace(/\s/g, ''),
      newstr = '';
  
  for (var i=0; i<= str.length; i++) {
    newstr = newstr + str.charAt( str.length - i);  
  }
  
  if (str === newstr) {
    return true;
  }
  else {
    return false;
  }

  // code goes here  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(Palindrome(readline()));                            


// 17. String encode
//

function RunLength(str) { 
  
  //var str = str.split("").sort().join(""),
  var count = 1,
      first = str[0],
      newstr = '';
  if (str.length === 1) {
    newstr = count + first;
  }
  for (var i = 1; i < str.length; i++) {
    if (str[i] === first) {
      count += 1;
    }
    else {        
      newstr = newstr + count + first;
      count = 1;
      first = str[i];
    }
    if (i === str.length - 1) {
      newstr = newstr + count + first;
    }
    
  }
  str = newstr;
  // code goes here  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(RunLength(readline()));           


// 18. Prime Array
//
function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i * 2; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

alert(getPrimes(10));



// 19. Polyndrome 2
//

function PalindromeTwo(str) { 
  
  
  var str = str.replace(/\W/g, ''),
      newstr = '';   
  
   for (var i=0; i<= str.length; i++) {
    newstr = newstr + str.charAt( str.length - i);  
  }    
  
   if (str === newstr) {
    return true;
  }
  else {
    return false;
  }     

  // code goes here  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(PalindromeTwo(readline()));                            

