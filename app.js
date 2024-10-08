const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

const dropdownBtn = document.querySelector("sortbtn");
const dropdownMenu = document.querySelector("dropdown__content");

const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
};
function dropdown() {
  console.log(dropdownMenu);
}

dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

// Function to sort by last name alphabetically
function NameSort() {
  var alphabeticallyOrderedDivs = $(".card__container").sort(function (a, b) {
    var lastNameA = $(a).data("lastname").toLowerCase();
    var lastNameB = $(b).data("lastname").toLowerCase();
    return lastNameA.localeCompare(lastNameB);
  });

  updateContainer(alphabeticallyOrderedDivs);
}

// Function to sort by year numerically in descending order
function YrSort() {
  var numericallyOrderedDivs = $(".card__container").sort(function (a, b) {
    var yearA = $(a).data("year");
    var yearB = $(b).data("year");
    return yearB - yearA;
  });

  updateContainer(numericallyOrderedDivs);
}

// Function to sort by position numerically in ascending order
function PosSort() {
  var positionallyOrderedDivs = $(".card__container").sort(function (a, b) {
    var posA = $(a).data("pos");
    var posB = $(b).data("pos");
    return posA - posB;
  });

  updateContainer(positionallyOrderedDivs);
}

// Utility function to update the container with sorted elements
function updateContainer(sortedDivs) {
  var container = $("#player__list");
  container.detach().empty().append(sortedDivs);
  $("main").append(container);
}
