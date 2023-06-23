const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://battellosacha:5XWZ9OZB731NKzKx@cluster0.bcfrhki.mongodb.net/weatherapp';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
