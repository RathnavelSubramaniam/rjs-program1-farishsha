/**
 * Checks if a number is a prime number.
 * @param {number} num - The number to check.
 * @returns {boolean} True if prime, false otherwise.
 */
const isPrime = (num) => {
    if (num<=1){
        return false;
    }
    for(let i = 2;i<num;i++){
        if(num% i==0) {
            return false;
        }}
    return true;
}
let number=17;
if(isPrime(number)){
    console.log(number + "is not a Number");
}
else
{
    console.log(number+"is not a Prime Number");
}
    
    return false; // Change this return statement
};

// Export the function for the test cases
module.exports = isPrime;
