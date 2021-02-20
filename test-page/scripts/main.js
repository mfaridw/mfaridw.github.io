const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
let myVariable = 'Rid';
myVariable = 'Ria';
myVariable;
let iceCream = 'Coklat';
if (iceCream === 'Coklatos') {
	alert('Ye, aku suka es krim coklat!');
} else {
	alert('iew, padahal aku suka coklat...');
}

//Function
function multiply(num1, num2) {
	let result = num1 * num2;
	return result;
}
multiply(4, 7);
document.querySelector('html').onclick = function() {
	alert('Ouch! Stop poking me!');
}