var firebaseConfig = {
      apiKey: "AIzaSyC1mWbFKDo90X_RmsRmsYQ_N9E6QmIWkJ4",
      authDomain: "kwitter-7ced5.firebaseapp.com",
      databaseURL: "https://kwitter-7ced5-default-rtdb.firebaseio.com",
      projectId: "kwitter-7ced5",
      storageBucket: "kwitter-7ced5.appspot.com",
      messagingSenderId: "376883323059",
      appId: "1:376883323059:web:fa05ccad887a6210b490c6",
      measurementId: "G-847V9XT25S"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    
      user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
       
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
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