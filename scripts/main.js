import Header from './Header.js'
import TabsCollecton from './Tabs.js'
import DropdownMenu from './DropdownMenu.js'

new Header()
new TabsCollecton()
new DropdownMenu()

$(function () {
  $('.peoples__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          draggable: true,
        },
      },
    ],
  })

  $('.peoples__arrow-prev').on('click', function (e) {
    e.preventDefault()
    $('.peoples__slider').slick('slickPrev')
  })

  $('.peoples__arrow-next').on('click', function (e) {
    e.preventDefault()
    $('.peoples__slider').slick('slickNext')
  })

  $('.testimonials__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: false,
  })

  $('.testimonials__arrow-prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })

  $('.testimonials__arrow-next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
  })

  const upwardButton = document.querySelector('.upward');

  window.addEventListener('scroll', function () {
    if (upwardButton) {
      upwardButton.classList.toggle('active', window.scrollY > 500);
    }
  })

  if (upwardButton) {
    upwardButton.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
})