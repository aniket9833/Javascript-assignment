function regexMatch(pattern, string) {
    return new RegExp(pattern).test(string);
  }
  
  // Test the function with various patterns and strings
  console.log(regexMatch(/abc/, "abcdef"));
  console.log(regexMatch(/abc/, "ab")); 
  console.log(regexMatch(/abc/i, "Ab"));
  console.log(regexMatch(/\d+/, "123"));
  console.log(regexMatch(/\d+/, "abc")); 