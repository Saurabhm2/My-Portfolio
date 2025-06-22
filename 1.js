$(document).ready(function() {
    $('#toggle-abouts').click(function() {
        $('#additional-contents').slideToggle();
        $(this).text(function(i, text) {
            return text === 'More About Me' ? 'Less About Me' : 'More About Me';
        });
        return false;
    });
});

$(document).ready(function(){
    // Enhanced mobile navigation
    $('.navbar-toggle').click(function(){
        $('.navbar').toggleClass('active');
        $('#menu-icon').toggleClass('bx-menu bx-x');
    });

    // Close navbar when clicking on a link (mobile)
    $('.navbar a').click(function(){
        if($(window).width() <= 768) {
            $('.navbar').removeClass('active');
            $('#menu-icon').removeClass('bx-x').addClass('bx-menu');
        }
    });

    // Close navbar when clicking outside (mobile)
    $(document).click(function(e) {
        if (!$(e.target).closest('.header').length) {
            $('.navbar').removeClass('active');
            $('#menu-icon').removeClass('bx-x').addClass('bx-menu');
        }
    });

    // Smooth scrolling enhancement
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);

        if($target.length) {
            $('html, body').animate({
                'scrollTop': $target.offset().top - 80
            }, 800, 'swing');
        }
    });
});
