

$(document).ready(function(){


     $(window).scroll(function(){
     	let windowWidth = $(window).width();

        // para ejecurtar el código si no es un movil
        // to execute the code if it is not a mobile
        if(windowWidth > 800) {
        	let scroll = $(window).scrollTop();

            // para que baje el texto
        	$('header .textos').css({
        		'transform': 'translate(0px,' + scroll / 2 + '%)'
        	});


        	// para que baje el acerca de
        	$('.acerca-de article').css({
        		'transform': 'translate(0px, -' + scroll / 4 + '%)'
        	});
        }
     });


     $(window).resize(function(){
     	let windowSize = $(window).width();

     	if(windowSize < 800) {
     		$('.acerca-de article').css({
        		'transform': 'translate(0px, 0px)'
        	});
     	}
     });

});