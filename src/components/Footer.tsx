import React from 'react';
import { Sparkles, Heart, Mail, MapPin, Phone } from 'lucide-react';
import { NavPage } from '../types';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onOpenCreateDiscussion?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCreateDiscussion }) => {
  return (
    <footer className="bg-[#2D2422] text-[#E8DED9] pt-16 pb-12 border-t border-[#463936]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
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
              Lumia là blog và cộng đồng khoa học dành cho những người yêu thích làm đẹp. Chúng mình tin rằng mỗi làn da đều có câu chuyện riêng, và việc chăm sóc da bắt đầu từ sự hiểu biết chân thật.
            </p>

            <div className="pt-2 text-xs text-[#A89691] space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E5A89E] shrink-0" />
                <span>TP. Hồ Chí Minh, Việt Nam</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E5A89E] shrink-0" />
                <span>hello@lumia.vn</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E5A89E] shrink-0" />
                <span>0123 456 789</span>
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
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Trang chủ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('articles'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Bài viết chuyên sâu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('skin-knowledge'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Kiến thức làn da
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('reviews'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Góc review chân thật
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
                  onClick={() => { onNavigate('discussions'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Diễn đàn thảo luận
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (onOpenCreateDiscussion) onOpenCreateDiscussion();
                    else onNavigate('discussions');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Đặt câu hỏi cho chuyên gia
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('discussions'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Câu chuyện thành viên
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
                  onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Về chúng tôi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Liên hệ
                </button>
              </li>
              <li>
                <span className="text-[#877874] cursor-default">Chính sách bảo mật</span>
              </li>
              <li>
                <span className="text-[#877874] cursor-default">Điều khoản sử dụng</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-[#3F3330] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A89691]">
          <p>© 2026 Lumia. All rights reserved. “Chạm vào vẻ đẹp, hiểu về làn da.”</p>
          
          <div className="flex items-center gap-4 text-sm">
            {/* Social Links */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-8 h-8 rounded-full bg-[#3F3330] flex items-center justify-center hover:bg-[#E5A89E] hover:text-[#2D2422] transition-colors"
              title="Facebook"
            >
              f
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-8 h-8 rounded-full bg-[#3F3330] flex items-center justify-center hover:bg-[#E5A89E] hover:text-[#2D2422] transition-colors font-serif italic"
              title="Instagram"
            >
              in
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-8 h-8 rounded-full bg-[#3F3330] flex items-center justify-center hover:bg-[#E5A89E] hover:text-[#2D2422] transition-colors"
              title="TikTok"
            >
              tt
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-8 h-8 rounded-full bg-[#3F3330] flex items-center justify-center hover:bg-[#E5A89E] hover:text-[#2D2422] transition-colors"
              title="YouTube"
            >
              yt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
