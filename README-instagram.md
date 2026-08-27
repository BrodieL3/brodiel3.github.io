# Keeping the Instagram section current

The six cards in the **Straight from @gurfc** section are local images that link
out to the real posts. A scheduled GitHub Action refreshes them so you never
have to touch them by hand.

## How it works

`.github/workflows/refresh-instagram.yml` runs `scripts/refresh-instagram.mjs`
once a day. That script:

1. asks Instagram for the account's recent media,
2. takes the six newest, downloads each picture to `assets/ig-1.jpg` … `ig-6.jpg`,
3. rewrites the `instagramPosts` block in `script.js` between the `IG:START` /
   `IG:END` markers,
4. commits and pushes — but only if something actually changed.

Because the images end up committed in the repo, the site stays fully static.
Nothing on the page calls Instagram at render time, so nothing can go blank for
a visitor, and the section still works with no network at all.

## One-time setup

1. **Switch @gurfc to a Business or Creator account.** Free and reversible, in
   the Instagram app under Settings → Account type. The API will not return
   media for a plain personal account.
2. **Create a Meta app** at <https://developers.facebook.com/apps> and add the
   *Instagram* product, using **Instagram API with Instagram Login**. (The old
   *Basic Display API* that most tutorials describe was shut down in December
   2024 — don't follow those.)
3. **Generate a long-lived access token** with the `instagram_business_basic`
   scope for the @gurfc account.
4. **Add it to the repo** under Settings → Secrets and variables → Actions →
   New repository secret, named exactly `IG_ACCESS_TOKEN`.
5. Run the workflow once by hand from the **Actions** tab to confirm it works.

## The token expires — this is the one bit of upkeep

Long-lived Instagram tokens last **60 days**. When one expires the workflow
fails loudly (check the Actions tab) and the site keeps showing the last set of
images it committed — it degrades quietly rather than breaking.

Set a calendar reminder for roughly every 50 days to mint a fresh token and
update the `IG_ACCESS_TOKEN` secret. That is the entire maintenance burden.

If you'd rather automate even that, a token can be exchanged for a new one via
`GET https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=…`
and written back with `gh secret set`, but that needs a personal access token
with admin rights on the repo — more moving parts than a twice-a-quarter
reminder is worth for a club site.

## Doing it by hand instead

Nothing here is load-bearing. To update the section manually, save a post's
picture as `assets/ig-N.jpg` and edit the `instagramPosts` array in `script.js`
directly. The array is the single source of truth either way.
