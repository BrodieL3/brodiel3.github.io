HEADSHOTS — COACHING STAFF

COACH_HEADSHOTS is ON (script.js ~line 97). 8 of 9 coaches have a photo,
auto square-cropped and resized to 800x800, same pipeline as the player
headshots (2026-09-10):

  Howard Chang         ->  howard-chang.jpg       (from 09.2026 folder)
  Morgan Landy         ->  morgan-landy.jpg       (from 09.2026 folder)
  Julian Graham        ->  julian-graham.jpg
  Mark C. Ingram       ->  mark-c-ingram.jpg
  Dacoda Worth         ->  dacoda-worth.jpg
  Arno Van Der Spek    ->  arno-van-der-spek.jpg  (source file was misspelled
                                                    "Anro" — assumed same
                                                    person, worth confirming)
  Jeffrey Ferrigno     ->  jeffrey-ferrigno.jpg   [NEEDS PHOTO — none supplied]
  Josh Brady           ->  josh-brady.jpg
  Craig Rowlings       ->  craig-rowlings.jpg

Filename = slugify(name): lowercase, apostrophes stripped, everything else
non-alphanumeric becomes a hyphen. 400x400px+ JPG, one per person.

To add or change a coach: edit the `coaches` array in script.js (name,
role, one-line bio — bio is optional and left blank for everyone right
now since none were supplied) and drop a matching photo here. One slot
(10th) is still empty for a future addition.
