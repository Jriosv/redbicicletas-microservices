const Bicicleta = require("../../models/bicicleta.js");

exports.list = function (req, res) {
  Bicicleta.find({})
  .then((bicicletas) => {
    res.status(200).json({
      bicicletas: bicicletas,
    });
  })
  .catch((error) => {
    res.status(500).json(error);
  });
};

exports.add = function (req, res) {
  var bici = new Bicicleta({id:req.body.id, 
    color: req.body.color,
    modelo: req.body.modelo,
    latitud: req.body.lat,
    longitud: req.body.lng});

  bici.save()
  .then((biciGuardada) => {
    res.status(200).json('bicicleta creada correctamente');
  })
  .catch((error) => {
    res.status(500).json(error);
  });
};

exports.update = function (req, res) {
  try {
    var bici = Bicicleta.findById(req.body.id);
    bici.id = req.body.id;
    bici.color = req.body.color;
    bici.modelo = req.body.modelo;
    bici.ubicacion = [req.body.lat, req.body.lng];
    res.status(201).json({ Bicicleta: bici });
  } catch (error) {
    res.status(404).json(error.message);
  }
};

exports.delete = function (req, res) {
  try {
    Bicicleta.removeById(req.body.id);
    res.status(204).json(`Bicicleta id: ${req.body.id} borrada exitosamente.`);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
