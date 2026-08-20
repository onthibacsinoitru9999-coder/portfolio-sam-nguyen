# HƯỚNG DẪN ĐỒNG BỘ NỘI DUNG LÊN WEBSITE PORTFOLIO TỪ ANTIGRAVITY (PROJECT KHÁC)

Tài liệu này dành cho **Antigravity AI** hoặc bất kỳ phiên làm việc nào khác muốn tự động cập nhật, thêm ca mổ mới, thêm bài viết chuyên môn và đẩy (deploy) trực tiếp lên website chính thức của **ThS.BS. Nguyễn Hữu Sâm**.

---

## 📌 1. THÔNG TIN HỆ THỐNG & ĐỊA CHỈ TRANG WEB

* **Trang Web Chính Thức:** [https://onthibacsinoitru9999-coder.github.io/portfolio-sam-nguyen/](https://onthibacsinoitru9999-coder.github.io/portfolio-sam-nguyen/)
* **Kho Lưu Trữ GitHub (Repository):** `onthibacsinoitru9999-coder/portfolio-sam-nguyen`
* **Nhánh Triển Khai (Branch):** `main`
* **Mã Xác Thực GitHub (PAT):** `<YOUR_GITHUB_TOKEN>` (Truy cập github.com/settings/tokens để lấy hoặc lưu vào biến môi trường)

---

## 📂 2. CẤU TRÚC DỮ LIỆU & NƠI LƯU NỘI DUNG

Website hoạt động dạng **tĩnh thuần túy (Static SPA/MPA)**, toàn bộ nội dung được lưu trữ dưới dạng mảng JSON trong 2 tệp Javascript:

```
d:/myportfilio/
├── js/
│   ├── cases-data.js      <-- Chứa danh sách TẤT CẢ các ca phẫu thuật (Chấn thương & Tạo hình)
│   └── articles-data.js   <-- Chứa danh sách TẤT CẢ các bài viết kiến thức y khoa
├── assets/
│   └── images/
│       ├── cases/         <-- Nơi chứa ảnh X-quang, ảnh trước/sau mổ
│       └── zalo-qr.jpg    <-- Ảnh QR Zalo bác sĩ
├── deploy-github-api.ps1  <-- Kịch bản tự động tải lên GitHub qua REST API
└── index.html, chan-thuong.html, tao-hinh.html, kien-thuc.html, case-detail.html, article-detail.html
```

---

## 💉 3. CÁCH THÊM CA PHẪU THUẬT MỚI (VÀO `js/cases-data.js`)

Để thêm ca mổ mới, chỉ cần nối thêm một đối tượng vào mảng `SURGICAL_CASES`:

### A. Mẫu Ca Chấn Thương Chỉnh Hình (`type: 'chan-thuong'`):
```javascript
{
  id: "CT-2025-001",
  type: "chan-thuong",
  title: "Kết hợp xương gãy kín 1/3 dưới xương cẳng tay bằng nẹp vít khóa LCP",
  category: "Chi trên", // 'Chi trên' | 'Chi dưới' | 'Bàn tay'
  date: "15/01/2025",
  hospital: "BV Bạch Mai",
  patientInfo: "Bệnh nhân nam, 42 tuổi",
  summary: "Tóm tắt ngắn gọn chẩn đoán, cơ chế chấn thương và kết quả sau can thiệp.",
  tags: ["Xâm lấn tối thiểu", "Chi trên", "Nẹp LCP", "Cẳng tay"],
  sensitiveImage: false, // Đặt true nếu ảnh có yếu tố nhạy cảm/phẫu trường mở
  preOp: {
    diagnosis: "Gãy kín 1/3 dưới 2 xương cẳng tay trái di lệch gập góc",
    symptoms: "Đau chói, biến dạng chi, hạn chế vận động sấp ngửa",
    imaging: "https://images.unsplash.com/photo-...", // Link ảnh hoặc đường dẫn assets/images/...
    imagingDesc: "X-quang trước mổ: Di lệch hoàn toàn trục xương"
  },
  intraOp: {
    technique: "Mổ nắn kín/mở tối thiểu dưới C-arm, cố định nẹp LCP 3.5mm",
    duration: "45 phút",
    bloodLoss: "< 30ml",
    anesthesia: "Tê đám rối thần kinh cánh tay",
    implant: "Nẹp vít khóa LCP Titan (Hãng Synthes/Stryker)"
  },
  postOp: {
    recovery: "Bệnh nhân tập phục hồi chức năng sớm ngày thứ 2 sau mổ. Sau 6 tuần xương liền tốt vững chắc.",
    imaging: "https://images.unsplash.com/photo-...",
    imagingDesc: "X-quang sau mổ: Trục giải phẫu phục hồi hoàn toàn 100%"
  }
}
```

### B. Mẫu Ca Tạo Hình Vi Phẫu Có So Sánh Trước/Sau (`type: 'tao-hinh'`):
```javascript
{
  id: "TH-2025-001",
  type: "tao-hinh",
  title: "Tạo hình khuyết hổng phần mềm mu bàn tay bằng vạt da nhánh xiên tự thân",
  category: "Vạt da tự thân",
  date: "20/02/2025",
  hospital: "BV Bạch Mai",
  patientInfo: "Bệnh nhân nữ, 35 tuổi",
  summary: "Che phủ khuyết hổng lộ gân mu tay bằng vạt da vi phẫu, bảo tồn tối đa chức năng bàn tay.",
  tags: ["Vi phẫu", "Vạt da", "Bàn tay", "Tái tạo mô"],
  beforeImg: "assets/images/cases/th-001-before.jpg", // Ảnh trước mổ
  afterImg: "assets/images/cases/th-001-after.jpg",   // Ảnh sau mổ (dùng cho thanh trượt)
  sensitiveImage: false,
  preOp: {
    diagnosis: "Khuyết hổng phần mềm mu tay kích thước 4x6cm lộ gân duỗi",
    symptoms: "Mất chất da, bờ tổn thương sạch, chưa hoại tử gân",
    imagingDesc: "Tổn thương khuyết hổng mô mềm"
  },
  intraOp: {
    technique: "Bóc vạt da nhánh xiên động mạch quay, chuyển vạt che phủ khuyết hổng",
    duration: "90 phút",
    bloodLoss: "50ml",
    anesthesia: "Mê nội khí quản",
    flapType: "Vạt da nhánh xiên (Perforator Flap)"
  },
  postOp: {
    recovery: "Vạt sống hoàn toàn 100%, hồng ấm sau 24h, phục hồi biên độ vận động ngón tay tốt.",
    imagingDesc: "Sau mổ 3 tháng: Sẹo mềm, chức năng gập duỗi đạt 95%"
  }
}
```

---

## 📖 4. CÁCH THÊM BÀI VIẾT Y KHOA MỚI (VÀO `js/articles-data.js`)

Nối thêm vào mảng `MEDICAL_ARTICLES`:

```javascript
{
  id: "ART-2025-001",
  title: "Nguyên Tắc Cố Định Vững Chắc Theo Chuẩn AO/ASIF Trong Gãy Xương Vùng Khớp",
  category: "Kỹ thuật mổ", // 'Kỹ thuật mổ' | 'Phục hồi chức năng' | 'Y học tái tạo'
  date: "25/02/2025",
  author: "ThS.BS. Nguyễn Hữu Sâm",
  readTime: "5 phút đọc",
  summary: "Phân tích các nguyên lý cơ sinh học, chỉ định can thiệp xâm lấn tối thiểu và hạn chế tổn thương màng xương.",
  coverImage: "https://images.unsplash.com/photo-...",
  tags: ["AO ASIF", "Kết hợp xương", "Kháng sinh dự phòng"],
  content: `
    <h3>1. Đặt Vấn Đề</h3>
    <p>Nội dung chi tiết bài viết (chấp nhận định dạng thẻ HTML chuẩn)...</p>
    <h3>2. Nguyên Tắc Cốt Lõi</h3>
    <p>Phục hồi diện khớp hoàn hảo giải phẫu và cố định vững chắc tuyệt đối...</p>
  `
}
```

---

## 🚀 5. LỆNH ĐỒNG BỘ / PUSH NỘI DUNG LÊN GITHUB PAGES

Sau khi chỉnh sửa hoặc tạo thêm nội dung ở project khác, Antigravity chỉ cần chạy **1 dòng lệnh PowerShell** sau:

```powershell
& "d:\myportfilio\deploy-github-api.ps1" -Token "<YOUR_GITHUB_PAT_TOKEN>" -RepoName "portfolio-sam-nguyen"
```

### Cách thức hoạt động của kịch bản `deploy-github-api.ps1`:
1. Kết nối đến GitHub REST API với mã xác thực Token của Bác sĩ.
2. Tự động so sánh SHA của từng tệp tin và cập nhật tệp mới lên nhánh `main`.
3. GitHub Pages sẽ tự động kích hoạt tiến trình Build và nội dung mới sẽ online trên mạng trong vòng **60 giây**.

---

## 🤖 6. PROMPT MẪU CHO ANTIGRAVITY Ở BẤT KỲ PHIÊN NÀO

Khi mở một phiên làm việc mới với Antigravity, Bác sĩ chỉ cần copy & paste lời nhắc (prompt) sau:

> *"Hãy đọc tài liệu `d:\myportfilio\ANTIGRAVITY_SYNC_GUIDE.md`. Tôi muốn thêm ca mổ mới / bài viết mới vào portfolio. Sau khi thêm vào `cases-data.js` (hoặc `articles-data.js`), hãy tự động chạy `deploy-github-api.ps1` để đẩy lên trang web GitHub Pages giúp tôi."*
