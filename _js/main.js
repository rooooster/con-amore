// menu
$('.js-anhor-nav').singlePageNav({
    offset: 110,
    // filter: ':not(.is-external)',
    currentClass: 'active',
    updateHash: true,
    easing: 'easeInOutExpo',
    speed: 800,
    // beforeStart: function() {
    //     console.log('begin scrolling');
    // },
    // onComplete: function() {
    //     console.log('done scrolling');
    // }
});


// history
$(document).on('click', '.nav-main a', function(){
    // console.log(window.location.hash);
    var hash = window.location.hash;
    history.replaceState(undefined, undefined, hash)
})

/**
* fotorama
* http://fotorama.io
*/
fotoramaDefaults = {
    width: 800,
    maxwidth: '100%',
    ratio: 3/2,
    allowfullscreen: true,
    nav: 'thumbs',
    trackpad: true,
    keyboard: true,
    loop: true,
    autoplay: 4000,
    thumbwidth: 100,
    hash: true
}

/**
* totop
*/
$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('.totop').fadeIn();
        } else {
            $('.totop').fadeOut();
        }
    });
    $('.totop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
});

/**
* waypoint
* https://github.com/imakewebthings/waypoints
*/
var $head = $( '.nav-main' );
$('.waypoint').each( function(i) {
    var $el = $( this ),
        animClassDown = $el.data( 'animateDown' ),
        animClassUp = $el.data( 'animateUp' );
    $el.waypoint( function( direction ) {
        if( direction === 'down' && animClassDown ) {
            $head.attr('class', 'nav-main js-anhor-nav ' + animClassDown);
        }
        else if( direction === 'up' && animClassUp ){
            $head.attr('class', 'nav-main js-anhor-nav ' + animClassUp);
        }
    }, { offset: '-80%' } );
});

// Toggle
$(".js-official-rules-toggle").click(function () {
    $(".js-official-rules-content").slideToggle("slow");
});
$(".js-bank-account-toggle").click(function () {
    $(".js-bank-account-content").slideToggle("slow");
});

/**
* Magnific-Popup
* https://github.com/dimsemenov/Magnific-Popup
*/
// $('.open-popup-link').magnificPopup({
//   type: 'inline',
//   removalDelay: 500,
//   callbacks: {
//     beforeOpen: function() {
//        this.st.mainClass = this.st.el.attr('data-effect');
//     }
//   },
//   midClick: true,
//   // closeMarkup: '<span title="%title%" class="mfp-close icon-close"></span>',
//   // focus: '#email',
// });

/**
* lazyload.js
* https://github.com/tuupola/jquery_lazyload
*/
$(function() {
    $("img.js-lazy").lazyload({
      effect : "fadeIn",
      // threshold : 0,
      // placeholder : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
    });
});
