javascript:window.history.forward(1);
function renvoyer()
{
var url= "http://ws-ifsproject2016.rhcloud.com/server.php/mailing";
var nom_restaurant = localStorage.getItem("nom_restaurant");
var nom="";
var prenom="";
var email = localStorage.getItem("email");
var pl = new SOAPClientParameters();
pl.add("nom_restaurant", nom_restaurant);
pl.add("email", email);
pl.add("nom", nom);
pl.add("prenom", prenom);
SOAPClient.invoke(url, "mailing", pl, true, renvoyer_callBack);

function renvoyer_callBack(res)
{

alert("un nouveau code est envoyé");
window.location.href="verification.html";		
}

}

function verifier()
{
var url= "http://ws-ifsproject2016.rhcloud.com/server.php/verif_code";
var nom_restaurant = localStorage.getItem("nom_restaurant");
var email = localStorage.getItem("email");
code = document.forms["formulaire"]["code"].value;
var pl = new SOAPClientParameters();
pl.add("nom_restaurant", nom_restaurant);
pl.add("email", email);
pl.add("code", code);
SOAPClient.invoke(url, "verif_code", pl, true, verif_callBack);

function verif_callBack(bol)
{
if (bol.res)
		{
		alert("Votre compte est activé");
        window.location.href="login.html";		
		}
else 
{
		alert("Code incorrect");
        window.location.href="verification.html";
}
}
}