// backend/server.js
const express = require('express');
const dotenv = require('dotenv');

const app = require('./app');


dotenv.config(); // โหลดตัวแปรจากไฟล์ .env

const PORT = process.env.PORT || 4000;

const server = express();

server.use('/api', app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

