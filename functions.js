function multiply(x, y, z) {
  return x * y * z;
}

console.log(multiply(5, 10, 3));

const convertToSeconds = function(minutes) {
  return minutes * 60;
};

console.log(convertToSeconds(1));

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

console.log(fahrenheitToCelsius(40));

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("76"));

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Hello guys"));

function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(5));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(15));