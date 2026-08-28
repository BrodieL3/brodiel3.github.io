/* =========================================================
   GURFC — site behaviour
   =========================================================

   TO UPDATE THE SITE WITH REAL DATA, EDIT THE THREE BLOCKS BELOW:
     1. `roster`      — replace the sample players with the real squad
     2. `matchData`   — replace the sample fixtures/results
     3. `instagramPosts` — paste in the @gurfc post URLs you want featured

   Everything below those blocks is wiring and should not need changes.
   ========================================================= */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------------------------------------------------------
   1. ROSTER — the real 2026 squad. Year, position and hometown are
   placeholders ("—") until that information is collected. Once it is,
   fill the fields in here and re-add the Year / Position / Hometown
   <label> blocks to the .filters div in index.html to switch those
   filters back on — no other change is needed.
   --------------------------------------------------------- */
const roster = [
  { name: "Abdur Rahman", year: "—", position: "—", hometown: "—" },
  { name: "Aidan Schmidt", year: "—", position: "—", hometown: "—" },
  { name: "Alan Arenas", year: "—", position: "—", hometown: "—" },
  { name: "Alexander Ma", year: "—", position: "—", hometown: "—" },
  { name: "Drew McMaken", year: "—", position: "—", hometown: "—" },
  { name: "Ansel Scholl", year: "—", position: "—", hometown: "—" },
  { name: "Conor Sippel", year: "—", position: "—", hometown: "—" },
  { name: "Domenic Petrosinelli", year: "—", position: "—", hometown: "—" },
  { name: "Dominic Wright", year: "—", position: "—", hometown: "—" },
  { name: "Eduard Giurca", year: "—", position: "—", hometown: "—" },
  { name: "Ethan Brady", year: "—", position: "—", hometown: "—" },
  { name: "Finlay Mitchell", year: "—", position: "—", hometown: "—" },
  { name: "Finn Sippel", year: "—", position: "—", hometown: "—" },
  { name: "George Egan", year: "—", position: "—", hometown: "—" },
  { name: "Henry Spence", year: "—", position: "—", hometown: "—" },
  { name: "James Foundos", year: "—", position: "—", hometown: "—" },
  { name: "Joel Saxon", year: "—", position: "—", hometown: "—" },
  { name: "John Daly", year: "—", position: "—", hometown: "—" },
  { name: "Khan Ho", year: "—", position: "—", hometown: "—" },
  { name: "Kevin Emerson", year: "—", position: "—", hometown: "—" },
  { name: "Levi Merenstein", year: "—", position: "—", hometown: "—" },
  { name: "Martin Morgan", year: "—", position: "—", hometown: "—" },
  { name: "Matthew Mancini", year: "—", position: "—", hometown: "—" },
  { name: "Maximus Anigacz", year: "—", position: "—", hometown: "—" },
  { name: "Patrick Mancini", year: "—", position: "—", hometown: "—" },
  { name: "Pratham Sethia", year: "—", position: "—", hometown: "—" },
  { name: "Samik Soi", year: "—", position: "—", hometown: "—" },
  { name: "Vincent Gude", year: "—", position: "—", hometown: "—" },
  { name: "Walker Humphries", year: "—", position: "—", hometown: "—" },
  { name: "William Hartford", year: "—", position: "—", hometown: "—" },
  { name: "William Puzzuoli", year: "—", position: "—", hometown: "—" },
];

/* ---------------------------------------------------------
   2. MATCHES  —  PLACEHOLDER DATA. Replace with real fixtures.
   `status` must be "Upcoming", "Final", or "Canceled" so the
   coloured pill picks the right style.
   --------------------------------------------------------- */
const matchData = {
  fifteens: {
    label: "15s",
    season: "Fall 2026",
    title: "15s fixtures",
    summary:
      "A five-match fall slate in Division II National Collegiate Rugby. Home fixtures are played at Cooper Field; away venues and kickoff times are confirmed closer to match day.",
    next: {
      status: "Season Opener",
      matchup: "GURFC at Catholic University",
      detail: "Friday, September 11, 2026",
      side: "Away",
    },
    matches: [
      { date: "Fri, Sep. 11, 2026", opponent: "Catholic University", side: "Away", venue: "TBD" },
      { date: "Sat, Sep. 19, 2026", opponent: "Frostburg University", side: "Away", venue: "TBD" },
      { date: "Sat, Sep. 26, 2026", opponent: "UMBC", side: "Home", venue: "Cooper Field" },
      { date: "Fri, Oct. 2, 2026", opponent: "Loyola", side: "Home", venue: "Cooper Field" },
      { date: "Sat, Oct. 17, 2026", opponent: "Towson", side: "Away", venue: "TBD" },
    ],
  },
  sevens: {
    label: "7s",
    season: "Spring 2027",
    title: "7s tournaments",
    summary:
      "The spring season shifts into seven-a-side rugby, with tournament days, faster rotations, and open competition for roster spots.",
    next: null,
    matches: [],
    emptyMessage:
      "The spring 7s schedule has not been released yet. Follow @gurfc for the announcement.",
  },
};

/* ---------------------------------------------------------
   3. INSTAGRAM  —  real @gurfc posts, embedded live.
   Newest first, rewritten daily by the GitHub Action — see
   README-instagram.md. `code` is the shortcode from the post URL,
   `image` is the post's picture saved into assets/ so the grid renders
   instantly and never depends on Instagram being reachable, and
   `caption` is a short excerpt that may be empty (plenty of posts have
   no caption). The card falls back to just the date when it is.
   --------------------------------------------------------- */
/* IG:START — rewritten by scripts/refresh-instagram.mjs, do not edit by hand */
const instagramPosts = [
  { code: "DcbK5-6CBZu", image: "assets/ig-1.jpg", date: "August 24, 2026", caption: "Alright boys, the Fall 2026 15s Season starts next week. Tuesday, September 1st." },
  { code: "DbTKeU5Dj1P", image: "assets/ig-2.jpg", date: "July 27, 2026", caption: "With the summer coming to an end and the Fall '26 season starting soon, GURFC would like to…" },
  { code: "DX4yBNFFMPu", image: "assets/ig-3.jpg", date: "May 3, 2026", caption: "The boys came back from Nationals 7s placing 8th in the Nation in Division II." },
  { code: "DXiGczTjjwS", image: "assets/ig-4.jpg", date: "April 24, 2026", caption: "" },
  { code: "DXiFbuNDtbk", image: "assets/ig-5.jpg", date: "April 24, 2026", caption: "" },
  { code: "DXhfeudDkMh", image: "assets/ig-6.jpg", date: "April 24, 2026", caption: "" },
];
/* IG:END */

/* =========================================================
   Roster table
   ========================================================= */

const rosterBody = document.querySelector("#roster-body");
const rosterCount = document.querySelector("#roster-count");
const filters = {
  name: document.querySelector("#name-filter"),
  year: document.querySelector("#year-filter"),
  position: document.querySelector("#position-filter"),
  hometown: document.querySelector("#hometown-filter"),
};

const fieldValue = (field) => (field ? field.value : "");

function renderRoster() {
  const nameTerm = fieldValue(filters.name).trim().toLowerCase();
  const year = fieldValue(filters.year);
  const position = fieldValue(filters.position);
  const hometownTerm = fieldValue(filters.hometown).trim().toLowerCase();

  const visible = roster.filter((player) => {
    return (
      player.name.toLowerCase().includes(nameTerm) &&
      (!year || player.year === year) &&
      (!position || player.position === position) &&
      player.hometown.toLowerCase().includes(hometownTerm)
    );
  });

  rosterBody.innerHTML = visible.length
    ? visible
        .map(
          (player) => `
        <tr>
          <td data-label="Name">${player.name}</td>
          <td data-label="Year">${player.year}</td>
          <td data-label="Position">${player.position}</td>
          <td data-label="Hometown">${player.hometown}</td>
        </tr>`
        )
        .join("")
    : `<tr class="empty-row"><td colspan="4">No players match those filters.</td></tr>`;

  rosterCount.textContent = `Showing ${visible.length} player${visible.length === 1 ? "" : "s"}`;
}

Object.values(filters)
  .filter(Boolean)
  .forEach((field) => field.addEventListener("input", renderRoster));
renderRoster();

/* =========================================================
   Match centre
   ========================================================= */

const formatPanel = document.querySelector("#match-format-panel");
const formatTabs = document.querySelectorAll(".format-tab");

function matchMarkup(format) {
  const summary = `
    <div class="format-summary">
      <div>
        <span class="label">${format.season}</span>
        <h3>${format.title}</h3>
        <p>${format.summary}</p>
      </div>
    </div>`;

  if (!format.matches.length) {
    return `
      ${summary}
      <div class="schedule-empty">
        <span class="pill upcoming">To Be Announced</span>
        <p>${format.emptyMessage}</p>
      </div>`;
  }

  const next = format.next
    ? `
      <div class="next-match">
        <div>
          <span class="pill upcoming">${format.next.status}</span>
          <h3>${format.next.matchup}</h3>
          <p>${format.next.detail}</p>
        </div>
        <span class="pill side ${format.next.side.toLowerCase()}">${format.next.side}</span>
      </div>`
    : "";

  return `
    ${summary}
    ${next}
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Opponent</th>
            <th>Home / Away</th>
            <th>Venue</th>
          </tr>
        </thead>
        <tbody>
          ${format.matches
            .map(
              (match) => `
                <tr>
                  <td data-label="Date">${match.date}</td>
                  <td data-label="Opponent">${match.opponent}</td>
                  <td data-label="Home / Away"><span class="pill side ${match.side.toLowerCase()}">${match.side}</span></td>
                  <td data-label="Venue">${match.venue}</td>
                </tr>`
            )
            .join("")}
        </tbody>
      </table>
    </div>`;
}

function renderMatchFormat(key, animate = false) {
  const format = matchData[key];
  formatPanel.setAttribute("aria-labelledby", key === "fifteens" ? "tab-15s" : "tab-7s");

  const paint = () => {
    formatPanel.innerHTML = matchMarkup(format);
    formatPanel.classList.remove("is-swapping");
  };

  if (animate && !prefersReducedMotion) {
    formatPanel.classList.add("is-swapping");
    setTimeout(paint, 180);
  } else {
    paint();
  }
}

formatTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    if (tab.classList.contains("is-active")) return;
    formatTabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-selected", String(selected));
    });
    renderMatchFormat(tab.dataset.format, true);
  });
});

renderMatchFormat("fifteens");

/* =========================================================
   Instagram

   Instagram's own embeds render blank inside a third-party frame in
   current Chrome, so each card is a local image that links out to the
   real post. Reliable, instant, and works offline.
   ========================================================= */

const igGrid = document.querySelector("[data-ig-grid]");

if (igGrid) {
  igGrid.innerHTML = instagramPosts
    .map(
      (post) => `
      <a class="ig-card" href="https://www.instagram.com/p/${post.code}/" target="_blank" rel="noreferrer">
        <span class="ig-media">
          <img src="${post.image}" alt="Instagram post from @gurfc, ${post.date}" loading="lazy" decoding="async" />
        </span>
        <span class="ig-meta">
          <span class="ig-date">${post.date}</span>
          ${post.caption ? `<span class="ig-caption">${post.caption}</span>` : ""}
        </span>
      </a>`
    )
    .join("");
}

/* =========================================================
   Navigation
   ========================================================= */

const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("[data-nav-links]");

const setNavState = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
setNavState();
window.addEventListener("scroll", setNavState, { passive: true });

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navLinks.classList.contains("is-open")) {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.focus();
  }
});

/* =========================================================
   Hero video
   ========================================================= */

const heroMedia = document.querySelector("[data-hero-media]");
const heroVideo = document.querySelector("[data-hero-video]");

if (heroMedia && heroVideo) {
  const reveal = () => heroMedia.classList.add("is-ready");
  const connection = navigator.connection || {};
  const lightMode = prefersReducedMotion || connection.saveData === true;

  if (lightMode) {
    // Swap the video for the poster still: no autoplay, no download.
    const still = new Image();
    still.src = heroVideo.getAttribute("poster");
    still.alt = "";
    still.setAttribute("aria-hidden", "true");
    heroVideo.replaceWith(still);
    still.complete ? reveal() : still.addEventListener("load", reveal);
  } else {
    heroVideo.addEventListener("loadeddata", reveal, { once: true });
    heroVideo.addEventListener("error", reveal, { once: true });
    if (heroVideo.readyState >= 2) reveal();
    setTimeout(reveal, 2500); // never leave the hero blank
    const play = heroVideo.play();
    if (play && typeof play.catch === "function") play.catch(reveal);
  }
}

/* =========================================================
   Scroll reveals
   ========================================================= */

const revealTargets = document.querySelectorAll("[data-reveal]");

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealTargets.forEach((el) => el.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry, index) => {
        if (!entry.isIntersecting) return;
        entry.target.style.transitionDelay = `${Math.min(index * 70, 210)}ms`;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  revealTargets.forEach((el) => observer.observe(el));
}
