import './pages/pages.js'

window.addEventListener("load", () => {
    const stockSwiper = new Swiper(".stock-swiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".fa-arrow-right",
          prevEl: ".fa-arrow-left",
        }
    });
    const rewiewSwiper = new Swiper(".review-swiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoHeight: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".fa-arrow-right",
        prevEl: ".fa-arrow-left",
      }
  });
});

