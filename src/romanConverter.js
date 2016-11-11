function convertToRoman(num) {
	var roman = ""; 
	var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
	var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	for (var i=0; i<numbers.length; i++) {
		while(num>=numbers[i]) {
			roman = roman + romanNumeral[i];	//Add its equivalent roman numeral to our empty string
			num = num - numbers[i];				//Substract the value from original number to end the while loop
		}
	}
	return roman;
}

convertToRoman(36);
