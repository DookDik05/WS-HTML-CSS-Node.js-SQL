// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./database');

const app = express();
const port = 3000;

// ใช้ bodyParser เพื่ออ่านข้อมูลจาก request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ให้เซิร์ฟเวอร์ให้บริการ static files
app.use(express.static(path.join(__dirname, 'public')));

// route สำหรับหน้าเว็บ
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// route สำหรับรับข้อมูลและบันทึกลงฐานข้อมูล
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;

    const query = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';

db.query(query, [name, email, message], (err, results) => {
    if (err) {
        console.error('Error inserting data:', err);
        res.status(500).send('Internal Server Error');
        return;
    }
    res.send('Data submitted successfully!!');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

