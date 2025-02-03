import '../scss/main.scss';

//spread and rest operator
//spread operator
const arr = [1, 2, 3, 4, 5];
const arr2 = [...arr, 6, 7, 8];

console.log(arr2);

//spread operator 2
const alp1 = ['a', 'b', 'c'];
const alp2 = ['d', 'e', 'f'];

const joinAlp = [...alp1, ...alp2];

console.log(joinAlp);

//rest operator
const num = (...args) => {
	console.log(args);
};

num(alp1, alp2);

const sum = (...args) => {
	let total = 0;

	for (const arg of args) {
		total += arg;
	}

	return total;
};

console.log(sum(2, 3, 4));
console.log(sum('1', '2', '4'));

//reverse a string => input : 'hello' ------>> 'olleh'
function reverseString(str) {
	if (str === '') {
		return '';
	} else {
		return reverseString(str.substring(1)) + str.charAt(0);
	}
}

document.getElementById('text').innerHTML = reverseString('sanjib');

const word = 'Hello';

//console.log('the alphabet is:' + word.substring(1));

//delete operator
