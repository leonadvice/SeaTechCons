(function ($) {
  'use strict';

  // List of all city

  const stateListDesktop = document.getElementById('stateListDesktop');
  const stateListMobile = document.getElementById('stateListMobile');
  // console.log(stateListDesktop);
  // console.log(stateListMobile);

  if (stateListDesktop && stateListMobile) {
    const states = [
      'Đà Nẵng',
      'Hải Phòng',
      'Hà Nội',
      'Hồ Chí Minh',
      'An Giang',
      'Bà Rịa - Vũng Tàu',
      'Bắc Giang',
      'Bắc Kạn',
      'Bạc Liêu',
      'Bắc Ninh',
      'Bến Tre',
      'Bình Định',
      'Bình Dương',
      'Bình Phước',
      'Bình Thuận',
      'Cà Mau',
      'Cao Bằng',
      'Đắk Lắk',
      'Đắk Nông',
      'Điện Biên',
      'Đồng Nai',
      'Đồng Tháp',
      'Gia Lai',
      'Hà Giang',
      'Hà Nam',
      'Hà Tĩnh',
      'Hải Dương',
      'Hậu Giang',
      'Hòa Bình',
      'Hưng Yên',
      'Khánh Hòa',
      'Kiên Giang',
      'Kon Tum',
      'Lai Châu',
      'Lâm Đồng',
      'Lạng Sơn',
      'Lào Cai',
      'Long An',
      'Nam Định',
      'Nghệ An',
      'Ninh Bình',
      'Ninh Thuận',
      'Phú Thọ',
      'Quảng Bình',
      'Quảng Nam',
      'Quảng Ngãi',
      'Quảng Ninh',
      'Quảng Trị',
      'Sóc Trăng',
      'Sơn La',
      'Tây Ninh',
      'Thái Bình',
      'Thái Nguyên',
      'Thanh Hóa',
      'Thừa Thiên Huế',
      'Tiền Giang',
      'Trà Vinh',
      'Tuyên Quang',
      'Vĩnh Long',
      'Vĩnh Phúc',
      'Yên Bái',
      'Phú Yên',
      'Cần Thơ'
    ];

    for (let i = 0; i <= states.length - 1; i++) {
      let option = document.createElement('OPTION');
      option.innerHTML = states[i];
      option.setAttribute('value', i + 1);
      // console.log(option);
      stateListDesktop.appendChild(option);
      stateListMobile.appendChild(option.cloneNode(true));
      // console.log(i);
    }
    // console.log(stateListDesktop);
  }

  //End city list

  //square aspect ratio for projects

  const cw = $('.square-aspect').width();
  $('.square-aspect').css({ height: cw + 'px' });

  //end of square asepct ratio

  /*----------------------------------------------------*/
  /*  Parallax Effect js
    /*----------------------------------------------------*/
  function parallaxEffect() {
    $('.bg-parallax').parallax();
  }
  parallaxEffect();

  /*----------------------------------------------------*/
  /*  Causes Slider
    /*----------------------------------------------------*/
  //    function causes_slider(){
  //        if ( $('.causes_slider').length ){
  //            $('.causes_slider').owlCarousel({
  //                loop:true,
  //                margin: 30,
  //                items: 3,
  //                nav: false,
  //                autoplay: false,
  //                smartSpeed: 1500,
  //                dots:true,
  //                responsiveClass: true,
  //                responsive: {
  //                    0: {
  //                        items: 1,
  //                    },
  //                    768: {
  //                        items: 2,
  //                    },
  //                    992: {
  //                        items: 3,
  //                    }
  //                }
  //            })
  //        }
  //    }
  //    causes_slider();
  //
  //	/*----------------------------------------------------*/

  /*  Clients Slider
    /*----------------------------------------------------*/
  function clients_slider() {
    if ($('.clients_slider').length) {
      $('.clients_slider').owlCarousel({
        loop: true,
        margin: 30,
        items: 5,
        autoplay: true,
        autoplayTimeout: 1450,
        autoplayHoverPause: false,
        dots: false,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1
          },
          400: {
            items: 2
          },
          575: {
            items: 3
          },
          768: {
            items: 4
          },
          992: {
            items: 5
          }
        }
      });
    }
  }
  clients_slider();

  /*----------------------------------------------------*/
  /*  Testimonials Slider
    /*----------------------------------------------------*/
  function testi_slider() {
    if ($('.testi_slider').length) {
      $('.testi_slider').owlCarousel({
        loop: true,
        margin: 30,
        items: 4,
        nav: false,
        autoplay: false,
        smartSpeed: 1500,
        dots: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1
          },
          576: {
            items: 2
          },
          1100: {
            items: 3
          },
          1300: {
            items: 4
          }
        }
      });
    }
  }
  testi_slider();

  /*----------------------------------------------------*/
  /*  MailChimp Slider
    /*----------------------------------------------------*/
  function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();

  $('select').niceSelect();

  /*----------------------------------------------------*/
  /*  Simple LightBox js
    /*----------------------------------------------------*/
  $('.imageGallery1 .light').simpleLightbox();

  /*----------------------------------------------------*/
  /*  Jquery Ui slider js
    /*----------------------------------------------------*/
  $('#slider-range, #slider-range2').slider({
    range: true,
    min: 0,
    max: 500,
    values: [80, 500],
    slide: function (event, ui) {
      $('#amount, #amount2').val('$' + ui.values[0] + ' $' + ui.values[1]);
    }
  });
  $('#amount, #amount2').val(
    '$' +
      $('#slider-range, #slider-range2').slider('values', 0) +
      '   $' +
      $('#slider-range, #slider-range2').slider('values', 1)
  );

  $('#slider-range2').slider({
    range: true,
    min: 0,
    max: 500,
    values: [80, 500],
    slide: function (event, ui) {
      $('#amount2').val('$' + ui.values[0] + ' $' + ui.values[1]);
    }
  });
  $('#amount2').val(
    '$' +
      $('#slider-range2').slider('values', 0) +
      '   $' +
      $('#slider-range2').slider('values', 1)
  );

  /*  Google map js
    /*----------------------------------------------------*/

  if ($('#mapBox').length) {
    var $lat = $('#mapBox').data('lat');
    var $lon = $('#mapBox').data('lon');
    var $zoom = $('#mapBox').data('zoom');
    var $marker = $('#mapBox').data('marker');
    var $info = $('#mapBox').data('info');
    var $markerLat = $('#mapBox').data('mlat');
    var $markerLon = $('#mapBox').data('mlon');
    var map = new GMaps({
      el: '#mapBox',
      lat: $lat,
      lng: $lon,
      scrollwheel: false,
      scaleControl: true,
      streetViewControl: false,
      panControl: true,
      disableDoubleClickZoom: true,
      mapTypeControl: false,
      zoom: $zoom,
      styles: [
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#dcdfe6'
            }
          ]
        },
        {
          featureType: 'transit',
          stylers: [
            {
              color: '#808080'
            },
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [
            {
              visibility: 'on'
            },
            {
              color: '#dcdfe6'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#ffffff'
            }
          ]
        },
        {
          featureType: 'road.local',
          elementType: 'geometry.fill',
          stylers: [
            {
              visibility: 'on'
            },
            {
              color: '#ffffff'
            },
            {
              weight: 1.8
            }
          ]
        },
        {
          featureType: 'road.local',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#d7d7d7'
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'geometry.fill',
          stylers: [
            {
              visibility: 'on'
            },
            {
              color: '#ebebeb'
            }
          ]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry',
          stylers: [
            {
              color: '#a7a7a7'
            }
          ]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#ffffff'
            }
          ]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#ffffff'
            }
          ]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry.fill',
          stylers: [
            {
              visibility: 'on'
            },
            {
              color: '#efefef'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#696969'
            }
          ]
        },
        {
          featureType: 'administrative',
          elementType: 'labels.text.fill',
          stylers: [
            {
              visibility: 'on'
            },
            {
              color: '#737373'
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#d6d6d6'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {},
        {
          featureType: 'poi',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#dadada'
            }
          ]
        }
      ]
    });
  }

  $(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 5);
  });
})(jQuery);

//language selector

// const changeLang = () => {
//   console.log('test');
// };

const langSelector = document.getElementsByClassName('lang-selector');

Array.from(document.getElementsByClassName('lang-selector')).forEach(function (
  element
) {
  element.addEventListener('click', function () {
    Array.from(document.getElementsByClassName('lang-selector')).forEach(
      function (element) {
        element.textContent == 'ENG'
          ? (element.textContent = 'VIE')
          : (element.textContent = 'ENG');
      }
    );
  });
});

//List of states in form selector
