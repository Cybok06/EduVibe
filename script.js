// An array of user objects, each containing username, password, and additional details
const users = [
    {
        username: "GA123",
        password: "password1",
        phone: "+1234567890",
        
    },
    {
        username: "user1",
        password: "password2",
        phone: "+1234567891",
        
    },
    {
        username: "user2",
        password: "password3",
        phone: "+1234567892",
        
    },
    {
        username: "manager",
        password: "password4",
        phone: "+1234567893",
       
    },
    {
        username: "guest",
        password: "guest123",
        phone: "+1234567894",
        
    }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the entered username and password
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    // Find the user object in the users array that matches the entered username and password
    const user = users.find(user => user.username === enteredUsername && user.password === enteredPassword);

    if (user) {
        // If a matching user is found, redirect to the main page
        // Optionally, you can pass user details to the main page (e.g., using sessionStorage or localStorage)
        sessionStorage.setItem('user', JSON.stringify(user));
        window.location.href = "main.html"; // Redirect to main page
    } else {
        // If no match is found, display an error message
        document.getElementById('error-message').style.display = "block";
    }
});
// Get the "Get account" link and the contact info container
const getAccountLink = document.getElementById('contact-link');
const contactInfo = document.getElementById('contact-info');

// Event listener for when "Get account" is clicked
getAccountLink.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default link behavior
    // Show the contact info
    contactInfo.style.display = 'block';
    // Hide the "Get account" link
    getAccountLink.style.display = 'none';
});
// Array of background images
const backgrounds = [
    'edupic.jpg', 
    'edupic3.jpg', 
    'edupic4.jpg'
];

// Counter for the background images
let currentBackgroundIndex = 0;

// Function to change the background image
function changeBackground() {
    // Set the next background image
    document.body.style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;

    // Update the index for the next background image
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
}

// Call the changeBackground function every 5 seconds (5000 milliseconds)
setInterval(changeBackground, 5000);
