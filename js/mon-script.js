(function( $ ) { // début de fichier


    $('#menuSelector').on("click", function(){
        $('#mobileNav').slideToggle(400);
    });

    $('#commencez').on("click", function(){
        $('#placeholder').css( "display", "block" );
        $('#commencez').css( "display" , "none" );
        return false;
    });


    // $('#commencez').on("mouseover", function(){
    //     $('#imgHover').css( "display", "none" );
    //     $('#imgHoverbis').css( "display", "block" );
    //     // $('#commencez').css( "display" , "none" );
    //     return false;
    // });

    clearInterval()
commencez
})( jQuery ); // Fin de fichier