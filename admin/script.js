const firebaseConfig = {
    apiKey: "AIzaSyAFJTHbawTSD1vw2IT50Eat5lkHuJxQlW0",
  authDomain: "pirates-chat-d8e00.firebaseapp.com",
  projectId: "pirates-chat-d8e00",
  storageBucket: "pirates-chat-d8e00.appspot.com",
  messagingSenderId: "623862060797",
  appId: "1:623862060797:web:19809d01227cf0bf1f5094",
  measurementId: "G-9ZDRSV4RB4"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  

  document.getElementById("authform").addEventListener("submit", getname);
  function getname(e){
    e.preventDefault();
    const name = document.getElementById("namebox");
    const chatTxt = document.getElementById("chat-txt");
    const username = name.value;
    const message = chatTxt.value;
    const timestamp = Date.now();
  name.value = "";
  chatTxt.value = "";
  db.ref("note/" + timestamp).set({
    usr: username,
    msg: message,
    time: timestamp,
  });
    
    
  }

  function del(t56){
    db.ref("note/" + t56).remove();
    alert("Note Deleted");
    
  }
  



const fetchChat = db.ref("note/");
fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
    const msg = "<div class=\"name\">"+ messages.time + " " + messages.usr + " " + messages.msg +" <br> <a/><button onclick=\"del("+ messages.time +")\"> Delete </button> </div>";
    document.getElementById("messages").innerHTML += msg;
});
