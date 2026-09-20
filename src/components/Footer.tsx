import React from 'react';
import { Sparkles, Heart, Mail, MapPin, Phone, ShieldAlert, BookOpen } from 'lucide-react';
import { NavPage } from '../types';

interface FooterProps {
  onNavigate?: (page: NavPage) => void;
  onOpenCreateDiscussion?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCreateDiscussion }) => {
  return (
    <footer className="bg-[#2D2422] text-[#E8DED9] pt-16 pb-12 border-t border-[#463936]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Disclaimer Banner */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-[#392C29] border border-[#53413E] flex flex-col sm:flex-row items-start sm:items-center gap-3.5 text-xs text-[#DAC7C2]">
          <ShieldAlert className="w-5 h-5 text-[#E5A89E] shrink-0" />
          <div className="space-y-0.5 leading-relaxed">
            <strong className="text-white">Tuyên bố miễn trừ y khoa & Cam kết phi thương mại:</strong>
            <p>
              Mọi kiến thức trên Lumia mang tính chất tham khảo khoa học, không thay thế chẩn đoán hay phác đồ từ bác sĩ chuyên khoa da liễu. Lumia không bán hàng, không đặt link liên kết hoa hồng, và toàn bộ số liệu thống kê được hiển thị ở chế độ dữ liệu mẫu minh họa.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => { onNavigate?.('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-3 cursor-pointer group w-fit"
            >
              <div className="w-10 h-10 rounded-full bg-[#483531] flex items-center justify-center border border-[#634B45]">
                <Sparkles className="w-5 h-5 text-[#F5C7BF]" />
              </div>
              <div>
                <span className="font-serif-display text-2xl font-bold tracking-tight text-white block">
                  Lumia
                </span>
                <span className="text-xs text-[#D8BDB7] tracking-wide block">
                  Chạm vào vẻ đẹp, hiểu về làn da
                </span>
              </div>
            </div>

            <p className="text-sm text-[#C4B2AD] leading-relaxed max-w-sm pt-2">
              Lumia là blog và cộng đồng khoa học phi thương mại dành cho người yêu làn da khỏe mạnh. Chúng mình chia sẻ kiến thức dựa trên y văn độc lập (AAD, PubMed), tôn trọng sự trung thực và tính khoa học.
            </p>

            <div className="pt-2 text-xs text-[#A89691] space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E5A89E] shrink-0" />
                <span>TP. Hồ Chí Minh, Việt Nam</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E5A89E] shrink-0" />
                <a href="mailto:lumia.beauty.project@gmail.com" className="hover:text-white transition-colors underline">
                  lumia.beauty.project@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E5A89E] shrink-0" />
                <span>Hỗ trợ trực tuyến qua Email (Dự án học thuật)</span>
              </div>
            </div>
          </div>

          {/* Col 3: Khám phá */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Khám phá
            </h4>
            <ul className="space-y-2.5 text-sm text-[#C4B2AD]">
              <li>
                <button 
                  onClick={() => { onNavigate?.('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Trang chủ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate?.('articles'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Kho bài viết khoa học
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate?.('skin-knowledge'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Kiến thức 5 loại da
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate?.('reviews'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Phân tích hoạt chất & mỹ phẩm
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Cộng đồng */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Cộng đồng
            </h4>
            <ul className="space-y-2.5 text-sm text-[#C4B2AD]">
              <li>
                <button 
                  onClick={() => { onNavigate?.('discussions'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Diễn đàn thảo luận
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (onOpenCreateDiscussion) onOpenCreateDiscussion();
                    else onNavigate?.('discussions');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Đặt câu hỏi cho cộng đồng
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate?.('discussions'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Kinh nghiệm & Trải nghiệm thực tế
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Về Lumia */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Về Lumia
            </h4>
            <ul className="space-y-2.5 text-sm text-[#C4B2AD]">
              <li>
                <button 
                  onClick={() => { onNavigate?.('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Giới thiệu & Triết lý dự án
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate?.('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Liên hệ & Đóng góp ý kiến
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate?.('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#B5A39E] hover:text-white transition-colors text-xs"
                >
                  Cam kết liêm chính học thuật
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate?.('privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#B5A39E] hover:text-white transition-colors text-xs"
                >
                  Chính sách bảo mật
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate?.('terms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#B5A39E] hover:text-white transition-colors text-xs"
                >
                  Điều khoản sử dụng
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-[#3F3330] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A89691]">
          <p>© 2026 Lumia. All rights reserved. “Chạm vào vẻ đẹp, hiểu về làn da.”</p>
          <p className="text-[11px] text-[#9A8782]">
            Dự án nghiên cứu & phát triển website chuyên đề truyền thông số • Phi thương mại
          </p>
        </div>
      </div>
    </footer>
  );
};
