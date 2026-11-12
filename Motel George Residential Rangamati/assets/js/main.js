/**
 * Motel George Residential Rangamati — Interactive Engine
 * Dynamic hero background crossfade, indicator-free auto-sliding room card,
 * room details lightbox modal, live stay & tour cost calculator,
 * authentic Facebook video reels, and instant bilingual translation.
 */

(function () {
  'use strict';

  // ====================================================
  // 1. VERIFIED ROOMS & SUITES DATASET
  // ====================================================
  const ROOMS = [
    {
      id: 1,
      type: 'lakeview',
      featured: true,
      tagBn: 'ডিলাক্স লেক ভিউ',
      tagEn: 'Deluxe Lake View',
      featuredTagBn: 'কাপ্তাই ভিউ স্পেশাল',
      featuredTagEn: 'Kaptai View Special',
      heroBg: 'assets/gen/room-lakeview.jpg',
      img: 'assets/gen/room-lakeview.jpg',
      locBn: 'কলেজ গেইট, রাঙামাটি সদর',
      locEn: 'College Gate, Rangamati',
      titleBn: 'ডিলাক্স লেক ভিউ এসি কাপল রুম (ব্যালকনিসহ)',
      titleEn: 'Deluxe Lake View AC King Room with Balcony',
      priceBn: '৳ ২,২০০ / রাত',
      priceEn: '৳ 2,200 / night',
      specsBn: ['১ কিং সাইজ বেড', 'কাপ্তাই লেক ভিউ ব্যালকনি', 'হট ওয়াটার গিজার', 'সাইলেন্ট এসি ও ওয়াই-ফাই'],
      specsEn: ['1 King Size Bed', 'Lake View Balcony', 'Hot Water Geyser', 'Silent AC & Free Wi-Fi'],
      descBn: 'কাপ্তাই হ্রদের শান্ত পানি ও পাহাড়ি সূর্যাস্ত উপভোগ করার জন্য সেরা প্রিমিয়াম রুম। বড় কাঁচের জানালা, প্রাইভেট ব্যালকনি, সাউন্ডপ্রুফ এসি, গিজারযুক্ত আধুনিক এটাচড বাথরুম ও ২৪ ঘণ্টা রুম সার্ভিস।',
      descEn: 'Our premier lakeside room offering floor-to-ceiling panoramic views of Kaptai Lake and Rangamati hills. Features a plush king bed, private balcony, silent AC, attached modern geyser bathroom, and 24/7 room service.',
      phone: '01719321106'
    },
    {
      id: 2,
      type: 'family',
      featured: true,
      tagBn: 'ফ্যামিলি স্যুট',
      tagEn: 'Family Suite',
      featuredTagBn: 'ফ্যামিলি প্রিমিয়াম',
      featuredTagEn: 'Family Premium',
      heroBg: 'assets/gen/room-family.jpg',
      img: 'assets/gen/room-family.jpg',
      locBn: 'কলেজ গেইট, রাঙামাটি সদর',
      locEn: 'College Gate, Rangamati',
      titleBn: 'সুপার ডিলাক্স এসি ফ্যামিলি স্যুট (৪-৫ জন)',
      titleEn: 'Super Deluxe AC Family Suite (4-5 Guests)',
      priceBn: '৳ ৩,২০০ / রাত',
      priceEn: '৳ 3,200 / night',
      specsBn: ['২টি কুইন বেড', 'পাহাড়ি ভিউ ব্যালকনি', 'স্প্লিট এসি ও গিজার', 'সিটিং এরিয়া ও স্মার্ট টিভি'],
      specsEn: ['2 Queen Beds', 'Scenic Hill Balcony', 'Split AC & Geyser', 'Seating Lounge & TV'],
      descBn: 'পরিবার বা ৪-৫ জনের ফ্রেন্ডস গ্রুপের জন্য অত্যন্ত প্রশস্ত ও আরামদায়ক স্যুট। দুটি বড় ডাবল বেড, খোলামেলা বারান্দা, চমৎকার ইন্টেরিয়র এবং ইন-হাউস রেস্টুরেন্ট সার্ভিস।',
      descEn: 'Generously spacious suite designed for families and small travel groups of 4-5 persons. Equipped with two queen beds, private scenic balcony, split AC, attached bathroom with geyser, and lounge seating.',
      phone: '01719321106'
    },
    {
      id: 3,
      type: 'couple',
      featured: true,
      tagBn: 'স্ট্যান্ডার্ড এসি',
      tagEn: 'Standard AC',
      featuredTagBn: 'কাপল কমফোর্ট',
      featuredTagEn: 'Couple Comfort',
      heroBg: 'assets/gen/hero-rangamati.jpg',
      img: 'assets/gen/hero-rangamati.jpg',
      locBn: 'কলেজ গেইট, রাঙামাটি সদর',
      locEn: 'College Gate, Rangamati',
      titleBn: 'স্ট্যান্ডার্ড এসি ডাবল বেড রুম',
      titleEn: 'Standard AC Double Bed Room',
      priceBn: '৳ ১,৮০০ / রাত',
      priceEn: '৳ 1,800 / night',
      specsBn: ['১ ডাবল বেড', 'পরিষ্কার ও জীবাণুমুক্ত', 'স্প্লিট এসি', 'হাই-স্পিড ওয়াই-ফাই'],
      specsEn: ['1 Double Bed', 'Sanitized & Clean', 'Split AC Unit', 'High-Speed Wi-Fi'],
      descBn: 'কাপল বা একক ভ্রমণকারীদের জন্য সাশ্রয়ী ও মার্জিত রুম। পরিষ্কার চাদর, সাইলেন্ট এসি, নিরবচ্ছিন্ন বিদ্যুৎ ব্যাকআপ এবং কলেজ গেইট মেইন রোডের শান্ত পরিবেশ।',
      descEn: 'Comfortable and affordable air-conditioned room tailored for couples or solo travelers. Features clean linen, silent split cooling, 24/7 power backup, and fast Wi-Fi.',
      phone: '01719321106'
    },
    {
      id: 4,
      type: 'couple',
      featured: true,
      tagBn: 'কমফোর্ট টুইন',
      tagEn: 'Comfort Twin',
      featuredTagBn: 'টুইন কমফোর্ট',
      featuredTagEn: 'Twin Comfort',
      heroBg: 'assets/gen/kaptai-boat.jpg',
      img: 'assets/gen/kaptai-boat.jpg',
      locBn: 'কলেজ গেইট, রাঙামাটি সদর',
      locEn: 'College Gate, Rangamati',
      titleBn: 'কমফোর্ট টুইন এসি রুম (২টি আলাদা বেড)',
      titleEn: 'Comfort Twin AC Room (2 Separate Beds)',
      priceBn: '৳ ১,৯০০ / রাত',
      priceEn: '৳ 1,900 / night',
      specsBn: ['২টি সিঙ্গেল টুইন বেড', 'এসি ও ফ্যান', 'গরম পানির ব্যবস্থা', 'ট্যুর প্ল্যান সহায়তা'],
      specsEn: ['2 Single Twin Beds', 'AC & Ceiling Fan', 'Hot Water Bath', 'Tour Assistance'],
      descBn: 'সহকর্মী বা দুই বন্ধুর জন্য উপযুক্ত টুইন বেডরুম। পৃথক আরামদায়ক বিছানা, নিরিবিলি পরিবেশ, হাই-স্পিড ওয়াই-ফাই ও কাপ্তাই লেক বোট ট্যুরের সার্বিক সহায়তা।',
      descEn: 'Perfect setup for friends or corporate colleagues traveling together. Two separate comfortable beds, modern air conditioning, geyser bathroom, and tour desk assistance.',
      phone: '01719321106'
    },
    {
      id: 5,
      type: 'budget',
      featured: false,
      tagBn: 'ইকোনমি বাজেট',
      tagEn: 'Economy Budget',
      featuredTagBn: 'বাজেট স্টে',
      featuredTagEn: 'Budget Stay',
      heroBg: 'assets/gen/hanging-bridge.jpg',
      img: 'assets/gen/hanging-bridge.jpg',
      locBn: 'কলেজ গেইট, রাঙামাটি সদর',
      locEn: 'College Gate, Rangamati',
      titleBn: 'ইকোনমি নন-এসি ডাবল বেড রুম',
      titleEn: 'Economy Non-AC Double Bed Room',
      priceBn: '৳ ১,০০০ / রাত',
      priceEn: '৳ 1,000 / night',
      specsBn: ['১ ডাবল বেড', 'বাতাসযুক্ত পরিচ্ছন্ন রুম', 'এটাচড বাথরুম', 'বাজেট ব্যাকপ্যাকার'],
      specsEn: ['1 Double Bed', 'Breezy & Clean', 'Attached Bathroom', 'Backpacker Budget'],
      descBn: 'ব্যাকপ্যাকার, ছাত্র ও বাজেট সচেতন ভ্রমণকারীদের জন্য সেরা সাশ্রয়ী অপশন। কম খরচে পরিষ্কার-পরিচ্ছন্ন বিছানা, ফ্যান ও নিরাপদ পরিবেশ।',
      descEn: 'The ideal low-cost choice for backpackers, students, and budget travelers seeking clean, safe, and pleasant lodging in central Rangamati.',
      phone: '01719321106'
    }
  ];

  // ====================================================
  // 2. VERIFIED FACEBOOK REELS & VIDEOS DATASET
  // ====================================================
  const REELS = [
    {
      titleBn: 'নভেম্বরে রাঙ্গামাটি মানেই এক অন্যরকম সৌন্দর্য ও মায়াবী রূপ',
      titleEn: 'November in Rangamati — Scenic Kaptai Vistas & Hill Breeze',
      views: '46K+',
      tagBn: 'কাপ্তাই লেক',
      tagEn: 'Kaptai Lake',
      img: 'assets/gen/hero-rangamati.jpg',
      url: 'https://www.facebook.com/reel/1085917611110343/'
    },
    {
      titleBn: 'মোটেল জর্জের ডিলাক্স লেক ভিউ রুম থেকে সূর্যাস্তের অপূর্ব দৃশ্য',
      titleEn: 'Sunset View from Deluxe Lake View Room at Motel George',
      views: '55K+',
      tagBn: 'রুম ট্যুর',
      tagEn: 'Room Tour',
      img: 'assets/gen/room-lakeview.jpg',
      url: 'https://www.facebook.com/reel/1760437931854655/'
    },
    {
      titleBn: 'কাপ্তাই হ্রদে সানসেট ও শুভলং ঝর্ণার পথে স্পিডবোট ক্রুজ',
      titleEn: 'Kaptai Lake Sunset & Speedboat Cruise towards Shuvolong',
      views: '155K+',
      tagBn: 'বোট ক্রুজ',
      tagEn: 'Boat Cruise',
      img: 'assets/gen/kaptai-boat.jpg',
      url: 'https://www.facebook.com/reel/2528128467590746/'
    },
    {
      titleBn: 'ঐতিহাসিক ঝুলন্ত সেতু ও কাপ্তাই লেকের চারপাশের পাহাড়ি প্রকৃতি',
      titleEn: 'Iconic Rangamati Hanging Bridge & Serene Lake Vistas',
      views: '71K+',
      tagBn: 'ঝুলন্ত সেতু',
      tagEn: 'Hanging Bridge',
      img: 'assets/gen/hanging-bridge.jpg',
      url: 'https://www.facebook.com/reel/2476338396229299/'
    },
    {
      titleBn: 'তাজা কাপ্তাই মাছ ও ঐতিহ্যবাহী বাঁশ মুরগির সুস্বাদু আয়োজন',
      titleEn: 'Fresh Kaptai Fish & Traditional Indigenous Hill Cuisine',
      views: '104K+',
      tagBn: 'পাহাড়ি ডাইনিং',
      tagEn: 'Hill Cuisine',
      img: 'assets/gen/dining-food.jpg',
      url: 'https://www.facebook.com/reel/1841170690634826/'
    }
  ];

  let currentLang = localStorage.getItem('motel_lang') || 'bn';

  // ====================================================
  // 3. HERO AUTO-SLIDER & BACKGROUND CROSSFADE (No Indicators)
  // ====================================================
  const FEATURED_ROOMS = ROOMS.filter(r => r.featured);
  let currentHeroIdx = 0;
  let activeHeroLayer = 'A'; // Alternates between #heroLayerA and #heroLayerB
  let heroTimer = null;
  const heroCardContainer = document.getElementById('heroCardContainer');
  const heroLayerA = document.getElementById('heroLayerA');
  const heroLayerB = document.getElementById('heroLayerB');

  function renderHeroCard(room, isEn) {
    if (!heroCardContainer) return;
    const tag = isEn ? (room.featuredTagEn || room.tagEn) : (room.featuredTagBn || room.tagBn);
    const loc = isEn ? room.locEn : room.locBn;
    const title = isEn ? room.titleEn : room.titleBn;
    const price = isEn ? room.priceEn : room.priceBn;

    heroCardContainer.innerHTML = `
      <article class="hero-card" data-id="${room.id}">
        <div class="hc-img">
          <img src="${room.img}" alt="${title}">
          <span class="tag">${tag}</span>
        </div>
        <div class="hc-body">
          <small><svg><use href="#i-pin"/></svg>${loc}</small>
          <h3>${title}</h3>
          <div class="hc-foot">
            <b>${price}</b>
            <span class="go" aria-label="View Room Details"><svg><use href="#i-right"/></svg></span>
          </div>
        </div>
      </article>
    `;
  }

  function setHeroRoom(index, animate = true) {
    if (!FEATURED_ROOMS.length) return;
    currentHeroIdx = (index + FEATURED_ROOMS.length) % FEATURED_ROOMS.length;
    const room = FEATURED_ROOMS[currentHeroIdx];
    const isEn = currentLang === 'en';

    // Crossfade background layers
    const activeLayerEl = (activeHeroLayer === 'A') ? heroLayerA : heroLayerB;
    const nextLayerEl = (activeHeroLayer === 'A') ? heroLayerB : heroLayerA;

    if (nextLayerEl && activeLayerEl) {
      nextLayerEl.style.backgroundImage = `url('${room.heroBg || room.img}')`;
      nextLayerEl.classList.add('active');
      activeLayerEl.classList.remove('active');
      activeHeroLayer = (activeHeroLayer === 'A') ? 'B' : 'A';
    }

    // Smooth card transition (Strict rule: NO indicators)
    if (animate && heroCardContainer) {
      heroCardContainer.classList.add('anim-fade-out');
      setTimeout(() => {
        renderHeroCard(room, isEn);
        heroCardContainer.classList.remove('anim-fade-out');
        heroCardContainer.classList.add('anim-fade-in');
        requestAnimationFrame(() => {
          setTimeout(() => heroCardContainer.classList.remove('anim-fade-in'), 300);
        });
      }, 220);
    } else {
      renderHeroCard(room, isEn);
    }
  }

  function startHeroAutoSlide() {
    stopHeroAutoSlide();
    heroTimer = setInterval(() => {
      setHeroRoom(currentHeroIdx + 1, true);
    }, 4800);
  }

  function stopHeroAutoSlide() {
    if (heroTimer) {
      clearInterval(heroTimer);
      heroTimer = null;
    }
  }

  // Click hero card to open modal
  heroCardContainer?.addEventListener('click', () => {
    const room = FEATURED_ROOMS[currentHeroIdx];
    if (room) openRoomModal(room);
  });

  // Pause on hover
  heroCardContainer?.addEventListener('mouseenter', stopHeroAutoSlide);
  heroCardContainer?.addEventListener('mouseleave', startHeroAutoSlide);

  // ====================================================
  // 4. ROOM DETAILS LIGHTBOX MODAL
  // ====================================================
  const roomModal = document.getElementById('roomModal');
  const rmClose = document.getElementById('rmClose');
  const rmImg = document.getElementById('rmImg');
  const rmTag = document.getElementById('rmTag');
  const rmLoc = document.getElementById('rmLoc');
  const rmTitle = document.getElementById('rmTitle');
  const rmPrice = document.getElementById('rmPrice');
  const rmSpecs = document.getElementById('rmSpecs');
  const rmDesc = document.getElementById('rmDesc');
  const rmCall = document.getElementById('rmCall');
  const rmWa = document.getElementById('rmWa');
  let currentModalRoom = null;

  function openRoomModal(room) {
    if (!roomModal || !room) return;
    currentModalRoom = room;
    const isEn = currentLang === 'en';

    if (rmImg) {
      rmImg.src = room.heroBg || room.img;
      rmImg.alt = isEn ? room.titleEn : room.titleBn;
    }
    if (rmTag) rmTag.textContent = isEn ? room.tagEn : room.tagBn;
    if (rmLoc) rmLoc.textContent = isEn ? room.locEn : room.locBn;
    if (rmTitle) rmTitle.textContent = isEn ? room.titleEn : room.titleBn;
    if (rmPrice) rmPrice.textContent = isEn ? room.priceEn : room.priceBn;

    if (rmSpecs) {
      const specs = isEn ? room.specsEn : room.specsBn;
      rmSpecs.innerHTML = (specs || []).map(s => `<span class="rm-spec-pill">${s}</span>`).join('');
    }
    if (rmDesc) {
      rmDesc.textContent = isEn ? room.descEn : room.descBn;
    }
    if (rmCall) {
      rmCall.href = `tel:${room.phone || '01719321106'}`;
      const span = rmCall.querySelector('span');
      if (span) span.textContent = isEn ? 'Call Reception' : 'রিসেপশনে কল';
    }
    if (rmWa) {
      const title = isEn ? room.titleEn : room.titleBn;
      rmWa.href = `https://wa.me/8801795342854?text=${encodeURIComponent(
        (isEn ? 'Hello Motel George Rangamati, I want to book: ' : 'আসসালামু আলাইকুম Motel George Rangamati, আমি বুকিং করতে চাই: ') + title
      )}`;
    }

    if (typeof roomModal.showModal === 'function') {
      roomModal.showModal();
    }
  }

  function closeRoomModal() {
    if (roomModal) {
      roomModal.close();
      currentModalRoom = null;
    }
  }

  rmClose?.addEventListener('click', closeRoomModal);
  roomModal?.addEventListener('click', (e) => {
    if (e.target === roomModal) closeRoomModal();
  });

  // ====================================================
  // 5. RENDER ROOMS TRACK SLIDER
  // ====================================================
  const roomTrack = document.getElementById('roomTrack');

  function renderRooms(filter) {
    if (!roomTrack) return;
    const isEn = currentLang === 'en';
    const filtered = (filter === 'all') ? ROOMS : ROOMS.filter(r => r.type === filter);

    roomTrack.innerHTML = filtered.map(r => `
      <article class="r-card" data-id="${r.id}" data-type="${r.type}">
        <div class="r-card-img">
          <img src="${r.img}" alt="${isEn ? r.titleEn : r.titleBn}" loading="lazy">
          <span class="tag">${isEn ? r.tagEn : r.tagBn}</span>
        </div>
        <div class="r-card-body">
          <small><svg><use href="#i-pin"/></svg>${isEn ? r.locEn : r.locBn}</small>
          <h3>${isEn ? r.titleEn : r.titleBn}</h3>
          <div class="r-card-specs">
            ${(isEn ? r.specsEn : r.specsBn).slice(0, 3).map(s => `<span>${s}</span>`).join('')}
          </div>
          <div class="r-card-price">${isEn ? r.priceEn : r.priceBn}</div>
          <div class="r-card-foot">
            <a href="tel:${r.phone}" class="btn-call" data-stop="true"><svg><use href="#i-phone"/></svg>${isEn ? 'Call' : 'কল'}</a>
            <a href="https://wa.me/8801795342854?text=${encodeURIComponent((isEn ? 'Hello Motel George, I want to book: ' : 'আসসালামু আলাইকুম, আমি বুক করতে চাই: ') + (isEn ? r.titleEn : r.titleBn))}" target="_blank" rel="noopener" class="btn-wa" data-stop="true"><svg><use href="#i-wa"/></svg>${isEn ? 'WhatsApp' : 'বুক করুন'}</a>
          </div>
        </div>
      </article>
    `).join('');

    // Attach click listeners to cards
    roomTrack.querySelectorAll('.r-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('[data-stop="true"]')) return;
        const id = parseInt(card.dataset.id, 10);
        const room = ROOMS.find(item => item.id === id);
        if (room) openRoomModal(room);
      });
    });
  }

  // Filter chips
  const filterButtons = document.querySelectorAll('.chips button');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
      renderRooms(btn.dataset.filter);
    });
  });

  // Slider buttons
  document.querySelectorAll('[data-slide]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.slide);
      const dir = parseInt(btn.dataset.dir || '1', 10);
      if (target) {
        target.scrollBy({ left: dir * 340, behavior: 'smooth' });
      }
    });
  });

  // ====================================================
  // 6. RENDER VIDEO REELS SLIDER
  // ====================================================
  const reelTrack = document.getElementById('reelTrack');
  const player = document.getElementById('player');
  const playerFrame = document.getElementById('playerFrame');
  const playerFb = document.getElementById('playerFb');
  const playerWa = document.getElementById('playerWa');
  const playerClose = document.querySelector('.player-close');

  function renderReels() {
    if (!reelTrack) return;
    const isEn = currentLang === 'en';

    reelTrack.innerHTML = REELS.map((r, i) => `
      <article class="reel-card" data-idx="${i}">
        <img src="${r.img}" alt="${isEn ? r.titleEn : r.titleBn}" loading="lazy">
        <span class="r-views"><svg><use href="#i-play"/></svg>${r.views}</span>
        <div class="r-play"><svg><use href="#i-play"/></svg></div>
        <div class="r-info">
          <small class="gold">${isEn ? r.tagEn : r.tagBn}</small>
          <h3>${isEn ? r.titleEn : r.titleBn}</h3>
        </div>
      </article>
    `).join('');

    // Attach click to open video modal
    reelTrack.querySelectorAll('.reel-card').forEach(card => {
      card.addEventListener('click', () => {
        const item = REELS[card.dataset.idx];
        if (!item || !player) return;
        const title = isEn ? item.titleEn : item.titleBn;

        if (playerFb) playerFb.href = item.url;
        if (playerWa) {
          playerWa.href = `https://wa.me/8801795342854?text=${encodeURIComponent((isEn ? 'Hello Motel George, I watched this reel on your website: ' : 'আসসালামু আলাইকুম, আপনাদের ওয়েবসাইটের এই রিলটি দেখলাম: ') + title + ' (' + item.url + ')')}`;
        }
        if (playerFrame) {
          playerFrame.src = `https://www.facebook.com/plugins/video.php?height=720&href=${encodeURIComponent(item.url)}&show_text=false&width=405&t=0`;
        }

        if (typeof player.showModal === 'function') {
          player.showModal();
        }
      });
    });
  }

  function closePlayer() {
    if (playerFrame) playerFrame.src = '';
    player?.close();
  }
  playerClose?.addEventListener('click', closePlayer);
  player?.addEventListener('click', (e) => {
    if (e.target === player) closePlayer();
  });

  // ====================================================
  // 7. STAY & TOUR COST ESTIMATOR
  // ====================================================
  const cRoom = document.getElementById('cRoom');
  const cNights = document.getElementById('cNights');
  const cCount = document.getElementById('cCount');
  const cBoat = document.getElementById('cBoat');
  const calcTotal = document.getElementById('calcTotal');
  const calcWaBtn = document.getElementById('calcWaBtn');

  function updateCostEstimate() {
    if (!cRoom || !cNights || !cCount || !cBoat || !calcTotal) return;
    const rate = parseInt(cRoom.value, 10) || 2200;
    const nights = parseInt(cNights.value, 10) || 1;
    const rooms = parseInt(cCount.value, 10) || 1;
    const boat = parseInt(cBoat.value, 10) || 0;

    const total = (rate * nights * rooms) + boat;
    const isEn = currentLang === 'en';

    calcTotal.textContent = isEn ? `৳ ${total.toLocaleString()}` : `৳ ${total.toLocaleString()}`;

    // Pop animation
    calcTotal.classList.remove('pop');
    void calcTotal.offsetWidth;
    calcTotal.classList.add('pop');

    if (calcWaBtn) {
      const roomName = cRoom.options[cRoom.selectedIndex].text;
      const boatName = cBoat.options[cBoat.selectedIndex].text;
      const msg = isEn
        ? `Hello Motel George Rangamati,\n\n*Estimated Booking Inquiry:*\n- Room: ${roomName}\n- Nights: ${nights}\n- Rooms: ${rooms}\n- Boat Tour: ${boatName}\n- Estimated Total: ৳ ${total.toLocaleString()}\n\nPlease confirm availability!`
        : `আসসালামু আলাইকুম Motel George Rangamati,\n\n*বাজেট হিসাব অনুযায়ী রুম বুকিং কোটেশন:*\n- রুম: ${roomName}\n- রাত সংখ্যা: ${nights}\n- রুম সংখ্যা: ${rooms}\n- বোট ক্রুজ: ${boatName}\n- আনুমানিক মোট: ৳ ${total.toLocaleString()}\n\nরুম খালি আছে কিনা জানাবেন।`;

      calcWaBtn.href = `https://wa.me/8801795342854?text=${encodeURIComponent(msg)}`;
    }
  }

  cRoom?.addEventListener('change', updateCostEstimate);
  cNights?.addEventListener('change', updateCostEstimate);
  cCount?.addEventListener('change', updateCostEstimate);
  cBoat?.addEventListener('change', updateCostEstimate);
  updateCostEstimate();

  // ====================================================
  // 8. QUICK RESERVATION BAR FORM
  // ====================================================
  const qbForm = document.getElementById('qbForm');
  qbForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const inDate = document.getElementById('qbIn')?.value || 'Upcoming';
    const outDate = document.getElementById('qbOut')?.value || 'Upcoming';
    const roomType = document.getElementById('qbRoom')?.value || 'Deluxe Lake View';
    const guests = document.getElementById('qbGuests')?.value || '2';
    const isEn = currentLang === 'en';

    const msg = isEn
      ? `Hello Motel George Rangamati,\n\n*Booking Request:*\n- Check-in: ${inDate}\n- Check-out: ${outDate}\n- Room Type: ${roomType}\n- Guests: ${guests}\n\nPlease check room availability for me!`
      : `আসসালামু আলাইকুম Motel George Rangamati,\n\n*রুম রিজার্ভেশন রিকোয়েস্ট:*\n- চেক-ইন: ${inDate}\n- চেক-আউট: ${outDate}\n- রুমের ধরন: ${roomType}\n- অতিথি: ${guests}\n\nদয়া করে রুম খালি আছে কিনা জানাবেন।`;

    window.open(`https://wa.me/8801795342854?text=${encodeURIComponent(msg)}`, '_blank');
  });

  // Set default dates for quick booking (Tomorrow & Day after)
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 3);

  const qbIn = document.getElementById('qbIn');
  const qbOut = document.getElementById('qbOut');
  if (qbIn && !qbIn.value) qbIn.value = tomorrow.toISOString().split('T')[0];
  if (qbOut && !qbOut.value) qbOut.value = dayAfter.toISOString().split('T')[0];

  // ====================================================
  // 9. INSTANT BILINGUAL TRANSLATION (BN <-> EN)
  // ====================================================
  const langButtons = document.querySelectorAll('.lang button');

  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('motel_lang', lang);

    langButtons.forEach(btn => {
      btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
    });

    document.querySelectorAll('[data-en]').forEach(el => {
      if (!el.dataset.bn) {
        el.dataset.bn = el.innerHTML;
      }
      el.innerHTML = (lang === 'en') ? el.dataset.en : el.dataset.bn;
    });

    // Re-render hero card
    const currentRoom = FEATURED_ROOMS[currentHeroIdx];
    if (currentRoom) {
      renderHeroCard(currentRoom, lang === 'en');
    }

    // Re-render rooms & reels
    const activeChip = document.querySelector('.chips button[aria-pressed="true"]');
    renderRooms(activeChip ? activeChip.dataset.filter : 'all');
    renderReels();
    updateCostEstimate();

    // If modal is open, re-render
    if (currentModalRoom && roomModal?.open) {
      openRoomModal(currentModalRoom);
    }
  }

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // ====================================================
  // 10. MOBILE DRAWER NAVIGATION
  // ====================================================
  const menuBtn = document.querySelector('.menu-btn');
  const drawer = document.getElementById('drawer');
  const drawerClose = document.querySelector('.drawer-close');

  function openDrawer() {
    if (!drawer) return;
    drawer.hidden = false;
    menuBtn?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.hidden = true;
    menuBtn?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  menuBtn?.addEventListener('click', openDrawer);
  drawerClose?.addEventListener('click', closeDrawer);
  drawer?.addEventListener('click', (e) => {
    if (e.target === drawer) closeDrawer();
  });
  drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));

  // ====================================================
  // 11. LEAD INQUIRY FORM (Straight to WhatsApp)
  // ====================================================
  const leadForm = document.getElementById('leadForm');
  leadForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('fName')?.value.trim() || '';
    const phone = document.getElementById('fPhone')?.value.trim() || '';
    const roomType = document.getElementById('fRoomType')?.value || '';
    const date = document.getElementById('fDate')?.value || '';
    const note = document.getElementById('fNote')?.value.trim() || '';
    const isEn = currentLang === 'en';

    if (!name || !phone) {
      alert(isEn ? 'Please provide your name and phone number.' : 'অনুগ্রহ করে আপনার নাম ও ফোন নম্বর লিখুন।');
      return;
    }

    const msg = isEn
      ? `Hello Motel George Residential Rangamati,\n\n*Guest Inquiry:*\n- Name: ${name}\n- Phone: ${phone}\n- Room Type: ${roomType}\n- Date: ${date}\n- Special Requests: ${note}\n\n(Sent via Website Inquiry)`
      : `আসসালামু আলাইকুম Motel George Rangamati,\n\n*রুম বুকিং অনুসন্ধান:*\n- নাম: ${name}\n- মোবাইল: ${phone}\n- রুমের ধরন: ${roomType}\n- ভ্রমণের তারিখ: ${date}\n- বিশেষ নোট: ${note}\n\n(ওয়েবসাইট থেকে প্রেরিত)`;

    window.open(`https://wa.me/8801795342854?text=${encodeURIComponent(msg)}`, '_blank');
  });

  // ====================================================
  // 12. SMOOTH SCROLL REVEALS
  // ====================================================
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  }

  // ====================================================
  // INITIALIZATION
  // ====================================================
  setHeroRoom(0, false);
  startHeroAutoSlide();
  renderRooms('all');
  renderReels();
  if (currentLang === 'en') {
    setLanguage('en');
  }

})();
