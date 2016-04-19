function loader_show(){
<<<<<<< HEAD
  			$.mobile.loading( "show", {
            text: "loading..",
            textVisible: true,
            theme:  $.mobile.loader.prototype.options.theme,
            textonly: false,
            html: ""
   				  });
		}
=======
$.mobile.loading("show",
{
text:"loading..",
textVisible:true,
theme:$.mobile.loader.prototype.options.theme,
textonly:false,
html:""
});
}
function loader_hide() 
{
   setTimeout(function(){
    $.mobile.loading("hide");
  }, 2000); 
}
>>>>>>> 4046cf207b0a0c0a25902f52911e6e939fab9741
