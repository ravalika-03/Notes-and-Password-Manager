// Function to register a new user
function registerUser() {
    let email = document.getElementById("reg-email").value.trim();
    let password = document.getElementById("reg-password").value.trim();
    let passkey = document.getElementById("reg-passkey").value.trim();
    if (!email || !password || !passkey) {
    alert("Please fill all fields!");
    return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    // Check if the email is already registered
    if (users.some(user => user.email === email)) {
    alert("Email is already registered! Please log in.");
    return;
    }
    // Save new user
    users.push({ email, password, passkey, passwords: [] });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! Please log in.");
    window.location.href = "login.html"; // Redirect to login page
    }
// Function to log in the user
function loginUser() {
    let email = document.getElementById("login-email").value.trim();
    let password = document.getElementById("login-password").value.trim();
    if (!email || !password) {
    alert("Please enter your email and password!");
    return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(user => user.email === email && user.password === password);
    if (!user) {
    alert("Invalid email or password!");
    return;
    }
    localStorage.setItem("loggedInUser", JSON.stringify(user)); // Store session data
    alert("Login successful!");
    window.location.href = "home.html"; // Redirect to home page
    }
    // Function to log out
    function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
    }
