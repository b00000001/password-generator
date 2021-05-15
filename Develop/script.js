// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// window.confirm();
//window.prompt();
//window.alert();
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
function generatePassword() {
	var passwordData = {
		prompts: {
			pwdLength: prompt(
				"Please enter the length of the password you wish you use [Between 8 and 128]."
			),
			specialChar: confirm("Do you wish you use special characters?"),
			numberChar: confirm("Do you wish you use numerical values?"),
			upperChar: confirm("Do you want to use Upper case letters?"),
		},
		passcontents: [],
		newpassword: [],
		parameters: {
			alphabets: [
				"a",
				"b",
				"c",
				"d",
				"e",
				"f",
				"g",
				"h",
				"i",
				"j",
				"k",
				"l",
				"m",
				"n",
				"o",
				"p",
				"q",
				"r",
				"s",
				"t",
				"u",
				"v",
				"w",
				"x",
				"y",
				"z",
			],
			specialChars: ["~", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-"],
			numberChars: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
			upperChar: [
				"A",
				"B",
				"C",
				"D",
				"E",
				"F",
				"G",
				"H",
				"I",
				"J",
				"K",
				"L",
				"M",
				"N",
				"O",
				"P",
				"Q",
				"R",
				"S",
				"T",
				"U",
				"V",
				"W",
				"X",
				"Y",
				"Z",
			],
		},
	};
	var promptPassword = passwordData.prompts;
	var newPword = passwordData.passcontents;
	var passParameters = passwordData.parameters;
	if (promptPassword.specialChar) {
		console.log("Length of password", promptPassword.pwdLength);
		newPword.push(...passParameters.alphabets, ...passParameters.specialChars);
		console.log(typeof newPword, newPword);
	} else {
		newPword.push(...passParameters.alphabets);
	}
	if (promptPassword.numberChar) {
		newPword.push(...passParameters.numberChars);
		console.log(typeof newPword, newPword);
	}
	if (promptPassword.upperChar) {
		newPword.push(...passParameters.upperChar);
		console.log(typeof newPword, newPword);
	}
	for (var i = 0; i < promptPassword.pwdLength; i++) {
		passwordData.newpassword.push(
			newPword[Math.floor(Math.random() * newPword.length)]
		);
	}
	return passwordData.newpassword.join("");
}

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
