var favorites = ["Books", "Games", "Kindle"];
console.log(favorites);

var temp = favorites[0];
favorites[0] = favorites[1];
favorites[1] = temp;
console.log(favorites);

var toAdd = confirm('Add an item?');
if (toAdd == true) {
    var itemAdd = prompt('Item to add: ');
    favorites.push(itemAdd);
    console.log(favorites);
} else {
    var toSubtract = confirm('Remove an item?');
    if (toSubtract == true){
        var itemSubtract = prompt('Item to subtract: ');
        var index = favorites.indexOf(itemSubtract);
        favorites.splice(index,1);
        console.log(favorites);
    }
}

