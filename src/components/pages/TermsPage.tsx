import React from 'react';
import { AlertTriangle, BookOpen, CheckCircle2, ShieldAlert, ArrowLeft } from 'lucide-react';
import { NavPage } from '../../types';

interface TermsPageProps {
  onNavigate?: (page: NavPage) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FCFAF8] min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb / Back */}
        <button
          onClick={() => onNavigate?.('home')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#8C5E58] hover:text-[#3E2723] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại Trang chủ</span>
        </button>

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0EB] text-[#8C5248] text-xs font-semibold">
            <BookOpen className="w-4 h-4 text-[#A85B52]" />
            <span>Quy chuẩn cộng đồng & Trách nhiệm biên tập</span>
          </div>
          <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#341F1A]">
            Điều khoản sử dụng & Miễn trừ y khoa
          </h1>
          <p className="text-xs sm:text-sm text-[#735F5A]">
            Cập nhật lần cuối: Ngày 20 tháng 9 năm 2026 | Ban biên tập Lumia
          </p>
        </div>

        {/* Highlight Alert Box: Medical Disclaimer */}
        <div className="bg-[#FFF8F6] border-l-4 border-[#C85A48] rounded-2xl p-6 sm:p-7 shadow-xs">
          <div className="flex items-start gap-3.5">
            <AlertTriangle className="w-5 h-5 text-[#C85A48] shrink-0 mt-0.5" />
            <div className="space-y-2 text-xs sm:text-sm text-[#52342E] leading-relaxed">
              <h3 className="font-serif-display font-bold text-base text-[#3E201B]">
                Cảnh báo quan trọng về tính chất thông tin y khoa & da liễu
              </h3>
              <p>
                <strong>Nội dung trên Lumia nhằm mục đích cung cấp thông tin và kiến thức tham khảo, không thay thế cho chẩn đoán hoặc tư vấn y khoa từ bác sĩ/chuyên gia da liễu. Nếu bạn có vấn đề về da kéo dài hoặc nghiêm trọng, hãy tìm kiếm sự tư vấn từ chuyên gia y tế.</strong>
              </p>
              <p className="text-xs text-[#7A554E]">
                Mỗi cá nhân sở hữu hàng rào sinh học, cơ địa và tiền sử dị ứng riêng biệt. Việc áp dụng bất kỳ hoạt chất nồng độ cao (Retinoids, AHAs, BHAs) hoặc thay đổi phác đồ chăm sóc da đều cần được lắng nghe cẩn trọng và thử nghiệm kích ứng (Patch Test) trước khi dùng toàn mặt.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EDE1DB] shadow-xs space-y-8 text-xs sm:text-sm text-[#4A3531] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif-display text-lg sm:text-xl font-bold text-[#341F1A]">
              1. Mục đích hoạt động phi thương mại
            </h2>
            <p>
              Website Lumia được khởi xướng với mục tiêu tạo lập một kho lưu trữ kiến thức trung thực, có dẫn chứng khoa học và một không gian thảo luận văn minh cho cộng đồng.
            </p>
            <p>
              Lumia <strong>không phải là một website bán hàng trực tuyến</strong>. Chúng mình không bán sản phẩm, không nhận hoa hồng tiếp thị liên kết (affiliate links), không nhận tiền tài trợ để viết bài đánh giá sai lệch thực tế. Mọi phân tích thành phần đều dựa trên tài liệu nghiên cứu công khai và trải nghiệm lâm sàng/cá nhân của tác giả.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-display text-lg sm:text-xl font-bold text-[#341F1A]">
              2. Tiêu chuẩn biên tập & Nguồn tham khảo chính thống
            </h2>
            <p>
              Mọi bài viết xuất bản trên Lumia tuân thủ quy chuẩn biên tập nghiêm ngặt:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#5E4A46]">
              <li>
                Các thuật ngữ chuyên môn, tỷ lệ nồng độ hoạt chất và cơ chế sinh học được đối chiếu với các nguồn uy tín: Viện Da liễu Hoa Kỳ (AAD), Thư viện Y khoa Quốc gia Hoa Kỳ (PubMed/NCBI), Tổ chức Y tế Thế giới (WHO) và hướng dẫn của Bệnh viện Da liễu Trung ương Việt Nam.
              </li>
              <li>
                Chúng mình tuyệt đối không bịa đặt nguồn tài liệu, không tự ý gán ghép danh xưng y khoa giả mạo hoặc trích dẫn các nghiên cứu không có thật.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-display text-lg sm:text-xl font-bold text-[#341F1A]">
              3. Quy tắc ứng xử trong cộng đồng thảo luận
            </h2>
            <p>
              Thành viên tham gia chuyên mục thảo luận của Lumia cam kết tuân thủ các nguyên tắc:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-[#FAF3F0] border border-[#ECDAD2] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3E8B57] shrink-0 mt-0.5" />
                <span className="text-xs">Tôn trọng ý kiến và trải nghiệm của người khác, không công kích cá nhân hay dùng ngôn từ thiếu văn hóa.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#FAF3F0] border border-[#ECDAD2] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3E8B57] shrink-0 mt-0.5" />
                <span className="text-xs">Nghiêm cấm hành vi quảng cáo rác (spam link), bán hàng mỹ phẩm giả/kem trộn không rõ nguồn gốc.</span>
              </div>
            </div>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#F2E5DF]">
            <h2 className="font-serif-display text-lg sm:text-xl font-bold text-[#341F1A]">
              4. Giới hạn trách nhiệm
            </h2>
            <p>
              Người dùng tự chịu trách nhiệm khi quyết định áp dụng các mẹo chăm sóc hoặc sử dụng mỹ phẩm dựa trên nội dung tham khảo. Lumia khuyến khích bạn luôn tham vấn ý kiến bác sĩ chuyên khoa da liễu có chứng chỉ hành nghề đối với các tình trạng mụn viêm nặng, nhiễm trùng da, viêm da tiếp xúc hoặc bệnh lý da liễu mạn tính.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
