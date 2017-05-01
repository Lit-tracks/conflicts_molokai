$(document).ready(function() {
   
    //Preload
    $('<img/>').hide().attr('src', 'https://puu.sh/vBU3e/0757890a6e.jpg').load(function(){
        $('body').append($(this));
    });
    
        $('<img/>').hide().attr('src', 'https://puu.sh/vBU1L/071217c686.jpg').load(function(){
        $('body').append($(this));
    });

        $('<img/>').hide().attr('src', 'http://www.planwallpaper.com/static/images/colorful-triangles-background_yB0qTG6_dyJop8X.jpg').load(function(){
        $('body').append($(this));
    });

        $('<img/>').hide().attr('src', 'https://puu.sh/vBUaP/05b265cd45.jpg').load(function(){
        $('body').append($(this));
    });

        $('<img/>').hide().attr('src', 'https://puu.sh/vBUiL/5681972a03.jpg').load(function(){
        $('body').append($(this));
    });
    
    $('#mm').hover(function() {
        $('body').css('background-image', 'url("https://puu.sh/vBU3e/0757890a6e.jpg")');
    }, function() {
        $('body').css('background', '');

    });
    
    $('#mn').hover(function() {
        $('body').css('background-image', 'url("https://puu.sh/vBU1L/071217c686.jpg")');
    }, function() {
        $('body').css('background', '');

    });

    $('#mso').hover(function() {
        $('body').css('background-image', 'url("https://puu.sh/vBUaP/05b265cd45.jpg")');
    }, function() {
        $('body').css('background', '');

    });

    $('#mse').hover(function() {
        $('body').css('background-image', 'url("https://puu.sh/vBUiL/5681972a03.jpg")');
    }, function() {
        $('body').css('background', '');

    });

        //Box Vanisher mm
    $('#mm').hover(function() {
        $('#mn').css('opacity', '0');
    }, function() {
        $('#mn').css('opacity', '');

    });

    $('#mm').hover(function() {
        $('#mso').css('opacity', '0');
    }, function() {
        $('#mso').css('opacity', '');

    });

    $('#mm').hover(function() {
        $('#mse').css('opacity', '0');
    }, function() {
        $('#mse').css('opacity', '');

    });

        //Box Vanisher mn
    $('#mn').hover(function() {
        $('#mm').css('opacity', '0');
    }, function() {
        $('#mm').css('opacity', '');

    });

    $('#mn').hover(function() {
        $('#mso').css('opacity', '0');
    }, function() {
        $('#mso').css('opacity', '');

    });

    $('#mn').hover(function() {
        $('#mse').css('opacity', '0');
    }, function() {
        $('#mse').css('opacity', '');

    });

        //Box Vanisher mso
    $('#mso').hover(function() {
        $('#mn').css('opacity', '0');
    }, function() {
        $('#mn').css('opacity', '');

    });

    $('#mso').hover(function() {
        $('#mm').css('opacity', '0');
    }, function() {
        $('#mm').css('opacity', '');

    });

    $('#mso').hover(function() {
        $('#mse').css('opacity', '0');
    }, function() {
        $('#mse').css('opacity', '');

    });

        //Box Vanisher mse
    $('#mse').hover(function() {
        $('#mn').css('opacity', '0');
    }, function() {
        $('#mn').css('opacity', '');

    });

    $('#mse').hover(function() {
        $('#mso').css('opacity', '0');
    }, function() {
        $('#mso').css('opacity', '');

    });

    $('#mse').hover(function() {
        $('#mm').css('opacity', '0');
    }, function() {
        $('#mm').css('opacity', '');

    });

});
