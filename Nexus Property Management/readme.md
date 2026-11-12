# Nexus Property Management — Luxury Landing Page & Demo

An ultra-modern, high-conversion real estate landing page and interactive demo tailored specifically for **Nexus Property Management** (Sylhet, Bangladesh). Built to showcase authentic verified property listings, viral Facebook video reels, Sylhet's scenic tea garden landscapes, and interactive real-estate tools.

Live Demo Branch: `nexus`

---

## 🌟 Key Features

1. **Auto-Sliding Hero Showcase (Crossfade Background + Featured Card)**
   - Automatically rotates through prime featured properties (e.g., Londoni Road Commercial Plot, Akhalia Surma Ready Plot, Shaheber Bazar Lakefront Orchard, Tultikar Riverside Residence, 5-Story 10-Unit Building).
   - Dynamic cinematic background crossfade between dual layers (`#heroLayerA` and `#heroLayerB`).
   - **Indicator-free design:** Clean presentation without dots, progress bars, or slider counts so visitors experience continuous luxury flow.
   - Pauses seamlessly on hover and resumes on mouse leave.

2. **Interactive Property Details Modal**
   - Clicking any property card in the hero section or the properties slider opens a rich dialog popup.
   - Displays high-resolution imagery, location, pricing, categorical badges, verified feature specs, and complete description.
   - Direct 1-tap **Call Agent** (`tel:`) and pre-filled **WhatsApp Inquiry** buttons.

3. **Authentic Sylhet Nature Visuals**
   - High-resolution bespoke photography capturing Sylhet’s rolling tea garden terraces, misty hills, natural lotus lakes, and modern architecture.

4. **Real Viral Facebook Reels Section**
   - Embedded showcase featuring Nexus Property Management’s actual viral Facebook reels (up to 166K+ views).
   - Built-in video popup player with direct links to Facebook and WhatsApp price inquiries.

5. **Sylhet Land Unit Calculator (ডেসিমেল ⇄ কাঠা ⇄ বিঘা ⇄ বর্গফুট)**
   - Instant real-time conversion between Bangladeshi land measurement units:
     - 1 Decimal (শতক / ডেসিমেল) = 435.6 sq. ft.
     - 1 Katha (কাঠা) = 720 sq. ft. (~1.65 Decimals)
     - 1 Bigha (বিঘা) = 20 Katha = 14,400 sq. ft. (~33.06 Decimals)

6. **Instant 1-Click Bilingual Switcher (বাংলা ⇄ English)**
   - Full site toggle between default Bengali (`bn`) and English (`en`) without page reload.
   - Saves language preference in `localStorage`.

7. **Responsive & Mobile-First Optimization**
   - Designed to render across all screen sizes (320px mobile to 1440px+ 4K).
   - Fixed mobile quick-action bottom bar (Call, Properties, WhatsApp).

---

## 📁 Project Structure

```text
├── index.html              # Main semantic HTML5 markup with SVG icon sprites
├── readme.md               # Project documentation
├── .gitignore              # Git ignore rules
└── assets/
    ├── css/
    │   └── style.css       # Luxury design system, glassmorphism, responsive styles & animations
    ├── js/
    │   └── main.js         # Interactive engine (hero slider, modals, calculator, language toggle)
    ├── gen/                # High-res Sylhet landscape & property visual assets
    └── img/                # Brand logo crops and graphic assets
```

---

## 🚀 Local Development Setup

To run the project locally on any machine:

```bash
# Clone the repository and switch to the nexus branch
git clone https://github.com/itflorbd/Property-Management-System.git
cd Property-Management-System
git checkout nexus

# Start a local static HTTP server
python3 -m http.server 8080

# Open in your browser:
# http://localhost:8080
```

---

Crafted by **Irfan** — Full Stack Software Developer.
