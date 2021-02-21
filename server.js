const express = require("express");
const app = express();
const server = require("http").createServer(app);
server.listen(process.env.PORT || 8080, () => console.log("thanh cong!!!"));
app.set("view engine", "pug");
app.set("views", "views");
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("start");
});
app.get("/:room", (req, res) => {
  res.render("main", { roomid: req.params.room });
});

//
let listUser = require("./model/listUser");
//socket io
const io = require("socket.io")(server);
io.on("connection", (socket) => {
  socket.on("client_login", (data) => {
    if (!listUser.checkName(data.name, data.room)) {
      socket.emit("server_client_loginfail");
    } else {
      listUser.joinRoom(socket.id, data.name, data.room);
      socket.join(data.room);
      socket.emit("server_client_loginsuccess");
      io.to(data.room).emit("server_room_loginsuccess", {
        listUser: listUser.getRoom(data.room),
        newUser: listUser.getById(socket.id),
      });
    }
  });
  socket.on("client_sharecam", () => {
    let user = listUser.getById(socket.id);
    user.issharing = true;
  });
  socket.on("disconnect", () => {
    let user = listUser.getById(socket.id);

    if (user != undefined) {
      let outname = user.name;
      let outsharing = user.issharing;
      let oldroom = user.room;
      socket.leave(user.room);
      listUser.leaveRoom(socket.id);
      io.to(oldroom).emit("server_room_leaveroom", {
        listUser: listUser.getRoom(oldroom),
        outname: outname,
        outsharing: outsharing,
      });
    }
  });
});
