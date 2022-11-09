//  1.Print odd numbers in an array
function array(odd){
    for(var i = 0 ; i< odd.length ; i++){
          if(odd[i]%2!=0){                    ////anonymous function
             console.log(odd[i])
          } 
     }
  }array([1,2,3,4,5,6,7,8,9,10])
  
  //IIFE function
  function array1(odd1){
    for(var i = 0 ; i< odd1.length ; i++){    ///IIFE function
               if(odd1[i]%2!=0){
                  console.log(odd1[i]);
               } 
          }
    }array1([11,22,33,55,66,77,99,35])

    ///arrow function
    oddNumbers = (array) => {
        for(var i = 0 ; i< array.length ; i++){
             if(array[i]%2!=0){
                console.log(array[i])
             } 
        }
             }

//  2.Convert all the strings to title caps in a string array
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  console.log(toTitleCase("i love anime"));    
  
//IIFE function
function sentenceCase (str) {
    if ((str===null) || (str===''))
         return false;
    else
     str = str.toString();
  
   return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
  
  console.log(sentenceCase('my all time favorite anime is one piece'));

//arrow function  
sentenceCase =(str)=>{
    if ((str===null) || (str===''))
         return false;
    else
     str = str.toString();
  
   return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
  
  console.log(sentenceCase('best website to watch anime is "animixplay"'));

// 3.Sum of all numbers in an array
function sumArray(array) {
    const ourArray = [1, 4, 0, 9, -3];
    let sum = 0;
  
    for (let i = 0; i < ourArray.length; i += 1) {
      sum += ourArray[i];
    }
    
    return sum;
  }
  
  console.log(sumArray([1, 4, 0, 9, -3]));

//arrow function
 sumArray=(array)=> {
    const ourArray = [10,40,50];
    let sum = 0;
  
    for (let i = 0; i < ourArray.length; i += 1) {
      sum += ourArray[i];
    }
    
    return sum;
  }
  
  console.log(sumArray([10,40,50]));  

// 4.Return all the prime numbers in an array
function findPrimeNumbers() {
    var count = 100,
        primes = [];
    for (var i = 0; i <= count; i++) {
        if (count / i === 1 || count) primes.push(i);
        else continue;
        count -= 1;
    }
    for (var i = 0, len = primes.length; i < len; i++) return primes[i];
}

console.log(findPrimeNumbers());
//arrow function
const newArray = [1, 3, 2, 5, 10];
const myPrimeArray = newArray.filter(num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
});console.log(myPrimeArray);

// 5.Return all the palindromes in an array

  function pal (arr, n)
{
    for (let i = 0; i < n; i++)
    {
        let ans = (arr[i]);
        if (ans == false)
            return false;
    }
    return true;
}pal([11],5)

IIFE : 

     (function (arr, n)
    {
        for (let i = 0; i < n; i++)
        {
            let ans = (arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    })(1,2)

// arrow function
Palindrome = (arr, n) =>
    {
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
// 6. array rotation
function reverse(array , li , ri){
    while(li < ri){
         var temp = a[li];
         a[li]= a[ri];
         a[ri] = temp;
         
         li++;
         ri--;
       }
   }reverse([1,2,3]) 
   // arrow function
    reverse=(array , li , ri)=>{
    while(li < ri){
         var temp = a[li];
         a[li]= a[ri];
         a[ri] = temp;
         
         li++;
         ri--;
       }
   }