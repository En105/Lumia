import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Star, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { Article, ReviewProduct, Discussion } from '../../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  reviews: ReviewProduct[];
  discussions: Discussion[];
  onSelectArticle: (article: Article) => void;
  onSelectReview: (product: ReviewProduct) => void;
  onSelectDiscussion: (discussion: Discussion) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  articles = [],
  reviews = [],
  discussions = [],
  onSelectArticle,
  onSelectReview,
  onSelectDiscussion,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const results = useMemo(() => {
    if (!query.trim()) return { articles: [], reviews: [], discussions: [] };
    const q = query.toLowerCase();

    const safeArticles = articles || [];
    const safeReviews = reviews || [];
    const safeDiscussions = discussions || [];

    return {
      articles: safeArticles.filter(
        (a) =>
          a && (
            (a.title && a.title.toLowerCase().includes(q)) ||
            (a.excerpt && a.excerpt.toLowerCase().includes(q)) ||
            (a.tags && a.tags.some((t) => t.toLowerCase().includes(q)))
          )
      ).slice(0, 3),
      reviews: safeReviews.filter(
        (r) =>
          r && (
            (r.name && r.name.toLowerCase().includes(q)) ||
            (r.brand && r.brand.toLowerCase().includes(q)) ||
            (r.summary && r.summary.toLowerCase().includes(q))
          )
      ).slice(0, 3),
      discussions: safeDiscussions.filter(
        (d) =>
          d && (
            (d.title && d.title.toLowerCase().includes(q)) ||
            (d.content && d.content.toLowerCase().includes(q))
          )
      ).slice(0, 3),
    };
  }, [query, articles, reviews, discussions]);

  if (!isOpen) return null;

  const totalResults = results.articles.length + results.reviews.length + results.discussions.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div 
        id="global-search-modal"
        className="bg-white rounded-3xl max-w-2xl w-full border border-[#ECDCD6] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Search bar input */}
        <div className="p-4 sm:p-5 border-b border-[#F2E5DF] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#9E8782] shrink-0" />
          <input
            ref={inputRef}
            id="global-search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm kiến thức, hoạt chất, sản phẩm hoặc thảo luận..."
            className="flex-1 text-sm sm:text-base text-[#341F1A] placeholder:text-[#A8938E] focus:outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#9E8782] hover:text-[#341F1A] px-2 py-1"
            >
              Xóa
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#FAF2EE] text-[#7A635E] hover:text-[#341F1A] hover:bg-[#F2E5DF] transition-colors shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Suggestion Pills when empty */}
        {!query && (
          <div className="p-6 text-xs text-[#7A635E] space-y-3">
            <span className="font-semibold text-[#341F1A] block">Gợi ý từ khóa phổ biến:</span>
            <div className="flex flex-wrap gap-2">
              {['Niacinamide', 'Kem chống nắng', 'BHA phục hồi', 'Da dầu mụn', 'Retinol cho người mới', 'Ceramides'].map((tag, i) => (
                <button
                  key={i}
                  onClick={() => setQuery(tag)}
                  className="px-3 py-1.5 rounded-full bg-[#FAF2EE] text-[#6E544E] hover:bg-[#F2E2DC] transition-colors"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results display */}
        {query && (
          <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-6">
            {totalResults === 0 ? (
              <div className="text-center py-8 text-xs sm:text-sm text-[#8C7672]">
                Không tìm thấy kết quả nào cho "<strong>{query}</strong>". Thử tìm với từ khóa chung hơn.
              </div>
            ) : (
              <>
                {/* Articles Section */}
                {results.articles.length > 0 && (
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#96554B] flex items-center gap-1 mb-2">
                      <BookOpen className="w-3.5 h-3.5" /> Bài viết ({results.articles.length})
                    </span>
                    <div className="space-y-2">
                      {results.articles.map((art) => (
                        <div
                          key={art.id}
                          onClick={() => {
                            onSelectArticle(art);
                            onClose();
                          }}
                          className="p-3 rounded-2xl bg-[#FCFAF8] hover:bg-[#FAF0EB] border border-[#F2E7E2] transition-colors cursor-pointer flex items-center justify-between gap-3"
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={art.coverImage}
                              alt={art.title}
                              className="w-12 h-12 rounded-xl object-cover shrink-0"
                            />
                            <div>
                              <h4 className="text-xs sm:text-sm font-bold text-[#341F1A] line-clamp-1">
                                {art.title}
                              </h4>
                              <p className="text-[11px] text-[#7A635E] line-clamp-1">{art.excerpt}</p>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-[#8C5248] shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reviews Section */}
                {results.reviews.length > 0 && (
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#96554B] flex items-center gap-1 mb-2">
                      <Star className="w-3.5 h-3.5" /> Đánh giá sản phẩm ({results.reviews.length})
                    </span>
                    <div className="space-y-2">
                      {results.reviews.map((rev) => (
                        <div
                          key={rev.id}
                          onClick={() => {
                            onSelectReview(rev);
                            onClose();
                          }}
                          className="p-3 rounded-2xl bg-[#FCFAF8] hover:bg-[#FAF0EB] border border-[#F2E7E2] transition-colors cursor-pointer flex items-center justify-between gap-3"
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={rev.image}
                              alt={rev.name}
                              className="w-12 h-12 rounded-xl object-cover shrink-0 bg-white"
                            />
                            <div>
                              <h4 className="text-xs sm:text-sm font-bold text-[#341F1A] line-clamp-1">
                                {rev.name}
                              </h4>
                              <p className="text-[11px] text-[#7A635E]">
                                {rev.brand} • {rev.rating}★ ({rev.category})
                              </p>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-[#8C5248] shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Community Discussions Section */}
                {results.discussions.length > 0 && (
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#96554B] flex items-center gap-1 mb-2">
                      <MessageSquare className="w-3.5 h-3.5" /> Thảo luận cộng đồng ({results.discussions.length})
                    </span>
                    <div className="space-y-2">
                      {results.discussions.map((disc) => (
                        <div
                          key={disc.id}
                          onClick={() => {
                            onSelectDiscussion(disc);
                            onClose();
                          }}
                          className="p-3 rounded-2xl bg-[#FCFAF8] hover:bg-[#FAF0EB] border border-[#F2E7E2] transition-colors cursor-pointer flex items-center justify-between gap-3"
                        >
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-[#341F1A] line-clamp-1">
                              {disc.title}
                            </h4>
                            <p className="text-[11px] text-[#7A635E]">
                              {disc.author.name} • {disc.repliesCount} trả lời • {disc.category}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-[#8C5248] shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
