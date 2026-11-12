/**
 * Nexus Property Management — Modern, High-Performance Interactive Engine
 * Highlights Sylhet's authentic nature visuals, real Facebook listings & reels,
 * interactive land unit calculator, auto-sliding hero background & featured card,
 * rich property details modal, and instant bilingual translation.
 */

(function () {
  'use strict';

  // ====================================================
  // VERIFIED SYLHET PROPERTY LISTINGS (With nature & urban visuals)
  // ====================================================
  const PROPERTIES = [
    {
      id: 1,
      type: 'commercial',
      featured: true,
      tagBn: 'কমার্শিয়াল প্লট',
      tagEn: 'Commercial Plot',
      featuredTagBn: 'ফিচার্ড কমার্শিয়াল',
      featuredTagEn: 'Featured Commercial',
      heroBg: 'assets/gen/commercial.jpg',
      img: 'assets/gen/commercial.jpg',
      locBn: 'সুবিদবাজার লন্ডনী রোড, সিলেট',
      locEn: 'Londoni Road, Subidbazar, Sylhet',
      titleBn: 'বিশাল রাস্তার সাথে ৪ ডেসিমেল কমার্শিয়াল কর্নার প্রপার্টি',
      titleEn: '4 Decimal Commercial Corner Plot on Main Londoni Road',
      priceBn: '৳ ১ কোটি ৩০ লাখ',
      priceEn: '৳ 1.30 Crore',
      specsBn: ['৪ শতক জমি', 'প্রধান লন্ডনী রোড', '১০০% নির্ভেজাল দলিল', 'বিদ্যুৎ ও পানি প্রস্তুত'],
      specsEn: ['4 Decimals Area', 'Main Londoni Road', '100% Clear Title', 'Power & Water Ready'],
      descBn: 'সিলেট সুবিদবাজার মেইন লন্ডনী রোডের সাথে ৪ ডেসিমেল কমার্শিয়াল কর্নার প্লট। যেকোনো বাণিজ্যিক প্রতিষ্ঠান, ব্যাংক, শোরুম বা বহুতল ভবনের জন্য অত্যন্ত উপযোগী। সকল কাগজপত্র ও নামজারি ১০০% সম্পন্ন।',
      descEn: 'Prime 4 Decimal commercial corner plot situated directly on Londoni Road, Subidbazar, Sylhet. Ideal for commercial headquarters, bank branch, showroom or multi-story complex. 100% verified legal documents.',
      phone: '01753044910'
    },
    {
      id: 2,
      type: 'land',
      featured: true,
      tagBn: 'রেডি প্লট',
      tagEn: 'Ready Plot',
      featuredTagBn: 'চা-বাগান ভিউ প্লট',
      featuredTagEn: 'Tea Garden Plot',
      heroBg: 'assets/gen/teagarden-estate.jpg',
      img: 'assets/gen/teagarden-estate.jpg',
      locBn: 'সুরমা আবাসিক, আখালিয়া, সিলেট',
      locEn: 'Surma R/A, Akhalia, Sylhet',
      titleBn: 'আখালিয়া সুরমা আবাসিকের ভেতর ১০ ডেসিমেল স্কয়ার প্লট',
      titleEn: '10 Decimal Square Ready Plot inside Surma R/A',
      priceBn: '৳ ১০ লাখ / শতক',
      priceEn: '৳ 10 Lakh / Dec',
      specsBn: ['১০ শতক স্কয়ার প্লট', '২৫ ফুট চওড়া রাস্তা', 'খতিয়ান ও নামজারি রেডি', 'গ্যাস ও বিদ্যুৎ সুবিধা'],
      specsEn: ['10 Decimals Plot', '25 ft Access Road', 'Mutation & Title Ready', 'Gas & Electricity Area'],
      descBn: 'সিলেট আখালিয়া সুরমা আবাসিক এলাকার মনোরম সবুজ পরিবেশে ১০ ডেসিমেল স্কয়ার প্লট। চারদিকে পাহাড় ও চা-বাগানের খোলা বাতাস, ভিআইপি আবাসিক পাড়া। বিলাসবহুল ডুপ্লেক্স বা ভিলা নির্মাণের জন্য প্রস্তুত।',
      descEn: '10 Decimal square ready residential plot inside premium Surma Residential Area, Akhalia, Sylhet. Serene greenery, tea-garden views, 25ft wide road frontage, ready for luxury duplex or villa.',
      phone: '01851659285'
    },
    {
      id: 3,
      type: 'land',
      featured: true,
      tagBn: 'বাগান ও রিসোর্ট',
      tagEn: 'Resort / Orchard',
      featuredTagBn: 'প্রাকৃতিক লেক বাংলো',
      featuredTagEn: 'Lakefront Orchard',
      heroBg: 'assets/gen/resort-nature.jpg',
      img: 'assets/gen/resort-nature.jpg',
      locBn: 'সাহেবের বাজার, সিলেট সদর',
      locEn: 'Shaheber Bazar, Sylhet Sadar',
      titleBn: '২০ শতক ফলদ বাগান ও প্রাকৃতিক লেক সংলগ্ন অবকাশ বাংলো প্লট',
      titleEn: '20 Decimal Lush Orchard Land with Natural Lake Pond',
      priceBn: '৳ ২ লাখ / শতক',
      priceEn: '৳ 2 Lakh / Dec',
      specsBn: ['২০ শতক বিশাল এলাকা', 'পাকা রাস্তা সংলগ্ন', 'নিষ্কণ্টক মালিকানা', 'প্রাকৃতিক লেক ও বাগান'],
      specsEn: ['20 Decimals Area', 'Paved Road Access', 'Clear Freehold Title', 'Natural Lily Lake'],
      descBn: 'সিলেট সদর সাহেবের বাজারে ২০ ডেসিমেল সুবিশাল জায়গা, প্রাকৃতিক শাপলা লেক ও শতাধিক ফলদ গাছপালা সমৃদ্ধ। পারিবারিক অবকাশ বাংলো, রিসোর্ট বা খামারবাড়ির জন্য অপূর্ব স্বর্গীয় স্থান।',
      descEn: '20 Decimals picturesque orchard land adjacent to natural lily lake in Shaheber Bazar, Sylhet Sadar. Surrounded by rolling greenery, ideal for holiday resort, eco-farmhouse or private villa retreat.',
      phone: '01772843532'
    },
    {
      id: 4,
      type: 'house',
      featured: true,
      tagBn: 'নদী সংলগ্ন বাড়ি',
      tagEn: 'Riverside House',
      featuredTagBn: 'রিভারভিউ রেসিডেন্স',
      featuredTagEn: 'Riverside Residence',
      heroBg: 'assets/gen/riverside-luxury.jpg',
      img: 'assets/gen/riverside-luxury.jpg',
      locBn: 'টুলটিকর মেইন রোড, সিসিক',
      locEn: 'Tultikar Main Road, SCC',
      titleBn: 'টুলটিকর মেইন রোডে ৩.৭ ডেসিমেল জমিতে বাড়ি (২টি রাস্তা)',
      titleEn: '3.7 Decimal House with Dual Road Frontage on Main Road',
      priceBn: '৳ ৯০ লাখ',
      priceEn: '৳ 90 Lakh',
      specsBn: ['৩.৭ শতক জমি ও বাড়ি', '২টি রাস্তার কর্নার', 'সিসিক এরিয়া', 'সব ইউটিলিটি রানিং'],
      specsEn: ['3.7 Decimals Land', 'Dual Road Corner', 'City Corp Area', 'All Utilities Connected'],
      descBn: 'সিলেট সিটি কর্পোরেশনের অন্তর্ভুক্ত টুলটিকর মেইন রোডে ৩.৭ ডেসিমেল জমির উপর সুন্দরভাবে নির্মিত বাড়ি। কর্নার প্লট হওয়ায় ২টি রাস্তার সংযোগ সুবিধা রয়েছে। খোলামেলা নদী ও প্রকৃতির মনোরম স্নিগ্ধ পরিবেশ।',
      descEn: 'Beautifully constructed residence on 3.7 Decimals land on Tultikar Main Road, SCC. Dual road corner frontage, pristine riverside atmosphere, city corporation utilities active.',
      phone: '01706296449'
    },
    {
      id: 5,
      type: 'house',
      featured: true,
      tagBn: '৫ তলা ভবন',
      tagEn: '5-Story Building',
      featuredTagBn: '১০ ইউনিট ভবন (১০ গ্যাস)',
      featuredTagEn: '10-Unit 5-Story (10 Gas)',
      heroBg: 'assets/gen/building5story.jpg',
      img: 'assets/gen/building5story.jpg',
      locBn: 'আখালিয়া এলাকা, সিলেট',
      locEn: 'Akhalia, Sylhet',
      titleBn: '৭ ডেসিমেল জায়গায় ৫ তলা ভবন (১০ ইউনিট ও ১০টি লাইনের গ্যাস)',
      titleEn: '5-Story Building with 10 Units and 10 Gas Connections',
      priceBn: 'সরাসরি মালিক পক্ষ',
      priceEn: 'Direct Owner Deal',
      specsBn: ['৭ শতক জায়গা', '১০টি সম্পূর্ণ ফ্ল্যাট', '১০টি গ্যাস সংযোগ', 'মাসিক নিশ্চিত আয়'],
      specsEn: ['7 Decimals Plot', '10 Complete Flats', '10 Gas Lines', 'Instant Rental Yield'],
      descBn: 'সিলেট আখালিয়ায় ৭ ডেসিমেল জমির ওপর ৫ তলা আধুনিক রেসিডেন্সিয়াল ভবন। প্রতিটি তলায় দুটি করে মোট ১০টি সম্পূর্ণ ইউনিট। বিশেষ আকর্ষণ: ১০টি অনুমোদিত লাইনের গ্যাস সংযোগ ও রানিং নিশ্চিত মাসিক ভাড়া আয়।',
      descEn: 'Modern 5-story residential building on 7 Decimals land in Akhalia, Sylhet. 10 complete 2-bed units, 10 authorized piped gas lines, fully tenanted with instant high monthly rental yield.',
      phone: '01762844602'
    },
    {
      id: 6,
      type: 'house',
      featured: false,
      tagBn: 'রেডি কলোনি',
      tagEn: 'Rental Colony',
      featuredTagBn: 'রানিং ইনকাম কলোনি',
      featuredTagEn: 'Rental Colony',
      heroBg: 'assets/img/card-building.jpg',
      img: 'assets/img/card-building.jpg',
      locBn: 'শেখঘাট (১০ নং ওয়ার্ড), সিলেট',
      locEn: 'Sheikhghat (Ward 10), Sylhet',
      titleBn: 'সিলেট শেখঘাট এলাকায় চলমান আয়ের রেডি কলোনি সরাসরি বিক্রি',
      titleEn: 'Active Income-Generating Ready Colony in Sheikhghat',
      priceBn: 'আলোচনা সাপেক্ষে',
      priceEn: 'Negotiable',
      specsBn: ['১০ নং ওয়ার্ড সিসিক', 'রেডি ভাড়াটিয়ারা বসবাসরত', 'খতিয়ান শতভাগ ওকে', 'সরাসরি হস্তান্তর'],
      specsEn: ['Ward 10 SCC Area', 'Fully Occupied Units', 'Clear Verification', 'Direct Handover'],
      descBn: 'সিলেট শেখঘাট এলাকায় রানিং আয়ের রেডি কলোনি। প্রতিমাসে নিশ্চিত ভাড়া আসে এবং এলাকাটি শহরের কেন্দ্রে অবস্থিত। বিনিয়োগকারীদের জন্য অত্যন্ত লাভজনক প্রপার্টি।',
      descEn: 'Ready rental colony generating steady monthly rental income in prime Sheikhghat, Sylhet. Prime city-center location with zero vacancy, excellent long-term investment asset.',
      phone: '01851659285'
    }
  ];

  // ====================================================
  // VERIFIED SYLHET VIDEO REELS (Authentic Facebook Footage)
  // ====================================================
  const REELS = [
    {
      titleBn: 'সিলেট সুবিদবাজার লন্ডনী রোডে ৪ ডেসিমেল কমার্শিয়াল কর্নার প্রপার্টি',
      titleEn: 'Subidbazar Londoni Road 4 Decimal Commercial Corner Plot',
      views: '132K+',
      priceBn: '৳ ১.৩০ কোটি',
      priceEn: '৳ 1.30 Cr',
      img: 'assets/gen/commercial.jpg',
      url: 'https://www.facebook.com/reel/1074154489010712/'
    },
    {
      titleBn: 'রেডি কলোনি বিক্রি সিলেট শেখঘাট (১০ নং ওয়ার্ড)',
      titleEn: 'Ready Rental Colony Direct Sale in Sheikhghat',
      views: '166K+',
      priceBn: 'রেডি ইনকাম',
      priceEn: 'Ready Yield',
      img: 'assets/img/card-building.jpg',
      url: 'https://www.facebook.com/reel/925332896656998/'
    },
    {
      titleBn: 'সিলেট সোনাতলা বাজার সংলগ্ন ১০ ডেসিমেল জায়গায় বাড়ি',
      titleEn: 'Sonatola Bazar 10 Decimal Land with 2-Story House',
      views: '54K+',
      priceBn: '৳ ৮০ লাখ',
      priceEn: '৳ 80 Lakh',
      img: 'assets/gen/hero-nature.jpg',
      url: 'https://www.facebook.com/61573882153742/videos/928116682964007/'
    },
    {
      titleBn: '৭ ডেসিমেল জায়গায় ৫ তলা ১০ ইউনিটের ভবন (১০টি লাইনের গ্যাস)',
      titleEn: '7 Decimals 5-Story 10-Unit Building with 10 Gas Lines',
      views: '14K+',
      priceBn: '১০ গ্যাস লাইন',
      priceEn: '10 Gas Lines',
      img: 'assets/gen/building5story.jpg',
      url: 'https://www.facebook.com/reel/1690390419411831/'
    },
    {
      titleBn: 'আখালিয়া সুরমা আবাসিক এলাকার ভেতর ১০ ডেসিমেল স্কয়ার প্লট',
      titleEn: 'Akhalia Surma Residential 10 Decimal Ready Plot',
      views: '10K+',
      priceBn: '৳ ১০ লাখ / শতক',
      priceEn: '৳ 10L / Dec',
      img: 'assets/gen/teagarden-estate.jpg',
      url: 'https://www.facebook.com/reel/2193556268243436/'
    },
    {
      titleBn: 'টুলটিকর মেইন রোডে ৩.৭ ডেসিমেল জায়গায় ২টি রাস্তার মুখে বাড়ি',
      titleEn: 'Tultikar Main Road 3.7 Decimal House with 2 Access Roads',
      views: '8K+',
      priceBn: '৳ ৯০ লাখ',
      priceEn: '৳ 90 Lakh',
      img: 'assets/gen/riverside-luxury.jpg',
      url: 'https://www.facebook.com/reel/1698167915186195/'
    }
  ];

  let currentLang = localStorage.getItem('nexus_lang') || 'bn';

  // ====================================================
  // 1. HERO AUTO-SLIDER & BACKGROUND CROSSFADE (No Indicators)
  // ====================================================
  const FEATURED_PROPERTIES = PROPERTIES.filter(p => p.featured);
  let currentHeroIdx = 0;
  let activeHeroLayer = 'A'; // alternating layers #heroLayerA and #heroLayerB
  let heroTimer = null;
  const heroCardContainer = document.getElementById('heroCardContainer');
  const heroLayerA = document.getElementById('heroLayerA');
  const heroLayerB = document.getElementById('heroLayerB');

  function renderHeroCard(prop, isEn) {
    if (!heroCardContainer) return;
    const tag = isEn ? (prop.featuredTagEn || prop.tagEn) : (prop.featuredTagBn || prop.tagBn);
    const loc = isEn ? prop.locEn : prop.locBn;
    const title = isEn ? prop.titleEn : prop.titleBn;
    const price = isEn ? prop.priceEn : prop.priceBn;

    heroCardContainer.innerHTML = `
      <article class="hero-card" data-id="${prop.id}">
        <div class="hc-img">
          <img src="${prop.img}" alt="${title}">
          <span class="tag">${tag}</span>
        </div>
        <div class="hc-body">
          <small><svg><use href="#i-pin"/></svg>${loc}</small>
          <h3>${title}</h3>
          <div class="hc-foot">
            <b>${price}</b>
            <span class="go" aria-label="View Details"><svg><use href="#i-right"/></svg></span>
          </div>
        </div>
      </article>
    `;
  }

  function setHeroProperty(index, animate = true) {
    if (!FEATURED_PROPERTIES.length) return;
    currentHeroIdx = (index + FEATURED_PROPERTIES.length) % FEATURED_PROPERTIES.length;
    const prop = FEATURED_PROPERTIES[currentHeroIdx];
    const isEn = currentLang === 'en';

    // 1. Smoothly Crossfade Hero Background between Layer A and Layer B
    const activeLayerEl = (activeHeroLayer === 'A') ? heroLayerA : heroLayerB;
    const nextLayerEl = (activeHeroLayer === 'A') ? heroLayerB : heroLayerA;

    if (nextLayerEl && activeLayerEl) {
      nextLayerEl.style.backgroundImage = `url('${prop.heroBg || prop.img}')`;
      nextLayerEl.classList.add('active');
      activeLayerEl.classList.remove('active');
      activeHeroLayer = (activeHeroLayer === 'A') ? 'B' : 'A';
    }

    // 2. Animate Hero Featured Card (Strict constraint: NO indicators)
    if (animate && heroCardContainer) {
      heroCardContainer.classList.add('anim-fade-out');
      setTimeout(() => {
        renderHeroCard(prop, isEn);
        heroCardContainer.classList.remove('anim-fade-out');
        heroCardContainer.classList.add('anim-fade-in');
        requestAnimationFrame(() => {
          setTimeout(() => {
            heroCardContainer.classList.remove('anim-fade-in');
          }, 300);
        });
      }, 220);
    } else {
      renderHeroCard(prop, isEn);
    }
  }

  function startHeroAutoSlide() {
    stopHeroAutoSlide();
    heroTimer = setInterval(() => {
      setHeroProperty(currentHeroIdx + 1, true);
    }, 4800);
  }

  function stopHeroAutoSlide() {
    if (heroTimer) {
      clearInterval(heroTimer);
      heroTimer = null;
    }
  }

  // Hero Card Click -> Open Modal
  heroCardContainer?.addEventListener('click', () => {
    const prop = FEATURED_PROPERTIES[currentHeroIdx];
    if (prop) openPropModal(prop);
  });

  // Pause auto-sliding on hover, resume on mouse leave
  heroCardContainer?.addEventListener('mouseenter', stopHeroAutoSlide);
  heroCardContainer?.addEventListener('mouseleave', startHeroAutoSlide);

  // ====================================================
  // 2. PROPERTY DETAILS MODAL (Rich Interactive Lightbox)
  // ====================================================
  const propModal = document.getElementById('propModal');
  const pmClose = document.getElementById('pmClose');
  const pmImg = document.getElementById('pmImg');
  const pmTag = document.getElementById('pmTag');
  const pmLoc = document.getElementById('pmLoc');
  const pmTitle = document.getElementById('pmTitle');
  const pmPrice = document.getElementById('pmPrice');
  const pmSpecs = document.getElementById('pmSpecs');
  const pmDesc = document.getElementById('pmDesc');
  const pmCall = document.getElementById('pmCall');
  const pmWa = document.getElementById('pmWa');
  let currentModalProp = null;

  function openPropModal(property) {
    if (!propModal || !property) return;
    currentModalProp = property;
    const isEn = currentLang === 'en';

    if (pmImg) {
      pmImg.src = property.heroBg || property.img;
      pmImg.alt = isEn ? property.titleEn : property.titleBn;
    }
    if (pmTag) pmTag.textContent = isEn ? property.tagEn : property.tagBn;
    if (pmLoc) pmLoc.textContent = isEn ? property.locEn : property.locBn;
    if (pmTitle) pmTitle.textContent = isEn ? property.titleEn : property.titleBn;
    if (pmPrice) pmPrice.textContent = isEn ? property.priceEn : property.priceBn;

    if (pmSpecs) {
      const specs = isEn ? property.specsEn : property.specsBn;
      pmSpecs.innerHTML = (specs || []).map(s => `<span class="pm-spec-pill">${s}</span>`).join('');
    }
    if (pmDesc) {
      pmDesc.textContent = isEn ? property.descEn : property.descBn;
    }
    if (pmCall) {
      pmCall.href = `tel:${property.phone || '01851659285'}`;
      const span = pmCall.querySelector('span');
      if (span) span.textContent = isEn ? 'Call Agent' : 'কল করুন';
    }
    if (pmWa) {
      const title = isEn ? property.titleEn : property.titleBn;
      pmWa.href = `https://wa.me/8801851659285?text=${encodeURIComponent(
        (isEn ? 'Hello Nexus Property, I want full details on: ' : 'আসসালামু আলাইকুম Nexus Property, আমি এই প্রপার্টি সম্পর্কে বিস্তারিত জানতে চাই: ') + title
      )}`;
    }

    if (typeof propModal.showModal === 'function') {
      propModal.showModal();
    }
  }

  function closePropModal() {
    if (propModal) {
      propModal.close();
      currentModalProp = null;
    }
  }

  pmClose?.addEventListener('click', closePropModal);
  propModal?.addEventListener('click', (e) => {
    if (e.target === propModal) closePropModal();
  });

  // ====================================================
  // 3. RENDER PROPERTIES IN HORIZONTAL SLIDER
  // ====================================================
  const propTrack = document.getElementById('propTrack');

  function renderProperties(filter) {
    if (!propTrack) return;
    const isEn = currentLang === 'en';
    const filtered = (filter === 'all') ? PROPERTIES : PROPERTIES.filter(p => p.type === filter);

    propTrack.innerHTML = filtered.map(p => `
      <article class="p-card" data-id="${p.id}" data-type="${p.type}">
        <div class="p-card-img">
          <img src="${p.img}" alt="${isEn ? p.titleEn : p.titleBn}" loading="lazy">
          <span class="tag">${isEn ? p.tagEn : p.tagBn}</span>
        </div>
        <div class="p-card-body">
          <small><svg><use href="#i-pin"/></svg>${isEn ? p.locEn : p.locBn}</small>
          <h3>${isEn ? p.titleEn : p.titleBn}</h3>
          <div class="p-card-price">${isEn ? p.priceEn : p.priceBn}</div>
          <div class="p-card-foot">
            <a href="tel:${p.phone}" class="btn-call" data-stop="true"><svg><use href="#i-phone"/></svg>${isEn ? 'Call' : 'কল'}</a>
            <a href="https://wa.me/8801851659285?text=${encodeURIComponent((isEn ? 'Hello Nexus Property, I am interested in: ' : 'আসসালামু আলাইকুম, আমি আগ্রহী: ') + (isEn ? p.titleEn : p.titleBn))}" target="_blank" rel="noopener" class="btn-wa" data-stop="true"><svg><use href="#i-wa"/></svg>WhatsApp</a>
          </div>
        </div>
      </article>
    `).join('');

    // Attach click listeners to cards (stops propagation for action buttons)
    propTrack.querySelectorAll('.p-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('[data-stop="true"]')) return;
        const id = parseInt(card.dataset.id, 10);
        const prop = PROPERTIES.find(item => item.id === id);
        if (prop) openPropModal(prop);
      });
    });
  }

  // Filter chips
  const filterButtons = document.querySelectorAll('.chips button');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
      renderProperties(btn.dataset.filter);
    });
  });

  // ====================================================
  // 4. RENDER REELS IN HORIZONTAL SLIDER
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
      <article class="r-card" data-idx="${i}">
        <img src="${r.img}" alt="${isEn ? r.titleEn : r.titleBn}" loading="lazy">
        <div class="r-top">
          <span class="r-views"><svg><use href="#i-play"/></svg>${r.views}</span>
        </div>
        <div class="r-play"><svg><use href="#i-play"/></svg></div>
        <div class="r-body">
          <span class="r-price">${isEn ? r.priceEn : r.priceBn}</span>
          <h3>${isEn ? r.titleEn : r.titleBn}</h3>
        </div>
      </article>
    `).join('');

    // Attach click to open video modal
    reelTrack.querySelectorAll('.r-card').forEach(card => {
      card.addEventListener('click', () => {
        const item = REELS[card.dataset.idx];
        if (!item || !player) return;
        const title = isEn ? item.titleEn : item.titleBn;

        if (playerFb) playerFb.href = item.url;
        if (playerWa) {
          playerWa.href = `https://wa.me/8801851659285?text=${encodeURIComponent((isEn ? 'Hello, I watched this video reel on your website: ' : 'আসসালামু আলাইকুম, আপনাদের ওয়েবসাইটের এই ভিডিও রিলটি দেখলাম: ') + title + ' (' + item.url + ')')}`;
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

  // Slider navigation arrow buttons
  document.querySelectorAll('[data-slide]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.slide);
      const dir = parseInt(btn.dataset.dir || '1', 10);
      if (target) {
        target.scrollBy({ left: dir * 320, behavior: 'smooth' });
      }
    });
  });

  // ====================================================
  // 5. SYLHET LAND UNIT CONVERTER
  // 1 Decimal (ডেসিমেল) = 1 Shotok (শতক) = 435.6 sq. ft.
  // 1 Katha (কাঠা) = 720 sq. ft. = ~1.6528 Decimals
  // 1 Bigha (বিঘা) = 20 Katha = 14,400 sq. ft. = ~33.057 Decimals
  // ====================================================
  const calcVal = document.getElementById('calcVal');
  const calcUnit = document.getElementById('calcUnit');
  const oDec = document.getElementById('oDec');
  const oKatha = document.getElementById('oKatha');
  const oSqft = document.getElementById('oSqft');
  const oBigha = document.getElementById('oBigha');

  function updateCalc() {
    if (!calcVal || !calcUnit) return;
    const val = parseFloat(calcVal.value) || 0;
    const factor = parseFloat(calcUnit.value) || 435.6;
    const sqft = val * factor;

    const dec = sqft / 435.6;
    const katha = sqft / 720;
    const bigha = sqft / 14400;

    if (oDec) oDec.textContent = dec ? (dec >= 100 ? Math.round(dec) : dec.toFixed(2)) : '0';
    if (oKatha) oKatha.textContent = katha ? (katha >= 100 ? Math.round(katha) : katha.toFixed(2)) : '0';
    if (oSqft) oSqft.textContent = sqft ? Math.round(sqft).toLocaleString() : '0';
    if (oBigha) oBigha.textContent = bigha ? bigha.toFixed(2) : '0';

    // Micro-interaction: output pop
    document.querySelectorAll('.calc-out div').forEach(box => {
      box.classList.remove('pop');
      void box.offsetWidth;
      box.classList.add('pop');
    });
  }
  calcVal?.addEventListener('input', updateCalc);
  calcUnit?.addEventListener('change', updateCalc);
  updateCalc();

  // ====================================================
  // 6. INSTANT BILINGUAL TRANSLATION (BN <-> EN)
  // ====================================================
  const langButtons = document.querySelectorAll('.lang button');

  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('nexus_lang', lang);

    langButtons.forEach(btn => {
      btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
    });

    document.querySelectorAll('[data-en]').forEach(el => {
      if (!el.dataset.bn) {
        el.dataset.bn = el.innerHTML;
      }
      el.innerHTML = (lang === 'en') ? el.dataset.en : el.dataset.bn;
    });

    // Re-render hero featured card with updated language
    const currentProp = FEATURED_PROPERTIES[currentHeroIdx];
    if (currentProp) {
      renderHeroCard(currentProp, lang === 'en');
    }

    // Re-render properties and reels with updated language
    const activeChip = document.querySelector('.chips button[aria-pressed="true"]');
    renderProperties(activeChip ? activeChip.dataset.filter : 'all');
    renderReels();

    // If modal is open, re-render modal contents in new language
    if (currentModalProp && propModal?.open) {
      openPropModal(currentModalProp);
    }
  }

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // ====================================================
  // 7. MOBILE DRAWER NAVIGATION
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
  // 8. QUICK LEAD CALLBACK FORM (Routes straight to WhatsApp)
  // ====================================================
  const leadForm = document.getElementById('leadForm');
  leadForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('fName')?.value.trim() || '';
    const phone = document.getElementById('fPhone')?.value.trim() || '';
    const need = document.getElementById('fNeed')?.value || '';
    const isEn = currentLang === 'en';

    if (!name || !phone) {
      alert(isEn ? 'Please provide your name and mobile number.' : 'অনুগ্রহ করে আপনার নাম ও মোবাইল নম্বর লিখুন।');
      return;
    }

    const msg = isEn
      ? `Hello Nexus Property Management,\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Inquiry:* ${need}\n\n(Sent via website quick callback)`
      : `আসসালামু আলাইকুম Nexus Property,\n\n*নাম:* ${name}\n*মোবাইল:* ${phone}\n*প্রয়োজন:* ${need}\n\n(ওয়েবসাইট কল-ব্যাক রিকোয়েস্ট)`;

    window.open(`https://wa.me/8801851659285?text=${encodeURIComponent(msg)}`, '_blank');
  });

  // ====================================================
  // 9. SMOOTH SCROLL REVEAL ANIMATIONS
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
  setHeroProperty(0, false);
  startHeroAutoSlide();
  renderProperties('all');
  renderReels();
  if (currentLang === 'en') {
    setLanguage('en');
  }

})();
