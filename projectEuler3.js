/**Largest prime factor
Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

Problem 3 for The Odin Project: 
    Largest Prime Factor... just solve for numbers smaller than 1,000 and 
    don't worry about making it efficient. You won't need to do any crazy 
    math -- think iteration and make the computer do the work. Consider it 
    extra credit to make your solution solve for larger numbers in a way 
    that isn't too slow.
**/ 

factors = [ ];
var div = 2;
var num = 600851475143;

while (num > 1) {
    while (num % div === 0) {
        factors.push (d)iv;
        num /= div;
    }
    div += 1;
}
var largestPrimeFactor = Math.max.apply(Math, factors);
    
console.log(largestPrimeFactor + " is the largest prime number of " + num + ".");