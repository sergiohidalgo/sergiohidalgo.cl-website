$(document).ready(function () {

    // Cuando se hace scroll se achiva el header
    function posicionarMenu() {
        if ($(window).scrollTop() >= 80) {
            $('body').addClass('pequeno').removeClass('grande');
        } else if ($(window).scrollTop() <= 150) {
            $('body').addClass('grande').removeClass('pequeno');
        }
    }
    posicionarMenu();
    
    //Controla los hover de los circulos
    function activaHover(ElemntoaActivar) {
        $(ElemntoaActivar).hover(function () {
            $(this).addClass('activado');
        }, function () {
            $(this).removeClass('activado');
        });
        $(ElemntoaActivar).click(function(){
            $(this).addClass('activado');
        });
    };
    activaHover('li.codigo');
    activaHover('li.usuarios');
    activaHover('li.seo');
    activaHover('li.diseno');

    //Aparece el mensaje de abajo de cada conocimiento
    $('.descripcionAll').hide();
    $('li.codigo').click(function () {
        $('.descripcionAll').hide();
        $('.descripcionCodigo').fadeIn();
    });
    $('li.usuarios').click(function () {
        $('.descripcionAll').hide();
        $('.descripcionUsuarios').fadeIn();
    });
    $('li.seo').click(function () {
        $('.descripcionAll').hide();
        $('.descripcionSeo').fadeIn();
    });
    $('li.diseno').click(function () {
        $('.descripcionAll').hide();
        $('.descripcionDiseno').fadeIn();
    });
    
    //Desaparecen los mensaje al hacer click en la X
     $('.fa-times').click(function(){
        $('.descripcionAll').fadeOut(1000);
    });
    
    //Al hacer click en un conocimiento se hace scroll automatico
    $('li.codigo, li.usuarios, li.seo, li.diseno, .conocimiento').on('click', function () {
        $('html, body').animate({
            scrollTop: 390
        }, 'fast');
        return false;
    });

    //Aparece el menu de arriba{
    /*
    //CSS
    
    .navPrincipal{
    top:-70px;
    }
    
    function apareceMenu() {
        if ($(window).scrollTop() >= 250) {
            $('.navPrincipal').animate({
                'top':'0px'
            },1000);
        }
        else if ($(window).scrollTop() <= 250) {
            $('.navPrincipal').animate({
                'top':'-70px'
            },1000);
        }
        else{
            $('.navPrincipal').animate({
                'top':'-70px'
            },1000);
        }
    }
    apareceMenu();
    */
    
    //Paralax Conocimientos:
    function paralaxConocimientos() {
        if ($(window).scrollTop() <= 280) {
            var posicionBG = 'center -' + $(window).scrollTop() + 'px';
        }
        $('.concimientos').css('background-position', posicionBG);
    }
    paralaxConocimientos();

    //Scroll suave
    $(function () {
        $('body').wrapInner('<div class="smoothScrollDiv"></div>');
        var smoothScroller = $('.smoothScrollDiv');

        $('body').height(smoothScroller.height());
        $(window).scroll(function () {
            smoothScroller.stop().animate({
                top: -$(this).scrollTop()
            }, 500);
        });
    })

    
    //Aplico la clase active segun scroll en pantalla
    var scroll;
    $(window).scroll(function () {
        scroll = $(window).scrollTop();
    });

    $('.menuTop > li > a.home').addClass('active');

    $(window).scroll(function () {
        if (scroll < 300) {
            $('.menuTop > li > a').removeClass('active');
            $('.menuTop > li > a.home').addClass('active');
        } else if (scroll > 380) {
            $('.menuTop > li > a').removeClass('active');
            $('.menuTop > li > a.conocimiento').addClass('active');
        }
    });

    $("#LogoSVG").hover(function(){
        $('.exclamacion').addClass('.shake-constant');
    });
    
    //Ejecuto las funciones al tener el evento scroll
    $(window).scroll(function () {
        //apareceMenu();
        posicionarMenu();
        paralaxConocimientos();
    });
    
    //Animar elmento blog en el menu
    
    function animarBlog(){   
        $('.blog').animate({
            opacity: 0.2
        }, 600, function() {
            $('.blog').animate({
                opacity: 1
            }, 800, function() {
                animarBlog();
        });
      });
    }

    animarBlog();
    
   //Copiamos el ancho y lo ponemos como alto en portafolio
    
    function copioAnchoyPegoAlto(proyecto){
    var anchoProyecto = $(proyecto).width();
    $(proyecto).height(anchoProyecto);
    }
    copioAnchoyPegoAlto('.proyecto1');
    copioAnchoyPegoAlto('.proyecto2');
    copioAnchoyPegoAlto('.proyecto3');
    copioAnchoyPegoAlto('.proyecto4');
    
    
}); // fin Ready