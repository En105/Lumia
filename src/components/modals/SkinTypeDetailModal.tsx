import React from 'react';
import { X, CheckCircle2, AlertCircle, Sun, Moon, Sparkles, BookOpen } from 'lucide-react';
import { SkinType } from '../../types';

interface SkinTypeDetailModalProps {
  skinType: SkinType | null;
  onClose: () => void;
  onNavigateToArticles?: () => void;
}

export const SkinTypeDetailModal: React.FC<SkinTypeDetailModalProps> = ({
  skinType,
  onClose,
  onNavigateToArticles,
}) => {
  if (!skinType) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div 
        id="skin-type-detail-modal"
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#ECDCD6] shadow-2xl relative animate-in zoom-in-95 duration-200"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-xs text-[#7A635E] hover:text-[#341F1A] hover:bg-white transition-colors shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Cover Header */}
        <div className="relative aspect-[16/9] bg-[#FAF3F0] overflow-hidden">
          <img
            src={skinType.image}
            alt={skinType.vietnameseName}
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.dataset.triedFallback) {
                target.dataset.triedFallback = 'true';
                target.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80';
              }
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="text-xs uppercase tracking-widest text-[#F8E3DD] font-semibold">
              Cẩm nang khoa học
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold mt-1">
              Chăm sóc {skinType.vietnameseName} ({skinType.name})
            </h2>
            <p className="text-xs sm:text-sm text-[#F0DFDA] mt-1 italic">
              "{skinType.tagline}"
            </p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Description */}
          <div>
            <h3 className="font-serif-display text-lg font-bold text-[#341F1A] mb-1.5">
              Tổng quan sinh học
            </h3>
            <p className="text-xs sm:text-sm text-[#5C4540] leading-relaxed">
              {skinType.description}
            </p>
          </div>

          {/* Characteristics & Signs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#FCFAF8] border border-[#F2E7E2]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#341F1A] mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4A7253]" />
                <span>Đặc điểm sinh học</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-[#6B5550]">
                {skinType.characteristics.map((c, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#A85B52]">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-[#FCFAF8] border border-[#F2E7E2]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#341F1A] mb-2 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-[#B86B62]" />
                <span>Dấu hiệu nhận biết</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-[#6B5550]">
                {skinType.signs.map((s, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#A85B52]">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Routine Suggestions */}
          <div className="space-y-3">
            <h3 className="font-serif-display text-lg font-bold text-[#341F1A]">
              Lời khuyên chu trình chuẩn từ Lumia
            </h3>
            <div className="space-y-2">
              {skinType.routineTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#FAF3F0] border border-[#ECD9D0] text-xs sm:text-sm text-[#573F3A] flex items-start gap-2.5"
                >
                  <span className="w-5 h-5 rounded-full bg-[#A85B52] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended vs Avoid Ingredients */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[#F4F9F5] border border-[#D5EAD9]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D6A42] mb-2">
                Hoạt chất vàng nên tìm kiếm
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {skinType.recommendedIngredients.map((ing, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-white text-[#2D6A42] text-xs font-medium border border-[#D0E5D4]">
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FDF5F5] border border-[#F5D8D8]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#9E3636] mb-2">
                Thành phần nên cẩn trọng
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {skinType.avoidIngredients.map((ing, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-white text-[#9E3636] text-xs font-medium border border-[#F0D0D0]">
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action button */}
          {onNavigateToArticles && (
            <div className="pt-2 text-center">
              <button
                onClick={() => {
                  onClose();
                  onNavigateToArticles();
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#A85B52] hover:bg-[#91463D] shadow-xs transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span>Xem các bài viết dành riêng cho {skinType.vietnameseName}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
