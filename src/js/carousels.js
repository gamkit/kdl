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