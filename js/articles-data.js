/**
 * Dữ liệu Bài viết & Kiến thức Y khoa - Medical Knowledge & Clinical Articles
 * Tác giả: ThS.BS. Nguyễn Hữu Sâm - Khoa Chấn thương chỉnh hình và Cột sống BV Bạch Mai
 * Chuyên khoa: Phẫu thuật Bàn tay, Khớp Cổ tay, Vi phẫu tạo hình & Chấn thương Chỉnh hình
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
    `
  },
  {
    id: "MED-ART-004",
    category: "Giải phẫu & Khám lâm sàng",
    title: "Giải phẫu chức năng, cơ sinh học và kỹ năng khám lâm sàng khớp cổ tay chuyên sâu",
    author: "ThS.BS. Nguyễn Hữu Sâm (BV Bạch Mai)",
    date: "20/08/2026",
    readTime: "12 phút đọc",
    tags: ["Khớp cổ tay", "Giải phẫu chức năng", "Cơ sinh học", "Nghiệm pháp lâm sàng", "Campbell 13th"],
    summary: "Tổng quan toàn diện về hệ thống dây chằng nội tại (SLIL, LTIL), dây chằng ngoại lai, chuyển động Dart-thrower's motion và hướng dẫn thực hiện các nghiệm pháp khám đặc hiệu (Watson, Reagan, Piano key, Ulnar fovea).",
    coverImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    content: `<h3>1. Mở đầu & Tầm quan trọng trong Phẫu thuật Bàn tay - Cổ tay</h3>
      <p>Khớp cổ tay là một trong những cấu trúc phức tạp nhất của hệ vận động, gồm 8 xương cổ tay xếp thành 2 hàng, khớp với diện khớp đầu dưới 2 xương cẳng tay. Hiểu rõ cơ sinh học và giải phẫu định khu là chìa khóa giúp phẫu thuật viên trẻ chẩn đoán chính xác và bảo tồn tối đa chức năng vận động của bàn tay.</p>
      
      <h3>2. Phân bố tải lực & Động học cổ tay</h3>
      <p>Ở tư thế trung tính, <strong>80% lực nén</strong> truyền qua diện khớp xương quay (hố thuyền ~55%, hố nguyệt ~25%), trong khi <strong>20% lực nén</strong> truyền qua khớp trụ - cổ tay thông qua đĩa sụn sợi tam giác (TFCC). Khi có biến dạng mỏm trâm trụ dài (Ulnar positive variance), tải lực qua trụ có thể tăng lên đến 40%, gây xung đột trụ - cổ tay.</p>
      <p>Trục vận động chức năng chính của cổ tay là <strong>Dart-Thrower's Motion (DTM)</strong>: Chuyển động phối hợp từ Duỗi - Nghiêng quay sang Gập - Nghiêng trụ. Trong mặt phẳng DTM, hàng xương cổ tay thứ nhất hầu như bất động, chuyển động chủ yếu xảy ra tại khớp gian cổ tay (Midcarpal joint).</p>

      <h3>3. Bảng tổng hợp các Nghiệm pháp Khám lâm sàng đặc hiệu</h3>
      <table class="w-full text-sm text-left my-4 border border-slate-200">
        <thead class="bg-slate-100 font-semibold text-slate-700">
          <tr>
            <th class="p-3 border">Nghiệm pháp</th>
            <th class="p-3 border">Kỹ thuật thực hiện</th>
            <th class="p-3 border">Dấu hiệu dương tính</th>
            <th class="p-3 border">Ý nghĩa chẩn đoán</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-3 border font-medium">Watson Scaphoid Shift Test</td>
            <td class="p-3 border">Ấn củ xương thuyền mặt gan, đưa cổ tay từ nghiêng trụ - duỗi sang nghiêng quay - gập.</td>
            <td class="p-3 border">Cực lưng xương thuyền trượt bật ra sau kèm tiếng lục cục và đau chói.</td>
            <td class="p-3 border">Mất vững Thuyền - Nguyệt (Rách dây chằng SLIL).</td>
          </tr>
          <tr>
            <td class="p-3 border font-medium">Reagan Ballottement Test</td>
            <td class="p-3 border">Cố định xương nguyệt, di chuyển xương tháp theo chiều trước - sau.</td>
            <td class="p-3 border">Đau chói và lỏng lẻo bất thường so với bên đối diện.</td>
            <td class="p-3 border">Rách dây chằng Nguyệt - Tháp (LTIL).</td>
          </tr>
          <tr>
            <td class="p-3 border font-medium">Piano Key Test (DRUJ)</td>
            <td class="p-3 border">Ấn đầu dưới xương trụ xuống như phím đàn ở tư thế cẳng tay sấp.</td>
            <td class="p-3 border">Đầu xương trụ bật nảy lên kèm đau và mất vững.</td>
            <td class="p-3 border">Mất vững khớp quay - trụ dưới / Rách TFCC.</td>
          </tr>
          <tr>
            <td class="p-3 border font-medium">Ulnar Fovea Sign</td>
            <td class="p-3 border">Ấn trực tiếp vào rãnh giữa mỏm trâm trụ và gân FCU/xương đậu.</td>
            <td class="p-3 border">Đau chói tại điểm hố trụ (Fovea).</td>
            <td class="p-3 border">Rách bám tận TFCC (Palmer 1B) hoặc viêm mỏm trâm trụ.</td>
          </tr>
        </tbody>
      </table>

      <h3>4. Kinh nghiệm thực chiến cho Bác sĩ trẻ (Surgical Pearls)</h3>
      <div class="bg-emerald-50 border-l-4 border-emerald-500 p-4 my-4 rounded-r-xl text-emerald-900 text-sm">
        <strong>💡 Lưu ý khám lâm sàng:</strong> Luôn khám và so sánh với cổ tay lành đối bên. Độ lỏng lẻo dây chằng sinh lý ở người trẻ rất phổ biến; nghiệm pháp Watson chỉ có giá trị khi đau tái hiện đúng triệu chứng cơ năng của người bệnh.
      </div>`
  },
  {
    id: "MED-ART-005",
    category: "Chẩn đoán hình ảnh",
    title: "Tiếp cận chẩn đoán hình ảnh khớp cổ tay: Từ X-quang quy ước, động học đến CT và MRI",
    author: "ThS.BS. Nguyễn Hữu Sâm (BV Bạch Mai)",
    date: "20/08/2026",
    readTime: "10 phút đọc",
    tags: ["X-quang cổ tay", "Cung Gilula", "DISI", "VISI", "CT 3D", "MR Arthrogram"],
    summary: "Hướng dẫn chi tiết cách đọc phim X-quang cổ tay chuẩn, đo góc Thuyền - Nguyệt, góc Nguyệt - Quay, đánh giá 3 cung Gilula, phát hiện biến dạng DISI/VISI và chỉ định CT/MRI chuyên sâu.",
    coverImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    content: `<h3>1. Tiêu chuẩn phim chụp X-quang cổ tay chuẩn</h3>
      <p>Một phim chụp sai tư thế có thể làm sai lệch hoàn toàn góc đo Thuyền - Nguyệt hoặc che lấp đường gãy xương kín đáo:</p>
      <ul>
        <li><strong>Phim Thẳng (PA view):</strong> Vai dang 90°, khuỷu gập 90°, cẳng tay và cổ tay để ở tư thế trung tính tuyệt đối (không sấp, không ngửa).</li>
        <li><strong>Phim Nghiêng thực thụ (True Lateral view):</strong> Trục xương quay, xương nguyệt, xương cả và xương đốt bàn III phải nằm trên một đường thẳng.</li>
      </ul>

      <h3>2. Các mốc hình học & Góc đo cơ bản</h3>
      <table class="w-full text-sm text-left my-4 border border-slate-200">
        <thead class="bg-slate-100 font-semibold text-slate-700">
          <tr>
            <th class="p-3 border">Chỉ số hình học</th>
            <th class="p-3 border">Giá trị bình thường</th>
            <th class="p-3 border">Ý nghĩa bệnh lý</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-3 border font-medium">3 Cung Gilula</td>
            <td class="p-3 border">3 đường cong lồi liên tục, nhẵn</td>
            <td class="p-3 border">Mất liên tục cung: Trật khớp hoặc gãy xương cổ tay.</td>
          </tr>
          <tr>
            <td class="p-3 border font-medium">Khe Thuyền - Nguyệt</td>
            <td class="p-3 border">&lt; 2 mm</td>
            <td class="p-3 border">&gt; 3-4 mm: Dấu hiệu Terry Thomas (Rách SLIL).</td>
          </tr>
          <tr>
            <td class="p-3 border font-medium">Góc Thuyền - Nguyệt (SL)</td>
            <td class="p-3 border">30° - 60° (TB 47°)</td>
            <td class="p-3 border">&gt; 60°: Biến dạng DISI (Rách SLIL); &lt; 30°: VISI (Rách LTIL).</td>
          </tr>
          <tr>
            <td class="p-3 border font-medium">Độ chênh Ulnar Variance</td>
            <td class="p-3 border">0 ± 1.5 mm</td>
            <td class="p-3 border">&lt; -2mm: Kienböck; &gt; +2mm: Ulnar Impaction.</td>
          </tr>
        </tbody>
      </table>

      <h3>3. Vai trò của CT Scan và MR Arthrogram</h3>
      <p><strong>CT Scan đa lát cắt & Dựng hình 3D:</strong> Tiêu chuẩn vàng đánh giá gãy xương thuyền, đo góc gập mặt gan (Humpback deformity &gt; 35°) và đánh giá liền xương sau mổ.</p>
      <p><strong>MR Arthrogram (MRA):</strong> Bơm thuốc cản từ nội khớp có độ nhạy &gt; 90% chẩn đoán rách TFCC và tổn thương dây chằng Thuyền - Nguyệt.</p>`
  },
  {
    id: "MED-ART-006",
    category: "Nội soi khớp",
    title: "Nội soi khớp cổ tay (Wrist Arthroscopy): Giải phẫu cổng vào, kỹ thuật thao tác & phòng ngừa biến chứng",
    author: "ThS.BS. Nguyễn Hữu Sâm (BV Bạch Mai)",
    date: "20/08/2026",
    readTime: "11 phút đọc",
    tags: ["Nội soi cổ tay", "Cổng 3-4", "Cổng 6R", "Geissler", "TFCC repair"],
    summary: "Hướng dẫn thiết lập hệ thống kéo tạ, định vị chính xác các cổng vào khớp quay - cổ tay (3-4, 4-5, 6R, 6U) và gian cổ tay (MCR, MCU), quy trình 6 bước thăm dò chuẩn và phòng tránh tổn thương thần kinh cảm giác.",
    coverImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
    content: `<h3>1. Thiết lập phòng mổ & Hệ thống tháp kéo</h3>
      <p>Bệnh nhân nằm ngửa, cánh tay dạng trên bàn mổ phụ. Treo ngón II và III bằng bao ngón tay vô trùng (finger traps). Lực kéo dọc trục duy trì <strong>10 - 15 lbs (4.5 - 7 kg)</strong>. Sử dụng ống soi đường kính <strong>2.7 mm góc nhìn 30°</strong>.</p>

      <h3>2. Giải phẫu chi tiết các Cổng vào (Portals)</h3>
      <ul>
        <li><strong>Cổng 3-4 (3-4 Portal):</strong> Nằm giữa khoang gân duỗi 3 (gân EPL) và khoang 4 (gân EDC), cách củ Lister 1 cm về phía xa. Là cổng nhìn chính.</li>
        <li><strong>Cổng 4-5 (4-5 Portal):</strong> Nằm giữa khoang 4 (EDC) và khoang 5 (EDM). Là cổng thao tác chính đưa que dò, dao cạo shaver.</li>
        <li><strong>Cổng 6R (6-Radial Portal):</strong> Nằm ngay bờ quay gân ECU. Quan sát đĩa sụn TFCC và khớp trụ - cổ tay.</li>
        <li><strong>Cổng 6U (6-Ulnar Portal):</strong> Nằm bờ trụ gân ECU, dùng thoát dịch và khâu TFCC.</li>
        <li><strong>Cổng MCR / MCU:</strong> Nằm ở khớp gian cổ tay (Midcarpal), thẳng hàng với cổng 3-4 và 4-5 về phía xa 1 cm.</li>
      </ul>

      <h3>3. Phân độ mất vững Thuyền - Nguyệt theo Geissler</h3>
      <ul>
        <li><em>Grade I:</em> Dây chằng căng dãn, không mở khe khớp.</li>
        <li><em>Grade II:</em> Khe khớp mở nhẹ, que dò không xoay lọt (&lt; 1 mm).</li>
        <li><em>Grade III:</em> Que dò 1 mm xoay lọt qua khe khớp từ khớp quay-cổ tay sang khớp gian cổ tay.</li>
        <li><em>Grade IV:</em> Ống soi 2.7 mm đi lọt hoàn toàn qua khe khớp (mất vững hoàn toàn).</li>
      </ul>

      <div class="bg-rose-50 border-l-4 border-rose-500 p-4 my-4 rounded-r-xl text-rose-900 text-sm">
        <strong>⚠️ Nguyên tắc an toàn:</strong> Kỹ thuật rạch da mở cổng luôn là "Skin-only" (chỉ rạch lớp biểu bì bằng dao số 11, sau đó dùng kẹp bóc tách tách nhẹ mô dưới da) để tránh cắt đứt nhánh nông thần kinh quay (SBRN) và nhánh mu tay thần kinh trụ (DRUBN).
      </div>`
  },
  {
    id: "MED-ART-007",
    category: "Kỹ thuật phẫu thuật",
    title: "Gãy xương thuyền cấp tính: Giải phẫu cấp máu, phân loại Herbert & Phẫu thuật bắt vít nén không mũ",
    author: "ThS.BS. Nguyễn Hữu Sâm (BV Bạch Mai)",
    date: "20/08/2026",
    readTime: "12 phút đọc",
    tags: ["Gãy xương thuyền", "Vít Herbert", "Acutrak", "Xâm lấn tối thiểu", "Campbell 69-8"],
    summary: "Phân tích đặc điểm mạch máu nuôi xương thuyền ngược dòng, tiêu chuẩn gãy không vững, lựa chọn đường mổ mặt gan (Volar) vs mặt lưng (Dorsal) và kỹ thuật bắt vít nén qua da theo trục trung tâm 1/3 xương.",
    coverImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    content: `<h3>1. Giải phẫu mạch máu nuôi & Nguy cơ hoại tử cực gần</h3>
      <p>Nhánh lưng của động mạch quay cấp máu cho <strong>70% - 80%</strong> xương thuyền theo cơ chế <strong>dòng máu đi ngược (retrograde flow)</strong> từ cực xa về cực gần. Do đó, gãy eo hoặc cực gần làm mất hoàn toàn nguồn cấp máu nuôi cực gần, dẫn đến tỷ lệ hoại tử vô mạch (AVN) lên tới 30% - 100% nếu điều trị bảo tồn thất bại.</p>

      <h3>2. Lựa chọn đường mổ: Mặt Gan (Volar) vs Mặt Lưng (Dorsal)</h3>
      <table class="w-full text-sm text-left my-4 border border-slate-200">
        <thead class="bg-slate-100 font-semibold text-slate-700">
          <tr>
            <th class="p-3 border">Đặc điểm</th>
            <th class="p-3 border">Đường mổ Mặt Gan (Volar)</th>
            <th class="p-3 border">Đường mổ Mặt Lưng (Dorsal)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-3 border font-medium">Chỉ định chính</td>
            <td class="p-3 border">Gãy eo xương thuyền (Waist), gãy cực xa.</td>
            <td class="p-3 border"><strong>Gãy cực gần (Proximal pole)</strong>.</td>
          </tr>
          <tr>
            <td class="p-3 border font-medium">Tư thế cổ tay</td>
            <td class="p-3 border">Duỗi cổ tay + Nghiêng quay.</td>
            <td class="p-3 border">Gập cổ tay tối đa + Nghiêng trụ.</td>
          </tr>
          <tr>
            <td class="p-3 border font-medium">Ưu điểm</td>
            <td class="p-3 border">Không tổn thương cuống mạch nuôi mặt lưng.</td>
            <td class="p-3 border">Đặt đinh và vít chính xác vào trục cực gần nhỏ.</td>
          </tr>
        </tbody>
      </table>

      <h3>3. Quy trình bắt vít nén không mũ (Technique 69-8, 69-10)</h3>
      <ol>
        <li>Nắn chỉnh hoàn hảo ổ gãy dưới C-arm trên cả 3 bình diện.</li>
        <li>Xuyên đinh Kirschner dẫn đường 1.1 mm đi chính xác vào <strong>trục trung tâm 1/3 (Central third axis)</strong>.</li>
        <li>Đo chiều dài vít: Chiều dài vít thực tế = Chiều dài đo được trừ đi 2 - 4 mm để cả hai đầu vít chìm sâu dưới sụn khớp ít nhất 1.5 mm.</li>
        <li>Khoan lòng rỗng và vặn vít nén tự khoan chìm hoàn toàn dưới diện sụn.</li>
      </ol>`
  },
  {
    id: "MED-ART-008",
    category: "Vi phẫu & Ghép xương",
    title: "Khớp giả xương thuyền (Scaphoid Nonunion): Chiến lược ghép xương tự thân & Kỹ thuật cuống mạch 1,2-ICSRA",
    author: "ThS.BS. Nguyễn Hữu Sâm (BV Bạch Mai)",
    date: "20/08/2026",
    readTime: "13 phút đọc",
    tags: ["Khớp giả xương thuyền", "Ghép xương", "1,2-ICSRA", "Zaidemberg", "Matti-Russe", "Fisk-Fernandez"],
    summary: "Đánh giá tình trạng sống của cực gần trên MRI và trong mổ, chỉ định ghép xương xốp Matti-Russe, ghép nêm sửa góc Humpback Fisk-Fernandez và kỹ thuật ghép xương có cuống mạch Zaidemberg (1,2-ICSRA).",
    coverImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    content: `<h3>1. Đánh giá tình trạng sống của Cực gần (Proximal Pole Viability)</h3>
      <p>Khớp giả xương thuyền kéo dài dẫn đến biến dạng gập góc lưng ngựa (Humpback deformity), mất vững DISI và thoái hóa chuỗi SNAC. Tiêu chuẩn quyết định phương pháp mổ là đánh giá cực gần còn sống hay đã hoại tử vô mạch (AVN):</p>
      <ul>
        <li><strong>Trên MRI:</strong> Cực gần giảm tín hiệu đồng nhất trên T1W và không ngấm thuốc tương phản.</li>
        <li><strong>Kiểm tra trong mổ (Intraoperative Bleeding Test):</strong> Cực gần còn sống có các chấm rỉ máu li ti (punctate bleeding) khi tháo garô; nếu trắng bệch xơ chai là đã hoại tử vô mạch.</li>
      </ul>

      <h3>2. Lựa chọn kỹ thuật ghép xương</h3>
      <ul>
        <li><strong>Kỹ thuật Matti-Russe:</strong> Ghép xương xốp mào chậu/xương quay dạng then cài cho ổ khớp giả không sụp lún góc, cực gần còn sống.</li>
        <li><strong>Kỹ thuật Fisk-Fernandez:</strong> Ghép nêm vỏ - xốp mặt gan để sửa góc gập Humpback và phục hồi chiều dài xương thuyền.</li>
        <li><strong>Ghép xương có cuống mạch 1,2-ICSRA (Zaidemberg - Technique 69-11):</strong> Lấy mảnh xương vỏ - xốp đầu dưới xương quay kèm cuống động mạch gian khoang gân duỗi 1 và 2 xoay vào cực gần hoại tử, mang lại nguồn máu nuôi tân tạo trực tiếp.</li>
      </ul>`
  },
  {
    id: "MED-ART-009",
    category: "Phác đồ & Guideline",
    title: "Bệnh Kienböck (Hoại tử vô mạch xương nguyệt): Phân loại Lichtman & Phác đồ phẫu thuật cắt ngắn xương quay",
    author: "ThS.BS. Nguyễn Hữu Sâm (BV Bạch Mai)",
    date: "20/08/2026",
    readTime: "12 phút đọc",
    tags: ["Kienböck", "Hoại tử xương nguyệt", "Lichtman", "Radial Shortening", "Campbell 69-33"],
    summary: "Phân tích cơ chế Ulnar Negative Variance, phân loại 5 giai đoạn Lichtman, cây quyết định điều trị và kỹ thuật phẫu thuật cắt ngắn xương quay (Radial Shortening Osteotomy) giảm tải áp lực xương nguyệt.",
    coverImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    content: `<h3>1. Sinh bệnh học & Phân loại Lichtman</h3>
      <p>Khoảng 75% bệnh nhân Kienböck có xương trụ ngắn hơn xương quay (Ulnar negative variance &le; -2mm), làm tăng dồn nén tải trọng lên xương nguyệt.</p>
      <ul>
        <li><em>Giai đoạn I:</em> X-quang bình thường, MRI giảm tín hiệu T1W.</li>
        <li><em>Giai đoạn II:</em> Xơ chai xương nguyệt, hình dạng chưa sụp lún.</li>
        <li><em>Giai đoạn IIIA:</em> Xương nguyệt sụp lún vỡ mảnh, chưa mất vững cổ tay.</li>
        <li><em>Giai đoạn IIIB:</em> Xương nguyệt sụp lún kèm mất vững cổ tay cố định (DISI, góc SL &gt; 60°).</li>
        <li><em>Giai đoạn IV:</em> Thoái hóa lan rộng toàn bộ khớp cổ tay.</li>
      </ul>

      <h3>2. Phẫu thuật Cắt ngắn xương quay (Radial Shortening Osteotomy - Technique 69-33)</h3>
      <p>Áp dụng cho giai đoạn I, II, IIIA có ulnar negative variance. Cắt ngắn xương quay <strong>2 - 3 mm</strong> bằng đường mổ mặt gan Henry, cố định bằng nẹp nén LC-DCP 3.5mm giúp giảm 45% tải trọng đè ép lên xương nguyệt, tạo điều kiện tái tạo tưới máu.</p>`
  },
  {
    id: "MED-ART-010",
    category: "Kỹ thuật phẫu thuật",
    title: "Tổn thương phức hợp sụn sợi tam giác (TFCC) & Khớp quay - trụ dưới: Phân loại Palmer & Kỹ thuật khâu nội soi",
    author: "ThS.BS. Nguyễn Hữu Sâm (BV Bạch Mai)",
    date: "20/08/2026",
    readTime: "11 phút đọc",
    tags: ["TFCC", "Palmer", "DRUJ", "Khâu nội soi", "Hố trụ Fovea", "Campbell 69-26"],
    summary: "Đặc điểm cấp máu của đĩa sụn TFC, phân loại tổn thương chấn thương Palmer 1A-1D, kỹ thuật cắt lọc đĩa sụn trung tâm (1A), khâu đính bờ trụ (1B Outside-in) và khâu đính xuyên xương vào hố trụ (Foveal repair).",
    coverImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
    content: `<h3>1. Giải phẫu mạch máu & Phân loại Palmer</h3>
      <p>80% đĩa sụn trung tâm TFCC là vô mạch (không tự liền khi rách), trong khi 15-20% bờ ngoại vi phía trụ gần hố trụ (fovea) được cấp máu phong phú.</p>
      <ul>
        <li><strong>Class 1A:</strong> Rách trung tâm &rarr; Cắt lọc làm sạch bằng dao cạo shaver qua nội soi.</li>
        <li><strong>Class 1B:</strong> Nhổ bám bờ trụ/hố trụ &rarr; Khâu đính vào bao khớp (DRUJ vững) hoặc khâu xuyên xương vào hố trụ Foveal repair (DRUJ mất vững).</li>
        <li><strong>Class 1C:</strong> Rách bờ xa gan tay &rarr; Khâu mở phục hồi dây chằng.</li>
        <li><strong>Class 1D:</strong> Nhổ bám bờ quay &rarr; Khâu đính xuyên xương bờ quay.</li>
      </ul>

      <h3>2. Kỹ thuật Khâu đính xuyên xương hố trụ (Technique 69-27)</h3>
      <p>Khoan đường hầm xương từ vỏ ngoài xương trụ vào đáy hố trụ (Fovea), dùng chỉ FiberWire 2-0 khâu bắt qua mép rách sâu của TFCC dưới nội soi, kéo căng và buộc nút chỉ trên cúc kim loại Endobutton ở tư thế cẳng tay ngửa 30°.</p>`
  },
  {
    id: "MED-ART-011",
    category: "Kỹ thuật phẫu thuật",
    title: "Hội chứng xung đột trụ - cổ tay (Ulnar Impaction) & Các phẫu thuật giải cứu đầu dưới xương trụ",
    author: "ThS.BS. Nguyễn Hữu Sâm (BV Bạch Mai)",
    date: "20/08/2026",
    readTime: "10 phút đọc",
    tags: ["Ulnar Impaction", "Cắt ngắn xương trụ USO", "Sauvé-Kapandji", "Darrach", "Wafer", "Campbell 69-34"],
    summary: "Sinh bệnh học Ulnar Positive Variance, kỹ thuật cắt ngắn thân xương trụ (USO) nêm chéo 45 độ bằng nẹp nén chuyên dụng và so sánh chỉ định các phẫu thuật Wafer, Sauvé-Kapandji, Darrach, Bowers.",
    coverImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    content: `<h3>1. Sinh bệnh học & Phẫu thuật Cắt ngắn thân xương trụ (USO - Technique 69-34)</h3>
      <p>Ulnar positive variance làm đầu xương trụ tì đè gây thoái hóa đĩa sụn TFCC, mòn sụn xương nguyệt và tháp. Phẫu thuật USO cắt một lát nêm xương chéo 45° dày 2 - 3 mm ở 1/3 dưới thân xương trụ, nén ép bằng nẹp chuyên dụng đưa ulnar variance về 0 mm, giữ nguyên vẹn sụn khớp DRUJ.</p>

      <h3>2. So sánh các phẫu thuật cứu vãn đầu dưới xương trụ</h3>
      <table class="w-full text-sm text-left my-4 border border-slate-200">
        <thead class="bg-slate-100 font-semibold text-slate-700">
          <tr>
            <th class="p-3 border">Phương pháp</th>
            <th class="p-3 border">Bản chất kỹ thuật</th>
            <th class="p-3 border">Chỉ định tối ưu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-3 border font-medium">Wafer (Feldon)</td>
            <td class="p-3 border">Cắt mỏng 2-3mm sụn đỉnh chỏm trụ.</td>
            <td class="p-3 border">Ulnar positive nhẹ (&lt; 3mm), DRUJ còn tốt.</td>
          </tr>
          <tr>
            <td class="p-3 border font-medium">Sauvé-Kapandji (69-39)</td>
            <td class="p-3 border">Hàn khớp DRUJ + Cắt đoạn xương trụ 1.5cm phía trên.</td>
            <td class="p-3 border">Thoái hóa DRUJ nặng ở người trẻ, lao động nặng.</td>
          </tr>
          <tr>
            <td class="p-3 border font-medium">Darrach</td>
            <td class="p-3 border">Cắt bỏ toàn bộ chỏm xương trụ.</td>
            <td class="p-3 border">Người cao tuổi, nhu cầu thấp, viêm khớp dạng thấp.</td>
          </tr>
        </tbody>
      </table>`
  },
  {
    id: "MED-ART-012",
    category: "Cấp cứu & Mất vững",
    title: "Mất vững cổ tay, trật quanh nguyệt (Perilunate Dislocation) & Kỹ thuật tái tạo 3 dây chằng biến đổi Brunelli",
    author: "ThS.BS. Nguyễn Hữu Sâm (BV Bạch Mai)",
    date: "20/08/2026",
    readTime: "12 phút đọc",
    tags: ["Trật quanh nguyệt", "Mayfield", "Brunelli 3LT", "DISI", "VISI", "Campbell 69-45", "Campbell 69-48"],
    summary: "Phân loại CID/CIND, 4 giai đoạn trật quanh nguyệt theo Mayfield, xử trí cấp cứu nắn trật và kỹ thuật tái tạo dây chằng Thuyền - Nguyệt mạn tính bằng dải gân FCR biến đổi Brunelli (3-Ligament Tenodesis).",
    coverImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    content: `<h3>1. 4 Giai đoạn trật quanh xương nguyệt theo Mayfield</h3>
      <ul>
        <li><em>Giai đoạn I:</em> Đứt dây chằng Thuyền - Nguyệt (hoặc gãy ngang xương thuyền).</li>
        <li><em>Giai đoạn II:</em> Trật khớp Đầu - Nguyệt.</li>
        <li><em>Giai đoạn III:</em> Đứt dây chằng Nguyệt - Tháp và bao khớp mu tay.</li>
        <li><em>Giai đoạn IV:</em> Xương nguyệt bị đẩy lồi ra trước rơi vào trong <strong>ống cổ tay</strong>, gây chèn ép cấp thần kinh giữa.</li>
      </ul>

      <h3>2. Kỹ thuật Tái tạo 3 dây chằng biến đổi Brunelli (Modified Brunelli 3LT - Technique 69-48)</h3>
      <p>Áp dụng cho mất vững Thuyền - Nguyệt mạn tính chưa thoái hóa khớp. Bóc tách dải 1/3 ngoài gân FCR, khoan đường hầm qua củ xương thuyền lên mặt mu tay, kéo căng để nắn chỉnh biến dạng DISI, neo chỉ vào cực lưng xương nguyệt và khâu tăng cường vào dây chằng DRC.</p>`
  },
  {
    id: "MED-ART-013",
    category: "Phẫu thuật cứu vãn",
    title: "Phẫu thuật cứu vãn thoái hóa khớp cổ tay (SLAC & SNAC Wrist): Cắt hàng cổ tay 1 (PRC), Hàn 4 góc & Hàn toàn phần",
    author: "ThS.BS. Nguyễn Hữu Sâm (BV Bạch Mai)",
    date: "20/08/2026",
    readTime: "11 phút đọc",
    tags: ["SLAC wrist", "SNAC wrist", "PRC", "Four-Corner Fusion", "Hàn cổ tay toàn phần", "Campbell 69-21", "Campbell 69-52"],
    summary: "Phân tích 4 giai đoạn tiến triển của thoái hóa khớp SLAC/SNAC, so sánh chỉ định và kết quả chức năng giữa Cắt hàng cổ tay thứ nhất (PRC) với Hàn 4 góc xương (Four-Corner Fusion) và kỹ thuật hàn khớp cổ tay toàn phần.",
    coverImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    content: `<h3>1. Diễn tiến thoái hóa dạng chuỗi SLAC và SNAC Wrist</h3>
      <p>Thoái hóa bắt đầu từ mỏm trâm quay (Giai đoạn I) &rarr; Toàn bộ hố thuyền xương quay (Giai đoạn II) &rarr; Khớp đầu - nguyệt (Giai đoạn III) &rarr; Toàn bộ khớp cổ tay (Giai đoạn IV). Diện khớp hố nguyệt xương quay luôn được bảo tồn đến giai đoạn muộn.</p>

      <h3>2. So sánh kết quả chức năng: PRC vs Four-Corner Fusion</h3>
      <table class="w-full text-sm text-left my-4 border border-slate-200">
        <thead class="bg-slate-100 font-semibold text-slate-700">
          <tr>
            <th class="p-3 border">Tiêu chí</th>
            <th class="p-3 border">Cắt hàng cổ tay thứ nhất (PRC - 69-21)</th>
            <th class="p-3 border">Hàn 4 góc (Four-Corner Fusion - 69-52)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-3 border font-medium">Bản chất</td>
            <td class="p-3 border">Cắt bỏ 3 xương Thuyền - Nguyệt - Tháp.</td>
            <td class="p-3 border">Cắt xương thuyền + Hàn Cả-Móc-Nguyệt-Tháp.</td>
          </tr>
          <tr>
            <td class="p-3 border font-medium">Biên độ vận động</td>
            <td class="p-3 border">Giữ được <strong>60% - 70%</strong> bên lành (Tốt hơn).</td>
            <td class="p-3 border">Giữ được <strong>45% - 55%</strong> bên lành.</td>
          </tr>
          <tr>
            <td class="p-3 border font-medium">Sức nắm bàn tay</td>
            <td class="p-3 border">Đạt ~70% bên lành.</td>
            <td class="p-3 border">Đạt <strong>80% - 85%</strong> bên lành (Mạnh hơn).</td>
          </tr>
          <tr>
            <td class="p-3 border font-medium">Nguy cơ khớp giả</td>
            <td class="p-3 border"><strong>0%</strong> (Không cần ghép xương).</td>
            <td class="p-3 border">3% - 8% nguy cơ khớp giả giữa các xương.</td>
          </tr>
        </tbody>
      </table>

      <h3>3. Hàn cứng khớp cổ tay toàn phần (Total Wrist Arthrodesis - Technique 69-44)</h3>
      <p>Chỉ định cho thoái hóa giai đoạn IV hoặc lao động nặng. Tư thế hàn khớp chức năng tối ưu là <strong>15° - 20° duỗi và 5° nghiêng trụ</strong>, cố định bằng nẹp khóa nén mặt lưng từ thân xương quay vào thân xương đốt bàn III.</p>`
  },
];
