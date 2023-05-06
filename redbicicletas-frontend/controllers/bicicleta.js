const Bicicleta = require("../models/bicicleta");
const request = require('request');

var crudServiceUrl = process.env.CRUD_URI;

if(crudServiceUrl == null || crudServiceUrl == ""){
  crudServiceUrl = "http://crud-service:5000/api/";
};

var mapServiceUrl = process.env.MAP_URI;

if(mapServiceUrl == null || mapServiceUrl == ""){
  mapServiceUrl = "http://map-service:8000/api/";
};

exports.list = function (re, res) {
    const requestOptions = {
        url: crudServiceUrl + "bicicletas",
        method: 'GET',
        json: {}
      };
      request(requestOptions, (err, response, body) => {
        if (err) {
          console.log(err);
          res.render("error", {msg:"An error ocurred trying to consume bycicles CRUD microservice"})
        } else if (response.statusCode === 200) {
          var bicis = body.bicicletas;
          res.render("bicicletas/index", { bicis: bicis }); 
        } else {
          console.log(response.statusCode);
        }
      }); 
};

exports.show = function (req, res) {
    var bici = Bicicleta.findById(req.params.id);
    res.render("bicicletas/show", { bici });
};


exports.create_get = function (req, res) {
    res.render("bicicletas/create");
};

exports.create_post = function (req, res) {
  const requestOptionsBycicleta = {
    url: crudServiceUrl + "bicicletas/create",
    method: 'POST',
    json: {id:parseInt(req.body.id),
           color:req.body.color,
           modelo: req.body.modelo,
           lat:parseFloat(req.body.lat),
           lng:parseFloat(req.body.lng)}
  };
  const requestOptionsUbicacion = {
    url: mapServiceUrl + "ubicacion/create",
    method: 'POST',
    json: {id:parseInt(req.body.id),
           lat:parseFloat(req.body.lat),
           lng:parseFloat(req.body.lng)}
  };

  request(requestOptionsUbicacion, (err, response, body) => {
    if (err) {
      console.log('Fallo con MAP microservice');
    } else if (response.statusCode === 200) {
      console.log('Ubicación creada correctamente')
    } else {
      console.log(response);
    }
  });

  request(requestOptionsBycicleta, (err, response, body) => {
    if (err) {
      res.render("error", {msg:"An error ocurred trying to consume bycicles CRUD microservice"})
    } else if (response.statusCode === 200) {
      res.redirect("/bicicletas");
    } else {
      console.log(response);
    }
  });

};

exports.delete = function (req, res) {
    Bicicleta.removeById(req.body.id);
    res.redirect("/bicicletas");
};