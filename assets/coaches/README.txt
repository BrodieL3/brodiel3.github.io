HEADSHOTS — COACHING STAFF

COACH_HEADSHOTS is ON (script.js ~line 97). 8 of 10 coaches have a photo,
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
  Jeffrey Ferrigno     ->  jeffrey-ferrigno.jpg   [NEEDS PHOTO — none found]
  Josh Brady           ->  josh-brady.jpg
  Craig Rowlings       ->  craig-rowlings.jpg
  Brian Ferrigno       ->  brian-ferrigno.jpg     [NEEDS PHOTO — none found]

Checked Coaches/, 09.2026/, 09.2026 2/, and 09.2026 3/ on 2026-09-10 for
Brian and Jeffrey/Jeff Ferrigno — no photo of either turned up anywhere.

Filename = slugify(name): lowercase, apostrophes stripped, everything else
non-alphanumeric becomes a hyphen. 400x400px+ JPG, one per person.

To add or change a coach: edit the `coaches` array in script.js (name,
role, one-line bio — bio is optional and left blank for everyone right
now since none were supplied) and drop a matching photo here. All 10
slots are now filled with names.
