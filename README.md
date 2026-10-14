# MAAR METALS (M A Abdul Rahman Metals)
## Modern Responsive Product Catalog & Showcase Website

A mobile-first, high-performance product catalog and commercial showcase web application built for **MAAR METALS (M A Abdul Rahman Metals)** – premier wholesale and retail dealer of heavy-duty aluminum utensils and commercial cookware.

---

### 🚀 Quick Start / How to Run
1. Double-click **`index.html`** in any web browser (Chrome, Edge, Safari, Firefox) to view the website instantly.
2. No build tools or Node/Python dependencies required — fully self-contained with CDN-powered Tailwind CSS and vanilla ES6 JavaScript.

---

### 📞 Shop Owner Setup: How to Change WhatsApp Number
Open `js/app.js` in any text editor. At the very top (Line 10):
```javascript
// Replace with your actual WhatsApp number including country code (e.g., '919876543210' for India):
const WHATSAPP_NUMBER = "919876543210";
```
Saving this file immediately updates:
- Every product card's **"Inquire on WhatsApp"** button
- The **Quick View / Size Selector modal** custom inquiry button
- The **Biryani Deg Guest Capacity Calculator** WhatsApp button
- The **Wholesale Rate Sheet / Bulk RFQ** submission buttons
- The **Floating sticky WhatsApp badge** (bottom-right)
- The header and footer contact phone links (`tel:` and display texts)

---

### 💎 Key Features & Sections

1. **Brand Identity & Metallic Visual Theme**:
   - Clean industrial metallic palette: Slate grey (`#0F172A`, `#1E293B`), metallic silver accents (`#94A3B8`, `#CBD5E1`, `#E2E8F0`), crisp white background, and WhatsApp green (`#25D366`).
   - Clean, readable typography using Google Fonts (Poppins & Inter).

2. **Interactive Product Catalog**:
   - **Horizontal Swipeable Category Pills** on mobile:
     - *All Utensils*
     - *Biryani Degs & Handis*
     - *Kadais & Pans*
     - *Plates & Strainers*
     - *Storage & Milk Cans*
     - *Commercial Cookware & Stoves*
   - **Instant Live Search**: Search in real-time by utensil name, capacity (e.g., `50 kg`, `25L`), gauge (`Gauge 10`), or use case (`Halwai`, `Dum`, `Bhatti`).
   - **Quick Suggestion Tags** for fast 1-tap filtering.

3. **WhatsApp Inquiry Flow (Critical Feature)**:
   - Clicking **"Inquire on WhatsApp"** opens WhatsApp with a pre-filled, URL-encoded inquiry:
     `"Hello MAAR Metals, I am interested in inquiring about [Product Name] ([Retail/Wholesale]). Please share pricing and bulk details."`
   - **Quick View / Size Selector Modal**: Customers can select specific capacity/size, choose Wholesale or Retail, set quantities, and click to send an enriched inquiry message.

4. **Interactive Biryani Deg Sizing Calculator (Value-Add for Caterers)**:
   - Slider / preset buttons for 20 to 600+ guests.
   - Calculates recommended rice capacity (kg), required vessel volume (Litres), and exact Deg size number (e.g. No. 4 - 38 Litres) with a 1-tap WhatsApp inquiry button.

5. **Wholesale Bulk Order RFQ Banner & Form**:
   - Callout for marriage caterers, hotel chefs, and regional retail merchants.
   - Direct button to request the complete wholesale rate sheet.
   - Quick inquiry form that formats a WhatsApp quotation request with business name, type, city, and required utensils.

6. **Educational Gauge & Thickness Guide**:
   - Explains Gauge 8 (4.0mm), Gauge 10 (3.2mm), and Gauge 12/14 (2.6mm - 2.0mm) so customers understand why heavy-bottom virgin aluminum prevents food scorching and warping under high-heat bhattis.

7. **Store Location & Contact Section**:
   - Commercial bazaar address, business hours, interactive embedded map, and direct Google Maps navigation button.

8. **Mobile-First Optimizations**:
   - Native-app styled bottom navigation bar on mobile (Home, Catalog, Deg Sizer, Bulk RFQ, WhatsApp).
   - Touch-friendly 48px+ touch targets and smooth drawer menu.
   - Zero layout shift and instant rendering with crisp vector illustrations.

---

### 📂 Project Structure
```
maar-metals-catalog/
├── index.html            # Main website markup & layout
├── css/
│   └── styles.css        # Metallic gradients, animations, touch targets
├── js/
│   ├── products-data.js  # Utensils inventory & biryani calculator matrix
│   ├── illustrations.js  # Metallic SVG utensil illustration generator
│   └── app.js            # Controller, live search, WhatsApp URLs & modals
└── README.md             # Documentation & setup instructions
```
