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

  function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        childData = childSnapshot.val();
        if (childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
          name = message_data["name"];
          message = message_data["message"];
          like = message_data["likes"];

          name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>"
          message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"
          like_button = "<button class = 'btn btn-success' id='" + firebase_message_id+"value='" + like+ "' onclick='updateLike(this.id)'>";
          span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: " + like + "</span></button><hr>"
          row = name_with_tag + message_with_tag + like_button + span_with_tag;
          document.getElementById("output").innerHTML = row;
        }
      });
    });
  }
  getData();

  function updateLikes(message_id) {
    console.log("click on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;

    firebase.database().ref(room_name).child(message_id).update({
          likes: updated_likes
    });

  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("Room_name");
    window.location = "index.html";
  }