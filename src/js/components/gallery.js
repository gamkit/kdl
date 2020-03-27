import "lightslider";

$(document).ready(function() {
    $('.gallery__lightslider').lightSlider({
        gallery:true,
        item:1,
        loop:true,
        thumbItem:9,
        autoWidth: true,
        slideMargin:0,
        enableDrag: false,
        responsive: true,
        enableTouch: true,
        enableDrag: true,
        prevHtml: '<i class="icon icon-arr icon-arr--theme--white-dark glyph-ar-left"></i>',
        nextHtml: '<i class="icon icon-arr icon-arr--theme--white-dark glyph-ar-right"></i>',
        currentPagerPosition:'middle',
    });  
  });