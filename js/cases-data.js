/**
 * Dữ liệu Ca mổ Phẫu thuật - Trauma & Plastic Surgery Cases Database
 * Phẫu thuật viên: ThS.BS. Nguyễn Hữu Sâm
 * Đơn vị: Khoa Chấn thương Chỉnh hình và Cột sống - Bệnh viện Bạch Mai
 */

const SURGICAL_CASES = [
  // ==========================================
  // PHÂN HỆ: PORTFOLIO CHẤN THƯƠNG (TRAUMA)
  // ==========================================
  {
    id: "CT-2026-004",
    type: "chan-thuong",
    category: "Phẫu thuật bàn chân & Cấp cứu",
    title: "Phẫu thuật nắn chỉnh kết hợp xương gãy kín xương bàn ngón IV kèm phục hồi giải phẫu mô mềm bàn chân",
    patientInfo: "Bệnh nhân Nam, Trần Văn Dũng (54 tuổi), tai nạn chấn thương bàn chân trái",
    date: "20/08/2026",
    hospital: "Buồng mổ số 9 · Khoa Chấn thương Chỉnh hình & Cột sống - Bệnh viện Bạch Mai",
    tags: ["Phẫu thuật bàn chân", "Gãy xương bàn ngón", "Buồng mổ số 9", "Cấp cứu chấn thương", "Xâm lấn tối thiểu", "Chi dưới"],
    summary: "Bệnh nhân Trần Văn Dũng vào viện cấp cứu với chẩn đoán Gãy xương bàn ngón IV kèm vết thương dập nát phần mềm bàn chân trái (ICD-10: S92.5, S90.9). Phẫu thuật viên ThS.BS. Nguyễn Hữu Sâm đã tiến hành phẫu thuật nắn chỉnh giải phẫu ổ gãy, cố định vững chắc trục cơ sinh học bàn chân và khâu phục hồi vi phẫu vạt da dập nát tại Buồng mổ số 9 - Bệnh viện Bạch Mai.",
    preOp: {
      diagnosis: "Gãy kín xương bàn ngón IV kèm vết thương dập nát mô mềm mu bàn chân trái (ICD-10: S92.5 / S90.9).",
      symptoms: "Đau chói dữ dội vùng mu chân, biến dạng sưng nề bầm tím rộng, mất vững trục ngón chân IV, hạn chế vận động tì đè.",
      imaging: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      imagingDesc: "X-quang trước mổ: Gãy di lệch góc và chồng ngắn thân xương bàn ngón IV, tổn thương phần mềm bao quanh."
    },
    intraOp: {
      technique: "Thực hiện tại Buồng mổ số 9. Sát khuẩn phẫu trường, gây tê vùng cổ chân phối hợp tê tại chỗ. Cắt lọc mép da dập nát, bảo tồn tối đa mạng mạch nuôi dưỡng. Nắn chỉnh kín có kiểm soát dưới C-arm đưa ổ gãy về thẳng trục giải phẫu, cố định vững chắc; khâu phục hồi cân cơ mô mềm từng lớp không căng, bất động nẹp bột cẳng bàn chân tư thế cơ năng.",
      duration: "40 phút",
      bloodLoss: "< 20 ml",
      anesthesia: "Gây tê vùng cổ chân / Tê tại chỗ phối hợp Lidocain",
      implant: "Nẹp bột cẳng bàn chân tư thế cơ năng, chỉ vi phẫu khâu da chuyên dụng"
    },
    postOp: {
      imaging: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80",
      imagingDesc: "X-quang sau mổ: Trục xương bàn ngón IV thẳng hàng giải phẫu hoàn hảo, nẹp bột cố định vững, không chèn ép khoang.",
      recovery: "Hậu phẫu tỉnh táo, ngọn chi hồng ấm, vận động các ngón chân phục hồi tốt. Sau 24-48h vết mổ khô ráo, tập gồng cơ tĩnh sớm và xuất viện theo dõi ngoại trú định kỳ."
    },
    featured: true,
    sensitiveImage: false
  },
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
  },

  // ==========================================
  // PHÂN HỆ: PORTFOLIO TẠO HÌNH (PLASTIC)
  // ==========================================
  {
    id: "TH-2024-001",
    type: "tao-hinh",
    category: "Tạo hình vạt da tự thân",
    title: "Tái tạo khuyết hổng phần mềm phức tạp vùng gót chân bằng vạt da nhánh xiên mạch chày sau",
    patientInfo: "Bệnh nhân Nam, 45 tuổi, loét tì đè sau tai nạn",
    date: "10/11/2024",
    hospital: "Khoa Chấn thương Chỉnh hình & Cột sống - Bệnh viện Bạch Mai",
    tags: ["Vi phẫu", "Vạt nhánh xiên", "Tái tạo mô mềm", "Chi dưới"],
    summary: "Che phủ khuyết hổng lộ gân gót Achilles kích thước 5x7cm bằng vạt da nhánh xiên động mạch chày sau (Posterior Tibial Artery Perforator Flap - PTAP).",
    beforeImg: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80",
    preOp: {
      diagnosis: "Khuyết hổng phần mềm lộ gân gót Achilles chân Trái kích thước 5x7cm sau chấn thương.",
      symptoms: "Lộ gân gót nguy cơ hoại tử gân, ổ khuyết hổng tiết dịch, hạn chế đi lại hoàn toàn.",
      imagingDesc: "Tổn thương lộ gân gót kích thước lớn cần vạt da che phủ có cuống mạch nuôi."
    },
    intraOp: {
      technique: "Siêu âm Doppler cầm tay định vị nhánh xiên động mạch chày sau. Thiết kế và bóc vạt da cân đảo chiều có cuống mạch xiên, xoay 120 độ che phủ trọn vẹn gân gót.",
      duration: "110 phút",
      bloodLoss: "40 ml",
      anesthesia: "Tê tủy sống",
      flapType: "Vạt nhánh xiên động mạch chày sau (PTAP Flap)"
    },
    postOp: {
      recovery: "Vạt hồng ấm, tưới máu vi mạch mao mạch tốt sau 24h. Vạt sống 100%, phục hồi chức năng đi lại hoàn toàn sau 2 tháng.",
      imagingDesc: "Sau mổ 2 tháng: Vạt da mỏng, tương thích tốt về màu sắc và độ dày, chịu lực tì đè vững."
    },
    featured: true,
    sensitiveImage: false
  },
  {
    id: "TH-2024-002",
    type: "tao-hinh",
    category: "Y học tái tạo & Tế bào tự thân",
    title: "Ứng dụng liệu pháp huyết tương giàu tiểu cầu (PRP) kết hợp ghép mỡ tự thân tái tạo loét khó liền",
    patientInfo: "Bệnh nhân Nữ, 58 tuổi, đái tháo đường typ 2",
    date: "25/11/2024",
    hospital: "Khoa Chấn thương Chỉnh hình & Cột sống - Bệnh viện Bạch Mai",
    tags: ["Y học tái tạo", "PRP tự thân", "Ghép mỡ Nano", "Liền vết thương"],
    summary: "Liệu pháp kết hợp PRP nồng độ cao và ghép vi hạt mỡ (Nanofat Grafting) thúc đẩy tăng sinh mạch máu và biểu mô hóa ổ loét thiểu dưỡng mãn tính vùng mắt cá chân.",
    beforeImg: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    preOp: {
      diagnosis: "Ổ loét thiểu dưỡng mãn tính vùng mắt cá ngoài chân Phải trên nền đái tháo đường typ 2.",
      symptoms: "Ổ loét kéo dài > 3 tháng không liền, đáy loét xơ chai nghèo mạch máu, đau rát cục bộ.",
      imagingDesc: "Đáy loét thiếu máu nuôi cục bộ, tổ chức hạt phát triển kém."
    },
    intraOp: {
      technique: "Cắt lọc mép xơ chai. Hút mỡ bụng dưới, ly tâm xử lý theo quy trình Coleman/Nanofat. Ly tâm máu tự thân chiết tách PRP hoạt hóa, tiêm vi điểm đáy ổ loét và đắp màng Fibrin giàu tiểu cầu (PRF).",
      duration: "45 phút",
      bloodLoss: "< 10 ml",
      anesthesia: "Tê tại chỗ",
      flapType: "PRP hoạt hóa + Nanofat tự thân"
    },
    postOp: {
      recovery: "Sau 7 ngày đáy loét lên tổ chức hạt đỏ tươi phong phú. Sau 4 tuần biểu mô hóa khép kín hoàn toàn ổ loét.",
      imagingDesc: "Sau 4 tuần: Liền thương hoàn toàn, nền da mềm mại, không tái phát loét."
    },
    featured: true,
    sensitiveImage: false
  },
  {
    id: "TH-2024-003",
    type: "tao-hinh",
    category: "Phẫu thuật tạo hình thẩm mỹ tự thân",
    title: "Tạo hình phục hồi giải phẫu mô mềm bàn tay sau di chứng co rút sẹo bỏng bằng vạt Z-plasty liên hoàn",
    patientInfo: "Bệnh nhân Nữ, 22 tuổi, di chứng bỏng nhiệt",
    date: "05/12/2024",
    hospital: "Khoa Chấn thương Chỉnh hình & Cột sống - Bệnh viện Bạch Mai",
    tags: ["Tạo hình bàn tay", "Z-plasty", "Giải phóng co rút", "Thẩm mỹ chức năng"],
    summary: "Phẫu thuật giải phóng dải xơ co rút kẽ ngón tay và khớp đốt bàn ngón tay bằng kỹ thuật chuyển vạt tam giác Z-plasty liên hoàn góc 60 độ, phục hồi tối đa biên độ dạng và gập duỗi ngón tay.",
    beforeImg: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80",
    preOp: {
      diagnosis: "Dải sẹo xơ co rút kẽ ngón I-II và khớp bàn ngón tay Trái hạn chế vận động dạng ngón cái.",
      symptoms: "Không thể dạng tối đa ngón cái, khoảng kẽ ngón hẹp, khó khăn khi cầm nắm đồ vật to.",
      imagingDesc: "Sẹo co rút dải sợi kéo căng mặt mu bàn tay khi dạng ngón."
    },
    intraOp: {
      technique: "Rạch da theo trục dải sẹo, tạo các vạt tam giác Z-plasty góc 60 độ xen kẽ liên hoàn. Cắt giải phóng toàn bộ dải xơ dưới da đến lớp mạc lành, hoán đổi vị trí các vạt tam giác làm dài trục sẹo thêm 75%.",
      duration: "60 phút",
      bloodLoss: "15 ml",
      anesthesia: "Tê đám rối thần kinh cánh tay",
      flapType: "Vạt Z-plasty liên hoàn đa điểm"
    },
    postOp: {
      recovery: "Mép vạt da liền thì đầu, không hoại tử đỉnh vạt. Tầm vận động dạng ngón cái đạt góc 80 độ ngay sau khi cắt chỉ.",
      imagingDesc: "Sau 3 tháng: Sẹo phẳng mềm mại, biên độ vận động bàn tay phục hồi như bên lành."
    },
    featured: false,
    sensitiveImage: false
  }
];

// Helper get case by ID
function getCaseById(caseId) {
  return SURGICAL_CASES.find(c => c.id === caseId);
}
