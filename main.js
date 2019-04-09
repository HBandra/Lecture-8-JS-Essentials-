// 1.Build a function that does currency converter from USD to UAH (1 USD = 8 UAH).

function convert(G) {
	const UAN = 8;
	const sum = G * UAN;
	return sum;
}
convert(2);

// 2. A function which returns reversed string

function reverseStr(str) {
	let newStr = '';
	for (i = str.length - 1; i >= 0; i--) {
		newStr += str.charAt(i);
	}
	return newStr;
}
console.log(reverseStr('abc'));


// 3.A function which prints the stair picture of size n

function printStairs(n) {
	for (let i = 0; i < n; i++) {
		let s = '';
		for (let j = 0; j < n; j++) {
			if (n - i - 2 < j) {
				s +='#';
			} else {
				s += ' ';
			}
		}
	console.log(s);	
	}
}
printStairs(3);

// 4. A function which returns total sum of a range alert

function sumRange(start, end) {
	const a = start;
	const b = end;
	let sum = 0;
	for (let i = a; i <= b; i++) {
		sum += i;
			}
	console.log(sum);
	return sum;
}
sumRange(2, 4);
sumRange(-1, 3);

// 5.Write a function which returns the smallest of three numbers

function min(a, b, c) {
	const min = Math.min(a, b, c);
	console.log(min);
}
min(10, 5, 11);
min(3, 8, 4);

//6.A function which prints the pyramid picture of size n

function printPyramid(n) {
	for (let i = 0; i < n; i++) {
		let str = '';
		for (let j = 1; j < n - i; j++) {
			str = str + ' ';
		}
		for (let k = 1; k <= (2 * i + 1); k++) {
			str = str + '#';
		}
		console.log(str);
	}
}
printPyramid(3);

//7.A function which transforms first and last letter to uppercase (use built in string’s method).

function firstAndLastToUpper(str) {
	let firstLetter = str.substring(0, 1);
	let lastLetter = str.substring(1, str.length - 1);
	let middle = str.substring(1, str.length - 1);
	let newWord = firstLetter.toUpperCase() + middle + lastLetter.toUpperCase();

	console.log(newWord);
	return newWord;
}
firstAndLastToUpper("abc");

//8.A function which returns true if string contains ironman or cursor or ostap otherwise returns false. The function must be case-insensitive.

function cursorCheck(str) {
	let st = str.toLowerCase();
	return st.indexOf("ironman") == -1 && st.indexOf("ostap") == -1 && st.indexOf("cursor") == -1;
}
console.log(cursorCheck('I am OstaP'));
console.log(cursorCheck('Superman is here'));

//9. A function which returns a string with all letters in uppercase (without built in string’s method). The function supports only english alphabet.

function toUppercase(str) {
	let strSplit = str.split('');
	let res = strSplit.map(function (item) {
		if ((item.charCodeAt(0)) >= 97 && item.charCodeAt(0) <= 122) {
			return String.fromCharCode(item.charCodeAt(0) - 32)
		} else {
			return item;
		}
	}).join("")
	console.log(res);
	return res;
}
toUppercase('abc');

//10. A function which removes duplication of letters in string. The function must be case-insensitive.

function removeDuplicationLetters(str) {
	let rst = str.charAt(0);
	for (let i = 1; i < str.length; i++) {
		let isExist = rst.search(str.charAt(i));
		isExist >= 0 ? 0 : (rst += str.charAt(i));
		return rst;
	}
	console.log(rst);
	return rst;
}
removeDuplicationLetters('Hello I am Iron Man')

//11.A function that when given a number n returns the n-th number in the Fibonacci Sequence. The sequence starts from 1 and looks like this: 1, 1, 2, 3, 5, 8, 13, 21…

function fibonacci(n) {
	if (n < 2) {
		return n;
	} else {
		return (fibonacci(n - 1) + fibonacci(n - 2))
	}
}
console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(7));








