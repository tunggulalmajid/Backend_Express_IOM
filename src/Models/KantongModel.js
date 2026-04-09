const db = require("../config/db");

class KantongModel {
  static async create(id_user, nama, balance) {
    const query =
      "INSERT INTO kantongs(id_user, nama, balance ) VALUES (?,?,?)";
    const [result] = await db.query(query, [id_user, nama, balance]);
    return result;
  }

  static async getAllData(id_user) {}

  static async updateData(id, id_user) {}

  static async deleteData(id) {}
}
