// fetch-data.js

// Predefined list of names
const names = [
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

// Function to display the list of names
function displayNames() {
    // Select the HTML element where the names will be displayed
    const dataContainer = document.getElementById('api-data');
    
    // Clear any existing content
    dataContainer.innerHTML = '';
    
    // Create a <ul> element to hold the names
    const userList = document.createElement('ul');
    
    // Loop through the names array
    names.forEach(name => {
        // Create a <li> element for each name
        const listItem = document.createElement('li');
        // Set the text content to the name
        listItem.textContent = name;
        // Append the <li> to the <ul>
        userList.appendChild(listItem);
    });
    
    // Append the <ul> to the data container
    dataContainer.appendChild(userList);
}

// Invoke the displayNames function when the DOM content has fully loaded
document.addEventListener('DOMContentLoaded', displayNames);
