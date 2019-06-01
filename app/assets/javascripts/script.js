$(document).ready(function(){
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '70%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeInLeft');
    }, {
        offset: '70%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

      $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeInRight');
    }, {
        offset: '80%'
    });

      $('.js--wp-6').waypoint(function(direction) {
        $('.js--wp-6').addClass('animated pulse slower');
    }, {
        offset: '60%'
    });
});
