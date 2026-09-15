import React, { useState, useMemo } from 'react';
import { 
  Search, PlusCircle, MessageSquare, Heart, Eye, Pin, CheckCircle2, 
  Filter, Sparkles, User, Send, ArrowLeft 
} from 'lucide-react';
import { Discussion, DiscussionReply } from '../../types';

interface DiscussionsPageProps {
  discussions: Discussion[];
  onOpenCreateDiscussion: () => void;
  onAddReplyToDiscussion: (discussionId: string, reply: DiscussionReply) => void;
  onToggleLikeDiscussion: (id: string) => void;
}

export const DiscussionsPage: React.FC<DiscussionsPageProps> = ({
  discussions = [],
  onOpenCreateDiscussion,
  onAddReplyToDiscussion,
  onToggleLikeDiscussion,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDiscussion, setSelectedDiscussion] = useState<Discussion | null>(null);

  // Reply form state
  const [replyText, setReplyText] = useState('');
  const [replyAuthor, setReplyAuthor] = useState('');
  const [replySuccess, setReplySuccess] = useState(false);

  const categories = [
    { id: 'all', label: 'Tất cả chủ đề' },
    { id: 'Skincare cho người mới', label: 'Skincare cho người mới' },
    { id: 'Da dầu, mụn', label: 'Da dầu, mụn' },
    { id: 'Da khô và nhạy cảm', label: 'Da khô & nhạy cảm' },
    { id: 'Mỹ phẩm makeup', label: 'Mỹ phẩm makeup' },
    { id: 'Review sản phẩm', label: 'Review sản phẩm' },
    { id: 'Thành phần mỹ phẩm', label: 'Thành phần mỹ phẩm' },
    { id: 'Chăm sóc tóc', label: 'Chăm sóc tóc' },
    { id: 'Kinh nghiệm làm đẹp', label: 'Kinh nghiệm làm đẹp' },
  ];

  const filteredDiscussions = useMemo(() => {
    const safeList = discussions || [];
    return safeList.filter((disc) => {
      const matchesCategory = selectedCategory === 'all' || disc.category === selectedCategory;
      const matchesSearch = 
        disc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        disc.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (disc.tags || []).some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [discussions, selectedCategory, searchQuery]);

  const handleReplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDiscussion || !replyText.trim()) return;

    const newReply: DiscussionReply = {
      id: `rep-${Date.now()}`,
      authorName: replyAuthor.trim() || 'Bạn đọc Lumia',
      authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      authorBadge: 'Thành viên cộng đồng',
      date: 'Vừa xong',
      content: replyText.trim(),
      likes: 1,
      userLiked: true,
    };

    onAddReplyToDiscussion(selectedDiscussion.id, newReply);

    // Update local copy for immediate view
    setSelectedDiscussion({
      ...selectedDiscussion,
      repliesCount: selectedDiscussion.repliesCount + 1,
      replies: [...selectedDiscussion.replies, newReply],
    });

    setReplyText('');
    setReplySuccess(true);
    setTimeout(() => setReplySuccess(false), 3000);
  };

  // If a discussion is selected, show discussion thread details
  if (selectedDiscussion) {
    return (
      <div className="bg-[#FCFAF8] min-h-screen py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <button
            onClick={() => setSelectedDiscussion(null)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#8C5248] hover:text-[#63332B] mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại diễn đàn thảo luận</span>
          </button>

          {/* Main Discussion Thread */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EDE1DB] shadow-xs space-y-6 mb-8">
            {/* Top row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#F5EBE6]">
              <div className="flex items-center gap-3">
                <img
                  src={selectedDiscussion.author.avatar}
                  alt={selectedDiscussion.author.name}
                  className="w-11 h-11 rounded-full object-cover border border-[#E8D8D2]"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#341F1A]">
                      {selectedDiscussion.author.name}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#FAF0EB] text-[#8C564D] font-medium">
                      {selectedDiscussion.author.badge}
                    </span>
                  </div>
                  <span className="text-xs text-[#917C77]">{selectedDiscussion.date}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {selectedDiscussion.isPinned && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#A85B52] bg-[#FCEBE7] px-2.5 py-1 rounded-full">
                    <Pin className="w-3 h-3" /> Đã ghim
                  </span>
                )}
                {selectedDiscussion.isSolved && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#2E7D32] bg-[#E8F5E9] px-2.5 py-1 rounded-full">
                    <CheckCircle2 className="w-3 h-3" /> Đã giải đáp
                  </span>
                )}
                <span className="text-xs font-semibold text-[#8C5248] bg-[#F9ECE7] px-3 py-1 rounded-full">
                  {selectedDiscussion.category}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#341F1A]">
              {selectedDiscussion.title}
            </h1>

            {/* Content */}
            <p className="text-base text-[#4D3530] leading-relaxed whitespace-pre-line">
              {selectedDiscussion.content}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {selectedDiscussion.tags.map((tag, idx) => (
                <span key={idx} className="text-xs text-[#78615C] bg-[#F8EFEA] px-2.5 py-1 rounded-md">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Interaction Footer */}
            <div className="pt-4 border-t border-[#F5EBE6] flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-[#8C7672]">
                <button
                  onClick={() => onToggleLikeDiscussion(selectedDiscussion.id)}
                  className="flex items-center gap-1.5 hover:text-[#B0736B] transition-colors"
                >
                  <Heart className="w-4 h-4 text-[#B0736B]" />
                  <span>{selectedDiscussion.likes} Thích</span>
                </button>
                <span className="flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-[#96584F]" />
                  <span>{selectedDiscussion.repliesCount} Trả lời</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-[#A38E8A]" />
                  <span>{selectedDiscussion.views} Lượt xem</span>
                </span>
              </div>
            </div>
          </div>

          {/* Reply Form */}
          <div className="bg-white rounded-2xl p-6 border border-[#EDE1DB] shadow-xs mb-8">
            <h3 className="text-base font-bold text-[#341F1A] mb-3">
              Gửi câu trả lời của bạn
            </h3>
            <form onSubmit={handleReplySubmit} className="space-y-3">
              <input
                type="text"
                value={replyAuthor}
                onChange={(e) => setReplyAuthor(e.target.value)}
                placeholder="Tên của bạn"
                className="w-full sm:w-72 px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-[#FCFAF8] border border-[#ECDCD6] text-[#341F1A] focus:outline-none focus:ring-2 focus:ring-[#A85B52]"
              />
              <textarea
                required
                rows={4}
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Chia sẻ giải pháp, kinh nghiệm hoặc lời khuyên của bạn..."
                className="w-full p-3.5 text-xs sm:text-sm rounded-xl bg-[#FCFAF8] border border-[#ECDCD6] text-[#341F1A] focus:outline-none focus:ring-2 focus:ring-[#A85B52]"
              />
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-[#937E79]">
                  Giữ tinh thần tích cực, chân thật và khoa học.
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#A85B52] hover:bg-[#91463D] transition-colors shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Đăng trả lời</span>
                </button>
              </div>

              {replySuccess && (
                <p className="text-xs text-[#2E6B43] bg-[#EAF5EE] p-2 rounded-lg text-center animate-in fade-in">
                  Đã đăng câu trả lời của bạn vào chủ đề!
                </p>
              )}
            </form>
          </div>

          {/* Replies list */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#7A635E]">
              Các câu trả lời ({selectedDiscussion.replies.length})
            </h3>

            {selectedDiscussion.replies.length === 0 ? (
              <div className="bg-white p-8 rounded-2xl border border-[#EDE1DB] text-center text-xs text-[#8C7672]">
                Chưa có câu trả lời nào cho chủ đề này. Hãy là người đầu tiên giúp đỡ bạn ấy nhé!
              </div>
            ) : (
              selectedDiscussion.replies.map((reply) => (
                <div
                  key={reply.id}
                  className="bg-white p-5 rounded-2xl border border-[#EDE1DB] shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={reply.authorAvatar}
                        alt={reply.authorName}
                        className="w-8 h-8 rounded-full object-cover border border-[#E8D8D2]"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#341F1A]">
                            {reply.authorName}
                          </span>
                          {reply.authorBadge && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#FAF0EB] text-[#8C564D] font-medium">
                              {reply.authorBadge}
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-[#937E79]">{reply.date}</span>
                      </div>
                    </div>

                    <span className="text-xs text-[#8C5248] flex items-center gap-1">
                      <Heart className="w-3 h-3 text-[#B0736B]" />
                      {reply.likes}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4D3530] leading-relaxed pl-11">
                    {reply.content}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }

  // Otherwise, show list view
  return (
    <div className="bg-[#FCFAF8] min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#935A51] bg-[#F9ECE7] px-3.5 py-1 rounded-full">
              Diễn đàn làm đẹp
            </span>
            <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#341F1A] mt-2">
              Cộng đồng Lumia
            </h1>
            <p className="text-sm sm:text-base text-[#6E5853] mt-1">
              Không gian hỏi đáp chân thành, thảo luận đa chiều về chăm sóc da, mỹ phẩm và các vấn đề biểu bì.
            </p>
          </div>

          <button
            id="community-page-create-btn"
            onClick={onOpenCreateDiscussion}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-[#A85B52] hover:bg-[#91463D] shadow-sm hover:shadow-md transition-all shrink-0"
          >
            <PlusCircle className="w-4 h-4" />
            <span>+ Tạo thảo luận</span>
          </button>
        </div>

        {/* Search & Categories */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#EDE1DB] shadow-xs mb-8 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-[#9E8782] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="discussions-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm chủ đề, hoạt chất, câu hỏi cộng đồng..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#FCFAF8] border border-[#ECD9D2] text-sm text-[#341F1A] placeholder:text-[#A38E89] focus:outline-none focus:ring-2 focus:ring-[#A85B52]"
            />
          </div>

          {/* Categories */}
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

        {/* Discussion Items List */}
        <div className="space-y-4">
          {filteredDiscussions.map((disc) => (
            <div
              key={disc.id}
              id={`disc-item-${disc.id}`}
              onClick={() => setSelectedDiscussion(disc)}
              className="group bg-white p-5 sm:p-6 rounded-2xl border border-[#EDE1DB] shadow-xs hover:shadow-md hover:border-[#DFC4BA] transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              {/* Left Column: Author + Title + Excerpt */}
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-semibold text-[#8C5248] bg-[#F9ECE7] px-2.5 py-0.5 rounded-full text-[11px]">
                    {disc.category}
                  </span>
                  {disc.isPinned && (
                    <span className="text-[11px] font-semibold text-[#A85B52] bg-[#FCEBE7] px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Pin className="w-2.5 h-2.5" /> Ghim
                    </span>
                  )}
                  {disc.isSolved && (
                    <span className="text-[11px] font-semibold text-[#2E7D32] bg-[#E8F5E9] px-2 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Đã giải đáp
                    </span>
                  )}
                  <span className="text-[#9E8A86] text-[11px]">• {disc.date}</span>
                </div>

                <h3 className="font-serif-display text-base sm:text-lg font-bold text-[#341F1A] group-hover:text-[#96554B] transition-colors leading-snug">
                  {disc.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6F5954] line-clamp-2 leading-relaxed">
                  {disc.content}
                </p>

                <div className="flex items-center gap-2 pt-1">
                  <img
                    src={disc.author.avatar}
                    alt={disc.author.name}
                    className="w-5 h-5 rounded-full object-cover border border-[#E8D8D2]"
                  />
                  <span className="text-xs text-[#59433F] font-medium">{disc.author.name}</span>
                  <span className="text-[10px] text-[#917C77]">({disc.author.badge})</span>
                </div>
              </div>

              {/* Right Column: Counters & Button */}
              <div className="sm:border-l sm:border-[#F5EBE6] sm:pl-6 flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#F5EBE6]">
                <div className="flex items-center gap-4 text-xs text-[#8C7672]">
                  <span className="flex items-center gap-1 text-[#5F4843]">
                    <MessageSquare className="w-4 h-4 text-[#96584F]" />
                    <strong className="font-semibold">{disc.repliesCount}</strong>
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-[#B0736B]" />
                    {disc.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-[#A38E8A]" />
                    {disc.views}
                  </span>
                </div>

                <span className="text-xs font-semibold text-[#8C5248] group-hover:text-[#63332B] group-hover:underline">
                  Xem thảo luận →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
