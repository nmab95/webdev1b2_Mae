//Enter text
var user = prompt('Please enter text: ');
console.log(user);

//Enter numbers to compute
var x = prompt('Enter 1st number: ');
var y = prompt('Enter 2nd number: ');
var z = prompt('Enter 3rd number: ');
var n1 = Number(x), n2 = Number(y), n3 = Number(z);
var sum = n1+n2+n3;
var product = n1*n2*n3;
console.log('The sum of the numbers is: ', sum);
console.log('The product of the numbers is: ', product);

//Football team points
var wins = prompt('Enter wins of your football team: ');
var losses = prompt('Enter losses of your football team: ');
var draws = prompt('Enter draws of your football team: ');
var winInt = Number(wins), lossInt = Number(losses), drawInt = Number(draws);
var points = winInt*3 + lossInt*0 + drawInt*1;
console.log ('Total points: ', points);