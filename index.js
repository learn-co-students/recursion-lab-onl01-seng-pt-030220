// Code your solution here!
function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  }

  function reverseString(str) {
      if (str === "") {
          return ""
      } else {
          return reverseString(str.substring(1)) + str.charAt(0);
      }
  }

  function isPalindrome(str) {
      if (str.length === 0 || str.length === 1 ) {
          return true;
          }
          if (str[0] === str[str.length - 1]){
              return isPalindrome(str.substring(1, str.length -1))
          }
          return false;

  }

  function addUpTo(arr, index) {
   
    if ( index === 0 ) {
        return arr[0];
    }
    else {
        return arr[index] + addUpTo(arr, index - 1)
    }

    
  }

  function maxOf(arr) {
      if (arr.length === 1 ) {
          return arr[0];
      } else {
          return Math.max(arr.shift(), maxOf(arr))
      }
  }

  
  function includesNumber(arr, n) {
    if (arr.length === 1 && arr[0] !== n) {
        return false;
    } else if (arr[0] === n) {
        return true;
    }
    arr.shift();
    return includesNumber(arr, n)

    
}