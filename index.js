$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");

        } else {
            $('.navbar').removeClass("sticky")
        };

    });

    //slide-up script
 

//    Owl carousel slider

    var typed = new Typed(".typing", {
        strings: ["Freelancer", "Web Designer", "Web Developer", "SEO Expert"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".type-2", {
        strings: ["Freelancer", "Web Designer", "Web Developer", "SEO Expert"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //    tollge menu navbar design

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

   $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
       autoplayTimeOut: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3 
        }
    }
});
    
});




//scroll up 

$(window).scroll(function () {
    if ($(window).scrollTop() >= 400) { // If page is scrolled more than 50px
        $('.top-up').fadeIn(200); // Fade in the arrow
    } else {
        $('.top-up').fadeOut(200); // Else fade out the arrow
    }
});
$('.top-up').click(function () { // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 100);
});




