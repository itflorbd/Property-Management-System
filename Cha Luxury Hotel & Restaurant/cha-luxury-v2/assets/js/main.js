/* Cha Luxury Hotel & Restaurant — v2 interactions */
(function () {
  'use strict';

  const WA = '8801733607321';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const waLink = (msg) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
  const openWa = (msg) => window.open(waLink(msg), '_blank', 'noopener');
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let lang = 'bn';
  try { lang = localStorage.getItem('cha_lang') || 'bn'; } catch (e) { /* storage blocked */ }
  const en = () => lang === 'en';
  const t = (bn, eng) => (en() ? eng : bn);
  const L = () => (en() ? 1 : 0);
  const BN = '০১২৩৪৫৬৭৮৯';
  const num = (n) => { const s = Number(n).toLocaleString('en-IN'); return en() ? s : s.replace(/\d/g, (d) => BN[d]); };
  const taka = (n) => '৳' + num(n);

  /* ---------- Data (from the hotel's published info) ---------- */
  const ROOMS = [
    { id: 'double', img: 'room1.jpg', pos: '35% 50%', min: 2000, max: 2500, guests: 2,
      name: ['ডিলাক্স ডাবল', 'Deluxe Double'], bed: ['১ কিং বেড', '1 king bed'],
      specs: [['স্প্লিট এসি', 'প্রাইভেট ব্যালকনি', 'স্মার্ট টিভি', 'মিনি ফ্রিজ', 'গিজার', 'গ্রিন সিটি ভিউ'], ['Split AC', 'Private balcony', 'Smart TV', 'Mini fridge', 'Hot water', 'Green city view']] },
    { id: 'twin', img: 'room3.jpg', pos: '30% 50%', min: 2200, max: 2600, guests: 2,
      name: ['ডিলাক্স টুইন', 'Deluxe Twin'], bed: ['২ সিঙ্গেল বেড', '2 single beds'],
      specs: [['স্প্লিট এসি', 'ব্যালকনি', 'স্মার্ট টিভি', 'ইলেকট্রিক কেটলি', 'ওয়ার্ক ডেস্ক', 'ফ্রি ওয়াই-ফাই'], ['Split AC', 'Balcony', 'Smart TV', 'Electric kettle', 'Work desk', 'Free Wi-Fi']] },
    { id: 'family', img: 'room3.jpg', pos: '75% 50%', min: 3000, max: 3500, guests: 4,
      name: ['ফ্যামিলি রুম', 'Family Room'], bed: ['কিং + সিঙ্গেল বেড', 'King + single bed'],
      specs: [['প্রশস্ত রুম', 'এসি ও ব্যালকনি', 'স্মার্ট টিভি', 'মিনি ফ্রিজ', 'সোফা', 'চা-কফি মেকার'], ['Spacious', 'AC & balcony', 'Smart TV', 'Mini fridge', 'Sofa seating', 'Tea & coffee maker']] },
    { id: 'suite', img: 'room2.jpg', pos: '50% 50%', min: 3800, max: 4500, guests: 5,
      name: ['ডিলাক্স ফ্যামিলি স্যুট', 'Deluxe Family Suite'], bed: ['মাস্টার বেড + লিভিং', 'Master bed + living room'],
      specs: [['লাক্সারি ইন্টেরিয়র', 'ডাইনিং এরিয়া', 'একাধিক ব্যালকনি', 'সাউন্ডপ্রুফ', 'স্প্লিট এসি', 'আধুনিক শাওয়ার'], ['Luxury interior', 'Dining area', 'Multiple balconies', 'Soundproof', 'Split AC', 'Modern shower']] },
    { id: 'quad', img: 'room3.jpg', pos: '50% 60%', min: 3200, max: 3800, guests: 4,
      name: ['ক্লাসিক কোয়াড্রাপল', 'Classic Quadruple'], bed: ['২ ডাবল বেড', '2 double beds'],
      specs: [['গ্রুপের জন্য আদর্শ', 'এসি', 'স্মার্ট টিভি', 'ওয়ারড্রোব', 'ইলেকট্রিক কেটলি'], ['Great for groups', 'AC', 'Smart TV', 'Wardrobe', 'Electric kettle']] },
    { id: 'guest', img: 'room1.jpg', pos: '70% 50%', min: 1500, max: 1800, guests: 2,
      name: ['গেস্ট রুম (বাজেট)', 'Guest Room (Budget)'], bed: ['ডাবল বা টুইন বেড', 'Double or twin bed'],
      specs: [['বাজেট-বান্ধব', 'পরিচ্ছন্ন লিনেন', 'ফ্যান/এসি অপশন', 'এটাচড বাথ', 'ওয়াই-ফাই'], ['Budget friendly', 'Fresh linen', 'Fan or AC', 'Attached bath', 'Wi-Fi']] }
  ];

  const REVIEWS = [
    { who: 'Tanvir', bn: 'চা জাদুঘরের খুব কাছে, চারপাশটা শান্ত। বারান্দা থেকে খোলা বাতাস উপভোগ করা যায়।', en: 'Very close to the Tea Museum and the area is quiet. You get fresh air right from the balcony.' },
    { who: 'Rahat', bn: 'পরিবার নিয়ে ৩ দিন ছিলাম। রুমগুলো পরিষ্কার, স্টাফরা খুবই বিনয়ী।', en: 'Stayed 3 days with family. Rooms were clean and the staff were very polite.' },
    { who: 'Sadia', bn: 'রেস্টুরেন্টের বিফ ভুনা আর সাত লেয়ারের চা ছিল দারুণ।', en: 'The beef bhuna and the seven-layer tea at the restaurant were excellent.' },
    { who: 'Nazmul', bn: 'পার্কিং নিয়ে কোনো চিন্তা করতে হয়নি। গভীর রাতে পৌঁছালেও ফ্রন্ট ডেস্ক খোলা ছিল।', en: 'No worries about parking. The front desk was open even when we arrived late at night.' },
    { who: 'Farhana', bn: 'শ্রীমঙ্গলে বাজেটের মধ্যে ভালো থাকার জন্য একটি নির্ভরতার নাম।', en: 'A dependable choice for a good stay in Sreemangal on a budget.' }
  ];

  const rangeTxt = (r) => `${taka(r.min)}–${num(r.max)}`;

  /* ---------- Steppers ---------- */
  function initStep(el, onChange) {
    const out = el.querySelector('output');
    const min = Number(el.dataset.min || 1), max = Number(el.dataset.max || 99);
    const [dec, inc] = el.querySelectorAll('button');
    let v = Number(out.textContent);
    out.setAttribute('aria-live', 'polite');
    const render = () => { out.textContent = num(v); dec.disabled = v <= min; inc.disabled = v >= max; };
    [dec, inc].forEach((b) => b.addEventListener('click', () => { v = Math.min(max, Math.max(min, v + Number(b.dataset.d))); render(); onChange && onChange(v); }));
    render();
    return { get: () => v, render };
  }

  /* ---------- Booking bar ---------- */
  const bIn = $('#bIn'), bOut = $('#bOut'), bNights = $('#bNights');
  const iso = (d) => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  const today = new Date();
  bIn.value = bIn.min = iso(today);
  bOut.value = bOut.min = iso(new Date(today.getTime() + 864e5));
  const nights = () => Math.max(1, Math.round((new Date(bOut.value) - new Date(bIn.value)) / 864e5) || 1);
  function syncDates() {
    if (!bIn.value || bIn.value < bIn.min) bIn.value = bIn.min;
    const minOut = iso(new Date(new Date(bIn.value).getTime() + 864e5));
    bOut.min = minOut;
    if (!bOut.value || bOut.value < minOut) bOut.value = minOut;
    const n = nights();
    bNights.textContent = t(`${num(n)} রাত · ${num(guests.get())} জন`, `${n} night${n > 1 ? 's' : ''} · ${guests.get()} guest${guests.get() > 1 ? 's' : ''}`);
  }
  const guests = initStep($('#bookForm .step'), () => syncDates());
  bIn.addEventListener('change', syncDates);
  bOut.addEventListener('change', syncDates);
  $$('input[type="date"]').forEach((inp) => inp.closest('label').addEventListener('click', (e) => {
    if (typeof inp.showPicker !== 'function') return;
    e.preventDefault(); inp.focus();
    try { inp.showPicker(); } catch (err) { /* ignore */ }
  }));

  const fmtDate = (v) => { if (!v) return ''; const d = new Date(v + 'T00:00'); return d.toLocaleDateString(en() ? 'en-GB' : 'bn-BD', { day: 'numeric', month: 'short', year: 'numeric' }); };
  const stayLine = () => t(
    `• চেক-ইন: ${fmtDate(bIn.value)}\n• চেক-আউট: ${fmtDate(bOut.value)} (${num(nights())} রাত)\n• অতিথি: ${num(guests.get())} জন`,
    `• Check-in: ${fmtDate(bIn.value)}\n• Check-out: ${fmtDate(bOut.value)} (${nights()} night${nights() > 1 ? 's' : ''})\n• Guests: ${guests.get()}`
  );

  $('#bookForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const fit = ROOMS.filter((r) => r.guests >= guests.get()).map((r) => r.name[L()]).join(', ');
    openWa(t(`আসসালামু আলাইকুম Cha Luxury,\nরুম খালি আছে কি?\n${stayLine()}\n• পছন্দ হতে পারে: ${fit}`,
             `Hello Cha Luxury,\nDo you have a room?\n${stayLine()}\n• Suitable rooms: ${fit}`));
  });

  // "Book" buttons scroll to the hero and focus the first date
  $$('[data-focus-book]').forEach((a) => a.addEventListener('click', () => setTimeout(() => bIn.focus({ preventScroll: true }), 650)));

  /* ---------- Rooms rail + filter ---------- */
  const rail = $('#roomRail');
  let gFilter = 0;
  function renderRooms() {
    const i = L();
    const list = ROOMS.filter((r) => !gFilter || (gFilter === 2 ? r.guests <= 2 : gFilter === 4 ? (r.guests >= 3 && r.guests <= 4) : r.guests >= 5));
    rail.innerHTML = list.map((r) => `
      <button type="button" class="room" data-id="${r.id}" aria-haspopup="dialog">
        <span class="room-img"><img src="assets/img/${r.img}" style="object-position:${r.pos}" width="1200" height="800" alt="" loading="lazy">
          <span class="room-pill"><svg><use href="#i-user"/></svg>${t(r.guests <= 2 ? `${num(r.guests)} জন` : `${num(r.guests === 4 ? 3 : 4)}–${num(r.guests)} জন`, r.guests <= 2 ? `${r.guests} guests` : `${r.guests === 4 ? 3 : 4}–${r.guests} guests`)}</span>
        </span>
        <span class="room-body">
          <span class="room-name">${esc(r.name[i])}</span>
          <span class="room-meta"><span><svg><use href="#i-bed"/></svg>${esc(r.bed[i])}</span><span><svg><use href="#a-snow"/></svg>${t('এসি', 'AC')}</span></span>
          <span class="room-foot">
            <span><small>${t('প্রতি রাত', 'per night')}</small><b>${rangeTxt(r)}</b></span>
            <span class="room-more">${t('বিস্তারিত', 'Details')}<svg><use href="#i-arrow"/></svg></span>
          </span>
        </span>
      </button>`).join('');
    rail.scrollTo({ left: 0, behavior: 'auto' });
  }
  $$('#roomFilter button').forEach((b) => b.addEventListener('click', () => {
    if (Number(b.dataset.g) === gFilter) return;
    $$('#roomFilter button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    gFilter = Number(b.dataset.g);
    $$('.room', rail).forEach((c) => c.classList.add('out'));
    setTimeout(renderRooms, 200);
  }));
  $$('[data-rail]').forEach((b) => b.addEventListener('click', () => {
    const r = document.getElementById(b.dataset.rail);
    const w = r.firstElementChild ? r.firstElementChild.getBoundingClientRect().width + 18 : 320;
    r.scrollBy({ left: Number(b.dataset.dir) * w, behavior: 'smooth' });
  }));
  // Drag to scroll with a mouse
  (function drag(el) {
    let down = false, sx = 0, sl = 0, moved = false;
    el.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') return; down = true; moved = false; sx = e.clientX; sl = el.scrollLeft; el.style.scrollSnapType = 'none'; el.style.scrollBehavior = 'auto'; });
    window.addEventListener('pointermove', (e) => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 5) moved = true; el.scrollLeft = sl - dx; });
    window.addEventListener('pointerup', () => { if (!down) return; down = false; el.style.scrollSnapType = ''; el.style.scrollBehavior = ''; });
    el.addEventListener('click', (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
    el.addEventListener('dragstart', (e) => e.preventDefault());
  })(rail);

  /* ---------- Room sheet ---------- */
  const sheet = $('#sheet');
  let lastFocus = null;
  function openSheet(id) {
    const r = ROOMS.find((x) => x.id === id); if (!r) return;
    const i = L();
    const img = $('#sImg'); img.src = 'assets/img/' + r.img; img.style.objectPosition = r.pos; img.alt = r.name[i];
    $('#sMeta').textContent = `${r.bed[i]} · ${t(`সর্বোচ্চ ${num(r.guests)} জন`, `up to ${r.guests} guests`)}`;
    $('#sTitle').textContent = r.name[i];
    $('#sPrice').textContent = rangeTxt(r);
    $('#sSpecs').innerHTML = r.specs[i].map((s) => `<li><svg><use href="#i-check"/></svg>${esc(s)}</li>`).join('');
    $('#sWa').href = waLink(t(`আসসালামু আলাইকুম Cha Luxury,\n"${r.name[0]}" বুক করতে চাই।\n${stayLine()}`, `Hello Cha Luxury,\nI would like to book the "${r.name[1]}".\n${stayLine()}`));
    lastFocus = document.activeElement;
    if (typeof sheet.showModal === 'function') sheet.showModal(); else window.open($('#sWa').href, '_blank', 'noopener');
  }
  rail.addEventListener('click', (e) => { const c = e.target.closest('.room'); if (c) openSheet(c.dataset.id); });
  $('.sheet-x').addEventListener('click', () => sheet.close());
  sheet.addEventListener('click', (e) => { if (e.target === sheet) sheet.close(); });
  sheet.addEventListener('close', () => { if (lastFocus) lastFocus.focus({ preventScroll: true }); });

  /* ---------- Seven-layer tea glass + restaurant open status ---------- */
  const glass = $('#glass');
  if ('IntersectionObserver' in window && !reduced) {
    const go = new IntersectionObserver((es) => es.forEach((en2) => { if (en2.isIntersecting) { glass.classList.add('full'); go.disconnect(); } }), { threshold: 0.4 });
    go.observe(glass);
  } else { glass.classList.add('full'); }

  function dhakaMinutes() {
    const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Dhaka', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
    const h = Number(parts.find((p) => p.type === 'hour').value) % 24, m = Number(parts.find((p) => p.type === 'minute').value);
    return h * 60 + m;
  }
  function updateOpen() {
    const m = dhakaMinutes(), openAt = 7 * 60 + 30, closeAt = 22 * 60 + 30;
    const isOpen = m >= openAt && m < closeAt;
    $('#openNow').classList.toggle('is-open', isOpen);
    let txt;
    if (isOpen) {
      const left = closeAt - m;
      txt = left <= 60 ? t(`খোলা · ${num(left)} মিনিটে বন্ধ হবে`, `Open · closes in ${left} min`) : t('এখন খোলা', 'Open now');
    } else {
      txt = t('এখন বন্ধ · সকাল ৭:৩০-এ খুলবে · রুম সার্ভিস চালু', 'Closed · opens 7:30 AM · room service on');
    }
    $('#openTxt').textContent = '· ' + txt;
  }
  setInterval(updateOpen, 60000);

  /* ---------- Menu tabs (with arrow-key support) ---------- */
  const tabs = $$('.tabs [role="tab"]');
  function selectTab(tab, focus) {
    tabs.forEach((x) => {
      const on = x === tab;
      x.setAttribute('aria-selected', String(on));
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach((tab, n) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', (e) => {
      const k = e.key; let j = null;
      if (k === 'ArrowRight') j = (n + 1) % tabs.length;
      else if (k === 'ArrowLeft') j = (n - 1 + tabs.length) % tabs.length;
      else if (k === 'Home') j = 0; else if (k === 'End') j = tabs.length - 1;
      if (j !== null) { e.preventDefault(); selectTab(tabs[j], true); }
    });
  });

  /* ---------- Packages & tour ---------- */
  const PKG = {
    couple: ['কাপল প্যাকেজ', 'Couple getaway'],
    group: ['ফ্যামিলি/গ্রুপ প্যাকেজ', 'Family/group package'],
    corporate: ['কর্পোরেট/ইভেন্ট', 'Corporate/event'],
    season: ['অগ্রিম বুকিং ছাড়', 'Early-booking discount']
  };
  $$('.pkg-go').forEach((b) => b.addEventListener('click', () => {
    const p = PKG[b.dataset.pkg];
    openWa(t(`আসসালামু আলাইকুম Cha Luxury,\n"${p[0]}" সম্পর্কে জানতে চাই।\n${stayLine()}`, `Hello Cha Luxury,\nI'd like to know about the "${p[1]}".\n${stayLine()}`));
  }));
  $('#tourBtn').addEventListener('click', (e) => {
    e.preventDefault();
    openWa(t('আসসালামু আলাইকুম Cha Luxury,\nশ্রীমঙ্গল ঘোরার জন্য ট্যুর গাইড / গাড়ি / সিএনজি দরকার।\n' + stayLine(), 'Hello Cha Luxury,\nI need a tour guide / car / CNG around Sreemangal.\n' + stayLine()));
  });

  /* ---------- Reviews carousel ---------- */
  const quote = $('#quote'), qText = $('#qText'), qWho = $('#qWho'), qDots = $('#qDots');
  let qi = 0, qTimer = 0, paused = false;
  qDots.innerHTML = REVIEWS.map((r, n) => `<button type="button" aria-label="Review ${n + 1}"></button>`).join('');
  const dots = $$('button', qDots);
  function showQuote(n, animate) {
    qi = (n + REVIEWS.length) % REVIEWS.length;
    const r = REVIEWS[qi];
    const apply = () => {
      qText.textContent = en() ? r.en : r.bn;
      qWho.textContent = `— ${r.who} · ${t('ফেসবুক অতিথি', 'Facebook guest')}`;
      quote.classList.remove('swap');
    };
    dots.forEach((d, k) => d.setAttribute('aria-current', String(k === qi)));
    if (!animate || reduced) return apply();
    quote.classList.add('swap'); setTimeout(apply, 300);
  }
  const startQ = () => { clearInterval(qTimer); if (!reduced) qTimer = setInterval(() => { if (!paused) showQuote(qi + 1, true); }, 7000); };
  $('#qPrev').addEventListener('click', () => { showQuote(qi - 1, true); startQ(); });
  $('#qNext').addEventListener('click', () => { showQuote(qi + 1, true); startQ(); });
  dots.forEach((d, k) => d.addEventListener('click', () => { showQuote(k, true); startQ(); }));
  const rvBox = $('.rv-main');
  rvBox.addEventListener('mouseenter', () => { paused = true; });
  rvBox.addEventListener('mouseleave', () => { paused = false; });
  rvBox.addEventListener('focusin', () => { paused = true; });
  rvBox.addEventListener('focusout', () => { paused = false; });
  // swipe on touch
  let tx = null;
  quote.addEventListener('touchstart', (e) => { tx = e.touches[0].clientX; }, { passive: true });
  quote.addEventListener('touchend', (e) => { if (tx === null) return; const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 40) { showQuote(qi + (dx < 0 ? 1 : -1), true); startQ(); } tx = null; });

  /* ---------- Lead form ---------- */
  const fRoom = $('#fRoom');
  $('#fDate').min = iso(today);
  function renderRoomSelect() {
    const keep = fRoom.value;
    fRoom.innerHTML = `<option value="">${t('যেকোনো', 'Any')}</option>` + ROOMS.map((r) => `<option value="${r.id}">${esc(r.name[L()])}</option>`).join('');
    fRoom.value = keep;
  }
  $('#leadForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#fName').value.trim(), phone = $('#fPhone').value.trim(), digits = phone.replace(/\D/g, '');
    const err = $('#fErr');
    if (!name || digits.length < 10 || digits.length > 14) {
      err.textContent = !name ? t('অনুগ্রহ করে নাম লিখুন।', 'Please enter your name.') : t('সঠিক মোবাইল নম্বর দিন।', 'Please enter a valid mobile number.');
      err.hidden = false; (!name ? $('#fName') : $('#fPhone')).focus(); return;
    }
    err.hidden = true;
    const room = ROOMS.find((r) => r.id === fRoom.value);
    const date = $('#fDate').value ? fmtDate($('#fDate').value) : t('ঠিক হয়নি', 'Not set');
    openWa(t(`আসসালামু আলাইকুম Cha Luxury,\nনাম: ${name}\nমোবাইল: ${phone}\nআসার তারিখ: ${date}\nরুম: ${room ? room.name[0] : 'যেকোনো'}\n(ওয়েবসাইট থেকে)`,
             `Hello Cha Luxury,\nName: ${name}\nPhone: ${phone}\nArrival: ${date}\nRoom: ${room ? room.name[1] : 'Any'}\n(via website)`));
  });

  /* ---------- Language ---------- */
  function applyLang() {
    document.documentElement.lang = lang;
    $$('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    $$('[data-en]').forEach((el) => {
      if (el.dataset.bn === undefined) el.dataset.bn = el.innerHTML;
      el.innerHTML = en() ? el.dataset.en : el.dataset.bn;
    });
    $$('.layer-count li').forEach((li, n) => { li.textContent = num(n + 1); });
    guests.render(); syncDates(); renderRooms(); renderRoomSelect(); updateOpen(); showQuote(qi, false);
  }
  $$('.lang button').forEach((b) => b.addEventListener('click', () => {
    if (b.dataset.lang === lang) return;
    lang = b.dataset.lang;
    try { localStorage.setItem('cha_lang', lang); } catch (e) { /* ignore */ }
    applyLang();
  }));

  /* ---------- Drawer ---------- */
  const burger = $('.burger'), drawer = $('#drawer');
  function toggleMenu(open) {
    document.body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', String(open));
    drawer.inert = !open;
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) setTimeout(() => drawer.querySelector('a').focus({ preventScroll: true }), 300);
    else if (drawer.contains(document.activeElement)) burger.focus({ preventScroll: true });
  }
  burger.addEventListener('click', () => toggleMenu(!document.body.classList.contains('menu-open')));
  $$('#drawer a').forEach((a) => a.addEventListener('click', () => toggleMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && document.body.classList.contains('menu-open')) toggleMenu(false); });
  window.matchMedia('(min-width: 1025px)').addEventListener('change', (e) => { if (e.matches) toggleMenu(false); });

  /* ---------- Scroll: header + dock ---------- */
  const hdr = $('#hdr'), dock = $('.dock');
  let ticking = false;
  const onScroll = () => { const y = window.scrollY; hdr.classList.toggle('solid', y > 40); dock.classList.toggle('show', y > window.innerHeight * 0.7); ticking = false; };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  /* ---------- Observers: active nav + reveal ---------- */
  if ('IntersectionObserver' in window) {
    const links = $$('.nav a');
    const so = new IntersectionObserver((es) => es.forEach((x) => { if (x.isIntersecting) links.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === '#' + x.target.id)); }), { rootMargin: '-45% 0px -45% 0px' });
    $$('.sec').forEach((s) => so.observe(s));
    const ro = new IntersectionObserver((es) => es.forEach((x) => { if (x.isIntersecting) { x.target.classList.add('in'); ro.unobserve(x.target); } }), { threshold: 0.12 });
    $$('.rv').forEach((el) => ro.observe(el));
  } else { $$('.rv').forEach((el) => el.classList.add('in')); }

  /* ---------- Init ---------- */
  applyLang();
  startQ();
})();
