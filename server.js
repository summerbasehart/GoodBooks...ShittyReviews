const firebaseConfig = {
    apiKey: "AIzaSyDMGYd1hzTMJgpnA4XZOTsMK3D4-lkoNJc",
    authDomain: "goodbooksshittyreviews.firebaseapp.com",
    databaseURL: "https://goodbooksshittyreviews.firebaseio.com",
    projectId: "goodbooksshittyreviews",
    storageBucket: "",
    messagingSenderId: "885174191987",
    appId: "1:885174191987:web:cf31ef8d29a8d60f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var auth = app.auth();
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
  "signInSuccessUrl": "https://goodbooksshittyreviews.firebaseapp.com/",
  "signInOptions": [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  "tosUrl": "https://goodbooksshittyreviews.firebaseapp.com/pages/tos.html",
};

ui.start("#firebaseui-auth-container", uiConfig);

let db = firebase.firestore()

const votes = db.collections('votes')

if (oneCount) {
  e.preventDefault()
  let id = db.collection('votes').doc(One).id
  db.collection('votes').doc(id).set({
      Book: One
    })
} else if (twoCount) {
  e.preventDefault()
  let id = db.collection('votes').doc(Two).id
  db.collection('votes').doc(id).set({
      Book: Two
    })
} else if (threeCount) {
  e.preventDefault()
  let id = db.collection('votes').doc(Three).id
  db.collection('votes').doc(id).set({
      Book: Three
    })
}

db.collection('votes').onSnapshot( ({ docs }) => {
    document.querySelector('#counter').innerHTML = ''
    snap.docs.forEach( doc => {
        let { One, Two, Three } = doc.data()
        let docElem = document.createElement('div')
        docElem.innerHTML = `
         <h3>${One}</h3>
         <h3>${Two}</h3>
         <h3>${Three}</h3>
         `
        document.querySelector('#counter').append(docElem)
    })
})

  
  window.onload = function() {
    initApp()
  };  

  function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }  

