function searchCharacterClasses(inputString) {
    // Define regular expressions for character classes
    const digitPattern = /\d/g;                    // Matches digits
    const uppercaseLetterPattern = /[A-Z]/g;       // Matches uppercase letters
    const lowercaseLetterPattern = /[a-z]/g;       // Matches lowercase letters
    const specialCharacterPattern = /[^A-Za-z0-9]/g; // Matches special characters (non-alphanumeric)
  
    // Find matches for each character class
    const digits = inputString.match(digitPattern);
    const uppercaseLetters = inputString.match(uppercaseLetterPattern);
    const lowercaseLetters = inputString.match(lowercaseLetterPattern);
    const specialCharacters = inputString.match(specialCharacterPattern);
  
    // Return an object containing the matches for each character class
    return {
      digits,
      uppercaseLetters,
      lowercaseLetters,
      specialCharacters,
    };
  }
  
  // Example test
  const testString = "Hello123!";
  
  const result = searchCharacterClasses(testString);
  
  console.log("Original String:", testString);
  console.log("Digits:", result.digits);
  console.log("Uppercase Letters:", result.uppercaseLetters);
  console.log("Lowercase Letters:", result.lowercaseLetters);
  console.log("Special Characters:", result.specialCharacters);
  