var emailSignUp = document.getElementById("emailSignUp")
var passwordSignUp = document.getElementById("passwordSignUp")



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

var firebaseConfig = {
  apiKey: "AIzaSyA4GkzE2JuKxDa6q8yDAcPJ_GM5iYk7MbA",
  authDomain: "todoapp-hm.firebaseapp.com",
  projectId: "todoapp-hm",
  storageBucket: "todoapp-hm.appspot.com",
  messagingSenderId: "533112366388",
  appId: "1:533112366388:web:70741779ac5d03aa5f3161",
  measurementId: "G-L631BGYDEW"
};
var app = initializeApp(firebaseConfig);
var auth = getAuth(app);
window.emailSignUp = function(){
    
    
        var gmail=  emailSignUp.value
        var password=passwordSignUp.value
        // console.log(gmail, password);
    
    createUserWithEmailAndPassword(auth, gmail, password)
    .then (function(userCredential){
        
        // Signed up 
        var user = userCredential.user;
        // console.log(userCredential);
        window.location.replace("../index.html")     
    })
    .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode)
        
        // ..
    });
}



