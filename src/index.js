const express = require("express");
const cors = require("cors");
const db = require("./config/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Cek Koneksi Server
app.get("/", (req, res) => {
  res.send("Server Keuangan Berjalan!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
