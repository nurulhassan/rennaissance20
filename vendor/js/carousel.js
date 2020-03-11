const nextIcon = '<img src="../../images/right-arrow.svg" alt="right">';
const prevIcon = '<img src="../../images/left-arrow.svg" alt="left" >';

$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay: true,
  margin:10,
  nav: true,
  navText: [
  prevIcon,
  nextIcon
],
responsiveClass:true,
  responsive:{
    0:{
      items:2
    },
    600:{
      items:2

    },
    1000:{
      items:3
    }
  }
})
