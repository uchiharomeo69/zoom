function login(socket) {
  let name1 = document.getElementById("username").value.trim();
  if (name1 == "") {
    document.getElementById("error").innerHTML = "Username can not empty";
    return "";
  }
  socket.emit("client_login", {
    name: name1,
    room: document.getElementById("roomid").innerHTML,
  });
  return name1;
}
module.exports = login;
