// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAsxP7800jePBaxf0SRRTpwpurIhzDBXJA",
    authDomain: "c100-pro.firebaseapp.com",
    databaseURL: "https://c100-pro-default-rtdb.firebaseio.com",
    projectId: "c100-pro",
    storageBucket: "c100-pro.appspot.com",
    messagingSenderId: "627758811426",
    appId: "1:627758811426:web:b72d64493e45a715c53d7b",
    measurementId: "G-9JYBZNFXP7"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser() {
    user_name= document.getElementById("user_name").value;

    localStorage.setItem("user_name",user_name)
    
    
    window.location="kwitter_room.html";

}




