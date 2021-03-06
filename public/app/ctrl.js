//Menu Slide
setTimeout(function(){
  var windoWidth = $(window).width();

  if (windoWidth < 768) {
      /*$('.sub-menu a').on('click', function ($) {});*/

      $('.sub-menu').on('click', function () {

          $(this).toggleClass('menu-close');
          $(this).find('a').siblings('.dropdown-menu').slideToggle(500);
      });
  }
}, 4000);



app.controller('NaviCtrl', function($scope) {

  $scope.menuItems = [
    {url: '/double-glazing', name: 'Double Glazing', cat: 'windows'},
    {url: '/upvc-windows', name: 'uPVC Windows', cat: 'windows'},
    {url: '/timber-windows', name: 'Timber Windows', cat: 'windows'},
    {url: '/aluminium-windows', name: 'Aluminium Windows', cat: 'windows'},
    {url: '/sash-windows', name: 'Sash Windows', cat: 'windows'},
    {url: '/tilt-turn-windows', name: 'Tilt Turn Windows', cat: 'windows'},
    {url: '/dual-turn-windows', name: 'Dual Turn Windows', cat: 'windows'},
    {url: '/secondary-glazing', name: 'Secondary Glazing', cat: 'windows'},
    {url: '/doors', name: 'Doors', cat: 'doors'},
    {url: '/composite-doors', name: 'Composite Doors', cat: 'doors'},
    {url: '/upvc-doors', name: 'uPVC Doors', cat: 'doors'},
    {url: '/timber-doors', name: 'Timber Doors', cat: 'doors'},
    {url: '/aluminium-doors', name: 'Aluminium Doors', cat: 'doors'},
    {url: '/entrance-doors', name: 'Entrance Doors', cat: 'doors'},
    {url: '/bi-fold-doors', name: 'Bi-Fold Doors', cat: 'doors'},
    {url: '/patio-doors', name: 'Patio Doors', cat: 'doors'},
    {url: '/french-doors', name: 'French Doors', cat: 'doors'},
    {url: '/conservatories', name: 'Conservatories', cat: 'conserv'},
    {url: '/upvc-conservatories', name: 'UPVC Conservatories', cat: 'conserv'},
    {url: '/timber-conservatories', name: 'Timber Conservatories', cat: 'conserv'},
    {url: '/aluminium-conservatories', name: 'Aluminium', cat: 'conserv'},
    {url: '/orangeries', name: 'Orangeries', cat: 'conserv'},
    {url: '/glass-extensions', name: 'Glass Extensions', cat: 'conserv'},
    {url: '/tiled-roof-extensions', name: 'Tiled Roof Extensions', cat: 'conserv'}
  ];


})

app.controller('HomeCtrl', function($scope, $timeout, details, $location) {

  $scope.details = details;

  $scope.number = 47;
  $scope.getNumber = function(num) {
    return new Array(num);
  }



  $timeout(function () {

    /*$('.grid').packery({
      // options
      itemSelector: '.grid-item',
      gutter: 5
    });*/

    var $grid = $('.grid').packery({
      itemSelector: '.grid-item',
      gutter: 5
    });
    // layout Packery after each image loads
    $grid.imagesLoaded().progress( function() {
      $grid.packery();
    });

    new WOW().init();

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
    });

    //Mobile Menu

    if ($.fn.owlCarousel) {
        var sliderwrapper = $('.sliderwrapper');
        $('.slider-wrapper').owlCarousel({
            loop: true,
            items: 1,
            margin: 0,
            animateIn: "zoomInCustom",
            animateOut: "fadeOut",
        });

        sliderwrapper.on('translate.owl.carousel', function () {
            $('.slide-content h2').removeClass('bounceIn animated').hide();
            $('.slide-content span').removeClass('slideInLeft animated').hide();
            $('.slide-content a').removeClass('slideInUp animated').hide();
        });

        sliderwrapper.on('translated.owl.carousel', function () {
            $('.slide-content h2').addClass('bounceIn animated').show();
            $('.slide-content span').addClass('slideInLeft animated').show();
            $('.slide-content a').addClass('slideInUp animated').show();
        });


        $('.service-slider').owlCarousel({
            items: 1,
            loop: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            navs: true,
        });



        $('.project-slide').owlCarousel({
            items: 4,
            loop: true,
            nav: true,
            loop: true,
            dots: false,
            autoplayHoverPause: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                991: {
                    items: 4,
                }
            }
        });

        //    client-area

        $('.partner-slide').owlCarousel({
            items: 5,
            loop: true,
            margin: 0,
            loop: true,
            autoplay: true,
            dots: false,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                },
                480: {
                    items: 3,
                },
                768: {
                    items: 4,
                },
                991: {
                    items: 5,
                }
            }
        });

        //Project_Area

        //    More porject slide
        $('.more-project-slide').owlCarousel({
            items: 3,
            loop: true,
            nav: true,
            margin: 30,
            loop: true,
            dots: false,
            autoplayHoverPause: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
            }
        });

        // client-area
        $('.client-slide').owlCarousel({
            dots: false,
            items: 3,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            nav: true,
            center: true,
            margin: 10,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    center: true,
                    singleItem: true,
                    itemsScaleUp: true,
                },
                768: {
                    items: 3,
                    center: true,
                    singleItem: false,
                    itemsScaleUp: false,
                },
                960: {
                    items: 3,
                    center: true,
                    singleItem: false,
                    itemsScaleUp: false,
                }
            }
        });
    }

    if ($.fn.magnificPopup) {
        $('.proudct-hover a').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
        });
    }

    //Project_Area

    // Plus Isotope
    if ($.fn.isotope) {
        $('.porject-list ul li').on('click', function () {
            $(".porject-list ul li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');
            $(".project-area").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });
    }

  }, 1000);


  //    client-area
  $timeout(function () {
    $('.partner-slide').owlCarousel({
        items: 5,
        loop: true,
        margin: 0,
        loop: true,
        autoplay: true,
        dots: false,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            480: {
                items: 3,
            },
            768: {
                items: 4,
            },
            991: {
                items: 5,
            }
        }
    });
  }, 4000)












})


app.controller('ConCtrl', function($scope, $timeout, details, $location) {
  var paramValue = $location.search().src;
  if(paramValue == 'sent') {
    $location.url($location.path());
    alert('Email sent! We will reply shortly. Thank you.');
  }

  $('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
  });

  $( ".maps" ).mouseleave(function() {
    $('.maps iframe').css("pointer-events", "none");
  });
  /*function initialize() {
      var farmgate = {
          lat: 51.4049697,
          lng: -0.09963229999993928
      };
      var mapProp = {
          center: new google.maps.LatLng(farmgate.lat, farmgate.lng),
          navigationControl: false,
          mapTypeControl: false,
          scaleControl: false,
          draggable: true,
          scrollwheel: false,
          scrollwheel: 0,
          navigationControl: 0,
          streetViewControl: false,
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP
          /*styles: [{
              "featureType": "landscape",
              "stylers": [{
                  "color": "#f2f1f0"
              }, {
                  "visibility": "on"
              }]
          }, {
              "featureType": "poi",
              "stylers": [{
                  "saturation": -100
              }, {
                  "lightness": 51
              }, {
                  "visibility": "simplified"
              }]
          }, {
              "featureType": "road.highway",
              "stylers": [{
                  "color": "#f2f1f0"
              }, {
                  "visibility": "on"
              }]
          }, {
              "featureType": "road.arterial",
              "stylers": [{
                  "color": "#03ff21"
              }, {
                  "visibility": "on"
              }]
          }, {
              "featureType": "road.local",
              "stylers": [{
                  "color": "#f9bf3b"
              }, {
                  "visibility": "off"
              }]
          }, {
              "featureType": "transit",
              "stylers": [{
                  "saturation": -100
              }, {
                  "visibility": "simplified"
              }]
          }, {
              "featureType": "administrative.province",
              "stylers": [{
                  "visibility": "off"
              }]
          }, {
              "featureType": "water",
              "elementType": "labels",
              "stylers": [{
                  "visibility": "on"
              }, {
                  "color": "#f9bf3b"
              }]
          }, {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [{
                  "color": "#fbbb3e"
              }, {
                  "visibility": "on"
              }]
          }]
      };*/
      /*var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
      var marker = new google.maps.Marker({
          position: farmgate,
          map: map,
          animation: google.maps.Animation.BOUNCE,
          icon: '/assets/img/location.png',
      });
      marker.addListener('click', toggleBounce);
  }
  google.maps.event.addDomListener(window, 'load', initialize);*/

})
