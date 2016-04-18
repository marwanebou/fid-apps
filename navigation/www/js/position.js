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

                var map = new google.maps.Map(document.getElementById('map_canvas'), options);
                for (var i = 0; i < 10; i++) {
                    // init markers
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(Math.random(),Math.random()),
                        map: map,
                        title: 'Click Me ' + i
                    });

                    // process multiple info windows
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