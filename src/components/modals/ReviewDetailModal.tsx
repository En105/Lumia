import React from 'react';
import { X, Star, CheckCircle2, AlertCircle, ShieldCheck, BookOpen, Sparkles } from 'lucide-react';
import { ReviewProduct } from '../../types';

interface ReviewDetailModalProps {
  product: ReviewProduct | null;
  onClose: () => void;
}

export const ReviewDetailModal: React.FC<ReviewDetailModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div 
        id="review-detail-modal"
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#ECDCD6] shadow-2xl relative animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-xs text-[#7A635E] hover:text-[#341F1A] hover:bg-white transition-colors shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Visual Header */}
        <div className="relative aspect-[16/9] bg-[#FAF3F0] p-6 flex items-center justify-center border-b border-[#F2E8E4]">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.dataset.triedFallback) {
                target.dataset.triedFallback = 'true';
                target.src = 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80';
              }
            }}
            className="w-full h-full object-cover rounded-2xl max-h-64"
          />
          <div className="absolute bottom-3 left-4 flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#633932] bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full shadow-xs">
              {product.category}
            </span>
            <span className="text-[10px] font-semibold text-[#824E46] bg-[#FCEBE7] px-2.5 py-0.5 rounded-full border border-[#EACEC8]">
              Dữ liệu mẫu phân tích
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#96584F] uppercase tracking-wider">
                {product.brand}
              </span>
              <span className="text-[11px] font-semibold text-[#2E7D32] bg-[#EAF5EE] px-2.5 py-0.5 rounded-full">
                Phi thương mại • Không bán hàng
              </span>
            </div>

            <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-[#341F1A] mt-1.5">
              {product.name}
            </h2>

            {/* Note */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs font-bold text-[#341F1A] bg-[#FAF0EB] px-2.5 py-1 rounded-lg text-[#85473E]">
                Mức độ tương thích sinh học: Cao
              </span>
              <span className="text-[11px] text-[#8C7672] italic">
                (Dữ liệu mẫu thử nghiệm độc lập)
              </span>
            </div>
          </div>

          {/* Detailed Review / Analysis Text */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#FCFAF8] border border-[#F2E7E2]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C5248] mb-1.5 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#A85B52]" />
              <span>Phân tích cơ chế hoạt chất từ Lumia</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#5C4540] leading-relaxed">
              {product.detailedReview}
            </p>
          </div>

          {/* Key Ingredients */}
          {product.keyIngredients && product.keyIngredients.length > 0 && (
            <div className="p-4 rounded-2xl bg-[#FAF6F4] border border-[#EFE5E0]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#73463E] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#9E574D]" />
                <span>Thành phần chủ đạo (Key Active Ingredients)</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.keyIngredients.map((ing, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-xl bg-white border border-[#ECDCD6] text-[#543833] font-medium"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Pros and Cons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#F4F9F5] border border-[#D5EAD9]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D6A42] mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#348A54]" />
                <span>Ưu điểm công thức</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-[#3E5C46]">
                {product.pros.map((p, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#348A54] font-bold">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-[#FDF5F5] border border-[#F5D8D8]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#9E3636] mb-2 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-[#B84040]" />
                <span>Lưu ý khi sử dụng & Patch test</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-[#6B4646]">
                {product.cons.map((c, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#B84040] font-bold">!</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Texture & Compatibility */}
          <div className="space-y-3 pt-2 text-xs sm:text-sm">
            <div>
              <span className="font-bold text-[#341F1A]">Kết cấu (Texture): </span>
              <span className="text-[#6E5853]">{product.texture}</span>
            </div>

            <div>
              <span className="font-bold text-[#341F1A]">Phù hợp nhất với loại da: </span>
              <div className="inline-flex flex-wrap gap-1.5 ml-1">
                {product.skinTypes.map((st, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#F5ECE8] text-[#78463E] font-medium"
                  >
                    {st}
                  </span>
                ))}
              </div>
            </div>

            {/* Usage Tips */}
            {product.usageTips && product.usageTips.length > 0 && (
              <div className="p-4 rounded-2xl bg-[#F9F7F5] border border-[#EAE0D9]">
                <span className="font-bold text-[#341F1A] block mb-1.5 text-xs uppercase tracking-wider">
                  Mẹo ứng dụng khoa học:
                </span>
                <ul className="space-y-1 text-xs text-[#624D48] list-disc list-inside">
                  {product.usageTips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Scientific conclusion / verdict */}
            <div className="p-4 rounded-2xl bg-[#FAF1ED] border border-[#E8D4CC]">
              <span className="font-bold text-[#733F36] block mb-1 text-xs uppercase tracking-wider">
                Khuyến nghị chuyên môn:
              </span>
              <p className="text-xs sm:text-sm text-[#5C4540] italic">
                "{product.verdict}"
              </p>
            </div>

            {/* References */}
            {product.references && product.references.length > 0 && (
              <div className="pt-2 border-t border-[#F2E5DF] text-xs text-[#7A645E]">
                <span className="font-semibold text-[#341F1A] flex items-center gap-1 mb-1">
                  <BookOpen className="w-3.5 h-3.5 text-[#A85B52]" />
                  Tài liệu nghiên cứu thành phần:
                </span>
                <ul className="space-y-1">
                  {product.references.map((ref, idx) => (
                    <li key={idx} className="text-[11px]">
                      • {ref.title} — <span className="font-medium">{ref.source}</span> ({ref.year})
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="pt-3 text-center text-[11px] text-[#937E79] border-t border-[#F5EDE9]">
            Lumia là nền tảng chia sẻ kiến thức khoa học da liễu phi lợi nhuận. Mọi phân tích nhằm mục đích cung cấp thông tin, không chứa liên kết bán hàng.
          </div>
        </div>
      </div>
    </div>
  );
};
