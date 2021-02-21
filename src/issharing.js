function issharing(name) {
  let streamings = document.getElementById("right").childNodes;
  for (let node of streamings) {
    node.classList.remove("isstreaming");
  }
  document.getElementById(name + "2").classList.add("isstreaming");
}
module.exports = issharing;
