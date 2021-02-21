function playVideo(stream, id) {
  let video = document.getElementById(id);
  video.srcObject = stream;
  video.onloadedmetadata = (e) => video.play();
}

module.exports = playVideo;
