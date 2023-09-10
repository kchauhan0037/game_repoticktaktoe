var sign = "X";
var playername = document.getElementById("playername");
var reloadbtn= document.getElementById('reload')

playername.innerText = `Lets Start Playing`;

function updatechar(id) {
  playername.innerText = `Player 2 click in box`;
  if (document.getElementById(id).innerText == "") {
    document.getElementById(id).innerText = sign;
    calculateresult(sign);
    if (sign == "X") {
      sign = "O";
    } else {
      sign = "X";
      playername.innerText = `Player 1 click in box`;
    }
  }
}

function calculateresult(sign) {
  if (
    (document.getElementById("box1").innerText == sign &&
      document.getElementById("box2").innerText == sign &&
      document.getElementById("box3").innerText == sign) ||
    (document.getElementById("box4").innerText == sign &&
      document.getElementById("box5").innerText == sign &&
      document.getElementById("box6").innerText == sign) ||
    (document.getElementById("box7").innerText == sign &&
      document.getElementById("box8").innerText == sign &&
      document.getElementById("box9").innerText == sign) ||
    (document.getElementById("box1").innerText == sign &&
      document.getElementById("box4").innerText == sign &&
      document.getElementById("box7").innerText == sign) ||
    (document.getElementById("box2").innerText == sign &&
      document.getElementById("box5").innerText == sign &&
      document.getElementById("box8").innerText == sign) ||
    (document.getElementById("box3").innerText == sign &&
      document.getElementById("box6").innerText == sign &&
      document.getElementById("box9").innerText == sign) ||
    (document.getElementById("box1").innerText == sign &&
      document.getElementById("box5").innerText == sign &&
      document.getElementById("box9").innerText == sign) ||
    (document.getElementById("box3").innerText == sign &&
      document.getElementById("box5").innerText == sign &&
      document.getElementById("box7").innerText == sign)
  ) {
    if (sign == "X") {
        playername.innerText = `Player 1 is won`;
      alert("player 1 is won");
    } else {
        playername.innerText = `Player 2 is won`;
      alert("player 2 is won");
    }
    location.reload();
  }
}

reloadbtn.addEventListener('click',function(){
    location.reload();
})