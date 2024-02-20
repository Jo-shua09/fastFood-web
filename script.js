const menuBtn = document.querySelector(`#menu-btn`);
const navBar = document.querySelector(`.navbar`);

menuBtn.addEventListener(`click`, () => {
  menuBtn.classList.toggle(`fa-times`);
  navBar.classList.toggle(`showNavbar`);
});

const section = document.querySelectorAll(`section`);
const navLinks = document.querySelectorAll(`header .navbar a`);
window.onscroll = () => {
  menuBtn.classList.remove(`fa-times`);
  navBar.classList.remove(`showNavbar`);
  searchForm.classList.remove(`showSearch`);

  section.forEach((sec) => {
    const top = window.scrollY;
    const height = sec.offsetHeight;
    const offset = sec.offsetTop - 150;
    const id = sec.getAttribute(`id`);

    if ((top) => offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove(`active`);
        document.querySelector(
          `header .navbar a[href*=` + id + `]`.classList.add(`active`)
        );
      });
    }
  });
  section.forEach((sec) => {
    const top = window.scrollY;
    const height = sec.offsetHeight;
    const offset = sec.offsetTop - 150;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");

        const element = document.querySelector(
          `header .navbar a[href*="${id}"]`
        );
        if (element) {
          element.classList.add("active");
        }
      });
    }
  });
};

const searchBtn = document.querySelector(`#search-btn`);
const searchForm = document.querySelector(`#search-form`);
const closeSearch = document.querySelector(`#close-search`);

searchBtn.addEventListener(`click`, () => {
  searchForm.classList.toggle(`showSearch`);
});
closeSearch.addEventListener(`click`, () => {
  searchForm.classList.remove(`showSearch`);
});

// swipper settings
var swiper = new Swiper(`.home-slider`, {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: `.swiper-pagination`,
    clickable: true,
  },
  loop: true,
  navigation: {
    nextEl: `.swiper-button-next`,
    prevEl: `.swiper-button-prev`,
  },
});

var swiper = new Swiper(`.review-slider`, {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}
function fadeOut() {
  setInterval(loader, 3000);
}
window.onload = fadeOut;
