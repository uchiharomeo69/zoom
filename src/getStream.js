async function getStream() {
  try {
    let stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    return stream;
  } catch (error) {
    throw error;
  }
}

module.exports = getStream;
