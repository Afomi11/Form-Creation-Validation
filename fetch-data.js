// fetch-data.js

// Define the API URL
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Predefined list of names for testing
const predefinedNames = [
    "Leanne Graham",
    "Ervin Howell",
    "Clementine Bauch",
    "Patricia Lebsack",
    "Chelsey Dietrich",
    "Mrs. Dennis Schulist",
    "Kurtis Weissnat",
    "Nicholas Runolfsdottir V",
    "Glenna Reichert",
    "Clementina DuBuque"
];

// Function to fetch and display user data
async function fetchUserData() {
    // Select the HTML element where the data will be displayed
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Convert the response to JSON
        const users = await response.json();
        
        // Clear the loading message
        dataContainer.innerHTML = '';
        
        // Create a <ul> element to hold the user names
        const userList = document.createElement('ul');
        
        // Loop through the users array
        users.forEach(user => {
            // Create a <li> element for each user
            const listItem = document.createElement('li');
            // Set the text content to the user's name
            listItem.textContent = user.name;
            // Append the <li> to the <ul>
            userList.appendChild(listItem);
        });
        
        // Append the <ul> to the data container
        dataContainer.appendChild(userList);
        
        // Also display the predefined names
        displayPredefinedNames();
    } catch (error) {
        // Handle any errors that occur during the fetch operation
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Function to display predefined names
function displayPredefinedNames() {
    // Select the HTML element where the predefined names will be displayed
    const predefinedNamesContainer = document.getElementById('predefined-names');
    
    // Create a <ul> element to hold the predefined names
    const predefinedList = document.createElement('ul');
    
    // Loop through the predefined names array
    predefinedNames.forEach(name => {
        // Create a <li> element for each predefined name
        const listItem = document.createElement('li');
        // Set the text content to the predefined name
        listItem.textContent = name;
        // Append the <li> to the <ul>
        predefinedList.appendChild(listItem);
    });
    
    // Append the <ul> to the predefined names container
    predefinedNamesContainer.appendChild(predefinedList);
}

// Invoke the fetchUserData function when the DOM content has fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);

