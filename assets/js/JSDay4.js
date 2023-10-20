// var softDrinks = ["Coke", "Pepsi", "Sprite"];
// console.log(softDrinks[0]);

// var num="3";
// num = Number(num);
// //num = parseInt(num);
// console.log(typeof num);

// var float="3.135";
// float = parseFloat(float);
// console.log(typeof float);

// var str=15;
// str = str.toString(2);
// console.log(str);

// let firstName = "Mark";
// console.log(firstName.length);
// console.log(firstName[0]);
// let lastName = 'ZuCkErBerg';
// var toLower = lastName.toLowerCase();
// var toUpper = lastName.toUpperCase();
// console.log(toUpper);
// console.log(toLower);

// var favorites = ["Dog", "Cat", "Rabbit", "Hamster"];
// favorites.pop();
// console.log('[POP]Remove last item: \n');
// console.log(favorites);

// favorites.push("Ice cream");
// console.log('[PUSH]Add item: \n');
// console.log(favorites);

// favorites[1]="Books";
// console.log('Replace item [1]: \n');
// console.log(favorites);

// favorites.push("TBBT");
// var mostFavorite = favorites.slice(1);
// console.log('[SLICE]New array: \n');
// console.log(mostFavorite);

// console.log('Sort alphabetically: ');
// favorites.sort();
// console.log(favorites);

// var cars = ['Honda', 'Toyota', 'Kia', 'Isuzu'];
// var cars2 = ['BMW', 'Porsche', 'Lamborghini'];
// console.log(cars);
// console.log('Using at:', cars.at(2));
// cars[3]='Mercedez Benz';
// console.log(cars);
// console.log('Concatenated: ', cars.concat(cars2));
// console.log(cars);
// cars = cars.concat(cars2);
// console.log(cars);
// console.log(cars.length);
// console.log(cars2.length);
// console.log('During sort', cars.sort());
// console.log('After sort', cars);
// console.log('Reverse', cars.reverse());
// console.log('Before push', cars2);
// cars2.push('Ferrari');
// console.log('after push', cars2);
// var removeCar=cars2.pop();
// console.log(cars2);
// console.log(removeCar);
// console.log(cars.splice(3,2));
// console.log(cars);

let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}