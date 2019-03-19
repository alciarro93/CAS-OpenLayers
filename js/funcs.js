function aggiungiLayer(layer){
    layer.setVisible(true);
    map.addLayer(layer);
}
  
function rimuoviLayer(layer){
    map.removeLayer(layer);
}

function creaLayer(titolo, gj, stile){
    var layer = new ol.layer.Vector({
        title: titolo,
        source: new ol.source.Vector({
                url: "geoJson/" + gj + ".json",
                format: new ol.format.GeoJSON()
        }),
        style: stile
    });
    return layer;
}

function creaStile(r,g,b, insensity){
    var _myStroke = new ol.style.Stroke({
        color : 'rgba('+r+','+g+','+b+','+insensity+')',
        width : 1    
    });
    var _myFill = new ol.style.Fill({
        color : 'rgba('+r+','+g+','+b+','+insensity+')',
    });
    return new ol.style.Style({
        stroke : _myStroke,
        fill : _myFill
    });
}

function changeLayerColor(r,g,b,num){
    var insensity = document.getElementById('q' + num).value;
    var titolo = 'GeoJSON Layer ' + num;
    switch (num){
        case 1:
            rimuoviLayer(layer1)
            layer1 = creaLayer(titolo, num, creaStile(r,g,b, insensity));
            aggiungiLayer(layer1);
            break;
        case 2:
            rimuoviLayer(layer2)
            layer2 = creaLayer(titolo, num, creaStile(r,g,b, insensity));
            aggiungiLayer(layer2);
            break;
        case 3:
            rimuoviLayer(layer3)
            layer3 = creaLayer(titolo, num, creaStile(r,g,b, insensity));
            aggiungiLayer(layer3);
            break;
        case 4:
            rimuoviLayer(layer4)
            layer4 = creaLayer(titolo, num, creaStile(r,g,b, insensity));
            aggiungiLayer(layer4);
            break;
      }
}