var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Ranhgioikontum_1 = new ol.format.GeoJSON();
var features_Ranhgioikontum_1 = format_Ranhgioikontum_1.readFeatures(json_Ranhgioikontum_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ranhgioikontum_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ranhgioikontum_1.addFeatures(features_Ranhgioikontum_1);
var lyr_Ranhgioikontum_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ranhgioikontum_1, 
                style: style_Ranhgioikontum_1,
                popuplayertitle: "Ranh gioi kon tum",
                interactive: true,
    title: 'Ranh gioi kon tum<br />\
    <img src="styles/legend/Ranhgioikontum_1_0.png" /> Đắk Glei<br />\
    <img src="styles/legend/Ranhgioikontum_1_1.png" /> Đắk Hà<br />\
    <img src="styles/legend/Ranhgioikontum_1_2.png" /> Đắk Tô<br />\
    <img src="styles/legend/Ranhgioikontum_1_3.png" /> Ia H\' Drai<br />\
    <img src="styles/legend/Ranhgioikontum_1_4.png" /> Kon Plông<br />\
    <img src="styles/legend/Ranhgioikontum_1_5.png" /> Kon Rẫy<br />\
    <img src="styles/legend/Ranhgioikontum_1_6.png" /> Kon Tum<br />\
    <img src="styles/legend/Ranhgioikontum_1_7.png" /> Ngọc Hồi<br />\
    <img src="styles/legend/Ranhgioikontum_1_8.png" /> Sa Thầy<br />\
    <img src="styles/legend/Ranhgioikontum_1_9.png" /> Tu Mơ Rông<br />\
    <img src="styles/legend/Ranhgioikontum_1_10.png" /> <br />'
        });
var format_NGST_2 = new ol.format.GeoJSON();
var features_NGST_2 = format_NGST_2.readFeatures(json_NGST_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NGST_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NGST_2.addFeatures(features_NGST_2);
var lyr_NGST_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NGST_2, 
                style: style_NGST_2,
                popuplayertitle: "ĐƯỜNG SẮT",
                interactive: true,
                title: '<img src="styles/legend/NGST_2.png" /> ĐƯỜNG SẮT'
            });
var format_NGL_3 = new ol.format.GeoJSON();
var features_NGL_3 = format_NGL_3.readFeatures(json_NGL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NGL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NGL_3.addFeatures(features_NGL_3);
var lyr_NGL_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NGL_3, 
                style: style_NGL_3,
                popuplayertitle: "ĐƯỜNG LỘ",
                interactive: true,
                title: '<img src="styles/legend/NGL_3.png" /> ĐƯỜNG LỘ'
            });
var format_UBND_4 = new ol.format.GeoJSON();
var features_UBND_4 = format_UBND_4.readFeatures(json_UBND_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UBND_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBND_4.addFeatures(features_UBND_4);
var lyr_UBND_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBND_4, 
                style: style_UBND_4,
                popuplayertitle: "UBND",
                interactive: true,
                title: '<img src="styles/legend/UBND_4.png" /> UBND'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Ranhgioikontum_1.setVisible(true);lyr_NGST_2.setVisible(true);lyr_NGL_3.setVisible(true);lyr_UBND_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Ranhgioikontum_1,lyr_NGST_2,lyr_NGL_3,lyr_UBND_4];
lyr_Ranhgioikontum_1.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_NGST_2.set('fieldAliases', {'FID_rail_d': 'FID_rail_d', 'F_CODE_DES': 'F_CODE_DES', 'EXS_DESCRI': 'EXS_DESCRI', 'FCO_DESCRI': 'FCO_DESCRI', 'FID_countr': 'FID_countr', 'ISO': 'ISO', 'ISOCOUNTRY': 'ISOCOUNTRY', });
lyr_NGL_3.set('fieldAliases', {'MED_DESCRI': 'MED_DESCRI', 'RTT_DESCRI': 'RTT_DESCRI', 'F_CODE_DES': 'F_CODE_DES', 'ISO': 'ISO', 'ISOCOUNTRY': 'ISOCOUNTRY', });
lyr_UBND_4.set('fieldAliases', {'id': 'id', 'UBND': 'UBND', });
lyr_Ranhgioikontum_1.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_NGST_2.set('fieldImages', {'FID_rail_d': '', 'F_CODE_DES': '', 'EXS_DESCRI': '', 'FCO_DESCRI': '', 'FID_countr': '', 'ISO': '', 'ISOCOUNTRY': '', });
lyr_NGL_3.set('fieldImages', {'MED_DESCRI': '', 'RTT_DESCRI': '', 'F_CODE_DES': '', 'ISO': '', 'ISOCOUNTRY': '', });
lyr_UBND_4.set('fieldImages', {'id': 'TextEdit', 'UBND': 'TextEdit', });
lyr_Ranhgioikontum_1.set('fieldLabels', {'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_NGST_2.set('fieldLabels', {'FID_rail_d': 'no label', 'F_CODE_DES': 'no label', 'EXS_DESCRI': 'no label', 'FCO_DESCRI': 'no label', 'FID_countr': 'no label', 'ISO': 'no label', 'ISOCOUNTRY': 'no label', });
lyr_NGL_3.set('fieldLabels', {'MED_DESCRI': 'no label', 'RTT_DESCRI': 'no label', 'F_CODE_DES': 'no label', 'ISO': 'no label', 'ISOCOUNTRY': 'no label', });
lyr_UBND_4.set('fieldLabels', {'id': 'no label', 'UBND': 'no label', });
lyr_UBND_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});