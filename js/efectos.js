$(document).ready(function(){
 //vamos a poner los enlaces del menu en la parte de arriba para esconderlos, gracias a que usamos la position: relative en css
    
//index es para q aplique los tiempos conforme esta ubicados en el array y asi baja uno por uno, multiplicando por el tiempo que yo quiera q tarde en bajar cada uno
    
   $('.menu a').each(function(index, elemento){
       $(this).css({
          'top': '-200px' 
       });
       
       $(this).animate({
           top: '0'
       }, 2000 + (index * 500));
   });
//--- Efecto Header queremos que carge con opacidad de 0 y de abajo hacia arriba con el marginTop 0
    
    if($(window).width() > 800){
        $('header .textos').css({
           opacity: 0,
            marginTop: 0
        });
        
       $('header .textos').animate({
           opacity: 1,
            marginTop: '-52px'
        }, 2000); 
    }
    
//--- scroll Elementos menu

    var acercaDe = $('#acerca-de').offset().top,  //para calcular la posicion en pantalla de la sección
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;
    
    $('#btn-acerca-de').on('click', function(e){        
            e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe -100 //hay que ir calculando para dejarlo en el punto que queremos
        }, 500);           
      
    });
    
        
    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        }, 500);
     });
    
        
    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria 
        }, 500);
     });
    
        
    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion 
        }, 500);
    });   
    
    
});