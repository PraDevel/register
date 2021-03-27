var clicked = 0;
$("#loginhaha").on("slid.bs.carousel", function () {
  $(".carousel").carousel("pause");
  console.log("hehe");
});
$(function () {
  var firebaseConfig = {
    apiKey: "AIzaSyDmK2u9jDPYzrVsS2cJJNMAlddrtxo9Pzc",
    authDomain: "appzard-2021.firebaseapp.com",
    projectId: "appzard-2021",
    storageBucket: "appzard-2021.appspot.com",
    databaseURL: "https://appzard-2021-default-rtdb.firebaseio.com/",
    messagingSenderId: "384696675702",
    appId: "1:384696675702:web:9fa34c328bd9ea0c15de57",
    measurementId: "G-T6GDZ4JPYF",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //   firebase.analytics();
});
function user() {
  clicked++;
  if (clicked == 1) {
    if (document.getElementById("mail").value.trim() == "") {
      var x = document.getElementById("snackbar");

      x.innerHTML = "Enter Email...";
      x.className = "show";

      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
      clicked--;
    } else {
      var email = document.getElementById("mail").value;
      $(".carousel").carousel("next");
    }
  } else {
    if (document.getElementById("passssss").value.trim() == "") {
      var x = document.getElementById("snackbar");

      x.innerHTML = "Enter Password...";
      x.className = "show";

      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
      clicked--;
    } else {
      var passssss = document.getElementById("passssss").value;
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, passssss)
        .then((user) => {
          var x = document.getElementById("snackbar");

          x.innerHTML = "Successfully Logged in...";
          x.className = "show";

          setTimeout(function () {
            x.className = x.className.replace("show", "");
          }, 3000);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
          var x = document.getElementById("snackbar");

          x.innerHTML = "Error! " + errorMessage + "\n ErrorCode: " + errorCode;
          x.className = "show";

          setTimeout(function () {
            x.className = x.className.replace("show", "");
          }, 3000);
        });
    }
  }
}

function github() {
  var provider = new firebase.auth.GithubAuthProvider();
  provider.addScope("repo");
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      var x = document.getElementById("snackbar");

      x.innerHTML = "Error! " + errorMessage + "\n ErrorCode: " + errorCode;
      x.className = "show";

      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
      // ...
    });
}

function google() {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      var x = document.getElementById("snackbar");

      x.innerHTML = "Error! " + errorMessage + "\n ErrorCode: " + errorCode;
      x.className = "show";

      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
      // ...
    });
}
