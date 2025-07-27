// Function to load passwords for the logged-in user
function loadPasswords() {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
    alert("You must log in first!");
    window.location.href = "login.html";
    return;
    }
    let table = document.getElementById("passwordTable");
    table.innerHTML = ""; // Clear previous entries
    loggedInUser.passwords.forEach((entry, index) => {
    let row = `
    <tr>
    <td>${entry.website}</td>
    <td>${entry.username}</td>
    <td id="password-${index}">*****</td>
    <td>
    <button class="show-btn" onclick="showPassword(${index})">Show</button>
    <button class="delete-btn" onclick="deletePassword(${index})">Delete</button>
</td>
</tr>
`;
table.innerHTML += row;
});
}
// Function to add a new password (saved per user)
function addNewPassword() {
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
if (!loggedInUser) {
alert("You must log in first!");
window.location.href = "login.html";
return;
}
let website = prompt("Enter Website:");
let username = prompt("Enter Username:");
let password = prompt("Enter Password:");
if (!website || !username || !password) {
alert("Please fill all fields!");
return;
}
if (!loggedInUser.passwords) {
loggedInUser.passwords = [];
}
loggedInUser.passwords.push({ website, username, password });
// Update users list
let users = JSON.parse(localStorage.getItem("users")) || [];
let userIndex = users.findIndex(user => user.email === loggedInUser.email);
if (userIndex !== -1) {
users[userIndex] = loggedInUser;
}
localStorage.setItem("users", JSON.stringify(users));
localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser)); // Update session
loadPasswords(); // Refresh the table
}
// Function to show password (requires passkey)
function showPassword(index) {
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
let passkeyInput = prompt("Enter Passkey:");
if (passkeyInput === loggedInUser.passkey) {
document.getElementById(`password-${index}`).innerText = loggedInUser.passwords[index].password;
} else {
alert("Incorrect Passkey!");
}
}
// Function to delete a password
function deletePassword(index) {
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
if (!loggedInUser) {
    alert("You must log in first!");
    window.location.href = "login.html";
    return;
    }
    loggedInUser.passwords.splice(index, 1);
    // Update storage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userIndex = users.findIndex(user => user.email === loggedInUser.email);
    if (userIndex !== -1) {
    users[userIndex] = loggedInUser;
    }
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    loadPasswords();
    }
    // Function to go back to Home Page
    function goHome() {
    window.location.href = "home.html"; // Redirect to Home Page
    }
    // Function to logout
    function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
    }
    // Load passwords on page load
    window.onload = loadPasswords;
