function details()
{
//document.getElementById("avantages").innerHTML = "Acura";
}
function avantages()
{
//document.getElementById("details").innerHTML = "Acura5";
}
$(function(){$("#ticker01").liScroll();});
javascript:window.history.forward(1);
var nom_restaurant = localStorage.getItem("nom_restaurant");
var IDClient = localStorage.getItem("IDClient");
var url= "http://ws-ifsproject2016.rhcloud.com/server.php/affiche_client";
var pl = new SOAPClientParameters();
pl.add("nom_restaurant", nom_restaurant);
pl.add("IDClient", IDClient);
SOAPClient.invoke(url,"affiche_client", pl, false, affiche_callBack);		
function affiche_callBack(s)	
{
document.getElementById("text").innerHTML = nom_restaurant;
$("#points").append(s.tab.point+" Points");
$("#avantages").append(s.tab.offre);
alert(s.tab.offre);
}