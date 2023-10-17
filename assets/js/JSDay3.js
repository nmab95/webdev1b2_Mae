var x;

for (x=0; x<=10; x++){
    console.log("Kael", x);
}

for (x=0; x<=10; x++){
    if (x% 2==0){
        console.log(x, 'EVEN');
    } else {
        console.log(x, 'ODD');
    }
}

for (x=100; x>=3; x--){
    console.log('Going down', x);
}
console.log("down");

var y = 0;
while (y<=10){
    console.log('Kael new', y);
    y++;
}

if (confirm('Press a button')){
    console.log('You pressed OK!');
} else {
    console.log('You pressed cancel');
}
console.log('End')

var confirmOut = confirm('Trying out confirm box');
if (confirmOut == true){
    console.log('OK!');
} else {
    console.log('Cancelled');
}
console.log('Confirm end');

alert('hello', 'hello2');
alert('hello'+456);
var username = prompt('Please enter your name: ');
console.log(username);
if (username == 'John') {
    alert ('Welcome to my site', username);
} else {
    alert('Only Doe can enter here!');
}