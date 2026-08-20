# HƯỚNG DẪN XUẤT BẢN WEBSITE LÊN GITHUB PAGES VÀ QUẢN LÝ CA MỔ

Tài liệu này hướng dẫn chi tiết cách kết nối mã nguồn từ **Antigravity** lên **GitHub Pages** để website chạy trực tuyến hoàn toàn miễn phí và cách thêm ca mổ mới.

---

## PHẦN 1: CÁCH LIÊN KẾT & XUẤT BẢN LÊN GITHUB PAGES (LÀM 1 LẦN DUY NHẤT)

### Bước 1: Tạo Repository trên GitHub
1. Truy cập [https://github.com/](https://github.com/) và đăng nhập tài khoản.
2. Bấm vào nút **"New repository"** (hoặc dấu `+` ở góc trên cùng bên phải).
3. Đặt tên repository: ví dụ `myportfolio` hoặc `portfolio-phauthuat` (hoặc đặt tên `<username>.github.io` nếu muốn làm trang web chính).
4. Chọn chế độ **Public** (để dùng tính năng GitHub Pages miễn phí).
5. **Không** tích chọn "Add a README file" hay bất kỳ tùy chọn khởi tạo nào $\rightarrow$ Bấm nút xanh **"Create repository"**.
6. Sao chép đường dẫn URL của Repository (dạng: `https://github.com/<tên-user>/<tên-repo>.git`).

### Bước 2: Bật tính năng GitHub Pages trên GitHub
1. Trong trang Repository vừa tạo trên GitHub, bấm vào tab **Settings** (ở thanh menu phía trên).
2. Ở cột bên trái, bấm vào mục **Pages** (trong phần *Code and automation*).
3. Tại mục **Build and deployment**:
   * **Source**: Chọn `Deploy from a branch`.
   * **Branch**: Chọn `main` và thư mục `/(root)`.
   * Bấm **Save**.
4. Chờ khoảng 1-2 phút, GitHub sẽ hiển thị đường link website trực tuyến của bạn (ví dụ: `https://<tên-user>.github.io/<tên-repo>/`).

### Bước 3: Đẩy mã nguồn từ Antigravity lên GitHub
Bạn có 2 cách thực hiện:

#### Cách 1: Chạy file script tự động (Khuyên dùng)
* Mở thư mục `d:\myportfilio` và nhấp đúp chuột vào file `deploy.bat`.
* Script sẽ tự động hỏi URL GitHub Repository bạn vừa copy ở Bước 1. Bạn dán vào và nhấn `Enter`. Toàn bộ website sẽ được đẩy lên GitHub!

#### Cách 2: Chạy lệnh trong Terminal của Antigravity
Mở Terminal trong Antigravity và chạy lần lượt các lệnh sau:
```bash
git init
git add .
git commit -m "Khoi tao website Portfolio Y Khoa"
git branch -M main
git remote add origin https://github.com/<tên-user>/<tên-repo>.git
git push -u origin main
```

---

## PHẦN 2: CÁCH CẬP NHẬT & THÊM CA MỔ MỚI HÀNG NGÀY

### 1. Thêm Ca mổ Chấn thương / Tạo hình mới
* Mở file [`js/cases-data.js`](file:///d:/myportfilio/js/cases-data.js).
* Sao chép một khối ca mổ mẫu và thay đổi thông tin (tiêu đề, chẩn đoán, kỹ thuật mổ, link ảnh X-quang hoặc Before/After).
* Ví dụ cấu trúc ca mổ:
```javascript
{
  id: "CT-2025-004",
  type: "chan-thuong", // Hoặc "tao-hinh"
  category: "Gãy xương chi trên",
  title: "Tiêu đề ca mổ...",
  patientInfo: "Bệnh nhân Nam, 35 tuổi...",
  date: "20/03/2025",
  hospital: "Bệnh viện Đa khoa Tỉnh",
  tags: ["Xương đùi", "Đinh nội tủy", "Chi dưới"],
  summary: "Tóm tắt ca mổ...",
  preOp: {
    diagnosis: "Chẩn đoán trước mổ...",
    symptoms: "Triệu chứng...",
    imaging: "link_ảnh_hoặc_đường_dẫn_ảnh",
    imagingDesc: "Mô tả phim X-quang..."
  },
  intraOp: {
    technique: "Mô tả kỹ thuật can thiệp...",
    duration: "60 phút",
    bloodLoss: "40 ml",
    anesthesia: "Tê tủy sống",
    implant: "Nẹp vít khóa Titan"
  },
  postOp: {
    imaging: "link_ảnh_sau_mổ",
    imagingDesc: "Mô tả X-quang sau mổ...",
    recovery: "Tiến trình phục hồi sau mổ..."
  },
  featured: true,
  sensitiveImage: false // Đổi thành true nếu là ảnh phẫu thuật cần cảnh báo/làm mờ
}
```

### 2. Thêm Bài viết Kiến thức Y khoa mới
* Mở file [`js/articles-data.js`](file:///d:/myportfilio/js/articles-data.js).
* Thêm bài viết mới vào mảng `MEDICAL_ARTICLES` với tiêu đề, tóm tắt, thẻ chuyên ngành và nội dung định dạng HTML.

### 3. Xuất bản cập nhật lên Web
Sau khi chỉnh sửa xong trong Antigravity, bạn chỉ cần:
* Nhấp đúp chuột vào file `deploy.bat` $\rightarrow$ Nhập ghi chú cập nhật (hoặc nhấn Enter) $\rightarrow$ Website trên GitHub Pages sẽ tự động cập nhật sau 30-60 giây!

---

## PHẦN 3: TÙY BIẾN THÔNG TIN BÁC SĨ & TÊN MIỀN RIÊNG

* **Đổi tên bác sĩ & thông tin liên hệ**: Mở file [`index.html`](file:///d:/myportfilio/index.html), tìm đoạn "BS. PHẪU THUẬT" và email liên hệ ở phần `#contact` để sửa theo thông tin của bạn.
* **Gắn tên miền riêng (Custom Domain)**: Nếu bạn có tên miền riêng (ví dụ: `drphauthuat.vn`), bạn vào GitHub Repository $\rightarrow$ **Settings** $\rightarrow$ **Pages** $\rightarrow$ Điền tên miền vào ô **Custom domain** $\rightarrow$ Trỏ bản ghi DNS CNAME theo hướng dẫn của GitHub.
