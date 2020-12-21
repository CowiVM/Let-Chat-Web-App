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

user_name = localStorage.getItem("user_name")

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

 function addRoom() {
  room = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room).update({
    purpose: "New Room"
  });
}

function getData() {
  firebase.database().ref("/").on('value',
    function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
}
getData();

function redirectToRoomName(name) {
  localStorage.setItem("Room_Name", name);
  window.location = "kwitter_page.html"
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("Room_name");
  window.location = "index.html";
}