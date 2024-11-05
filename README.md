# Goalsetter App

Goalsetter, kullanıcıların hedeflerini belirlemelerine ve yönetmelerine olanak tanıyan basit ve etkili bir uygulamadır. Bu uygulama, MERN (MongoDB, Express, React, Node.js) yığını kullanılarak geliştirilmiştir.

## Özellikler

- **Kullanıcı Kimlik Doğrulama**: JWT ile güvenli giriş ve kayıt işlemleri.
- **Hedef Yönetimi**: Kullanıcıların hedef ekleyip, görüntüleyip, silmelerine olanak tanır.
- **Responsive Tasarım**: Mobil ve masaüstü cihazlarla uyumlu kullanıcı arayüzü.
- **Bildirimler**: React-Toastify ile kullanıcı bildirimleri.

## Teknolojiler

- **Frontend**:

  - React
  - Redux Toolkit
  - Axios
  - React Router
  - React Toastify

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (Mongoose ile)
  - JWT (JSON Web Tokens)
  - Bcrypt.js

## Kurulum

### Ön Gereksinimler

- Node.js ve npm yüklü olmalıdır.

### Projeyi Klonlama

```bash
git clone https://github.com/kullanici_adi/goalsetter-app.git
cd goalsetter-app

Backend Kurulumu
cd backend
npm install
npm run server

Frontend Kurulumu
cd ../frontend
npm install
npm start

MONGO_URI=mongodb://localhost:27017/goalsetter
JWT_SECRET=your_jwt_secret

Kullanım
Kullanıcı kaydı yapın.
Giriş yapın ve hedeflerinizi eklemeye başlayın.

Katkıda Bulunma
Katkılarınızı bekliyoruz! Aşağıdaki adımları izleyerek projeye katkıda bulunabilirsiniz:

Forklayın.
Yeni bir dal oluşturun: git checkout -b feature/YourFeature.
Değişikliklerinizi yapın ve commit edin: git commit -m 'Add your feature'.
Dalınızı gönderin: git push origin feature/YourFeature.
Bir pull isteği oluşturun.
Lisans
Bu proje ISC lisansı altında lisanslanmıştır.

Yazarlar
Anıl Akbay

### Açıklamalar:

1. **Kurulum Bölümü**: Kod blokları düzenlenerek daha net hale getirildi.
2. **Veritabanı Ayarları**: Çevresel değişkenlerin nasıl ayarlanacağı hakkında daha fazla bilgi eklendi.
3. **Kullanım ve Katkıda Bulunma**: Bu bölümler netleştirildi ve daha okunaklı hale getirildi.
4. **Yazarlar Bölümü**: Proje sahibinin adı eklendi.

Bu haliyle `README.md`, kullanıcılar ve katkıda bulunanlar için oldukça bilgilendirici ve profesyonel bir doküman sunmaktadır. İyi çalışmalar!


```
