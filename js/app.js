/**
 * Main Application Script — ThS.BS. Nguyễn Hữu Sâm Surgical Portfolio
 * Design System v4.0 · Light Chill Accessible 2026
 */

// Mobile Navigation Toggle (legacy sub-pages)
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => menu.classList.toggle('hidden'));
  }
}

// Sensitive Image Toggle
function toggleSensitiveImage(button) {
  const container = button.closest('.sensitive-container');
  if (!container) return;
  container.querySelectorAll('.sensitive-blur').forEach(el => {
    el.classList.toggle('sensitive-unblurred');
    el.classList.toggle('sensitive-blur');
  });
  const overlay = container.querySelector('.sensitive-overlay');
  if (overlay) overlay.classList.toggle('hidden');
}

// ── DATA HELPERS ──────────────────────────────────────────────
function getCaseById(id)    { return SURGICAL_CASES.find(c => c.id === id) || null; }
function getArticleById(id) { return MEDICAL_ARTICLES.find(a => a.id === id) || null; }

// ── TRAUMA CARD (Light) ──────────────────────────────────────
function createTraumaCardHtml(c) {
  const tagsHtml = c.tags.map(t =>
    `<span class="tag tag-blue">${t}</span>`
  ).join('');

  const sensitiveOverlay = c.sensitiveImage ? `
    <div class="sensitive-overlay absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center z-20">
      <span class="tag tag-amber mb-2">Ảnh phẫu thuật chuyên khoa</span>
      <p class="text-xs text-slate-500 mb-3">Chứa hình ảnh y khoa thực tế trong mổ</p>
      <button onclick="toggleSensitiveImage(this)" class="btn btn-primary text-xs py-2 px-4">Xem hình ảnh</button>
    </div>` : '';

  const imgSrc = c.postOp?.imaging || c.preOp?.imaging || '';

  return `
    <div class="medical-card card-blue">
      <!-- Image -->
      <div class="relative aspect-[16/10] overflow-hidden group ${c.sensitiveImage ? 'sensitive-container' : ''}">
        ${imgSrc ? `<img src="${imgSrc}" alt="${c.title}"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${c.sensitiveImage ? 'sensitive-blur' : ''}">` : `<div class="w-full h-full bg-gradient-to-br from-sky-50 to-sky-100 flex items-center justify-center text-4xl">🦴</div>`}
        <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
        ${sensitiveOverlay}
        <div class="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-600 text-[10px] px-2.5 py-1 rounded-lg font-mono font-bold shadow-xs">
          ${c.id}
        </div>
        <div class="absolute top-3 right-3 bg-sky-600/90 backdrop-blur-md text-white text-[10px] px-2.5 py-1 rounded-lg font-bold shadow-xs">
          ${c.category}
        </div>
      </div>

      <!-- Content -->
      <div class="p-5 flex flex-col flex-1">
        <div class="flex items-center gap-1.5 text-[11px] text-slate-400 mb-2">
          <svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          ${c.date} · ${c.patientInfo}
        </div>
        <h3 class="text-base font-bold text-slate-800 mb-2 leading-snug clamp-2">
          <a href="case-detail.html?id=${c.id}" class="hover:text-sky-700 transition-colors">${c.title}</a>
        </h3>
        <p class="text-[13px] text-slate-500 clamp-3 mb-4 leading-relaxed flex-1">${c.summary}</p>
        <div class="flex flex-wrap gap-1.5 mb-4">${tagsHtml}</div>
        <a href="case-detail.html?id=${c.id}"
          class="flex items-center justify-center gap-2 bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-700 text-xs font-bold py-2.5 px-4 rounded-xl transition-all">
          Xem chi tiết ca mổ
          <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" d="M5 12h14m-7-7 7 7-7 7"/></svg>
        </a>
      </div>
    </div>`;
}

// ── PLASTIC CARD with Before/After Slider (Light) ────────────
function createPlasticCardHtml(c) {
  const tagsHtml = c.tags.map(t =>
    `<span class="tag tag-teal">${t}</span>`
  ).join('');

  const sensitiveOverlay = c.sensitiveImage ? `
    <div class="sensitive-overlay absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center z-20">
      <span class="tag tag-amber mb-2">Ảnh thực tế vi phẫu tạo hình</span>
      <button onclick="toggleSensitiveImage(this)" class="btn btn-teal text-xs py-2 px-4 mt-2">Kéo xem so sánh</button>
    </div>` : '';

  return `
    <div class="medical-card card-teal">
      <!-- BA Slider -->
      <div class="p-3 border-b border-slate-100">
        <div class="ba-container ${c.sensitiveImage ? 'sensitive-container' : ''}">
          <img src="${c.beforeImg || c.preOp?.imaging || ''}" alt="Trước phẫu thuật"
            class="ba-image ${c.sensitiveImage ? 'sensitive-blur' : ''}">
          <div class="ba-badge ba-badge-before">Trước mổ</div>
          <div class="ba-after-wrapper">
            <img src="${c.afterImg || c.postOp?.imaging || ''}" alt="Sau phẫu thuật"
              class="ba-image ${c.sensitiveImage ? 'sensitive-blur' : ''}">
            <div class="ba-badge ba-badge-after">Sau mổ</div>
          </div>
          <div class="ba-slider-handle">
            <svg width="14" height="14" fill="none" stroke="#0369A1" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l-3 3 3 3m8-6l3 3-3 3"/>
            </svg>
          </div>
          ${sensitiveOverlay}
        </div>
        <p class="text-[10px] text-center text-slate-400 mt-2 flex items-center justify-center gap-1">
          <svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/></svg>
          Kéo thanh trượt để so sánh
        </p>
      </div>

      <!-- Content -->
      <div class="p-5 flex flex-col flex-1">
        <div class="flex items-center justify-between mb-2.5">
          <span class="tag tag-teal text-[10px]">${c.category}</span>
          <span class="text-[10px] text-slate-400 font-mono">${c.id}</span>
        </div>
        <h3 class="text-base font-bold text-slate-800 mb-2 leading-snug clamp-2">
          <a href="case-detail.html?id=${c.id}" class="hover:text-teal-700 transition-colors">${c.title}</a>
        </h3>
        <p class="text-[13px] text-slate-500 clamp-3 mb-4 leading-relaxed flex-1">${c.summary}</p>
        <div class="flex flex-wrap gap-1.5 mb-4">${tagsHtml}</div>
        <a href="case-detail.html?id=${c.id}"
          class="flex items-center justify-center gap-2 bg-teal-50 hover:bg-teal-100 border border-teal-200 text-teal-700 text-xs font-bold py-2.5 px-4 rounded-xl transition-all">
          Xem chi tiết & Kỹ thuật mổ
          <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" d="M5 12h14m-7-7 7 7-7 7"/></svg>
        </a>
      </div>
    </div>`;
}

// ── ARTICLE CARD (Light) ─────────────────────────────────────
function createArticleCardHtml(a) {
  const tagsHtml = a.tags.map(t =>
    `<span class="tag tag-gray text-[10px]">${t}</span>`
  ).join('');

  return `
    <div class="medical-card card-violet">
      <!-- Cover -->
      <div class="relative aspect-[16/9] overflow-hidden group bg-slate-900">
        <img src="${a.coverImage}" alt="${a.title}"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]">
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
        <div class="absolute top-3 left-3 bg-violet-600/90 backdrop-blur-md text-white text-[10px] px-2.5 py-1 rounded-lg font-bold shadow-xs">
          ${a.category}
        </div>
      </div>

      <!-- Content -->
      <div class="p-5 flex flex-col flex-1">
        <div class="flex items-center justify-between text-[11px] text-slate-400 mb-2">
          <span>${a.date}</span>
          <span class="flex items-center gap-1">
            <svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" d="M12 6v6l4 2"/></svg>
            ${a.readTime}
          </span>
        </div>
        <h3 class="text-base font-bold text-slate-800 mb-2 leading-snug clamp-2">
          <a href="article-detail.html?id=${a.id}" class="hover:text-violet-700 transition-colors">${a.title}</a>
        </h3>
        <p class="text-[13px] text-slate-500 clamp-3 mb-4 leading-relaxed flex-1">${a.summary}</p>
        <div class="flex flex-wrap gap-1.5 mb-4">${tagsHtml}</div>
        <a href="article-detail.html?id=${a.id}"
          class="flex items-center justify-center gap-2 bg-violet-50 hover:bg-violet-100 border border-violet-200 text-violet-700 text-xs font-bold py-2.5 px-4 rounded-xl transition-all">
          Đọc bài viết đầy đủ
          <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" d="M5 12h14m-7-7 7 7-7 7"/></svg>
        </a>
      </div>
    </div>`;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
});
