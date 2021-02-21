import Peer from "peerjs";
const io = require("socket.io-client");
const sharecam = require("./sharecam");
const login = require("./login");
const updateListUser = require("./updateListUser");
const listencall = require("./listencall");

let username = "";
let listuser;
let peer;
const socket = io();

// login
document.getElementById("register").onclick = () => {
  username = login(socket);
};
// sharecam
document.getElementById("call").onclick = () => {
  sharecam(peer, listuser, username, socket);
};
// login fail
socket.on("server_client_loginfail", () => {
  username = "";
  document.getElementById("error").innerHTML = "Username already existed";
});
// login success
socket.on("server_client_loginsuccess", () => {
  document.getElementById("login").innerHTML = "<h3>" + username + "</h3>";
  peer = new Peer(username + document.getElementById("roomid").innerHTML);
  // listen call
  listencall(peer);
});

socket.on("server_room_loginsuccess", (data) => {
  listuser = data.listUser;
  updateListUser(listuser, username);
  for (let user of data.listUser) {
    if (user.issharing == true && user.name == username) {
      console.log(data.newUser);
      let a = [data.newUser];
      sharecam(peer, a, username, socket);
    }
  }
});

socket.on("server_room_leaveroom", (data) => {
  listuser = data.listUser;
  updateListUser(listuser, username);
  if (data.outsharing == true) {
    document
      .getElementById(
        data.outname + document.getElementById("roomid").innerHTML + "2"
      )
      .remove();
  }
});
