/*JavaScript - Erin J. LeFevre, Jeff Kalar 2020*/


var myMap = L.map('mapid', {
    center: [38.815461, -98.368361],
   zoom: 5,
    
    maxBounds: [
        [20.227970, -136.789512],
        [54.755261, -52.750122]
    ],
    maxZoom: 15,
    minZoom: 3
    
});

/*Background map tile layer 1*/
var basemap1 = L.tileLayer('https://api.mapbox.com/styles/v1/erin-lefevre/ckg03iir70ezk19qrtlwbzwtu/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXJpbi1sZWZldnJlIiwiYSI6ImNrZnljaWQ2eDBvd3gzM283eDdxaW03ZmwifQ.pUnzIpTy98k-H2VfbkPFkA', {
    
    maxZoom: 18,
    
}).addTo(myMap);

/*Background map tile layer 2*/
var basemap2 = L.tileLayer('https://api.mapbox.com/styles/v1/erin-lefevre/ckg05kat80jec19lan4o72erl/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXJpbi1sZWZldnJlIiwiYSI6ImNrZnljaWQ2eDBvd3gzM283eDdxaW03ZmwifQ.pUnzIpTy98k-H2VfbkPFkA', {           
            maxZoom: 18
        });


/*New marker for legal states*/
var goldcoin_legal = new L.Icon({
    iconUrl: 'images/goldcoin_legal.png',
    iconRetinaUrl: 'images/goldcoin_legal.png',    
    iconAnchor:  [35, 35],
    popupAnchor: [1, -34],   
    
  });

function onEachFeature(feature, layer) {
    console.log(feature);
    layer.bindPopup(feature.properties.Status);
  }

/*Add layers to map*/
/*States with legal gaming*/
var legalStatesGeoJSON = L.geoJSON(states_legal_points);

L.geoJson(states_legal_points, {
      pointToLayer: function(feature, latlng) {
        console.log(latlng, feature);
        return L.marker(latlng, {
          icon: goldcoin_legal
        });
      },
      onEachFeature: onEachFeature
    }).addTo(myMap);


/*End of legal States import and symbolize*/


/*New marker for states where it isn't legal to gamble*/
var goldcoin_legal_no = new L.Icon({
    iconUrl: 'images/goldcoin_legal_no.png',
    iconRetinaUrl: 'images/goldcoin_legal_no.png',    
    iconAnchor:  [35, 35],
    popupAnchor: [1, -34],   
    
  });

function onEachFeature(feature, layer) {
    console.log(feature);
    layer.bindPopup(feature.properties.Status);
  }

/*Add layers to map*/
/*States with no legal gaming*/
var nolegalStatesGeoJSON = L.geoJSON(states_legal_no_points);

L.geoJson(states_legal_no_points, {
      pointToLayer: function(feature, latlng) {
        console.log(latlng, feature);
        return L.marker(latlng, {
          icon: goldcoin_legal_no
        });
      },
      onEachFeature: onEachFeature
    }).addTo(myMap);


/*End of legal States import and symbolize*/

 











