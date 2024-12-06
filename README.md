egzersiz-uygulamasi3/
│
├── server.js         # Ana dosya
├── .env              # Çevresel değişkenler
├── models/           # MongoDB modelleri
│   └── User.js       # Kullanıcı model dosyası
├── routes/           # API rotaları
│   └── auth.js       # Giriş (login) ve kullanıcı oluşturma (signup)
└── config/           # Veritabanı bağlantısı
    └── db.js 
(package.json ile package-lock.json kendi oluşuyor)

     cmd TERMİNAL KODLARI:
     npm init -y
     npm install express mongoose body-parser bcrypt dotenv
     node server.js
     mongoDB :
     egzersizDB(database name)
     users(collection name)
     Postman:
     egzersiz-uygulamasi3(collection)
     POST deneme3(http://localhost:5000/api/auth/signup) Body->raw->JSON seçilir
     POST deneme3.1(http://localhost:5000/api/auth/login) Body->raw->JSON seçilir
