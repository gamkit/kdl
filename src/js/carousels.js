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
        992: {
            items: 4
        },
    }
})



$('.partners-list__owl-carousel').owlCarousel({
    autoplay: true,
    items: 6,
    margin: 50,
 
})


$('.news-list__owl-carousel').owlCarousel({
    autoplay: true,
    nav: true,
    items: 3,
    navText: ['<i class="glyph-ar-prev"></i>', '<i class="glyph-ar-next"></i>'],
    margin: 30,
 
})