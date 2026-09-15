import React, { useState } from 'react';
import { X, Send, Sparkles, AlertCircle } from 'lucide-react';
import { Discussion } from '../../types';

interface CreateDiscussionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateDiscussion: (discussion: Discussion) => void;
}

export const CreateDiscussionModal: React.FC<CreateDiscussionModalProps> = ({
  isOpen,
  onClose,
  onCreateDiscussion,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Skincare cho người mới');
  const [content, setContent] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [tags, setTags] = useState('hoidap, skincare');

  if (!isOpen) return null;

  const categories = [
    'Skincare cho người mới',
    'Da dầu, mụn',
    'Da khô và nhạy cảm',
    'Mỹ phẩm makeup',
    'Review sản phẩm',
    'Thành phần mỹ phẩm',
    'Chăm sóc tóc',
    'Kinh nghiệm làm đẹp',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newDiscussion: Discussion = {
      id: `disc-${Date.now()}`,
      title: title.trim(),
      category,
      author: {
        name: authorName.trim() || 'Bạn đọc Lumia',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
        badge: 'Thành viên mới',
      },
      content: content.trim(),
      date: 'Vừa xong',
      repliesCount: 0,
      likes: 1,
      views: 1,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
      replies: [],
    };

    onCreateDiscussion(newDiscussion);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div 
        id="create-discussion-modal"
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-[#ECDCD6] shadow-2xl relative animate-in zoom-in-95 duration-200"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF2EE] text-[#7A635E] hover:text-[#341F1A] hover:bg-[#F2E5DF] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#96554B]">
            Cộng đồng làm đẹp Lumia
          </span>
          <h3 className="font-serif-display text-2xl font-bold text-[#341F1A]">
            Tạo chủ đề thảo luận mới
          </h3>
          <p className="text-xs text-[#7A635E]">
            Hỏi đáp, chia sẻ cảm nhận hoặc tìm kiếm giải pháp chăm sóc da từ cộng đồng.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#4A3531] mb-1">
              Tiêu đề thảo luận *
            </label>
            <input
              id="disc-title-input"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ví dụ: Xin kinh nghiệm phục hồi da sau treatment BHA quá đà..."
              className="w-full px-4 py-2.5 rounded-xl bg-[#FCFAF8] border border-[#ECDCD6] text-xs sm:text-sm text-[#341F1A] focus:outline-none focus:ring-2 focus:ring-[#A85B52]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#4A3531] mb-1">
                Chuyên mục
              </label>
              <select
                id="disc-category-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FCFAF8] border border-[#ECDCD6] text-xs sm:text-sm text-[#341F1A] focus:outline-none focus:ring-2 focus:ring-[#A85B52]"
              >
                {categories.map((c, i) => (
                  <option key={i} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#4A3531] mb-1">
                Tên hiển thị của bạn
              </label>
              <input
                id="disc-author-input"
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Để trống = 'Bạn đọc Lumia'"
                className="w-full px-4 py-2.5 rounded-xl bg-[#FCFAF8] border border-[#ECDCD6] text-xs sm:text-sm text-[#341F1A] focus:outline-none focus:ring-2 focus:ring-[#A85B52]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#4A3531] mb-1">
              Nội dung chi tiết *
            </label>
            <textarea
              id="disc-content-input"
              required
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Mô tả cụ thể loại da hiện tại của bạn, các sản phẩm đang dùng, và thắc mắc bạn cần hỗ trợ..."
              className="w-full p-4 rounded-xl bg-[#FCFAF8] border border-[#ECDCD6] text-xs sm:text-sm text-[#341F1A] focus:outline-none focus:ring-2 focus:ring-[#A85B52]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#4A3531] mb-1">
              Thẻ từ khóa (phân cách bởi dấu phẩy)
            </label>
            <input
              id="disc-tags-input"
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="BHA, phuchoi, dadau"
              className="w-full px-4 py-2.5 rounded-xl bg-[#FCFAF8] border border-[#ECDCD6] text-xs sm:text-sm text-[#341F1A] focus:outline-none focus:ring-2 focus:ring-[#A85B52]"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs font-semibold text-[#7A635E] hover:bg-[#F2E5DF] transition-colors"
            >
              Hủy
            </button>
            <button
              id="disc-submit-btn"
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#A85B52] hover:bg-[#91463D] shadow-xs transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Đăng thảo luận</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
