console.log("Hello, world!")


var map = L.map('mapid',{maxZoom:13, minZoom:7,attributionControl: false,
}).setView([40.9429216, -74.00685], 10);


// // homophily in simple crs:
// var homophily_i = '../images/homophily/BRAWLEY-HOMOPHILY-AXO-VIEW.png',
//     homophilyBounds = [[0,0], [.01892, .01886]];
//
// let homophily = L.imageOverlay(homophily_i, homophilyBounds,{interactive: true})
// homophily.addTo(map);
// homophily.on('click', function(e) {window.open('../homophily',"_self")+this});
// homophily.on('mouseover', function(d) {homophily.setOpacity(.3)});
// homophily.on('mouseout', function(d) {homophily.setOpacity(1)});


var homophily_i = '../images/homophily/BRAWLEY-HOMOPHILY-AXO-VIEW.png',
    homophilyBounds = [[40.589216, -73.808685], [40.850985, -74.0900374]];
let homophily = L.imageOverlay(homophily_i, homophilyBounds,{interactive: true})
homophily.addTo(map);
homophily.on('click', function(e) {window.open('../homophily',"_self")+this});
homophily.on('mouseover', function(d) {homophily.setOpacity(.3)});
homophily.on('mouseout', function(d) {homophily.setOpacity(1)});


var plain_i = '../images/in-plain-sight/BRAWLEY_IN-PLAIN-SIGHT_PHOTO_TOM_HARRIS_2.jpg',
    plainBounds = [[40.829216, -74.38685], [41.01000985, -74.040101374]];
let plain = L.imageOverlay(plain_i, plainBounds,{interactive: true})
plain.addTo(map);
plain.on('click', function(e) {window.open('../in-plain-sight',"_self")+this});
plain.on('mouseover', function(d) {plain.setOpacity(.3)});
plain.on('mouseout', function(d) {plain.setOpacity(1)});


var knowing_i = '../images/knowing-cities/BRAWLEY-KNOWING-CITIES-COVER-01.png',
    knowingBounds = [[41.109216, -73.952285], [41.2600299098, -73.64174]];
let knowing = L.imageOverlay(knowing_i, knowingBounds,{interactive: true})
knowing.addTo(map);
knowing.on('click', function(e) {window.open('../knowing-cities',"_self")+this});
knowing.on('mouseover', function(d) {knowing.setOpacity(.3)});
knowing.on('mouseout', function(d) {knowing.setOpacity(1)});


var lines_i = '../images/lines-of-sight/BRAWLEY-LINES-OF_SIGHT-MAP-1-Zoom.png',
    linesBounds = [[40.909216, -74.02285], [41.03299098, -73.77174]];
let lines = L.imageOverlay(lines_i, linesBounds,{interactive: true})
lines.addTo(map);
lines.on('click', function(e) {window.open('../lines-of-sight',"_self")+this});
lines.on('mouseover', function(d) {lines.setOpacity(.3)});
lines.on('mouseout', function(d) {lines.setOpacity(1)});


var synth_i = '../images/synthetics/BRAWLEY-SYNTHETICS-1.png',
    synthBounds = [[41.049216, -74.22285], [41.1500299098, -73.99174]];
let synth = L.imageOverlay(synth_i, synthBounds,{interactive: true})
synth.addTo(map);
synth.on('click', function(e) {window.open('../synthetics',"_self")+this});
synth.on('mouseover', function(d) {synth.setOpacity(.3)});
synth.on('mouseout', function(d) {synth.setOpacity(1)});


var vac_i = '../images/vacancy/BRAWLEY-VACANCY-1SM.jpg',
    vacBounds = [[40.669216, -74.55285], [40.809098, -74.30174]];
let vac = L.imageOverlay(vac_i, vacBounds,{interactive: true})
vac.addTo(map);
vac.on('click', function(e) {window.open('../vacancy',"_self")+this});
vac.on('mouseover', function(d) {vac.setOpacity(.3)});
vac.on('mouseout', function(d) {vac.setOpacity(1)});



var spec_i = '../images/speculation/speculation1.png',
    specBounds = [[40.979216, -73.752285], [41.1000299098, -73.24174]];
let spec = L.imageOverlay(spec_i, specBounds,{interactive: true})
spec.addTo(map);
spec.on('click', function(e) {window.open('../speculation-space',"_self")+this});
spec.on('mouseover', function(d) {spec.setOpacity(.3)});
spec.on('mouseout', function(d) {spec.setOpacity(1)});



//
// var pointA = new L.LatLng(40.599216, -74.57285);
// var pointB = new L.LatLng(40.599216, -73.70641);
// var pointList = [pointA, pointB];
//
// var firstpolyline = new L.Polyline(pointList, {
//     color: 'red',
//     weight: 3,
//     opacity: 0.5,
//     smoothFactor: 1
// });
// firstpolyline.addTo(map);
