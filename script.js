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
  { name: "Matthew Mancini", year: "Senior", position: "Fullback", hometown: "Darien, CT / Fairfield College Preparatory School", title: "Captain" },
  { name: "Joel Saxon", year: "Senior", position: "Scrum-half", hometown: "Morristown, NJ / Delbarton School", title: "President" },
  { name: "Ansel Scholl", year: "Senior", position: "Scrum-half", hometown: "New York, NY / UNIS", title: "Treasurer" },
  { name: "Conor Sippel", year: "Senior", position: "Flyhalf", hometown: "Hong Kong / Valley Fort RFC", title: "Social Chair" },
  { name: "Vince Gude", year: "Junior", position: "Scrum-half / Wing / Center", hometown: "Vienna, VA / Gonzaga College High School", title: "Match Secretary" },
  { name: "Will Puzzuoli", year: "Junior", position: "Center / Winger", hometown: "Rye, NY / Rye High School", title: "Alumni Chair" },
  { name: "Finn Sippel", year: "Sophomore", position: "Center", hometown: "Hong Kong / German Swiss International School", title: "Vice President" },
  { name: "Patrick Mancini", year: "Sophomore", position: "Scrum-half / Winger", hometown: "Darien, CT / Fairfield College Preparatory School", title: "Recruitment Chair" },
  { name: "Elias Abourjaili", year: "Freshman", position: "Center / Fullback", hometown: "Danvers, MA / Malden Catholic High School" },
  { name: "Dante Agostini", year: "Freshman", position: "Winger", hometown: "Houston, TX / Kinkaid School" },
  { name: "Bernardo Amare", year: "Freshman", position: "Winger", hometown: "Houston, TX / Awty International School" },
  { name: "Maximus Anigacz", year: "Junior", position: "Hooker", hometown: "New York, NY / Xavier High School" },
  { name: "Ethan Brady", year: "Junior", position: "Lock", hometown: "Miami, FL / American Heritage High School" },
  { name: "Nicholas Bruno", year: "Freshman", position: "Winger", hometown: "Washington, DC / Landon School" },
  { name: "JC Chapman", year: "Freshman", position: "Center", hometown: "Haverford, PA / The Haverford School" },
  { name: "Connor Colbert", year: "Freshman", position: "Wing/Prop", hometown: "Bethesda, MD / Georgetown Prep" },
  { name: "Sebastian Cruz", year: "Sophomore", position: "Winger", hometown: "Fairfield, CT / Fairfield College Preparatory School" },
  { name: "Jack Daly", year: "Senior", position: "Backrow", hometown: "Wayland, MA / St. Sebastian's School" },
  { name: "George Egan", year: "Senior", position: "Backrow", hometown: "Omaha, NE / Creighton Preparatory School" },
  { name: "Kevin Emerson", year: "Junior", position: "Winger", hometown: "Bethesda, MD / Georgetown Prep" },
  { name: "Jad Farrell", year: "Sophomore", position: "—", hometown: "London, United Kingdom / St. Paul's School" },
  { name: "Said Malik Fazlitdinov", year: "Junior", position: "—", hometown: "—" },
  { name: "Gabriel Fenton", year: "Senior", position: "Winger", hometown: "Winter Park, FL / Winter Park High School" },
  { name: "James Foundos", year: "Sophomore", position: "Prop / Backrow", hometown: "San Diego, CA / Francis Parker High School" },
  { name: "Eduard Giurca", year: "Sophomore", position: "Backrow", hometown: "Dublin, Ireland / Clongowes Wood College SJ" },
  { name: "Will Hartford", year: "Junior", position: "Winger", hometown: "Milton, MA / Boston College High School" },
  { name: "Walker Humphries", year: "Sophomore", position: "Winger", hometown: "Wellington, UK / Wellington College" },
  { name: "Jay Kapoor", year: "Freshman", position: "Flanker / Prop", hometown: "Bethesda, MD / Landon School" },
  { name: "Oliver Kim", year: "Freshman", position: "Scrum-half", hometown: "Lawrenceville, NJ / The Peddie School" },
  { name: "Vedant Kulkarni", year: "Freshman", position: "—", hometown: "Boston, MA / Nobles and Greenough School" },
  { name: "Logan Luo", year: "Freshman", position: "Winger", hometown: "Xiamen, China / Westtown School" },
  { name: "Nick Luongo", year: "Sophomore", position: "Lock", hometown: "San Francisco, CA / St. Ignatius College Preparatory School" },
  { name: "Alexander Ma", year: "Sophomore", position: "Lock", hometown: "Toronto, Canada / Rothesay Netherwood School" },
  { name: "Levi Merenstein", year: "Junior", position: "Flanker / Lock", hometown: "Bethesda, MD / Walt Whitman High School" },
  { name: "Finlay Mitchell", year: "Junior", position: "Center", hometown: "Charlotte, NC / Marvin Ridge High School" },
  { name: "Ishaan Mittal", year: "Junior", position: "Winger", hometown: "Princeton, NJ / The Peddie School" },
  { name: "Declan Moran", year: "Freshman", position: "Winger", hometown: "Rye, NY / Brunswick School" },
  { name: "Martin Morgan", year: "Junior", position: "Backrow", hometown: "Garden City, NY / Chaminade High School" },
  { name: "Zico Muldoon", year: "Sophomore", position: "Winger", hometown: "Los Angeles, CA / Loyola High School" },
  { name: "Arthur Murray", year: "Freshman", position: "Winger", hometown: "Groton, CT / Groton School" },
  { name: "Kamron Norasteh", year: "Senior", position: "Flanker", hometown: "New York, NY / Collegiate School" },
  { name: "Evan O'Reilly", year: "Freshman", position: "Flanker", hometown: "Dublin, Ireland / Clongowes Wood College SJ" },
  { name: "Ryan Finn O'Sullivan", year: "Freshman", position: "Winger", hometown: "Greenwich, CT / Brunswick School" },
  { name: "Nicholas Plachta", year: "Sophomore", position: "Forward", hometown: "Huntington, NY" },
  { name: "Grady Rannow", year: "Junior", position: "—", hometown: "Minneapolis, MN / The Blake School" },
  { name: "Zach Rozanski", year: "Freshman", position: "Backrow", hometown: "Greenwich, CT / Hotchkiss School" },
  { name: "Aidan Schmidt", year: "Sophomore", position: "Winger", hometown: "Rye, NY / Rye High School" },
  { name: "Robin Sechriest", year: "Freshman", position: "Fullback", hometown: "Washington, DC / Gonzaga College High School" },
  { name: "Pratham Sethia", year: "Junior", position: "Winger", hometown: "Ellicott City, MD / Marriotts Ridge High School" },
  { name: "Jackson Snyder", year: "Freshman", position: "Lock", hometown: "Washington, DC / Georgetown Prep" },
  { name: "Harry Spence", year: "Sophomore", position: "Lock", hometown: "New York, NY / Groton School" },
  { name: "Salar Syed", year: "Freshman", position: "—", hometown: "Lahore, Pakistan" },
  { name: "Noah Wheaton", year: "Freshman", position: "Scrum-half", hometown: "Cheltenham, United Kingdom / Dean Close School" },
];

/* ---------------------------------------------------------
   HEADSHOTS

   Both grids show initials in a navy circle until real photos
   exist. Flip a flag to true once you have dropped the images in,
   and the circles start showing photos instead. They are off by
   default so the page doesn't fire off dozens of requests for
   files that aren't there yet.

   Players  -> assets/roster/<first-last>.jpg   e.g. assets/roster/aidan-schmidt.jpg
   Coaches  -> assets/coaches/<first-last>.jpg

   Square images, 400x400 or larger. See assets/roster/README.txt
   for the exact filename for every player. Any individual photo
   that is missing just falls back to that person's initials, so a
   partial set is fine.
   --------------------------------------------------------- */

const ROSTER_HEADSHOTS = true;
const COACH_HEADSHOTS = true;

/* ---------------------------------------------------------
   COACHES — 10 slots, all empty placeholders for now.

   Fill in name, role and bio and the card renders properly;
   leave a slot blank and it shows as a numbered placeholder.
   `bio` is one or two sentences on what they do with the club.
   --------------------------------------------------------- */
const coaches = [
  { name: "Arno Van Der Spek", role: "Head Coach", bio: "" },
  { name: "Dacoda Worth", role: "Head Coach", bio: "" },
  { name: "Julian Graham", role: "Director of Rugby", bio: "" },
  { name: "Josh Brady", role: "Coach", bio: "" },
  { name: "Howard Chang", role: "Coach", bio: "" },
  { name: "Brian Ferrigno", role: "Coach", bio: "" },
  { name: "Jeffrey Ferrigno", role: "Coach", bio: "" },
  { name: "Mark C. Ingram", role: "Coach", bio: "" },
  { name: "Morgan Landy", role: "Coach", bio: "" },
  { name: "Craig Rowlings", role: "Coach", bio: "" },
  { name: "Kellie Yamane", role: "Team Nurse", bio: "" },
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
      status: "Upcoming",
      matchup: "GURFC at Frostburg University",
      detail: "Saturday, September 19, 2026 \u00b7 1:00 PM at FSU Rugby Field",
      side: "Away",
    },
    matches: [
      { date: "Fri, Sep. 11, 2026", opponent: "Catholic University", side: "Away", venue: "Cardinal Stadium, 7:00 PM", result: "Loss" },
      { date: "Sat, Sep. 19, 2026", opponent: "Frostburg University", side: "Away", venue: "FSU Rugby Field, 1:00 PM" },
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
  { code: "DdJvTO1oqrB", image: "assets/ig-1.jpg", date: "September 11, 2026", caption: "Alright lads, tonight is the first 15s game of the season against Catholic University." },
  { code: "DdAOt5kDtFl", image: "assets/ig-2.jpg", date: "September 7, 2026", caption: "With our opening match just four days away, we want to take a moment to recognize one of the most…" },
  { code: "Dc4Rq6tIpyu", image: "assets/ig-3.jpg", date: "September 4, 2026", caption: "Excited to release the Fall '26 15s schedule!" },
  { code: "DcbK5-6CBZu", image: "assets/ig-4.jpg", date: "August 24, 2026", caption: "Alright boys, the Fall 2026 15s Season starts next week. Tuesday, September 1st." },
  { code: "DbTKeU5Dj1P", image: "assets/ig-5.jpg", date: "July 27, 2026", caption: "With the summer coming to an end and the Fall '26 season starting soon, GURFC would like to…" },
  { code: "DX4yBNFFMPu", image: "assets/ig-6.jpg", date: "May 3, 2026", caption: "The boys came back from Nationals 7s placing 8th in the Nation in Division II." },
];
/* IG:END */

/* =========================================================
   Roster table
   ========================================================= */

/* Shared helpers for the headshot circles. */

const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/[\u2018\u2019']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const initialsOf = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* A photo that 404s is removed so the initials underneath show through.
   That keeps a half-finished set of headshots looking deliberate. */
function wireHeadshotFallbacks(scope) {
  scope.querySelectorAll("img.avatar-img").forEach((img) => {
    img.addEventListener("error", () => img.remove(), { once: true });
  });
}

function avatarMarkup(name, dir, enabled, extraClass = "") {
  const photo = enabled
    ? `<img class="avatar-img" src="${dir}/${slugify(name)}.jpg" alt="" loading="lazy" decoding="async" />`
    : "";
  return `<span class="avatar ${extraClass}" aria-hidden="true"><span class="avatar-initials">${initialsOf(name)}</span>${photo}</span>`;
}

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
          <td data-label="Name">
            <span class="player">
              ${avatarMarkup(player.name, "assets/roster", ROSTER_HEADSHOTS)}
              <span class="player-name">${escapeHtml(player.name)}</span>
              ${player.title ? `<span class="role-badge">${escapeHtml(player.title)}</span>` : ""}
            </span>
          </td>
          <td data-label="Year">${player.year}</td>
          <td data-label="Position">${player.position}</td>
          <td data-label="Hometown">${player.hometown}</td>
        </tr>`
        )
        .join("")
    : `<tr class="empty-row"><td colspan="4">No players match those filters.</td></tr>`;

  wireHeadshotFallbacks(rosterBody);
  rosterCount.textContent = `Showing ${visible.length} player${visible.length === 1 ? "" : "s"}`;
}

Object.values(filters)
  .filter(Boolean)
  .forEach((field) => field.addEventListener("input", renderRoster));
renderRoster();

/* =========================================================
   Coaching staff
   ========================================================= */

const coachGrid = document.querySelector("[data-coach-grid]");

if (coachGrid) {
  coachGrid.innerHTML = coaches
    .map((coach, i) => {
      if (!coach.name) {
        return `
        <article class="coach-card is-empty">
          <span class="avatar avatar-lg" aria-hidden="true"><span class="avatar-initials">${i + 1}</span></span>
          <h3 class="coach-name">Coach ${i + 1}</h3>
          <p class="coach-role">To be added</p>
        </article>`;
      }
      return `
        <article class="coach-card">
          ${avatarMarkup(coach.name, "assets/coaches", COACH_HEADSHOTS, "avatar-lg")}
          <h3 class="coach-name">${escapeHtml(coach.name)}</h3>
          ${coach.role ? `<p class="coach-role">${escapeHtml(coach.role)}</p>` : ""}
          ${coach.bio ? `<p class="coach-bio">${escapeHtml(coach.bio)}</p>` : ""}
        </article>`;
    })
    .join("");

  wireHeadshotFallbacks(coachGrid);
}

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
            <th>Result</th>
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
                  <td data-label="Result">${
                    match.result
                      ? `<span class="pill ${match.result.toLowerCase()}">${match.result}</span>`
                      : "\u2014"
                  }</td>
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
