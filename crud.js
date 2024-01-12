// crud_operations.js
const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "data.json");

function readData() {
  const data = fs.readFileSync(dataFilePath, "utf-8");
  return JSON.parse(data);
}

function writeData(data) {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(dataFilePath, jsonData, "utf-8");
}

function getAllUsers() {
  const data = readData();
  return data.users;
}

function getUserById(id) {
  const data = readData();
  return data.users.find((user) => user.id === id);
}

function addUser(user) {
  const data = readData();
  user.id = data.users.length + 1;
  data.users.push(user);
  writeData(data);
}

function updateUser(id, updatedUser) {
  const data = readData();
  const index = data.users.findIndex((user) => user.id === id);

  if (index !== -1) {
    data.users[index] = { ...data.users[index], ...updatedUser };
    writeData(data);
    return true;
  }

  return false;
}

function deleteUser(id) {
  const data = readData();
  const filteredUsers = data.users.filter((user) => user.id !== id);

  if (filteredUsers.length < data.users.length) {
    data.users = filteredUsers;
    writeData(data);
    return true;
  }

  return false;
}

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
