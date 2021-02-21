let listUser = [];
// join
module.exports.joinRoom = (id, name, room) => {
  let issharing = false;
  return listUser.push({ id, name, room, issharing });
};
exports.getAll = () => {
  return listUser;
};
exports.getById = (id) => {
  return listUser.find((data) => {
    return data.id == id;
  });
};
exports.leaveRoom = (id) => {
  let index = listUser.findIndex((data) => data.id == id);
  return listUser.splice(index, 1);
};
exports.getRoom = (room) => {
  return listUser.filter((data) => data.room == room);
};
exports.checkName = (name, room) => {
  let index = listUser.findIndex(
    (data) => room == data.room && data.name == name
  );
  if (index == -1) return true;
  return false;
};
exports.getListSharing = (room) => {
  return listUser.filter((data) => {
    return data.room == room && data.issharing == true;
  });
};
