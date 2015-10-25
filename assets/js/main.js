/**
 * Cache
 */
var $content = $('.parallax-codepen .content')
    , $blur    = $('.parallax-codepen .overlay')
    , $normal    = $('.parallax-codepen .normal')
    , wHeight  = $(window).height();

$(window).on('resize', function(){
    wHeight = $(window).height();
});

/**
 * requestAnimationFrame Shim 
 */
window.requestAnimFrame = (function()
{
    return  window.requestAnimationFrame       ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame    ||
                    function( callback ){
                        window.setTimeout(callback, 1000 / 60);
                    };
})();

/**
 * Scroller
 */
function Scroller()
{
    this.latestKnownScrollY = 0;
    this.ticking            = false;
}

Scroller.prototype = {
    /**
     * Initialize
     */
    init: function() {
        window.addEventListener('scroll', this.onScroll.bind(this), false);
    },

    /**
     * Capture Scroll
     */
    onScroll: function() {
        this.latestKnownScrollY = window.scrollY;
        this.requestTick();
    },

    /**
     * Request a Tick
     */
    requestTick: function() {
        if( !this.ticking ) {
            window.requestAnimFrame(this.update.bind(this));
        }
        this.ticking = true;
    },

    /**
     * Update.
     */
    update: function() {
        var currentScrollY = this.latestKnownScrollY;
        this.ticking       = false;
        
        /**
         * Do The Dirty Work Here
         */
        var slowScroll = currentScrollY / 2,
            mormalScroll =  currentScrollY / 2.75;
        
        $content.css({
            'transform'         : 'translateY(-' + slowScroll + 'px)',
            '-moz-transform'    : 'translateY(-' + slowScroll + 'px)',
            '-webkit-transform' : 'translateY(-' + slowScroll + 'px)'
        });
        
        $normal.css({
            'transform'         : 'translateY(+' + mormalScroll + 'px)',
            '-moz-transform'    : 'translateY(+' + mormalScroll + 'px)',
            '-webkit-transform' : 'translateY(+' + mormalScroll + 'px)'
        });
    }
};

/**
 * Attach!
 */
var scroller = new Scroller();
scroller.init();










/**
* single-page-nav
* https://github.com/ChrisWojcik/single-page-nav
*/
$('#main').singlePageNav({
    easing: 'easeInOutExpo',
    speed: 1250,
    currentClass: 'active',
    offset: 100,
});

// fotorama
// http://fotorama.io
fotoramaDefaults = {
    width: 1200,
    maxwidth: '100%',
    ratio: 3/2,
    allowfullscreen: true,
    nav: 'thumbs',
    trackpad: true,
    keyboard: true,
    loop: true,
    autoplay: 3500
}

// toTop
$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('.to-top').fadeIn();
 
} else {
 
$('.to-top').fadeOut();
 
}
 
});
 
$('.to-top').click(function() {
 
$('body,html').animate({scrollTop:0},800);
 
});
 
});
