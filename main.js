// JOB MASTER Advanced – public page

/* ---------- 1. Loading screen ----------
   Shows the hatch loader + a rotating note, then fades out once the
   page has finished loading (but never faster than MIN_MS, so the
   screen doesn't just flash). Add / edit notes in the NOTES list. */
(function () {
  var loader = document.getElementById('loader');
  if (!loader) return;

  var NOTES = [
    'Your <b>BOSS</b> creates your username and password. Keep them safe.',
    '<b>100 CRIPPLES</b> = <b>1 CRUMP</b>. Know your money.',
    'Premium packages add <b>bonus CRUMPS</b> to every salary you earn.',
    'Higher titles mean higher earnings. Put in the effort!',
    'Paying by card? Scan the QR code, then enter your PIN.'
  ];
  var MIN_MS = 1800;   // shortest time the loader stays up
  var MAX_MS = 7000;   // give up waiting after this, show the page anyway
  var NOTE_MS = 2600;  // how long each note stays

  var noteEl = document.getElementById('loaderNote');
  var started = Date.now();
  var idx = 0;
  var timer = null;
  var finished = false;

  document.documentElement.classList.add('is-loading');

  function showNote() {
    if (!noteEl || finished) return;
    noteEl.classList.add('swap');
    setTimeout(function () {
      noteEl.innerHTML = NOTES[idx % NOTES.length];
      noteEl.classList.remove('swap');
      idx++;
    }, 350);
  }
  // first note straight away, then rotate
  noteEl.innerHTML = NOTES[0]; idx = 1;
  timer = setInterval(showNote, NOTE_MS);

  function finish() {
    if (finished) return;
    finished = true;
    clearInterval(timer);
    loader.classList.add('done');
    document.documentElement.classList.remove('is-loading');
    setTimeout(function () { loader.parentNode && loader.parentNode.removeChild(loader); }, 800);
  }
  function whenReady() {
    var wait = Math.max(0, MIN_MS - (Date.now() - started));
    setTimeout(finish, wait);
  }

  if (document.readyState === 'complete') whenReady();
  else window.addEventListener('load', whenReady);
  setTimeout(finish, MAX_MS); // safety net
})();

/* ---------- 2. Fade sections in as they scroll into view ---------- */
(function () {
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });
})();
