/**
 * Dữ liệu Ca mổ Phẫu thuật - Trauma & Plastic Surgery Cases Database
 * Phẫu thuật viên: ThS.BS. Nguyễn Hữu Sâm
 * Đơn vị: Khoa Chấn thương chỉnh hình và Cột sống - Bệnh viện Bạch Mai
 */

const SURGICAL_CASES = [
  // ==========================================
  // PHÂN HỆ: PORTFOLIO CHẤN THƯƠNG (TRAUMA)
  // ==========================================
  {
    id: "CT-2024-001",
    type: "chan-thuong",
    category: "Phẫu thuật bàn tay & Cổ tay",
    title: "Phẫu thuật kết hợp xương nẹp vít khóa gãy phức tạp đầu dưới xương quay",
    patientInfo: "Bệnh nhân Nam, 38 tuổi, tai nạn giao thông",
    date: "15/10/2024",
    hospital: "Khoa Chấn thương Chỉnh hình & Cột sống - Bệnh viện Bạch Mai",
    tags: ["Phẫu thuật bàn tay", "Xương quay", "Nẹp vít khóa (LCP)", "Xâm lấn tối thiểu"],
    summary: "Gãy kín nhiều mảnh vụn đầu dưới xương quay bên Phải (Phân loại AO 23-C3). Đã tiến hành phẫu thuật nắn chỉnh giải phẫu mở và cố định bằng nẹp vít khóa Volar LCP 2.4/3.5mm.",
    preOp: {
      diagnosis: "Gãy kín 1/3 dưới xương quay phải có tổn thương mặt khớp, di lệch nhiều (AO 23-C3).",
      symptoms: "Đau chói, sưng nề biến dạng cổ tay kiểu lưng dĩa, hạn chế vận động hoàn toàn bàn ngón tay.",
      imaging: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      imagingDesc: "Phim X-quang thẳng nghiêng trước mổ: Mặt khớp cổ tay sụt lún > 4mm, góc nghiêng mặt khớp đảo ngược."
    },
    intraOp: {
      technique: "Đường mổ Henry mở rộng qua bao gân gấp cổ tay quay. Bộc lộ diện gãy, nắn chỉnh phục hồi diện khớp dưới hướng dẫn C-arm, đặt nẹp vít khóa Volar Plate áp sát vỏ xương.",
      duration: "65 phút",
      bloodLoss: "30 ml",
      anesthesia: "Tê đám rối thần kinh cánh tay",
      implant: "Hệ thống nẹp khóa Volar LCP Synthes 2.4/3.5mm"
    },
    postOp: {
      imaging: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80",
      imagingDesc: "Phim X-quang kiểm tra sau mổ: Phục hồi hoàn hảo trục giải phẫu và độ dốc xương quay (Radial inclination 22 độ, Volar tilt 11 độ).",
      recovery: "Tập vận động thụ động sớm ngày thứ 2 sau mổ. Sau 6 tuần xương liền tốt, tầm vận động cổ tay gấp/duỗi đạt 85% so với bên lành."
    },
    featured: true,
    sensitiveImage: false
  },
  {
    id: "CT-2024-002",
    type: "chan-thuong",
    category: "Kết hợp xương xâm lấn tối thiểu",
    title: "Kết hợp xương đinh nội tủy có chốt kín gãy 1/3 giữa xương đùi dưới C-arm",
    patientInfo: "Bệnh nhân Nữ, 29 tuổi, tai nạn sinh hoạt ngã cao",
    date: "02/11/2024",
    hospital: "Khoa Chấn thương Chỉnh hình & Cột sống - Bệnh viện Bạch Mai",
    tags: ["Xương đùi", "Đinh nội tủy (Interlocking Nail)", "Chi dưới", "Xâm lấn tối thiểu"],
    summary: "Phẫu thuật nắn chỉnh kín và đóng đinh nội tủy có chốt xuôi dòng (Expert Interlocking Nail) dưới màn tăng sáng C-arm, bảo tồn tối đa màng xương và khối máu tụ ổ gãy theo nguyên tắc sinh học.",
    preOp: {
      diagnosis: "Gãy kín 1/3 giữa thân xương đùi Trái di lệch chồng ngắn 3cm (AO 32-A3).",
      symptoms: "Chi trái ngắn hơn chi phải, đùi sưng to căng bóng, dấu hiệu cử động bất thường và lạo xạo xương.",
      imaging: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      imagingDesc: "X-quang: Đường gãy ngang thân xương đùi 1/3 giữa di lệch ngoài và chồng ngắn."
    },
    intraOp: {
      technique: "Mổ can thiệp tối thiểu qua đường vào hố mấu chuyển lớn, khoan ống tủy từng nấc, luồn đinh nội tủy chốt và cố định 2 chốt xa 2 chốt gần.",
      duration: "50 phút",
      bloodLoss: "50 ml",
      anesthesia: "Tê tủy sống",
      implant: "Đinh chốt nội tủy hợp kim Titanium dài 360mm đường kính 10mm"
    },
    postOp: {
      imaging: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80",
      imagingDesc: "X-quang sau mổ: Trục xương đùi phục hồi thẳng trục giải phẫu, đinh chốt vững chắc.",
      recovery: "Bệnh nhân tập tì đè một phần có nạng hỗ trợ sau 48 giờ. Ra viện ngày thứ 4 sau phẫu thuật."
    },
    featured: true,
    sensitiveImage: false
  },
  {
    id: "CT-2024-003",
    type: "chan-thuong",
    category: "Phẫu thuật bàn tay & Gân",
    title: "Cấp cứu tổn thương đứt rời gân gấp sâu ngón tay kèm vỡ xương đốt bàn ngón",
    patientInfo: "Bệnh nhân Nam, 34 tuổi, tai nạn lao động máy dập",
    date: "18/12/2024",
    hospital: "Khoa Chấn thương Chỉnh hình & Cột sống - Bệnh viện Bạch Mai",
    tags: ["Phẫu thuật bàn tay", "Khâu nối gân gấp", "Kessler cải tiến", "Cấp cứu bàn tay"],
    summary: "Phẫu thuật cấp cứu khâu nối gân gấp ngón II-III vùng II (No Man's Land) bằng kỹ thuật Kessler 4 quai chỉ Prolene 4-0 kết hợp cố định gãy xương bàn tay.",
    preOp: {
      diagnosis: "Vết thương đứt hoàn toàn gân gấp sâu ngón II, III bàn tay Phải vùng II, gãy kín chỏm xương bàn ngón II.",
      symptoms: "Mất hoàn toàn động tác gập khớp liên đốt xa và gần ngón II, III; vết thương bờ sắc ngọt chảy máu.",
      imaging: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      imagingDesc: "X-quang & Khám lâm sàng: Mất liên tục hoàn toàn hệ thống gân gấp vùng II."
    },
    intraOp: {
      technique: "Đường mổ Bruner chữ Z mặt lòng ngón tay. Tìm 2 đầu gân co rút, khâu nối lõi Kessler cải tiến 4 sợi với chỉ Prolene 4-0 và khâu vắt biểu mô mép ngoài 6-0. Cố định xương bằng kim Kirschner.",
      duration: "85 phút",
      bloodLoss: "25 ml",
      anesthesia: "Tê đám rối thần kinh cánh tay",
      implant: "Kim Kirschner 1.2mm, chỉ khâu vi phẫu Prolene 4-0 & 6-0"
    },
    postOp: {
      imaging: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      imagingDesc: "Tái khám sau mổ: Vết mổ liền thì đầu, không dính gân, nẹp bột Kleinert hỗ trợ tập sớm.",
      recovery: "Tập vận động thụ động chủ động có trợ giúp ngay từ tuần thứ 1 theo phác đồ Kleinert. Sau 8 tuần ngón tay nắm chặt hoàn toàn."
    },
    featured: false,
    sensitiveImage: true
  }
];

// Helper get case by ID
function getCaseById(caseId) {
  return SURGICAL_CASES.find(c => c.id === caseId);
}
