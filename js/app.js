/**
 * ============================================================================
 * MAAR METALS (M A Abdul Rahman Metals) - Official Product Catalog Web App
 * ============================================================================
 * 
 * SHOP OWNER INSTRUCTION:
 * Replace the number below with your actual 10-digit or 12-digit WhatsApp phone number
 * (include country code, e.g., '919087055806' for India).
 */
const WHATSAPP_NUMBER = "919087055806"; 

// App State
const state = {
  currentCategory: "all",
  searchQuery: "",
  activePurchaseFilter: "all", // "all", "wholesale", "retail"
  selectedProductForModal: null,
  selectedSizeIndex: 0,
  modalOrderType: "Wholesale", // "Wholesale" or "Retail"
  modalQuantity: 1,
  biryaniGuests: 100,
  rfqSelectedCategories: []
};

/**
 * Builds the official WhatsApp link with properly encoded message
 */
function getWhatsAppInquiryUrl(productName, purchaseType = "Wholesale", size = null, quantity = null) {
  let message;
  
  if (size && quantity && quantity > 1) {
    message = `Hello MAAR Metals, I am interested in inquiring about ${productName} (${purchaseType}). Size/Capacity: ${size}, Quantity: ${quantity} units. Please share pricing and bulk details.`;
  } else if (size) {
    message = `Hello MAAR Metals, I am interested in inquiring about ${productName} (${purchaseType}). Selected Size: ${size}. Please share pricing and bulk details.`;
  } else {
    // Standard format requested in specifications
    message = `Hello MAAR Metals, I am interested in inquiring about ${productName} (${purchaseType}). Please share pricing and bulk details.`;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

/**
 * Builds the WhatsApp link for Wholesale Rate Sheet & Bulk Quotation
 */
function getWhatsAppWholesaleUrl(businessType = "Commercial Kitchen / Caterer", requirements = "Complete Utensils & Degs", city = "Local") {
  const message = `Hello MAAR Metals, I would like to request the latest Wholesale Price List & Catalog for ${businessType}. Required Utensils: ${requirements}. Location: ${city}. Please share wholesale quotations.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds the WhatsApp link for Biryani Deg Capacity Calculator
 */
function getWhatsAppBiryaniCalculatorUrl(guests, riceKg, degRecommendation) {
  const message = `Hello MAAR Metals, I am planning biryani preparation for approximately ${guests} guests (approx ${riceKg}). Recommended Deg: ${degRecommendation}. Please share available sizes and wholesale pricing.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// DOM Elements Initialization
document.addEventListener("DOMContentLoaded", () => {
  initCategoryPills();
  initSearch();
  initQuickTags();
  renderProducts();
  initModals();
  initBiryaniCalculator();
  initWholesaleRFQ();
  initMobileNavigation();
  initFloatingWhatsApp();
  initWhatsAppNumberDisplay();
});

/**
 * Display active WhatsApp number in footer and allow quick live testing
 */
function initWhatsAppNumberDisplay() {
  const displayEls = document.querySelectorAll(".contact-phone-display");
  displayEls.forEach(el => {
    // Format for human reading e.g., +91 98765 43210
    const formatted = WHATSAPP_NUMBER.startsWith("91") && WHATSAPP_NUMBER.length === 12
      ? `+91 ${WHATSAPP_NUMBER.slice(2, 7)} ${WHATSAPP_NUMBER.slice(7)}`
      : `+${WHATSAPP_NUMBER}`;
    el.textContent = formatted;
  });

  const telLinks = document.querySelectorAll(".contact-tel-link");
  telLinks.forEach(link => {
    link.href = `tel:+${WHATSAPP_NUMBER}`;
  });
}

/**
 * Category filtering pills setup with mobile smooth centering
 */
function initCategoryPills() {
  const pills = document.querySelectorAll(".category-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      state.currentCategory = pill.getAttribute("data-category");
      renderProducts();
      
      // Auto-scroll pill into center view on mobile screens
      pill.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    });
  });
}

/**
 * Instant Live Search
 */
function initSearch() {
  const searchInput = document.getElementById("search-input");
  const clearBtn = document.getElementById("clear-search-btn");

  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    if (clearBtn) {
      clearBtn.classList.toggle("hidden", state.searchQuery.length === 0);
    }
    renderProducts();
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      state.searchQuery = "";
      clearBtn.classList.add("hidden");
      renderProducts();
      searchInput.focus();
    });
  }
}

/**
 * Quick search suggestion tags
 */
function initQuickTags() {
  const tags = document.querySelectorAll(".quick-tag");
  tags.forEach(tag => {
    tag.addEventListener("click", () => {
      const query = tag.getAttribute("data-query");
      const searchInput = document.getElementById("search-input");
      const clearBtn = document.getElementById("clear-search-btn");

      if (searchInput) {
        searchInput.value = query;
        state.searchQuery = query.toLowerCase();
        if (clearBtn) clearBtn.classList.remove("hidden");
        renderProducts();
        
        // Scroll to catalog section smoothly
        document.getElementById("catalog-section")?.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

/**
 * Filters the product dataset based on active filters and live search
 */
function getFilteredProducts() {
  return PRODUCTS_DATA.filter(product => {
    // Category match
    const matchesCategory = (state.currentCategory === "all") || (product.category === state.currentCategory);
    
    // Live Search match
    let matchesSearch = true;
    if (state.searchQuery) {
      const q = state.searchQuery;
      const titleMatch = product.name.toLowerCase().includes(q);
      const gaugeMatch = product.gauge.toLowerCase().includes(q);
      const categoryMatch = product.categoryLabel.toLowerCase().includes(q);
      const descMatch = product.description.toLowerCase().includes(q);
      const sizeMatch = product.sizeRange.toLowerCase().includes(q) || 
                         product.sizes.some(s => s.label.toLowerCase().includes(q) || (s.capacity && s.capacity.toLowerCase().includes(q)));
      const idealMatch = product.idealFor.toLowerCase().includes(q);

      matchesSearch = titleMatch || gaugeMatch || categoryMatch || descMatch || sizeMatch || idealMatch;
    }

    return matchesCategory && matchesSearch;
  });
}

/**
 * Main Product Grid Renderer - supports Real Product Photos, Brand Logo Stamp, & Vector Fallback
 */
function renderProducts() {
  const grid = document.getElementById("products-grid");
  const countBadge = document.getElementById("results-count");
  const emptyState = document.getElementById("empty-state");

  if (!grid) return;

  const filtered = getFilteredProducts();

  // Update counter
  if (countBadge) {
    countBadge.textContent = `Showing ${filtered.length} of ${PRODUCTS_DATA.length} utensils`;
  }

  // Handle empty state
  if (filtered.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");

  // Render cards
  grid.innerHTML = filtered.map(product => {
    const waUrl = getWhatsAppInquiryUrl(product.name, "Wholesale/Retail");
    const svgIllustration = CookwareIllustrations.render(product.illustration, product.name);
    const hasImage = Boolean(product.image && product.image.trim().length > 0);

    return `
      <article class="product-card bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between" data-id="${product.id}">
        <!-- Top Image / Vector Illustration Area -->
        <div class="relative bg-gradient-to-b from-slate-100 to-slate-200/70 p-4 sm:p-6 flex items-center justify-center min-h-[220px] cursor-pointer group" onclick="openProductModal('${product.id}')">
          <!-- Badges -->
          <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
            <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-900 text-white shadow-sm">
              ${product.gaugeBadge}
            </span>
            ${product.badge ? `
              <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-amber-100 text-amber-800 border border-amber-200">
                ★ ${product.badge}
              </span>
            ` : ''}
          </div>

          <div class="absolute top-3 right-3 z-10 pointer-events-none">
            <span class="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
              Wholesale & Retail
            </span>
          </div>

          <!-- Product Media Container: Real Image with Instant Vector Fallback -->
          <div class="product-media-wrapper w-full max-w-[230px] h-[160px] flex items-center justify-center relative">
            ${hasImage ? `
              <img 
                src="${product.image}" 
                alt="${product.name}" 
                loading="lazy" 
                decoding="async" 
                class="product-real-image w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');"
              />
              <div class="product-illustration w-full h-full flex items-center justify-center hidden">
                ${svgIllustration}
              </div>
            ` : `
              <div class="product-illustration w-full h-full flex items-center justify-center">
                ${svgIllustration}
              </div>
            `}
          </div>

          <!-- Official MAAR METALS Brand Logo Watermark Stamp -->
          <div class="absolute bottom-2.5 right-2.5 z-10 flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-900/85 backdrop-blur-sm text-[10px] font-bold text-slate-100 border border-slate-700/80 shadow-sm pointer-events-none">
            <span class="w-3.5 h-3.5 rounded bg-gradient-to-br from-slate-700 to-slate-900 text-white flex items-center justify-center text-[9px] font-black border border-slate-600">M</span>
            <span class="tracking-wider">MAAR METALS</span>
          </div>

          <!-- Quick View Hover Hint on Desktop -->
          <div class="hidden sm:flex absolute inset-0 bg-slate-900/10 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center pointer-events-none">
            <span class="bg-white/95 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
              <svg class="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              View Sizes & Specs
            </span>
          </div>
        </div>

        <!-- Card Body Content -->
        <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span class="font-medium uppercase tracking-wider text-slate-500 text-[11px] sm:text-xs">${product.categoryLabel}</span>
              <span class="text-slate-400 font-mono text-[11px]">${product.sizes.length} Sizes</span>
            </div>

            <h3 class="text-base sm:text-lg font-bold text-slate-900 group-hover:text-slate-800 cursor-pointer line-clamp-1" onclick="openProductModal('${product.id}')" title="${product.name}">
              ${product.name}
            </h3>

            <p class="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
              ${product.description}
            </p>

            <!-- Technical Tags -->
            <div class="mt-3.5 pt-3 border-t border-slate-100 space-y-1.5 text-xs">
              <div class="flex items-start gap-2">
                <span class="text-slate-400 shrink-0 font-medium">Capacity:</span>
                <span class="text-slate-800 font-medium">${product.sizeRange}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-slate-400 shrink-0 font-medium">Material:</span>
                <span class="text-slate-700 font-medium truncate">${product.material}</span>
              </div>
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="mt-5 pt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
            <!-- Quick View / Size Picker Button -->
            <button 
              type="button" 
              onclick="openProductModal('${product.id}')"
              class="w-full sm:w-auto px-3 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center justify-center gap-1.5 touch-target btn-tactile transition-colors"
              title="View all available sizes"
            >
              <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
              <span>Sizes (${product.sizes.length})</span>
            </button>

            <!-- Primary Inquire on WhatsApp Button (CRITICAL REQUIREMENT) -->
            <a 
              href="${waUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="flex-1 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all touch-target btn-tactile"
              aria-label="Inquire about ${product.name} on WhatsApp"
            >
              <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

/**
 * Modal Handling (Product Quick View & Size Selector)
 */
function initModals() {
  const modal = document.getElementById("product-modal");
  const closeBtn = document.getElementById("close-product-modal");
  const backdrop = document.getElementById("product-modal-backdrop");

  if (!modal) return;

  function closeModal() {
    modal.classList.add("hidden");
    document.body.classList.remove("modal-open");
    state.selectedProductForModal = null;
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  // Escape key listener
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });

  // Quantity stepper
  const qtyMinus = document.getElementById("modal-qty-minus");
  const qtyPlus = document.getElementById("modal-qty-plus");
  const qtyInput = document.getElementById("modal-qty-input");

  if (qtyMinus && qtyPlus && qtyInput) {
    qtyMinus.addEventListener("click", () => {
      let val = parseInt(qtyInput.value) || 1;
      if (val > 1) {
        val -= 1;
        qtyInput.value = val;
        state.modalQuantity = val;
        updateModalWhatsAppButton();
      }
    });

    qtyPlus.addEventListener("click", () => {
      let val = parseInt(qtyInput.value) || 1;
      val += 1;
      qtyInput.value = val;
      state.modalQuantity = val;
      updateModalWhatsAppButton();
    });

    qtyInput.addEventListener("change", () => {
      let val = parseInt(qtyInput.value) || 1;
      if (val < 1) val = 1;
      qtyInput.value = val;
      state.modalQuantity = val;
      updateModalWhatsAppButton();
    });
  }

  // Order type selector (Wholesale vs Retail)
  const orderTypeRadios = document.querySelectorAll("input[name='modal-order-type']");
  orderTypeRadios.forEach(radio => {
    radio.addEventListener("change", (e) => {
      state.modalOrderType = e.target.value;
      updateModalWhatsAppButton();
    });
  });
}

/**
 * Opens detailed size & specs modal for a selected product (Mobile Bottom Sheet Friendly)
 */
window.openProductModal = function(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  state.selectedProductForModal = product;
  state.selectedSizeIndex = 0;
  state.modalQuantity = 1;

  const modal = document.getElementById("product-modal");
  const modalTitle = document.getElementById("modal-product-title");
  const modalCategory = document.getElementById("modal-product-category");
  const modalGauge = document.getElementById("modal-product-gauge");
  const modalMaterial = document.getElementById("modal-product-material");
  const modalDesc = document.getElementById("modal-product-desc");
  const modalSvg = document.getElementById("modal-product-svg");
  const modalSizesList = document.getElementById("modal-sizes-list");
  const modalFeatures = document.getElementById("modal-features-list");
  const modalIdeal = document.getElementById("modal-product-ideal");
  const qtyInput = document.getElementById("modal-qty-input");

  if (modalTitle) modalTitle.textContent = product.name;
  if (modalCategory) modalCategory.textContent = product.categoryLabel;
  if (modalGauge) modalGauge.textContent = product.gauge;
  if (modalMaterial) modalMaterial.textContent = product.material;
  if (modalDesc) modalDesc.textContent = product.description;
  if (modalIdeal) modalIdeal.textContent = product.idealFor;
  if (qtyInput) qtyInput.value = 1;

  // Render modal product visual with brand stamp
  if (modalSvg) {
    const hasImage = Boolean(product.image && product.image.trim().length > 0);
    const svgIllustration = CookwareIllustrations.render(product.illustration, product.name);
    
    modalSvg.innerHTML = `
      <div class="relative w-full h-full flex items-center justify-center">
        ${hasImage ? `
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            class="product-modal-img w-full h-full object-contain filter drop-shadow-md"
            onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');"
          />
          <div class="product-illustration w-full h-full flex items-center justify-center hidden">
            ${svgIllustration}
          </div>
        ` : `
          <div class="product-illustration w-full h-full flex items-center justify-center">
            ${svgIllustration}
          </div>
        `}
        <!-- Branded Logo Seal Watermark -->
        <div class="absolute bottom-1 right-1 flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900/85 backdrop-blur-sm text-[9px] font-bold text-slate-100 border border-slate-700/60 pointer-events-none shadow-sm">
          <span class="w-3.5 h-3.5 rounded bg-gradient-to-br from-slate-700 to-slate-900 text-white flex items-center justify-center text-[8.5px] font-black border border-slate-600">M</span>
          <span>MAAR METALS AUTHENTIC</span>
        </div>
      </div>
    `;
  }

  // Render Features list
  if (modalFeatures && product.features) {
    modalFeatures.innerHTML = product.features.map(f => `
      <li class="flex items-start gap-2 text-xs text-slate-700">
        <svg class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
        <span>${f}</span>
      </li>
    `).join("");
  }

  // Render Size Options
  if (modalSizesList) {
    modalSizesList.innerHTML = product.sizes.map((s, idx) => `
      <button 
        type="button" 
        onclick="selectModalSize(${idx})" 
        class="size-option-pill text-left p-3 rounded-xl border ${idx === 0 ? 'selected' : 'border-slate-200 hover:border-slate-300 bg-white'} transition-all btn-tactile"
        data-index="${idx}"
      >
        <div class="text-xs font-bold text-slate-900">${s.label}</div>
        <div class="text-[11px] text-slate-500 mt-0.5 flex flex-wrap gap-x-2">
          ${s.capacity ? `<span>Vol: <strong>${s.capacity}</strong></span>` : ''}
          ${s.weight ? `<span>Net Wt: <strong>${s.weight}</strong></span>` : ''}
          ${s.dumCapacity ? `<span>Dum: <strong>${s.dumCapacity}</strong></span>` : ''}
          ${s.diameter ? `<span>Dia: <strong>${s.diameter}</strong></span>` : ''}
        </div>
      </button>
    `).join("");
  }

  updateModalWhatsAppButton();

  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
};

/**
 * Select a specific size variant inside the modal
 */
window.selectModalSize = function(index) {
  state.selectedSizeIndex = index;
  const pills = document.querySelectorAll(".size-option-pill");
  pills.forEach((p, idx) => {
    if (idx === index) {
      p.classList.add("selected");
    } else {
      p.classList.remove("selected");
    }
  });

  updateModalWhatsAppButton();
};

/**
 * Updates the WhatsApp button inside the Quick View modal
 */
function updateModalWhatsAppButton() {
  const btn = document.getElementById("modal-whatsapp-btn");
  if (!btn || !state.selectedProductForModal) return;

  const product = state.selectedProductForModal;
  const currentSizeObj = product.sizes[state.selectedSizeIndex] || product.sizes[0];
  const sizeLabel = currentSizeObj ? currentSizeObj.label : product.defaultSize;

  const waUrl = getWhatsAppInquiryUrl(
    product.name, 
    state.modalOrderType, 
    sizeLabel, 
    state.modalQuantity
  );

  btn.href = waUrl;
  btn.innerHTML = `
    <svg class="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
    <span>Inquire on WhatsApp (${state.modalOrderType} • ${state.modalQuantity} ${state.modalQuantity > 1 ? 'Units' : 'Unit'})</span>
  `;
}

/**
 * Biryani Deg Capacity Estimator for Caterers & Commercial Chefs
 */
function initBiryaniCalculator() {
  const slider = document.getElementById("biryani-guest-slider");
  const guestDisplay = document.getElementById("biryani-guest-count");
  const riceKgDisplay = document.getElementById("biryani-calc-rice");
  const degSizeDisplay = document.getElementById("biryani-calc-deg");
  const recommendDisplay = document.getElementById("biryani-calc-recommendation");
  const waBtn = document.getElementById("biryani-calc-whatsapp-btn");

  if (!slider) return;

  function updateCalculation(guests) {
    state.biryaniGuests = guests;
    if (guestDisplay) guestDisplay.textContent = `${guests} Guests`;

    const match = BIRYANI_CALCULATOR_DATA.find(item => guests >= item.minGuests && guests <= item.maxGuests) 
                  || BIRYANI_CALCULATOR_DATA[BIRYANI_CALCULATOR_DATA.length - 1];

    if (riceKgDisplay) riceKgDisplay.textContent = match.riceKg;
    if (degSizeDisplay) degSizeDisplay.textContent = match.degSize;
    if (recommendDisplay) recommendDisplay.textContent = match.recommendedDeg;

    if (waBtn) {
      waBtn.href = getWhatsAppBiryaniCalculatorUrl(guests, match.riceKg, match.recommendedDeg);
    }
  }

  slider.addEventListener("input", (e) => {
    updateCalculation(parseInt(e.target.value));
  });

  // Quick preset guest buttons
  const presets = document.querySelectorAll(".guest-preset-btn");
  presets.forEach(btn => {
    btn.addEventListener("click", () => {
      const g = parseInt(btn.getAttribute("data-guests"));
      slider.value = g;
      updateCalculation(g);
    });
  });

  // Initial calculation
  updateCalculation(100);
}

/**
 * Wholesale RFQ & Bulk Quotation System
 */
function initWholesaleRFQ() {
  const rfqForm = document.getElementById("wholesale-rfq-form");
  const quickListBtn = document.getElementById("btn-request-price-list");

  // Direct price list WhatsApp button
  if (quickListBtn) {
    quickListBtn.href = getWhatsAppWholesaleUrl("Wholesale Buyer / Retail Store", "Complete Commercial Catalog & Price List", "Direct Inquiry");
  }

  if (!rfqForm) return;

  rfqForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const bizName = document.getElementById("rfq-business-name")?.value || "Commercial Business";
    const bizType = document.getElementById("rfq-business-type")?.value || "Catering & Hotel";
    const city = document.getElementById("rfq-city")?.value || "India";
    const details = document.getElementById("rfq-requirements")?.value || "Bulk Utensils";

    const message = `Hello MAAR Metals, I am requesting a Wholesale Quotation for:\n• Business: ${bizName} (${bizType})\n• City/Location: ${city}\n• Required Utensils: ${details}\n\nPlease share wholesale pricing and transport information.`;

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  });
}

/**
 * Mobile Navigation Drawer & Smooth Scrolling
 */
function initMobileNavigation() {
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const drawerBackdrop = document.getElementById("mobile-drawer-backdrop");
  const closeDrawer = document.getElementById("close-mobile-drawer");

  if (!mobileDrawer) return;

  function toggleMenu(show) {
    if (show) {
      mobileDrawer.classList.remove("hidden");
      document.body.classList.add("modal-open");
    } else {
      mobileDrawer.classList.add("hidden");
      document.body.classList.remove("modal-open");
    }
  }

  if (menuToggle) menuToggle.addEventListener("click", () => toggleMenu(true));
  if (closeDrawer) closeDrawer.addEventListener("click", () => toggleMenu(false));
  if (drawerBackdrop) drawerBackdrop.addEventListener("click", () => toggleMenu(false));

  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  mobileNavLinks.forEach(link => {
    link.addEventListener("click", () => toggleMenu(false));
  });
}

/**
 * Floating WhatsApp Quick Contact Button
 */
function initFloatingWhatsApp() {
  const floatingBtn = document.getElementById("floating-whatsapp-btn");
  if (!floatingBtn) return;

  const defaultMessage = "Hello MAAR Metals, I am interested in inquiring about your aluminum utensils and commercial cookware catalog.";
  floatingBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMessage)}`;
}

/**
 * Global helper to scroll to catalog with category pre-selected
 */
window.navigateToCategory = function(catKey) {
  state.currentCategory = catKey;
  const pills = document.querySelectorAll(".category-pill");
  let activePill = null;
  pills.forEach(p => {
    if (p.getAttribute("data-category") === catKey) {
      p.classList.add("active");
      activePill = p;
    } else {
      p.classList.remove("active");
    }
  });

  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";
  state.searchQuery = "";

  renderProducts();
  
  if (activePill) {
    activePill.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  document.getElementById("catalog-section")?.scrollIntoView({ behavior: "smooth" });
};
