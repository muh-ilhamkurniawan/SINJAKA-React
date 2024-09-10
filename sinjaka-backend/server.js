const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001;

// Enable CORS
app.use(cors());

// Buat koneksi ke database MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Ganti dengan username database kamu
  password: '',  // Ganti dengan password database kamu
  database: 'sinjaka'  // Ganti dengan nama database kamu
});

// Cek koneksi ke database
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the MySQL database');
  }
});

// API endpoint untuk mengambil data dari database
app.get('/data', (req, res) => {
  const query = 'SELECT * FROM departure';  // Ganti dengan query SQL kamu
  db.query(query, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
