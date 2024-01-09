function curry(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func(...args);
      } else {
        return function(...nextArgs) {
          return curried(...args.concat(nextArgs));
        };
      }
    };
  }
  
  // Function to add two numbers
  function add(x, y) {
    return x + y;
  }
  
  // Testing the curry function with the add function
  const curriedAdd = curry(add);
  
  // Providing arguments one at a time
  const result = curriedAdd(5)(10); // Providing arguments one at a time
  console.log(result); // Output: 15
  