var userInput='500';
var multiplier=5;

console.log(parseInt(userInput)*multiplier); //convert to Int
console.log(multiplier.toString()); //convert to String

var pi=3.1416;
console.log(userInput*pi);
var currencyConverted=userInput*pi;
console.log(currencyConverted.toFixed(2)); //2 decimal places

// var firstName='John';
// var nameInput=prompt('What is your name?');
// if (nameInput.toUpperCase()==firstName.toUpperCase()) {
//     alert('The same!');
// } else {
//     alert('Not the same.');
// }

var fruits=['apple, orange, kiwi'];

if (fruits.includes('apple')) {
    console.log('Apple is present');
} else {
    console.log('Choose another fruit.');
}

//OBJECT
var person = {
    firstName: 'Jane',
    lastName: 'Doe',
    gender: 'Female',
    age: '7',
};
console.log(person);
person.gender='M';
person.age='21';
console.log(person);

var phoneBook = [
    {
        name:'Mary Cooper',
        number:5218782,
    },
    {
        name:'Johnny Bravo',
        number:5486972,
    },
    {
        name:'Naruto Uzumaki',
        number:2468899,
    },
    {
        name:'Howard Wolowitz',
        number:7891465,
    }
];
console.log(phoneBook);
phoneBook[1].name='Carlos Aquino';
phoneBook[1].number=4578921;
console.log(phoneBook[1]);

console.log(document.getElementById('companyName'));
document.getElementById('companyName').innerHTML='The Coding School';

var contentElement = document.getElementById('contentDiv');
contentElement.innerHTML='Coding for the future';
////////////////////////////////////////////////////////////////////
console.log(document.getElementsByClassName('listItem')[0].innerHTML);

var listItems=document.getElementsByClassName('listItem');

for(var counter=0; counter<listItems.length; counter++){
    console.log(listItems[counter].innerHTML);
    listItems[counter].innerHTML=listItems[counter].innerHTML + ' is an item';
}
console.log(document.getElementById('nameForm').value);

// FUNCTIONS:
// console.log()
// alert()
// prompt()
// confirm()
// document.getElementById()
// document.getElementsByClassName()

function displayValue() {
    console.log('hello');
};
displayValue();

function add(x,y){
    return x+y;
;}

function displayInput(){
    var inputValue = document.getElementById('nameForm').value;
    console.log('Hello there', inputValue);
    alert('Welcome ' + inputValue);
};

console.log(add(4,5));
var sum=add(7,11);
console.log(add(sum,5));
console.log(sum);