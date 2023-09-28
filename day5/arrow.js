// Arrow  function

// First question
//print odd numbers

const arr=[12,23,61,52,72,80]
const odd=arr.filter(n => n%2)
    console.log(odd);
//output => [23,61]

//Second Question
//convert all the strings to title caps in a string array

const text = "guvi geek"
const titlecase=text.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
console.log(titlecase);
//output => Guvi Geek
    
//Third question
//Sum of all numbers in the array

const sum = [21,34,21,76,43].reduce((partialSum, a) => partialSum + a);
console.log(sum);
//output => 195

//Fourth question
//Return all prime numbers in the array

  var primenumber = [1,2,3,4,5,6,7,8,9,10,11,13,15,17,19,22]
  primenumber = primenumber.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
console.log(primenumber);
//output => [1,2,3,5,7,11,13,17,19]

//Fifth Question
//Return all the palindromes in an array

const Palindromes = (words) => words.filter((word) => word.split("").reverse().join("") === word);

console.log(Palindromes(["hello","dad", "noon","mom","dance","wow"]));
//output => ["dad","noon","mom","wow"]