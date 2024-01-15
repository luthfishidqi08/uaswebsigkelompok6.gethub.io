var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KecamatanDiKotaYogyakarta_2 = new ol.format.GeoJSON();
var features_KecamatanDiKotaYogyakarta_2 = format_KecamatanDiKotaYogyakarta_2.readFeatures(json_KecamatanDiKotaYogyakarta_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanDiKotaYogyakarta_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanDiKotaYogyakarta_2.addFeatures(features_KecamatanDiKotaYogyakarta_2);
var lyr_KecamatanDiKotaYogyakarta_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecamatanDiKotaYogyakarta_2, 
                style: style_KecamatanDiKotaYogyakarta_2,
                interactive: true,
    title: 'Kecamatan Di Kota Yogyakarta<br />\
    <img src="styles/legend/KecamatanDiKotaYogyakarta_2_0.png" /> DANUREJAN<br />\
    <img src="styles/legend/KecamatanDiKotaYogyakarta_2_1.png" /> GEDONGTENGEN<br />\
    <img src="styles/legend/KecamatanDiKotaYogyakarta_2_2.png" /> GONDOKUSUMAN<br />\
    <img src="styles/legend/KecamatanDiKotaYogyakarta_2_3.png" /> GONDOMANAN<br />\
    <img src="styles/legend/KecamatanDiKotaYogyakarta_2_4.png" /> JETIS<br />\
    <img src="styles/legend/KecamatanDiKotaYogyakarta_2_5.png" /> KOTAGEDE<br />\
    <img src="styles/legend/KecamatanDiKotaYogyakarta_2_6.png" /> KRATON<br />\
    <img src="styles/legend/KecamatanDiKotaYogyakarta_2_7.png" /> MANTRIJERON<br />\
    <img src="styles/legend/KecamatanDiKotaYogyakarta_2_8.png" /> MERGANGSAN<br />\
    <img src="styles/legend/KecamatanDiKotaYogyakarta_2_9.png" /> NGAMPILAN<br />\
    <img src="styles/legend/KecamatanDiKotaYogyakarta_2_10.png" /> PAKUALAMAN<br />\
    <img src="styles/legend/KecamatanDiKotaYogyakarta_2_11.png" /> TEGALREJO<br />\
    <img src="styles/legend/KecamatanDiKotaYogyakarta_2_12.png" /> UMBULHARJO<br />\
    <img src="styles/legend/KecamatanDiKotaYogyakarta_2_13.png" /> WIROBRAJAN<br />'
        });
var format_Titik_Rumah_Sakit_3 = new ol.format.GeoJSON();
var features_Titik_Rumah_Sakit_3 = format_Titik_Rumah_Sakit_3.readFeatures(json_Titik_Rumah_Sakit_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_Rumah_Sakit_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_Rumah_Sakit_3.addFeatures(features_Titik_Rumah_Sakit_3);
var lyr_Titik_Rumah_Sakit_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Titik_Rumah_Sakit_3, 
                style: style_Titik_Rumah_Sakit_3,
                interactive: true,
                title: '<img src="styles/legend/Titik_Rumah_Sakit_3.png" /> Titik_Rumah_Sakit'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_KecamatanDiKotaYogyakarta_2.setVisible(true);lyr_Titik_Rumah_Sakit_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_OpenStreetMap_1,lyr_KecamatanDiKotaYogyakarta_2,lyr_Titik_Rumah_Sakit_3];
lyr_KecamatanDiKotaYogyakarta_2.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', });
lyr_Titik_Rumah_Sakit_3.set('fieldAliases', {'Keterangan': 'Keterangan', 'X': 'X', 'Y': 'Y', });
lyr_KecamatanDiKotaYogyakarta_2.set('fieldImages', {'KECAMATAN': 'TextEdit', });
lyr_Titik_Rumah_Sakit_3.set('fieldImages', {'Keterangan': '', 'X': '', 'Y': '', });
lyr_KecamatanDiKotaYogyakarta_2.set('fieldLabels', {'KECAMATAN': 'inline label', });
lyr_Titik_Rumah_Sakit_3.set('fieldLabels', {'Keterangan': 'inline label', 'X': 'no label', 'Y': 'no label', });
lyr_Titik_Rumah_Sakit_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});