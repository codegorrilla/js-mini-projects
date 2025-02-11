import '../scss/styles.scss';

//reversing a word/group of words
let h = 'Hello Zacks';

console.log(h.length);

let c = h.toLowerCase().substring(0, 11);

let harr = c.split(' ').reverse().join(' ').toString();

document.querySelector('.demo').innerHTML = harr;

//array slice method
const animals = ['ant', 'bison', 'camel', 'frog', 'duck', 'elephant'];

console.log(animals.slice(2));

//array splice method
const month = ['Jan', 'March', 'April', 'June'];

month.splice(1, 0, 'Feb');

console.log(month); //mutating the original array month

const addMon = month.toSpliced(4, 0, 'May'); //toSpliced method

console.log(addMon);
console.log(month); //not mutating the original array month

//'Array of' method
let someTxt = 'Dolce';

let someArr = Array.of(someTxt);

console.log(someArr);

//for of loop
for (const element of animals) {
	console.log(element);
}

//Promises
const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Success!');
	}, 1000);
});

promise
	.then((value) => {
		console.log(value);
	})
	.catch((error) => {
		console.log(error);
	});

//Async-await => syntactic sugar over promises
// async function fetchData() {
// 	const res = await fetch('http://api.example.com/data');
// 	const data = await res.json();
// 	console.log(data);
// }

fetchData();

//error handling strategies for async-await
async function fetchData() {
	try {
		const response = await fetch('http://api.example.com/data');
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error('Error', error);
	}
}

//handling rejections at the call site
async function fetchData() {
	const res = await fetch('https://api.example.com/data');
	const data = await res.json();
	console.log(data);
}

fetchData().catch((error) => {
	console.error('Error fetching', error);
});
