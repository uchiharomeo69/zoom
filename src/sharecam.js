const playVideo = require("./playvideo");
const getStream = require("./getStream");
async function sharecam(peer, listuser, username, socket) {
  try {
    if (peer == undefined) {
      document.getElementById("error").innerHTML = "Must login";
      return;
    }
    socket.emit("client_sharecam");
    const stream = await getStream();
    playVideo(stream, "localstream");
    console.log(listuser);
    for (let i = 0; i < listuser.length; i++) {
      if (
        listuser[i].name != username &&
        listuser[i].room == document.getElementById("roomid").innerHTML
      ) {
        let call = peer.call(listuser[i].name + listuser[i].room, stream);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
module.exports = sharecam;
