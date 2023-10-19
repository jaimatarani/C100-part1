function getdata() {firebase.database().ref("/").on |('value',
function (snapsorts) {document.getElementById ("output").innerHTML =
""; snapsorts.forEach (function(childsnapsorts) {childkey =
    childsnapsorts.key;
    room_name = childkey;
    //Start Code


    //End Code
});});}
getdata();

row = "<div class='room_name id="+Room_name+"onclick='redrectToRoomName(this.id)'>#"+Room_name+"</div><hr>";
    

