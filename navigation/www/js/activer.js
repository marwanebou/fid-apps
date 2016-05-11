javascript:window.history.forward(1);
function ajout_fid()
{
	var nom_restaurant = localStorage.getItem("nom_restaurant");
	var IDClient = localStorage.getItem("IDClient");
	var num_carte_fid = document.forms["formulaire"]["num_carte_fid"].value;                
	var url= "http://ws-ifsproject2016.rhcloud.com/server.php/Ajout_fidelite_client_web";
	var pl = new SOAPClientParameters();
	pl.add("nom_restaurant", nom_restaurant);
	pl.add("IDClient", IDClient);
	pl.add("num_carte_fid", num_carte_fid);
	SOAPClient.invoke(url,"Ajout_fidelite_client_web", pl, false, login_callBack);
function login_callBack(s)
{
if (s)
		{
			alert("Votre fidelité est bien activé");
			window.location.href='dashboard.html';
		}
else 
		{
			localStorage.setItem("erreur_activation","Code incorrect");
			window.location.href='activer.html';
		}
}
}
var erreur = localStorage.getItem("erreur_activation");
localStorage.setItem("erreur_activation","");
if (erreur != null)
{
$("#erreur").append("<center><h2>"+erreur+"</h2></center>");
}