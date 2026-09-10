HEADSHOTS — COACHING STAFF

COACH_HEADSHOTS is ON (script.js ~line 97). 9 of 11 coaches have a photo,
auto face-detected/cropped and resized to 800x800, same pipeline as the
player headshots (2026-09-10):

  Howard Chang         ->  howard-chang.jpg       (from 09.2026 folder)
  Morgan Landy         ->  morgan-landy.jpg       (from 09.2026 folder)
  Julian Graham        ->  julian-graham.jpg
  Mark C. Ingram       ->  mark-c-ingram.jpg
  Dacoda Worth         ->  dacoda-worth.jpg
  Arno Van Der Spek    ->  arno-van-der-spek.jpg  (source file was misspelled
                                                    "Anro" — assumed same
                                                    person, worth confirming)
  Jeffrey Ferrigno     ->  jeffrey-ferrigno.jpg   (supplied by Eduard 2026-09-10)
  Josh Brady           ->  josh-brady.jpg
  Craig Rowlings       ->  craig-rowlings.jpg
  Brian Ferrigno       ->  brian-ferrigno.jpg     [NEEDS PHOTO — none found]
  Kellie Yamane        ->  kellie-yamane.jpg      [NEEDS PHOTO — none supplied]  (role: Team Nurse)

Brian Ferrigno still has no photo — checked Coaches/, 09.2026/, 09.2026 2/,
and 09.2026 3/ on 2026-09-10, nothing turned up. Jeffrey Ferrigno's photo
was supplied directly by Eduard the same day.

Filename = slugify(name): lowercase, apostrophes stripped, everything else
non-alphanumeric becomes a hyphen. 400x400px+ JPG, one per person.

To add or change a coach: edit the `coaches` array in script.js (name,
role, one-line bio — bio is optional and left blank for everyone right
now since none were supplied) and drop a matching photo here. 11 coaches
on the roster now (added Kellie Yamane, Team Nurse, 2026-09-10 —
no photo supplied for her yet).
