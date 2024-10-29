// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANymUpRnlZeXPYYgTwtdZR_UJS48leOIg",
    authDomain: "st-terresa-school.firebaseapp.com",
    projectId: "st-terresa-school",
    storageBucket: "st-terresa-school.appspot.com",
    messagingSenderId: "307507565310",
    appId: "1:307507565310:web:2c3761d18f1e08af8c0baf",
    measurementId: "G-LTK54EPJLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to toggle between login and registration forms
function toggleForms() {
    const loginSection = document.getElementById('login-section');
    const registerSection = document.getElementById('register-section');
    if (loginSection.style.display === 'none') {
        loginSection.style.display = 'block';
        registerSection.style.display = 'none';
    } else {
        loginSection.style.display = 'none';
        registerSection.style.display = 'block';
    }
}

// Function to handle user registration
async function registerUser() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Registration successful!");
        toggleForms(); // Switch to login form after registration
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

// Function to handle user login
async function loginUser() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        document.getElementById('user-name').innerText = email; // Set user name or email
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('content-section').style.display = 'block'; // Show content section
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

// Function to handle logout
async function logout() {
    try {
        await signOut(auth);
        alert("You have logged out.");
        document.getElementById('content-section').style.display = 'none';
        document.getElementById('login-section').style.display = 'block'; // Show login section
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}
