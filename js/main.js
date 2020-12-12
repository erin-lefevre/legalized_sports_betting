/*JavaScript - Erin J. LeFevre, Jeff Kalar 2020*/


var myMap = L.map('mapid', {
   center: [42, -100],
   zoom: 4,
    
    maxBounds: [
        [32.420224, -127.689262],
        [48.939566, -64.057017]
    ],
    maxZoom: 15,
    minZoom: 2
    
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
    iconAnchor:  [10, 10],
	iconSize:    [20, 20],
    popupAnchor: [0, -8]   
    
  });

var legalStatesGeoJSON = L.geoJSON(states_legal_points, {
      pointToLayer: function(feature, latlng) {
        console.log(latlng, feature);
        return L.marker(latlng, {
          icon: goldcoin_legal
        });
      },
      onEachFeature: onEachFeature
    }).addTo(myMap);




/*New marker for states where it isn't legal to gamble*/
var goldcoin_legal_no = new L.Icon({
    iconUrl: 'images/goldcoin_legal_no.png',
    iconRetinaUrl: 'images/goldcoin_legal_no.png',    
    iconAnchor:  [5, 0],
	iconSize:    [15, 15],
    popupAnchor: [2, -2]   
    
  });

function onEachFeature(feature, layer) {
    console.log(feature);
     layer.bindPopup('<b>'+'State Name: '+'</b>'+ feature.properties.Name +
	 '<br>'+ '<b>'+'Status: '+'</b>'+ feature.properties.Status	+
	 '<br>'+ '<b>'+'Casinos: '+'</b>'+ feature.properties.Casinos
	  +'<br>'+ '<b>'+'Rules: '+'</b>'+ feature.properties.Rules);
  }


var nolegalStatesGeoJSON = L.geoJSON(states_legal_no_points, {
      pointToLayer: function(feature, latlng) {
        console.log(latlng, feature);
        return L.marker(latlng, {
          icon: goldcoin_legal_no
        });
      },
      onEachFeature: onEachFeature
    }).addTo(myMap);


/*New marker for states with an active bill*/
var goldcoin_active = new L.Icon({
    iconUrl: 'images/goldcoin_active.png',
    iconRetinaUrl: 'images/goldcoin_active.png',    
    iconAnchor:  [10, 10],
	iconSize:    [20, 20],
    popupAnchor: [0, -8]      
    
  });


var states_active_points = L.geoJSON(states_active_points, {
      pointToLayer: function(feature, latlng) {
        console.log(latlng, feature);
        return L.marker(latlng, {
          icon: goldcoin_active
        });
      },
      onEachFeature: onEachFeature
    }).addTo(myMap);




/*Layer control start*/
var basemaps = {
    "Gold & Black": basemap1,
    "Aerial Imagery": basemap2
  };

var overlays = {   
	"Legal States": legalStatesGeoJSON,
	"Active bill": states_active_points,
    "Illegal States": nolegalStatesGeoJSON
  };

L.control.layers(basemaps, overlays, {
    collapsed: false
}).addTo(myMap);

/* End of layer control*/


 











