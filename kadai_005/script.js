$(function () {
    $('.button-more').on('mouseover', function() {
        $(this).animate({
            opacity: 0.5,
            marginLeft: 20,
        }, 100);
    });
    $('.button-more').on('mouseout', function() {
        $(this).animate({
            opacity: 1.0,
            marginLeft: 0,
        }, 100);
    });
    
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 300,
        autoplaySpeed: 5000,
        arrows: false,
      });

});