// Create an instance of XMLHttpRequest
const xhr = new XMLHttpRequest();

// Initialize the request with the HTTP method (GET) and the URL of the API
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

// Define a callback function to handle the response
xhr.onreadystatechange = function() {
    // Check if the request is complete and was successful
    if (xhr.readyState === 4 && xhr.status === 200) {
        // Parse the JSON response text to an array of objects
        const users = JSON.parse(xhr.responseText);
        
        // Create an array of user names from the response data
        const userNames = users.map(user => user.name);
        
        // Log the list of user names to the browser console
        console.log('List of User Names:', userNames);

        // Output the list of user names to the browser
        document.body.innerHTML = `<h2>List of User Names</h2><ul>${userNames.map(name => `<li>${name}</li>`).join('')}</ul>`;
    }
};

// Send the request
xhr.send();
