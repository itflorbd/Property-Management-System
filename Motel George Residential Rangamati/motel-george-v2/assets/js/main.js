/* Motel George Residential — v2 interactions */
(function () {
  'use strict';

  const WA = '8801795342854';
  const PHONE = '+8801719321106';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const waLink = (msg) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  let lang = 'bn';
  try { lang = localStorage.getItem('mg_lang') || 'bn'; } catch (e) { /* storage blocked */ }
  const isEn = () => lang === 'en';
  const t = (bn, en) => (isEn() ? en : bn);
  const BN_DIGITS = '০১২৩৪৫৬৭৮৯';
  const num = (n) => {
    const s = Math.round(n).toLocaleString('en-IN');
    return isEn() ? s : s.replace(/\d/g, (d) => BN_DIGITS[d]);
  };
  const taka = (n) => '৳ ' + num(n);

  /* ---------- Data ---------- */
  const ROOMS = [
    { id: 'deluxe', price: 2200, img: 'assets/img/room-lakeview.jpg', pos: '70% 50%',
      name: ['ডিলাক্স লেক ভিউ', 'Deluxe Lake View'], tag: ['সবচেয়ে জনপ্রিয়', 'Most loved'],
      meta: ['এসি · ১ কিং বেড · ২ জন', 'AC · 1 king bed · 2 guests'],
      specs: [['লেক ভিউ ব্যালকনি', 'এসি', 'গিজার', 'ওয়াই-ফাই'], ['Lake balcony', 'AC', 'Geyser', 'Wi-Fi']] },
    { id: 'family', price: 3200, img: 'assets/img/room-family.jpg', pos: '50% 50%',
      name: ['ফ্যামিলি স্যুট', 'Family Suite'], tag: ['পরিবারের জন্য', 'For families'],
      meta: ['এসি · ২ কুইন বেড · ৪-৫ জন', 'AC · 2 queen beds · 4-5 guests'],
      specs: [['পাহাড় ভিউ ব্যালকনি', 'এসি', 'গিজার', 'টিভি ও লাউঞ্জ'], ['Hill balcony', 'AC', 'Geyser', 'TV & lounge']] },
    { id: 'standard', price: 1800, img: 'assets/img/room-lakeview.jpg', pos: '20% 50%',
      name: ['স্ট্যান্ডার্ড ডাবল', 'Standard Double'], tag: ['কাপলদের জন্য', 'For couples'],
      meta: ['এসি · ১ ডাবল বেড · ২ জন', 'AC · 1 double bed · 2 guests'],
      specs: [['এসি', 'ওয়াই-ফাই', 'পরিষ্কার চাদর'], ['AC', 'Wi-Fi', 'Fresh linen']] },
    { id: 'twin', price: 1900, img: 'assets/img/room-family.jpg', pos: '30% 50%',
      name: ['কমফোর্ট টুইন', 'Comfort Twin'], tag: ['বন্ধুদের জন্য', 'For friends'],
      meta: ['এসি · ২ সিঙ্গেল বেড · ২ জন', 'AC · 2 single beds · 2 guests'],
      specs: [['এসি', 'গরম পানি', 'ট্যুর সহায়তা'], ['AC', 'Hot water', 'Tour help']] },
    { id: 'economy', price: 1000, img: 'assets/img/room-lakeview.jpg', pos: '45% 50%',
      name: ['ইকোনমি নন-এসি', 'Economy Non-AC'], tag: ['বাজেট', 'Budget'],
      meta: ['ফ্যান · ১ ডাবল বেড · ২ জন', 'Fan · 1 double bed · 2 guests'],
      specs: [['ফ্যান', 'এটাচড বাথ', 'নিরাপদ'], ['Fan', 'Attached bath', 'Safe']] }
  ];

  const BOATS = [
    { price: 0, name: ['লাগবে না', 'No boat'] },
    { price: 2000, name: ['ইঞ্জিন বোট', 'Engine boat'] },
    { price: 3500, name: ['শুভলং রিজার্ভ', 'Shuvolong'] },
    { price: 6000, name: ['স্পিডবোট', 'Speedboat'] }
  ];

  const REELS = [
    { views: '155K', img: 'assets/img/kaptai-boat.jpg', url: 'https://www.facebook.com/reel/2528128467590746/',
      title: ['কাপ্তাই হ্রদে সানসেট ও শুভলংয়ের পথে', 'Kaptai sunset on the way to Shuvolong'] },
    { views: '104K', img: 'assets/img/dining-food.jpg', url: 'https://www.facebook.com/reel/1841170690634826/',
      title: ['তাজা কাপ্তাই মাছ ও বাঁশ মুরগি', 'Fresh Kaptai fish & bamboo chicken'] },
    { views: '71K', img: 'assets/img/hanging-bridge.jpg', url: 'https://www.facebook.com/reel/2476338396229299/',
      title: ['ঝুলন্ত সেতু ও লেকের চারপাশ', 'The hanging bridge & the lake'] },
    { views: '55K', img: 'assets/img/room-lakeview.jpg', url: 'https://www.facebook.com/reel/1760437931854655/',
      title: ['ডিলাক্স রুম থেকে সূর্যাস্ত', 'Sunset from the deluxe room'] },
    { views: '46K', img: 'assets/img/hero-rangamati.jpg', url: 'https://www.facebook.com/reel/1085917611110343/',
      title: ['নভেম্বরের রাঙ্গামাটি', 'Rangamati in November'] }
  ];

  /* ---------- Steppers (shared) ---------- */
  function initStep(el, onChange) {
    const out = el.querySelector('output');
    const min = Number(el.dataset.min || 1), max = Number(el.dataset.max || 99);
    const btns = el.querySelectorAll('button');
    const sync = () => {
      const v = Number(out.dataset.v || out.textContent);
      btns[0].disabled = v <= min; btns[1].disabled = v >= max;
    };
    out.dataset.v = out.textContent;
    btns.forEach((b) => b.addEventListener('click', () => {
      const v = Math.min(max, Math.max(min, Number(out.dataset.v) + Number(b.dataset.d)));
      out.dataset.v = v; out.textContent = num(v); sync(); onChange && onChange(v);
    }));
    sync();
    return { get: () => Number(out.dataset.v), refresh: () => { out.textContent = num(Number(out.dataset.v)); } };
  }

  /* ---------- Booking bar ---------- */
  const bIn = $('#bIn'), bOut = $('#bOut'), bRoom = $('#bRoom'), bNights = $('#bNights');
  const iso = (d) => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  const today = new Date();
  const tomorrow = new Date(today.getTime() + 864e5);
  bIn.value = iso(today); bIn.min = iso(today);
  bOut.value = iso(tomorrow); bOut.min = iso(tomorrow);
  const nightsBetween = () => Math.max(1, Math.round((new Date(bOut.value) - new Date(bIn.value)) / 864e5) || 1);
  function syncDates() {
    const inD = new Date(bIn.value || iso(today));
    const minOut = iso(new Date(inD.getTime() + 864e5));
    bOut.min = minOut;
    if (!bOut.value || bOut.value < minOut) bOut.value = minOut;
    bNights.textContent = t(num(nightsBetween()) + ' রাত', nightsBetween() + (nightsBetween() > 1 ? ' nights' : ' night'));
  }
  bIn.addEventListener('change', syncDates);
  bOut.addEventListener('change', syncDates);

  function renderRoomOptions() {
    const keep = bRoom.value;
    bRoom.innerHTML = ROOMS.map((r) => `<option value="${r.id}">${esc(r.name[isEn() ? 1 : 0])} · ${taka(r.price)}</option>`).join('');
    if (keep) bRoom.value = keep;
  }

  const guests = initStep($('#bookForm .step'), (v) => {
    // Gently suggest the family suite for larger groups
    if (v >= 3 && bRoom.value !== 'family') bRoom.value = 'family';
  });

  $('#bookForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const room = ROOMS.find((r) => r.id === bRoom.value) || ROOMS[0];
    const n = nightsBetween();
    const msg = t(
      `আসসালামু আলাইকুম Motel George,\nরুম খালি আছে কি?\n• চেক-ইন: ${bIn.value}\n• চেক-আউট: ${bOut.value} (${n} রাত)\n• অতিথি: ${guests.get()} জন\n• রুম: ${room.name[0]}`,
      `Hello Motel George,\nIs a room available?\n• Check-in: ${bIn.value}\n• Check-out: ${bOut.value} (${n} night${n > 1 ? 's' : ''})\n• Guests: ${guests.get()}\n• Room: ${room.name[1]}`
    );
    window.open(waLink(msg), '_blank', 'noopener');
  });

  /* ---------- Rooms picker ---------- */
  const roomList = $('#roomList');
  const stageImg = $('#stageImg');
  let activeRoom = 'deluxe';

  function setStage(room, animate) {
    const i = isEn() ? 1 : 0;
    $('#stageTag').textContent = room.tag[i];
    $('#stagePrice').textContent = taka(room.price);
    const apply = () => { stageImg.src = room.img; stageImg.style.objectPosition = room.pos; stageImg.alt = room.name[i]; stageImg.classList.remove('swap'); };
    if (!animate) return apply();
    stageImg.classList.add('swap');
    setTimeout(apply, 260);
  }

  function renderRooms() {
    const i = isEn() ? 1 : 0;
    roomList.innerHTML = ROOMS.map((r) => `
      <div class="room" role="radio" aria-checked="${r.id === activeRoom}" data-id="${r.id}">
        <button type="button" class="room-btn">
          <span><b>${esc(r.name[i])}</b><small>${esc(r.meta[i])}</small></span>
          <i>${taka(r.price)}<small>${t(' /রাত', ' /night')}</small></i>
        </button>
        <div class="room-more"><div>
          <ul class="specs">${r.specs[i].map((s) => `<li><svg><use href="#i-check"/></svg>${esc(s)}</li>`).join('')}</ul>
          <div class="room-acts">
            <a class="btn btn-clay" target="_blank" rel="noopener" href="${waLink(t('আসসালামু আলাইকুম, আমি এই রুমটি বুক করতে চাই: ', 'Hello, I would like to book: ') + r.name[i] + ' (' + taka(r.price) + ')')}"><svg><use href="#i-wa"/></svg>${t('বুক করুন', 'Book')}</a>
            <a class="btn btn-ghost" href="tel:${PHONE}"><svg><use href="#i-phone"/></svg>${t('কল', 'Call')}</a>
          </div>
        </div></div>
      </div>`).join('');
    setStage(ROOMS.find((r) => r.id === activeRoom), false);
  }

  roomList.addEventListener('click', (e) => {
    const btn = e.target.closest('.room-btn');
    if (!btn) return;
    const id = btn.parentElement.dataset.id;
    if (id === activeRoom) return;
    activeRoom = id;
    $$('.room', roomList).forEach((r) => r.setAttribute('aria-checked', String(r.dataset.id === id)));
    setStage(ROOMS.find((r) => r.id === id), true);
  });

  /* ---------- Cost planner ---------- */
  let cRoomIdx = 0, cBoatIdx = 0;
  const cRoomEl = $('#cRoom'), cBoatEl = $('#cBoat');
  const nights = initStep($('#cNights'), updateTotal);
  const rooms = initStep($('#cRooms'), updateTotal);

  function renderChips() {
    const i = isEn() ? 1 : 0;
    cRoomEl.innerHTML = ROOMS.map((r, n) => `<button type="button" role="radio" aria-checked="${n === cRoomIdx}" data-n="${n}">${esc(r.name[i])}</button>`).join('');
    cBoatEl.innerHTML = BOATS.map((b, n) => `<button type="button" role="radio" aria-checked="${n === cBoatIdx}" data-n="${n}">${esc(b.name[i])}${b.price ? `<i>${taka(b.price)}</i>` : ''}</button>`).join('');
  }
  cRoomEl.addEventListener('click', (e) => { const b = e.target.closest('button'); if (!b) return; cRoomIdx = Number(b.dataset.n); $$('button', cRoomEl).forEach((x) => x.setAttribute('aria-checked', String(x === b))); updateTotal(); });
  cBoatEl.addEventListener('click', (e) => { const b = e.target.closest('button'); if (!b) return; cBoatIdx = Number(b.dataset.n); $$('button', cBoatEl).forEach((x) => x.setAttribute('aria-checked', String(x === b))); updateTotal(); });

  let shown = 0, raf = 0;
  function updateTotal() {
    const room = ROOMS[cRoomIdx], boat = BOATS[cBoatIdx];
    const n = nights.get(), r = rooms.get();
    const total = room.price * n * r + boat.price;
    const i = isEn() ? 1 : 0;
    $('#cBreak').textContent = t(
      `${taka(room.price)} × ${num(n)} রাত × ${num(r)} রুম` + (boat.price ? ` + বোট ${taka(boat.price)}` : ''),
      `${taka(room.price)} × ${n} night${n > 1 ? 's' : ''} × ${r} room${r > 1 ? 's' : ''}` + (boat.price ? ` + boat ${taka(boat.price)}` : '')
    );
    $('#cBook').href = waLink(t(
      `আসসালামু আলাইকুম Motel George,\nএই প্ল্যানে বুক করতে চাই:\n• রুম: ${room.name[0]} × ${r}\n• ${n} রাত\n• বোট: ${boat.name[0]}\n• আনুমানিক মোট: ${taka(total)}`,
      `Hello Motel George,\nI would like to book:\n• Room: ${room.name[1]} × ${r}\n• ${n} night(s)\n• Boat: ${boat.name[1]}\n• Estimated total: ${taka(total)}`
    ));
    // Animate the number
    cancelAnimationFrame(raf);
    const from = shown, t0 = performance.now();
    const el = $('#cTotal');
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / 500);
      shown = from + (total - from) * (1 - Math.pow(1 - p, 3));
      el.textContent = taka(shown);
      if (p < 1) raf = requestAnimationFrame(tick); else shown = total;
    };
    raf = requestAnimationFrame(tick);
    void i;
  }

  /* ---------- Reels ---------- */
  const reelRail = $('#reelRail');
  const player = $('#player'), frame = $('#playerFrame');
  function renderReels() {
    const i = isEn() ? 1 : 0;
    reelRail.innerHTML = REELS.map((r, n) => `
      <button type="button" class="reel" data-i="${n}" aria-label="${esc(r.title[i])}">
        <img src="${r.img}" alt="" loading="lazy">
        <span class="reel-views"><svg><use href="#i-play"/></svg>${r.views}</span>
        <span class="reel-play"><svg><use href="#i-play"/></svg></span>
        <span class="reel-body"><p>${esc(r.title[i])}</p></span>
      </button>`).join('');
  }
  reelRail.addEventListener('click', (e) => {
    const card = e.target.closest('.reel');
    if (!card) return;
    const r = REELS[card.dataset.i];
    $('#playerFb').href = r.url;
    frame.src = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(r.url)}&show_text=false&width=400&height=711&autoplay=true`;
    if (typeof player.showModal === 'function') player.showModal(); else window.open(r.url, '_blank', 'noopener');
  });
  const closePlayer = () => { frame.src = 'about:blank'; player.close(); };
  $('.player-x').addEventListener('click', closePlayer);
  player.addEventListener('click', (e) => { if (e.target === player) closePlayer(); });
  player.addEventListener('close', () => { frame.src = 'about:blank'; });

  $$('[data-rail]').forEach((b) => b.addEventListener('click', () => {
    const rail = document.getElementById(b.dataset.rail);
    const w = rail.firstElementChild ? rail.firstElementChild.getBoundingClientRect().width + 16 : 300;
    rail.scrollBy({ left: Number(b.dataset.dir) * w, behavior: 'smooth' });
  }));
  // Mouse drag on the reel rail
  (function drag(rail) {
    let down = false, sx = 0, sl = 0, moved = false;
    rail.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') return; down = true; moved = false; sx = e.clientX; sl = rail.scrollLeft; rail.style.scrollSnapType = 'none'; rail.style.scrollBehavior = 'auto'; });
    window.addEventListener('pointermove', (e) => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 5) moved = true; rail.scrollLeft = sl - dx; });
    window.addEventListener('pointerup', () => { if (!down) return; down = false; rail.style.scrollSnapType = ''; rail.style.scrollBehavior = ''; });
    rail.addEventListener('click', (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
    rail.addEventListener('dragstart', (e) => e.preventDefault());
  })(reelRail);

  /* ---------- Lead form ---------- */
  $('#fDate').min = iso(today);
  $('#leadForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#fName').value.trim();
    const phone = $('#fPhone').value.trim();
    const digits = phone.replace(/\D/g, '');
    const err = $('#fErr');
    if (!name || digits.length < 10 || digits.length > 14) {
      err.textContent = !name ? t('অনুগ্রহ করে নাম লিখুন।', 'Please enter your name.') : t('সঠিক মোবাইল নম্বর দিন।', 'Please enter a valid mobile number.');
      err.hidden = false;
      (!name ? $('#fName') : $('#fPhone')).focus();
      return;
    }
    err.hidden = true;
    const date = $('#fDate').value || t('ঠিক হয়নি', 'Not set');
    const note = $('#fNote').value.trim() || '-';
    window.open(waLink(t(
      `আসসালামু আলাইকুম Motel George,\nনাম: ${name}\nমোবাইল: ${phone}\nআসার তারিখ: ${date}\nনোট: ${note}\n(ওয়েবসাইট থেকে)`,
      `Hello Motel George,\nName: ${name}\nPhone: ${phone}\nArrival: ${date}\nNote: ${note}\n(via website)`
    )), '_blank', 'noopener');
  });

  /* ---------- "Book now" header button focuses the booking bar ---------- */
  $$('[data-focus-book]').forEach((a) => a.addEventListener('click', () => setTimeout(() => bIn.focus({ preventScroll: true }), 700)));

  /* ---------- Language ---------- */
  function applyLang() {
    document.documentElement.lang = lang;
    $$('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    $$('[data-en]').forEach((el) => {
      if (el.dataset.bn === undefined) el.dataset.bn = el.innerHTML;
      el.innerHTML = isEn() ? el.dataset.en : el.dataset.bn;
    });
    renderRoomOptions(); renderRooms(); renderChips(); renderReels();
    guests.refresh(); nights.refresh(); rooms.refresh();
    syncDates(); shown = 0; updateTotal();
  }
  $$('.lang button').forEach((b) => b.addEventListener('click', () => {
    if (b.dataset.lang === lang) return;
    lang = b.dataset.lang;
    try { localStorage.setItem('mg_lang', lang); } catch (e) { /* ignore */ }
    applyLang();
  }));

  /* ---------- Menu ---------- */
  const burger = $('.burger'), menu = $('#menu');
  function toggleMenu(open) {
    document.body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', () => toggleMenu(!document.body.classList.contains('menu-open')));
  $$('#menu a').forEach((a) => a.addEventListener('click', () => toggleMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && document.body.classList.contains('menu-open')) toggleMenu(false); });

  /* ---------- Scroll: header, progress, dock ---------- */
  const hdr = $('#hdr'), bar = $('.hdr-progress'), dock = $('.dock');
  let ticking = false;
  function onScroll() {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    hdr.classList.toggle('solid', y > 40);
    bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    dock.classList.toggle('show', y > window.innerHeight * 0.7);
    ticking = false;
  }
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  /* ---------- Observers ---------- */
  if ('IntersectionObserver' in window) {
    const navLinks = $$('.nav a');
    const so = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) navLinks.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === '#' + en.target.id));
    }), { rootMargin: '-45% 0px -45% 0px' });
    $$('.sec').forEach((s) => so.observe(s));

    const ro = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('in'); ro.unobserve(en.target); }
    }), { threshold: 0.12 });
    $$('.rv').forEach((el) => ro.observe(el));
  } else {
    $$('.rv').forEach((el) => el.classList.add('in'));
  }

  /* ---------- Init ---------- */
  applyLang();
})();
