const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
const sortedAges = ages.sort((a, b) => a - b);

// Find the min and max age
const minAge = sortedAges[0];
const maxAge = sortedAges[sortedAges.length - 1];

// Find the median age
const middleIndex = Math.floor(sortedAges.length / 2);
const medianAge = sortedAges.length % 2 === 0
  ? (sortedAges[middleIndex - 1] + sortedAges[middleIndex]) / 2
  : sortedAges[middleIndex];

// Find the average age
const sumAges = sortedAges.reduce((acc, age) => acc + age, 0);
const averageAge = sumAges / sortedAges.length;

// Find the range of ages
const ageRange = maxAge - minAge;

// Compare (min - average) and (max - average) using abs() method
const diffMinAverage = Math.abs(minAge - averageAge);
const diffMaxAverage = Math.abs(maxAge - averageAge);

// Print the results
console.log('Sorted Ages:', sortedAges);
console.log('Min Age:', minAge);
console.log('Max Age:', maxAge);
console.log('Median Age:', medianAge);
console.log('Average Age:', averageAge);
console.log('Age Range:', ageRange);
console.log('Min - Average:', diffMinAverage);
console.log('Max - Average:', diffMaxAverage);
