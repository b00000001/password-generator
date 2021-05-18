// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

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
	var promptPassword = passwordData.prompts; // Object shortcut for brevity
	var newPword = passwordData.passcontents; // Object shortcut for brevity
	var passParameters = passwordData.parameters; // Object shortcut for brevity

	if (promptPassword.pwdLength >= 8 && promptPassword.pwdLength <= 128) {
		if (promptPassword.specialChar) {
			console.log("Length of password", promptPassword.pwdLength);
			newPword.push(
				...passParameters.alphabets,
				...passParameters.specialChars
			);
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
	} else {
		return "Please enter a number between 8 and 128";
	}

	for (var i = 0; i < promptPassword.pwdLength; i++) {
		passwordData.newpassword.push(
			newPword[Math.floor(Math.random() * newPword.length)]
		);
	}
	return passwordData.newpassword.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
