function loader_show(){
  			$.mobile.loading( "show", {
            text: "loading..",
            textVisible: true,
            theme:  $.mobile.loader.prototype.options.theme,
            textonly: false,
            html: ""
   				 });
		}
function loader_hide(){
    $.mobile.loading( "hide" );
}