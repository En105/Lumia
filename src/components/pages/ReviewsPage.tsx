import React, { useState, useMemo } from 'react';
import { Search, Star, Filter, ArrowRight, ShieldCheck, Sparkles, BookOpen, AlertCircle } from 'lucide-react';
import { ReviewProduct } from '../../types';
import { trackEvent } from '../../utils/analytics';

interface ReviewsPageProps {
  reviews: ReviewProduct[];
  onSelectReview: (product: ReviewProduct) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ reviews = [], onSelectReview }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tất cả nhóm hoạt chất' },
    { id: 'Màng lọc & Kem chống nắng', label: 'Kem chống nắng' },
    { id: 'Dưỡng ẩm & Tái cấp nước', label: 'Serum & Dưỡng ẩm' },
    { id: 'Tẩy tế bào chết & Hoạt chất', label: 'Tẩy tế bào chết' },
    { id: 'Làm sạch & Bảo vệ màng da', label: 'Làm sạch da' },
    { id: 'Nước hoa hồng & Cân bằng pH', label: 'Nước hoa hồng' },
  ];

  const filteredReviews = useMemo(() => {
    const safeList = reviews || [];
    return safeList.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory || item.category.includes(selectedCategory);
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tags || []).some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [reviews, selectedCategory, searchQuery]);

  const handleProductClick = (product: ReviewProduct) => {
    trackEvent('view_review_product', {
      product_id: product.id,
      product_name: product.name,
      category: product.category,
    });
    onSelectReview(product);
  };

  return (
    <div className="bg-[#FCFAF8] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#935A51] bg-[#F9ECE7] px-3.5 py-1 rounded-full">
              Thư viện phân tích thành phần
            </span>
            <span className="text-[11px] font-semibold text-[#824E46] bg-[#FCEBE7] px-2.5 py-0.5 rounded-full border border-[#EACEC8]">
              Dữ liệu mẫu học thuật
            </span>
          </div>
          <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#341F1A]">
            Cẩm nang hoạt chất & sản phẩm tiêu biểu
          </h1>
          <p className="text-sm sm:text-base text-[#6E5853] leading-relaxed">
            Phân tích chuyên sâu về cơ chế tác động sinh học, màng lọc quang học, độ dung nạp và lưu ý an toàn. Lumia hoạt động phi thương mại: không hiển thị giá bán, không chèn link tiếp thị liên kết (affiliate), không bán hàng trực tuyến.
          </p>
        </div>

        {/* Ethical disclaimer banner */}
        <div className="mb-8 p-4 rounded-2xl bg-[#FAF1ED] border border-[#E8D4CC] flex items-start gap-3 text-xs text-[#6A4740]">
          <ShieldCheck className="w-5 h-5 text-[#348A54] shrink-0 mt-0.5" />
          <p>
            <strong>Cam kết phi thương mại 100%:</strong> Các sản phẩm dưới đây là dữ liệu mẫu đại diện cho các nhóm công thức khoa học phổ biến, được phân tích dựa trên y văn độc lập nhằm giúp bạn đọc hiểu về thành phần INCI, không nhằm mục đích bán hàng hay gợi ý mua sắm.
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
              placeholder="Tìm kiếm theo tên sản phẩm hoặc hoạt chất (Mexoryl, Centella, BHA, Ceramide, Hyaluronic...)"
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
        <div className="text-xs text-[#7A635E] mb-6 flex items-center justify-between">
          <span>Hiển thị <strong>{filteredReviews.length}</strong> công thức phân tích (Dữ liệu mẫu)</span>
          <span className="text-[11px] text-[#8C5248] italic">Phi thương mại • Không giá bán</span>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map((product) => (
            <div
              key={product.id}
              id={`review-item-${product.id}`}
              onClick={() => handleProductClick(product)}
              className="group bg-white rounded-3xl border border-[#EDE1DB] overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Product Photo */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FBF7F5] p-6 flex items-center justify-center border-b border-[#F2E8E4]">
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
                    <span className="text-[10px] font-semibold text-[#2E7D32] bg-[#EAF5EE] px-2.5 py-0.5 rounded-full">
                      Dữ liệu mẫu
                    </span>
                  </div>

                  <h3 className="font-serif-display text-lg font-bold text-[#341F1A] line-clamp-2 group-hover:text-[#96554B] transition-colors leading-snug">
                    {product.name}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-[#6F5A55] leading-relaxed line-clamp-2">
                    {product.summary}
                  </p>

                  {/* Skin Types compatibility */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {product.skinTypes.map((st, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-md font-medium bg-[#FAF0EB] text-[#7A4B43]"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <div className="pt-3 border-t border-[#F5EBE6] flex items-center justify-between text-xs font-semibold text-[#8C5248] group-hover:text-[#63332B]">
                  <span>Xem phân tích chi tiết</span>
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
