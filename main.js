import './style.css'
import { io } from "socket.io-client";
import { changeName } from './modules/change-name';

const socket = io("ws://localhost:3000");
const clickBTN = document.getElementById('sendClick');
const nameBTN = document.getElementById('changeName');
const resetBTN = document.getElementById('resetClicks');
var nameInput = document.getElementById('nameInput');

clickBTN.addEventListener('click', clicked);
nameBTN.addEventListener('click', changeName);
resetBTN.addEventListener('click', resetClicks);

changeName(socket, nameInput.value);

function clicked(socket) {
  socket.emit("click");
}

function resetClicks(socket) {
  socket.emit("resetClicks");
}

socket.on("someoneClicked", (data) => {
  document.getElementById('totalClicks').innerHTML = data.totalClicks
})
  
socket.on("someoneResetClicks", (data) => {
  document.getElementById('totalClicks').innerHTML = data.totalClicks
})