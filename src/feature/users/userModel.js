export default class UserModel {
  constructor(id, name, email, password, type) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.type = type;
  }

  static SignUp(name, email, password, type) {
    const newUser = new UserModel(
      users.length + 1,
      name,
      email,
      password,
      type
    );
    users.push(newUser);
    return newUser;
  }

  static SignIn(email, password) {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    return user;
  }

  static getAll() {
    try {
      return users;
    } catch (err) {
      throw new Error("users not found", 404);
    }
  }
}

// let users = [
//   {
//     id: 1,
//     name: "Seller User",
//     email: "seller@ecom.com",
//     password: "Password1",
//     type: "seller",
//   },
// ];
