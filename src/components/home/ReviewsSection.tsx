import React from 'react';
import { Star, ArrowRight, Tag, ShieldAlert } from 'lucide-react';
import { ReviewProduct } from '../../types';

interface ReviewsSectionProps {
  reviews: ReviewProduct[];
  onSelectReview: (product: ReviewProduct) => void;
  onViewAllReviews: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  reviews,
  onSelectReview,
  onViewAllReviews,
}) => {
  const displayReviews = reviews.slice(0, 4);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#935A51] bg-[#F9ECE7] px-3 py-1 rounded-full">
              Đánh giá độc lập
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#341F1A] mt-2">
              Góc review chân thật
            </h2>
            <p className="text-sm text-[#735F5A] mt-1">
              Phân tích thành phần, cảm nhận chất kem thực tế và độ phù hợp theo từng loại da. Không seeding, không nhận tài trợ trá hình.
            </p>
          </div>

          <button
            id="view-all-reviews-top-btn"
            onClick={onViewAllReviews}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#93554B] hover:text-[#68332A] group shrink-0 transition-colors"
          >
            <span>Xem thêm review</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Product Review Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayReviews.map((product) => (
            <div
              key={product.id}
              id={`review-card-${product.id}`}
              onClick={() => onSelectReview(product)}
              className="group bg-[#FCFAF8] rounded-2xl border border-[#EDE1DB] overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-white p-4 flex items-center justify-center border-b border-[#F2E8E4]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider text-[#633932] bg-white/95 px-2.5 py-1 rounded-full shadow-xs border border-[#F2E5E0]">
                    {product.category}
                  </span>
                </div>

                {/* Info & Rating */}
                <div className="p-5 space-y-2.5">
                  {/* Brand */}
                  <span className="text-xs font-semibold text-[#96584F] tracking-wide uppercase">
                    {product.brand}
                  </span>

                  {/* Product Name */}
                  <h3 className="font-serif-display text-base font-bold text-[#341F1A] line-clamp-2 group-hover:text-[#96554B] transition-colors leading-snug">
                    {product.name}
                  </h3>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center text-[#E5A83B]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < Math.floor(product.rating)
                              ? 'fill-current text-[#E5A83B]'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#3E2723]">
                      {product.rating}
                    </span>
                    <span className="text-[11px] text-[#8C7672]">
                      ({product.reviewCount} đánh giá)
                    </span>
                  </div>

                  {/* Short excerpt */}
                  <p className="text-xs text-[#6F5A55] leading-relaxed line-clamp-2 italic">
                    "{product.summary}"
                  </p>

                  {/* Badges / Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {product.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                          tag === 'Đáng thử'
                            ? 'bg-[#FCEBE7] text-[#91463D]'
                            : tag === 'Phù hợp da dầu'
                            ? 'bg-[#EBF3EF] text-[#366847]'
                            : 'bg-[#F5EDE8] text-[#73524B]'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-[#F2E7E2] flex items-center justify-between text-xs font-semibold text-[#8C5248] group-hover:text-[#63332B]">
                  <span>Xem đánh giá chi tiết</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button
            id="view-more-reviews-bottom-btn"
            onClick={onViewAllReviews}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-[#5B3731] bg-[#F5E6E1] hover:bg-[#EED9D3] transition-colors shadow-xs"
          >
            <span>Xem thêm review</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
