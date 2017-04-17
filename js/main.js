jQuery(document).ready(function($){
    $('.btn-menu').click(function(){
        $('.body').toggleClass('close-container');
    });
    $('.menu-toggle').click(function(){
        $(this).children('.submenu').toggleClass('submenu-open');
    });
    const data = new Date();
    $('#data-ocorrencia').val( data.toJSON().slice(0,10));

});

