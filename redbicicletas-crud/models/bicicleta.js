const mongoose = require('mongoose');

// Define the User schema
const BicicletaSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
  },
  latitud: {
    type: Number,
    required: true,
  },
  longitud: {
    type: Number,
    required: true,
  },
});

// Create the User model
const Bicicleta = mongoose.model('Bicicleta', BicicletaSchema);

// Export the User model
module.exports = Bicicleta;


