const addcaller = require("./addcaller");
const playVideo = require("./playvideo");
const issharing = require("./issharing");
function listencall(peer) {
  peer.on("call", (call) => {
    try {
      call.answer();
      let peeridrec = call.peer;
      call.on("stream", (remotestream) => {
        playVideo(remotestream, "friendstream");
        addcaller(remotestream, peeridrec);
        issharing(peeridrec);
      });
    } catch (error) {
      console.log(error);
    }
  });
}

module.exports = listencall;
