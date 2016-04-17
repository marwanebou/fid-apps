 function myFunction() 
			{
            maDiv = document.createElement("div");
			maDiv.data-role='content';
			maDiv.innerHTML ='<ul data-role="listview" data-inset="true"><li><a href="index.html"><img src="img/logo.png"> <p class="ui-li-aside">iOS</p></a></li></ul>';
	        document.getElementById("demo-page").append(maDiv);
			}
			function test()
			 {
          document.write("<div id='header'> \n");
          document.write("   <p class='certif'>Voici un paragraphe</p>  \n");
          document.write("</div>\n");
		     }