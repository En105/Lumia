import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2 } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#FAF0EB] via-[#FCEAE4] to-[#F5ECE8] border border-[#ECD3CA] p-8 sm:p-12 text-center shadow-xs">
          {/* Subtle floral/leaf watermark */}
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 text-[#8C554B] text-xs font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B86B62]" />
              <span>Bản tin Lumia Newsletter</span>
            </div>

            <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#341F1A]">
              Cùng Lumia hiểu hơn về làn da mỗi ngày.
            </h2>

            <p className="text-sm sm:text-base text-[#6E5853] leading-relaxed">
              Nhận những bài viết, tips skincare và xu hướng làm đẹp mới nhất từ Lumia trực tiếp vào hòm thư mỗi sáng thứ Hai. Không spam, hủy đăng ký bất kỳ lúc nào.
            </p>

            {subscribed ? (
              <div className="p-4 bg-white/90 rounded-2xl border border-[#D5E5DA] flex items-center justify-center gap-3 text-sm text-[#2E6B43] animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-[#3E8B57]" />
                <span className="font-medium">
                  Cảm ơn bạn đã đăng ký! Lumia đã gửi email chào mừng đến hòm thư của bạn.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="pt-2 max-w-md mx-auto flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-[#937C77] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="newsletter-email-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email của bạn"
                    className="w-full pl-10 pr-4 py-3 rounded-full text-sm bg-white border border-[#E5D0C7] focus:outline-none focus:ring-2 focus:ring-[#A85B52] text-[#341F1A] placeholder:text-[#9F8883] shadow-xs"
                  />
                </div>
                <button
                  id="newsletter-submit-btn"
                  type="submit"
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#A85B52] hover:bg-[#91463D] shadow-xs transition-colors shrink-0"
                >
                  Đăng ký
                </button>
              </form>
            )}

            <p className="text-[11px] text-[#937E79]">
              Cam kết bảo mật thông tin cá nhân. Chúng mình tôn trọng hộp thư của bạn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
