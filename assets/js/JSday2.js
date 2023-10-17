// 1. Create a file called JSday2.html and JSday2.js
// 2. Create a variable: length, width, and height (all values are 0)
// 3. first operation: assign the value to width to be 10,
// height to be 15, length to be 23
// 4. next operation: multiply length, width, and height, assign the result
// to variable "product"and console.log the product variable
// 5. next, determine if the product is odd or even.
// If it is odd, print out "product is odd number"
// else, print out "product is even numbrer"
// afterwards, check if the product is divisible by 3. If yes, print
// "divisible by 3.". If not, print out "not a divisible by 3"
// submit in 15 minutes, submit only the JS file, no more screenshot.

var length=0, width=0, height=0;
width = 10;
height = 15;
length = 23;
var product=length*width*height;

// console.log(length, width, height);
console.log(product);
if (product % 2==0){
    console.log('Product is an even number');
} else {
    console.log('Product is an odd number');
}

if (product % 3==0){
    console.log('Divisible by 3');
} else {
    console.log('Not divisible by 3');
}