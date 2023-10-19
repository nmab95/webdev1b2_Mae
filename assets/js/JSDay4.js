var softDrinks = ["Coke", "Pepsi", "Sprite"];
console.log(softDrinks[0]);

var num="3";
num = Number(num);
//num = parseInt(num);
console.log(typeof num);

var float="3.135";
float = parseFloat(float);
console.log(typeof float);

var str=15;
str = str.toString(2);
console.log(str);

let firstName = "Mark";
console.log(firstName.length);
console.log(firstName[0]);
let lastName = 'ZuCkErBerg';
var toLower = lastName.toLowerCase();
var toUpper = lastName.toUpperCase();
console.log(toUpper);
console.log(toLower);

var favorites = ["Dog", "Cat", "Rabbit", "Hamster"];
favorites.pop();
console.log('[POP]Remove last item: \n');
console.log(favorites);
// for (var x=0; x<=3; x++){
//     console.log('['+x+']' + favorites[x]);
// } console.log('\n');

favorites.push("Ice cream");
console.log('[PUSH]Add item: \n');
console.log(favorites);
// for (var x=0; x<=3; x++){
//     console.log('['+x+']' + favorites[x]);
// } console.log('\n');

favorites[1]="Books";
console.log('Replace item [1]: \n');
console.log(favorites);
// for (var x=0; x<=3; x++){
//     console.log('['+x+']' + favorites[x]);
// } console.log('\n');

favorites.push("TBBT");
var mostFavorite = favorites.slice(1);
console.log('[SLICE]New array: \n');
console.log(mostFavorite);
// for (var x=0; x<=3; x++){
//     console.log('['+x+']' + mostFavorite[x]);
// } console.log('\n');

console.log('Sort alphabetically: ');
favorites.sort();
console.log(favorites);
// for (var x=0; x<=3; x++){
//     console.log('['+x+']' + favorites[x]);
// } console.log('\n');