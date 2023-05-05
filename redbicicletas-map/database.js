const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://mongo-map:27017/map', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the application if the connection fails
  }
}

module.exports = {connect};
