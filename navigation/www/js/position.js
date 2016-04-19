$(document).ready(function() {
            // execute
            (function() {
                // map options
                var options = {
                    zoom: 5,
                    center: new google.maps.LatLng(39.909736, -98.522109), // centered US
                    mapTypeId: google.maps.MapTypeId.TERRAIN,
                    mapTypeControl: false
                };

<<<<<<< HEAD
$( document ).on( "pagecreate", "#map-page", function() {
var defaultLatLng = new google.maps.LatLng(34.0983425, -118.3267434);
if ( navigator.geolocation ) {
function success(pos) {
var url1= "http://ws-ifsproject2016.rhcloud.com/server.php/Affiche_restaurant";
var pl = new SOAPClientParameters();
SOAPClient.invoke(url1,"Affiche_restaurant", pl, false, restau_callBack);
function restau_callBack(a)
{              var options = 
                {
                    zoom: 5,
                    center: new google.maps.LatLng(39.909736, -98.522109), // centered US
                    mapTypeId: google.maps.MapTypeId.TERRAIN,
                    mapTypeControl: false
                };

                // init map
                var map = new google.maps.Map(document.getElementById('map-canvas'), options);
                // set multiple marker
				var longitude = pos.coords.longitude;
				var latitude = pos.coords.latitude;
				var adresse ="";
      var mytabex=a.restaurant.split("#");
	  var i=0;
      while (i!=((mytabex.length)-1)) 
	  { 
			        adresse ="restaurant"+i;
                    // init markers
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(latitude, longitude),
=======
                var map = new google.maps.Map(document.getElementById('map_canvas'), options);
                for (var i = 0; i < 10; i++) {
                    // init markers
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(Math.random(),Math.random()),
>>>>>>> 4046cf207b0a0c0a25902f52911e6e939fab9741
                        map: map,
                        title: 'Click Me ' + i
                    });

                    // process multiple info windows
<<<<<<< HEAD
                    (function(marker, i,adresse) {
                        // add click event
                        google.maps.event.addListener(marker, 'click', function() {
                            infowindow = new google.maps.InfoWindow({
                                content: adresse
                            });
                            infowindow.open(map, marker);
                        });
                    })(marker, i,adresse);
					latitude = latitude+0.04;
					longitude = longitude+0.05;
		i=i+1;

                }

}
}
function fail(error) {
//drawMap(defaultLatLng);  // Failed to find location, show default map
}
// Find the users current position.  Cache the location for 5 minutes, timeout after 6 seconds
navigator.geolocation.getCurrentPosition(success, fail, {maximumAge: 500000, enableHighAccuracy:true, timeout: 6000});
} else {
drawMap(defaultLatLng);  // No geolocation support, show default map
}
});
=======
                    (function(marker, i) {
                        // add click event
                        google.maps.event.addListener(marker, 'click', function() {
                            infowindow = new google.maps.InfoWindow({
                                content: 'Hello, World!!'
                            });
                            infowindow.open(map, marker);
                        });
                    })(marker, i);
                }
            })();
        });
>>>>>>> 4046cf207b0a0c0a25902f52911e6e939fab9741
