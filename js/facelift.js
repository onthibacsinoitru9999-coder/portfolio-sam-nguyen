/**
 * AMERICAN FACELIFT INSTITUTE & REJUVENATION CLINIC
 * Interactive Engine: Before/After Slider, Anatomy Explorer, Aging Quiz & VIP Booking
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initBeforeAfterSlider();
  initCaseSwitcher();
  initAnatomyExplorer();
  initAgingQuiz();
  initFaqAccordion();
  initBookingForm();
});

/* ── 1. Navbar Sticky Effect ── */
function initNavbarScroll() {
  const nav = document.getElementById('faceliftNav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });

  const mobileBtn = document.getElementById('mobileFaceliftBtn');
  const mobileMenu = document.getElementById('mobileFaceliftMenu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

/* ── 2. Before / After Comparison Slider ── */
let isDragging = false;

function initBeforeAfterSlider() {
  const container = document.getElementById('baContainer');
  const beforeWrapper = document.getElementById('baBeforeWrapper');
  const handle = document.getElementById('baHandle');

  if (!container || !beforeWrapper || !handle) return;

  function setSliderPosition(x) {
    const rect = container.getBoundingClientRect();
    let pos = (x - rect.left) / rect.width;
    if (pos < 0.05) pos = 0.05;
    if (pos > 0.95) pos = 0.95;

    const percentage = pos * 100;
    beforeWrapper.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    handle.style.left = `${percentage}%`;
  }

  function onPointerDown(e) {
    isDragging = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setSliderPosition(clientX);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onPointerUp);
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    setSliderPosition(e.clientX);
  }

  function onTouchMove(e) {
    if (!isDragging) return;
    if (e.touches && e.touches[0]) {
      setSliderPosition(e.touches[0].clientX);
      e.preventDefault();
    }
  }

  function onPointerUp() {
    isDragging = false;
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('touchend', onPointerUp);
  }

  container.addEventListener('pointerdown', onPointerDown);
  handle.addEventListener('pointerdown', (e) => {
    e.stopPropagation();
    onPointerDown(e);
  });
}

/* ── 3. Clinical Case Switcher ── */
const CLINICAL_CASES = {
  case1: {
    title: "Ca 01: Nữ 52 tuổi — Deep Plane Facelift & Căng Da Cổ Tầng Sâu",
    technique: "Deep Plane Facelift toàn phần + Platysmaplasty cơ bám da cổ",
    doctor: "ThS.BS Phẫu thuật Tạo hình Vi phẫu Viện Trung Ương",
    warranty: "Bảo hành cấu trúc 10 năm theo văn bản",
    beforeSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
    afterSrc: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=80",
    description: "Khách hàng 52 tuổi với tình trạng rãnh cười sâu, khóe miệng trễ và nọng cằm mất viền hàm. Bác sĩ bóc tách giải phóng toàn bộ dây chằng giữ mặt (Zygomatic & Masseteric ligaments), nâng đỡ khối cơ mặt theo vector thẳng đứng. Kết quả trẻ lại 12 - 15 tuổi, biểu cảm tự nhiên mềm mại tuyệt đối.",
    rejuvenation: "Trẻ hóa 15 năm",
    scarless: "Đường mổ giấu vi phẫu trong gờ bình tai"
  },
  case2: {
    title: "Ca 02: Nữ 39 tuổi — Căng Da Nội Soi Không Sẹo (Endoscopic Scarless Lift)",
    technique: "Căng da nội soi Mid-Face & Thái dương vi phẫu",
    doctor: "ThS.BS Bệnh viện Tuyến Trung Ương",
    warranty: "Bảo hành cấu trúc 10 năm",
    beforeSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80",
    afterSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
    description: "Bệnh nhân 39 tuổi xuất hiện dấu hiệu sa trễ má sớm và đuôi mắt mệt mỏi nhưng rất sợ sẹo quanh tai. Thực hiện căng da nội soi vi phẫu Karl Storz HD qua 3 điểm rạch 1cm ẩn sâu trong tóc thái dương. Tuyệt đối KHÔNG có đường rạch trước hay sau tai. Hồi phục đi làm sau 5 ngày.",
    rejuvenation: "Trẻ hóa 8 - 10 năm",
    scarless: "100% không sẹo lộ, giấu trọn trong chân tóc"
  }
};

function initCaseSwitcher() {
  const tabBtns = document.querySelectorAll('[data-case-tab]');
  const beforeImg = document.getElementById('baBeforeImg');
  const afterImg = document.getElementById('baAfterImg');
  const caseTitle = document.getElementById('caseTitle');
  const caseDesc = document.getElementById('caseDesc');
  const caseTech = document.getElementById('caseTech');
  const caseRejuv = document.getElementById('caseRejuv');

  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const caseKey = btn.getAttribute('data-case-tab');
      const data = CLINICAL_CASES[caseKey];
      if (!data) return;

      tabBtns.forEach(b => {
        b.classList.remove('active', 'border-[#005BAC]', 'bg-[#005BAC]', 'text-white', 'shadow-xs');
        b.classList.add('border-slate-200', 'bg-white', 'text-slate-700');
      });
      btn.classList.add('active', 'border-[#005BAC]', 'bg-[#005BAC]', 'text-white', 'shadow-xs');
      btn.classList.remove('border-slate-200', 'bg-white', 'text-slate-700');

      // Update Images & Details with subtle fade
      if (beforeImg && afterImg) {
        beforeImg.src = data.beforeSrc;
        afterImg.src = data.afterSrc;
      }
      if (caseTitle) caseTitle.textContent = data.title;
      if (caseDesc) caseDesc.textContent = data.description;
      if (caseTech) caseTech.textContent = data.technique;
      if (caseRejuv) caseRejuv.textContent = data.rejuvenation;
    });
  });
}

/* ── 4. 4-Layer Anatomy Interactive Explorer ── */
const ANATOMY_LAYERS = {
  layer1: {
    name: "Tầng 1: Lớp Biểu Bì & Trung Bì (Da)",
    depth: "Độ dày: 1.0 - 1.8 mm",
    mechanism: "Bản chất da là mô đàn hồi sinh học. Căng da kiểu cũ chỉ kéo da đơn thuần (skin-only lift) sẽ nhanh chóng bị giãn chùng trở lại sau 1-2 năm, đồng thời tạo lực căng lớn khiến vết sẹo trước tai bị giãn rộng và gây biến dạng miệng 'gió thổi'.",
    approach: "Deep Plane Facelift không hề tạo lực căng trên da. Toàn bộ lực treo được đặt lên lớp cân cơ SMAS tầng sâu, da chỉ được áp nhẹ và cắt phần dư thừa tự nhiên, giúp đường khâu vi phẫu tàng hình hoàn toàn.",
    highlightColor: "#FBBF24"
  },
  layer2: {
    name: "Tầng 2: Lớp Mỡ Nông Dưới Da (Subcutaneous Fat)",
    depth: "Độ dày: 2.0 - 6.0 mm",
    mechanism: "Khối mỡ má nông (Malar fat pad) khi trẻ bám chắc trên gò má. Theo tuổi tác, dây chằng lỏng lẻo khiến khối mỡ này trượt võng xuống dưới, tạo thành rãnh mũi má sâu và nọng mỡ viền hàm (jowls).",
    approach: "Kỹ thuật nội soi hoặc Deep plane đưa toàn bộ khối mỡ này trở lại đúng đỉnh gò má ban đầu mà không cần hút mỡ làm hóp mặt.",
    highlightColor: "#FB923C"
  },
  layer3: {
    name: "Tầng 3: Cân Cơ SMAS & Hệ Thống Dây Chằng (Chìa Khóa 10 Năm)",
    depth: "Tầng can thiệp quyết định",
    mechanism: "SMAS là hệ thống cân mạc cơ liên kết liên tục từ cơ trán, cơ bám da mặt đến cơ bám da cổ (platysma). Dây chằng Zygomatic và Masseteric đóng vai trò mỏ neo. Khi dây chằng bị giãn, toàn bộ khuôn mặt đổ sụp.",
    approach: "Tiêu chuẩn phẫu thuật Hoa Kỳ: Bác sĩ vi phẫu bóc tách bên dưới SMAS, giải phóng toàn bộ dây chằng neo giữ, kéo nâng toàn bộ khối cơ mặt theo phương thẳng đứng. Đây là lý do phẫu thuật DUY TRÌ BỀN VỮNG TRÊN 10 NĂM.",
    highlightColor: "#38BDF8"
  },
  layer4: {
    name: "Tầng 4: Deep Plane, Màng Xương & Dây Thần Kinh Mặt",
    depth: "Vùng khoang giải phẫu an toàn của Bác sĩ Vi phẫu",
    mechanism: "Bên dưới lớp SMAS là các nhánh của dây thần kinh mặt VII chi phối biểu cảm nụ cười và cử động cơ mặt.",
    approach: "Chỉ Thạc sĩ - Bác sĩ Nội trú chuyên khoa Tạo hình & Vi phẫu Bệnh viện Tuyến Trung Ương mới có đủ kiến thức giải phẫu tinh vi để thao tác chính xác trong khoang Deep Plane vô mạch, bảo vệ tuyệt đối 100% dây thần kinh, đảm bảo nụ cười hoàn toàn tự nhiên không hề đơ cứng.",
    highlightColor: "#C084FC"
  }
};

function initAnatomyExplorer() {
  const buttons = document.querySelectorAll('[data-anatomy-layer]');
  const titleEl = document.getElementById('anatomyTitle');
  const depthEl = document.getElementById('anatomyDepth');
  const mechEl = document.getElementById('anatomyMech');
  const appEl = document.getElementById('anatomyApp');

  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const layerKey = btn.getAttribute('data-anatomy-layer');
      const data = ANATOMY_LAYERS[layerKey];
      if (!data) return;

      buttons.forEach(b => {
        b.classList.remove('border-2', 'border-[#005BAC]', 'bg-sky-50', 'text-[#005BAC]');
        b.classList.add('border', 'border-slate-200', 'bg-white', 'text-slate-700');
      });
      btn.classList.add('border-2', 'border-[#005BAC]', 'bg-sky-50', 'text-[#005BAC]');
      btn.classList.remove('border', 'border-slate-200', 'bg-white', 'text-slate-700');

      if (titleEl) titleEl.textContent = data.name;
      if (depthEl) depthEl.textContent = data.depth;
      if (mechEl) mechEl.textContent = data.mechanism;
      if (appEl) appEl.textContent = data.approach;
    });
  });
}

/* ── 5. 2-Minute Aging Assessment Quiz ── */
function initAgingQuiz() {
  const quizForm = document.getElementById('agingQuizForm');
  const resultBox = document.getElementById('quizResultBox');
  const submitBtn = document.getElementById('calcQuizBtn');

  if (!quizForm || !submitBtn || !resultBox) return;

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const checkedBoxes = quizForm.querySelectorAll('input[type="checkbox"]:checked');
    const ageSelect = document.getElementById('quizAgeSelect');
    const selectedAge = ageSelect ? parseInt(ageSelect.value) : 45;

    let score = 0;
    const symptoms = [];

    checkedBoxes.forEach(cb => {
      score += parseInt(cb.value);
      symptoms.push(cb.getAttribute('data-label'));
    });

    // Determine recommendation
    let procedure = "";
    let rejuvYears = "";
    let reason = "";
    let warranty = "Cam kết bảo hành 10 năm";

    if (score <= 3 && selectedAge < 45) {
      procedure = "Căng Da Nội Soi Không Sẹo (Endoscopic Scarless Facelift)";
      rejuvYears = "Trẻ lại 7 - 10 tuổi";
      reason = "Tình trạng lão hóa tập trung ở tầng giữa mặt và đuôi mắt. Kỹ thuật nội soi vi phẫu giấu 100% vết mổ trong chân tóc thái dương là lựa chọn hoàn hảo nhất — KHÔNG sẹo trước tai, hồi phục sau 5-7 ngày.";
    } else if (score <= 6) {
      procedure = "Deep Plane Facelift Tầng Giữa & Viền Hàm (Mid & Lower Face)";
      rejuvYears = "Trẻ lại 10 - 13 tuổi";
      reason = "Khối mỡ má đã trượt xệ tạo rãnh cười sâu và viền hàm bắt đầu mất nét. Cần can thiệp tầng sâu dưới SMAS để giải phóng dây chằng gò má, nâng đỡ cấu trúc cơ mặt bền vững 10 năm.";
    } else {
      procedure = "Master Rejuvenation: Deep Plane Facelift Toàn Phần + Căng Da Cổ Tầng Sâu (Neck Lift)";
      rejuvYears = "Trẻ lại 12 - 16 tuổi";
      reason = "Xuất hiện sa trễ đa tầng: Rãnh marionette khóe miệng, đọng mỡ jowls và chùng cơ bám da cổ platysma. Phối hợp căng da mặt tầng sâu và tạo hình cơ cổ sẽ tái lập góc cổ - cằm 90 độ hoàn hảo như thời thanh xuân.";
    }

    // Render result
    document.getElementById('resProcedure').textContent = procedure;
    document.getElementById('resYears').textContent = rejuvYears;
    document.getElementById('resReason').textContent = reason;
    document.getElementById('resWarranty').textContent = warranty;

    // Fill recommendation into consultation booking form automatically
    const consultNote = document.getElementById('bookingNotes');
    if (consultNote) {
      consultNote.value = `Kết quả tự đánh giá: ${procedure}. Tuổi: ${selectedAge}. Triệu chứng ghi nhận: ${symptoms.join(', ')}`;
    }

    resultBox.classList.remove('hidden');
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

/* ── 6. FAQ Accordion ── */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.facelift-faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    if (!header || !content) return;

    header.addEventListener('click', () => {
      const isOpen = !content.classList.contains('hidden');
      // Close all
      document.querySelectorAll('.facelift-faq-item .faq-content').forEach(c => c.classList.add('hidden'));
      document.querySelectorAll('.facelift-faq-item .faq-icon').forEach(i => i.style.transform = 'rotate(0deg)');

      if (!isOpen) {
        content.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

/* ── 7. VIP Booking Form & Image Upload ── */
function initBookingForm() {
  const form = document.getElementById('faceliftBookingForm');
  const fileInput = document.getElementById('facePhotoInput');
  const previewDiv = document.getElementById('photoPreviewDiv');
  const previewImg = document.getElementById('photoPreviewImg');

  if (fileInput && previewDiv && previewImg) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          previewImg.src = event.target.result;
          previewDiv.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('bookingName').value;
      const phone = document.getElementById('bookingPhone').value;
      const tech = document.getElementById('bookingTech').value;
      const notes = document.getElementById('bookingNotes').value;

      const message = `Kính gửi ThS.BS Viện Trung Ương, tôi muốn đặt lịch tư vấn Facelift:%0A- Họ tên: ${encodeURIComponent(name)}%0A- SĐT: ${encodeURIComponent(phone)}%0A- Kỹ thuật quan tâm: ${encodeURIComponent(tech)}%0A- Ghi chú: ${encodeURIComponent(notes)}`;

      // Redirect to Zalo VIP Consultation
      window.open(`https://zalo.me/0373030031?text=${message}`, '_blank');

      const successModal = document.getElementById('bookingSuccessAlert');
      if (successModal) {
        successModal.classList.remove('hidden');
      }
    });
  }
}
