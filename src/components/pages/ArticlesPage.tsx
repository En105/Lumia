import React, { useState, useMemo } from 'react';
import { Search, Clock, Eye, Heart, Filter, ArrowRight, Sparkles, BookOpen, AlertCircle, CheckCircle2, RotateCcw } from 'lucide-react';
import { Article, ArticleCategory } from '../../types';
import { trackEvent } from '../../utils/analytics';

interface ArticlesPageProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
  onToggleLikeArticle?: (articleId: string, e: React.MouseEvent) => void;
  likedArticleIds?: Set<string>;
}

export const ArticlesPage: React.FC<ArticlesPageProps> = ({
  articles = [],
  onSelectArticle,
  onToggleLikeArticle,
  likedArticleIds = new Set(),
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory>('all');
  const [selectedSkinType, setSelectedSkinType] = useState<string>('all');
  const [selectedConcern, setSelectedConcern] = useState<string>('all');
  const [displayCount, setDisplayCount] = useState(6);

  const categories: { id: ArticleCategory; label: string }[] = [
    { id: 'all', label: 'Tất cả chủ đề' },
    { id: 'skincare', label: 'Chăm sóc da' },
    { id: 'ingredients', label: 'Hoạt chất & Thành phần' },
    { id: 'tips', label: 'Tips & Mẹo chuẩn y khoa' },
    { id: 'trends', label: 'Xu hướng làm đẹp' },
    { id: 'lifestyle', label: 'Lối sống & Dinh dưỡng' },
  ];

  const skinTypeOptions = [
    { id: 'all', label: 'Tất cả loại da' },
    { id: 'Da dầu', label: 'Da dầu' },
    { id: 'Da khô', label: 'Da khô' },
    { id: 'Da hỗn hợp', label: 'Da hỗn hợp' },
    { id: 'Da nhạy cảm', label: 'Da nhạy cảm' },
    { id: 'Da thường', label: 'Da thường' },
  ];

  const skinConcernOptions = [
    { id: 'all', label: 'Tất cả mối bận tâm' },
    { id: 'Mụn & bít tắc', label: 'Mụn & bít tắc nang lông' },
    { id: 'Hàng rào bảo vệ da & Phục hồi', label: 'Phục hồi hàng rào màng da' },
    { id: 'Làm sáng & Mờ thâm', label: 'Làm sáng & Mờ thâm sạm' },
    { id: 'Chống lão hóa & Nếp nhăn', label: 'Chống lão hóa & Nếp nhăn' },
    { id: 'Nhạy cảm & Kích ứng', label: 'Nhạy cảm & Dễ kích ứng' },
  ];

  const filteredArticles = useMemo(() => {
    const safeList = articles || [];
    return safeList.filter((article) => {
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      
      const matchesSkinType = 
        selectedSkinType === 'all' || 
        (article.targetSkinTypes && article.targetSkinTypes.some(st => st.toLowerCase().includes(selectedSkinType.toLowerCase()) || st === 'Mọi loại da'));

      const matchesConcern = 
        selectedConcern === 'all' || 
        (article.skinConcerns && article.skinConcerns.includes(selectedConcern));

      const matchesSearch = 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (article.tags || []).some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSkinType && matchesConcern && matchesSearch;
    });
  }, [articles, selectedCategory, selectedSkinType, selectedConcern, searchQuery]);

  const visibleArticles = filteredArticles.slice(0, displayCount);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedSkinType('all');
    setSelectedConcern('all');
  };

  const handleArticleClick = (article: Article) => {
    trackEvent('view_article_item', {
      article_id: article.id,
      article_slug: article.slug,
      article_title: article.title,
    });
    onSelectArticle(article);
  };

  return (
    <div className="bg-[#FCFAF8] min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#935A51] bg-[#F9ECE7] px-3.5 py-1 rounded-full">
              Thư viện khoa học da liễu
            </span>
            <span className="text-[11px] font-semibold text-[#824E46] bg-[#FCEBE7] px-2.5 py-0.5 rounded-full border border-[#EACEC8]">
              Dữ liệu mẫu minh họa
            </span>
          </div>
          <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#341F1A]">
            Hiểu đúng về da, chọn đúng phương pháp
          </h1>
          <p className="text-sm sm:text-base text-[#6E5853] leading-relaxed">
            Tổng hợp các bài viết chuyên sâu về sinh học màng lipid, phân tích cơ chế hoạt chất và hướng dẫn chăm sóc chuẩn y khoa được dẫn nguồn từ AAD, PubMed & WHO.
          </p>
        </div>

        {/* Academic / Medical Disclaimer banner */}
        <div className="mb-8 p-4 rounded-2xl bg-[#FAF1ED] border border-[#E8D4CC] flex items-start gap-3 text-xs text-[#6A4740]">
          <AlertCircle className="w-4 h-4 text-[#A85B52] shrink-0 mt-0.5" />
          <p>
            <strong>Lưu ý y khoa quan trọng:</strong> Mọi bài viết trên Lumia nhằm mục đích cung cấp thông tin khoa học tham khảo, không thay thế chẩn đoán hoặc chỉ định trực tiếp từ bác sĩ da liễu. Các số liệu lượt xem hay đánh giá được hiển thị ở chế độ demo minh họa giao diện.
          </p>
        </div>

        {/* Personalization & Filter Hub */}
        <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#EDE1DB] shadow-xs mb-8 space-y-5">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-[#9E8782] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="articles-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm theo từ khóa (Ví dụ: Niacinamide, BHA, Ceramide, chống nắng...)"
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#FCFAF8] border border-[#ECD9D2] text-sm text-[#341F1A] placeholder:text-[#A38E89] focus:outline-none focus:ring-2 focus:ring-[#A85B52]"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#9E8782] hover:text-[#341F1A]"
              >
                Xóa
              </button>
            )}
          </div>

          {/* Primary Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs text-[#7A635E] font-medium shrink-0 flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5" /> Chủ đề:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`cat-filter-${cat.id}`}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  trackEvent('filter_articles_category', { category: cat.id });
                }}
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

          {/* Secondary Personalization: Skin Type & Skin Concern dropdowns */}
          <div className="pt-3 border-t border-[#F5ECE8] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#4A3531] mb-1">
                Lọc theo Loại Da của bạn:
              </label>
              <select
                id="filter-skin-type"
                value={selectedSkinType}
                onChange={(e) => {
                  setSelectedSkinType(e.target.value);
                  trackEvent('filter_skin_type', { skin_type: e.target.value });
                }}
                className="w-full px-3 py-2 rounded-xl bg-[#FCFAF8] border border-[#ECD9D2] text-xs text-[#341F1A] focus:outline-none focus:ring-2 focus:ring-[#A85B52]"
              >
                {skinTypeOptions.map((st) => (
                  <option key={st.id} value={st.id}>{st.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#4A3531] mb-1">
                Lọc theo Mối bận tâm của da:
              </label>
              <select
                id="filter-skin-concern"
                value={selectedConcern}
                onChange={(e) => {
                  setSelectedConcern(e.target.value);
                  trackEvent('filter_skin_concern', { concern: e.target.value });
                }}
                className="w-full px-3 py-2 rounded-xl bg-[#FCFAF8] border border-[#ECD9D2] text-xs text-[#341F1A] focus:outline-none focus:ring-2 focus:ring-[#A85B52]"
              >
                {skinConcernOptions.map((sc) => (
                  <option key={sc.id} value={sc.id}>{sc.label}</option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              {(selectedCategory !== 'all' || selectedSkinType !== 'all' || selectedConcern !== 'all' || searchQuery) && (
                <button
                  onClick={handleResetFilters}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#F8EBE7] text-[#8C4E44] hover:bg-[#F2DAD4] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Xóa bộ lọc cá nhân hóa</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Counter & Active Filters Display */}
        <div className="flex items-center justify-between text-xs text-[#7A635E] mb-6 px-1">
          <span>Tìm thấy <strong>{filteredArticles.length}</strong> bài viết phù hợp</span>
          {(selectedSkinType !== 'all' || selectedConcern !== 'all') && (
            <span className="text-[#8C5248] font-medium">
              Đang cá nhân hóa: {[selectedSkinType !== 'all' ? selectedSkinType : '', selectedConcern !== 'all' ? selectedConcern : ''].filter(Boolean).join(' • ')}
            </span>
          )}
        </div>

        {/* Articles Grid */}
        {visibleArticles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#EDE1DB] p-8">
            <BookOpen className="w-12 h-12 text-[#C4B2AD] mx-auto mb-3" />
            <h3 className="font-serif-display text-lg font-bold text-[#341F1A]">
              Không tìm thấy bài viết phù hợp với tiêu chí lọc
            </h3>
            <p className="text-xs text-[#7A635E] mt-1 max-w-sm mx-auto">
              Hãy thử chọn lại loại da, vấn đề bận tâm hoặc xóa từ khóa tìm kiếm.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-4 px-4 py-2 text-xs font-semibold text-[#8C5248] bg-[#F7ECE8] rounded-xl hover:bg-[#F2DCD5]"
            >
              Đặt lại toàn bộ bộ lọc
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleArticles.map((article) => {
              const isLiked = likedArticleIds.has(article.id);
              return (
                <article
                  key={article.id}
                  id={`articles-page-card-${article.id}`}
                  onClick={() => handleArticleClick(article)}
                  className="group bg-white rounded-3xl overflow-hidden border border-[#EDE1DB] shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Cover Thumbnail */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#F2E7E2]">
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.dataset.triedFallback) {
                            target.dataset.triedFallback = 'true';
                            target.src = 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=85';
                          }
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="inline-block px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#633932] bg-white/95 backdrop-blur-xs rounded-full shadow-xs">
                          {article.categoryName}
                        </span>
                      </div>

                      {onToggleLikeArticle && (
                        <button
                          onClick={(e) => onToggleLikeArticle(article.id, e)}
                          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-xs transition-colors shadow-xs ${
                            isLiked 
                              ? 'bg-[#E57373] text-white' 
                              : 'bg-white/80 text-[#7A615C] hover:text-[#E57373] hover:bg-white'
                          }`}
                          title="Thích bài viết"
                        >
                          <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current' : ''}`} />
                        </button>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-[11px] text-[#8C7672] mb-2.5">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>

                      <h2 className="font-serif-display text-lg font-bold text-[#341F1A] line-clamp-2 group-hover:text-[#96554B] transition-colors leading-snug">
                        {article.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-[#6F5A55] mt-2.5 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>

                      {/* Skin Type & Concerns Badges */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {article.targetSkinTypes?.slice(0, 2).map((st, i) => (
                          <span
                            key={i}
                            className="text-[10px] text-[#784840] bg-[#FAF0EB] px-2 py-0.5 rounded-md font-medium"
                          >
                            {st}
                          </span>
                        ))}
                        {article.skinConcerns?.slice(0, 1).map((sc, i) => (
                          <span
                            key={i}
                            className="text-[10px] text-[#2F6D44] bg-[#EAF5EE] px-2 py-0.5 rounded-md font-medium"
                          >
                            {sc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Author & References Footer */}
                  <div className="px-6 pb-6 pt-3 border-t border-[#F7EFEA] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={article.author.avatar}
                        alt={article.author.name}
                        className="w-7 h-7 rounded-full object-cover border border-[#EADAD4]"
                      />
                      <span className="text-xs font-medium text-[#4D3834] truncate max-w-[120px]">
                        {article.author.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[#8C5248] font-semibold group-hover:underline">
                      <span>Đọc bài →</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Load More Button */}
        {visibleArticles.length < filteredArticles.length && (
          <div className="text-center mt-12">
            <button
              id="load-more-articles-btn"
              onClick={() => setDisplayCount(prev => prev + 6)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-[#5B3731] bg-[#F5E6E1] hover:bg-[#EED9D3] transition-colors shadow-xs"
            >
              <span>Xem thêm bài viết ({filteredArticles.length - visibleArticles.length} bài)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
