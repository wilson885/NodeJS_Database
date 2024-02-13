const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 5000;

const pool = new Pool({
    user: 'myuser',
    host: 'localhost',
    database: 'mygame',
    password: 'wilson885',
    port: 5432, // PostgreSQL的默認端口
  });
// 啟用JSON體解析中間件
app.use(express.json());

// 獲取資料的API端點
app.get('/', async (req, res) => {
  try {
    res.send('wilson database')
    const { rows } = await pool.query('SELECT * FROM scores ORDER BY score DESC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(port,'0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
  