var interval = setInterval(function(){
        $.mobile.loading('show');
        clearInterval(interval);
    },1);   
interval();	
/*
    var interval = setInterval(function(){
        $.mobile.loading('hide');
        clearInterval(interval);
    },1);      
	*/