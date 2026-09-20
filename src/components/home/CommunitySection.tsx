import React, { useState } from 'react';
import { MessageSquare, Heart, Eye, MessageCircleQuestion, Users, Sparkles, PlusCircle } from 'lucide-react';
import { Discussion } from '../../types';

interface CommunitySectionProps {
  discussions?: Discussion[];
  onSelectDiscussion?: (discussion: Discussion) => void;
  onViewCommunity?: () => void;
  onViewAllDiscussions?: () => void;
  onOpenCreateDiscussion?: () => void;
  onToggleLikeDiscussion?: (id: string, e: React.MouseEvent) => void;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({
  discussions = [],
  onSelectDiscussion,
  onViewCommunity,
  onViewAllDiscussions,
  onOpenCreateDiscussion,
  onToggleLikeDiscussion,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'Tất cả chủ đề' },
    { id: 'Skincare cho người mới', name: 'Skincare cho người mới' },
    { id: 'Da dầu, mụn', name: 'Da dầu, mụn' },
    { id: 'Da khô và nhạy cảm', name: 'Da khô & nhạy cảm' },
    { id: 'Mỹ phẩm makeup', name: 'Mỹ phẩm makeup' },
    { id: 'Review sản phẩm', name: 'Review sản phẩm' },
    { id: 'Thành phần mỹ phẩm', name: 'Thành phần' },
    { id: 'Chăm sóc tóc', name: 'Chăm sóc tóc' },
    { id: 'Kinh nghiệm làm đẹp', name: 'Kinh nghiệm' },
  ];

  const safeDiscussions = discussions || [];
  const filteredDiscussions = activeCategory === 'all'
    ? safeDiscussions.slice(0, 4)
    : safeDiscussions.filter(d => d.category === activeCategory).slice(0, 4);

  return (
    <section className="py-16 sm:py-20 bg-[#FCFAF8] border-t border-[#F0E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#935A51] bg-[#F9ECE7] px-3.5 py-1 rounded-full">
              Diễn đàn trao đổi
            </span>
            <span className="text-[11px] font-semibold text-[#824E46] bg-[#FCEBE7] px-2.5 py-0.5 rounded-full border border-[#EACEC8]">
              Dữ liệu mẫu minh họa
            </span>
          </div>
          <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#341F1A]">
            Không gian thảo luận cộng đồng
          </h2>
          <p className="text-base text-[#6E5853] leading-relaxed">
            Nơi chia sẻ trải nghiệm thực tế, hỏi đáp về phục hồi làn da và thảo luận văn minh dựa trên kiến thức khoa học.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              id="community-ask-question-cta"
              onClick={() => onOpenCreateDiscussion?.()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#A85B52] hover:bg-[#91463D] shadow-xs transition-colors"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Đặt câu hỏi</span>
            </button>

            <button
              id="community-view-forum-cta"
              onClick={() => {
                if (onViewCommunity) onViewCommunity();
                else if (onViewAllDiscussions) onViewAllDiscussions();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-[#5C3A34] bg-white border border-[#E8D4CD] hover:bg-[#F9ECE7] transition-colors"
            >
              <Users className="w-4 h-4 text-[#8C5E58]" />
              <span>Xem cộng đồng</span>
            </button>
          </div>
        </div>

        {/* Categories Chips Scroller */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none justify-start sm:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#A85B52] text-white font-semibold shadow-xs'
                  : 'bg-white text-[#6E5853] border border-[#ECD9D2] hover:bg-[#F8EFEA]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Discussion Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredDiscussions.map((disc) => (
            <div
              key={disc.id}
              id={`discussion-card-${disc.id}`}
              onClick={() => onSelectDiscussion?.(disc)}
              className="group bg-white p-6 rounded-2xl border border-[#EDE1DB] shadow-xs hover:shadow-md hover:border-[#DFC4BA] transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Author row */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={disc.author.avatar}
                      alt={disc.author.name}
                      className="w-9 h-9 rounded-full object-cover border border-[#E8D8D2]"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#341F1A]">
                          {disc.author.name}
                        </span>
                        <span className="text-[10px] px-2 py-0.2 rounded-md bg-[#FAF0EB] text-[#8C564D] font-medium">
                          {disc.author.badge}
                        </span>
                      </div>
                      <span className="text-[10px] text-[#917C77]">{disc.date}</span>
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold text-[#8C5248] bg-[#F9ECE7] px-2.5 py-1 rounded-full shrink-0">
                    {disc.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif-display text-base font-bold text-[#341F1A] group-hover:text-[#96554B] transition-colors leading-snug mb-2">
                  {disc.title}
                </h3>

                {/* Snippet */}
                <p className="text-xs sm:text-sm text-[#6B5550] leading-relaxed line-clamp-2">
                  {disc.content}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {disc.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] text-[#78615C] bg-[#F8EFEA] px-2 py-0.5 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Engagement Stats */}
              <div className="pt-4 mt-4 border-t border-[#F5EBE6] flex items-center justify-between text-xs text-[#8C7672]">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-[#5F4843]">
                    <MessageSquare className="w-3.5 h-3.5 text-[#96584F]" />
                    <strong className="font-semibold">{disc.repliesCount}</strong> trả lời
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-[#B0736B]" />
                    {disc.likes} thích
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-[#A38E8A]" />
                    {disc.views} xem
                  </span>
                </div>

                <span className="text-xs font-semibold text-[#8C5248] group-hover:underline">
                  Tham gia trả lời →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
