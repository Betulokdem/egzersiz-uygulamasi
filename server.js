const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

const app = express();
app.use(bodyParser.json());

// MongoDB bağlantısı
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Bağlantısı Başarılı'))
  .catch((err) => console.error('MongoDB Bağlantı Hatası:', err));

// Kullanıcı oluşturma (POST)
app.post('/api/users', async (req, res) => {
  const { user_name, email, password } = req.body;

  try {
    // Yeni kullanıcı oluştur
    const user = new User({ user_name, email, password });
    await user.save();
    res.status(201).json({ message: 'Kullanıcı başarıyla oluşturuldu!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Sunucu çalıştırma
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
