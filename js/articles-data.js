/**
 * Dữ liệu Bài viết & Kiến thức Y khoa - Medical Knowledge & Clinical Articles
 * Tác giả: ThS.BS. Nguyễn Hữu Sâm - Khoa Chấn thương chỉnh hình và Cột sống BV Bạch Mai
 */

const MEDICAL_ARTICLES = [
  {
    id: "MED-ART-001",
    category: "Phác đồ & Guideline",
    title: "Cập nhật nguyên tắc kết hợp xương sinh học vững chắc theo tiêu chuẩn AO/ASIF hiện đại",
    author: "ThS.BS. Nguyễn Hữu Sâm (BV Bạch Mai)",
    date: "12/01/2025",
    readTime: "8 phút đọc",
    tags: ["AO/ASIF", "Kết hợp xương sinh học", "Xâm lấn tối thiểu", "Nẹp khóa LCP"],
    summary: "Tổng quan về sự dịch chuyển từ cố định cơ học tuyệt đối sang bảo tồn tưới máu màng xương (Biological Internal Fixation) trong phẫu thuật chấn thương chỉnh hình hiện đại.",
    coverImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    content: `
      <h3>1. Đặt vấn đề & Lịch sử phát triển</h3>
      <p>Trong nhiều thập kỷ trước, nguyên tắc kinh điển của hiệp hội AO nhấn mạnh vào việc nắn chỉnh giải phẫu tuyệt đối và nén ép ổ gãy cứng nhắc (Absolute Stability). Tuy nhiên, việc bộc lộ quá rộng để áp nẹp sát xương thường làm tổn thương hệ thống mạch máu nuôi dưỡng màng xương, dẫn đến biến chứng chậm liền xương hoặc nhiễm trùng.</p>
      
      <h3>2. Khái niệm Kết hợp xương Sinh học (Biological Osteosynthesis)</h3>
      <p>Xu hướng phẫu thuật hiện nay tại Khoa Chấn thương Chỉnh hình và Cột sống BV Bạch Mai tập trung vào <strong>bảo tồn tối đa nguồn cấp máu tại chỗ</strong> bằng cách:</p>
      <ul>
        <li>Nắn chỉnh gián tiếp dưới màn tăng sáng C-arm không mở trực tiếp ổ gãy (Kỹ thuật MIPO).</li>
        <li>Sử dụng các hệ thống nẹp vít khóa (Locking Compression Plate - LCP) hoạt động như một khung cố định trong (Internal Fixator), nẹp không cần ép chặt vào màng xương.</li>
        <li>Bảo tồn khối máu tụ tự nhiên chứa nhiều tế bào gốc trung mô và cytokine kích thích tạo can xương thứ phát.</li>
      </ul>

      <h3>3. Tiêu chuẩn lựa chọn phương pháp cố định</h3>
      <table class="w-full text-sm text-left my-4 border border-slate-200">
        <thead class="bg-slate-100 font-semibold text-slate-700">
          <tr>
            <th class="p-3 border">Loại tổn thương</th>
            <th class="p-3 border">Mục tiêu độ vững</th>
            <th class="p-3 border">Phương tiện đề xuất</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-3 border font-medium">Gãy nội khớp</td>
            <td class="p-3 border">Tuyệt đối (Nắn giải phẫu phẳng diện khớp)</td>
            <td class="p-3 border">Nẹp vít khóa giải phẫu + Vít xốp nén ép</td>
          </tr>
          <tr>
            <td class="p-3 border font-medium">Gãy thân xương nhiều mảnh</td>
            <td class="p-3 border">Tương đối (Phục hồi chiều dài, trục & góc xoay)</td>
            <td class="p-3 border">Đinh nội tủy có chốt hoặc nẹp cầu (Bridge Plating)</td>
          </tr>
        </tbody>
      </table>

      <h3>4. Kết luận lâm sàng</h3>
      <p>Kết hợp xương sinh học giúp giảm thiểu đáng kể tỷ lệ tiêu xương chết, rút ngắn thời gian phẫu thuật và cho phép bệnh nhân bắt đầu tập vận động phục hồi chức năng sớm.</p>
    `
  },
  {
    id: "MED-ART-002",
    category: "Kỹ thuật Vi phẫu & Bàn tay",
    title: "Ứng dụng Y học tái tạo và vạt da tự thân trong điều trị tổn thương phức tạp bàn tay",
    author: "ThS.BS. Nguyễn Hữu Sâm (BV Bạch Mai)",
    date: "05/02/2025",
    readTime: "10 phút đọc",
    tags: ["Y học tái tạo", "Phẫu thuật bàn tay", "Vật liệu tự thân", "Vi phẫu"],
    summary: "Tổng hợp các kỹ thuật tái tạo gân, mạch máu, thần kinh và che phủ khuyết hổng phần mềm bàn tay bằng các cấu trúc mô tự thân đem lại khả năng phục hồi chức năng tối ưu.",
    coverImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    content: `
      <h3>1. Đặc thù giải phẫu & Chức năng bàn tay</h3>
      <p>Bàn tay là cơ quan vận động tinh vi và cảm giác nhạy bén hàng đầu của cơ thể. Bất kỳ tổn thương khuyết hổng nào ở bàn tay cũng đòi hỏi chiến lược tái tạo bảo tồn tối đa chiều dài ngón, cảm giác đầu ngón và khả năng cầm nắm.</p>
      
      <h3>2. Ứng dụng vật liệu tự thân trong tạo hình</h3>
      <p>Sử dụng các nguồn mô tự thân (gân ghép tự thân, vạt da nhánh xiên cuống mạch liền, ghép mỡ tự thân giàu tế bào gốc) mang lại các ưu thế sinh học vượt trội:</p>
      <ul>
        <li><strong>Không phản ứng thải ghép</strong>, tương thích sinh học 100%.</li>
        <li><strong>Khả năng chống nhiễm trùng cao</strong> tại các vùng mô giập nát.</li>
        <li><strong>Phục hồi cảm giác</strong> khi kết hợp chuyển vạt có kèm nhánh thần kinh cảm giác.</li>
      </ul>

      <h3>3. Quy trình theo dõi sau phẫu thuật</h3>
      <p>Bệnh nhân được tập phục hồi chức năng sớm với nẹp động chuyên biệt nhằm chống dính gân và tái hòa nhập sinh hoạt nhanh nhất.</p>
    `
  },
  {
    id: "MED-ART-003",
    category: "Hướng dẫn bệnh nhân",
    title: "Cẩm nang chăm sóc và lộ trình tập phục hồi chức năng sau mổ chấn thương chỉnh hình",
    author: "ThS.BS. Nguyễn Hữu Sâm (BV Bạch Mai)",
    date: "20/02/2025",
    readTime: "6 phút đọc",
    tags: ["Phục hồi chức năng", "Chăm sóc vết mổ", "Bệnh viện Bạch Mai", "Dành cho bệnh nhân"],
    summary: "Hướng dẫn chi tiết từng giai đoạn sau phẫu thuật kết hợp xương từ lúc xuất viện tại Bệnh viện Bạch Mai đến khi tháo phương tiện kết hợp xương an toàn.",
    coverImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    content: `
      <h3>1. Giai đoạn 1: Tuần 1 - Tuần 2 (Chống phù nề & Chăm sóc vết mổ)</h3>
      <p>Trong 2 tuần đầu sau phẫu thuật, mục tiêu quan trọng nhất là bảo vệ vết mổ sạch sẽ và giảm thiểu tình trạng sưng nề chi:</p>
      <ul>
        <li><strong>Kê cao chi mổ</strong>: Luôn kê cao chi mổ cao hơn mức tim khoảng 15-20cm khi nằm nghỉ.</li>
        <li><strong>Chườm lạnh</strong>: Chườm túi đá quanh vết mổ (không để nước dính vào băng gạc) 15 phút mỗi lần, 3-4 lần/ngày.</li>
        <li><strong>Tập gồng cơ tĩnh</strong>: Gồng cơ và ngọ nguậy các ngón tay/ngón chân liên tục để phòng ngừa huyết khối tĩnh mạch sâu.</li>
      </ul>

      <h3>2. Giai đoạn 2: Tuần 3 - Tuần 6 (Tập vận động tăng dần)</h3>
      <p>Sau khi vết thương khô và cắt chỉ (thường sau 12-14 ngày), bệnh nhân bắt đầu tập phục hồi tầm vận động khớp dưới sự hướng dẫn của bác sĩ.</p>

      <h3>3. Dấu hiệu cảnh báo cần liên hệ bác sĩ ngay</h3>
      <p>Liên hệ trực tiếp với ThS.BS. Nguyễn Hữu Sâm (qua Zalo 0373030031) nếu phát hiện: Vết mổ chảy dịch mủ, sốt cao > 38.5 độ C, chi mổ căng tức đau tăng dữ dội không giảm khi dùng thuốc theo đơn.</p>
    `
  }
];

// Helper get article by ID
function getArticleById(articleId) {
  return MEDICAL_ARTICLES.find(a => a.id === articleId);
}
