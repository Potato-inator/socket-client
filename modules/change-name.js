export function changeName(socket, nameInput) {
  var data = { name: nameInput}
  socket.emit("changeName", data);
  alert("You changed your name to: " + nameInput)
}