 // Note to Self:  Only works when use module in "type:"

    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
    import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
  
    // My Firebase API configuration
    const firebaseConfig = {
      apiKey: "AIzaSyCipaADEfrbZ-I4jrw8ZtyFEjLRX6FzWEo",
      authDomain: "project-manhattan-d14e3.firebaseapp.com",
      databaseURL: "https://project-manhattan-d14e3-default-rtdb.firebaseio.com",
      projectId: "project-manhattan-d14e3",
      storageBucket: "project-manhattan-d14e3.appspot.com",
      messagingSenderId: "437681308358",
      appId: "1:437681308358:web:0dd1e2f84792e297010dc7",
    //   measurementId: "G-GGHYJ4ZM59"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);


    document.getElementById("signup").addEventListener('click' , function() {
        const email = document.getElementById("email").value
        const password = document.getElementById("pass").value
        
        createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log("User created!");
    window.location.href="./Cryptocurrency-Dashboard/Dashboard/dash.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorCode + errorMessage);   
  });

}) 

      document.getElementById("signin").addEventListener('click' , function() {
        const email = document.getElementById("email").value
        const password = document.getElementById("pass").value

        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log("User signed in!");
    window.location.href="./Cryptocurrency-Dashboard/Dashboard/dash.html";

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + errorMessage);

  });
       
})
// Sign Out function
    //     document.getElementById("signout").addEventListener('click' , function() {
    //       signOut(auth).then(() => {
    //         User signed out
    //         console.log("User signed out successful!");
    //     })
    //       .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //           consol.log(errorCode + errorMessage);
    // });
  // })
  