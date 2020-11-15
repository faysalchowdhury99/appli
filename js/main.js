//   Swiper JS
var mySwiper = new Swiper('.swiper-container1', {
    slidesPerView: 5,
    centeredSlides: false,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 5,
          spaceBetween: 40
        }
      }
});

var swiper = new Swiper('.swiper-container2', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

// Fixed Nav Onscroll

$(window).on("scroll",function(){
	if($(window).scrollTop()) {
	  $('nav').addClass('fixed-nav');
	}

	else{
	  $('nav').removeClass('fixed-nav');
	}
});