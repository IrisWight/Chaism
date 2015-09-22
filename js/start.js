$(function () {

//   BLOCK-height

    function setHeight() {
        var windowHeight = $(window).innerHeight();
        $('.greeting__video').css('height', windowHeight);
        $('.sub-menu').css('height', windowHeight);
        $('.vert-menu').css('height', windowHeight);
        $('.about-slider').css('height', windowHeight);
    }

   if(window.addEventListener) {
       window.addEventListener('orientationchange', setHeight);
   }
    $(window).resize(setHeight).trigger('resize');


//      PRELOADER

    $(window).on('load', function () {
        var $pre = $('.preloader'),
            $img   = $pre.find('.preloader__img');
        $img.fadeOut();
        $pre.delay(350).fadeOut('slow');
    });


//      TABS menu

    $('.vert-menu ul li a').on('click', function(e){
        e.preventDefault();
        var item=$(this).closest('li'),
            contentItem=$('.tea-list'),
            itemPosition=item.index();

        contentItem.eq(itemPosition)
            .addClass('tea-list_active')
            .siblings()
            .removeClass('tea-list_active');

        item.addClass('active')
            .siblings()
            .removeClass('active');
    });

//      MENU__pop-up

    $('.btn-menu').on('click', function () {
        $('.menu-slider').toggleClass('open-slider');
        $('.menu-pop-up').toggleClass('open-menu');
    });

//      COUNTRY/SEARCH__pop-up

    $('.country').on('click', function (e) {
        e.preventDefault();
        $('.country-pop-up').fadeIn('200', 'linear');
        $('.search-pop-up').fadeOut('fast');
    });

    $('.nav-btn__country').on('click', function () {
        $('.country-pop-up').fadeIn('200', 'linear');
        $('.search-pop-up').fadeOut('fast');
    });

    $('.btn-close').on('click', function (e) {
        e.preventDefault();
        $('.country-pop-up').fadeOut('slow');
        $('.search-pop-up').fadeOut('slow');
    });

    $('.nav-btn__search').on('click', function (e) {
        e.preventDefault();
        $('.search-pop-up').fadeIn('200', 'linear');
        $('.country-pop-up').fadeOut('fast');
    });

//     HEADER  scroll

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.header__top').addClass('move');
        }
        else {
            $('.header__top').removeClass('move');
        }
    });

//     POINTER  scroll

    $('.pointer-down').on('click', function (e) {
        e.preventDefault();
        var idscroll = $(this).attr('href');
        $.scrollTo(idscroll, 1000);
        return false;
    });

//      BLOCK skrollr

    if ($('.no-touch').length) {
        $(function () {
            skrollr.Inst = skrollr.init({
                forceHeight: false
            });
        });
    }


//   SLIDER

    if($('.product-slider').length) {
        $('.owl-carousel_main').owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            margin: 0,
            autoplay:true,
            autoplayTimeout:4000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:0
                },
                980:{
                    items:1
                },
                1280:{
                    items:1
                }
            }
        });
    }
    if($('.other-offers_prod').length) {
        $('.owl-carousel_prod').owlCarousel({
            items: 3,
            loop: true,
            nav: true,
            margin: 0,
            autoplay:false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                767:{
                    items:2
                },
                1024:{
                    items:2
                },
                1025:{
                    items:3
                }
            }
        });
    }
    if($('.buy-bubble').length) {
        $('.owl-carousel_bubble').owlCarousel({
            items: 1,
            nav: true,
            animateOut: 'bounceOutLeft',
            animateIn: 'bounceInRight'
        });
    }


//    PROD VIDEO


    $('.product-video').click(function () {
        var vid = $('video');
        vid.toggleClass('playing');
        if (vid.hasClass('playing')) {
            vid.get(0).play();
        } else {
            vid.get(0).pause();
        }
    });


    //$('video').on('ended', function(){
//
//});


//    MAP

    if($('.map').length) {

        $('.map-way ul li a').on('click', function (e) {
                e.preventDefault();
                var itemLink = $(this).closest('li');

                itemLink.addClass('active')
                    .siblings()
                    .removeClass('active');
            });

        google.maps.event.addDomListener(window, 'load', init);
        var map;

        function init() {

            var mapOptions = {
                center: new google.maps.LatLng(50.441839, 30.51714),
                zoom: 17,
                zoomControl: false,
                disableDoubleClickZoom: false,
                mapTypeControl: false,
                scaleControl: false,
                scrollwheel: true,
                panControl: false,
                streetViewControl: false,
                draggable: false,
                overviewMapControl: false,
                overviewMapControlOptions: {
                    opened: false
                },
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var mapElement = document.getElementById('map');
            var map = new google.maps.Map(mapElement, mapOptions);

            var locations = [
                ['Киев', 'undefined', 'undefined', 'undefined', 'undefined', 50.441641, 30.5170106, 'https://mapbuildr.com/assets/img/markers/solid-pin-red.png'],
                ['Санкт-Петербург', 'undefined', 'undefined', 'undefined', 'undefined', 59.9174455, 30.3250575, 'https://mapbuildr.com/assets/img/markers/solid-pin-red.png']
            ];

            for (i = 0; i < locations.length; i++) {
                if (locations[i][1] == 'undefined') {
                    description = '';
                } else {
                    description = locations[i][1];
                }
                if (locations[i][2] == 'undefined') {
                    telephone = '';
                } else {
                    telephone = locations[i][2];
                }
                if (locations[i][3] == 'undefined') {
                    email = '';
                } else {
                    email = locations[i][3];
                }
                if (locations[i][4] == 'undefined') {
                    web = '';
                } else {
                    web = locations[i][4];
                }
                if (locations[i][7] == 'undefined') {
                    markericon = '';
                } else {
                    markericon = locations[i][7];
                }

                var image = new google.maps.MarkerImage('img/marker_image.png',
                    new google.maps.Size(27, 38),
                    new google.maps.Point(0, 0),
                    new google.maps.Point(14, 42)
                );

                marker = new google.maps.Marker({
                    icon: image,
                    position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                    map: map,
                    title: locations[i][0],
                    desc: description,
                    tel: telephone,
                    email: email,
                    web: web
                });

                $('#place1').on('click', function () {
                    map.setOptions({
                        center: new google.maps.LatLng(locations[0][5], locations[0][6])
                    });
                });
                $('#place2').on('click', function () {
                    map.setOptions({
                        center: new google.maps.LatLng(locations[1][5], locations[1][6])
                    });
                });

                link = '';
            }


        }
    }


//   SELECT-catalog

    if($('.select-yours').length) {
        var html = $('html'),
            windowWidth = $(window).width();

        $('.select_catalog').select2({
            placeholder: "выберите что вам больше всего подходит",
            minimumResultsForSearch: Infinity
        });

        if (windowWidth <= 480) {
            $('.select2-default .select2-chosen').text('Я сейчас')
        }
    }


//   CART-pop-up

$(".nav-btn__basket").fancybox({
    fitToView	: false,
    autoSize	: true,
    closeClick	: false,
    openEffect	: 'none',
    closeEffect	: 'none',
    afterShow: function(){
        $('.owl-carousel_cart').owlCarousel({
            items: 1,
            loop: true,
            nav: true
        });
        var selectPack = $('.select-pack');

        selectPack.select2({
            dropdownCssClass: 'select-pack-drop',
            minimumResultsForSearch: Infinity
        });
    }
});


    $(".arrow-up").on("click", function () {
        var input = $(this).closest('.select-quantity').find('input'),
            count = input.val();

        input.val(parseInt(count) + 1);
    });

    $(".arrow-down").on("click", function () {
       var input = $(this).closest('.select-quantity').find('input'),
            count = input.val();

        if((parseInt(count) - 1)>= 0){
            input.val(parseInt(count) - 1);
        }
    });

    //   GALLERY

    $(".fancybox-pic").fancybox({
        prevEffect	: 'none',
        nextEffect	: 'none',
        helpers	: {
            title	: {
                type: 'outside'
            },
            thumbs	: {
                width	: 50,
                height	: 50
            }
        }
    });


    //   ABOUT-scroll-page

    var scrollAllowed = true;

    var homepageSlide = function(e) {

        if (!scrollAllowed) {
            return;
        }

        scrollAllowed = false;
        var delta = e.deltaY * e.deltaFactor;
        var el;
        var current = $('.about-slider.active');

        if (delta > 0) { // scroll up

            if (current.prev().length) {
                el = current.prev();
            } else {
                scrollAllowed = true;
                return;
            }
        } else { // scroll down

            if (current.next().length) {
                el = current.next();
            } else {
                scrollAllowed = true;
                return;
            }
        }

        if (el.length) {
            el.addClass('active');
            current.removeClass('active');

            $.scrollTo(el, 1000);
            setTimeout(function() {
                scrollAllowed = true;
            }, 1100);
        } else {
            scrollAllowed = true;
        }
    };

    var homePage = $('.content');

    if (homePage.length) {
        homePage.on('mousewheel', homepageSlide);
    }

    //   BLOCK-move-Staging

    var timeout;
    $(window).scroll(function(){
        clearTimeout(timeout);

        timeout = setTimeout(function(){
            $('.product-info-list__item').each(function(){
                var el = $(this);
                var wh = $(window).height(),
                    scrlTop = $(window).scrollTop(),
                    offsetTop = el.offset().top;

                if ( (scrlTop + wh) >= offsetTop) {
                    el.find('.text').css({visibility:"visible"});
                    el.find('.right').addClass('animated fadeInRight');
                    el.find('.left').addClass('animated fadeInLeft');
                }
            });

            $('.product-about__i').each(function(){
                var el = $(this);
                var wh = $(window).height(),
                    scrlTop = $(window).scrollTop(),
                    offsetTop = el.offset().top;

                if ( (scrlTop + wh) >= offsetTop) {
                    el.find('div')
                        .css({visibility:"visible"})
                        .addClass('animated fadeIn');
                }
            })
        }, 300);

    });


    //    example    //

    //$( "#draggable" ).draggable();
    //$( "#draggable2" ).draggable({
    //    revert: true
    //});
    //
    //$( "#from" ).datepicker({
    //    defaultDate: "+1w",
    //    changeMonth: true,
    //    numberOfMonths: 1,
    //    onClose: function( selectedDate ) {
    //        $( "#to" ).datepicker( "option", "minDate", selectedDate );
    //    }
    //});
    //$( "#to" ).datepicker({
    //    defaultDate: "+1w",
    //    changeMonth: true,
    //    numberOfMonths: 1,
    //    onClose: function( selectedDate ) {
    //        $( "#from" ).datepicker( "option", "maxDate", selectedDate );
    //    }
    //});
    //
    //$( "#slider-range" ).slider({
    //    range: true,
    //    min: 0,
    //    max: 500,
    //    values: [ 75, 300 ],
    //    slide: function( event, ui ) {
    //        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    //    }
    //});
    //$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    //" - $" + $( "#slider-range" ).slider( "values", 1 ) );
    //
    //$('a[title]').qtip();

});

