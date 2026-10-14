/**
 * MAAR METALS - Cookware Vector Illustrations
 * High-definition metallic SVG renderings of commercial aluminum utensils
 */

const CookwareIllustrations = {
  render(type, altTitle = "Aluminium Utensil") {
    const svgs = {
      // Biryani Deg
      "deg": `
        <svg viewBox="0 0 320 240" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="metal-deg" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#94A3B8"/>
              <stop offset="25%" stop-color="#E2E8F0"/>
              <stop offset="50%" stop-color="#CBD5E1"/>
              <stop offset="75%" stop-color="#F8FAFC"/>
              <stop offset="100%" stop-color="#64748B"/>
            </linearGradient>
            <linearGradient id="rim-deg" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#475569"/>
              <stop offset="50%" stop-color="#E2E8F0"/>
              <stop offset="100%" stop-color="#334155"/>
            </linearGradient>
            <radialGradient id="hammer-dot" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.6"/>
              <stop offset="70%" stop-color="#94A3B8" stop-opacity="0.2"/>
              <stop offset="100%" stop-color="#475569" stop-opacity="0.4"/>
            </radialGradient>
            <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="130%">
              <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#0F172A" flood-opacity="0.2"/>
            </filter>
          </defs>
          <!-- Shadow Base -->
          <ellipse cx="160" cy="222" rx="100" ry="12" fill="#0F172A" opacity="0.25"/>
          <!-- Deg Body -->
          <path d="M 82 85 C 72 130, 60 170, 78 200 C 95 220, 225 220, 242 200 C 260 170, 248 130, 238 85 Z" fill="url(#metal-deg)" filter="url(#soft-shadow)"/>
          <!-- Hammered texture dots across body -->
          <g opacity="0.45">
            <ellipse cx="110" cy="120" rx="6" ry="4" fill="url(#hammer-dot)"/>
            <ellipse cx="135" cy="115" rx="7" ry="5" fill="url(#hammer-dot)"/>
            <ellipse cx="160" cy="118" rx="8" ry="5" fill="url(#hammer-dot)"/>
            <ellipse cx="185" cy="115" rx="7" ry="5" fill="url(#hammer-dot)"/>
            <ellipse cx="210" cy="120" rx="6" ry="4" fill="url(#hammer-dot)"/>
            <ellipse cx="98" cy="148" rx="7" ry="5" fill="url(#hammer-dot)"/>
            <ellipse cx="125" cy="145" rx="8" ry="6" fill="url(#hammer-dot)"/>
            <ellipse cx="160" cy="146" rx="9" ry="6" fill="url(#hammer-dot)"/>
            <ellipse cx="195" cy="145" rx="8" ry="6" fill="url(#hammer-dot)"/>
            <ellipse cx="222" cy="148" rx="7" ry="5" fill="url(#hammer-dot)"/>
            <ellipse cx="112" cy="175" rx="7" ry="5" fill="url(#hammer-dot)"/>
            <ellipse cx="145" cy="178" rx="8" ry="6" fill="url(#hammer-dot)"/>
            <ellipse cx="175" cy="178" rx="8" ry="6" fill="url(#hammer-dot)"/>
            <ellipse cx="208" cy="175" rx="7" ry="5" fill="url(#hammer-dot)"/>
          </g>
          <!-- Specular highlight streak -->
          <path d="M 175 88 Q 185 145 190 205 Q 182 206 170 205 Q 165 145 155 88 Z" fill="#FFFFFF" opacity="0.35"/>
          <!-- Deg Collar / Flange Rim for Dum Seal -->
          <ellipse cx="160" cy="85" rx="80" ry="14" fill="url(#rim-deg)"/>
          <ellipse cx="160" cy="83" rx="76" ry="11" fill="#E2E8F0"/>
          <!-- Deg Heavy Matching Domed Lid -->
          <path d="M 85 80 C 85 50, 235 50, 235 80 Z" fill="url(#metal-deg)"/>
          <!-- Lid rim -->
          <ellipse cx="160" cy="80" rx="75" ry="10" fill="url(#rim-deg)"/>
          <ellipse cx="160" cy="78" rx="73" ry="8" fill="#F8FAFC"/>
          <!-- Lid Center Heavy Knob -->
          <ellipse cx="160" cy="52" rx="14" ry="7" fill="url(#rim-deg)"/>
          <rect x="156" y="48" width="8" height="6" fill="#64748B"/>
          <ellipse cx="160" cy="48" rx="10" ry="4" fill="#FFFFFF" opacity="0.8"/>
          <!-- Pure Aluminium Hallmark stamp -->
          <rect x="138" y="130" width="44" height="16" rx="3" fill="#1E293B" opacity="0.15"/>
          <text x="160" y="142" font-size="8" font-weight="bold" fill="#334155" text-anchor="middle" letter-spacing="1">MAAR G10</text>
        </svg>
      `,

      // Pot-bellied Handi
      "handi": `
        <svg viewBox="0 0 320 240" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="metal-handi" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#64748B"/>
              <stop offset="20%" stop-color="#CBD5E1"/>
              <stop offset="50%" stop-color="#FFFFFF"/>
              <stop offset="80%" stop-color="#94A3B8"/>
              <stop offset="100%" stop-color="#475569"/>
            </linearGradient>
            <linearGradient id="rim-handi" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#334155"/>
              <stop offset="50%" stop-color="#E2E8F0"/>
              <stop offset="100%" stop-color="#1E293B"/>
            </linearGradient>
          </defs>
          <ellipse cx="160" cy="220" rx="90" ry="10" fill="#0F172A" opacity="0.25"/>
          <!-- Pot belly shape -->
          <path d="M 100 85 C 50 120, 50 185, 95 208 C 120 220, 200 220, 225 208 C 270 185, 270 120, 220 85 Z" fill="url(#metal-handi)"/>
          <!-- Shading highlight curve -->
          <path d="M 170 86 Q 195 135 195 210 Q 180 212 165 210 Q 165 135 145 86 Z" fill="#FFFFFF" opacity="0.4"/>
          <!-- Grooved neck collar -->
          <ellipse cx="160" cy="85" rx="60" ry="10" fill="url(#rim-handi)"/>
          <ellipse cx="160" cy="82" rx="64" ry="11" fill="url(#rim-handi)"/>
          <ellipse cx="160" cy="80" rx="58" ry="8" fill="#F8FAFC"/>
          <!-- Inverted deep lid -->
          <ellipse cx="160" cy="76" rx="54" ry="7" fill="url(#rim-handi)"/>
          <circle cx="160" cy="65" r="8" fill="url(#rim-handi)"/>
          <circle cx="160" cy="63" r="5" fill="#FFFFFF" opacity="0.8"/>
          <!-- Heavy rim band -->
          <path d="M 95 98 Q 160 115 225 98" stroke="#64748B" stroke-width="2.5" fill="none" opacity="0.6"/>
          <text x="160" y="150" font-size="9" font-weight="bold" fill="#334155" text-anchor="middle" letter-spacing="1">DUM HANDI</text>
        </svg>
      `,

      // Jumbo Kalyana Biryani Deg
      "deg-jumbo": `
        <svg viewBox="0 0 320 240" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="metal-jumbo" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#475569"/>
              <stop offset="25%" stop-color="#E2E8F0"/>
              <stop offset="50%" stop-color="#CBD5E1"/>
              <stop offset="70%" stop-color="#F8FAFC"/>
              <stop offset="100%" stop-color="#334155"/>
            </linearGradient>
          </defs>
          <ellipse cx="160" cy="225" rx="120" ry="14" fill="#0F172A" opacity="0.3"/>
          <!-- Huge Jumbo Cauldron Base -->
          <path d="M 65 90 C 50 145, 40 185, 68 212 C 90 230, 230 230, 252 212 C 280 185, 270 145, 255 90 Z" fill="url(#metal-jumbo)"/>
          <!-- Heavy Dual-Grip Side Lifting Lugs -->
          <path d="M 45 125 C 28 125, 28 150, 48 150 L 58 144 L 56 131 Z" fill="#334155"/>
          <circle cx="58" cy="132" r="3" fill="#E2E8F0"/>
          <circle cx="58" cy="144" r="3" fill="#E2E8F0"/>
          <path d="M 275 125 C 292 125, 292 150, 272 150 L 262 144 L 264 131 Z" fill="#334155"/>
          <circle cx="262" cy="132" r="3" fill="#E2E8F0"/>
          <circle cx="262" cy="144" r="3" fill="#E2E8F0"/>
          <!-- Massive Thick Rim -->
          <ellipse cx="160" cy="90" rx="95" ry="16" fill="#334155"/>
          <ellipse cx="160" cy="87" rx="91" ry="13" fill="#E2E8F0"/>
          <!-- Oversized Cover Lid -->
          <ellipse cx="160" cy="82" rx="88" ry="12" fill="url(#metal-jumbo)"/>
          <path d="M 80 82 C 80 55, 240 55, 240 82 Z" fill="url(#metal-jumbo)"/>
          <!-- Forged Aluminum Top Handle Bar -->
          <rect x="135" y="46" width="50" height="10" rx="3" fill="#334155"/>
          <circle cx="145" cy="51" r="2.5" fill="#FFFFFF"/>
          <circle cx="175" cy="51" r="2.5" fill="#FFFFFF"/>
          <text x="160" y="155" font-size="11" font-weight="900" fill="#1E293B" text-anchor="middle" letter-spacing="2">GAUGE 8 FEAST</text>
        </svg>
      `,

      // Commercial Halwai Kadai
      "kadai": `
        <svg viewBox="0 0 320 240" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="metal-kadai" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#475569"/>
              <stop offset="25%" stop-color="#E2E8F0"/>
              <stop offset="50%" stop-color="#FFFFFF"/>
              <stop offset="75%" stop-color="#CBD5E1"/>
              <stop offset="100%" stop-color="#334155"/>
            </linearGradient>
            <linearGradient id="iron-handle" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#1E293B"/>
              <stop offset="50%" stop-color="#475569"/>
              <stop offset="100%" stop-color="#0F172A"/>
            </linearGradient>
          </defs>
          <ellipse cx="160" cy="215" rx="85" ry="10" fill="#0F172A" opacity="0.25"/>
          <!-- Deep Kadai Bowl -->
          <path d="M 50 110 C 50 195, 270 195, 270 110 Z" fill="url(#metal-kadai)"/>
          <!-- Inner reflective rim curve -->
          <ellipse cx="160" cy="110" rx="110" ry="24" fill="#64748B"/>
          <ellipse cx="160" cy="112" rx="106" ry="21" fill="url(#metal-kadai)"/>
          <!-- Heavy Iron Riveted Ring Handles -->
          <!-- Left Handle -->
          <path d="M 54 104 C 20 85, 15 135, 52 118" stroke="url(#iron-handle)" stroke-width="12" stroke-linecap="round" fill="none"/>
          <circle cx="58" cy="108" r="4.5" fill="#0F172A"/>
          <circle cx="58" cy="118" r="4.5" fill="#0F172A"/>
          <!-- Right Handle -->
          <path d="M 266 104 C 300 85, 305 135, 268 118" stroke="url(#iron-handle)" stroke-width="12" stroke-linecap="round" fill="none"/>
          <circle cx="262" cy="108" r="4.5" fill="#0F172A"/>
          <circle cx="262" cy="118" r="4.5" fill="#0F172A"/>
          <!-- Specular Highlight -->
          <path d="M 150 115 Q 170 150 180 185 Q 165 186 155 185 Q 145 150 135 115 Z" fill="#FFFFFF" opacity="0.35"/>
          <text x="160" y="152" font-size="9" font-weight="bold" fill="#334155" text-anchor="middle" letter-spacing="1">HALWAI HEAVY GAUGE</text>
        </svg>
      `,

      // Deep Frying Karahi
      "kadai-deep": `
        <svg viewBox="0 0 320 240" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="metal-deep" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#334155"/>
              <stop offset="30%" stop-color="#E2E8F0"/>
              <stop offset="50%" stop-color="#FFFFFF"/>
              <stop offset="80%" stop-color="#94A3B8"/>
              <stop offset="100%" stop-color="#1E293B"/>
            </linearGradient>
          </defs>
          <ellipse cx="160" cy="220" rx="70" ry="8" fill="#0F172A" opacity="0.25"/>
          <!-- Deep Parabolic Bowl -->
          <path d="M 65 95 C 65 210, 255 210, 255 95 Z" fill="url(#metal-deep)"/>
          <ellipse cx="160" cy="95" rx="95" ry="18" fill="#475569"/>
          <ellipse cx="160" cy="97" rx="91" ry="16" fill="url(#metal-deep)"/>
          <!-- Sturdy Ring Handles -->
          <path d="M 68 94 C 38 75, 38 120, 68 106" stroke="#1E293B" stroke-width="10" stroke-linecap="round" fill="none"/>
          <path d="M 252 94 C 282 75, 282 120, 252 106" stroke="#1E293B" stroke-width="10" stroke-linecap="round" fill="none"/>
          <text x="160" y="158" font-size="9" font-weight="bold" fill="#334155" text-anchor="middle">DEEP FRY G10</text>
        </svg>
      `,

      // Flat Bottom Boiling Tope
      "tope": `
        <svg viewBox="0 0 320 240" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="metal-tope" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#475569"/>
              <stop offset="25%" stop-color="#CBD5E1"/>
              <stop offset="50%" stop-color="#FFFFFF"/>
              <stop offset="75%" stop-color="#E2E8F0"/>
              <stop offset="100%" stop-color="#334155"/>
            </linearGradient>
          </defs>
          <ellipse cx="160" cy="218" rx="88" ry="11" fill="#0F172A" opacity="0.25"/>
          <!-- Flat Bottom Straight/Slight Taper Body -->
          <path d="M 85 90 L 92 205 C 92 216, 228 216, 228 205 L 235 90 Z" fill="url(#metal-tope)"/>
          <!-- Specular line -->
          <rect x="168" y="92" width="22" height="116" fill="#FFFFFF" opacity="0.35"/>
          <!-- Heavy Beaded Collar Rim -->
          <ellipse cx="160" cy="90" rx="75" ry="15" fill="#334155"/>
          <ellipse cx="160" cy="88" rx="72" ry="13" fill="#F1F5F9"/>
          <ellipse cx="160" cy="92" rx="66" ry="11" fill="url(#metal-tope)"/>
          <text x="160" y="160" font-size="9" font-weight="bold" fill="#334155" text-anchor="middle" letter-spacing="1">COMMERCIAL TOPE</text>
        </svg>
      `,

      // Heavy Commercial Saucepan / Chai Tope
      "saucepan": `
        <svg viewBox="0 0 320 240" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="metal-sauce" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#475569"/>
              <stop offset="35%" stop-color="#FFFFFF"/>
              <stop offset="70%" stop-color="#CBD5E1"/>
              <stop offset="100%" stop-color="#334155"/>
            </linearGradient>
          </defs>
          <ellipse cx="130" cy="215" rx="65" ry="9" fill="#0F172A" opacity="0.25"/>
          <!-- Deep Pot -->
          <path d="M 75 95 L 82 205 C 82 215, 178 215, 178 205 L 185 95 Z" fill="url(#metal-sauce)"/>
          <!-- Rim with Pouring Spout -->
          <ellipse cx="130" cy="95" rx="55" ry="12" fill="#334155"/>
          <ellipse cx="130" cy="93" rx="52" ry="10" fill="#F8FAFC"/>
          <ellipse cx="130" cy="95" rx="46" ry="8" fill="url(#metal-sauce)"/>
          <!-- Precision Pour Lip on left -->
          <path d="M 73 94 Q 60 93 72 102 Z" fill="#E2E8F0"/>
          <!-- Extended Sturdy Heat-Insulated Handle on Right -->
          <path d="M 183 100 L 290 85 L 292 98 L 183 114 Z" fill="#1E293B"/>
          <rect x="220" y="86" width="65" height="15" rx="4" fill="#0F172A"/>
          <circle cx="282" cy="93" r="3.5" fill="#94A3B8"/>
          <!-- 3 Heavy Mounting Rivets -->
          <circle cx="188" cy="103" r="2.5" fill="#E2E8F0"/>
          <circle cx="188" cy="110" r="2.5" fill="#E2E8F0"/>
          <text x="130" y="160" font-size="9" font-weight="bold" fill="#334155" text-anchor="middle">IRANI CHAI</text>
        </svg>
      `,

      // Kalyana Big Thali
      "thali": `
        <svg viewBox="0 0 320 240" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="metal-thali" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#FFFFFF"/>
              <stop offset="50%" stop-color="#E2E8F0"/>
              <stop offset="85%" stop-color="#CBD5E1"/>
              <stop offset="100%" stop-color="#64748B"/>
            </radialGradient>
          </defs>
          <ellipse cx="160" cy="135" rx="135" ry="60" fill="#0F172A" opacity="0.25"/>
          <!-- Outer Raised Flange Rim -->
          <ellipse cx="160" cy="120" rx="130" ry="55" fill="#475569"/>
          <ellipse cx="160" cy="116" rx="127" ry="53" fill="#FFFFFF"/>
          <ellipse cx="160" cy="120" rx="120" ry="48" fill="#94A3B8"/>
          <!-- Recessed Food Bed -->
          <ellipse cx="160" cy="122" rx="105" ry="40" fill="url(#metal-thali)"/>
          <!-- Specular circular reflection line -->
          <ellipse cx="160" cy="122" rx="75" ry="25" stroke="#FFFFFF" stroke-width="2" fill="none" opacity="0.6"/>
          <text x="160" y="126" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle" letter-spacing="2">MAAR FEAST THALI</text>
        </svg>
      `,

      // Perforated Dum Rice Strainer
      "strainer": `
        <svg viewBox="0 0 320 240" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="metal-strainer" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#475569"/>
              <stop offset="25%" stop-color="#E2E8F0"/>
              <stop offset="50%" stop-color="#FFFFFF"/>
              <stop offset="75%" stop-color="#CBD5E1"/>
              <stop offset="100%" stop-color="#334155"/>
            </linearGradient>
          </defs>
          <ellipse cx="160" cy="215" rx="80" ry="9" fill="#0F172A" opacity="0.25"/>
          <!-- Basin Profile -->
          <path d="M 60 90 C 65 190, 255 190, 260 90 Z" fill="url(#metal-strainer)"/>
          <ellipse cx="160" cy="90" rx="100" ry="20" fill="#334155"/>
          <ellipse cx="160" cy="88" rx="96" ry="17" fill="url(#metal-strainer)"/>
          <!-- Twin Handles -->
          <path d="M 60 88 C 40 75, 40 105, 60 98" stroke="#1E293B" stroke-width="8" stroke-linecap="round" fill="none"/>
          <path d="M 260 88 C 280 75, 280 105, 260 98" stroke="#1E293B" stroke-width="8" stroke-linecap="round" fill="none"/>
          <!-- Perforation Holes Matrix -->
          <g fill="#1E293B" opacity="0.7">
            <circle cx="120" cy="130" r="2.5"/><circle cx="140" cy="130" r="2.5"/><circle cx="160" cy="130" r="2.5"/><circle cx="180" cy="130" r="2.5"/><circle cx="200" cy="130" r="2.5"/>
            <circle cx="110" cy="145" r="2.5"/><circle cx="130" cy="145" r="2.5"/><circle cx="150" cy="145" r="2.5"/><circle cx="170" cy="145" r="2.5"/><circle cx="190" cy="145" r="2.5"/><circle cx="210" cy="145" r="2.5"/>
            <circle cx="120" cy="160" r="2.5"/><circle cx="140" cy="160" r="2.5"/><circle cx="160" cy="160" r="2.5"/><circle cx="180" cy="160" r="2.5"/><circle cx="200" cy="160" r="2.5"/>
            <circle cx="135" cy="175" r="2.5"/><circle cx="155" cy="175" r="2.5"/><circle cx="175" cy="175" r="2.5"/><circle cx="195" cy="175" r="2.5"/>
          </g>
          <text x="160" y="118" font-size="8" font-weight="bold" fill="#334155" text-anchor="middle">RICE STRAINER</text>
        </svg>
      `,

      // Commercial Halwai Jhara
      "jhara": `
        <svg viewBox="0 0 320 240" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="120" cy="160" rx="55" ry="30" fill="#0F172A" opacity="0.25"/>
          <!-- Perforated Ladle Head -->
          <ellipse cx="120" cy="150" rx="50" ry="25" fill="#CBD5E1"/>
          <ellipse cx="120" cy="148" rx="46" ry="22" fill="#E2E8F0"/>
          <!-- Perforations on skimmer -->
          <g fill="#475569" opacity="0.7">
            <circle cx="100" cy="145" r="2"/><circle cx="110" cy="145" r="2"/><circle cx="120" cy="145" r="2"/><circle cx="130" cy="145" r="2"/><circle cx="140" cy="145" r="2"/>
            <circle cx="95" cy="152" r="2"/><circle cx="105" cy="152" r="2"/><circle cx="115" cy="152" r="2"/><circle cx="125" cy="152" r="2"/><circle cx="135" cy="152" r="2"/><circle cx="145" cy="152" r="2"/>
          </g>
          <!-- Long Forged Handle Extending Out -->
          <path d="M 160 142 L 295 50 L 305 60 L 170 152 Z" fill="#1E293B"/>
          <!-- Handle Grip end -->
          <rect x="250" y="65" width="45" height="12" rx="4" transform="rotate(-34 250 65)" fill="#64748B"/>
          <text x="120" y="188" font-size="8" font-weight="bold" fill="#334155" text-anchor="middle">HALWAI JHARA</text>
        </svg>
      `,

      // Tasla / Gamla Mixing Basin
      "tasla": `
        <svg viewBox="0 0 320 240" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="metal-tasla" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#475569"/>
              <stop offset="25%" stop-color="#CBD5E1"/>
              <stop offset="50%" stop-color="#FFFFFF"/>
              <stop offset="75%" stop-color="#E2E8F0"/>
              <stop offset="100%" stop-color="#334155"/>
            </linearGradient>
          </defs>
          <ellipse cx="160" cy="205" rx="90" ry="12" fill="#0F172A" opacity="0.25"/>
          <!-- Wide Flared Basin Body -->
          <path d="M 45 95 C 65 195, 255 195, 275 95 Z" fill="url(#metal-tasla)"/>
          <ellipse cx="160" cy="95" rx="115" ry="25" fill="#334155"/>
          <ellipse cx="160" cy="92" rx="111" ry="22" fill="#FFFFFF"/>
          <ellipse cx="160" cy="95" rx="102" ry="18" fill="url(#metal-tasla)"/>
          <text x="160" y="150" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">ATTA & MASALA TASLA</text>
        </svg>
      `,

      // Seamless Milk Can
      "milk-can": `
        <svg viewBox="0 0 320 240" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="metal-can" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#475569"/>
              <stop offset="25%" stop-color="#E2E8F0"/>
              <stop offset="50%" stop-color="#FFFFFF"/>
              <stop offset="75%" stop-color="#CBD5E1"/>
              <stop offset="100%" stop-color="#334155"/>
            </linearGradient>
          </defs>
          <ellipse cx="160" cy="225" rx="65" ry="10" fill="#0F172A" opacity="0.25"/>
          <!-- Base Ring -->
          <rect x="100" y="200" width="120" height="15" rx="3" fill="#334155"/>
          <!-- Cylindrical Can Body with Tapered Shoulder -->
          <path d="M 120 75 L 105 105 L 105 205 C 105 214, 215 214, 215 205 L 215 105 L 200 75 Z" fill="url(#metal-can)"/>
          <!-- Shading highlight -->
          <rect x="155" y="105" width="20" height="95" fill="#FFFFFF" opacity="0.4"/>
          <!-- Can Neck -->
          <rect x="125" y="55" width="70" height="20" fill="url(#metal-can)"/>
          <!-- Mushroom Lock Lid -->
          <ellipse cx="160" cy="55" rx="42" ry="9" fill="#334155"/>
          <ellipse cx="160" cy="52" rx="40" ry="7" fill="#F8FAFC"/>
          <!-- Overhead Carrying Bail Handle -->
          <path d="M 100 110 C 100 20, 220 20, 220 110" stroke="#1E293B" stroke-width="8" stroke-linecap="round" fill="none"/>
          <!-- Wooden/Alu Grip on Top -->
          <rect x="140" y="24" width="40" height="12" rx="4" fill="#64748B"/>
          <text x="160" y="160" font-size="9" font-weight="900" fill="#1E293B" text-anchor="middle" letter-spacing="1">DAIRY GRADE</text>
        </svg>
      `,

      // Atta/Grain Storage Drum
      "drum": `
        <svg viewBox="0 0 320 240" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="metal-drum" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#475569"/>
              <stop offset="30%" stop-color="#CBD5E1"/>
              <stop offset="50%" stop-color="#FFFFFF"/>
              <stop offset="70%" stop-color="#E2E8F0"/>
              <stop offset="100%" stop-color="#334155"/>
            </linearGradient>
          </defs>
          <ellipse cx="160" cy="225" rx="80" ry="10" fill="#0F172A" opacity="0.25"/>
          <!-- Cylindrical Body -->
          <path d="M 90 70 L 90 210 C 90 220, 230 220, 230 210 L 230 70 Z" fill="url(#metal-drum)"/>
          <!-- Side Handles -->
          <path d="M 88 120 C 72 120, 72 145, 88 145" stroke="#1E293B" stroke-width="8" stroke-linecap="round" fill="none"/>
          <path d="M 232 120 C 248 120, 248 145, 232 145" stroke="#1E293B" stroke-width="8" stroke-linecap="round" fill="none"/>
          <!-- Reinforcing Ribs -->
          <path d="M 90 115 Q 160 128 230 115" stroke="#64748B" stroke-width="3" fill="none" opacity="0.5"/>
          <path d="M 90 165 Q 160 178 230 165" stroke="#64748B" stroke-width="3" fill="none" opacity="0.5"/>
          <!-- Deep Collar Snug Lid -->
          <ellipse cx="160" cy="70" rx="74" ry="14" fill="#334155"/>
          <ellipse cx="160" cy="67" rx="72" ry="12" fill="#E2E8F0"/>
          <circle cx="160" cy="56" r="6" fill="#1E293B"/>
          <text x="160" y="145" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">ATTA / GRAIN DRUM</text>
        </svg>
      `,

      // Ghee Canister with Spout
      "ghee-can": `
        <svg viewBox="0 0 320 240" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="metal-ghee" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#475569"/>
              <stop offset="35%" stop-color="#FFFFFF"/>
              <stop offset="70%" stop-color="#CBD5E1"/>
              <stop offset="100%" stop-color="#334155"/>
            </linearGradient>
          </defs>
          <ellipse cx="150" cy="220" rx="60" ry="8" fill="#0F172A" opacity="0.25"/>
          <path d="M 100 85 L 100 205 C 100 215, 200 215, 200 205 L 200 85 Z" fill="url(#metal-ghee)"/>
          <!-- Pouring Curved Spout -->
          <path d="M 102 120 C 60 100, 50 60, 48 55 L 60 52 C 65 75, 80 110, 102 135 Z" fill="#94A3B8"/>
          <!-- Spout cap -->
          <rect x="42" y="48" width="16" height="8" rx="2" fill="#1E293B"/>
          <!-- Top Lid -->
          <ellipse cx="150" cy="85" rx="50" ry="10" fill="#334155"/>
          <ellipse cx="150" cy="82" rx="47" ry="8" fill="#F8FAFC"/>
          <!-- Overhead Carrying Handle -->
          <path d="M 98 105 C 98 40, 202 40, 202 105" stroke="#1E293B" stroke-width="6" stroke-linecap="round" fill="none"/>
          <text x="150" y="160" font-size="9" font-weight="bold" fill="#334155" text-anchor="middle">GHEE & OIL</text>
        </svg>
      `,

      // Commercial Single Bhatti Stove
      "stove-single": `
        <svg viewBox="0 0 320 240" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <!-- Heavy Angle Iron Stand -->
          <rect x="70" y="90" width="180" height="24" rx="3" fill="#1E293B"/>
          <!-- Heavy Legs -->
          <rect x="75" y="114" width="16" height="100" fill="#0F172A"/>
          <rect x="229" y="114" width="16" height="100" fill="#0F172A"/>
          <!-- Cross Braces -->
          <rect x="75" y="180" width="170" height="10" fill="#1E293B"/>
          <!-- Cast Iron High Pressure Burner Head -->
          <ellipse cx="160" cy="90" rx="40" ry="16" fill="#334155"/>
          <ellipse cx="160" cy="88" rx="35" ry="13" fill="#475569"/>
          <!-- Blue Flame effect -->
          <ellipse cx="160" cy="86" rx="28" ry="9" fill="#0EA5E9" opacity="0.8"/>
          <ellipse cx="160" cy="85" rx="18" ry="6" fill="#38BDF8"/>
          <!-- Brass Gas Cock Valve -->
          <rect x="150" y="125" width="20" height="12" fill="#EAB308"/>
          <circle cx="160" cy="145" r="7" fill="#DC2626"/>
          <!-- Pan Supports / Grate -->
          <rect x="80" y="78" width="160" height="12" rx="2" fill="#475569"/>
          <text x="160" y="210" font-size="9" font-weight="900" fill="#F8FAFC" text-anchor="middle" letter-spacing="1">HIGH PRESSURE BHATTI</text>
        </svg>
      `,

      // Double Burner Bhatti
      "stove-double": `
        <svg viewBox="0 0 320 240" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <!-- Stand Frame -->
          <rect x="35" y="100" width="250" height="20" rx="3" fill="#1E293B"/>
          <rect x="42" y="120" width="14" height="95" fill="#0F172A"/>
          <rect x="153" y="120" width="14" height="95" fill="#0F172A"/>
          <rect x="264" y="120" width="14" height="95" fill="#0F172A"/>
          <rect x="42" y="175" width="236" height="8" fill="#1E293B"/>
          <!-- Left Burner -->
          <ellipse cx="100" cy="100" rx="30" ry="12" fill="#334155"/>
          <ellipse cx="100" cy="97" rx="20" ry="6" fill="#0284C7"/>
          <!-- Right Burner -->
          <ellipse cx="220" cy="100" rx="30" ry="12" fill="#334155"/>
          <ellipse cx="220" cy="97" rx="20" ry="6" fill="#0284C7"/>
          <!-- Valves -->
          <circle cx="100" cy="132" r="6" fill="#DC2626"/>
          <circle cx="220" cy="132" r="6" fill="#DC2626"/>
          <text x="160" y="210" font-size="9" font-weight="bold" fill="#CBD5E1" text-anchor="middle">DUAL CATERING BHATTI</text>
        </svg>
      `,

      // Commercial Idli Steamer Box
      "idli-steamer": `
        <svg viewBox="0 0 320 240" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="metal-box" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#475569"/>
              <stop offset="20%" stop-color="#E2E8F0"/>
              <stop offset="50%" stop-color="#FFFFFF"/>
              <stop offset="80%" stop-color="#CBD5E1"/>
              <stop offset="100%" stop-color="#334155"/>
            </linearGradient>
          </defs>
          <rect x="80" y="215" width="160" height="12" rx="4" fill="#0F172A" opacity="0.25"/>
          <!-- Steamer Cabinet Box -->
          <rect x="85" y="60" width="150" height="150" rx="6" fill="url(#metal-box)"/>
          <!-- Door Frame Outline -->
          <rect x="95" y="70" width="130" height="130" rx="4" fill="#CBD5E1" stroke="#475569" stroke-width="2"/>
          <!-- Steam vent chimney on top -->
          <rect x="150" y="46" width="20" height="14" rx="2" fill="#334155"/>
          <!-- Door Heavy Cam Latch Handle -->
          <rect x="210" y="125" width="8" height="30" rx="2" fill="#0F172A"/>
          <circle cx="214" cy="140" r="6" fill="#DC2626"/>
          <!-- Multi-tier tray indicators -->
          <line x1="105" y1="95" x2="205" y2="95" stroke="#64748B" stroke-width="2"/>
          <line x1="105" y1="120" x2="205" y2="120" stroke="#64748B" stroke-width="2"/>
          <line x1="105" y1="145" x2="205" y2="145" stroke="#64748B" stroke-width="2"/>
          <line x1="105" y1="170" x2="205" y2="170" stroke="#64748B" stroke-width="2"/>
          <text x="160" y="188" font-size="9" font-weight="bold" fill="#1E293B" text-anchor="middle">COMMERCIAL IDLI STEAMER</text>
        </svg>
      `,

      // Patila / Deghchi Cauldron
      "patila": `
        <svg viewBox="0 0 320 240" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="metal-patila" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#475569"/>
              <stop offset="25%" stop-color="#E2E8F0"/>
              <stop offset="50%" stop-color="#FFFFFF"/>
              <stop offset="75%" stop-color="#CBD5E1"/>
              <stop offset="100%" stop-color="#334155"/>
            </linearGradient>
          </defs>
          <ellipse cx="160" cy="220" rx="85" ry="10" fill="#0F172A" opacity="0.25"/>
          <!-- Deep Cauldron Body -->
          <path d="M 80 85 L 85 205 C 85 218, 235 218, 235 205 L 240 85 Z" fill="url(#metal-patila)"/>
          <ellipse cx="160" cy="85" rx="80" ry="15" fill="#334155"/>
          <ellipse cx="160" cy="83" rx="77" ry="13" fill="#F8FAFC"/>
          <!-- Flat Aluminum Lid -->
          <ellipse cx="160" cy="78" rx="75" ry="11" fill="url(#metal-patila)"/>
          <circle cx="160" cy="70" r="7" fill="#1E293B"/>
          <circle cx="160" cy="68" r="4" fill="#FFFFFF"/>
          <text x="160" y="155" font-size="9" font-weight="bold" fill="#334155" text-anchor="middle" letter-spacing="1">RICE & SAMBAR PATILA</text>
        </svg>
      `
    };

    return svgs[type] || svgs["deg"];
  }
};
