javascript:window.history.forward(1);
var restaurant = localStorage.getItem("list");
alert(restaurant);
var mytabex=restaurant.split("#");
var i=0;
var id_restaurant="";
while (i < ((mytabex.length)-6)) 
{ 
	id_restaurant="restaurant_"+mytabex[i+4]+"="+mytabex[i];
	$("#zoneresto").append("<div class=col-md-12 col-sm-12><div class=blog-post><div class=blog-thumb> <img onclick=window.location.href='accueil.html?restaurant="+id_restaurant+"' src='http://ws-ifsproject2016.rhcloud.com/img/"+mytabex[i+4]+".png'> </div> <div class=blog-content><div class=content-show><h1>"+mytabex[i]+"</h1></div><div style='display: none;' class=content-hide></div></div></div> </div>");
	$("#recherche").append("<li><a onclick=window.location.href='accueil.html?restaurant="+id_restaurant+"'>"+mytabex[i]+"</a></li>");
	$("#recherche1").append("<li><a onclick=window.location.href='accueil.html?restaurant="+id_restaurant+"'>"+mytabex[i]+"</a></li>");
	i=i+6;
}