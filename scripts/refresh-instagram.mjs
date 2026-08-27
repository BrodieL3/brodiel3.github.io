#!/usr/bin/env node
/**
 * refresh-instagram.mjs
 *
 * Pulls the newest posts from the club's Instagram account, saves each post's
 * picture into assets/ig-1.jpg … ig-6.jpg, and rewrites the `instagramPosts`
 * block in script.js. Run by .github/workflows/refresh-instagram.yml on a
 * schedule; the workflow commits whatever changes.
 *
 * Needs one environment variable:
 *   IG_ACCESS_TOKEN — a long-lived Instagram token (see README-instagram.md)
 *
 * No npm dependencies: Node 18+ has fetch built in.
 */

import { writeFile, readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const COUNT = 6;

const TOKEN = process.env.IG_ACCESS_TOKEN;
if (!TOKEN) {
  console.error("IG_ACCESS_TOKEN is not set. Add it as a repository secret.");
  process.exit(1);
}

/* ---------- 1. ask Instagram for recent media ---------- */

const FIELDS = "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";
const endpoint =
  `https://graph.instagram.com/me/media?fields=${FIELDS}&limit=25&access_token=${TOKEN}`;

const res = await fetch(endpoint);
const body = await res.json().catch(() => ({}));

if (!res.ok || body.error) {
  const err = body.error ?? { message: `HTTP ${res.status}` };
  console.error(`Instagram API error: ${err.message}`);
  if (String(err.message).match(/session|expired|OAuth/i)) {
    console.error("The access token has most likely expired. Mint a new one and update the IG_ACCESS_TOKEN secret.");
  }
  process.exit(1);
}

/* ---------- 2. pick the newest N we can actually show ---------- */

const imageFor = (p) => (p.media_type === "VIDEO" ? p.thumbnail_url : p.media_url);

const posts = (body.data ?? [])
  .filter((p) => imageFor(p))
  .sort((a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp))
  .slice(0, COUNT);

if (posts.length < COUNT) {
  console.warn(`Only ${posts.length} usable posts came back; expected ${COUNT}.`);
}
if (!posts.length) {
  console.error("No posts returned — refusing to blank out the section.");
  process.exit(1);
}

/* ---------- 3. derive a short title and a readable date ---------- */

const titleFrom = (caption, fallback) => {
  if (!caption) return fallback;
  const firstLine = caption
    .split("\n")
    .map((l) => l.replace(/#[\w.]+/g, "").trim())        // drop hashtags
    .find((l) => l.length > 2);
  if (!firstLine) return fallback;
  const clean = firstLine
    .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/gu, "")  // drop emoji
    .replace(/\s+/g, " ")
    .trim();
  if (!clean) return fallback;
  return clean.length > 38 ? clean.slice(0, 37).trimEnd() + "…" : clean;
};

const prettyDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "long", day: "numeric", year: "numeric", timeZone: "UTC",
  });

const shortcode = (permalink) => {
  const m = permalink.match(/\/(?:p|reel|tv)\/([^/?]+)/);
  return m ? m[1] : null;
};

/* ---------- 4. download each picture into assets/ ---------- */

const entries = [];

for (const [i, post] of posts.entries()) {
  const n = i + 1;
  const file = `assets/ig-${n}.jpg`;
  const url = imageFor(post);

  const img = await fetch(url);
  if (!img.ok) {
    console.error(`Could not download image for ${post.permalink} (HTTP ${img.status}).`);
    process.exit(1);
  }
  const bytes = Buffer.from(await img.arrayBuffer());
  if (bytes.length < 1024) {
    console.error(`Image for ${post.permalink} came back suspiciously small — aborting.`);
    process.exit(1);
  }
  await writeFile(join(ROOT, file), bytes);

  entries.push({
    code: shortcode(post.permalink) ?? post.id,
    image: file,
    title: titleFrom(post.caption, "Georgetown Rugby"),
    date: prettyDate(post.timestamp),
    bytes: bytes.length,
  });

  console.log(`${file}  ${(bytes.length / 1024).toFixed(0)} KB  ${entries.at(-1).date}  ${entries.at(-1).title}`);
}

/* ---------- 5. rewrite the block in script.js ---------- */

const SCRIPT = join(ROOT, "script.js");
const source = await readFile(SCRIPT, "utf8");

const START = "/* IG:START — rewritten by scripts/refresh-instagram.mjs, do not edit by hand */";
const END = "/* IG:END */";

if (!source.includes(START) || !source.includes(END)) {
  console.error(`Could not find the ${START} / ${END} markers in script.js.`);
  process.exit(1);
}

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
const block = [
  START,
  "const instagramPosts = [",
  ...entries.map(
    (e) => `  { code: "${esc(e.code)}", image: "${e.image}", title: "${esc(e.title)}", date: "${e.date}" },`
  ),
  "];",
  END,
].join("\n");

const before = source.indexOf(START);
const after = source.indexOf(END) + END.length;
await writeFile(SCRIPT, source.slice(0, before) + block + source.slice(after));

console.log(`\nUpdated script.js with ${entries.length} posts.`);
