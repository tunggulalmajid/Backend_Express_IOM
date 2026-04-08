const db = require("../config/db");

class UserModels {
  static async create(nama, email, hashedPassword) {
    const query =
      "insert into users(nama, email, password_user) values (?,?,?)";
    const [result] = await db.query(query, [nama, email, hashedPassword]);
    return result;
  }

  static async findByEmail(email) {
    const query = "SELECT * FROM users where email = ?";
    const [rows] = await db.query(query, [email]);
    return rows[0];
  }

  static async findById(id) {
    const query = "SELECT * FROM users where id = ?";
    const [rows] = await db.query(query, [id]);
    return rows[0];
  }
}

module.exports = UserModels;
