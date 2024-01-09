function calculateTax() {
  // Tax rates based on income ranges using closures
  function calculateTaxAmount(income) {
    if (income <= 10000) {
      return income * 0.1; // 10% tax rate for income <= 10,000
    } else if (income > 10000 && income <= 50000) {
      return income * 0.2; // 20% tax rate for 10,001 - 50,000
    } else {
      return income * 0.3; // 30% tax rate for income > 50,000
    }
  }

  return calculateTaxAmount;
}

// Testing the function with various incomes
const taxCalculator = calculateTax();

// Example incomes
const income1 = 8000;
const income2 = 30000;
const income3 = 60000;

// Calculating tax for different incomes
const tax1 = taxCalculator(income1);
const tax2 = taxCalculator(income2);
const tax3 = taxCalculator(income3);

console.log(`Tax for income ${income1}: ${tax1}`);
console.log(`Tax for income ${income2}: ${tax2}`);
console.log(`Tax for income ${income3}: ${tax3}`);
