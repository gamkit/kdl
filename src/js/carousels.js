import 'owl.carousel';

$('.needy-list__owl-carousel').owlCarousel({
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
 
})



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
    navText: ['<i class="glyph-ar-prev"></i>', '<i class="glyph-ar-next"></i>'],
    nav: true,
    dots: true,
})