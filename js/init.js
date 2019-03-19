/* CREAZIONE MAPPA */
var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([11.3425,44.4952]),
        zoom: 14
    })
});

/* AGGIUNTA LAYER ALLA MAPPA */
var i,r,g,b;
var layer1, layer2, layer3, layer4;
for (i = 1; i < 5; i++) {
  switch (i){
    case 1:
      r = 0;
      g = 128;
      b = 0;
      layer1 = creaLayer("GeoJSON Layer" + i, i, creaStile(r,g,b, 1));
      break;
    case 2:
      r = 255;
      g = 0;
      b = 0;
      layer2 = creaLayer("GeoJSON Layer" + i, i, creaStile(r,g,b, 1));
      break;
    case 3:
      r = 30;
      g = 144;
      b = 255;
      layer3 = creaLayer("GeoJSON Layer" + i, i, creaStile(r,g,b, 1));
      break;
    case 4:
      r = 188;
      g = 143;
      b = 143;
      layer4 = creaLayer("GeoJSON Layer" + i, i, creaStile(r,g,b, 1));
      break;
  }
} 

aggiungiLayer(layer1);
aggiungiLayer(layer2);
aggiungiLayer(layer3);
aggiungiLayer(layer4);  