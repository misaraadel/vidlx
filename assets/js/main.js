$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $(".scroll-top-button").fadeIn();
    } else {
      $(".scroll-top-button").fadeOut();
    }
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  $(".scroll-top-button").on('click', function () {
    $('html , body').animate({
      scrollTop: 0
    }, 100);
  });

  $('.hamburger').click(function(){
    $('.hamburger').toggleClass('active');
    $('.navbar-nav').toggleClass('active-nav');
    $('body').toggleClass('overflowNone')
  });

  var swiper = new Swiper(".swiper-header", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  var swiper = new Swiper(".swiper-influencers", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
      slidesPerView: 2,
      spaceBetween: 18,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 18,
      },
    },
  });
  
  var swiper = new Swiper(".swiper-gallery", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 18,
      },
    },
  });

  $("[data-fancybox]").fancybox({
    selector: '[data-fancybox="images"]',
    loop: true
  });



  $(".show-pass").on('click', function(event) {
    event.preventDefault();
    
    $(this).toggleClass("active");
  });
  
  $(".show_hide_password .show-pass").on('click', function(event) {
    event.preventDefault();
    if($(this).siblings("input").attr("type") == "text"){
      $(this).siblings("input").attr('type', 'password');
    }else if($(this).siblings("input").attr("type") == "password"){
      $(this).siblings("input").attr('type', 'text');
    }
  });

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
        $('#imagePreview').hide();
        $('#imagePreview').fadeIn(650);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#imageUpload").change(function() {
    readURL(this);
  });

  var input = document.querySelector("#telephone");
  window.intlTelInput(input, {
    initialCountry: "eg", 
    separateDialCode: true, 
    nationalMode: false,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    countrySearch: true,
    formatAsYouType: true,
    containerClass: "form-control",
    countrySearch: true,
  });

  
});

document.getElementById('logo-upload').addEventListener('change', function() {
  const fileName = this.files[0].name;
  document.getElementById('logo-upload-box').querySelector('p').textContent = fileName;
});

document.getElementById('product-upload').addEventListener('change', function() {
  const fileName = this.files[0].name;
  document.getElementById('product-upload-box').querySelector('p').textContent = fileName;
});
