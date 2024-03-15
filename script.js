$(".slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  // variableWidth: true,
  autoplay: true,
  // vertical: true,
  // verticalSwiping: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".event-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  // variableWidth: true,
  autoplay: true,
  // vertical: true,
  // verticalSwiping: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

const navbarToggle = document.querySelector(".navbar-toggle");
const menuBar = document.querySelector(".menu-bar");

// Toggle function
function toggleMenu() {
  menuBar.classList.toggle("active");
}

// Add click event listener to navbarToggle
navbarToggle.addEventListener("click", toggleMenu);

// Add click event listeners to menu items to close menu bar after clicking
document.querySelectorAll(".menu-bar li a").forEach((item) => {
  item.addEventListener("click", () => {
    menuBar.classList.remove("active");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Get all the anchor tags within the navigation bar
  var navLinks = document.querySelectorAll("nav ul li a");

  // Add event listener to each anchor tag
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default behavior of the anchor tag

      // Get the target section ID from the href attribute
      var targetId = this.getAttribute("href");

      // Scroll to the target section smoothly
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
