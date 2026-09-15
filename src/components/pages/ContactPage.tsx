import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, MessageSquare, Clock, Globe } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="bg-[#FCFAF8] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#935A51] bg-[#F9ECE7] px-3.5 py-1 rounded-full">
            Kết nối cùng chúng mình
          </span>
          <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#341F1A]">
            Liên hệ với Lumia
          </h1>
          <p className="text-sm sm:text-base text-[#6E5853] leading-relaxed">
            Bạn có câu hỏi, ý kiến đóng góp hoặc muốn chia sẻ câu chuyện làn da của mình cùng chuyên gia Lumia? Hãy gửi tin nhắn cho chúng mình nhé.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#EDE1DB] shadow-xs">
            <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-[#341F1A] mb-2">
              Gửi tin nhắn trực tiếp
            </h2>
            <p className="text-xs sm:text-sm text-[#735F5A] mb-6">
              Chúng mình thường phản hồi trong vòng 24 giờ làm việc.
            </p>

            {submitted && (
              <div className="p-4 rounded-2xl bg-[#EAF5EE] border border-[#D0EADB] text-[#24613B] text-xs sm:text-sm flex items-center gap-3 mb-6 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-[#2E7D32] shrink-0" />
                <span>
                  Cảm ơn bạn! Tin nhắn đã được gửi đến ban biên tập Lumia. Chúng mình sẽ liên lạc lại sớm nhất!
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
                    placeholder="phuongmai@gmail.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FCFAF8] border border-[#ECDCD6] text-xs sm:text-sm text-[#341F1A] focus:outline-none focus:ring-2 focus:ring-[#A85B52]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3531] mb-1">
                  Chủ đề liên hệ
                </label>
                <input
                  id="contact-subject-input"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Ví dụ: Đóng góp ý kiến bài viết / Câu hỏi chăm sóc da"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FCFAF8] border border-[#ECDCD6] text-xs sm:text-sm text-[#341F1A] focus:outline-none focus:ring-2 focus:ring-[#A85B52]"
                />
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
                  placeholder="Viết nội dung tin nhắn hoặc thắc mắc của bạn tại đây..."
                  className="w-full p-4 rounded-xl bg-[#FCFAF8] border border-[#ECDCD6] text-xs sm:text-sm text-[#341F1A] focus:outline-none focus:ring-2 focus:ring-[#A85B52]"
                />
              </div>

              <button
                id="contact-submit-btn"
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#A85B52] hover:bg-[#91463D] shadow-xs hover:shadow-md transition-all duration-200"
              >
                <Send className="w-4 h-4" />
                <span>Gửi tin nhắn</span>
              </button>
            </form>
          </div>

          {/* Right Column: Contact Details & Stylized Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Info Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EDE1DB] shadow-xs space-y-5">
              <h3 className="font-serif-display text-lg font-bold text-[#341F1A]">
                Thông tin văn phòng Lumia
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#5D4641]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#FAF0EB] flex items-center justify-center text-[#96554B] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#341F1A] block">Địa chỉ</span>
                    <span className="text-[#6E5853]">Quận 1, TP. Hồ Chí Minh, Việt Nam</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#FAF0EB] flex items-center justify-center text-[#96554B] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#341F1A] block">Email hỗ trợ & biên tập</span>
                    <a href="mailto:hello@lumia.vn" className="text-[#96554B] hover:underline">
                      hello@lumia.vn
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#FAF0EB] flex items-center justify-center text-[#96554B] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#341F1A] block">Điện thoại liên hệ</span>
                    <span className="text-[#6E5853]">0123 456 789</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#FAF0EB] flex items-center justify-center text-[#96554B] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#341F1A] block">Giờ làm việc ban biên tập</span>
                    <span className="text-[#6E5853]">Thứ Hai - Thứ Sáu: 08:30 - 18:00</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#F5EBE6]">
                <span className="text-xs font-semibold text-[#341F1A] block mb-3">
                  Theo dõi kênh truyền thông Lumia
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#FAF0EB] hover:bg-[#F2E0D8] text-xs font-semibold text-[#7A4840] transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#FAF0EB] hover:bg-[#F2E0D8] text-xs font-semibold text-[#7A4840] transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#FAF0EB] hover:bg-[#F2E0D8] text-xs font-semibold text-[#7A4840] transition-colors"
                  >
                    TikTok
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#FAF0EB] hover:bg-[#F2E0D8] text-xs font-semibold text-[#7A4840] transition-colors"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Stylized Illustrated Map */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#EDE1DB] shadow-xs">
              <div className="p-4 border-b border-[#F5EBE6] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#8C5248]" />
                  <span className="text-xs font-semibold text-[#341F1A]">Vị trí bản đồ TP. Hồ Chí Minh</span>
                </div>
                <span className="text-[10px] text-[#8C7672]">Google Maps Studio</span>
              </div>
              
              <div className="relative aspect-[16/9] bg-[#F5ECE8] flex items-center justify-center p-6 text-center">
                {/* Stylized vector map pattern */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#96554B_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#ECD8D0] shadow-sm max-w-xs">
                  <div className="w-8 h-8 rounded-full bg-[#FCEBE7] text-[#91463D] flex items-center justify-center mx-auto mb-2">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-[#341F1A]">Lumia Editorial Headquarters</h4>
                  <p className="text-[11px] text-[#735F5A] mt-0.5">
                    Quận 1, Trung tâm Thành phố Hồ Chí Minh, Việt Nam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
