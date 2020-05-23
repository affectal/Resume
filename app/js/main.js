$(function() {


    var lungRu = $('.lungRu');
    var lungEn = $('.lungEn');
    var iconLanguage = $('.icon-language');

    iconLanguage.click(function() {
        if (iconLanguage.hasClass('en')) {
            lungEn.hide();
            lungRu.show();
            iconLanguage.removeClass('en');
        } else {
            lungRu.hide();
            lungEn.show();
            iconLanguage.addClass('en');
        }
    });


    // _____________________________________________________________________________________

    $(window).on("load", function() {
        $(".scrollbar-inner").mCustomScrollbar({
            theme: "light-3",
            scrollButtons: {
                enable: true
            }
        });
    });

    // ___________________________________________________________________________________________

    var user = $('.icon-user');
    var binoculars = $('.icon-binoculars');
    var briefcase = $('.icon-briefcase1');
    var phone = $('.icon-phone');
    var about = $('.about');
    var experience = $('.experience');
    var portfolio = $('.portfolio');
    var contacts = $('.contacts');

    user.on('click', function() {
        experience.slideUp();
        portfolio.slideUp();
        contacts.slideUp();
        setTimeout(() => {
            about.slideDown();
        }, 400);
        binoculars.removeClass('active');
        briefcase.removeClass('active');
        phone.removeClass('active');
        user.addClass('active');
    });

    binoculars.on('click', function() {
        about.slideUp();
        portfolio.slideUp();
        contacts.slideUp();
        setTimeout(() => {
            experience.slideDown();
        }, 400);
        user.removeClass('active');
        briefcase.removeClass('active');
        phone.removeClass('active');
        binoculars.addClass('active');
    });

    briefcase.on('click', function() {
        about.slideUp();
        experience.slideUp();
        contacts.slideUp();
        setTimeout(() => {
            portfolio.slideDown();
        }, 400);
        user.removeClass('active');
        binoculars.removeClass('active');
        phone.removeClass('active');
        briefcase.addClass('active');
    });

    phone.on('click', function() {
        about.slideUp();
        experience.slideUp();
        portfolio.slideUp();
        setTimeout(() => {
            contacts.slideDown();
        }, 400);
        user.removeClass('active');
        binoculars.removeClass('active');
        briefcase.removeClass('active');
        phone.addClass('active');
    });

    // ______________________________________________________________________________________

});