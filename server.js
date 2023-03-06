const app = require('./app');
const dotenv = require('dotenv').config({ path: './config/.env' });
const cloudinary = require('cloudinary');
const mongoose = require('mongoose');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected successfully');
    app.listen(process.env.PORT, () => {
      console.log(`Server is working on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB:', err.message);
  });
