function updateListUser(listUser, username) {
  let text = "";
  for (let user of listUser) {
    if (user.name != username) text += "<li>" + user.name + "</li>";
    else {
      text += "<li class='xam'>" + user.name + "</li>";
    }
  }
  document.getElementById("listuser").innerHTML = text;
}

module.exports = updateListUser;
