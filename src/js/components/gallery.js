import "lightslider";

$(document).ready(function() {
    $('.gallery__lightslider').lightSlider({
        gallery:true,
        item:1,
        loop:true,
        thumbItem:9,
        // autoWidth: true,
        adaptiveHeight: true,
        slideMargin:20,
        enableDrag: true,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    thumbItem:3,
                    slideMove:1
                  }
            }
        ],
        enableTouch: true,
        enableDrag: true,
        prevHtml: '<i class="icon icon-arr icon-arr--theme--white-dark glyph-ar-left"></i>',
        nextHtml: '<i class="icon icon-arr icon-arr--theme--white-dark glyph-ar-right"></i>',
        currentPagerPosition:'middle',
    });  
  });