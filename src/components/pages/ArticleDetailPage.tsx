import React, { useState } from 'react';
import { 
  ArrowLeft, Clock, Eye, Heart, Share2, MessageSquare, Check, 
  Bookmark, Sparkles, Send, Quote, ChevronRight, AlertTriangle, BookOpen, ShieldCheck 
} from 'lucide-react';
import { Article, Comment, NavPage } from '../../types';
import { trackEvent } from '../../utils/analytics';

interface ArticleDetailPageProps {
  article: Article;
  allArticles: Article[];
  onNavigate?: (page: NavPage) => void;
  onSelectArticle: (article: Article) => void;
  onToggleLikeArticle: (articleId: string, e?: React.MouseEvent) => void;
  isLiked?: boolean;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  article,
  allArticles = [],
  onNavigate,
  onSelectArticle,
  onToggleLikeArticle,
  isLiked = false,
}) => {
  const [copiedToast, setCopiedToast] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [commenterName, setCommenterName] = useState('');
  const [localComments, setLocalComments] = useState<Comment[]>(article.comments || []);
  const [commentSuccess, setCommentSuccess] = useState(false);

  // Related articles
  const safeAllArticles = allArticles || [];
  const relatedArticles = safeAllArticles
    .filter(a => a && a.id !== article.id && (a.category === article.category || (article.relatedIds && article.relatedIds.includes(a.id))))
    .slice(0, 3);

  const articleCanonicalUrl = `${window.location.origin}/#/bai-viet/${article.slug}`;

  const handleShare = () => {
    navigator.clipboard?.writeText(articleCanonicalUrl);
    setCopiedToast(true);
    trackEvent('share_article', {
      article_slug: article.slug,
      article_title: article.title,
    });
    setTimeout(() => setCopiedToast(false), 3500);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment: Comment = {
      id: `comment-${Date.now()}`,
      authorName: commenterName.trim() || 'Bạn đọc ẩn danh',
      authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      date: 'Vừa xong',
      content: commentText.trim(),
      likes: 1,
      userLiked: true,
      isDemo: true
    };

    setLocalComments([newComment, ...localComments]);
    setCommentText('');
    setCommentSuccess(true);
    trackEvent('post_comment', {
      article_slug: article.slug,
      comment_length: newComment.content.length,
    });
    setTimeout(() => setCommentSuccess(false), 4000);
  };

  const defaultDisclaimer = "Nội dung trên Lumia nhằm mục đích cung cấp thông tin và kiến thức tham khảo, không thay thế cho chẩn đoán hoặc tư vấn y khoa từ bác sĩ/chuyên gia da liễu. Nếu bạn có vấn đề về da kéo dài hoặc nghiêm trọng, hãy tìm kiếm sự tư vấn từ chuyên gia y tế.";

  return (
    <div className="bg-[#FCFAF8] min-h-screen py-8 sm:py-12">
      {/* Toast Notification */}
      {copiedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#341F1A] text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-medium animate-in fade-in slide-in-from-bottom-3">
          <Check className="w-4 h-4 text-[#7BBA89]" />
          <span>Đã sao chép liên kết URL ({article.slug}) vào bộ nhớ tạm!</span>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation with Slug URL indication */}
        <nav className="flex items-center gap-1.5 text-xs text-[#8C7672] mb-6 overflow-x-auto pb-1">
          <button 
            onClick={() => onNavigate?.('home')} 
            className="hover:text-[#341F1A] transition-colors shrink-0"
          >
            Trang chủ
          </button>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <button 
            onClick={() => onNavigate?.('articles')} 
            className="hover:text-[#341F1A] transition-colors shrink-0"
          >
            Bài viết
          </button>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-[#8C5248] font-semibold uppercase tracking-wider shrink-0">
            {article.categoryName}
          </span>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-[#59433F] truncate max-w-[200px]">
            {article.title}
          </span>
        </nav>

        {/* Article Header */}
        <header className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-block px-3 py-1 rounded-full bg-[#F5E6E1] text-[#733F36] text-xs font-semibold uppercase tracking-wider">
              {article.categoryName}
            </div>
            <span className="text-[11px] font-semibold text-[#824E46] bg-[#FCEBE7] px-2.5 py-0.5 rounded-full border border-[#EACEC8]">
              Dữ liệu bài viết mẫu
            </span>
          </div>

          <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#341F1A] leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-[#6E5853] leading-relaxed font-normal">
            {article.excerpt}
          </p>

          {/* Target Skin Types & Concerns Tags */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
            {article.targetSkinTypes && article.targetSkinTypes.length > 0 && (
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[#7A635E] font-medium">Phù hợp loại da:</span>
                {article.targetSkinTypes.map((st, i) => (
                  <span key={i} className="px-2.5 py-0.5 rounded-full bg-[#FAF0EB] text-[#78463E] font-semibold text-[11px]">
                    {st}
                  </span>
                ))}
              </div>
            )}

            {article.skinConcerns && article.skinConcerns.length > 0 && (
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[#7A635E] font-medium">Vấn đề giải quyết:</span>
                {article.skinConcerns.map((sc, i) => (
                  <span key={i} className="px-2.5 py-0.5 rounded-full bg-[#EAF2ED] text-[#29683F] font-semibold text-[11px]">
                    {sc}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Author & Meta Row */}
          <div className="pt-4 border-y border-[#F0E4DF] flex flex-wrap items-center justify-between gap-4 py-3.5">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-[#E8D4CD]"
              />
              <div>
                <h4 className="text-sm font-bold text-[#341F1A]">{article.author.name}</h4>
                <p className="text-xs text-[#8C7672]">{article.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-[#8C7672]">
              <span>{article.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[#8C5248] font-mono text-[11px]">
                Slug: /{article.slug}
              </span>
            </div>
          </div>
        </header>

        {/* Large Cover Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9] bg-[#F2E7E2]">
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
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mandatory Medical Disclaimer (Top Warning) */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-[#FFF9F2] border border-[#F3DFC8] flex items-start gap-3.5 text-xs sm:text-sm text-[#784A22] shadow-xs">
          <AlertTriangle className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold uppercase tracking-wider text-[#A05307] block text-xs">
              Tuyên bố miễn trừ y khoa (Medical Disclaimer)
            </span>
            <p className="leading-relaxed text-xs sm:text-sm text-[#784A22]">
              {article.medicalDisclaimer || defaultDisclaimer}
            </p>
          </div>
        </div>

        {/* Key Takeaways Callout Box */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <div className="bg-[#FAF3F0] rounded-2xl p-6 mb-8 border border-[#ECD7CE]">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8A4A3F] mb-3">
              <Sparkles className="w-4 h-4 text-[#B86B62]" />
              <span>Điểm nhấn khoa học quan trọng</span>
            </div>
            <ul className="space-y-2 text-sm text-[#5C4540]">
              {article.keyTakeaways.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A85B52] mt-2 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body Content */}
        <article className="prose prose-stone max-w-none text-[#402C28] leading-relaxed text-base sm:text-lg space-y-6">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed font-normal">
              {paragraph}
            </p>
          ))}

          {/* Highlight Quote if exists */}
          {article.highlightQuote && (
            <div className="my-8 p-6 sm:p-8 rounded-2xl bg-[#FCF6F3] border-l-4 border-[#A85B52] italic font-serif-display text-lg sm:text-xl text-[#3E241F] leading-relaxed shadow-xs flex items-start gap-3">
              <Quote className="w-8 h-8 text-[#D9A39A] shrink-0 rotate-180" />
              <div>
                "{article.highlightQuote}"
                <span className="block not-italic text-xs font-sans text-[#8C7672] mt-2">
                  — Ban biên tập Lumia Beauty
                </span>
              </div>
            </div>
          )}
        </article>

        {/* References & Medical Citations Section */}
        <section className="mt-10 p-5 sm:p-6 rounded-2xl bg-[#F8F5F2] border border-[#EBE3DE] space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#633F38]">
            <BookOpen className="w-4 h-4 text-[#A85B52]" />
            <span>Nguồn tham khảo & Cơ sở y khoa (References)</span>
          </div>
          <p className="text-xs text-[#705954]">
            Bài viết được đối chiếu và tổng hợp từ các tài liệu học thuật y khoa, viện da liễu và các ấn phẩm bình duyệt độc lập:
          </p>
          
          <ul className="space-y-2 text-xs text-[#523A36] pt-1">
            {article.references && article.references.length > 0 ? (
              article.references.map((ref, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl border border-[#EDE2DC]">
                  <span className="text-[#A85B52] font-mono font-bold shrink-0">[{idx + 1}]</span>
                  <div className="flex-1">
                    <span className="font-semibold text-[#341F1A]">{ref.title}</span>
                    <div className="text-[11px] text-[#7A635E] mt-0.5">
                      Nguồn: <span className="font-medium text-[#4D3632]">{ref.source}</span>
                      {ref.year && <span> • Năm {ref.year}</span>}
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <li className="text-xs text-[#78615C] italic">
                Tài liệu tham khảo chung: Hiệp hội Da liễu Hoa Kỳ (AAD), Tạp chí Da liễu Quốc tế và Thư viện Y học Quốc gia Hoa Kỳ (PubMed/NCBI).
              </li>
            )}
          </ul>
        </section>

        {/* Tags */}
        <div className="pt-8 mt-8 border-t border-[#F0E4DF] flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-[#8C7672] mr-1">Chủ đề liên quan:</span>
          {article.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs text-[#6F5752] bg-[#F5ECE8] px-3 py-1 rounded-full font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Bar (Like & Share) */}
        <div className="py-6 my-6 border-y border-[#F0E4DF] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              id="article-detail-like-btn"
              onClick={() => onToggleLikeArticle(article.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-xs ${
                isLiked
                  ? 'bg-[#E57373] text-white'
                  : 'bg-white text-[#5C4540] border border-[#E8D4CD] hover:bg-[#F9ECE7]'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              <span>{isLiked ? 'Đã thích' : 'Thích bài viết'}</span>
              <span className="text-xs opacity-90">({article.likes + (isLiked ? 1 : 0)})</span>
            </button>

            <button
              id="article-detail-share-btn"
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-[#5C4540] bg-white border border-[#E8D4CD] hover:bg-[#F9ECE7] transition-all"
            >
              <Share2 className="w-4 h-4 text-[#8C5E58]" />
              <span>Chia sẻ URL</span>
            </button>
          </div>

          <div className="text-xs text-[#8C7672] hidden sm:block">
            Bản quyền kiến thức thuộc về Lumia © 2026
          </div>
        </div>

        {/* Author Bio Box */}
        <div className="bg-white p-6 rounded-2xl border border-[#EDE1DB] shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left mb-12">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-[#E8D4CD] shrink-0"
          />
          <div>
            <span className="text-[11px] font-semibold text-[#96584F] uppercase tracking-wider">
              Tác giả bài viết
            </span>
            <h4 className="text-base font-bold text-[#341F1A] mt-0.5">{article.author.name}</h4>
            <p className="text-xs text-[#8C7672] mb-2">{article.author.role}</p>
            <p className="text-xs text-[#6E5853] leading-relaxed">
              {article.author.bio || 'Chuyên viên nghiên cứu và chia sẻ kiến thức làm đẹp khoa học, hướng đến xây dựng thói quen chăm sóc da an toàn và bền vững.'}
            </p>
          </div>
        </div>

        {/* Comments & Discussion Section */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-serif-display text-2xl font-bold text-[#341F1A]">
                Bạn nghĩ gì về bài viết này?
              </h3>
              <p className="text-xs sm:text-sm text-[#735F5A] mt-1">
                Để lại cảm nghĩ, thắc mắc hoặc kinh nghiệm thực tế của bạn cùng cộng đồng Lumia.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#8C5248] bg-[#F7ECE8] px-3 py-1 rounded-full">
              {localComments.length} bình luận
            </span>
          </div>

          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="bg-white p-5 rounded-2xl border border-[#EDE1DB] shadow-xs mb-8 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                value={commenterName}
                onChange={(e) => setCommenterName(e.target.value)}
                placeholder="Tên của bạn (hoặc để trống làm ẩn danh)"
                className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-[#FCFAF8] border border-[#ECDCD6] text-[#341F1A] focus:outline-none focus:ring-2 focus:ring-[#A85B52]"
              />
            </div>

            <textarea
              required
              rows={3}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Chia sẻ suy nghĩ hoặc câu hỏi của bạn về bài viết..."
              className="w-full p-3.5 rounded-xl text-xs sm:text-sm bg-[#FCFAF8] border border-[#ECDCD6] text-[#341F1A] focus:outline-none focus:ring-2 focus:ring-[#A85B52]"
            />

            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-[#9E8A86]">
                Bình luận mang tính chất trao đổi văn minh, tôn trọng lẫn nhau.
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#A85B52] hover:bg-[#91463D] transition-colors shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Gửi bình luận</span>
              </button>
            </div>

            {commentSuccess && (
              <p className="text-xs text-[#2E6B43] bg-[#EAF5EE] p-2 rounded-lg text-center animate-in fade-in">
                Cảm ơn bạn! Bình luận của bạn đã được đăng tải thành công (Dữ liệu mẫu phản hồi tức thì).
              </p>
            )}
          </form>

          {/* Comments List */}
          <div className="space-y-4">
            {localComments.length === 0 ? (
              <div className="text-center py-8 text-xs text-[#8C7672]">
                Chưa có bình luận nào. Hãy là người đầu tiên để lại ý kiến nhé!
              </div>
            ) : (
              localComments.map((comment) => (
                <div 
                  key={comment.id}
                  className="bg-white p-4 sm:p-5 rounded-2xl border border-[#F0E4DF] shadow-xs space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={comment.authorAvatar}
                        alt={comment.authorName}
                        className="w-8 h-8 rounded-full object-cover border border-[#EADAD4]"
                      />
                      <div>
                        <span className="text-xs font-bold text-[#341F1A]">{comment.authorName}</span>
                        <span className="text-[10px] text-[#937E79] ml-2">{comment.date}</span>
                      </div>
                    </div>
                    <span className="text-[11px] text-[#8C5248] flex items-center gap-1">
                      <Heart className="w-3 h-3 text-[#B0736B]" />
                      {comment.likes}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5D4642] leading-relaxed pl-10">
                    {comment.content}
                  </p>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Section: "Có thể bạn cũng quan tâm" */}
        {relatedArticles.length > 0 && (
          <section className="pt-10 border-t border-[#F0E4DF]">
            <h3 className="font-serif-display text-2xl font-bold text-[#341F1A] mb-6">
              Có thể bạn cũng quan tâm
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => {
                    onSelectArticle(rel);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#EDE1DB] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#F2E7E2]">
                      <img
                        src={rel.coverImage}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <span className="absolute top-2 left-2 text-[10px] font-semibold uppercase tracking-wider text-[#633932] bg-white/95 px-2 py-0.5 rounded-full">
                        {rel.categoryName}
                      </span>
                    </div>

                    <div className="p-4">
                      <h4 className="font-serif-display text-sm font-bold text-[#341F1A] line-clamp-2 group-hover:text-[#96554B] transition-colors leading-snug">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-[#735F5A] mt-1.5 line-clamp-2 leading-relaxed">
                        {rel.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-0 text-[11px] text-[#8C7672] flex items-center justify-between">
                    <span>{rel.readTime}</span>
                    <span className="text-[#8C5248] font-semibold group-hover:underline">Đọc ngay →</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
