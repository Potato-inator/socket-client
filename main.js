import './style.css'
import { io } from "socket.io-client";

//Using .env to input a host IP 
const socket = io(import.meta.env.VITE_IP);
const clickBTN = document.getElementById('sendClick');
const nameBTN = document.getElementById('changeName');
const resetBTN = document.getElementById('resetClicks');
var nameInput = document.getElementById('nameInput');

//Button Listeners
clickBTN.addEventListener('click', clicked);
nameBTN.addEventListener('click', changeName);
resetBTN.addEventListener('click', resetClicks);

function changeName() {
  var data = { name: nameInput.value }
  socket.emit("changeName", data);
}

function clicked() {
  socket.emit("click");
}

function resetClicks() {
  socket.emit("resetClicks");
}

//If someone clicks
socket.on("someoneClicked", (data) => {
  document.getElementById('totalClicks').innerHTML = data.totalClicks
})
  
//If someone resets
socket.on("someoneResetClicks", (data) => {
  document.getElementById('totalClicks').innerHTML = data.totalClicks
})

socket.on("connectComplete",() => {
  console.log("Successful connection.")
})