import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

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
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();


const googleButton = document.querySelector(".google-btn");
googleButton.addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            window.location.href="/qixer/home";
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`${errorCode}: ${errorMessage}`);            
        });
})
