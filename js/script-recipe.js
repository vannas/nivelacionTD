
$(document).ready(function(){
    $('js-menu').hide();    

 //Ejercicio 7
    console.log('Pagina html cargada');
 
 //Ejercicio 8 y 9
    $('.js-show-recipe').on('click', function(ev){
        console.log('Haz click en Recipe');
        $('.page').removeClass('make');

        $(this).addClass('active');
        $('.js-show-make').removeClass('active');
    });

    $('js-show-make').on('click', function(ev){
        console.log('Haz click en Make');
        $('.page').addClass('make');

        $(this).addClass('active');
        $('.js-show-recipe').removeClass('active');
    });


 //Ejercicio 10
    $('.js-back').on('click', function(){
        window.location = './index.html';
    });
    
});