import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCoW0C5AZQte9hQspEvnATZllkrxlhe_MI",
  authDomain: "assignment-16cd0.firebaseapp.com",
  projectId: "assignment-16cd0",
  storageBucket: "assignment-16cd0.appspot.com",
  messagingSenderId: "668225219499",
  appId: "1:668225219499:web:4e798d573be93707e700ee"
  };
 
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth=getAuth();
  const db=getFirestore();
  const storage = getStorage();

 // homepage.js
// homepage.js
onAuthStateChanged(auth, (user)=>{
  if(user){
      console.log(user);
      const userId = user.uid;
      const docRef = doc(db, "users", userId);
      getDoc(docRef)
      .then((docSnap)=>{
          if(docSnap.exists()){
              const userData=docSnap.data();
              const userEmail = userData.email;
              document.getElementById('loggedUserName').innerText=userData.name;
              document.getElementById('loggedUserEmail').innerText=userData.email;
              document.getElementById('loggedUserPhone').innerText=userData.phone;

              getDownloadURL(ref(storage, userEmail))
              .then((url) => {
                const img = document.getElementById('profile-image');
                img.setAttribute('src', url);
              })
              .catch((error) => {
                console.error('Error getting download URL:', error);
              });
          }
          else{
              console.log("no document found matching id")
          }
      })
      .catch((error)=>{
          console.log("Error getting document");
      })
  }
  else{
      console.log("User  not found")
  }
})

  const logoutButton=document.getElementById('logout');

  logoutButton.addEventListener('click',()=>{
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
    .then(()=>{
        window.location.href='index.html';
    })
    .catch((error)=>{
        console.error('Error Signing out:', error);
    })
  })