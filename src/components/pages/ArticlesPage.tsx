import React, { useState, useMemo } from 'react';
import { Search, Clock, Eye, Heart, Filter, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { Article, ArticleCategory } from '../../types';

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
  const [displayCount, setDisplayCount] = useState(6);

  const categories: { id: ArticleCategory; label: string }[] = [
    { id: 'all', label: 'Tất cả' },
    { id: 'skincare', label: 'Skincare' },
    { id: 'ingredients', label: 'Thành phần' },
    { id: 'review', label: 'Review' },
    { id: 'tips', label: 'Tips & Mẹo' },
    { id: 'makeup', label: 'Makeup' },
    { id: 'trends', label: 'Xu hướng' },
    { id: 'lifestyle', label: 'Lifestyle' },
  ];

  const filteredArticles = useMemo(() => {
    const safeList = articles || [];
    return safeList.filter((article) => {
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      const matchesSearch = 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (article.tags || []).some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  const visibleArticles = filteredArticles.slice(0, displayCount);

  return (
    <div className="bg-[#FCFAF8] min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#935A51] bg-[#F9ECE7] px-3.5 py-1 rounded-full">
            Thư viện kiến thức
          </span>
          <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#341F1A]">
            Khám phá kiến thức làm đẹp cùng Lumia
          </h1>
          <p className="text-sm sm:text-base text-[#6E5853] leading-relaxed">
            Tổng hợp các bài viết chuyên sâu về sinh học da, phân tích hoạt chất mỹ phẩm và phác đồ chăm sóc chuẩn y khoa được biên tập bởi đội ngũ chuyên gia.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#EDE1DB] shadow-xs mb-10 space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-[#9E8782] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="articles-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm bài viết theo từ khóa (Ví dụ: Niacinamide, BHA, kem chống nắng, phục hồi...)"
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

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs text-[#7A635E] font-medium shrink-0 flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5" /> Danh mục:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`cat-filter-${cat.id}`}
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
        <div className="flex items-center justify-between text-xs text-[#7A635E] mb-6 px-1">
          <span>Tìm thấy <strong>{filteredArticles.length}</strong> bài viết phù hợp</span>
          {searchQuery && (
            <span>Từ khóa: "<strong>{searchQuery}</strong>"</span>
          )}
        </div>

        {/* Articles Grid */}
        {visibleArticles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#EDE1DB] p-8">
            <BookOpen className="w-12 h-12 text-[#C4B2AD] mx-auto mb-3" />
            <h3 className="font-serif-display text-lg font-bold text-[#341F1A]">
              Không tìm thấy bài viết phù hợp
            </h3>
            <p className="text-xs text-[#7A635E] mt-1 max-w-sm mx-auto">
              Hãy thử tìm kiếm với từ khóa khác hoặc xóa bộ lọc danh mục hiện tại.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-[#8C5248] bg-[#F7ECE8] rounded-xl hover:bg-[#F2DCD5]"
            >
              Đặt lại bộ lọc
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
                  onClick={() => onSelectArticle(article)}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#EDE1DB] shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Cover Thumbnail */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#F2E7E2]">
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
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
                      <div className="flex items-center gap-3 text-[11px] text-[#8C7672] mb-2.5">
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

                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {article.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] text-[#7A635E] bg-[#F7EFEA] px-2 py-0.5 rounded-md"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Author & Stats Footer */}
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

                    <div className="flex items-center gap-3 text-xs text-[#8C7672]">
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3 text-[#B0736B]" />
                        {article.likes + (isLiked ? 1 : 0)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3 text-[#9E8A86]" />
                        {article.views}
                      </span>
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
