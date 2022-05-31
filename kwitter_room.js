var firebaseConfig = {
    apiKey: "AIzaSyABQsbyBernn6Ak6tLhuHtYSpreF5i2U-I",
    authDomain: "kwitter-app-197cb.firebaseapp.com",
    databaseURL: "https://kwitter-app-197cb-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-197cb",
    storageBucket: "kwitter-app-197cb.appspot.com",
    messagingSenderId: "29886195217",
    appId: "1:29886195217:web:207eb7d985a8a7b03173b0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome"+ user_name+"!";


function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name -" + Room_names);
   row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row; 
   //End code
   });});}
getData();


function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}


function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
  }
