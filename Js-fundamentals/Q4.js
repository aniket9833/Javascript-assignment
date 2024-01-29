function extractDateInfo(pattern, inputString) {
    // Create a regex object with the provided pattern
    const regex = new RegExp(pattern);
  
    // Use the exec method to find the first match
    const match = regex.exec(inputString);
  
    // Check if there is a match
    if (match) {
      // Extract specific parts using groups
      const day = match[1] || 'N/A';
      const month = match[2] || 'N/A';
      const year = match[3] || 'N/A';
  
      // Output the extracted information
      console.log('Match found!');
      console.log(`Day: ${day}`);
      console.log(`Month: ${month}`);
      console.log(`Year: ${year}`);
    } else {
      console.log('No match found.');
    }
  }
  
  // Test with different date patterns
  const datePattern1 = /(\d{2})-(\d{2})-(\d{4})/;
  const datePattern2 = /(\w+) (\d{2}), (\d{4})/;
  const datePattern3 = /(\d{2})\/(\d{2})\/(\d{4})/;
  
  const testString1 = '01-15-2022';
  const testString2 = 'February 25, 2023';
  const testString3 = '03/10/2024';
  
  // Test the function with different patterns and strings
  extractDateInfo(datePattern1, testString1);
  extractDateInfo(datePattern2, testString2);
  extractDateInfo(datePattern3, testString3);
  