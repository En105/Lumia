import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, HelpCircle } from 'lucide-react';
import { SkinType } from '../../types';

interface SkinKnowledgeSectionProps {
  skinTypes: SkinType[];
  onSelectSkinType: (skin: SkinType) => void;
  onOpenSkinQuiz: () => void;
}

export const SkinKnowledgeSection: React.FC<SkinKnowledgeSectionProps> = ({
  skinTypes,
  onSelectSkinType,
  onOpenSkinQuiz,
}) => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#FCFAF8] via-[#FAF3F0] to-[#FCFAF8] border-y border-[#F0E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#935A51] bg-[#F9ECE7] px-3.5 py-1 rounded-full">
            Cẩm nang nền tảng
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#341F1A]">
            Hiểu làn da của bạn
          </h2>
          <p className="text-sm sm:text-base text-[#6E5853] leading-relaxed">
            Mỗi loại da mang một đặc tính sinh học riêng. Xác định đúng loại da là bước tiên quyết để lựa chọn sản phẩm hiệu quả và tiết kiệm chi phí.
          </p>

          <div className="pt-2">
            <button
              id="skin-quiz-pill-btn"
              onClick={onOpenSkinQuiz}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-[#82473D] bg-white border border-[#E8D0C7] hover:bg-[#F9EFEA] hover:border-[#D8B6AC] shadow-xs transition-all"
            >
              <HelpCircle className="w-4 h-4 text-[#A85B52]" />
              <span>Chưa chắc chắn về loại da? Làm bài trắc nghiệm 60 giây</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 5 Skin Types Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {skinTypes.map((type) => (
            <div
              key={type.id}
              id={`skin-card-${type.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-[#EDE1DB] shadow-xs hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F2E6E1]">
                  <img
                    src={type.image}
                    alt={type.vietnameseName}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.triedFallback) {
                        target.dataset.triedFallback = 'true';
                        target.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80';
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-3 text-white font-serif-display text-base font-bold drop-shadow-xs">
                    {type.vietnameseName}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-4 space-y-2">
                  <p className="text-[11px] font-semibold text-[#9C5B51] uppercase tracking-wider">
                    {type.name}
                  </p>
                  <p className="text-xs text-[#66524E] leading-relaxed line-clamp-3">
                    {type.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] font-medium text-[#7D6661] block mb-1">
                      Hoạt chất khuyên dùng:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {type.recommendedIngredients.slice(0, 2).map((ing, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-[#FAF0EB] text-[#7A4B42] font-medium"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-4 pt-2 border-t border-[#F8EFEA]">
                <button
                  id={`explore-skin-${type.id}-btn`}
                  onClick={() => onSelectSkinType(type)}
                  className="w-full py-2 px-3 rounded-xl text-xs font-semibold text-[#8C5248] bg-[#F9EDE8] hover:bg-[#F3DDD5] group-hover:text-[#68332A] transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Khám phá</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
