/* The Vacation Inn v2 — interactions */
(() => {
  'use strict';

  const WA = '8801612505060';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  let lang = localStorage.getItem('vi-lang') === 'en' ? 'en' : 'bn';

  /* ---------- Helpers ---------- */
  const bnDigits = '০১২৩৪৫৬৭৮৯';
  const num = (n) => {
    const s = Number(n).toLocaleString('en-IN');
    return lang === 'bn' ? s.replace(/\d/g, (d) => bnDigits[d]) : s;
  };
  const taka = (n) => '৳' + num(n);
  const t = (bn, en) => (lang === 'en' ? en : bn);
  const waLink = (msg) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
  const today = new Date().toISOString().split('T')[0];

  /* ---------- Data ---------- */
  const rooms = [
    { id: 'premium', type: 'couple', price: 2500, img: 'assets/img/r-premium.webp',
      tag: ['সবচেয়ে জনপ্রিয়', 'Most loved'],
      name: ['প্রিমিয়াম কাপল ব্যালকনি', 'Premium Couple Balcony'],
      desc: ['মেঘ ও পাহাড় ভিউ প্রাইভেট ব্যালকনি, এলইডি মিরর ও সাইলেন্ট এসি।', 'Private hill-view balcony, backlit mirror and whisper-quiet AC.'],
      guests: 2, bed: ['কিং বেড', 'King bed'], ac: true,
      specs: [['প্রাইভেট ব্যালকনি', 'Private balcony'], ['স্মার্ট টিভি', 'Smart TV'], ['গরম পানি', 'Hot water'], ['ফ্রি ওয়াই-ফাই', 'Free Wi-Fi']] },
    { id: 'family', type: 'family', price: 3500, img: 'assets/img/r-family.webp',
      tag: ['ফ্যামিলি ফেভারিট', 'Family pick'],
      name: ['সুপার ডিলাক্স ফ্যামিলি স্যুট', 'Super Deluxe Family Suite'],
      desc: ['দুটি বড় বেড, প্যানোরামিক ব্যালকনি ও বসার জায়গা। ৪-৫ জনের জন্য।', 'Two queen beds, panoramic balcony and a lounge corner. Sleeps 4–5.'],
      guests: 5, bed: ['২ কুইন বেড', '2 queen beds'], ac: true,
      specs: [['প্যানোরামিক ব্যালকনি', 'Panoramic balcony'], ['বসার লাউঞ্জ', 'Sitting lounge'], ['ওয়্যারড্রব', 'Wardrobe'], ['গরম পানি', 'Hot water']] },
    { id: 'vip', type: 'couple', price: 4200, img: 'assets/img/r-vip.webp',
      tag: ['ভিআইপি', 'VIP'],
      name: ['ভিআইপি প্যানোরামিক স্যুট', 'VIP Panoramic Suite'],
      desc: ['সবচেয়ে বড় স্যুট। আর্চড মিরর, ফলস সিলিং লাইট ও চওড়া ব্যালকনি।', 'Our largest suite. Arched mirror, cove lighting and a wide balcony.'],
      guests: 3, bed: ['কিং বেড', 'King bed'], ac: true,
      specs: [['চওড়া ব্যালকনি', 'Wide balcony'], ['ফলস সিলিং লাইট', 'Cove lighting'], ['স্মার্ট টিভি', 'Smart TV'], ['প্রিমিয়াম টয়লেট্রিজ', 'Premium toiletries']] },
    { id: 'superior', type: 'family', price: 2200, img: 'assets/img/r-superior.webp',
      tag: ['বন্ধুদের জন্য', 'For friends'],
      name: ['সুপিরিয়র ডাবল এসি', 'Superior Double AC'],
      desc: ['দুটি বেড, ওয়াল আর্ট ও নাইট ল্যাম্প। বন্ধু বা ছোট পরিবারের জন্য।', 'Two beds with wall art and bedside lamps. Great for friends.'],
      guests: 4, bed: ['২ ডাবল বেড', '2 double beds'], ac: true,
      specs: [['২টি বেড', '2 beds'], ['নাইট ল্যাম্প', 'Bedside lamps'], ['গরম পানি', 'Hot water'], ['ফ্রি ওয়াই-ফাই', 'Free Wi-Fi']] },
    { id: 'comfort', type: 'couple', price: 2000, img: 'assets/img/r-comfort.webp',
      tag: ['স্মার্ট চয়েস', 'Smart choice'],
      name: ['কমফোর্ট কাপল এসি', 'Comfort Couple AC'],
      desc: ['কম খরচে আরামদায়ক এসি রুম। রিল্যাক্সড ছুটির জন্য।', 'A cosy AC room at an easy price.'],
      guests: 2, bed: ['কুইন বেড', 'Queen bed'], ac: true,
      specs: [['সাইলেন্ট এসি', 'Silent AC'], ['স্মার্ট টিভি', 'Smart TV'], ['গরম পানি', 'Hot water'], ['ফ্রি ওয়াই-ফাই', 'Free Wi-Fi']] },
    { id: 'economy', type: 'value', price: 1400, img: 'assets/img/r-economy.webp',
      tag: ['বাজেট', 'Budget'],
      name: ['ইকোনমি নন-এসি', 'Economy Non-AC'],
      desc: ['কাঠের ক্যানোপি বেড আর পরিষ্কার বাথরুম। বাজেট ভ্রমণের জন্য সেরা।', 'Timber canopy bed and a clean bath. Best for budget trips.'],
      guests: 2, bed: ['ডাবল বেড', 'Double bed'], ac: false,
      specs: [['ক্যানোপি বেড', 'Canopy bed'], ['ফ্যান', 'Ceiling fan'], ['গরম পানি', 'Hot water'], ['ফ্রি ওয়াই-ফাই', 'Free Wi-Fi']] }
  ];

  const tours = [
    { price: 0, name: ['প্রয়োজন নেই', 'No tour'] },
    { price: 2500, name: ['নীলাচল ও স্বর্ণ মন্দির', 'Nilachal & Golden Temple'] },
    { price: 4500, name: ['নীলগিরি ফুল ডে', 'Nilgiri full day'] },
    { price: 7500, name: ['বগালেক ও ঝর্ণা', 'Boga Lake & falls'] }
  ];

  /* ---------- i18n ---------- */
  function applyLang() {
    document.documentElement.lang = lang;
    $$('[data-en]').forEach((el) => {
      if (el.dataset.bn === undefined) el.dataset.bn = el.innerHTML;
      el.innerHTML = lang === 'en' ? el.dataset.en : el.dataset.bn;
    });
    $$('[data-en-ph]').forEach((el) => {
      if (el.dataset.bnPh === undefined) el.dataset.bnPh = el.placeholder;
      el.placeholder = lang === 'en' ? el.dataset.enPh : el.dataset.bnPh;
    });
    $$('#langBtn span').forEach((s, i) => s.classList.toggle('on', (i === 0) === (lang === 'bn')));
    $$('.tile').forEach((tile) => {
      const [bn, en] = tile.dataset.cap.split('|');
      tile.dataset.capTxt = t(bn, en);
      tile.setAttribute('aria-label', t(bn, en));
    });
    renderRooms();
    renderCalc();
  }
  $('#langBtn').addEventListener('click', () => {
    lang = lang === 'bn' ? 'en' : 'bn';
    localStorage.setItem('vi-lang', lang);
    applyLang();
  });

  /* ---------- Nav / menu ---------- */
  const nav = $('#nav');
  const mbar = $('#mbar');
  const hero = $('#home');
  let lastY = 0;
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle('solid', y > 40);
    nav.classList.toggle('hide', y > lastY && y > hero.offsetHeight * 0.9 && !document.body.classList.contains('menu-open'));
    mbar.classList.toggle('show', y > hero.offsetHeight * 0.5);
    lastY = y;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const burger = $('#burger');
  const menu = $('#menu');
  const setMenu = (open) => {
    document.body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', open);
    menu.setAttribute('aria-hidden', !open);
  };
  burger.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  $$('#menu a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

  /* ---------- Steppers ---------- */
  $$('.step').forEach((step) => {
    const out = $('output', step);
    const min = +step.dataset.min, max = +step.dataset.max;
    out.dataset.v = parseInt(out.textContent, 10);
    const show = () => { out.textContent = num(out.dataset.v); };
    show();
    step.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      out.dataset.v = Math.min(max, Math.max(min, +out.dataset.v + +b.dataset.d));
      show();
      step.dispatchEvent(new Event('change', { bubbles: true }));
    });
  });
  const val = (id) => +$(id).dataset.v;

  /* ---------- Hero booking dock ---------- */
  ['#dDate', '#qDate'].forEach((id) => { $(id).min = today; });
  $('#dDate').value = today;
  $('#dock').addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = t(
      `আসসালামু আলাইকুম, The Vacation Inn। ${$('#dDate').value} তারিখে ${val('#dNights')} রাত, ${val('#dGuests')} জনের জন্য রুম খালি আছে কি?`,
      `Hello The Vacation Inn, is a room available on ${$('#dDate').value} for ${val('#dNights')} night(s), ${val('#dGuests')} guest(s)?`
    );
    window.open(waLink(msg), '_blank', 'noopener');
  });

  /* ---------- Rooms ---------- */
  const rail = $('#roomRail');
  let filter = 'all';
  function renderRooms() {
    rail.innerHTML = rooms.map((r) => `
      <article class="room${filter !== 'all' && r.type !== filter ? ' hidden' : ''}" data-id="${r.id}">
        <div class="room-img" data-open="${r.id}" role="button" tabindex="0" aria-label="${t('বিস্তারিত দেখুন', 'View details')}: ${t(...r.name)}">
          <img src="${r.img}" alt="${t(...r.name)}" loading="lazy">
          <span class="tag">${t(...r.tag)}</span>
        </div>
        <div class="room-body">
          <div class="room-top">
            <h3>${t(...r.name)}</h3>
            <div class="price"><b>${taka(r.price)}</b><small>${t('/ রাত', '/ night')}</small></div>
          </div>
          <ul class="room-specs">
            <li><svg><use href="#i-user"/></svg>${t(`${num(r.guests)} জন`, `${r.guests} guests`)}</li>
            <li><svg><use href="#i-bed"/></svg>${t(...r.bed)}</li>
            <li><svg><use href="#i-snow"/></svg>${r.ac ? t('এসি', 'AC') : t('নন-এসি', 'Non-AC')}</li>
          </ul>
          <div class="room-btns">
            <button class="btn btn-line" data-open="${r.id}">${t('বিস্তারিত দেখুন', 'View details')}</button>
            <a class="btn btn-wa" href="${waLink(t('আসসালামু আলাইকুম, আমি বুক করতে চাই: ', 'Hello, I want to book: ') + t(...r.name))}" target="_blank" rel="noopener" aria-label="WhatsApp ${t(...r.name)}"><svg><use href="#i-wa"/></svg></a>
          </div>
        </div>
      </article>`).join('');
    rail.scrollLeft = 0;
    updateRail();
  }
  $('#roomFilter').addEventListener('click', (e) => {
    const c = e.target.closest('.chip');
    if (!c) return;
    $$('#roomFilter .chip').forEach((x) => x.classList.toggle('on', x === c));
    filter = c.dataset.f;
    renderRooms();
  });
  const step = () => {
    const card = $('.room:not(.hidden)', rail);
    return card ? card.offsetWidth + parseFloat(getComputedStyle(rail).columnGap || 20) : 300;
  };
  $('#rPrev').addEventListener('click', () => rail.scrollBy({ left: -step(), behavior: 'smooth' }));
  $('#rNext').addEventListener('click', () => rail.scrollBy({ left: step(), behavior: 'smooth' }));
  function updateRail() {
    const max = rail.scrollWidth - rail.clientWidth;
    const ratio = rail.scrollWidth ? rail.clientWidth / rail.scrollWidth : 1;
    const bar = $('#railBar');
    bar.style.width = Math.min(100, ratio * 100) + '%';
    bar.style.transform = `translateX(${max > 0 ? (rail.scrollLeft / max) * ((1 / Math.min(1, ratio)) - 1) * 100 : 0}%)`;
    $('#rPrev').disabled = rail.scrollLeft < 4;
    $('#rNext').disabled = rail.scrollLeft > max - 4;
  }
  rail.addEventListener('scroll', updateRail, { passive: true });
  window.addEventListener('resize', updateRail);

  // drag-to-scroll on desktop
  let drag = null;
  rail.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse') return;
    drag = { x: e.clientX, left: rail.scrollLeft, moved: false };
    rail.style.scrollSnapType = 'none';
  });
  window.addEventListener('pointermove', (e) => {
    if (!drag) return;
    const dx = e.clientX - drag.x;
    if (Math.abs(dx) > 5) drag.moved = true;
    rail.scrollLeft = drag.left - dx;
  });
  window.addEventListener('pointerup', () => {
    if (!drag) return;
    const moved = drag.moved;
    drag = null;
    rail.style.scrollSnapType = '';
    if (moved) rail.addEventListener('click', (ev) => { ev.stopPropagation(); ev.preventDefault(); }, { capture: true, once: true });
  });

  /* ---------- Room sheet ---------- */
  const sheet = $('#sheet');
  let lastFocus = null;
  function openSheet(id) {
    const r = rooms.find((x) => x.id === id);
    if (!r) return;
    $('#sImg').src = r.img;
    $('#sImg').alt = t(...r.name);
    $('#sTag').textContent = t(...r.tag);
    $('#sTitle').textContent = t(...r.name);
    $('#sDesc').textContent = t(...r.desc);
    $('#sSpecs').innerHTML = [[`${num(r.guests)} জন অতিথি`, `${r.guests} guests`], r.bed, ...r.specs]
      .map((s) => `<li>${t(...s)}</li>`).join('');
    $('#sPrice').textContent = taka(r.price);
    $('#sWa').href = waLink(t('আসসালামু আলাইকুম, আমি বুক করতে চাই: ', 'Hello, I want to book: ') + t(...r.name));
    lastFocus = document.activeElement;
    sheet.hidden = false;
    document.body.style.overflow = 'hidden';
    $('.sheet-x', sheet).focus();
  }
  function closeSheet() {
    sheet.hidden = true;
    document.body.style.overflow = '';
    lastFocus && lastFocus.focus();
  }
  rail.addEventListener('click', (e) => {
    const o = e.target.closest('[data-open]');
    if (o) openSheet(o.dataset.open);
  });
  rail.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.room-img')) { e.preventDefault(); openSheet(e.target.dataset.open); }
  });
  sheet.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) closeSheet(); });

  /* ---------- Experience panels ---------- */
  const panels = $$('.panel');
  const activate = (p) => panels.forEach((x) => x.classList.toggle('on', x === p));
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  panels.forEach((p) => {
    p.addEventListener('click', () => activate(p));
    p.addEventListener('focus', () => activate(p));
    p.addEventListener('mouseenter', () => { if (fine.matches) activate(p); });
  });

  /* ---------- Gallery lightbox ---------- */
  const tiles = $$('.tile');
  const lb = $('#lb');
  let idx = 0;
  const showLb = (i) => {
    idx = (i + tiles.length) % tiles.length;
    const img = $('img', tiles[idx]);
    $('#lbImg').src = img.src;
    $('#lbImg').alt = img.alt;
    $('#lbCap').textContent = tiles[idx].dataset.capTxt;
  };
  tiles.forEach((tile, i) => tile.addEventListener('click', () => {
    lastFocus = tile;
    showLb(i);
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    $('.lb-x', lb).focus();
  }));
  const closeLb = () => { lb.hidden = true; document.body.style.overflow = ''; lastFocus && lastFocus.focus(); };
  $('#lbPrev').addEventListener('click', () => showLb(idx - 1));
  $('#lbNext').addEventListener('click', () => showLb(idx + 1));
  lb.addEventListener('click', (e) => { if (e.target === lb || e.target.closest('[data-close]')) closeLb(); });
  let tx = 0;
  lb.addEventListener('touchstart', (e) => { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50) showLb(idx + (dx < 0 ? 1 : -1));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!sheet.hidden) closeSheet();
      if (!lb.hidden) closeLb();
      if (document.body.classList.contains('menu-open')) setMenu(false);
    }
    if (!lb.hidden && e.key === 'ArrowRight') showLb(idx + 1);
    if (!lb.hidden && e.key === 'ArrowLeft') showLb(idx - 1);
  });

  /* ---------- Cost estimator ---------- */
  let cRoom = 0, cTour = 0;
  function renderCalc() {
    $('#cRoom').innerHTML = rooms.map((r, i) =>
      `<button type="button" class="${i === cRoom ? 'on' : ''}" data-i="${i}" aria-pressed="${i === cRoom}"><b>${t(...r.name)}</b><small>${taka(r.price)}</small></button>`).join('');
    $('#cTour').innerHTML = tours.map((x, i) =>
      `<button type="button" class="${i === cTour ? 'on' : ''}" data-i="${i}" aria-pressed="${i === cTour}"><b>${t(...x.name)}</b><small>${x.price ? taka(x.price) : t('৳০', '৳0')}</small></button>`).join('');
    $$('#calc .step output').forEach((o) => { o.textContent = num(o.dataset.v); });
    $$('#dock .step output').forEach((o) => { o.textContent = num(o.dataset.v); });
    calc();
  }
  let shown = 0;
  function calc() {
    const r = rooms[cRoom], n = val('#cNights'), q = val('#cRooms'), tour = tours[cTour];
    const total = r.price * n * q + tour.price;
    const el = $('#cTotal');
    const from = shown, start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / 450);
      const v = Math.round(from + (total - from) * (1 - Math.pow(1 - p, 3)));
      el.textContent = taka(v);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    shown = total;
    const msg = t(
      `আসসালামু আলাইকুম, The Vacation Inn।\nরুম: ${r.name[0]}\nরাত: ${n}, রুম সংখ্যা: ${q}\nট্যুর: ${tour.name[0]}\nআনুমানিক মোট: ৳${total.toLocaleString('en-IN')}\nবুকিং কনফার্ম করতে চাই।`,
      `Hello The Vacation Inn.\nRoom: ${r.name[1]}\nNights: ${n}, Rooms: ${q}\nTour: ${tour.name[1]}\nEstimated total: ৳${total.toLocaleString('en-IN')}\nI'd like to confirm.`
    );
    $('#cSend').href = waLink(msg);
  }
  $('#cRoom').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) { cRoom = +b.dataset.i; renderCalc(); } });
  $('#cTour').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) { cTour = +b.dataset.i; renderCalc(); } });
  $('#calc').addEventListener('change', calc);

  /* ---------- Reviews ---------- */
  const quotes = $$('.quote');
  const qBtns = $$('#qNav button');
  let q = 0, qTimer;
  const showQ = (i) => {
    q = i % quotes.length;
    quotes.forEach((x, j) => x.classList.toggle('on', j === q));
    qBtns.forEach((x, j) => { x.classList.toggle('on', j === q); x.setAttribute('aria-selected', j === q); });
  };
  const autoQ = () => { clearInterval(qTimer); qTimer = setInterval(() => showQ(q + 1), 6500); };
  qBtns.forEach((b, i) => b.addEventListener('click', () => { showQ(i); autoQ(); }));
  $('#quotes').addEventListener('mouseenter', () => clearInterval(qTimer));
  $('#quotes').addEventListener('mouseleave', autoQ);
  autoQ();

  /* ---------- Quick contact form ---------- */
  $('#quick').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#qName').value.trim().slice(0, 60);
    const date = $('#qDate').value;
    const msg = t(
      `আসসালামু আলাইকুম, আমি ${name}।${date ? ` ${date} তারিখে` : ''} রুম বুক করতে চাই।`,
      `Hello, I'm ${name}. I'd like to book a room${date ? ` on ${date}` : ''}.`
    );
    window.open(waLink(msg), '_blank', 'noopener');
  });

  /* ---------- Reveal + section tracking ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const sibs = $$('.rv', en.target.closest('section') || document);
      en.target.style.setProperty('--d', `${Math.min(sibs.indexOf(en.target), 6) * 0.08}s`);
      en.target.classList.add('in');
      io.unobserve(en.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  $$('.rv').forEach((el) => io.observe(el));

  const sections = $$('main > section');
  const dots = $$('.dots a');
  const links = $$('.nav-links a');
  const so = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const id = en.target.id;
      dots.forEach((d) => d.classList.toggle('on', d.getAttribute('href') === '#' + id));
      links.forEach((l) => l.classList.toggle('on', l.getAttribute('href') === '#' + id));
      document.body.classList.toggle('on-light', en.target.classList.contains('light'));
    });
  }, { rootMargin: '-50% 0px -50% 0px' });
  sections.forEach((s) => so.observe(s));

  applyLang();
})();
