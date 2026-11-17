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
  { name: "Dominic Wright", year: "Junior", position: "Tighthead Prop", hometown: "Columbiaville, MI / Lakeville Memorial High School", title: "Webmaster" },
  { name: "Finn Sippel", year: "Sophomore", position: "Center", hometown: "Hong Kong / German Swiss International School", title: "Vice President" },
  { name: "Patrick Mancini", year: "Sophomore", position: "Scrum-half / Winger", hometown: "Darien, CT / Fairfield College Preparatory School", title: "Recruitment Chair" },
  { name: "Elias Abourjaili", year: "Freshman", position: "Center / Fullback", hometown: "Danvers, MA / Malden Catholic High School" },
  { name: "Dante Agostini", year: "Freshman", position: "Flyhalf", hometown: "Lidingö, SWE / The Kinkaid School" },
  { name: "Maximus Anigacz", year: "Junior", position: "Hooker", hometown: "New York, NY / Xavier High School" },
  { name: "Ethan Brady", year: "Junior", position: "Lock", hometown: "Miami, FL / American Heritage High School" },
  { name: "Nicholas Bruno", year: "Freshman", position: "Winger", hometown: "Washington, DC / Landon School" },
  { name: "Jack Daly", year: "Senior", position: "Backrow", hometown: "Wayland, MA / St. Sebastian's School" },
  { name: "George Egan", year: "Senior", position: "Backrow", hometown: "Omaha, NE / Creighton Preparatory School" },
  { name: "Kevin Emerson", year: "Junior", position: "Winger", hometown: "Bethesda, MD / Georgetown Prep" },
  { name: "Gabriel Fenton", year: "Senior", position: "Winger", hometown: "Winter Park, FL / Winter Park High School" },
  { name: "James Foundos", year: "Sophomore", position: "Prop / Backrow", hometown: "San Diego, CA / Francis Parker High School" },
  { name: "Eduard Giurca", year: "Sophomore", position: "Backrow", hometown: "Dublin, Ireland / Clongowes Wood College SJ" },
  { name: "Will Hartford", year: "Junior", position: "Winger", hometown: "Milton, MA / Boston College High School" },
  { name: "Walker Humphries", year: "Sophomore", position: "Winger", hometown: "London, UK / Wellington College" },
  { name: "Jay Kapoor", year: "Freshman", position: "Flanker / Prop", hometown: "Bethesda, MD / Landon School" },
  { name: "Logan Luo", year: "Freshman", position: "Winger", hometown: "Xiamen, China / Westtown School" },
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
  { name: "Charlie Tomasso", year: "Freshman", position: "Winger / Fullback", hometown: "Bethesda, MD / Georgetown Prep" },
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
  { name: "Kellie Yamane", role: "Team Trainer", bio: "" },
];

/* ---------------------------------------------------------
   2. MATCHES  —  PLACEHOLDER DATA. Replace with real fixtures.
   `status` must be "Upcoming", "Final", or "Canceled" so the
   coloured pill picks the right style.
   --------------------------------------------------------- */
const matchData = {
  /* Each format holds a list of seasons, newest first. The first season
     opens by default; older ones appear in the "Season" dropdown. */
  fifteens: {
    label: "15s",
    seasons: [
      {
        season: "Fall 2027",
        title: "15s fixtures",
        summary:
          "Fifteen-a-side rugby returns in the fall, in Division II National Collegiate Rugby and the Mid-Atlantic Rugby Conference.",
        next: null,
        matches: [],
        emptyMessage:
          "The fall 15s schedule has not been released yet. Follow @gurfc for the announcement.",
      },
      {
        season: "Fall 2026",
        title: "15s fixtures",
        summary:
          "Season complete. A five-match fall slate in Division II National Collegiate Rugby and a run to the MARC semifinals, finishing 4–3.",
        next: null,
        matches: [
          { date: "Fri, Sep. 11, 2026", opponent: "Catholic University", side: "Away", venue: "Cardinal Stadium", kickoff: "7:00 PM", result: "Loss", score: "7–49" },
          { date: "Sat, Sep. 19, 2026", opponent: "Frostburg University", side: "Away", venue: "FSU Rugby Field", kickoff: "1:00 PM", result: "Win", score: "55–5" },
          { date: "Sat, Sep. 26, 2026", opponent: "University of Maryland, Baltimore County", side: "Home", venue: "Cooper Field", kickoff: "6:30 PM", result: "Win", score: "33–5" },
          { date: "Fri, Oct. 2, 2026", opponent: "Loyola University Maryland", side: "Home", venue: "Cooper Field", kickoff: "7:00 PM", result: "Loss", score: "15–17" },
          { date: "Sat, Oct. 17, 2026", opponent: "Towson University", side: "Away", venue: "Mount Saint Joseph HS", kickoff: "11:00 AM", result: "Win", score: "38–17" },
          { date: "Sat, Oct. 24, 2026", opponent: "Bucknell University (MARC Quarterfinal)", side: "Away", venue: "Bucknell Rugby Field", kickoff: "3:30 PM", result: "Win", score: "34–26" },
          { date: "Sat, Oct. 31, 2026", opponent: "Villanova University (MARC Semifinal)", side: "Neutral", venue: "Dundalk, MD", kickoff: "12:30 PM", result: "Loss", score: "15–60" },
        ],
      },
    ],
  },

  /* 7s seasons list tournaments instead of matches. Each tournament is
     its own box; add games to `games` once the draw is out:
       { stage: "Group stage", opponent: "...", kickoff: "9:20 AM", pitch: "Pitch 2", result: "Win", score: "24–5" }
     Set `finish` (e.g. "Round of 16") once the tournament is over. */
  sevens: {
    label: "7s",
    seasons: [
      {
        season: "2026–27 Season",
        title: "7s tournaments",
        summary:
          "Seven-a-side tournament season. More tournaments will be added as they are confirmed.",
        tournaments: [
          { name: "Christmas 7s", date: "Sat, Dec. 5, 2026", location: "Richmond, VA", venue: "", finish: "", games: [] },
        ],
        emptyMessage:
          "The 7s schedule has not been released yet. Follow @gurfc for the announcement.",
      },
    ],
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
/* ---------------------------------------------------------
   SHOP — products are pulled live from the club's World Rugby Shop
   collection on every page load. The store itself can't be embedded
   (it blocks framing), so each card links out to the product page.
   SHOP_FEATURED: product handles to show first, in order (the part of
   the product URL after /products/). If any sell out or disappear, the
   grid tops up with other in-stock products up to SHOP_MAX_ITEMS.
   --------------------------------------------------------- */
const SHOP_STORE = "https://www.worldrugbyshop.com";
const SHOP_COLLECTION = "georgetown-university-rugby-football-club";
const SHOP_MAX_ITEMS = 8;
const SHOP_FEATURED = [
  "georgetown-university-rfc-adult-low-profile-cotton-twill-dad-cap",
  "georgetown-university-rfc-advantage-rugby-shorts-by-canterbury",
  "georgetown-university-rfc-club-1-4-zip-mid-layer-training-top-by-canterbury",
  "georgetown-university-rfc-club-crew-sweatshirt-by-canterbury",
  "georgetown-university-rfc-club-dry-polo-by-canterbury",
  "georgetown-university-rfc-club-dry-tee-by-canterbury",
  "georgetown-university-rfc-club-hoodie-by-canterbury",
  "georgetown-university-rfc-club-lightweight-hoodie-by-canterbury",
];

/* IG:START — rewritten by scripts/refresh-instagram.mjs, do not edit by hand */
const instagramPosts = [
  { code: "DfycZ54iajS", image: "assets/ig-1.jpg", date: "November 16, 2026", caption: "We’re halfway through Movember!" },
  { code: "DfQZN4JCU0E", image: "assets/ig-2.jpg", date: "November 2, 2026", caption: "MO MO MO! That time of the year again… GURFC is proud to participate in this year’s addition of…" },
  { code: "DfKTcYuxUB3", image: "assets/ig-3.jpg", date: "October 31, 2026", caption: "Semifinal vs Villanova at 12:30 p.m." },
  { code: "DfFHpgSz3Ge", image: "assets/ig-4.jpg", date: "October 29, 2026", caption: "One step closer to the finals." },
  { code: "De-XH_1iBYz", image: "assets/ig-5.jpg", date: "October 26, 2026", caption: "This week’s player spotlight features freshman Jackson Snyder, who has already made a big impact…" },
  { code: "De5VdyUkTYu", image: "assets/ig-6.jpg", date: "October 24, 2026", caption: "We get it done on the road against Bucknell and advance to the semifinals!" },
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

function resultMarkup(match) {
  if (!match.result) return `<span class="result result-pending">—</span>`;
  const key = match.result.toLowerCase();
  const letter = { win: "W", loss: "L", draw: "D" }[key] || match.result;
  return `<span class="result result-${key}" title="${match.result}">
    <span class="result-badge">${letter}</span>${
      match.score ? `<span class="result-score">${match.score}</span>` : ""
    }</span>`;
}

/* Selected season per format (index into `seasons`, 0 = current). */
const seasonState = { fifteens: 0, sevens: 0 };

function seasonPicker(key) {
  const seasons = matchData[key].seasons;
  if (seasons.length < 2) return "";
  const options = seasons
    .map(
      (s, i) =>
        `<option value="${i}"${i === seasonState[key] ? " selected" : ""}>${s.season}${i === 0 ? " (current)" : ""}</option>`
    )
    .join("");
  return `
    <label class="season-picker">
      <span>Season</span>
      <select data-season-select="${key}" aria-label="Choose ${matchData[key].label} season">${options}</select>
    </label>`;
}

function emptyMarkup(season) {
  return `
    <div class="schedule-empty">
      <span class="pill upcoming">To Be Announced</span>
      <p>${season.emptyMessage}</p>
    </div>`;
}

function tournamentMarkup(t) {
  const games = t.games || [];
  const status = t.finish
    ? `<span class="pill final">${t.finish}</span>`
    : games.some((g) => g.result)
    ? `<span class="pill upcoming">In Progress</span>`
    : `<span class="pill upcoming">Upcoming</span>`;
  const where = [t.venue, t.location].filter(Boolean).join(" · ");

  const body = games.length
    ? `
      <table>
        <thead>
          <tr><th>Stage</th><th>Opponent</th><th>Kickoff</th><th>Pitch</th><th>Result</th></tr>
        </thead>
        <tbody>
          ${games
            .map(
              (g) => `
            <tr>
              <td data-label="Stage"><span class="stage">${g.stage}</span></td>
              <td data-label="Opponent">${g.opponent || "TBD"}</td>
              <td data-label="Kickoff">${g.kickoff || "TBD"}</td>
              <td data-label="Pitch">${g.pitch || "—"}</td>
              <td data-label="Result">${resultMarkup(g)}</td>
            </tr>`
            )
            .join("")}
        </tbody>
      </table>`
    : `<p class="tourney-tba">Draw and kickoff times TBA.</p>`;

  return `
    <article class="tourney">
      <header class="tourney-head">
        <div>
          <span class="label">${t.date}</span>
          <h3>${t.name}</h3>
          ${where ? `<p>${where}</p>` : ""}
        </div>
        <div class="tourney-status">
          ${status}
        </div>
      </header>
      ${body}
    </article>`;
}

function matchMarkup(key) {
  const season = matchData[key].seasons[seasonState[key]];
  const summary = `
    <div class="format-summary">
      <div>
        <span class="label">${season.season}</span>
        <h3>${season.title}</h3>
        <p>${season.summary}</p>
      </div>
      ${seasonPicker(key)}
    </div>`;

  if (season.tournaments) {
    if (!season.tournaments.length) return summary + emptyMarkup(season);
    return `${summary}<div class="tourney-list">${season.tournaments.map(tournamentMarkup).join("")}</div>`;
  }

  if (!season.matches.length) return summary + emptyMarkup(season);

  const next = season.next
    ? `
      <div class="next-match">
        <div>
          <span class="pill upcoming">${season.next.status}</span>
          <h3>${season.next.matchup}</h3>
          <p>${season.next.detail}</p>
        </div>
        <span class="pill side ${season.next.side.toLowerCase()}">${season.next.side}</span>
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
            <th>Kickoff</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          ${season.matches
            .map(
              (match) => `
                <tr>
                  <td data-label="Date">${match.date}</td>
                  <td data-label="Opponent">${match.opponent}</td>
                  <td data-label="Home / Away"><span class="pill side ${match.side.toLowerCase()}">${match.side}</span></td>
                  <td data-label="Venue">${match.venue}</td>
                  <td data-label="Kickoff">${match.kickoff || "TBD"}</td>
                  <td data-label="Result">${resultMarkup(match)}</td>
                </tr>`
            )
            .join("")}
        </tbody>
      </table>
    </div>`;
}

let activeFormat = "sevens";

function renderMatchFormat(key, animate = false) {
  activeFormat = key;
  formatPanel.setAttribute("aria-labelledby", key === "fifteens" ? "tab-15s" : "tab-7s");

  const paint = () => {
    formatPanel.innerHTML = matchMarkup(key);
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

formatPanel.addEventListener("change", (event) => {
  const select = event.target.closest("[data-season-select]");
  if (!select) return;
  seasonState[select.dataset.seasonSelect] = Number(select.value);
  renderMatchFormat(select.dataset.seasonSelect, true);
});

renderMatchFormat("sevens");

/* =========================================================
   Shop — live product strip. If the request fails for any reason the
   section stays as the plain banner (the strip is hidden by default).
   ========================================================= */

const shopWrap = document.querySelector("[data-shop]");
const shopGrid = document.querySelector("[data-shop-grid]");

const shopTitle = (title) =>
  title
    .replace(/^Georgetown University (RFC|Rugby Football Club)\s*/i, "")
    .replace(/\s+by Canterbury$/i, "")
    .trim();

const shopPrice = (product) => {
  const prices = product.variants.map((v) => parseFloat(v.price)).filter((n) => !isNaN(n));
  if (!prices.length) return "";
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return `${min === max ? "" : "From "}$${min.toFixed(2)}`;
};

const shopImage = (product) => {
  const src = product.images && product.images[0] && product.images[0].src;
  if (!src) return "";
  return src + (src.includes("?") ? "&" : "?") + "width=600";
};

async function renderShop() {
  if (!shopWrap || !shopGrid) return;
  try {
    const res = await fetch(`${SHOP_STORE}/collections/${SHOP_COLLECTION}/products.json?limit=250`);
    if (!res.ok) return;
    const { products } = await res.json();
    let items = (products || []).filter((p) => p.variants.some((v) => v.available) && shopImage(p));
    const featured = SHOP_FEATURED.map((h) => items.find((p) => p.handle === h)).filter(Boolean);
    items = [...featured, ...items.filter((p) => !featured.includes(p))];
    items = items.slice(0, SHOP_MAX_ITEMS);
    if (!items.length) return;

    shopGrid.innerHTML = items
      .map(
        (p) => `
        <a class="shop-card" href="${SHOP_STORE}/products/${encodeURIComponent(p.handle)}" target="_blank" rel="noopener">
          <span class="shop-media">
            <img src="${escapeHtml(shopImage(p))}" alt="${escapeHtml(shopTitle(p.title))}" loading="lazy" decoding="async" />
          </span>
          <span class="shop-meta">
            <span class="shop-name">${escapeHtml(shopTitle(p.title))}</span>
            <span class="shop-price">${shopPrice(p)}</span>
          </span>
        </a>`
      )
      .join("");
    shopWrap.hidden = false;
  } catch (err) {
    /* store unreachable — leave the banner on its own */
  }
}

renderShop();

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

  // Safety net: some mobile browsers (notably iOS Safari during momentum
  // scrolling) can miss firing the IntersectionObserver callback for a
  // target that's already sitting in the viewport, leaving it stuck at
  // opacity 0 until some unrelated event (like the keyboard opening,
  // which resizes the viewport) forces a recheck. Manually re-verify any
  // not-yet-revealed target against the viewport a few times after load
  // and on resize/orientation change, so nothing is ever permanently
  // invisible.
  const revealIfInView = () => {
    let allDone = true;
    revealTargets.forEach((el) => {
      if (el.classList.contains("is-visible")) return;
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < viewportHeight * 0.92 && rect.bottom > 0) {
        el.classList.add("is-visible");
        observer.unobserve(el);
      } else {
        allDone = false;
      }
    });
    return allDone;
  };

  [300, 900, 1800].forEach((delay) => setTimeout(revealIfInView, delay));
  window.addEventListener("load", revealIfInView);
  window.addEventListener("resize", revealIfInView, { passive: true });
  window.addEventListener("orientationchange", revealIfInView);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") revealIfInView();
  });
}
