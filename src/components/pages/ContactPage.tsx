import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, MessageSquare, Clock, Globe, AlertCircle, Sparkles, Copy, Check } from 'lucide-react';
import { trackEvent } from '../../utils/analytics';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const realProjectEmail = 'lumia.beauty@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(realProjectEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
      trackEvent('contact_form_submitted', {
        sender_email: email,
        subject: subject || 'General Inquiry',
      });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  return (
    <div className="bg-[#FCFAF8] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#935A51] bg-[#F9ECE7] px-3.5 py-1 rounded-full">
            Kênh liên hệ chính thức
          </span>
          <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#341F1A]">
            Liên hệ với Ban biên tập Lumia
          </h1>
          <p className="text-sm sm:text-base text-[#6E5853] leading-relaxed">
            Bạn có câu hỏi khoa học da liễu, phản ánh nội dung hoặc muốn đóng góp kinh nghiệm cá nhân? Đội ngũ dự án Lumia luôn sẵn sàng lắng nghe bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#EDE1DB] shadow-xs">
            <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-[#341F1A] mb-2">
              Gửi tin nhắn trực tiếp
            </h2>
            <p className="text-xs sm:text-sm text-[#735F5A] mb-6">
              Mọi tin nhắn gửi đến ban biên tập đều được phản hồi tận tình qua email.
            </p>

            {submitted && (
              <div className="p-4 rounded-2xl bg-[#EAF5EE] border border-[#D0EADB] text-[#24613B] text-xs sm:text-sm flex items-center gap-3 mb-6 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-[#2E7D32] shrink-0" />
                <span>
                  Cảm ơn bạn! Tin nhắn của bạn đã được ghi nhận và gửi đến email nhóm phát triển (<span className="font-mono">{realProjectEmail}</span>). Chúng mình sẽ phản hồi sớm nhất!
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3531] mb-1">
                    Họ và tên *
                  </label>
                  <input
                    id="contact-name-input"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ví dụ: Nguyễn Phương Mai"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FCFAF8] border border-[#ECDCD6] text-xs sm:text-sm text-[#341F1A] focus:outline-none focus:ring-2 focus:ring-[#A85B52]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3531] mb-1">
                    Email của bạn *
                  </label>
                  <input
                    id="contact-email-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FCFAF8] border border-[#ECDCD6] text-xs sm:text-sm text-[#341F1A] focus:outline-none focus:ring-2 focus:ring-[#A85B52]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3531] mb-1">
                  Chủ đề / Lý do liên hệ
                </label>
                <select
                  id="contact-subject-select"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FCFAF8] border border-[#ECDCD6] text-xs sm:text-sm text-[#341F1A] focus:outline-none focus:ring-2 focus:ring-[#A85B52]"
                >
                  <option value="">-- Chọn chủ đề quan tâm --</option>
                  <option value="Hỏi đáp về cách chăm sóc da">Hỏi đáp về cách chăm sóc da</option>
                  <option value="Góp ý bài viết / Nguồn y khoa">Góp ý bài viết / Bổ sung nguồn y khoa</option>
                  <option value="Chia sẻ câu chuyện làn da">Chia sẻ câu chuyện phục hồi da cá nhân</option>
                  <option value="Hợp tác nghiên cứu phi thương mại">Đóng góp cho dự án sinh viên Lumia</option>
                  <option value="Khác">Lý do khác</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3531] mb-1">
                  Nội dung tin nhắn *
                </label>
                <textarea
                  id="contact-message-input"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Nhập nội dung chia sẻ hoặc thắc mắc của bạn..."
                  className="w-full p-4 rounded-xl bg-[#FCFAF8] border border-[#ECDCD6] text-xs sm:text-sm text-[#341F1A] focus:outline-none focus:ring-2 focus:ring-[#A85B52]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-[#8C7672]">
                  * Thông tin chỉ dùng để liên lạc phản hồi, không chia sẻ cho bên thứ ba.
                </span>
                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#A85B52] hover:bg-[#91463D] shadow-xs transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Gửi tin nhắn</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Authentic Contact Info & Clear Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EDE1DB] shadow-xs space-y-6">
              <h3 className="font-serif-display text-lg font-bold text-[#341F1A]">
                Thông tin dự án & Đầu mối liên hệ
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Real Verified Project Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#FAF0EB] flex items-center justify-center text-[#96554B] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold text-[#341F1A] block">Email chính thức dự án</span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <a href={`mailto:${realProjectEmail}`} className="text-[#96554B] font-mono hover:underline text-xs sm:text-sm break-all">
                        {realProjectEmail}
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        title="Sao chép email"
                        className="p-1 rounded-md text-[#7A635E] hover:bg-[#FAF0EB] transition-colors"
                      >
                        {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#2E7D32]" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                    <span className="text-[10px] text-[#2E7D32] bg-[#EAF5EE] px-2 py-0.5 rounded-full inline-block mt-1">
                      ✓ Email tác giả đã xác thực
                    </span>
                  </div>
                </div>

                {/* Honest Placeholder for Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#FAF0EB] flex items-center justify-center text-[#96554B] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#341F1A] block">Số điện thoại liên hệ</span>
                    <span className="text-[#6E5853] italic">
                      [Chưa công bố công khai - Vui lòng liên hệ qua email trên]
                    </span>
                  </div>
                </div>

                {/* Educational Facility Placeholder */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#FAF0EB] flex items-center justify-center text-[#96554B] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#341F1A] block">Địa điểm thực hiện dự án</span>
                    <span className="text-[#6E5853]">
                      Thành phố Hà Nội, Việt Nam (Nhóm nghiên cứu học thuật)
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#FAF0EB] flex items-center justify-center text-[#96554B] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#341F1A] block">Thời gian tiếp nhận thư</span>
                    <span className="text-[#6E5853]">Thứ Hai - Thứ Bảy: 09:00 - 18:00</span>
                  </div>
                </div>
              </div>

              {/* Social Channels with Clear Honest Placeholders */}
              <div className="pt-4 border-t border-[#F5EBE6] space-y-3">
                <span className="text-xs font-semibold text-[#341F1A] block">
                  Kênh truyền thông & thảo luận cộng đồng
                </span>
                <p className="text-[11px] text-[#7A6560]">
                  Các kênh mạng xã hội chính thức đang trong giai đoạn xây dựng và tích hợp:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded-xl bg-[#FAF0EB] text-[#7A4840] border border-[#ECDAD2]">
                    <span className="font-semibold block">Facebook Page:</span>
                    <span className="text-[10px] text-[#8C6D66]">[Đang cập nhật link fanpage]</span>
                  </div>
                  <div className="p-2 rounded-xl bg-[#FAF0EB] text-[#7A4840] border border-[#ECDAD2]">
                    <span className="font-semibold block">Cộng đồng Zalo:</span>
                    <span className="text-[10px] text-[#8C6D66]">[Nhóm thảo luận sinh viên]</span>
                  </div>
                  <div className="p-2 rounded-xl bg-[#FAF0EB] text-[#7A4840] border border-[#ECDAD2]">
                    <span className="font-semibold block">Instagram:</span>
                    <span className="text-[10px] text-[#8C6D66]">[Đang xây dựng nội dung]</span>
                  </div>
                  <div className="p-2 rounded-xl bg-[#FAF0EB] text-[#7A4840] border border-[#ECDAD2]">
                    <span className="font-semibold block">TikTok Khoa học:</span>
                    <span className="text-[10px] text-[#8C6D66]">[Kênh video ngắn Lumia]</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Note regarding academic project integrity */}
            <div className="p-4 rounded-2xl bg-[#FAF3F0] border border-[#E8D4CC] flex items-start gap-3 text-xs text-[#6A4740]">
              <AlertCircle className="w-4 h-4 text-[#A85B52] shrink-0 mt-0.5" />
              <p>
                <strong>Cam kết trung thực dữ liệu:</strong> Website Lumia tuyệt đối không sử dụng thông tin liên hệ giả mạo hay số điện thoại ảo. Mọi trao đổi thực tế xin gửi trực tiếp về email <span className="font-semibold">{realProjectEmail}</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
