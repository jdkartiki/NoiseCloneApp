$(document).ready(function(event){

//    // Add scrollspy to <body>
$('body').scrollspy({target: ".navbar-nav", offset: 67},800);

// if (this.hash !== "") {

//   event.preventDefault();

//   // Store hash
//   var hash = this.hash;

  
// }
$(".navbar-collapse").collapse("hide");
    // Product-Carousel
    $("#product-carousel").owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
})


// // // Add smooth scrolling on all links inside the navbar
// $(".navbar-nav ").on('click', function(event) {

//   // Make sure this.hash has a value before overriding default behavior
  

//     // Prevent default anchor click behavior
   

//     // Using jQuery's animate() method to add smooth page scroll
//     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//     $('html, body').animate({
//       scrollTop: $(hash).offset().top
//     }, 800, function(){

//     // Add hash (#) to URL when done scrolling (default click behavior)
//       window.location.hash = hash;
//     });

    

//   } // End if

// });