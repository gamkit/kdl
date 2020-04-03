import 'owl.carousel';

$('.collects-list__owl-carousel').owlCarousel({
    items: 4,
    nav: true,
    autoplay: true,
    navText: ['<i class="glyph-ar-prev"></i>', '<i class="glyph-ar-next"></i>'],
    dots: false,
    margin: 20,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2
        },
        992: {
            items: 4
        },
    }
})



$('.partners-list__owl-carousel').owlCarousel({
    autoplay: true,
    items: 6,
    margin: 50,
    responsive: {
        0: {
            items: 3,
        },
        768: {
            items: 4
        },
        992: {
            items: 6
        },
    }
 
});



$('.news-list__owl-carousel').owlCarousel({
    autoplay: true,
    nav: true,
    items: 3,
    navText: ['<i class="glyph-ar-prev"></i>', '<i class="glyph-ar-next"></i>'],
   
    margin: 30,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
    }
 
});


$('.project-list__owl-carousel').owlCarousel({
    items: 1,
    navText: ['<i class="icon icon-arr icon-arr--theme--white-dark glyph-ar-left"></i>', '<i class="icon icon-arr icon-arr--theme--white-dark glyph-ar-right"></i>'],
    nav: true,
    margin: 30,
    dots: true,
});


$('.members-list__owl-carousel').owlCarousel({
    autoplay: true,
    nav: true,
    items: 3,
    navText: ['<i class="glyph-ar-prev"></i>', '<i class="glyph-ar-next"></i>'],
    margin: 30,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
    }
});


$('.gallery-reports__owl-carousel').owlCarousel({
    autoplay: true,
    nav: true,
    items: 3,
    navText: ['<i class="icon icon-arr icon-arr--theme--white-dark glyph-ar-left"></i>', '<i class="icon icon-arr icon-arr--theme--white-dark glyph-ar-right"></i>'],
    margin: 30,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
    }
});