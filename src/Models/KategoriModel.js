const db = require("../config/db");

class KategoriModel {
  static async getDataKategori() {
    const query = "SELECT * FROM kategoris";
    const [row] = await db.query(query);
    return row;
  }
}

module.exports = KategoriModel;
