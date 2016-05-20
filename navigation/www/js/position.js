function initialize() { 
				$.mobile.loading( "show", {
				text: "loading..",
				textVisible: true,
				theme:  $.mobile.loader.prototype.options.theme,
				textonly: false,
				html: ""
					});	
                function success(pos)
				{
				var myLatlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

                var mapOptions = {
                  zoom:6,
                  center: myLatlng,
                  mapTypeId: google.maps.MapTypeId.ROADMAP
                };								
				var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
				var marker = new google.maps.Marker({
                  position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                  map: map,
				  icon : "http://maps.google.com/mapfiles/ms/icons/blue.png",
                  title: 'Click Me '});
				var list = localStorage.getItem("list");
				var tab=list.split("#");
				var i=0;
                while (i <= ((tab.length)-6))
				{			 
			           var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(tab[i+3],tab[i+2]),
                        map: map,
                        title: 'Click Me ' + i
                    });

                    // process multiple info windows
                    (function(marker, i) {
                        // add click event
                        google.maps.event.addListener(marker, 'click', function() {
                            infowindow = new google.maps.InfoWindow({
                                content: 'Restaurant:'
                            });
                            infowindow.open(map, marker);
                        });
                    })(marker, i);
					
					i=i+6;
				}
				function loader_hide() 
				{setTimeout(function(){	$.mobile.loading("hide");}, 1);}
				loader_hide();
			}    
			function fail(error)
				{
				function loader_hide() 
				{setTimeout(function(){	$.mobile.loading("hide");}, 1);}
				loader_hide();
				var erreur = localStorage.getItem("erreur");
				if (erreur == null)
					{	
					localStorage.setItem("erreur","erreur");
					$("#map-canvas").append("<center><p>Problème de localisation</p></center>");
					$("#map-canvas").append("<center><button onclick='return initialize();'>Actualiser</button></center>");					
					} 	
				}
				navigator.geolocation.getCurrentPosition(success, fail, {maximumAge: 500000, enableHighAccuracy:true, timeout: 6000});			
			}			
google.maps.event.addDomListener(window, 'load', initialize); 	
document.addEventListener("offline", onOfline, false);
function onOfline() 
{
alert("Verifier votre connexion internet");
}	
if (localStorage.getItem("username") != null)
{
window.location.href='dashboard.html';
}
else 
{
javascript:window.history.forward(1);
localStorage.clear();
var url1= "http://ws-ifsproject2016.rhcloud.com/server.php/Affiche_restaurant";
var pl = new SOAPClientParameters();
SOAPClient.invoke(url1,"Affiche_restaurant", pl, false, restau_callBack);
function restau_callBack(a)
{    
  localStorage.setItem("list", a.restaurant);
  var mytabex=a.restaurant.split("#");
  var i=0;
  var id_restaurant="";
  while (i < ((mytabex.length))-6) 
	  { 
		id_restaurant="restaurant_"+mytabex[i+5]+"="+mytabex[i];
		$("#zoneresto").append("<a onclick=window.location.href='accueil.html?restaurant="+id_restaurant+"'><div class=col-md-12 col-sm-12><div class=blog-post><div class=blog-thumb> <img src='data:image/jpeg;base64,"+mytabex[i+1]+"'> </div> <div class=blog-content><div class=content-show><a onclick=window.location.href='accueil.html?restaurant="+id_restaurant+"'>"+mytabex[i]+"</a></div><div style='display: none;' class=content-hide><p></p></div></div></div> </div></a>");
		$("#recherche").append("<li><a onclick=window.location.href='accueil.html?restaurant="+id_restaurant+"'>"+mytabex[i]+"</a></li>");
		$("#recherche1").append("<li><a onclick=window.location.href='accueil.html?restaurant="+id_restaurant+"'>"+mytabex[i]+"</a></li>");
		i=i+6;
	  }
}
}
