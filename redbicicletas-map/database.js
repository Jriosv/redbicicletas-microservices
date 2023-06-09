const mongoose = require('mongoose');

async function connect() {
  try {
    var MONGO_URI = process.env.MONGO_URI;

    if(MONGO_URI == null){
      MONGO_URI =  'mongodb://localhost:27017';
    };

    await mongoose.connect(MONGO_URI, {
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
