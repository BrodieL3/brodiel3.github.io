const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

const players = [
  {
    name: "Gavin Brady",
    position: "Scrum-Half",
    year: "2025",
    hometown: "Washington, DC",
    image: "images/roster/gav.jpg",
    hoverImage: "images/roster/aub.jpg",
    lastname: "Brady",
    pos: 9,
    board: "Captain",
  },
  {
    name: "Aubrey Aird",
    position: "Number 8",
    year: "2025",
    hometown: "London, UK",
    image: "images/roster/aub.jpg",
    lastname: "Aird",
    pos: 8,
    board: "President",
  },
  {
    name: "Jack Lonergan",
    position: "Hooker",
    year: "2025",
    hometown: "London, UK",
    image: "images/roster/long.jpg",
    lastname: "Lonergan",
    pos: 2,
    board: "Treasurer",
  },
  {
    name: "Jack Duncan",
    position: "Wing",
    year: "2025",
    hometown: "Pasadena, CA",
    image: "images/roster/duncan.jpg",
    lastname: "Duncan",
    pos: 11,
    board: "Social Chair",
  },
  {
    name: "Matthew Mancini",
    position: "Fullback",
    year: "2027",
    hometown: "Darien, CT",
    image: "images/roster/mancini.jpg",
    lastname: "Mancini",
    pos: 15,
    board: "Recruitment Chair",
  },
  {
    name: "Brodie Lee",
    position: "Lock",
    year: "2026",
    hometown: "Brookline, MA",
    image: "images/roster/brodie.jpg",
    lastname: "Lee",
    pos: 4,
    board: "Webmaster",
  },
  {
    name: "Will Miller",
    position: "Fullback",
    year: "2026",
    hometown: "Washington, DC",
    image: "images/roster/willer.jpg",
    lastname: "Miller",
    pos: 15,
    board: "Webmaster Emeritus",
  },
  {
    name: "Andrew Maloney",
    position: "Inside-Center",
    year: "2026",
    hometown: "Larchmont, NY",
    image: "images/roster/drew.jpg",
    lastname: "Maloney",
    pos: 12,
    board: "Alumni Chair",
  },
  {
    name: "Joel Saxon",
    position: "Scrum-half",
    year: "2027",
    hometown: "Morristown, NJ",
    image: "images/roster/joel.jpeg",
    lastname: "Saxon",
    pos: 9,
    board: "Vice President",
  },
  {
    name: "George Egan",
    position: "Flanker",
    year: "2027",
    hometown: "Omaha, NE",
    image: "images/roster/egan.jpg",
    lastname: "Egan",
    pos: 6,
  },
  {
    name: "Gus Dotson",
    position: "Lock",
    year: "2026",
    hometown: "New York, NY",
    image: "images/roster/dotson.jpg",
    lastname: "Dotson",
    pos: 5,
  },
  {
    name: "Sam Ottariano",
    position: "Prop",
    year: "2026",
    hometown: "Reston, VA",
    image: "images/roster/samo.jpg",
    lastname: "Ottariano",
    pos: 1,
  },
  {
    name: "Lucas Barsantini",
    position: "Fullback",
    year: "2026",
    hometown: "Bethesda, MD",
    image: "images/roster/lucas.jpg",
    lastname: "Barsantini",
    pos: 15,
  },
  {
    name: "Conor Sippel",
    position: "Fly-Half",
    year: "2027",
    hometown: "Hong Kong",
    image: "images/roster/blank.jpg",
    lastname: "Sippel",
    pos: 10,
  },
  {
    name: "Anthony Altobelli",
    position: "Wing",
    year: "2025",
    hometown: "Bridgewater, NJ",
    image: "images/roster/blank.jpg",
    lastname: "Altobelli",
    pos: 11,
    board: "Match Secretary",
  },
  {
    name: "Quinn Zebrowski",
    position: "Outside Center",
    year: "2025",
    hometown: "Verona, NJ",
    image: "images/roster/zebo.jpg",
    lastname: "Zebrowski",
    pos: 13,
    board: "Alumni Chair Emeritus",
  },
  {
    name: "Jack Daly",
    position: "Hooker",
    year: "2027",
    hometown: "Wayland, MA",
    image: "images/roster/daly.jpg",
    lastname: "Daly",
    pos: 2,
  },
  {
    name: "Dominic Wright",
    position: "Prop",
    year: "2028",
    hometown: "MI",
    //image: "images/roster/dominic.jpg",
    lastname: "Wright",
    pos: 1,
  },
  {
    name: "Dominic Petronsinelli",
    position: "Prop",
    year: "2028",
    hometown: "MI",
    //image: "images/roster/dominic.jpg",
    lastname: "Petronsinelli",
    pos: 1,
  },
  {
    name: "Reid Spence",
    position: "Lock",
    year: "2028",
    hometown: "Boston, MA",
    //image: "images/roster/reid.jpg",
    lastname: "Spence",
    pos: 5,
  },
  {
    name: "Ethan Brady",
    position: "Lock, Flanker",
    year: "2028",
    hometown: "Miami, FL",
    //image: "images/roster/ethan.jpg",
    lastname: "Brady",
    pos: 5,
  },
  {
    name: "Levi Merenstein",
    position: "Flanker",
    year: "2028",
    hometown: "unknown",
    //image: "images/roster/levi.jpg",
    lastname: "Merenstein",
    pos: 6,
  },
  {
    name: "Vincent Gude",
    position: "Outside Center",
    year: "2028",
    hometown: "Washington, DC",
    //image: "images/roster/gude.jpg",
    lastname: "Gude",
    pos: 13,
  },
  {
    name: "Vincent Romano",
    position: "Prop",
    year: "2026",
    hometown: "New York, NY",
    //image: "images/roster/romano.jpg",
    lastname: "Romano",
    pos: 1,
  },
  {
    name: "Drew McMaken",
    position: "Flanker",
    year: "2028",
    hometown: "Cleveland, OH",
    //image: "images/roster/drew.jpg",
    lastname: "McMaken",
    pos: 6,
  },
];

console.log(players.length);

function printBoardPosition(player) {
  return player.board ? `<i>${player.board}</i>` : "";
}

//fucntion to change the image of the player when the user hovers on the card

function createBlank(player) {
  //if the player has an image, return the image
  if (player.image) {
    return player.image;
  } else {
    return "images/roster/blank.jpg";
  }
}

function createCard(player) {
  return `
  <div class="card__container animate__animated animate__slideInUp animate__faster" data-lastname="${
    player.lastname
  }" data-year="${player.year}" data-pos="${player.pos}">
    <div class="image-container">
      <img src="${createBlank(player)}" alt="Player Image"/>
    </div>
    <div class="profile__container">
      <div class="profile-header">
        <h1 class="name">${player.name}</h1>
        <h2 class="board-position">${printBoardPosition(player)}</h2>
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
