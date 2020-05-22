$(function() {

    $(window).on("load", function() {
        $(".scrollbar-inner").mCustomScrollbar({
            theme: "light-3",
            scrollButtons: {
                enable: true
            }
        });
    });


    $('.icon-user').on('click', function() {
        $('.experience').slideUp();
        $('.portfolio').slideUp();
        $('.contacts').slideUp();
        setTimeout(() => {
            $('.about').slideDown();
        }, 400);
        $('.icon-binoculars').removeClass('active');
        $('.icon-briefcase1').removeClass('active');
        $('.icon-phone').removeClass('active');
        $('.icon-user').addClass('active');
    });

    $('.icon-binoculars').on('click', function() {
        $('.about').slideUp();
        $('.portfolio').slideUp();
        $('.contacts').slideUp();
        setTimeout(() => {
            $('.experience').slideDown();
        }, 400);
        $('.icon-user').removeClass('active');
        $('.icon-briefcase1').removeClass('active');
        $('.icon-phone').removeClass('active');
        $('.icon-binoculars').addClass('active');
    });

    $('.icon-briefcase1').on('click', function() {
        $('.about').slideUp();
        $('.experience').slideUp();
        $('.contacts').slideUp();
        setTimeout(() => {
            $('.portfolio').slideDown();
        }, 400);
        $('.icon-user').removeClass('active');
        $('.icon-binoculars').removeClass('active');
        $('.icon-phone').removeClass('active');
        $('.icon-briefcase1').addClass('active');
    });

    $('.icon-phone').on('click', function() {
        $('.about').slideUp();
        $('.experience').slideUp();
        $('.portfolio').slideUp();
        setTimeout(() => {
            $('.contacts').slideDown();
        }, 400);
        $('.icon-user').removeClass('active');
        $('.icon-binoculars').removeClass('active');
        $('.icon-briefcase1').removeClass('active');
        $('.icon-phone').addClass('active');
    });


    var play = document.getElementsById('play'),
        playAudio = document.getElementsById('clickAudio');
    play.addEventListener('click', fPlay, false);

    function fPlay() {
        playAudio.play();
    }

});