const mongoose = require('mongoose');

// Define the User schema
const UbicacionSchema = new mongoose.Schema({
  id: {
    type: Number,
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
const Ubicacion = mongoose.model('Ubicacion', UbicacionSchema);

// Export the User model
module.exports = Ubicacion;


