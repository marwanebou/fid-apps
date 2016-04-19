            function scan()
            {
                cordova.plugins.barcodeScanner.scan(
                    function (result) {
                        if(!result.cancelled)
                        {
						 document.forms["formulaire"]["codebarre"].value = result.text;
						 localStorage.setItem("codebarre",result.text); 
                        }
                    },
                    function (error) {
                        alert("Scanning failed: " + error);
                    }
               );
            }
