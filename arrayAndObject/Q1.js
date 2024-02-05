const shoppingCart = ['Milk', 'Coffee', 'Tea', 'honey'];

// Add 'Meat' at the beginning if not already added
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

// Add 'Sugar' at the end if not already added
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

// Remove 'honey' if allergic
const allergicToHoney = true; // Set to true if allergic, false otherwise
if (allergicToHoney) {
    const indexOfHoney = shoppingCart.indexOf('honey');
    if (indexOfHoney !== -1) {
        shoppingCart.splice(indexOfHoney, 1);
    }
}

// Modify 'Tea' to 'Green Tea'
const indexOfTea = shoppingCart.indexOf('Tea');
if (indexOfTea !== -1) {
    shoppingCart[indexOfTea] = 'Green Tea';
}

// Print the updated shopping cart
console.log(shoppingCart);
