//
function extractPrimeNumbers(arr) {
    const primeNumbers = [];
    arr.forEach(num => {
        if (isPrime(num)) {
            primeNumbers.push(num);
        }
    });
    return primeNumbers;
}

// Define the isPrime function
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primes = extractPrimeNumbers(numbers);
console.log(primes); 
