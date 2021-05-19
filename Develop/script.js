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
			// holds all the prompts for app.
			pwdLength: prompt(
				"Please enter the length of the password you wish you use [Between 8 and 128]."
			),
		},
		passcontents: [], // Will hold the possible characters for password
		newpassword: [], // Array for holding the randomly selected password characters.
		parameters: {
			// Holds all the possible characters for randomly generated pass.
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

	if (
		passwordData.prompts.pwdLength >= 8 &&
		passwordData.prompts.pwdLength <= 128
	) {
		passwordData.prompts = {
			specialChar: confirm("Do you wish you use special characters?"),
			numberChar: confirm("Do you wish you use numerical values?"),
			upperChar: confirm("Do you want to use Upper case letters?"),
		};

		if (passwordData.prompts.specialChar) {
			console.log("Length of password", passwordData.prompts.pwdLength);
			passwordData.newpassword.push(
				...passwordData.parameters.alphabets,
				...passwordData.parameters.specialChars
			);
			console.log(typeof passwordData.newpassword, passwordData.newpassword);
		} else {
			passwordData.newpassword.push(...passwordData.parameters.alphabets);
		}
		if (passwordData.prompts.numberChar) {
			passwordData.newpassword.push(...passwordData.parameters.numberChars);
			console.log(typeof passwordData.newpassword, passwordData.newpassword);
		}
		if (passwordData.prompts.upperChar) {
			passwordData.newpassword.push(...passwordData.parameters.upperChar);
			console.log(typeof passwordData.newpassword, passwordData.newpassword);
		}
	} else {
		alert("Please enter a number between 8 and 128");
	}

	for (var i = 0; i < passwordData.prompts.pwdLength; i++) {
		passwordData.newpassword.push(
			passwordData.newpassword[
				Math.floor(Math.random() * passwordData.newpassword.length)
			]
		);
	}
	return passwordData.newpassword.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
