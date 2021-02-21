import { v4 as uuidv4 } from "https://jspm.dev/uuid";
let roomid = uuidv4();
document.getElementById("roomid").value = roomid;
document.getElementById("start").onclick = () => {
  window.location.href = "/" + document.getElementById("roomid").value;
};
