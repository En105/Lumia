import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, BookOpen, Heart, ShieldCheck, Award } from 'lucide-react';
import { NavPage } from '../../types';

interface HeroSectionProps {
  onNavigate: (page: NavPage) => void;
  onOpenCreateDiscussion: () => void;
  onOpenSkinQuiz: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenCreateDiscussion,
  onOpenSkinQuiz,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FCFAF8] via-[#F9F1ED] to-[#FCFAF8] pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Decorative ambient blurred spots for 2026 soft aesthetic */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#FCE8E2]/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#E8EFE9]/70 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Editorial Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5E5DF] text-[#78463E] text-xs font-semibold tracking-wide border border-[#ECD1C8]">
              <Sparkles className="w-3.5 h-3.5 text-[#A65B52]" />
              <span>Không gian kiến thức & cộng đồng làm đẹp 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#341F1A] tracking-tight leading-[1.15]">
              Chạm vào vẻ đẹp, <br className="hidden sm:inline" />
              <span className="italic font-medium text-[#A65B52]">hiểu về làn da.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#66524E] leading-relaxed max-w-xl font-normal">
              Khám phá kiến thức chăm sóc da khoa học, review mỹ phẩm trung thực không PR và những câu chuyện làm đẹp chân thật nhất từ cộng đồng Lumia.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-explore-articles-cta"
                onClick={() => {
                  onNavigate('articles');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-[#A85B52] hover:bg-[#91463D] shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <BookOpen className="w-4 h-4" />
                <span>Khám phá bài viết</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-join-community-cta"
                onClick={onOpenCreateDiscussion}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#5B3933] bg-[#FCFAF8] hover:bg-[#F6E9E4] border border-[#E8D4CE] transition-all duration-200 shadow-xs hover:border-[#D9BDB5]"
              >
                <MessageSquare className="w-4 h-4 text-[#8C5E58]" />
                <span>Tham gia cộng đồng</span>
              </button>
            </div>

            {/* Mini Skin Test Banner */}
            <div 
              onClick={onOpenSkinQuiz}
              className="pt-3 flex items-center gap-3 text-xs text-[#6B4E47] cursor-pointer group w-fit"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C27367] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A85B52]"></span>
              </span>
              <span className="group-hover:text-[#341F1A] underline underline-offset-4 decoration-[#D9B8B0] font-medium">
                Chưa biết loại da của mình? Làm trắc nghiệm nhanh 60s →
              </span>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-[#EFE1DB] grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-serif-display text-[#3E2723]">250+</div>
                <div className="text-xs text-[#7D6762] mt-0.5">Bài viết chuyên sâu</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-serif-display text-[#3E2723]">18.5k+</div>
                <div className="text-xs text-[#7D6762] mt-0.5">Thành viên thảo luận</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-serif-display text-[#3E2723]">100%</div>
                <div className="text-xs text-[#7D6762] mt-0.5">Đánh giá khách quan</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Aesthetics */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Rounded Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/5] group">
                <img
                  src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=85"
                  alt="Chăm sóc da tự nhiên và mỹ phẩm Lumia"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#261815]/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] font-medium uppercase tracking-widest text-[#F8E2DC] bg-[#3B2521]/70 px-2.5 py-1 rounded-full backdrop-blur-xs">
                    Kiến thức khoa học
                  </span>
                  <h3 className="font-serif-display text-lg sm:text-xl font-semibold mt-2 text-white leading-snug">
                    Thấu hiểu cấu trúc biểu bì & chọn mỹ phẩm tương thích
                  </h3>
                </div>
              </div>

              {/* Floating Aesthetic Card 1: Review rating badge */}
              <div className="absolute -top-4 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-[#F2E5E0] max-w-[200px] animate-in fade-in slide-in-from-bottom-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#FCEBE7] flex items-center justify-center text-[#934E45]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#3E2723]">Review thật 100%</p>
                    <p className="text-[10px] text-[#7E6964]">Không quảng cáo ẩn</p>
                  </div>
                </div>
              </div>

              {/* Floating Aesthetic Card 2: Community active quote */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-[#F2E5E0] max-w-[220px]">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#E5EDE7] flex items-center justify-center text-[#4A7253] shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#341F1A]">Cộng đồng thân thiện</p>
                    <p className="text-[10px] text-[#69544F] mt-0.5">
                      “Lumia đã giúp mình dừng thói quen dùng treatment bừa bãi!”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
