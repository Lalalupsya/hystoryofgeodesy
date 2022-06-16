var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format____1 = new ol.format.GeoJSON();
var features____1 = format____1.readFeatures(json____1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource____1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource____1.addFeatures(features____1);
var lyr____1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource____1, 
                style: style____1,
                interactive: true,
    title: 'Зоны_ответственности_АГП<br />\
    <img src="styles/legend/___1_0.png" /> Астраханское АГП<br />\
    <img src="styles/legend/___1_1.png" /> Аэрогеодезия<br />\
    <img src="styles/legend/___1_2.png" /> Балтийское АГП<br />\
    <img src="styles/legend/___1_3.png" /> Верхневолжское АГП<br />\
    <img src="styles/legend/___1_4.png" /> Верхнеенисейское АГП<br />\
    <img src="styles/legend/___1_5.png" /> Восточно-Сибирское АГП<br />\
    <img src="styles/legend/___1_6.png" /> Дальневосточное АГП<br />\
    <img src="styles/legend/___1_7.png" /> Забайкальское АГП<br />\
    <img src="styles/legend/___1_8.png" /> Западно-Сибирское АГП<br />\
    <img src="styles/legend/___1_9.png" /> Инжгеодезия<br />\
    <img src="styles/legend/___1_10.png" /> Красноярское АГП<br />\
    <img src="styles/legend/___1_11.png" /> Московское АГП<br />\
    <img src="styles/legend/___1_12.png" /> Новгородское АГП<br />\
    <img src="styles/legend/___1_13.png" /> Приморское АГП<br />\
    <img src="styles/legend/___1_14.png" /> Северо-Восточное АГП<br />\
    <img src="styles/legend/___1_15.png" /> Северо-Кавказское АГП<br />\
    <img src="styles/legend/___1_16.png" /> Средневолжское АГП<br />\
    <img src="styles/legend/___1_17.png" /> УралАэрогеодезия<br />\
    <img src="styles/legend/___1_18.png" /> Уралмаркшейдерия<br />\
    <img src="styles/legend/___1_19.png" /> Центрмаркшейдерия<br />\
    <img src="styles/legend/___1_20.png" /> Южное АГП<br />\
    <img src="styles/legend/___1_21.png" /> Якутское АГП<br />\
    <img src="styles/legend/___1_22.png" /> <br />'
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> Административные границы'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> Фотографии'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr____1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr____1,lyr__2,lyr__3];
lyr____1.set('fieldAliases', {'ID1': 'ID1', 'Зона_ответственности': 'Зона_ответственности', });
lyr__2.set('fieldAliases', {'Регион': 'Регион', });
lyr__3.set('fieldAliases', {'id': '№', 'Photo': 'Photo', 'Аpхив_Предприятие': 'Предприятие', 'Аpхив_место сьемки': 'Место съемки', 'Аpхив_Должность': 'Должность', 'Аpхив_Исполнитель': 'Исполнитель', 'Аpхив_Вид работ(либо подпись фото)': 'Вид работ', 'Аpхив_Дата': 'Дата съемки', });
lyr____1.set('fieldImages', {'ID1': 'Range', 'Зона_ответственности': 'TextEdit', });
lyr__2.set('fieldImages', {'Регион': 'TextEdit', });
lyr__3.set('fieldImages', {'id': 'TextEdit', 'Photo': 'ExternalResource', 'Аpхив_Предприятие': 'TextEdit', 'Аpхив_место сьемки': 'TextEdit', 'Аpхив_Должность': 'TextEdit', 'Аpхив_Исполнитель': 'TextEdit', 'Аpхив_Вид работ(либо подпись фото)': 'TextEdit', 'Аpхив_Дата': 'TextEdit', });
lyr____1.set('fieldLabels', {'ID1': 'no label', 'Зона_ответственности': 'inline label', });
lyr__2.set('fieldLabels', {'Регион': 'inline label', });
lyr__3.set('fieldLabels', {'id': 'inline label', 'Photo': 'no label', 'Аpхив_Предприятие': 'header label', 'Аpхив_место сьемки': 'header label', 'Аpхив_Должность': 'header label', 'Аpхив_Исполнитель': 'header label', 'Аpхив_Вид работ(либо подпись фото)': 'header label', 'Аpхив_Дата': 'header label', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});