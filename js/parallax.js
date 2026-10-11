//usamos las medidas establecidas en media queries     
//aqui concatemanos una cadena de texto con una operación y otra cadena de texto, para que conforme le scroll avance el porcentaje cambie 
//al poner en valores negativos el translate del article entonce corre hacia arriba y los titulos hacia abajo

$(document).ready(function(){
    
    $(window).scroll(function(){
        var windowWidth = $(window).width();

        if(windowWidth > 800){ 
            var scroll = $(window).scrollTop();

             $('header .textos').css({
                'transform': 'translate(0px,'+ scroll / 2 + '%)'
             });
            
             $('.acerca-de article').css({
                'transform': 'translate(0px, -'+ scroll / 6 + '%)'
             });
           }
    });
    
//para que el efecto se anule cuando haya un cambio en el tamaño de la ventana o la pantalla d3l usuario lo ejecutamos del siguiente modo
    
    $(window).resize(function(){
        var windowWidt = $(window).width();
        if(windowWidt < 800){
            $('.acerca-de article').css({
                'transform': 'translate(0px, 0px)'
            });
        }
    });
    
});