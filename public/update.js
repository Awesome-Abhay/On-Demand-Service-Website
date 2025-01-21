import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBAmww-NyJNEIUuFsXrBtLb6vRJ4efuVAg",
    authDomain: "authorization-91925.firebaseapp.com",
    projectId: "authorization-91925",
    storageBucket: "authorization-91925.firebasestorage.app",
    messagingSenderId: "221305382421",
    appId: "1:221305382421:web:b62d640d2079358de7101c",
    measurementId: "G-9XQJHMGE9Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


document.querySelector("nav .profile img").addEventListener('click', () => {
    document.getElementById("logoutDialog").style.display = "block";
});

document.getElementById("closeDialog").addEventListener('click', () => {
    document.getElementById("logoutDialog").style.display = "none";
});

document.getElementById("logoutButton").addEventListener('click', () => {
    auth.signOut().then(() => {
        window.location.href = "http://localhost:3000/qixer"; // Redirect to login page
    }).catch((error) => {
        console.error("Logout error:", error);
    });
});

// Close the dialog if the user clicks outside of it
window.onclick = function(event) {
    const dialog = document.getElementById("logoutDialog");
    if (event.target != document.querySelector("nav .profile img")) {
        dialog.style.display = "none";
    }
};



async function updateUserProfile(user){

    // const userName= user.displayName;
    // const userEmail= user.email;
    const userProfilePicture= await user.photoURL;        
    document.querySelector("nav .profile img").src= userProfilePicture;
}

onAuthStateChanged(auth, (user)=>{
    if(user){
        updateUserProfile(user);
        const uid= user.uid;
        return uid;
    }else{
        alert("Create account and login");
        window.location.href="register.html";
    }
})
