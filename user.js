const uuid = require("uuid");

class User {
  constructor() {
    this.db = [];
  }

  addUser(record) {
    const newRecord = { ...record, _id: uuid.v4() };
    this.db = [...this.db, newRecord];
  }

  deleteUser(_id) {
    if (!_id) return "_id should be provided in the params option";
    this.db = this.db.filter((value) => value._id !== _id);
  }

  updateUser(_id, newRecord) {
    if (!_id) return "_id should be provided in the params option";
    this.db = this.db.map((value) =>
      value._id === _id ? { ...value, ...newRecord } : value
    );
    return 1;
  }

  sayHi(_id) {
    if (!_id) return "_id should be provided in the params option";
    const foundUser = this.db.find((value) => value._id === _id);
    if (!foundUser) return "User cannot be found!";
    return `Hello from ${foundUser.name} ${foundUser.surname}`;
  }
}

const User = require("./user.js");

const user = new User("Jamshid", "Khaytbaev");
user.addUser({
  name: "Jamshid",
  surename: "Khaytbaev",
  age: "22",
  email: "itsjk0307@gmail.com",
  phoneNumber: "01098021777",
});
console.log(user.updateUser);
// module.exports = User;
