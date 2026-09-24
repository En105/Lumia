import React from 'react';
import { ShieldCheck, Lock, Eye, CheckCircle2, ArrowLeft } from 'lucide-react';
import { NavPage } from '../../types';

interface PrivacyPolicyPageProps {
  onNavigate?: (page: NavPage) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
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
            <ShieldCheck className="w-4 h-4 text-[#A85B52]" />
            <span>Chính sách minh bạch & bảo vệ người dùng</span>
          </div>
          <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#341F1A]">
            Chính sách quyền riêng tư (Privacy Policy)
          </h1>
          <p className="text-xs sm:text-sm text-[#735F5A]">
            Cập nhật lần cuối: Ngày 20 tháng 9 năm 2026 | Phiên bản 1.2
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EDE1DB] shadow-xs space-y-8 text-xs sm:text-sm text-[#4A3531] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif-display text-lg sm:text-xl font-bold text-[#341F1A] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#A85B52]" />
              1. Tôn chỉ bảo mật của Lumia
            </h2>
            <p>
              Lumia là một nền tảng <strong>phi thương mại</strong> được xây dựng nhằm mục đích giáo dục, chia sẻ kiến thức khoa học về mỹ phẩm và kết nối cộng đồng người yêu chăm sóc da. Chúng mình tôn trọng tuyệt đối quyền riêng tư của mọi độc giả và thành viên tham gia thảo luận.
            </p>
            <p>
              Chúng mình <strong>không bao giờ bán, cho thuê hoặc thương mại hóa</strong> bất kỳ thông tin cá nhân nào của bạn cho bên thứ ba, các nhãn hàng mỹ phẩm hay các đơn vị quảng cáo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-display text-lg sm:text-xl font-bold text-[#341F1A] flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#A85B52]" />
              2. Dữ liệu chúng mình thu thập và mục đích sử dụng
            </h2>
            <p>
              Khi bạn tương tác với website Lumia, chúng mình có thể thu nhận một số thông tin cơ bản sau:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#5E4A46]">
              <li>
                <strong>Nội dung thảo luận & bình luận tự nguyện:</strong> Khi bạn tham gia hỏi đáp hoặc bình luận bài viết, tên hiển thị (hoặc biệt danh) và nội dung bạn đóng góp sẽ được lưu trữ công khai để phục vụ mục đích trao đổi kiến thức trong cộng đồng.
              </li>
              <li>
                <strong>Kết quả trắc nghiệm da (Skin Quiz):</strong> Dữ liệu lựa chọn câu hỏi trắc nghiệm chỉ được xử lý trực tiếp trên trình duyệt của bạn (Client-side) để gợi ý routine và phân loại da, không liên kết với danh tính cá nhân.
              </li>
              <li>
                <strong>Thông tin phân tích truy cập (Google Analytics 4):</strong> Chúng mình sử dụng mã đo lường Google Analytics (Measurement ID: G-T135SY6GD0) để hiểu mức độ quan tâm của độc giả đối với các chủ đề da liễu, thời gian đọc trung bình và thiết bị truy cập nhằm nâng cao chất lượng biên tập. Dữ liệu này hoàn toàn ẩn danh (anonymized IP).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-display text-lg sm:text-xl font-bold text-[#341F1A] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#3E8B57]" />
              3. Quyền của người dùng
            </h2>
            <p>
              Bạn có toàn quyền yêu cầu Lumia:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-[#FAF3F0] border border-[#ECDAD2]">
                <span className="font-semibold block text-[#341F1A] mb-1">Xóa bình luận & thảo luận</span>
                <span className="text-[#6E5853] text-xs">Yêu cầu gỡ bỏ vĩnh viễn bài đăng hoặc bình luận bạn từng chia sẻ trên diễn đàn.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#FAF3F0] border border-[#ECDAD2]">
                <span className="font-semibold block text-[#341F1A] mb-1">Ẩn danh tuyệt đối</span>
                <span className="text-[#6E5853] text-xs">Bạn có thể tự do đọc toàn bộ thư viện bài viết mà không bắt buộc phải đăng ký tài khoản.</span>
              </div>
            </div>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#F2E5DF]">
            <h2 className="font-serif-display text-lg sm:text-xl font-bold text-[#341F1A]">
              4. Thông tin liên hệ phụ trách quyền riêng tư
            </h2>
            <p>
              Mọi thắc mắc, đề xuất hoặc yêu cầu xóa dữ liệu cá nhân, vui lòng liên hệ trực tiếp với nhóm phụ trách dự án Lumia:
            </p>
            <div className="p-4 rounded-2xl bg-[#FCFAF8] border border-[#ECDCD6] text-xs sm:text-sm text-[#4A3531]">
              <p>• <strong>Dự án:</strong> Nghiên cứu & Xây dựng Website Cộng đồng Mỹ phẩm Lumia</p>
              <p>• <strong>Email phụ trách:</strong> <span className="font-mono text-[#96554B]">lumia.beauty@gmail.com</span></p>
              <p>• <strong>Phản hồi:</strong> Trong vòng 24 - 48 giờ làm việc kể từ khi tiếp nhận yêu cầu.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
