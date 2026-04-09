const db = require("../config/db");

class KantongModel {
  static async create(id_user, nama, balance) {
    const query =
      "INSERT INTO kantongs(id_user, nama, balance ) VALUES (?,?,?)";
    const [result] = await db.query(query, [id_user, nama, balance]);
    return result;
  }

  static async getDataKantongActive(id_user) {
    const query = "SELECT * FROM kantongs where id_user = ? AND status = ?";
    const [row] = await db.query(query, [id_user, "active"]);
    return row;
  }

  static async getDataKantongInActive(id_user) {
    const query = "SELECT * FROM kantongs where id_user = ? AND status = ?";
    const [row] = await db.query(query, [id_user, "inactive"]);
    return row;
  }

  static async updateData(id, id_user) {
    const query = "";
    const [result] = await db.query();
    return result;
  }

  static async getKantongById(id) {
    const query = "SELECT * FROM kantongs where id = ?";
    const [row] = await db.query(query, [id]);
    return row[0];
  }

  static async UpdateStatus(id) {
    const query = "UPDATE Kantongs SET Status = ? where id = ? ";
    const [result] = await db.query(query, ["inactive", id]);
    return result;
  }

  static async getSaldoTotal(id_user) {
    const query = "SELECT SUM(balance) as saldo FROM kantongs where id = ?";
    const [row] = await db.query(query, [id_user]);
    return row[0];
  }
}

module.exports = KantongModel;
