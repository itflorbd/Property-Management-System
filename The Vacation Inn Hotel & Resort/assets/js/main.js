/**
 * The Vacation Inn Hotel & Resort — Bandarban
 * Interactive Engine: Dynamic Hero Crossfade, Indicator-Free Auto-Sliding Room Card,
 * Lightbox Modals, Live Cost & Tour Estimator, Authentic Facebook Reels, and Bilingual Translation.
 */

(function () {
  'use strict';

  // ====================================================
  // 1. VERIFIED ROOMS & SUITES DATASET (100% Real Graded Photos)
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
      heroBg: 'assets/img/graded/balcony-misty-mountain-view.jpg',
      img: 'assets/img/graded/room-couple-honeymoon-swan.jpg',
      locBn: 'বান্দরবান-কেরানীহাট হাইওয়ে, জথ খামার',
      locEn: 'Bandarban-Keranihat Highway, Bandarban',
      titleBn: 'প্রিমিয়াম কাপল এসি রুম (প্রাইভেট হিল ভিউ ব্যালকনি)',
      titleEn: 'Premium Couple AC Room with Private Hill View Balcony',
      priceBn: '৳ ২,৫০০ / রাত',
      priceEn: '৳ 2,500 / night',
      specsBn: ['১ কিং সাইজ বেড', 'মেঘ ও পাহাড় ভিউ ব্যালকনি', 'সাইলেন্ট এসি ও স্মার্ট টিভি', 'হট ওয়াটার গিজার বাথরুম'],
      specsEn: ['1 King Size Bed', 'Misty Mountain Balcony', 'Silent Split AC & Smart TV', 'Hot Water Geyser Bath'],
      descBn: 'বান্দরবানের কুয়াশাচ্ছন্ন পাহাড় ও মেঘের রূপ উপভোগ করার জন্য আমাদের সবচেয়ে জনপ্রিয় রোমান্টিক রুম। রাজহাঁস তোয়ালে আর্ট, এলইডি ভ্যানিটি মিরর, কাঠের ব্যালকনি ও সাউন্ডপ্রুফ এসি।',
      descEn: 'Our most sought-after boutique hill retreat for couples. Features folded swan towel decor, backlit LED mirror, private wooden balcony overlooking foggy green valleys, and whisper-quiet AC.',
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
      heroBg: 'assets/img/graded/room-family-deluxe-dual-beds.jpg',
      img: 'assets/img/graded/room-family-deluxe-dual-beds.jpg',
      locBn: 'বান্দরবান-কেরানীহাট হাইওয়ে, জথ খামার',
      locEn: 'Bandarban-Keranihat Highway, Bandarban',
      titleBn: 'সুপার ডিলাক্স এসি ফ্যামিলি স্যুট (৪-৫ জন)',
      titleEn: 'Super Deluxe AC Family Suite (4-5 Guests)',
      priceBn: '৳ ৩,৫০০ / রাত',
      priceEn: '৳ 3,500 / night',
      specsBn: ['২টি বড় ডাবল বেড', 'প্যানোরামিক ব্যালকনি', 'ফলস সিলিং স্পটলাইট', 'সিটিং লাউঞ্জ ও ওয়্যারড্রব'],
      specsEn: ['2 Queen Beds', 'Panoramic Hill Balcony', 'False Ceiling Spotlights', 'Sitting Lounge & Wardrobe'],
      descBn: 'পরিবার বা ৪-৫ জনের ফ্রেন্ডস গ্রুপের জন্য তৈরি অত্যন্ত প্রশস্ত ও রাজকীয় স্যুট। দুটি বড় ডাবল বিছানা, আধুনিক কাঠের সিলিং ও ইন্টেরিয়র, বাচ্চাদের জন্য নিরাপদ পরিবেশ ও ডাইনিং সহায়তা।',
      descEn: 'Generously appointed spacious suite tailored for family getaways and travel circles of 4-5 guests. Includes dual plush queen beds, custom cove ceiling lighting, scenic balcony, and fitted wardrobes.',
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
      heroBg: 'assets/img/graded/exterior-day-hills.jpg',
      img: 'assets/img/graded/room-suite-arched-mirror.jpg',
      locBn: 'বান্দরবান-কেরানীহাট হাইওয়ে, জথ খামার',
      locEn: 'Bandarban-Keranihat Highway, Bandarban',
      titleBn: 'কমফোর্ট এসি কাপল বেডরুম (আর্চড মিরর ও সোফা)',
      titleEn: 'Comfort AC Couple Bed Room with Arched Mirror & Sofa',
      priceBn: '৳ ২,০০০ / রাত',
      priceEn: '৳ 2,000 / night',
      specsBn: ['১ ডাবল বেড', 'আর্চড ফুল-লেন্থ মিরর', 'স্প্লিট এসি ও সোফা', 'হাই-স্পিড ওয়াই-ফাই'],
      specsEn: ['1 Double Bed', 'Arched Full-Length Mirror', 'Split AC & Lounge Sofa', 'High-Speed Wi-Fi'],
      descBn: 'কাপল ও বাজেট সচেতন পর্যটকদের জন্য আরামদায়ক ও রুচিশীল রুম। আর্চড ডিজাইনার ড্রেসিং মিরর, পরিচ্ছন্ন বিছানা, সাইলেন্ট কুলিং, ব্যাকআপ পাওয়ার এবং শান্ত পাহাড়ি পরিবেশ।',
      descEn: 'Cozy and delightful air-conditioned room crafted for couples exploring Bandarban. Features an arched full-length dressing mirror, cozy sofa sitting, spotless linen, and high-speed Wi-Fi.',
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
      heroBg: 'assets/img/graded/room-woodwork-interior.jpg',
      img: 'assets/img/graded/room-canopy-bed-cozy.jpg',
      locBn: 'বান্দরবান-কেরানীহাট হাইওয়ে, জথ খামার',
      locEn: 'Bandarban-Keranihat Highway, Bandarban',
      titleBn: 'ইকোনমি নন-এসি ডাবল বেডরুম (ক্যানোপি বেড)',
      titleEn: 'Economy Non-AC Double Bed Room with Canopy Frame',
      priceBn: '৳ ১,৪০০ / রাত',
      priceEn: '৳ 1,400 / night',
      specsBn: ['১ কাঠের ক্যানোপি বেড', 'বাতাসযুক্ত পরিচ্ছন্ন পরিবেশ', 'মশারির নিরাপত্তা', 'ব্যাকপ্যাকার ফ্রেন্ডলি'],
      specsEn: ['1 Timber Canopy Bed', 'Naturally Breezy & Clean', 'Full Mosquito Net Structure', 'Backpacker Friendly'],
      descBn: 'ব্যাকপ্যাকার, ছাত্র ও ট্র্যাকারদের জন্য সেরা সাশ্রয়ী অপশন। ঐতিহ্যবাহী কাঠের ক্যানোপি খাট, কম খরচে পরিষ্কার বিছানা, নিরাপদ পরিবেশ ও বান্দরবানের দর্শনীয় স্থানে যাওয়ার জিপ বুকিং সুবিধা।',
      descEn: 'Ideal low-cost option for backpackers, student groups, and trekkers seeking clean, secure, and hassle-free accommodation in Bandarban Sadar with classic timber woodwork.',
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
      heroBg: 'assets/img/graded/exterior-night-garden.jpg',
      img: 'assets/img/graded/room-balcony-doorway-view.jpg',
      locBn: 'বান্দরবান-কেরানীহাট হাইওয়ে, জথ খামার',
      locEn: 'Bandarban-Keranihat Highway, Bandarban',
      titleBn: 'ভিআইপি প্যানোরামিক হিল ভিউ স্যুট',
      titleEn: 'VIP Panoramic Hill View Suite',
      priceBn: '৳ ৪,২০০ / রাত',
      priceEn: '৳ 4,200 / night',
      specsBn: ['১ কিং বেড + ১ ডিভান', '১৮০° মেঘ ও পাহাড় ভিউ ব্যালকনি', 'প্রিমিয়াম কাঠের ইন্টেরিয়র', 'ভিআইপি রুম সার্ভিস'],
      specsEn: ['1 King Bed + 1 Daybed', '180° Mountain View Balcony', 'Premium Hardwood Decor', 'VIP Room Service'],
      descBn: 'সর্বোচ্চ আরাম ও আভিজাত্য নিশ্চিত করতে বিশেষ ভিআইপি স্যুট। বিশাল কাঁচের দরজা দিয়ে সরাসরি ব্যালকনি ও বান্দরবানের সবুজ পাহাড়ের দিগন্তজোড়া দৃশ্য, প্রিমিয়াম বেডিং ও স্পেশাল কেয়ার।',
      descEn: 'The flagship luxury suite at The Vacation Inn. Features expansive private glass doors opening to mountain valley vistas, hand-crafted wooden aesthetics, and dedicated care.',
      phone: '+8801612505060'
    },
    {
      id: 6,
      type: 'couple',
      featured: false,
      tagBn: 'সুপিরিয়র ডাবল এসি',
      tagEn: 'Superior Double AC',
      featuredTagBn: 'আর্ট অ্যান্ড পিস',
      featuredTagEn: 'Art & Peace',
      heroBg: 'assets/img/graded/resort-banner-composite.jpg',
      img: 'assets/img/graded/room-double-wall-art.jpg',
      locBn: 'বান্দরবান-কেরানীহাট হাইওয়ে, জথ খামার',
      locEn: 'Bandarban-Keranihat Highway, Bandarban',
      titleBn: 'সুপিরিয়র ডাবল এসি বেডরুম (ওয়াল আর্ট ও নাইট ল্যাম্প)',
      titleEn: 'Superior Double AC Bed Room with Landscape Art',
      priceBn: '৳ ২,২০০ / রাত',
      priceEn: '৳ 2,200 / night',
      specsBn: ['১ ডাবল বেড', 'আর্ট ডেকোরেশন ও সাইড ল্যাম্প', 'স্প্লিট এসি', 'হাই-স্পিড ওয়াই-ফাই'],
      specsEn: ['1 Double Bed', 'Art Decor & Bedside Lamps', 'Split AC Unit', 'High-Speed Wi-Fi'],
      descBn: 'রুচিশীল আধুনিক ইন্টেরিয়র, নরম আলোকসজ্জা ও আরামদায়ক ডাবল বিছানাসহ পরিপাটি রুম। শান্ত পরিবেশে কাপল বা বন্ধুদের নির্বিঘ্ন ছুটির জন্য চমৎকার।',
      descEn: 'Artfully appointed with soothing landscape art, warm ambient bedside lighting, and a plush double bed. Perfect peaceful retreat for couples or business travelers.',
      phone: '+8801612505060'
    }
  ];

  // ====================================================
  // 2. 15 AUTHENTIC FACEBOOK PHOTOS DATASET
  // ====================================================
  const GALLERY = [
    {
      id: 1,
      cat: 'exterior',
      img: 'assets/img/graded/exterior-day-hills.jpg',
      titleBn: 'দিনের আলোয় সবুজ পাহাড়ে ঘেরা রিসোর্ট প্রাঙ্গণ',
      titleEn: 'Daytime Stepped Architecture Nestled in Bandarban Hills',
      descBn: 'লাল ছাদ ও পাহাড়ি ধাপে নির্মিত রিসোর্টের মূল ভবন ও চারপাশের সবুজের মেলা।',
      descEn: 'Stepped hillside architecture with tropical mountain backdrops.'
    },
    {
      id: 2,
      cat: 'exterior',
      img: 'assets/img/graded/balcony-misty-mountain-view.jpg',
      titleBn: 'রুমের প্রাইভেট ব্যালকনি থেকে সকালের মেঘ ও কুয়াশা',
      titleEn: 'Private Room Balcony with Morning Fog & Hill Vista',
      descBn: 'গেস্ট রুমের ব্যালকনি থেকে সরাসরি বান্দরবানের কুয়াশাচ্ছন্ন পাহাড়ি উপত্যকা।',
      descEn: 'Morning fog rolling over green mountain ridges from guest balcony.'
    },
    {
      id: 3,
      cat: 'exterior',
      img: 'assets/img/graded/exterior-night-garden.jpg',
      titleBn: 'রাতের মনোমুগ্ধকর আলোকসজ্জা ও বাগান ওয়াকওয়ে',
      titleEn: 'Atmospheric Night Facade & Illuminated Garden Walkway',
      descBn: 'সন্ধ্যা নামতেই রিসোর্টের শান্ত স্নিগ্ধ আলো ও নিরাপদ কার পার্কিং এরিয়া।',
      descEn: 'Warm facade illumination, secure paved parking, and lush night trees.'
    },
    {
      id: 4,
      cat: 'exterior',
      img: 'assets/img/graded/entrance-signboard-highway.jpg',
      titleBn: 'বান্দরবান-কেরানীহাট হাইওয়েতে মূল প্রবেশদ্বার ও সাইনবোর্ড',
      titleEn: 'Highway Entrance Gate & Official Roadside Billboard',
      descBn: 'জথ খামার এলাকায় প্রধান সড়কের কোল ঘেঁষে রিসোর্টে প্রবেশের সহজ রাস্তা।',
      descEn: 'Prime highway frontage in Jotho Khamar with hotline and directions.'
    },
    {
      id: 5,
      cat: 'rooms',
      img: 'assets/img/graded/room-couple-honeymoon-swan.jpg',
      titleBn: 'হানিমুন কাপল স্যুট — রাজহাঁস তোয়ালে আর্ট ও এলইডি মিরর',
      titleEn: 'Honeymoon Couple Suite with Swan Towel Art & Vanity Mirror',
      descBn: 'নবদম্পতিদের জন্য স্পেশাল ফ্লাওয়ার ও সোয়ান তোয়ালে সাজানো রোমান্টিক বেড।',
      descEn: 'Romantic king bedding with folded swans, ambient LED mirror, and smart TV.'
    },
    {
      id: 6,
      cat: 'rooms',
      img: 'assets/img/graded/room-family-deluxe-dual-beds.jpg',
      titleBn: 'সুপার ডিলাক্স ফ্যামিলি স্যুট — দুটি বড় ডাবল বেড',
      titleEn: 'Super Deluxe Family Suite with Dual Queen Beds',
      descBn: '৪-৫ জনের পরিবারের জন্য প্রশস্ত রুম, ফলস সিলিং স্পটলাইট ও কাঠের ডেকোর।',
      descEn: 'Spacious dual beds, ambient cove ceiling lights, and timber furniture.'
    },
    {
      id: 7,
      cat: 'rooms',
      img: 'assets/img/graded/room-suite-arched-mirror.jpg',
      titleBn: 'প্রিমিয়াম কাপল স্যুট — আর্চড ড্রেসিং মিরর ও সোফা',
      titleEn: 'Premium Suite with Arched Full-Length Mirror & Seating',
      descBn: 'মার্জিত ইন্টেরিয়র, ফুল-লেন্থ কাঠের ড্রেসিং মিরর ও কমফোর্টেবল সোফা কর্নার।',
      descEn: 'Elegant curved full mirror, cozy sofa sitting, and relaxing warm hues.'
    },
    {
      id: 8,
      cat: 'rooms',
      img: 'assets/img/graded/room-double-wall-art.jpg',
      titleBn: 'সুপিরিয়র ডাবল বেডরুম — ল্যান্ডস্কেপ ওয়াল আর্ট ও নাইট ল্যাম্প',
      titleEn: 'Superior Double Room with Landscape Art & Bedside Lamps',
      descBn: 'আর্টিস্টিক ওয়াল ফ্রেম, বেডসাইড ল্যাম্প ও পরিচ্ছন্ন সুতির নরম বিছানা।',
      descEn: 'Serene wall painting, warm bedside reading lights, and spotless linens.'
    },
    {
      id: 9,
      cat: 'rooms',
      img: 'assets/img/graded/room-suite-false-ceiling.jpg',
      titleBn: 'মডার্ন স্যুট ইন্টেরিয়র — ফলস সিলিং ও ড্রেসিং ভ্যানিটি',
      titleEn: 'Modern Bedroom Suite with False Ceiling & Spotlights',
      descBn: 'আধুনিক সিলিং স্পটলাইট, কাঠের ওয়্যারড্রব ও ব্যক্তিগত ব্যালকনি প্রবেশপথ।',
      descEn: 'Custom false ceiling architecture with fitted woodwork and side vanity.'
    },
    {
      id: 10,
      cat: 'rooms',
      img: 'assets/img/graded/room-canopy-bed-cozy.jpg',
      titleBn: 'কোজি বাজেট রুম — ট্র্যাডিশনাল কাঠের ক্যানোপি বেড ফ্রেম',
      titleEn: 'Cozy Timber Canopy Bed Frame with Overhead Net Structure',
      descBn: 'ঐতিহ্যবাহী কাঠের নকশার খাট, সার্বক্ষণিক মশারির নিরাপত্তা ও আরামদায়ক স্টে।',
      descEn: 'Classic wooden craftsmanship with protective overhead frame.'
    },
    {
      id: 11,
      cat: 'rooms',
      img: 'assets/img/graded/room-balcony-doorway-view.jpg',
      titleBn: 'বেডরুম থেকে প্রাইভেট হিল ভিউ ব্যালকনির প্রবেশপথ',
      titleEn: 'Bedroom Leading to Private Scenic Hill Balcony',
      descBn: 'বিছানায় শুয়েই কাঁচের দরজার ওপারে দেখা যায় বান্দরবানের সবুজ পাহাড়ের চূড়া।',
      descEn: 'Floor-to-ceiling glass doorway opening straight to fresh hill breezes.'
    },
    {
      id: 12,
      cat: 'rooms',
      img: 'assets/img/graded/room-suite-wardrobe-vanity.jpg',
      titleBn: 'স্যুট রুমের ফিটেড ওয়্যারড্রব ও লাগেজ স্পেস',
      titleEn: 'Suite Room with Fitted Wardrobe & Vanity Station',
      descBn: 'গেস্টদের কাপড়চোপড় ও মালামাল নিরাপদে রাখার জন্য বড় কাঠের আলমারি।',
      descEn: 'Ample closet storage, wooden finish, and convenient guest dressing.'
    },
    {
      id: 13,
      cat: 'rooms',
      img: 'assets/img/graded/room-woodwork-interior.jpg',
      titleBn: 'আর্কিটেকচারাল কাঠের কারুকাজ ও সিলিং মল্ডিং',
      titleEn: 'Architectural Wood Trim, Door Carpentry & Ceilings',
      descBn: 'টেকসই কাঠের দরজা, প্রাকৃতিক রঙের ফিনিশিং ও পাহাড়ি রিসোর্টের উষ্ণ ছোঁয়া।',
      descEn: 'Fine craftsmanship showcasing polished wooden doors and moldings.'
    },
    {
      id: 14,
      cat: 'amenities',
      img: 'assets/img/graded/amenities-toiletries-kit.jpg',
      titleBn: 'কমপ্লিমেন্টারি প্রিমিয়াম টয়লেট্রিজ ও ডেন্টাল কিট',
      titleEn: 'Resort Toiletries Kit, Dental Care & Fresh Linens',
      descBn: 'প্রতিটি রুমের সাথে দেওয়া হয় পরিষ্কার সিল্ড টুথব্রাশ কিট, সাবান ও ফ্রেশ তোয়ালে।',
      descEn: 'Complimentary guest welcome tray with dental sets, soap, and clean linens.'
    },
    {
      id: 15,
      cat: 'amenities',
      img: 'assets/img/graded/resort-banner-composite.jpg',
      titleBn: 'রিসোর্ট অফিসিয়াল ব্যানার — এক্সটেরিয়র, পার্কিং ও পাহাড়',
      titleEn: 'Official Resort Banner with Exterior & Parking Overview',
      descBn: 'দ্যা ভ্যাকেশন ইন হোটেল অ্যান্ড রিসোর্টের পূর্ণাঙ্গ প্রপার্টি ও সুবিধার এক ঝলক।',
      descEn: 'Overview composite capturing facade, parking area, and resort comfort.'
    }
  ];

  // ====================================================
  // 3. CURATED FACEBOOK REELS DATASET (Zero Black Screen Architecture)
  // ====================================================
  const REELS = [
    {
      titleBn: 'বান্দরবানের পাহাড়ি প্রকৃতির মায়ায় দ্যা ভ্যাকেশন ইন হোটেল অ্যান্ড রিসোর্ট',
      titleEn: 'The Vacation Inn Hotel & Resort — Property Tour & Hill Panorama',
      views: '100K+',
      duration: '0:55',
      tagBn: 'ভাইরাল রিল',
      tagEn: 'Viral Resort Reel',
      img: 'assets/img/graded/exterior-day-hills.jpg',
      url: 'https://www.facebook.com/reel/1472027100557704/'
    },
    {
      titleBn: 'মেঘের কোলে সকালের অপরূপ দৃশ্য ও ব্যালকনি ভিউ',
      titleEn: 'Cloud-Top Morning Vistas & Balcony Views at Vacation Inn',
      views: '41K+',
      duration: '0:42',
      tagBn: 'পাহাড় ও মেঘ',
      tagEn: 'Misty Mountains',
      img: 'assets/img/graded/balcony-misty-mountain-view.jpg',
      url: 'https://www.facebook.com/reel/4512312585672284/'
    },
    {
      titleBn: 'রিসোর্টের মনোরম রাতের পরিবেশ ও আলোকসজ্জা',
      titleEn: 'Charming Night Ambience & Highway Illumination at Vacation Inn',
      views: '13K+',
      duration: '0:38',
      tagBn: 'নাইট ভিউ',
      tagEn: 'Night Ambience',
      img: 'assets/img/graded/exterior-night-garden.jpg',
      url: 'https://www.facebook.com/reel/1460623972679987/'
    },
    {
      titleBn: 'হানিমুন কাপল স্যুটের রাজহাঁস তোয়ালে আর্ট ও ভেতরকার সাজসজ্জা',
      titleEn: 'Deluxe Honeymoon Couple Suite Interior & Swan Towel Decor',
      views: '4.8K+',
      duration: '0:48',
      tagBn: 'রুম ট্যুর',
      tagEn: 'Room Tour',
      img: 'assets/img/graded/room-couple-honeymoon-swan.jpg',
      url: 'https://www.facebook.com/reel/991619106828635/'
    },
    {
      titleBn: 'সুপার ডিলাক্স ফ্যামিলি স্যুটের রুম ট্যুর ও প্রশস্ত বেডরুম',
      titleEn: 'Family Suite Walkthrough with Dual Queen Beds & Lounge',
      views: '8.5K+',
      duration: '0:50',
      tagBn: 'ফ্যামিলি স্যুট',
      tagEn: 'Family Suite',
      img: 'assets/img/graded/room-family-deluxe-dual-beds.jpg',
      url: 'https://www.facebook.com/reel/1472027100557704/'
    },
    {
      titleBn: 'বান্দরবান-কেরানীহাট হাইওয়ে গেট ও রিসোর্টে আসার সহজ পথ',
      titleEn: 'Resort Entrance Highway Location & Road Access Guide',
      views: '6.2K+',
      duration: '0:35',
      tagBn: 'লোকেশন গাইড',
      tagEn: 'Location Guide',
      img: 'assets/img/graded/entrance-signboard-highway.jpg',
      url: 'https://www.facebook.com/reel/4512312585672284/'
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
  // 6. RENDER AUTHENTIC PHOTO GALLERY & LIGHTBOX
  // ====================================================
  const galleryGrid = document.getElementById('galleryGrid');
  const galleryModal = document.getElementById('galleryModal');
  const gmClose = document.getElementById('gmClose');
  const gmImg = document.getElementById('gmImg');
  const gmTag = document.getElementById('gmTag');
  const gmTitle = document.getElementById('gmTitle');
  const gmDesc = document.getElementById('gmDesc');
  const gmWa = document.getElementById('gmWa');
  const gTabs = document.querySelectorAll('.g-tab');

  function renderGallery(filter = 'all') {
    if (!galleryGrid) return;
    const isEn = currentLang === 'en';
    const items = (filter === 'all')
      ? GALLERY
      : GALLERY.filter(g => g.cat === filter);

    galleryGrid.innerHTML = items.map(item => `
      <article class="gallery-card" data-gid="${item.id}" role="button" tabindex="0" aria-label="${isEn ? item.titleEn : item.titleBn}">
        <img src="${item.img}" alt="${isEn ? item.titleEn : item.titleBn}" loading="lazy">
        <div class="g-overlay">
          <span class="g-badge">${item.cat === 'exterior' ? (isEn ? 'Exterior & View' : 'এক্সটেরিয়র ও ভিউ') : item.cat === 'rooms' ? (isEn ? 'Room & Suite' : 'রুম ও স্যুট') : (isEn ? 'Amenities' : 'সুবিধাসমূহ')}</span>
          <h3 class="g-title">${isEn ? item.titleEn : item.titleBn}</h3>
          <p class="g-desc">${isEn ? item.descEn : item.descBn}</p>
        </div>
        <div class="g-zoom-btn" aria-hidden="true">
          <svg><use href="#i-star"/></svg>
        </div>
      </article>
    `).join('');

    // Attach click to open photo lightbox
    galleryGrid.querySelectorAll('.gallery-card').forEach(card => {
      const openItem = () => {
        const item = GALLERY.find(g => g.id === parseInt(card.dataset.gid, 10));
        if (!item || !galleryModal) return;

        if (gmImg) gmImg.src = item.img;
        if (gmTag) gmTag.textContent = item.cat === 'exterior' ? (isEn ? 'Exterior & View' : 'এক্সটেরিয়র ও ভিউ') : item.cat === 'rooms' ? (isEn ? 'Room & Suite' : 'রুম ও স্যুট') : (isEn ? 'Amenities' : 'সুবিধাসমূহ');
        if (gmTitle) gmTitle.textContent = isEn ? item.titleEn : item.titleBn;
        if (gmDesc) gmDesc.textContent = isEn ? item.descEn : item.descBn;
        if (gmWa) {
          gmWa.href = `https://wa.me/8801612505060?text=${encodeURIComponent((isEn ? 'Hello The Vacation Inn Bandarban, I am inquiring about this photo from your gallery: ' : 'আসসালামু আলাইকুম The Vacation Inn, আপনাদের গ্যালারির এই ছবিটি সম্পর্কে জানতে চাই: ') + (isEn ? item.titleEn : item.titleBn))}`;
        }

        if (typeof galleryModal.showModal === 'function') {
          galleryModal.showModal();
        }
      };

      card.addEventListener('click', openItem);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openItem();
        }
      });
    });
  }

  // Filter tabs
  gTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      gTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-pressed', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-pressed', 'true');
      renderGallery(tab.dataset.gfilter || 'all');
    });
  });

  function closeGalleryModal() {
    galleryModal?.close();
  }
  gmClose?.addEventListener('click', closeGalleryModal);
  galleryModal?.addEventListener('click', (e) => {
    if (e.target === galleryModal) closeGalleryModal();
  });

  // ====================================================
  // 7. RENDER VIDEO REELS SLIDER (Zero Black Screen Architecture)
  // ====================================================
  const reelTrack = document.getElementById('reelTrack');
  const player = document.getElementById('player');
  const playerClose = document.getElementById('playerClose');
  const playerPoster = document.getElementById('playerPoster');
  const playerTag = document.getElementById('playerTag');
  const playerViews = document.getElementById('playerViews');
  const playerDuration = document.getElementById('playerDuration');
  const playerTitle = document.getElementById('playerTitle');
  const playerPlayCenter = document.getElementById('playerPlayCenter');
  const playerFbMain = document.getElementById('playerFbMain');
  const playerWa = document.getElementById('playerWa');

  function renderReels() {
    if (!reelTrack) return;
    const isEn = currentLang === 'en';

    reelTrack.innerHTML = REELS.map((r, i) => `
      <article class="reel-card" data-idx="${i}" role="button" tabindex="0" aria-label="${isEn ? r.titleEn : r.titleBn}">
        <img src="${r.img}" alt="${isEn ? r.titleEn : r.titleBn}" loading="lazy">
        <span class="r-views"><svg><use href="#i-play"/></svg>${r.views}</span>
        <div class="r-play"><svg><use href="#i-play"/></svg></div>
        <div class="r-info">
          <small class="gold">${isEn ? r.tagEn : r.tagBn} • ${r.duration}</small>
          <h3>${isEn ? r.titleEn : r.titleBn}</h3>
        </div>
      </article>
    `).join('');

    // Attach click to open the zero-black-screen cinema showcase modal
    reelTrack.querySelectorAll('.reel-card').forEach(card => {
      const openCard = () => {
        const item = REELS[card.dataset.idx];
        if (!item || !player) return;
        const title = isEn ? item.titleEn : item.titleBn;

        if (playerPoster) playerPoster.src = item.img;
        if (playerTag) playerTag.textContent = isEn ? item.tagEn : item.tagBn;
        if (playerViews) playerViews.innerHTML = `<svg><use href="#i-play"/></svg> ${item.views}`;
        if (playerDuration) playerDuration.textContent = item.duration;
        if (playerTitle) playerTitle.textContent = title;

        if (playerPlayCenter) playerPlayCenter.href = item.url;
        if (playerFbMain) playerFbMain.href = item.url;
        if (playerWa) {
          playerWa.href = `https://wa.me/8801612505060?text=${encodeURIComponent((isEn ? 'Hello The Vacation Inn Bandarban, I watched this reel on your website: ' : 'আসসালামু আলাইকুম The Vacation Inn, আপনাদের ওয়েবসাইটের এই রিলটি দেখলাম: ') + title + ' (' + item.url + ')')}`;
        }

        if (typeof player.showModal === 'function') {
          player.showModal();
        }
      };

      card.addEventListener('click', openCard);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openCard();
        }
      });
    });
  }

  function closePlayer() {
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

    // Re-render rooms, gallery & reels
    const activeChip = document.querySelector('.chips button[aria-pressed="true"]');
    renderRooms(activeChip ? activeChip.dataset.filter : 'all');
    const activeGTab = document.querySelector('.g-tab.active');
    renderGallery(activeGTab ? activeGTab.dataset.gfilter : 'all');
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
  renderGallery('all');
  renderReels();
  if (currentLang === 'en') {
    setLanguage('en');
  }

})();
