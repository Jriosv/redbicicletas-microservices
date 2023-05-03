const Bicicleta = require("../models/bicicleta");
const request = require('request');

const crudServiceUrl = "http://localhost:5000/api/"

exports.list = function (re, res) {
    const requestOptions = {
        url: crudServiceUrl + "bicicletas",
        method: 'GET',
        json: {},
        qs: {
          offset: 20
        }
      };
      request(requestOptions, (err, response, body) => {
        if (err) {
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
    var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion = [req.body.lat, req.body.lng];
    Bicicleta.add(bici);
    res.redirect("/bicicletas");
};

exports.delete = function (req, res) {
    Bicicleta.removeById(req.body.id);
    res.redirect("/bicicletas");
};