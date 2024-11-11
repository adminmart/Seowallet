$(document).ready(function () {
  const owl = $(".owl-carousel");

  // Initialize Owl Carousel
  owl.owlCarousel({
    loop: true,
    margin: 32,
    dots: false,
    center: false,
    nav: false,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1024: { items: 2 },
      1300: { items: 3 },
    },
  });

  // Custom Button Actions
  $(".next-btn").click(function () {
    owl.trigger("next.owl.carousel");
  });

  $(".prev-btn").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  // Sticky Header
  window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 60) {
      // Adjust scroll threshold as needed
      header.classList.add("bg-white", "shadow-md", "fixed", "top-0", "z-50");
    } else {
      header.classList.remove("bg-white", "shadow-md", "fixed", "top-0");
    }
  });

  // Toggle menu visibility and overlay
  document.getElementById("menu-toggle").addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const overlay = document.getElementById("overlay");

    mobileMenu.classList.toggle("-translate-x-full"); // Toggle slide-in/out
    overlay.classList.toggle("hidden"); // Show/hide overlay
  });

  // Close the menu when clicking on the overlay
  document.getElementById("overlay").addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.add("-translate-x-full"); // Slide out menu
    document.getElementById("overlay").classList.add("hidden"); // Hide overlay
  });
});

// FAQ

function toggleAccordion(button) {
  const panel = button.nextElementSibling;
  const icon = button.querySelector(".icon");

  // Toggle the panel visibility
  panel.classList.toggle("hidden");

  // Change the icon between "+" and "-"
  icon.textContent = icon.textContent === "+" ? "−" : "+";
}
