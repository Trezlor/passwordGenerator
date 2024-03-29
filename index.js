const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '1234567890';
const symbols = '!@#$%^&*?';

const numberInput = document.getElementById('number_input');

const symbolsCheckbox = document.getElementById('symbols_checkbox');
const numbersCheckbox = document.getElementById('numbers_checkbox');

const passwordOne = document.getElementById('pw_1');
const passwordTwo = document.getElementById('pw_2');
const passwordThree = document.getElementById('pw_3');
const passwordFour = document.getElementById('pw_4');

function generatePassword() {
	let generatedPasswordOne = '';
	let generatedPasswordTwo = '';
	let generatedPasswordThree = '';
	let generatedPasswordFour = '';

	// TO PREVENT VALUES TO BE < 15 AND > THAN 33, WHILE ALSO SETTING THE VALUE TO CLOSEST OF 15-33 IF THEY ARE OUT OF RANGE
	const allowedValue = numberInput.value < 6 ? 6 : numberInput.value > 33 ? 33 : numberInput.value;
	numberInput.value = allowedValue;
	// TO REJECT VALUES OUT OF RANGE
	if (numberInput.value < 6 || numberInput.value > 33) return;

	// TO LET USER CHOOSE TO HAVE NUMBERS/SYMBOLS INCLUDED
	const characters =
		symbolsCheckbox.checked && numbersCheckbox.checked
			? letters + numbers + symbols
			: symbolsCheckbox.checked && numbersCheckbox.checked != true
			? letters + symbols
			: symbolsCheckbox.checked != true && numbersCheckbox.checked
			? letters + numbers
			: letters;

	for (let i = 0; i < numberInput.value; i++) {
		generatedPasswordOne += characters.charAt(Math.floor(Math.random() * characters.length));
		generatedPasswordTwo += characters.charAt(Math.floor(Math.random() * characters.length));
		generatedPasswordThree += characters.charAt(Math.floor(Math.random() * characters.length));
		generatedPasswordFour += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	passwordOne.textContent = generatedPasswordOne;
	passwordTwo.textContent = generatedPasswordTwo;
	passwordThree.textContent = generatedPasswordThree;
	passwordFour.textContent = generatedPasswordFour;
}

const copyPassword = (password, num) => {
	const test = password.textContent;

	if (test !== 'Copied!' && test !== 'Password ' + num) {
		navigator.clipboard.writeText(test);

		password.textContent = 'Copied!';

		setTimeout(function () {
			password.textContent = test;
		}, 800);
	}
};
