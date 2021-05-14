// Assignment Code
var generateBtn = document.querySelector("#generate");

passwordComponents = {
	alphabets: "abcdefghijklmnopqrstuvwxyz".split(),
};

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
	var newpassword;
	var pwdLength = prompt(
		"Please enter the length of the password you wish you use [Between 2 and 8]."
	);
	var specialChar = confirm("Do you wish you use special characters?");

	if (specialChar) {
		var specialChar_settings = {
			specialChar_upper: confirm("Upper case characters allowed?"),
			specialChar_lower: confirm("Lower case characters allowed?"),
			specialChar_numeric: confirm("Numeric case characters allowed?"),
		};
	}
	for (var i = 0; i < pwdLength; i++) {
		if (specialChar) {
		}
	}
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
