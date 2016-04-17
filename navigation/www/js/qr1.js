            function scan()
            {
                cordova.plugins.barcodeScanner.scan(
                    function (result) {
                        if(!result.cancelled)
                        {
						 localStorage.setItem("codebarre",result.text);  
						 document.forms["formulaire"]["num_carte_fid"].value = result.text;
                        }
                    },
                    function (error) {
                        alert("Scanning failed: " + error);
                    }
               );
            }
