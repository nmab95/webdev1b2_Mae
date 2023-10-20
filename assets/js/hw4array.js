//---------------------FRUITS-------------------------//
var fruit=[];
while (true) {
    let userIn = prompt("How many fruits do you want [3-10]?");
    var fruitNum = parseInt(userIn);

    if (fruitNum >= 3 && fruitNum <= 10) {
        // alert("Valid " + fruitNum); //check
        for (let x=0; x<fruitNum; x++){
            fruit[x] = prompt("Enter fruit:");
        }
        break;
    } else {
        alert("Please enter a number within the specified range.");
    }
}

console.log("Fruits entered: ", fruit);
console.log("First fruit: ", fruit[0]);
console.log("Last fruit: ", fruit[fruitNum - 1]);
console.log("Reverse order: ", fruit.reverse());
console.log("Second fruit: ", fruit[1]);
fruit.splice(2, 1);
fruit.splice(0, 1);
console.log("Fruits left: ", fruit);

//---------------------VEGETABLES-------------------------//
var veggie=[];
while (true) {
    let userIn = prompt("How many vegetables do you want [3-10]?");
    var vegNum = parseInt(userIn);

    if (vegNum >= 3 && vegNum <= 10) {
        // alert("Valid " + vegNum); //check
        for (let x=0; x<vegNum; x++){
            veggie[x] = prompt("Enter vegetable:");
        }
        break;
    } else {
        alert("Please enter a number within the specified range.");
    }
}
console.log("Vegetables entered: ", veggie);
console.log("First vegetable: ", veggie[0]);
console.log("Last vegetable: ", veggie[vegNum - 1]);
console.log("Reverse order: ", veggie.reverse())
console.log("Second vegetable: ", veggie[1]);
veggie.splice(2, 1);
veggie.splice(0, 1);
console.log("Vegetables left: ", veggie);

//---------------------CONCAT-------------------------//
var food = fruit.concat(veggie);
console.log("Foods available:", food);
// // console.log(food[0]); //check
for (let i=0; i<food.length; i++){
    // console.log("here", i, food[i]); //check
    var numOfChars = food[i].length;
    var secondChar = food[i][1];
    var reversedWord = food[i].split('').reverse().join('');
    if (i%2==0){
    //Index 0 is even and the food inside it is called pechay. 
    //The word pechay has 5 letters and the second letter is e. If you reverse it, it becomes yahcep.
        console.log('Index ' + i, "is even and the food inside it is called " + food[i] + '. The word ' + food[i] + ' has ' + numOfChars + ' letters and the second letter is ' + secondChar + '. If you reverse it, it becomes ' + reversedWord + '.');
    } else {
        console.log('Index ' + i, "is odd and the food inside it is called " + food[i] + '. The word ' + food[i] + ' has ' + numOfChars + ' letters and the second letter is ' + secondChar + '. If you reverse it, it becomes ' + reversedWord + '.');
    }
}

//---------------------USER PROMPT-------------------------//
var foodPrompt = prompt("Enter a food:");
var foodIndex = food.indexOf(foodPrompt);
if (foodIndex !== -1) {
    alert("Food is found at index#" + foodIndex + ".");
} else {
    alert("Food not found.");
}

if (food.length > 0) {
    food[0] = "START";
    food[food.length - 1] = "END";
}

for (let i = 0; i < food.length; i++) {
    food[i] = food[i].toUpperCase();
}

console.log(food);
