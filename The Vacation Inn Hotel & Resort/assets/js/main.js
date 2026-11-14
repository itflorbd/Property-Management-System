/**
 * The Vacation Inn Hotel & Resort — Bandarban
 * Interactive Engine: Dynamic Hero Crossfade, Indicator-Free Auto-Sliding Room Card,
 * Lightbox Modals, Live Cost & Tour Estimator, Authentic Facebook Reels, and Bilingual Translation.
 */

(function () {
  'use strict';

  // ====================================================
  // 1. VERIFIED ROOMS & SUITES DATASET
  // ====================================================
  const ROOMS = [
    {
      id: 1,
      type: 'couple',
      featured: true,
      tagBn: 'প্রিমিয়াম কাপল এসি',
      tagEn: 'Premium Couple AC',
      featuredTagBn: 'পাহাড় ভিউ স্পেশাল',
      featuredTagEn: 'Misty Hill Special',
      heroBg: 'assets/gen/hero-bandarban.jpg',
      img: 'assets/gen/room-couple.jpg',
      locBn: 'বান্দরবান-কেরানীহাট হাইওয়ে, জথ খামার',
      locEn: 'Bandarban-Keranihat Highway, Bandarban',
      titleBn: 'প্রিমিয়াম কাপল এসি রুম (প্রাইভেট হিল ভিউ ব্যালকনি)',
      titleEn: 'Premium Couple AC Room with Private Hill View Balcony',
      priceBn: '৳ ২,৫০০ / রাত',
      priceEn: '৳ 2,500 / night',
      specsBn: ['১ কিং সাইজ বেড', 'মেঘ ও পাহাড় ভিউ ব্যালকনি', 'সাইলেন্ট এসি ও ওয়াই-ফাই', 'হট ওয়াটার গিজার বাথরুম'],
      specsEn: ['1 King Size Bed', 'Misty Mountain Balcony', 'Silent Split AC & Wi-Fi', 'Hot Water Geyser Bath'],
      descBn: 'বান্দরবানের কুয়াশাচ্ছন্ন পাহাড় ও মেঘের রূপ উপভোগ করার জন্য আমাদের সবচেয়ে জনপ্রিয় রোমান্টিক রুম। বড় গ্লাস ডোর, কাঠের ব্যালকনি, সাউন্ডপ্রুফ এসি, পরিষ্কার বিছানা ও ২৪ ঘণ্টা রুম সার্ভিস।',
      descEn: 'Our most sought-after boutique hill retreat for couples. Features floor-to-ceiling balcony glass doors overlooking foggy green valleys, plush king bedding, whisper-quiet AC, and 24/7 personalized care.',
      phone: '+8801612505060'
    },
    {
      id: 2,
      type: 'family',
      featured: true,
      tagBn: 'সুপার ডিলাক্স ফ্যামিলি',
      tagEn: 'Super Deluxe Family',
      featuredTagBn: 'ফ্যামিলি ফেভারিট',
      featuredTagEn: 'Family Favorite',
      heroBg: 'assets/gen/room-family.jpg',
      img: 'assets/gen/room-family.jpg',
      locBn: 'বান্দরবান-কেরানীহাট হাইওয়ে, জথ খামার',
      locEn: 'Bandarban-Keranihat Highway, Bandarban',
      titleBn: 'সুপার ডিলাক্স এসি ফ্যামিলি স্যুট (৪-৫ জন)',
      titleEn: 'Super Deluxe AC Family Suite (4-5 Guests)',
      priceBn: '৳ ৩,৫০০ / রাত',
      priceEn: '৳ 3,500 / night',
      specsBn: ['২টি বড় ডাবল বেড', 'প্যানোরামিক ব্যালকনি', 'স্প্লিট এসি ও স্মার্ট টিভি', 'সিটিং লাউঞ্জ ও ওয়ারড্রব'],
      specsEn: ['2 Queen Beds', 'Panoramic Hill Balcony', 'Split AC & Smart TV', 'Sitting Lounge & Wardrobe'],
      descBn: 'পরিবার বা ৪-৫ জনের ফ্রেন্ডস গ্রুপের জন্য তৈরি অত্যন্ত প্রশস্ত ও রাজকীয় স্যুট। দুটি বড় কমফোর্টেবল বিছানা, আধুনিক কাঠের ইন্টেরিয়র, বাচ্চাদের জন্য নিরাপদ পরিবেশ ও ডাইনিং সহায়তা।',
      descEn: 'Generously appointed spacious suite tailored for family getaways and travel circles of 4-5 guests. Includes dual plush queen beds, scenic balcony overlooking tropical hills, and private lounge space.',
      phone: '+8801612505060'
    },
    {
      id: 3,
      type: 'couple',
      featured: true,
      tagBn: 'কমফোর্ট কাপল এসি',
      tagEn: 'Comfort Couple AC',
      featuredTagBn: 'বাজেট কাপল',
      featuredTagEn: 'Budget Couple',
      heroBg: 'assets/img/cover.jpg',
      img: 'assets/img/room-couple-fb.jpg',
      locBn: 'বান্দরবান-কেরানীহাট হাইওয়ে, জথ খামার',
      locEn: 'Bandarban-Keranihat Highway, Bandarban',
      titleBn: 'কমফোর্ট এসি কাপল বেডরুম',
      titleEn: 'Comfort AC Couple Bed Room',
      priceBn: '৳ ২,০০০ / রাত',
      priceEn: '৳ 2,000 / night',
      specsBn: ['১ ডাবল বেড', 'পাহাড়ি বাতাসের জানালা', 'স্প্লিট এসি', 'হাই-স্পিড ওয়াই-ফাই'],
      specsEn: ['1 Double Bed', 'Scenic Hill Window', 'Split AC Unit', 'High-Speed Wi-Fi'],
      descBn: 'কাপল ও বাজেট সচেতন পর্যটকদের জন্য আরামদায়ক ও রুচিশীল রুম। পরিচ্ছন্ন সুতি চাদর, সাইলেন্ট কুলিং, ব্যাকআপ জেনারেটর পাওয়ার এবং শান্ত পাহাড়ি পরিবেশ।',
      descEn: 'Cozy and delightful air-conditioned room crafted for couples exploring Bandarban. Spotless white linen, silent AC cooling, 24/7 generator backup, and high-speed Wi-Fi.',
      phone: '+8801612505060'
    },
    {
      id: 4,
      type: 'budget',
      featured: false,
      tagBn: 'ইকোনমি নন-এসি',
      tagEn: 'Economy Non-AC',
      featuredTagBn: 'সাশ্রয়ী স্টে',
      featuredTagEn: 'Budget Stay',
      heroBg: 'assets/gen/tour-nilgiri.jpg',
      img: 'assets/img/room-interior-fb.jpg',
      locBn: 'বান্দরবান-কেরানীহাট হাইওয়ে, জথ খামার',
      locEn: 'Bandarban-Keranihat Highway, Bandarban',
      titleBn: 'ইকোনমি নন-এসি ডাবল বেডরুম',
      titleEn: 'Economy Non-AC Double Bed Room',
      priceBn: '৳ ১,৪০০ / রাত',
      priceEn: '৳ 1,400 / night',
      specsBn: ['১ ডাবল বেড', 'বাতাসযুক্ত পরিচ্ছন্ন পরিবেশ', 'এটাচড বাথরুম', 'ব্যাকপ্যাকার ফ্রেন্ডলি'],
      specsEn: ['1 Double Bed', 'Naturally Breezy & Clean', 'Attached Bathroom', 'Backpacker Friendly'],
      descBn: 'ব্যাকপ্যাকার, ছাত্র ও ট্র্যাকারদের জন্য সেরা সাশ্রয়ী অপশন। কম খরচে পরিষ্কার বিছানা, নিরাপদ পরিবেশ ও বান্দরবানের দর্শনীয় স্থানে যাওয়ার জিপ বুকিং সুবিধা।',
      descEn: 'Ideal low-cost option for backpackers, student groups, and trekkers seeking clean, secure, and hassle-free accommodation in Bandarban Sadar.',
      phone: '+8801612505060'
    },
    {
      id: 5,
      type: 'deluxe',
      featured: true,
      tagBn: 'ভিআইপি প্যানোরামিক স্যুট',
      tagEn: 'VIP Panoramic Suite',
      featuredTagBn: 'ভিআইপি লাক্সারি',
      featuredTagEn: 'VIP Luxury',
      heroBg: 'assets/img/exterior-night.jpg',
      img: 'assets/img/exterior-night.jpg',
      locBn: 'বান্দরবান-কেরানীহাট হাইওয়ে, জথ খামার',
      locEn: 'Bandarban-Keranihat Highway, Bandarban',
      titleBn: 'ভিআইপি প্যানোরামিক হিল ভিউ স্যুট',
      titleEn: 'VIP Panoramic Hill View Suite',
      priceBn: '৳ ৪,২০০ / রাত',
      priceEn: '৳ 4,200 / night',
      specsBn: ['১ কিং বেড + ১ ডিভান', '১৮০° মেঘ ও পাহাড় ভিউ', 'প্রিমিয়াম ইন্টেরিয়র', 'ভিআইপি রুম সার্ভিস'],
      specsEn: ['1 King Bed + 1 Daybed', '180° Mountain View', 'Premium Hardwood Decor', 'VIP Room Service'],
      descBn: 'সর্বোচ্চ আরাম ও আভিজাত্য নিশ্চিত করতে বিশেষ ভিআইপি স্যুট। বিশাল ব্যালকনি থেকে বান্দরবানের সবুজ পাহাড়ের দিগন্তজোড়া দৃশ্য, প্রিমিয়াম বেডিং ও স্পেশাল কেয়ার।',
      descEn: 'The flagship luxury suite at The Vacation Inn. Features expansive private balconies with 180-degree mountain valley vistas, hand-crafted wooden aesthetics, and dedicated butler care.',
      phone: '+8801612505060'
    }
  ];

  // ====================================================
  // 2. VERIFIED FACEBOOK REELS & VIDEOS DATASET
  // ====================================================
  const REELS = [
    {
      titleBn: 'বান্দরবানের পাহাড়ি প্রকৃতির মায়ায় দ্যা ভ্যাকেশন ইন হোটেল অ্যান্ড রিসোর্ট',
      titleEn: 'The Vacation Inn Hotel & Resort — Surrounded by Misty Bandarban Hills',
      views: '100K+',
      tagBn: 'ভাইরাল রিল',
      tagEn: 'Viral Resort Reel',
      img: 'assets/gen/hero-bandarban.jpg',
      url: 'https://www.facebook.com/reel/1472027100557704/'
    },
    {
      titleBn: 'মেঘের কোলে সকালের অপরূপ দৃশ্য ও ব্যালকনি ভিউ',
      titleEn: 'Cloud-Top Morning Vistas & Balcony Views at Vacation Inn',
      views: '41K+',
      tagBn: 'পাহাড় ও মেঘ',
      tagEn: 'Misty Mountains',
      img: 'assets/gen/tour-nilgiri.jpg',
      url: 'https://www.facebook.com/reel/4512312585672284/'
    },
    {
      titleBn: 'রিসোর্টের মনোরম রাতের পরিবেশ ও আলোকসজ্জা',
      titleEn: 'Charming Night Ambience & Highway Illumination at Vacation Inn',
      views: '13K+',
      tagBn: 'নাইট ভিউ',
      tagEn: 'Night Ambience',
      img: 'assets/img/exterior-night.jpg',
      url: 'https://www.facebook.com/reel/1460623972679987/'
    },
    {
      titleBn: 'প্রিমিয়াম কাপল ও ফ্যামিলি রুমের ভেতরকার সাজসজ্জা ও পরিবেশ',
      titleEn: 'Inside Look at Premium Couple & Family Suites at Vacation Inn',
      views: '4.8K+',
      tagBn: 'রুম ট্যুর',
      tagEn: 'Room Tour',
      img: 'assets/gen/room-couple.jpg',
      url: 'https://www.facebook.com/reel/991619106828635/'
    }
  ];

  let currentLang = localStorage.getItem('vacationinn_lang') || 'bn';

  // ====================================================
  // 3. HERO AUTO-SLIDER & BACKGROUND CROSSFADE (No Indicators)
  // ====================================================
  const FEATURED_ROOMS = ROOMS.filter(r => r.featured);
  let currentHeroIdx = 0;
  let activeHeroLayer = 'A';
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
      rmCall.href = `tel:${room.phone || '+8801612505060'}`;
      const span = rmCall.querySelector('span');
      if (span) span.textContent = isEn ? 'Call Reception' : 'রিসেপশনে কল';
    }
    if (rmWa) {
      const title = isEn ? room.titleEn : room.titleBn;
      rmWa.href = `https://wa.me/8801612505060?text=${encodeURIComponent(
        (isEn ? 'Hello The Vacation Inn Bandarban, I want to book: ' : 'আসসালামু আলাইকুম The Vacation Inn Bandarban, আমি বুক করতে চাই: ') + title
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
            <a href="tel:${r.phone}" class="btn-call" data-stop="true" aria-label="Call for ${isEn ? r.titleEn : r.titleBn}">
              <svg><use href="#i-phone"/></svg>
              <span>${isEn ? 'Call' : 'কল করুন'}</span>
            </a>
            <a href="https://wa.me/8801612505060?text=${encodeURIComponent((isEn ? 'Hello The Vacation Inn Bandarban, I want to book: ' : 'আসসালামু আলাইকুম The Vacation Inn, আমি বুক করতে চাই: ') + (isEn ? r.titleEn : r.titleBn))}" target="_blank" rel="noopener" class="btn-wa" data-stop="true" aria-label="WhatsApp Booking for ${isEn ? r.titleEn : r.titleBn}">
              <svg><use href="#i-wa"/></svg>
              <span>${isEn ? 'WhatsApp' : 'WhatsApp'}</span>
            </a>
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

      // Explicit stopPropagation on action buttons
      card.querySelectorAll('[data-stop="true"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
        });
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

  // Slider navigation
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
          playerWa.href = `https://wa.me/8801612505060?text=${encodeURIComponent((isEn ? 'Hello The Vacation Inn Bandarban, I watched this reel on your website: ' : 'আসসালামু আলাইকুম The Vacation Inn, আপনাদের ওয়েবসাইটের এই রিলটি দেখলাম: ') + title + ' (' + item.url + ')')}`;
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
  const cTour = document.getElementById('cTour');
  const calcTotal = document.getElementById('calcTotal');
  const calcWaBtn = document.getElementById('calcWaBtn');

  function updateCostEstimate() {
    if (!cRoom || !cNights || !cCount || !cTour || !calcTotal) return;
    const rate = parseInt(cRoom.value, 10) || 2500;
    const nights = parseInt(cNights.value, 10) || 1;
    const rooms = parseInt(cCount.value, 10) || 1;
    const tour = parseInt(cTour.value, 10) || 0;

    const total = (rate * nights * rooms) + tour;
    const isEn = currentLang === 'en';

    calcTotal.textContent = `৳ ${total.toLocaleString()}`;

    // Pop animation
    calcTotal.classList.remove('pop');
    void calcTotal.offsetWidth;
    calcTotal.classList.add('pop');

    if (calcWaBtn) {
      const roomName = cRoom.options[cRoom.selectedIndex].text;
      const tourName = cTour.options[cTour.selectedIndex].text;
      const msg = isEn
        ? `Hello The Vacation Inn Hotel & Resort Bandarban,\n\n*Estimated Booking Inquiry:*\n- Room: ${roomName}\n- Nights: ${nights}\n- Rooms: ${rooms}\n- Bandarban Tour: ${tourName}\n- Estimated Total: ৳ ${total.toLocaleString()}\n\nPlease confirm availability!`
        : `আসসালামু আলাইকুম The Vacation Inn Hotel & Resort Bandarban,\n\n*বাজেট হিসাব অনুযায়ী বুকিং কোটেশন:*\n- রুম: ${roomName}\n- রাত: ${nights}\n- রুম সংখ্যা: ${rooms}\n- বান্দরবান ট্যুর প্যাকেজ: ${tourName}\n- আনুমানিক মোট: ৳ ${total.toLocaleString()}\n\nরুম খালি আছে কিনা জানাবেন।`;

      calcWaBtn.href = `https://wa.me/8801612505060?text=${encodeURIComponent(msg)}`;
    }
  }

  cRoom?.addEventListener('change', updateCostEstimate);
  cNights?.addEventListener('change', updateCostEstimate);
  cCount?.addEventListener('change', updateCostEstimate);
  cTour?.addEventListener('change', updateCostEstimate);
  updateCostEstimate();

  // ====================================================
  // 8. QUICK RESERVATION BAR FORM
  // ====================================================
  const qbForm = document.getElementById('qbForm');
  qbForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const inDate = document.getElementById('qbIn')?.value || 'Upcoming';
    const outDate = document.getElementById('qbOut')?.value || 'Upcoming';
    const roomType = document.getElementById('qbRoom')?.value || 'Premium Couple Room';
    const guests = document.getElementById('qbGuests')?.value || '2';
    const isEn = currentLang === 'en';

    const msg = isEn
      ? `Hello The Vacation Inn Bandarban,\n\n*Quick Reservation Request:*\n- Check-in: ${inDate}\n- Check-out: ${outDate}\n- Room Type: ${roomType}\n- Guests: ${guests}\n\nPlease check room availability for me!`
      : `আসসালামু আলাইকুম The Vacation Inn Bandarban,\n\n*রুম রিজার্ভেশন রিকোয়েস্ট:*\n- চেক-ইন: ${inDate}\n- চেক-আউট: ${outDate}\n- রুমের ধরন: ${roomType}\n- অতিথি: ${guests}\n\nদয়া করে রুম খালি আছে কিনা জানাবেন।`;

    window.open(`https://wa.me/8801612505060?text=${encodeURIComponent(msg)}`, '_blank');
  });

  // Set default dates
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
    localStorage.setItem('vacationinn_lang', lang);

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
      ? `Hello The Vacation Inn Hotel & Resort Bandarban,\n\n*Guest Inquiry:*\n- Name: ${name}\n- Phone: ${phone}\n- Room Type: ${roomType}\n- Travel Date: ${date}\n- Special Note: ${note}\n\n(Sent via Website Inquiry)`
      : `আসসালামু আলাইকুম The Vacation Inn Bandarban,\n\n*রুম বুকিং অনুসন্ধান:*\n- নাম: ${name}\n- মোবাইল: ${phone}\n- রুমের ধরন: ${roomType}\n- ভ্রমণের তারিখ: ${date}\n- বিশেষ নোট: ${note}\n\n(ওয়েবসাইট থেকে প্রেরিত)`;

    window.open(`https://wa.me/8801612505060?text=${encodeURIComponent(msg)}`, '_blank');
  });

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
