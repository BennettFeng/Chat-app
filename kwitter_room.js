
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB3N-ZVgIfGV8D3WRsWBd1sdPN_F1xC9pY",
      authDomain: "kwitter-3f0fa.firebaseapp.com",
      databaseURL: "https://kwitter-3f0fa-default-rtdb.firebaseio.com",
      projectId: "kwitter-3f0fa",
      storageBucket: "kwitter-3f0fa.appspot.com",
      messagingSenderId: "654060013307",
      appId: "1:654060013307:web:f7c35fb4d729e6950b125e"
    }
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!"
function getData() 
{ firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
       Room_names = childKey;
        console.log("Room Name - " + Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
       }); }); }
function addRoom() 
{ room_name = document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
  localStorage.setItem("room_name", room_name);
   window.location = "kwitter_page.html"; 
}

getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}