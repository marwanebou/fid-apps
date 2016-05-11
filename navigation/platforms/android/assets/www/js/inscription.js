javascript:window.history.forward(1);
function inscription()
{
$.mobile.loading( "show", {
					text: "loading..",
					textVisible: true,
					theme:  $.mobile.loader.prototype.options.theme,
					textonly: false,
					html: ""
});	
var url= "http://ws-ifsproject2016.rhcloud.com/server.php/Ajout_client_web";
var nom_restaurant = localStorage.getItem("nom_restaurant");
var cordonne = new Array();
cordonne["login"] = document.forms["formulaire"]["login"].value;
cordonne["password"] = document.forms["formulaire"]["password"].value;
cordonne["nom"] = document.forms["formulaire"]["nom"].value;
cordonne["prenom"] = document.forms["formulaire"]["prenom"].value;
cordonne["civilite"] =civilite.options[civilite.selectedIndex].value;
cordonne["societe"] = "";
cordonne["telfixe"] = "";
cordonne["telmobile"] = document.forms["formulaire"]["telmobile"].value;
cordonne["email"] = document.forms["formulaire"]["email"].value;
cordonne["fax"] = "";
cordonne["adresse"] = "";
cordonne["codepostal"] = "";
cordonne["ville"] = "";
cordonne["pays"] = "";
cordonne["code1"] = "";
cordonne["code2"] = "";
cordonne["interphone1"] = "";
cordonne["interphone2"] = "";
cordonne["etage"] = "";
cordonne["porte"] = "";
cordonne["codebarre"] = document.forms["formulaire"]["codebarre"].value;
cordonne["commentaire"] = "";
if ((cordonne["login"]=="")||(cordonne["email"]=="")||(cordonne["password"]==""))
{
function loader_hide() 
{setTimeout(function(){	$.mobile.loading("hide");}, 1);}
loader_hide();
localStorage.setItem("erreur_inscription", "champs obligatoires vides");
window.location.href='inscription.html';
}
else 
{
var pl = new SOAPClientParameters();
pl.add("cordonne", cordonne);
pl.add("nom_restaurant", nom_restaurant);
SOAPClient.invoke(url, "Ajout_client_web", pl, false, inscription_callBack);
function inscription_callBack(res)
{
if (res.bol == "erreur_code_barre")
{
localStorage.setItem("erreur_inscription", "Code à barre existe déja");	
window.location.href='inscription.html';
}
else
{
if (res.bol)
		{
		localStorage.setItem("email",cordonne["email"]);
		alert("un code de verification est envoyé a votre email");
		window.location.href="verification.html";	
		}
   else 
        {
		localStorage.setItem("erreur_inscription", "Ces informations existent déja pour un client");
		window.location.href='inscription.html';
		}
}
		
}
function loader_hide() 
{setTimeout(function(){	$.mobile.loading("hide");}, 1);}
loader_hide();
}
}
var erreur = localStorage.getItem("erreur_inscription");
localStorage.setItem("erreur_inscription","");
if (erreur != null)
{
$("#erreur").append("<center><h2>"+erreur+"</h2></center>");
}