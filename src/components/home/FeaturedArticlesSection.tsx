import React from 'react';
import { Clock, Eye, Heart, ArrowRight } from 'lucide-react';
import { Article } from '../../types';

interface FeaturedArticlesSectionProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
  onViewAllArticles: () => void;
  onToggleLikeArticle?: (articleId: string, e: React.MouseEvent) => void;
  likedArticleIds?: Set<string>;
}

export const FeaturedArticlesSection: React.FC<FeaturedArticlesSectionProps> = ({
  articles = [],
  onSelectArticle,
  onViewAllArticles,
  onToggleLikeArticle,
  likedArticleIds = new Set(),
}) => {
  const safeArticles = articles || [];
  const featured = safeArticles.filter(a => a.isFeatured).slice(0, 4);

  return (
    <section className="py-16 sm:py-20 bg-[#FCFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#935A51] bg-[#F9ECE7] px-3 py-1 rounded-full">
              Chuyên mục tuyển chọn
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#341F1A] mt-2">
              Bài viết nổi bật
            </h2>
            <p className="text-sm text-[#735F5A] mt-1">
              Những bài viết được bạn đọc và chuyên gia Lumia quan tâm nhiều nhất trong tuần
            </p>
          </div>

          <button
            id="view-all-articles-top-btn"
            onClick={onViewAllArticles}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#93554B] hover:text-[#68332A] group shrink-0 transition-colors"
          >
            <span>Xem tất cả bài viết</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featured.map((article) => {
            const isLiked = likedArticleIds.has(article.id);
            return (
              <article
                key={article.id}
                id={`article-card-${article.id}`}
                onClick={() => onSelectArticle(article)}
                className="group bg-white rounded-2xl overflow-hidden border border-[#F0E4DF] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Thumbnail Cover */}
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

                    {/* Like button on card */}
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

                  {/* Card Content */}
                  <div className="p-5">
                    {/* Meta info */}
                    <div className="flex items-center gap-3 text-[11px] text-[#8C7672] mb-2.5">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif-display text-base sm:text-lg font-bold text-[#341F1A] line-clamp-2 group-hover:text-[#96554B] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    {/* Short excerpt */}
                    <p className="text-xs sm:text-sm text-[#735F5A] mt-2 line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Author & Stats Footer */}
                <div className="px-5 pb-5 pt-3 border-t border-[#F7EFEA] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-7 h-7 rounded-full object-cover border border-[#EADAD4]"
                    />
                    <span className="text-xs font-medium text-[#4D3834] truncate max-w-[100px]">
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

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button
            id="view-all-articles-bottom-btn"
            onClick={onViewAllArticles}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-[#5B3731] bg-[#F5E6E1] hover:bg-[#EED9D3] transition-colors shadow-xs"
          >
            <span>Xem tất cả bài viết</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
