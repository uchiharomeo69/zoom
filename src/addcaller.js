const playVideo = require("./playvideo");
const issharing = require("./issharing");
function addcaller(remotestream, name) {
  if (document.getElementById(name) != null) {
    return;
  }
  let vd = document.createElement("div");
  vd.id = name + "2";
  vd.addEventListener("dblclick", () => {
    let stream = document.getElementById(name).srcObject.clone();
    playVideo(stream, "friendstream");
    issharing(name);
  });
  vd.innerHTML =
    "<video id='" +
    name +
    "' class='video' controls></video>" +
    "<h4 id='" +
    name +
    "1" +
    "'>" +
    name.substr(0, name.length - 36) +
    "</h4>";
  document.getElementById("right").appendChild(vd);
  playVideo(remotestream, name);
}
module.exports = addcaller;
