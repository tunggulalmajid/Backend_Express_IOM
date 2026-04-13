const KantongModels = require("../Models/KantongModel");

class KantongController {
  static async create(res, req) {
    try {
      const result = KantongModels.create(id_user, nama, balance);
      return res.json({
        message: "Kantong Berhasil dibuat",
        hasil: result,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error System " + error,
      });
    }
  }

  static async getKantongAktif(id_user) {
    try {
      let data = KantongModels.getDataKantongActive(id_user);
      return res.json(data);
    } catch (error) {
      return res.status(500).json({
        message: "Error System " + error,
      });
    }
  }

  static async getKantongInactive(id_user) {
    try {
      let data = KantongModels.getDataKantongInActive(id_user);
      return res.json(data);
    } catch (error) {
      return res.status(500).json({
        message: "Error System " + error,
      });
    }
    }
    
    
}
