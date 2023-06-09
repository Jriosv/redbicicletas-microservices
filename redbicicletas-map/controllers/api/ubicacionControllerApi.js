const Ubicacion = require("../../models/ubicacion.js");

exports.list = function (req, res) {
  // Set the CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  Ubicacion.find({})
  .then((ubicaciones) => {
    res.status(200).json({
      ubicaciones: ubicaciones,
    });
  })
  .catch((error) => {
    res.status(500).json(error);
  });
};

exports.add = function (req, res) {
  console.log(req);
  var ubicacion = new Ubicacion({id:req.body.id, 
    latitud: req.body.lat,
    longitud: req.body.lng});

  ubicacion.save()
  .then((ubicacion) => {
    res.status(200).json('Ubicacion creada correctamente');
  })
  .catch((error) => {
    console.log(error);
    res.status(500).json(error);
  });
};


