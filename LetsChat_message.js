  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAMphxsZ4sHtm2RdDP51RzMIb5HHXulRPA",
    authDomain: "letschat-2ae6f.firebaseapp.com",
    databaseURL: "https://letschat-2ae6f-default-rtdb.firebaseio.com",
    projectId: "letschat-2ae6f",
    storageBucket: "letschat-2ae6f.appspot.com",
    messagingSenderId: "455702379322",
    appId: "1:455702379322:web:49df8a11150e7bf3c92e03",
    measurementId: "G-XX1BMR9QE0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("Room_Name");

  function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name: user_name,
      message: msg,
      likes: 0
    });
    document.getElementById("msg").value = ""
  }

  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("Room_name");
    window.location = "index.html";
  }