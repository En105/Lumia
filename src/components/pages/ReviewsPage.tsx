import React, { useState, useMemo } from 'react';
import { Search, Star, Filter, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { ReviewProduct } from '../../types';

interface ReviewsPageProps {
  reviews: ReviewProduct[];
  onSelectReview: (product: ReviewProduct) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ reviews = [], onSelectReview }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tất cả sản phẩm' },
    { id: 'Kem chống nắng', label: 'Kem chống nắng' },
    { id: 'Serum dưỡng ẩm', label: 'Serum dưỡng ẩm' },
    { id: 'Tẩy tế bào chết', label: 'Tẩy tế bào chết' },
    { id: 'Sữa rửa mặt', label: 'Sữa rửa mặt' },
    { id: 'Nước hoa hồng (Toner)', label: 'Nước hoa hồng' },
  ];

  const filteredReviews = useMemo(() => {
    const safeList = reviews || [];
    return safeList.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tags || []).some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [reviews, selectedCategory, searchQuery]);

  return (
    <div className="bg-[#FCFAF8] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#935A51] bg-[#F9ECE7] px-3.5 py-1 rounded-full">
            Review minh bạch
          </span>
          <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#341F1A]">
            Góc review chân thật
          </h1>
          <p className="text-sm sm:text-base text-[#6E5853] leading-relaxed">
            Nơi tổng hợp những đánh giá chi tiết, phân tích công thức và trải nghiệm thực tế trên nhiều nền da khác nhau. Lumia cam kết không quảng cáo trá hình.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#EDE1DB] shadow-xs mb-8 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-[#9E8782] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="reviews-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm theo tên sản phẩm, thương hiệu (La Roche-Posay, Skin1004, Paula's Choice, Torriden...)"
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#FCFAF8] border border-[#ECD9D2] text-sm text-[#341F1A] placeholder:text-[#A38E89] focus:outline-none focus:ring-2 focus:ring-[#A85B52]"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#A85B52] text-white shadow-xs font-semibold'
                    : 'bg-[#FAF2EE] text-[#6E5550] hover:bg-[#F2E4DE]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-xs text-[#7A635E] mb-6">
          Hiển thị <strong>{filteredReviews.length}</strong> sản phẩm đã kiểm nghiệm
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map((product) => (
            <div
              key={product.id}
              id={`review-item-${product.id}`}
              onClick={() => onSelectReview(product)}
              className="group bg-white rounded-3xl border border-[#EDE1DB] overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Product Photo */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FBF7F5] p-6 flex items-center justify-center border-b border-[#F2E8E4]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-wider text-[#633932] bg-white/95 px-3 py-1 rounded-full shadow-xs border border-[#F2E5E0]">
                    {product.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#96584F] tracking-wide uppercase">
                      {product.brand}
                    </span>
                    <span className="text-xs text-[#7A635E] font-medium">
                      {product.priceRange}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-lg font-bold text-[#341F1A] line-clamp-2 group-hover:text-[#96554B] transition-colors leading-snug">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-[#E5A83B]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-current text-[#E5A83B]'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#3E2723]">
                      {product.rating} / 5.0
                    </span>
                    <span className="text-xs text-[#8C7672]">
                      ({product.reviewCount} đánh giá)
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#6F5A55] leading-relaxed line-clamp-2 italic">
                    "{product.summary}"
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {product.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-[10px] px-2.5 py-0.5 rounded-full font-medium ${
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

              {/* Bottom Card Footer */}
              <div className="p-6 pt-0">
                <div className="pt-3 border-t border-[#F5EBE6] flex items-center justify-between text-xs font-semibold text-[#8C5248] group-hover:text-[#63332B]">
                  <span>Xem phân tích chi tiết & pros/cons</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
