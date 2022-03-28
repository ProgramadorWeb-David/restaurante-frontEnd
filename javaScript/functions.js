

$(document).ready(function(){


    // --- EFECTO MENÚ ---
    // each();  sirve para aplicarle a cada uno de los elementos
    $('.menu a').each(function(index, elemento) {
        
        $(this).css({
        	'top': '-200px'
        });

        $(this).animate({
        	top: '0'
        }, 2000 + (index * 500));

    });


    // --- EFECTO HEADER ---
    if( $(window).width() > 800 ) {
        $('header .textos').css({
        	opacity: 0,
        	marginTop: 0
        });

        $('header .textos').animate({
        	opacity: 1,
        	marginTop: '-52px'
        }, 2000);        
    }


    // --- SCROLL ELEMENTOS MENÚ ---
    let acercaDe   = $('#acerca-de').offset().top,
        menu       = $('#platillos').offset().top,
        galeria    = $('#galeria').offset().top,
        ubicacion  = $('#ubicacion').offset().top;



    // para ACERCA-DE
    $('#btn-acerca-de').on('click', function(e){

       // para sacar el # que sale en la url
       e.preventDefault();

       // hace scroll 550px ya que tiene parallax
       $('html, body').animate({
       	   // scrollTop: 680
       	   scrollTop: '550px'
       }, 1000);
    });


    // para MENU
    $('#btn-menu').on('click', function(f){

       // para sacar el # que sale en la url
       f.preventDefault();

       // hace scroll 680px o con la variable
       $('html, body').animate({
       	   // scrollTop: 680
       	   scrollTop: menu
       }, 1000);
    });



    // para GALERIA
    $('#btn-galeria').on('click', function(g){

       // para sacar el # que sale en la url
       g.preventDefault();

       // hace scroll 680px o con la variable
       $('html, body').animate({
       	   // scrollTop: 680
       	   scrollTop: galeria
       }, 1000);
    });



    // para UBICACION
    $('#btn-ubicacion').on('click', function(h){

       // para sacar el # que sale en la url
       h.preventDefault();

       // hace scroll 680px o con la variable
       $('html, body').animate({
       	   // scrollTop: 680
       	   scrollTop: ubicacion
       }, 1000);
    });


});