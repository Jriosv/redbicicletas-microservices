var map = L.map("main_map").setView([6.1630788, -75.631681], 17);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://wwww.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

$.ajax({
    datatype: "json",
    url: "http://map-service:8000/api/ubicacion",
    success: function (results) {
      console.log(results.ubicaciones);
      results.ubicaciones.forEach(function (ubicacion) {
        L.marker([ubicacion.latitud,ubicacion.longitud], {
          title: "Bicicleta Nro: " + ubicacion.id,
        }).addTo(map);
      });
    },
});
