JOB MASTER Advanced – public site
=================================

HOW TO PREVIEW
  Open the "jobmaster" folder and double-click index.html.

WHAT'S IN THE FOLDER
  index.html     Home page (with the loading screen)
  docs.html      Documentation
  terms.html     Terms of Service
  privacy.html   Privacy Policy
  login.html     Placeholder – the real login comes next
  apply.html     Placeholder – the real application form comes next
  style.css      All the colours, fonts and layout for every page
  main.js        Loading screen + fade-in effects
  assets/        All images and logos (keep this folder named "assets")

IMPORTANT FOR UPLOADING
  Upload the files that are INSIDE the "jobmaster" folder (index.html, style.css, ...),
  not the "jobmaster" folder itself. index.html must sit at the top level.

HOW THE LOADING SCREEN WORKS
  1. When index.html opens, a full-screen loader covers the page.
     It shows your logo, the hatch animation (adapted from LDRS / uiball.com/ldrs),
     the word LOADING and a rotating note.
  2. The browser keeps loading the page behind it.
  3. When everything has loaded, the loader waits until it has been on screen for at
     least 1.8 seconds (so it never just flashes), then fades out.
  4. If something is very slow, it gives up waiting after 7 seconds and shows the page.
  5. On a fast connection (or when opened from your own computer) you will only see it
     for about 2 seconds. That is normal.

  To change it, open main.js. At the top you will find:
     NOTES    the list of notes that rotate (edit, add or remove lines)
     MIN_MS   the shortest time the loader stays up   (1800 = 1.8 seconds)
     MAX_MS   the longest it will wait                (7000 = 7 seconds)
     NOTE_MS  how long each note stays                (2600 = 2.6 seconds)
  The look of the loader (colours, size, speed) is in style.css, under
  "LOADING SCREEN" (search for .hatch).

COLOURS
  Black, white, navy and bottle green. They are defined once at the top of style.css.
