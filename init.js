/* ==================================================
//  ____  _     _   _            _   _          _____ _                              
// |  _ \(_)___| |_(_)_ __   ___| |_(_)_   ____|_   _| |__   ___ _ __ ___   ___  ___ 
// | | | | / __| __| | '_ \ / __| __| \ \ / / _ \| | | '_ \ / _ \ '_ ` _ \ / _ \/ __|
// | |_| | \__ \ |_| | | | | (__| |_| |\ V /  __/| | | | | |  __/ | | | | |  __/\__ \
// |____/|_|___/\__|_|_| |_|\___|\__|_| \_/ \___||_| |_| |_|\___|_| |_| |_|\___||___/
//
/* ================================================*/

/*-----------------------------------------------------------------------------------*/
/*  DOCUMENT READY
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
    'use strict';

    // SLIDERS
    jQuery('#headerwrap.agency-slider').backstretch([
        "assets/img/agency/hero1.jpg",
        "assets/img/agency/hero2.jpg",
        "assets/img/agency/hero3.jpg"
      ], {duration: 8000, fade: 500});

    // OWL CAROUSEL //
    $('.owl-carousel').owlCarousel({
      navigation: false,
      pagination: false,
      navigationText: [
      "<i class='pe-7s-angle-left'></i>",
      "<i class='pe-7s-angle-right'></i>"
      ], 
      autoPlay: 8000,
      loop: true
    });

    $('.owl-carousel-paged').owlCarousel({
      navigation: false,
      pagination: false,
      autoPlay: 8000,
      loop: true
    });

    $('#single-slider').owlCarousel({
      navigation: false,
      pagination: true,
      autoPlay: 8000,
      loop: true
    });

    $(".side-menu .nav").metisMenu({
        toggle: false
    });

    // ANIMATED ONLY IF NOT AT TOP OF PAGE ON LOAD //
    var $win = $(window);
    if ($win.scrollTop() == 0)
        jQuery('.navbar-fixed-top').addClass('wow');
    else if ($win.height() + $win.scrollTop() == $(document).height()) {
         jQuery('.navbar-fixed-top').removeClass('wow');
    }



    //NEAT VID EMBEDS
    $().prettyEmbed({ useFitVids: true });
    
    var magnificPopup = jQuery.magnificPopup.instance;
    jQuery('.lb-link, .image-gallery').magnificPopup({
      preloader:true,
      type: 'image',
      removalDelay: 300,
      mainClass: 'fadeInDown',
      callbacks: {
          open: function() {
            magnificPopup.content.addClass('mobile');
          }
        }
    });

    //BACK TO TOP
    $('a#back-to-top').on('click', function(event){
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $("body").offset().top
      }, 500);
    }); 

    $('.vertical-center').flexVerticalCenter({ cssAttribute: 'padding-top' });

    //CONTACT FORM
    $('#contactform').submit(function(){
      var action = $(this).attr('action');
      $("#message").slideUp(750,function() {
      $('#message').hide();
      $('#submit').attr('disabled','disabled');
      $.post(action, {
        name: $('#name').val(),
        email: $('#email').val(),
        website: $('#website').val(),
        comments: $('#comments').val()
      },
        function(data){
          document.getElementById('message').innerHTML = data;
          $('#message').slideDown('slow');
          $('#submit').removeAttr('disabled');
          if(data.match('success') != null) $('#contactform').slideUp('slow');
          $(window).trigger('resize');
        }
      );
      });
      return false;
    });

    $(".rotate").textrotator({
      animation: "dissolve",
      separator: ",",
      speed: 2500 // How many milliseconds until the next word show.
    });

    $('.match-height').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    });

    var mapHeight = $('#contact-inner').outerHeight();
    $('#mapwrapper').css('height', mapHeight);

    $(document).on( 'shown.bs.tab', 'a[href="#contact2"]', function (e) {
        $("#mapwrapper").gMap({ 
            controls: false,
            scrollwheel: false,
            markers: [{     
                latitude:40.7566,
                longitude: -73.9863,
            icon: { image: "assets/img/marker.png",
                iconsize: [44,44],
                iconanchor: [12,46],
                infowindowanchor: [12, 0] } }],
            icon: { 
                image: "assets/img/marker.png", 
                iconsize: [26, 46],
                iconanchor: [12, 46],
                infowindowanchor: [12, 0] },
            latitude:40.7566,
            longitude: -73.9863,
            zoom: 14,
            styles: [{"featureType":"all","elementType":"labels.text","stylers":[{"saturation":"12"},{"color":"#000000"},{"lightness":"-5"},{"gamma":"7.71"},{"weight":"10.00"},{"invert_lightness":true}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#ffffff"},{"visibility":"on"}]}]
        });
        if (!$('#contact-tabs').hasClass('map-open')) {
          $('#contact-tabs').addClass('map-open');
        }
    });

    $(document).on( 'shown.bs.tab', 'a[href="#contact1"]', function (e) {
        if ($('#contact-tabs').hasClass('map-open')) {
          $('#contact-tabs').removeClass('map-open');
        }        
    });

    //SIDE NAV MOBILE
    $('#side-menu-toggle').on('click', function(event){
      event.preventDefault();
      $(this).toggleClass('open');
      $('#side-menu-toggle i').toggleClass('fa-bars');
      $('#side-menu-toggle i').toggleClass('fa-times');
      $('#side-wrapper').toggle();
    });

    // ONEPAGER XTRA //
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    });

    // FULLSCREEN FIX //
    var windowHeight = $(window).innerHeight();
    var isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if( !isMobileDevice ) {
        $('#headerwrap.fullheight').css('height', windowHeight);
        $(window).on('resize', function(){
            $('#headerwrap.fullheight').css('height', windowHeight);
        });
    }

    // ANIMATE ONCE PAGE LOAD IS OVER //
    Pace.on("done", function(){
        new WOW().init();
        $(window).trigger('resize');
    });

    // SEARCH //
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search-wrapper').addClass('open');
        $('#search-wrapper > form > input[type="search"]').focus();
    });
    
    $('#search-wrapper, #search-wrapper button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })

    // ONEPAGER //
    $('a.page-scroll').on('click', function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.entry-content table, #post-content table').addClass('table');
    $('.entry-content dl, #post-content dl').addClass('dl-horizontal');
    //$(window).trigger('resize');

    $('.flexpanel').flexpanel({
        animation: 'slide',
        direction: 'right',
        wrapper: '.master-wrapper',
        button: '.side-menu-trigger',
        maxWidth: null  
    });

    $('.flexpanel').flexpanel({
        animation: 'slide',
        direction: 'right',
        wrapper: '.master-wrapper',
        button: '.side-menu-only .navbar-toggle',
        maxWidth: null  
    });

    $('a[href="#search"]').on('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      $(this).closest('li').find('.dropdown-menu').toggleClass('open-me');
    });
  

    $('.viewport-wrap').mCustomScrollbar({
      theme:"dark"
    });

    if($('nav').hasClass('header-6')) {
      var headerHeight = $('.header-6.navbar-fixed-top').outerHeight();
      $('body').css({
        'padding-top' : headerHeight
      });
    }

    $("#mapwrapper.alt-map").gMap({ 
        controls: false,
        scrollwheel: false,
        markers: [{     
            latitude:40.7566,
            longitude: -73.9863,
        icon: { image: "assets/img/marker.png",
            iconsize: [44,44],
            iconanchor: [12,46],
            infowindowanchor: [12, 0] } }],
        icon: { 
            image: "assets/img/marker.png", 
            iconsize: [26, 46],
            iconanchor: [12, 46],
            infowindowanchor: [12, 0] },
        latitude:40.7566,
        longitude: -73.9863,
        zoom: 14,
        styles: [{"featureType":"all","elementType":"labels.text","stylers":[{"saturation":"12"},{"color":"#000000"},{"lightness":"-5"},{"gamma":"7.71"},{"weight":"10.00"},{"invert_lightness":true}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#ffffff"},{"visibility":"on"}]}]
    });
});

/*-----------------------------------------------------------------------------------*/
/*  WINDOW LOAD
/*-----------------------------------------------------------------------------------*/
$(window).load(function() {
    'use strict';

    var portfolio_selectors = $('.portfolio-filter li a');

    if(portfolio_selectors!='undefined'){
        var portfolio = $('.portfolio-items');
        portfolio.imagesLoaded( function(){
             portfolio.isotope({
                itemSelector : 'li',
                layoutMode : 'fitRows',
                percentPosition: true
            });
        });

        portfolio_selectors.on('click', function(e){
            e.preventDefault();
            portfolio_selectors.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            portfolio.isotope({ filter: selector });
            return false;
        });
    }

    var boxed_portfolio_selectors = $('.boxed-portfolio-filter li a');

    if(boxed_portfolio_selectors!='undefined'){
        var boxed_portfolio = $('.boxed-portfolio-items');
        boxed_portfolio.imagesLoaded( function(){
             boxed_portfolio.isotope({
                itemSelector : 'li',
                layoutMode : 'fitRows',
                percentPosition: true
            });
        });

        boxed_portfolio_selectors.on('click', function(e){
            e.preventDefault();
            boxed_portfolio_selectors.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            boxed_portfolio.isotope({ filter: selector });
            return false;
        });
    }

    var masonry_portfolio_selectors = $('.masonry-portfolio-filters li a');
    var masonry_container = $('.masonry-portfolio');

    if(masonry_portfolio_selectors!='undefined'){
        var masonry_portfolio = $('.masonry-portfolio-items');
        masonry_portfolio.imagesLoaded( function(){
             masonry_portfolio.isotope({
                itemSelector: '.masonry-portfolio-item',
                masonry: {
                  columnWidth: masonry_container.width() / masonry_container.attr('data-masonry-cols')
                }
            });
        });

        masonry_portfolio_selectors.on('click', function(e){
            e.preventDefault();
            masonry_portfolio_selectors.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            masonry_portfolio.isotope({ filter: selector });
            return false;
        });
    }

    // PRELOADING SCREEN
    /*
    jQuery('a:not([target="_blank"]):not([href*=#]):not([href^=mailto]):not(.fancybox-media):not(.btn.responsive-menu):not(a[href$="jpg"]):not([href$="jpeg"]):not(a[href$="gif"]):not(a[href$="png"]):not(a.ajax-link):not(a.side-menu-trigger hidden-xs)').on('click', function(){
      var href = jQuery(this).attr('href');
      jQuery('.preloader').fadeIn(300);
      setTimeout(function(){
        window.location = href;
      }, 300);
      return false;
    });
*/
});
'use strict';

let cart = (JSON.parse(localStorage.getItem('cart')) || []);

const cartDOM = document.querySelector('.cart');
const addToCartButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');

//console.log(cart);

if(cart.length > 0){
    cart.forEach(cartItem => {
        const product = cartItem;
        insertItemToDOM(product);
        countCartTotal();

        addToCartButtonsDOM.forEach(addToCartButtonDOM => {
            const productDOM = addToCartButtonDOM.parentNode;

            if(productDOM.querySelector('.product__name').innerText === product.name){
                handleActionButtons(addToCartButtonDOM, product);
            }
        });
    });
}

addToCartButtonsDOM.forEach(addToCartButtonDOM => {
    addToCartButtonDOM.addEventListener('click', () => {
        const productDOM = addToCartButtonDOM.parentNode;
        const product = {
            image: productDOM.querySelector('.product__image').getAttribute('src'),
            name: productDOM.querySelector('.product__name').innerText,
            price: productDOM.querySelector('.product__price').innerText,
            quantity: 1,
        };

        const isInCart = (cart.filter(cartItem => (cartItem.name === product.name)).length > 0);

        if(!isInCart){
            insertItemToDOM(product);
            cart.push(product);
            saveCart();
            handleActionButtons(addToCartButtonDOM, product)
        }
        
    });
});


function insertItemToDOM(product){
    cartDOM.insertAdjacentHTML('beforeend', `
        <div class="cart__item">
            <img class="cart__item__image" src="${product.image}" alt="${product.name}">
            <h3 class="cart__item__name">${product.name}</h3>
            <h3 class="cart__item__price">${product.price}</h3>
            <button class="btn btn--primary btn--small${(product.quantity === 1 ? ' btn--danger' : '')}" data-action="DECREASE_ITEM">&minus;</button>
            <h3 class="cart__item__quantity">${product.quantity}</h3>
            <button class="btn btn--primary btn--small" data-action="INCREASE_ITEM">&plus;</button>
            <button class="btn btn--danger btn--small" data-action="REMOVE_ITEM">&times;</button>
        </div>
    `);

    addCartFooter();
}

function handleActionButtons(addToCartButtonDOM, product){
    addToCartButtonDOM.innerText = "In Cart"; 
    addToCartButtonDOM.disabled = true;

    const cartItemsDOM = cartDOM.querySelectorAll('.cart__item');
    cartItemsDOM.forEach(cartItemDOM => {                
        if(cartItemDOM.querySelector('.cart__item__name').innerText === product.name){
            
            cartItemDOM.querySelector('[data-action="INCREASE_ITEM"]').addEventListener('click', () => increaseItem(product, cartItemDOM));
            cartItemDOM.querySelector('[data-action="DECREASE_ITEM"]').addEventListener('click', () => decreaseItem(product, cartItemDOM, addToCartButtonDOM));
            cartItemDOM.querySelector('[data-action="REMOVE_ITEM"]').addEventListener('click', () => removeItem(product, cartItemDOM, addToCartButtonDOM));
        }
    });
}

function increaseItem(product, cartItemDOM){
    cart.forEach(cartItem => {
        if(cartItem.name === product.name){
            cartItemDOM.querySelector('.cart__item__quantity').innerText = ++cartItem.quantity;
            cartItemDOM.querySelector('[data-action="DECREASE_ITEM"]').classList.remove('btn--danger');
            saveCart();
        }
    });
}

function decreaseItem(product, cartItemDOM, addToCartButtonDOM){
    cart.forEach(cartItem => {
        if(cartItem.name === product.name){
            if(cartItem.quantity > 1){
                cartItemDOM.querySelector('.cart__item__quantity').innerText = --cartItem.quantity;
                saveCart();
            }else{
                removeItem(product, cartItemDOM, addToCartButtonDOM)
            }
            if(cartItem.quantity === 1){
                cartItemDOM.querySelector('[data-action="DECREASE_ITEM"]').classList.add('btn--danger');
            }
        }
    });
}

function removeItem(product, cartItemDOM, addToCartButtonDOM){
    cartItemDOM.classList.add('cart__item--removed')
    setTimeout(() => cartItemDOM.remove(), 300);
    cart = cart.filter(cartItem => cartItem.name !== product.name);
    saveCart();
    addToCartButtonDOM.innerText = 'Add To Cart';
    addToCartButtonDOM.disabled = false;

    if(cart.length < 1){
        document.querySelector('.cart-footer').remove();
    }
}

function addCartFooter(){
    if(document.querySelector('.cart-footer') === null){
        cartDOM.insertAdjacentHTML('afterend', `
        <div class="cart-footer">
            <button class="btn btn--danger" data-action="CLEAR_CART">Vider Le Panier</button>
            <button class="btn btn--primary" data-action="CHECKOUT">Pay</button>
        </div>
    `);

    document.querySelector('[data-action="CLEAR_CART"]').addEventListener('click', () => clearCart());
    document.querySelector('[data-action="CHECKOUT"]').addEventListener('click', () => checkout());
    }

}

function clearCart(){
    cartDOM.querySelectorAll('.cart__item').forEach(cartItemDOM => {
        cartItemDOM.classList.add('cart__item--removed');
        setTimeout(() => cartItemDOM.remove(), 300);
    });
    cart = [];
    localStorage.removeItem('cart');
    document.querySelector('.cart-footer').remove();

    addToCartButtonsDOM.forEach(addToCartButtonDOM => {
        addToCartButtonDOM.innerText = 'Add To Cart';
        addToCartButtonDOM.disabled = false;
    });
}
function checkout(){
    let paypalFormHTML = `
        <form id="paypal-form" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_cart">
            <input type="hidden" name="upload" value="1">
            <input type="hidden" name="business" value="hossainmdsaimun-facilitator@gmail.com">
            `;

            cart.forEach((cartItem, index) => {
                ++index;
                paypalFormHTML += `
                <input type="hidden" name="item_name_${index}" value="${cartItem.name}">
                <input type="hidden" name="amount_${index}" value="${cartItem.price}">
                <input type="hidden" name="quantity_${index}" value="${cartItem.quantity}">    
                `;
            });
            
    paypalFormHTML += `
            <input type="submit" value="PayPal">
        </form>
        <div class="overlay"></div>
    `;

    document.querySelector('body').insertAdjacentHTML('beforeend', paypalFormHTML);
    document.getElementById('paypal-form').submit();
}

function countCartTotal(){
    let cartTotal = 0;
    cart.forEach(cartItem => cartTotal += cartItem.quantity * cartItem.price);
    document.querySelector('[data-action="CHECKOUT"]').innerText = `Pay $${cartTotal}`
}

function saveCart(){
    localStorage.setItem('cart', JSON.stringify(cart));
    countCartTotal();
}