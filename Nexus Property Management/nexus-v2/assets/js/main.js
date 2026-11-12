/* Nexus Property Management — v2 interactions */
(function () {
  'use strict';

  const WA = '8801851659285';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const waLink = (msg) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ---------- Data ---------- */
  const PROPERTIES = [
    { type: 'commercial', img: 'assets/img/commercial.jpg', phone: '01753044910',
      tag: ['কমার্শিয়াল', 'Commercial'], size: ['৪ শতক', '4 Dec'],
      title: ['মেইন রোড কর্নার প্লট', 'Main Road Corner Plot'],
      loc: ['লন্ডনী রোড, সুবিদবাজার', 'Londoni Rd, Subidbazar'],
      price: ['৳ ১.৩০ কোটি', '৳ 1.30 Cr'] },
    { type: 'land', img: 'assets/img/teagarden-estate.jpg', phone: '01851659285',
      tag: ['রেডি প্লট', 'Ready Plot'], size: ['১০ শতক', '10 Dec'],
      title: ['সুরমা আবাসিকে স্কয়ার প্লট', 'Square Plot, Surma R/A'],
      loc: ['আখালিয়া, সিলেট', 'Akhalia, Sylhet'],
      price: ['৳ ১০ লাখ/শতক', '৳ 10L / Dec'] },
    { type: 'land', img: 'assets/img/resort-nature.jpg', phone: '01772843532',
      tag: ['বাগান ও লেক', 'Orchard & Lake'], size: ['২০ শতক', '20 Dec'],
      title: ['লেকসাইড বাগানবাড়ির জমি', 'Lakeside Orchard Land'],
      loc: ['সাহেবের বাজার', 'Shaheber Bazar'],
      price: ['৳ ২ লাখ/শতক', '৳ 2L / Dec'] },
    { type: 'house', img: 'assets/img/riverside-luxury.jpg', phone: '01706296449',
      tag: ['বাড়ি', 'House'], size: ['৩.৭ শতক', '3.7 Dec'],
      title: ['দুই রাস্তার মুখে বাড়ি', 'Dual-Road House'],
      loc: ['টুলটিকর মেইন রোড', 'Tultikar Main Rd'],
      price: ['৳ ৯০ লাখ', '৳ 90 Lakh'] },
    { type: 'house', img: 'assets/img/building5story.jpg', phone: '01762844602',
      tag: ['৫ তলা ভবন', '5-Storey'], size: ['৭ শতক', '7 Dec'],
      title: ['১০ ইউনিট, ১০ গ্যাস লাইন', '10 Units, 10 Gas Lines'],
      loc: ['আখালিয়া, সিলেট', 'Akhalia, Sylhet'],
      price: ['সরাসরি মালিক', 'Direct Owner'] },
    { type: 'house', img: 'assets/img/colony.jpg', phone: '01851659285',
      tag: ['আয়ের প্রপার্টি', 'Income'], size: ['রেডি ভাড়া', 'Tenanted'],
      title: ['চলমান আয়ের কলোনি', 'Ready Rental Colony'],
      loc: ['শেখঘাট, ওয়ার্ড ১০', 'Sheikhghat, Ward 10'],
      price: ['আলোচনা সাপেক্ষে', 'Negotiable'] }
  ];

  const REELS = [
    { views: '166K', img: 'assets/img/colony.jpg', url: 'https://www.facebook.com/reel/925332896656998/',
      price: ['রেডি ইনকাম', 'Ready Yield'], title: ['শেখঘাটে রেডি কলোনি বিক্রি', 'Ready colony for sale, Sheikhghat'] },
    { views: '132K', img: 'assets/img/commercial.jpg', url: 'https://www.facebook.com/reel/1074154489010712/',
      price: ['৳ ১.৩০ কোটি', '৳ 1.30 Cr'], title: ['লন্ডনী রোডে ৪ শতক কর্নার প্লট', '4 Dec corner plot, Londoni Road'] },
    { views: '54K', img: 'assets/img/hero-nature.jpg', url: 'https://www.facebook.com/61573882153742/videos/928116682964007/',
      price: ['৳ ৮০ লাখ', '৳ 80 Lakh'], title: ['সোনাতলায় ১০ শতকে বাড়ি', '10 Dec with house, Sonatola'] },
    { views: '14K', img: 'assets/img/building5story.jpg', url: 'https://www.facebook.com/reel/1690390419411831/',
      price: ['১০ ইউনিট', '10 Units'], title: ['৭ শতকে ৫ তলা ভবন', '5-storey building on 7 Dec'] },
    { views: '10K', img: 'assets/img/teagarden-estate.jpg', url: 'https://www.facebook.com/reel/2193556268243436/',
      price: ['৳ ১০ লাখ/শতক', '৳ 10L / Dec'], title: ['সুরমা আবাসিকে ১০ শতক প্লট', '10 Dec plot, Surma R/A'] },
    { views: '8K', img: 'assets/img/riverside-luxury.jpg', url: 'https://www.facebook.com/reel/1698167915186195/',
      price: ['৳ ৯০ লাখ', '৳ 90 Lakh'], title: ['টুলটিকরে দুই রাস্তার বাড়ি', 'Dual-road house, Tultikar'] }
  ];

  let lang = 'bn';
  try { lang = localStorage.getItem('nexus_lang') || 'bn'; } catch (e) { /* storage blocked */ }
  const L = () => (lang === 'en' ? 1 : 0);
  const t = (bn, en) => (lang === 'en' ? en : bn);

  /* ---------- Intro ---------- */
  const ready = () => document.body.classList.add('ready');
  if (document.readyState === 'complete') setTimeout(ready, 400);
  else window.addEventListener('load', () => setTimeout(ready, 300));
  setTimeout(ready, 2200); // never block longer than this

  /* ---------- Rail progress ---------- */
  function updateProgress(rail, bar) {
    if (!rail || !bar) return;
    const max = rail.scrollWidth - rail.clientWidth;
    const view = rail.clientWidth / rail.scrollWidth;
    const pos = max > 0 ? rail.scrollLeft / max : 1;
    bar.style.width = Math.min(100, (view + (1 - view) * pos) * 100) + '%';
  }

  /* ---------- Properties ---------- */
  const propRail = $('#propRail');
  let filter = 'all';

  function renderProps() {
    const i = L();
    const list = filter === 'all' ? PROPERTIES : PROPERTIES.filter((p) => p.type === filter);
    propRail.innerHTML = list.map((p) => {
      const msg = t('আসসালামু আলাইকুম, আমি এই প্রপার্টিতে আগ্রহী: ', 'Hello Nexus, I am interested in: ') + p.title[i] + ' — ' + p.loc[i];
      return `
      <article class="pcard">
        <img src="${p.img}" alt="${esc(p.title[i])}" loading="lazy">
        <div class="pc-top"><span class="pc-tag">${esc(p.tag[i])}</span><span class="pc-size">${esc(p.size[i])}</span></div>
        <div class="pc-body">
          <span class="pc-loc"><svg><use href="#i-pin"/></svg>${esc(p.loc[i])}</span>
          <h3>${esc(p.title[i])}</h3>
          <div class="pc-price">
            <b>${esc(p.price[i])}</b>
            <span class="pc-acts">
              <a href="tel:${p.phone}" aria-label="${t('কল করুন', 'Call')}"><svg><use href="#i-phone"/></svg></a>
              <a href="${waLink(msg)}" target="_blank" rel="noopener" class="wa" aria-label="WhatsApp"><svg><use href="#i-wa"/></svg></a>
            </span>
          </div>
        </div>
      </article>`;
    }).join('');
    propRail.scrollTo({ left: 0, behavior: 'auto' });
    updateProgress(propRail, $('#propProg'));
  }

  $$('.tabs button').forEach((b) => {
    b.addEventListener('click', () => {
      if (b.dataset.filter === filter) return;
      $$('.tabs button').forEach((x) => x.setAttribute('aria-pressed', 'false'));
      b.setAttribute('aria-pressed', 'true');
      filter = b.dataset.filter;
      $$('.pcard', propRail).forEach((c) => c.classList.add('out'));
      setTimeout(renderProps, 220);
    });
  });

  /* ---------- Reels ---------- */
  const reelRail = $('#reelRail');
  const player = $('#player');
  const frame = $('#playerFrame');

  function renderReels() {
    const i = L();
    reelRail.innerHTML = REELS.map((r, n) => `
      <button type="button" class="reel" data-i="${n}" aria-label="${esc(r.title[i])}">
        <img src="${r.img}" alt="" loading="lazy">
        <span class="reel-views"><svg><use href="#i-play"/></svg>${r.views}</span>
        <span class="reel-play"><svg><use href="#i-play"/></svg></span>
        <span class="reel-body"><b>${esc(r.price[i])}</b><span class="reel-t">${esc(r.title[i])}</span></span>
      </button>`).join('');
    updateProgress(reelRail, $('#reelProg'));
  }

  reelRail.addEventListener('click', (e) => {
    const card = e.target.closest('.reel');
    if (!card) return;
    const r = REELS[card.dataset.i];
    $('#playerFb').href = r.url;
    $('#playerWa').href = waLink(t('আসসালামু আলাইকুম, এই ভিডিওর প্রপার্টির দাম জানতে চাই: ', 'Hello, I would like the price of this property: ') + r.title[L()] + ' (' + r.url + ')');
    frame.src = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(r.url)}&show_text=false&width=400&height=711&autoplay=true`;
    if (typeof player.showModal === 'function') player.showModal();
    else window.open(r.url, '_blank', 'noopener');
  });

  const closePlayer = () => { frame.src = 'about:blank'; player.close(); };
  $('.player-x').addEventListener('click', closePlayer);
  player.addEventListener('click', (e) => { if (e.target === player) closePlayer(); });
  player.addEventListener('close', () => { frame.src = 'about:blank'; });

  /* ---------- Rails: arrows, progress, drag ---------- */
  [[propRail, '#propProg'], [reelRail, '#reelProg']].forEach(([rail, sel]) => {
    rail.addEventListener('scroll', () => updateProgress(rail, $(sel)), { passive: true });
    window.addEventListener('resize', () => updateProgress(rail, $(sel)));
  });
  $$('[data-rail]').forEach((b) => {
    b.addEventListener('click', () => {
      const rail = document.getElementById(b.dataset.rail);
      const card = rail.firstElementChild;
      const step = card ? card.getBoundingClientRect().width + 20 : 320;
      rail.scrollBy({ left: Number(b.dataset.dir) * step, behavior: 'smooth' });
    });
  });

  // Drag-to-scroll on desktop (mouse only)
  [propRail, reelRail].forEach((rail) => {
    let down = false, sx = 0, sl = 0, moved = false;
    rail.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse') return;
      down = true; moved = false; sx = e.clientX; sl = rail.scrollLeft;
      rail.style.scrollSnapType = 'none'; rail.style.scrollBehavior = 'auto';
    });
    window.addEventListener('pointermove', (e) => {
      if (!down) return;
      const dx = e.clientX - sx;
      if (Math.abs(dx) > 5) moved = true;
      rail.scrollLeft = sl - dx;
    });
    window.addEventListener('pointerup', () => {
      if (!down) return;
      down = false; rail.style.scrollSnapType = ''; rail.style.scrollBehavior = '';
    });
    rail.addEventListener('click', (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
    rail.addEventListener('dragstart', (e) => e.preventDefault());
  });

  /* ---------- Services hover preview ---------- */
  const peek = $('.svc-peek');
  const peekImg = peek && peek.querySelector('img');
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (peek && fine) {
    let x = 0, y = 0, cx = 0, cy = 0, raf = 0;
    const loop = () => {
      cx += (x - cx) * 0.16; cy += (y - cy) * 0.16;
      peek.style.left = cx + 'px'; peek.style.top = cy + 'px';
      raf = requestAnimationFrame(loop);
    };
    $$('#svcList li').forEach((li) => {
      li.addEventListener('mouseenter', (e) => {
        peekImg.src = li.dataset.img;
        x = cx = e.clientX + 160; y = cy = e.clientY;
        peek.classList.add('on');
        if (!raf) raf = requestAnimationFrame(loop);
      });
      li.addEventListener('mousemove', (e) => { x = e.clientX + 160; y = e.clientY; });
      li.addEventListener('mouseleave', () => { peek.classList.remove('on'); });
    });
    $('#svcList').addEventListener('mouseleave', () => { cancelAnimationFrame(raf); raf = 0; });
  }

  /* ---------- Land calculator ---------- */
  const cVal = $('#cVal');
  let factor = 435.6;
  const fmt = (n) => {
    if (!n) return '0';
    if (n >= 1000) return Math.round(n).toLocaleString('en-US');
    if (n >= 100) return n.toFixed(1).replace(/\.0$/, '');
    return n.toFixed(2).replace(/\.?0+$/, '') || '0';
  };
  function calc() {
    const v = Math.max(0, parseFloat(cVal.value) || 0);
    const sq = v * factor;
    $('#oDec').textContent = fmt(sq / 435.6);
    $('#oKat').textContent = fmt(sq / 720);
    $('#oBig').textContent = fmt(sq / 14400);
    $('#oSq').textContent = fmt(sq);
  }
  cVal.addEventListener('input', calc);
  $$('.units button').forEach((b) => {
    b.addEventListener('click', () => {
      $$('.units button').forEach((x) => x.setAttribute('aria-checked', 'false'));
      b.setAttribute('aria-checked', 'true');
      factor = parseFloat(b.dataset.f);
      calc();
    });
  });
  calc();

  /* ---------- Chip group in form ---------- */
  $$('.need button').forEach((b) => {
    b.addEventListener('click', () => {
      $$('.need button').forEach((x) => x.setAttribute('aria-checked', 'false'));
      b.setAttribute('aria-checked', 'true');
    });
  });

  /* ---------- Hero finder → WhatsApp ---------- */
  $('#finder').addEventListener('submit', (e) => {
    e.preventDefault();
    const txt = (id) => { const s = $(id); return s.options[s.selectedIndex].textContent.trim(); };
    const msg = t(
      `আসসালামু আলাইকুম Nexus Property,\nআমি খুঁজছি:\n• ধরন: ${txt('#qType')}\n• এলাকা: ${txt('#qArea')}\n• বাজেট: ${txt('#qBudget')}`,
      `Hello Nexus Property,\nI am looking for:\n• Type: ${txt('#qType')}\n• Area: ${txt('#qArea')}\n• Budget: ${txt('#qBudget')}`
    );
    window.open(waLink(msg), '_blank', 'noopener');
  });

  /* ---------- Lead form → WhatsApp ---------- */
  $('#leadForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#fName').value.trim();
    const phone = $('#fPhone').value.trim();
    const err = $('#fErr');
    const digits = phone.replace(/\D/g, '');
    if (!name || digits.length < 10 || digits.length > 14) {
      err.textContent = !name ? t('অনুগ্রহ করে নাম লিখুন।', 'Please enter your name.') : t('সঠিক মোবাইল নম্বর দিন।', 'Please enter a valid mobile number.');
      err.hidden = false;
      (!name ? $('#fName') : $('#fPhone')).focus();
      return;
    }
    err.hidden = true;
    const need = $('.need button[aria-checked="true"]').textContent.trim();
    const msg = t(
      `আসসালামু আলাইকুম Nexus Property,\nনাম: ${name}\nমোবাইল: ${phone}\nপ্রয়োজন: ${need}\n(ওয়েবসাইট থেকে)`,
      `Hello Nexus Property,\nName: ${name}\nPhone: ${phone}\nNeed: ${need}\n(via website)`
    );
    window.open(waLink(msg), '_blank', 'noopener');
  });

  /* ---------- Language ---------- */
  function setLang(next) {
    lang = next;
    document.documentElement.lang = next;
    try { localStorage.setItem('nexus_lang', next); } catch (e) { /* ignore */ }
    $$('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === next)));
    $$('[data-en]').forEach((el) => {
      if (el.dataset.bn === undefined) el.dataset.bn = el.innerHTML;
      el.innerHTML = next === 'en' ? el.dataset.en : el.dataset.bn;
    });
    renderProps();
    renderReels();
  }
  $$('.lang button').forEach((b) => b.addEventListener('click', () => { if (b.dataset.lang !== lang) setLang(b.dataset.lang); }));

  /* ---------- Menu ---------- */
  const burger = $('.burger');
  const menu = $('#menu');
  function toggleMenu(open) {
    document.body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', String(open));
    menu.inert = !open;
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) setTimeout(() => menu.querySelector('a').focus({ preventScroll: true }), 300);
    else if (menu.contains(document.activeElement)) burger.focus({ preventScroll: true });
  }
  // Close the menu if the screen grows to desktop size while it is open
  window.matchMedia('(min-width: 1025px)').addEventListener('change', (e) => { if (e.matches) toggleMenu(false); });
  burger.addEventListener('click', () => toggleMenu(!document.body.classList.contains('menu-open')));
  $$('#menu a').forEach((a) => a.addEventListener('click', () => toggleMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && document.body.classList.contains('menu-open')) toggleMenu(false); });

  /* ---------- Header state, dock, pager, active nav ---------- */
  const hdr = $('#hdr');
  const dock = $('.dock');
  const onScroll = () => {
    const y = window.scrollY;
    hdr.classList.toggle('solid', y > 40);
    dock.classList.toggle('show', y > window.innerHeight * 0.6);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const sections = $$('.sec');
  const pagerNum = $('.pager-num');
  const pagerBar = $('.pager-bar i');
  const navLinks = $$('.nav a');
  if ('IntersectionObserver' in window) {
    const so = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const idx = sections.indexOf(en.target);
        pagerNum.textContent = en.target.dataset.sec;
        pagerBar.style.transform = `translateY(${idx * 100}%)`;
        navLinks.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === '#' + en.target.id));
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    sections.forEach((s) => so.observe(s));

    /* Reveal on scroll */
    const ro = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('in'); ro.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    $$('.rv').forEach((el) => ro.observe(el));

    /* Count-up stats */
    const co = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        co.unobserve(en.target);
        const el = en.target, end = Number(el.dataset.count), suf = el.dataset.suffix || '';
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const t0 = performance.now(), dur = 1400;
        const tick = (now) => {
          const p = Math.min(1, (now - t0) / dur);
          el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suf;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.6 });
    $$('[data-count]').forEach((el) => co.observe(el));
  } else {
    $$('.rv').forEach((el) => el.classList.add('in'));
  }

  /* ---------- Init ---------- */
  if (lang === 'en') setLang('en');
  else { renderProps(); renderReels(); }
})();
