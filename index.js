const express = require("express");
const cors = require("cors");
const db = require("./src/config/db");
const KategoriModel = require("./src/Models/KategoriModel");
const KantongModel = require("./src/Models/KantongModel");
const UserModels = require("./src/Models/UserModel");
require("dotenv").config();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Cek Koneksi Server
app.get("/", async (req, res) => {
  try {
    const id_user = 1;
    const nama_kantong = "Sebuah";
    const balance = 1000;
    let create = await KantongModel.create(id_user, nama_kantong, balance);
    // let data = await UserModels.findById(1);
    res.send(create);
  } catch (error) {
    res.status(500).json({
      message: "error : 500",
      serverMessage: error.message,
    });
  }
});

app.get("/kantong/active", async (req, res) => {
  try {
    const id_user = 1;
    let data = await KantongModel.getDataKantongActive(id_user);
    // let data = await UserModels.findById(1);
    res.send(data);
  } catch (error) {
    res.status(500).json({
      message: "error : 500",
      serverMessage: error.message,
    });
  }
});

app.get("/kantong/inactive", async (req, res) => {
  try {
    const id_user = 1;
    let data = await KantongModel.getDataKantongInActive(id_user);
    // let data = await UserModels.findById(1);
    res.send(data);
  } catch (error) {
    res.status(500).json({
      message: "error : 500",
      serverMessage: error.message,
    });
  }
});

app.patch("/kantong/status/:id", async (req, res) => {
  let id = req.params.id;
  const result = KantongModel.UpdateStatus(id);
  res.json(result);
});

app.get("/kantong/saldo", async (req, res) => {
  try {
    const id_user = 1;
    let data = await KantongModel.getSaldoTotal(id_user);
    res.send(data);
  } catch (error) {
    res.status(500).json({
      message: "error : 500",
      serverMessage: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
