function loader_show(){
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