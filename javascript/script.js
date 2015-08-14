
$(document).ready(function() {
    var s=true;
   /* $('a').mouseenter(function() {
        $(this).fadeTo('fast', 1);

    });
    $('a').mouseleave(function() {
        $(this).fadeTo('fast', 0.5);

    });*/

/*    $('p').mouseenter(function() {
        if (s===false) {$(this).animate({fontSize: '2em'},"slow")}
    });

    $('p').mouseleave(function() {
        if (s===false) {$(this).animate({fontSize: '1em'})}
    });*/
    $('img').click(function(){
        if (s) {$(this).animate({left: '250px'}); s=false}
        else  if (s===false) {$(this).animate({left: '0px'}); s=true}

    });
});
