var lowToUpper = prompt('Enter a sentence in lower case: ');
lowToUpper = lowToUpper.toUpperCase();
console.log('Upper Case: ', lowToUpper);

var upToLower = prompt('Enter a sentence in upper case: ');
upToLower = upToLower.toLowerCase();
console.log('Lower Case: ', upToLower);

var word1 = prompt('Enter first word to compare: ');
var word2 = prompt('Enter second word to compare: ');

if (word1 = word2) {
    alert('The words you entered are the same!');
} else {
    alert ('Sorry, the words you entered are different.');
}
