const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

const players = [
  {
    lastname: "lee",
    name: "Brodie Lee",
    year: 2026,
    pos: 4,
    position: "Lock",
    hometown: "Brookline, MA",
  },
  {},
];

function createCard(player) {
  return `
  <div class="card__container animate__animated animate__slideInUp animate__faster" data-lastname="${player.lastname}" data-year="${player.year}" data-pos="${player.pos}">
    <div class="image-container">
      <img src="${player.image}" alt="Player Image" />
    </div>
    <div class="profile__container">
      <div class="profile-header">
        <h1 class="name">${player.name}</h1>
        <h2 class="board-position"><i>${player.position}</i></h2>
      </div>
      <table class="details">
        <tr>
          <th class="position">Position:</th>
          <th class="year">Year:</th>
          <th class="hometown">Hometown:</th>
        </tr>
        <tr>
          <td class="player_position">${player.position}</td>
          <td class="player_year">${player.year}</td>
          <td class="player_hometown">${player.hometown}</td>
        </tr>
      </table>
    </div>
  </div>
`;
}

document.addEventListener("DOMContentLoaded", function () {
  const playerList = document.getElementById("player__list");
  players.forEach((player) => {
    playerList.innerHTML += createCard(player);
  });
});

function show_list() {
  var courses = document.getElementById("courses_id");

  if (courses.style.display == "block") {
    courses.style.display = "none";
  } else {
    courses.style.display = "block";
  }
}
window.onclick = function (event) {
  if (!event.target.matches(".dropdown_button")) {
    document.getElementById("courses_id").style.display = "none";
  }
};

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
  sortedDivs.classList.add("animate__animated", "animate__fadeInUp");
}
