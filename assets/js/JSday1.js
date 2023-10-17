// alert('hello world');

var x=5, y=6;
var z, a = 100;
var b = '5';
var firstName = "John";
var lastName = "Doe"
var sum = x+y;
var test = x+b;
var fullName = firstName+' '+lastName;
var isTrue = true;


console.log(x, y);
console.log(z);
console.log(a);
console.log(firstName);
console.log("Doe");
console.log(sum);
console.log(test);
console.log(typeof test);
console.log(fullName);
console.log(firstName, lastName);
console.log('My name is ', fullName, 'and my Math is ', sum);
console.log('My name is ', fullName, 'and my English is ', test);
console.log(isTrue);
console.log(false);
console.log('The opposite of isTrue is', false);
console.log('The value of isTrue is', isTrue);
console.log(firstName * x); //Not a number
console.log(x**y);

var sum = 10%3; //new sum
console.log('The new value of sum is', sum);
var x= x+y;
console.log(x);
console.log(x>y); //true
var x= x-y;
console.log(x>y); //false
console.log(x<y); //true
console.log(x==5); //true
console.log(x==b); //true
console.log(x===b); //false //equal value and equal type
console.log(x===5); //true
console.log(x>5); //false
console.log(x>=5); //true
console.log(!isTrue);//false
console.log(x!=5); //false
console.log(x==5 && y==6); //true && true = true
console.log(x!=5 && y==6); //false && true = false
console.log(x==5 && y!=6); //true && false = false
console.log(x!=5 && y!=6); //false && false = false
console.log(x==5 || y==6); //true || true = true
console.log(x!=5 || y==6); //false || true = true
console.log(x==5 || y!=6); //true || false = true
console.log(x!=5 || y!=6); //false || false = false

if (x==5 && y==6){
    console.log('Condition: true');
}

if (x==5 && y!=6){
    console.log('Condition: false'); //Will not show
} else if (x!=6){
    console.log('x >= 6');
} else{
    console.log('Else condition');
}

x = 10;
if (x % 2==0){
    console.log('x is an even number');
} else {
    console.log('x is an odd number');
}

if (lastName=='doe'){ //change to '=' to go to first condition
    console.log('Access granted!');
} else {
    console.log('Comparison is case sensitive');
}

if (firstName=='John'||lastName=='Doe'){
    console.log('Coach is IN');
} else {
    console.log('Coach is OUT');
}