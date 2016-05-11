document.forms["formulaire"]["Nom"].value = localStorage.getItem("username");
javascript:window.history.forward(1);
var parameters = location.search.substring(1).split("=");
var temp = parameters[1];
localStorage.setItem("restaurant", parameters[2]);
localStorage.setItem("nom_restaurant", temp);
function login_client()
{
$.mobile.loading( "show", {
	text: "loading..",
	textVisible: true,
	theme:  $.mobile.loader.prototype.options.theme,
	textonly: false,
	html: ""
});	
var nom_restaurant = localStorage.getItem("nom_restaurant");
var Nom = document.forms["formulaire"]["Nom"].value;
var pass = document.forms["formulaire"]["password"].value;
var url= "http://ws-ifsproject2016.rhcloud.com/server.php/login";
var pl = new SOAPClientParameters();
pl.add("nom_restaurant", nom_restaurant);
pl.add("Nom", Nom);
pl.add("password", pass);
SOAPClient.invoke(url,"login", pl, false, login_callBack);
	function login_callBack(s)
	{
		if ((pass == "") || (Nom == ""))
			{   function loader_hide() 
				{setTimeout(function(){	$.mobile.loading("hide");}, 1);}
				loader_hide();
				localStorage.setItem("erreur_login", "un champs obligatoire vide");
				window.location.href='login.html';
			}
		else 
			{
				var r = s.ch.split("=");
				var verif=r[0];
				if ((s.ch)=="0")
					{
						localStorage.setItem("erreur_login", "Mot de passe incorrect");
						localStorage.setItem("username",Nom);
						window.location.href='login.html';
					}	
				else if ((s.ch)=="1")
					{
						localStorage.setItem("erreur_login", "Login et mot de passe incorrects");
						window.location.href='login.html';
					}	
				else 
					{
						if (verif == "non_verif" )
							{
							email=r[1];
							localStorage.setItem("email",email);
							window.location.href='verification.html';
							}
						else
							{
							var r = s.ch.split("=");
							var fid=r[2];
							var IDClient=r[1];
							localStorage.setItem("IDClient",IDClient);
							localStorage.setItem("username",Nom);
							localStorage.setItem("password",pass);
							if (fid == "1") window.location.href='dashboard.html';
							else window.location.href='activer.html';
							}
					}
			function loader_hide() 
			{setTimeout(function(){	$.mobile.loading("hide");}, 1);}
			loader_hide();
			}
	}
}