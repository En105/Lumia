import React from 'react';
import { Microscope, Sparkles, Lightbulb, Users, ArrowUpRight } from 'lucide-react';
import { NavPage } from '../../types';

interface ExploreLumiaSectionProps {
  onNavigate?: (page: NavPage) => void;
  onSelectPillar?: (pillar: string) => void;
}

export const ExploreLumiaSection: React.FC<ExploreLumiaSectionProps> = ({ onNavigate, onSelectPillar }) => {
  const pillars = [
    {
      id: 'skin-knowledge',
      title: 'Kiến thức làn da',
      description: 'Hiểu làn da của bạn trước khi lựa chọn sản phẩm. Phân tích cấu trúc sinh học, màng ẩm và tình trạng da một cách dễ hiểu.',
      icon: Microscope,
      targetPage: 'skin-knowledge' as NavPage,
      bgColor: 'bg-[#FAF1ED]',
      iconColor: 'text-[#96554B]',
      borderHover: 'hover:border-[#E8C4BB]'
    },
    {
      id: 'reviews',
      title: 'Review mỹ phẩm',
      description: 'Đánh giá, trải nghiệm và phân tích các sản phẩm làm đẹp minh bạch, phân tích bảng thành phần và độ tương thích da.',
      icon: Sparkles,
      targetPage: 'reviews' as NavPage,
      bgColor: 'bg-[#F5F1ED]',
      iconColor: 'text-[#87584E]',
      borderHover: 'hover:border-[#DFD0C5]'
    },
    {
      id: 'tips',
      title: 'Tips chăm sóc da',
      description: 'Những mẹo chăm sóc da đơn giản, dễ áp dụng hàng ngày, tối ưu hóa thời gian và tránh các sai lầm làm mỏng yếu da.',
      icon: Lightbulb,
      targetPage: 'articles' as NavPage,
      bgColor: 'bg-[#F2F5F3]',
      iconColor: 'text-[#4A7253]',
      borderHover: 'hover:border-[#C4D9C8]'
    },
    {
      id: 'community',
      title: 'Cộng đồng Lumia',
      description: 'Nơi mọi người đặt câu hỏi, chia sẻ kinh nghiệm và thảo luận về làm đẹp trong không gian văn minh, hỗ trợ nhau.',
      icon: Users,
      targetPage: 'discussions' as NavPage,
      bgColor: 'bg-[#FAF4F0]',
      iconColor: 'text-[#8F524A]',
      borderHover: 'hover:border-[#EAD3CA]'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-[#F2E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Manifesto */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#935A51] bg-[#F9ECE7] px-3.5 py-1 rounded-full">
            Khám phá Lumia
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#341F1A]">
            Không gian làm đẹp dựa trên sự thấu hiểu
          </h2>
          <p className="text-base text-[#6E5954] leading-relaxed">
            Lumia là không gian dành cho những người yêu thích làm đẹp, nơi kiến thức về làn da được chia sẻ một cách dễ hiểu và trải nghiệm sử dụng mỹ phẩm được nhìn nhận một cách chân thật.
          </p>
        </div>

        {/* 4 Feature Groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={`explore-card-${item.id}`}
                onClick={() => {
                  if (onNavigate) {
                    onNavigate(item.targetPage);
                  } else if (onSelectPillar) {
                    onSelectPillar(item.id);
                  }
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`group p-6 rounded-2xl bg-[#FCFAF8] border border-[#F2E5E0] ${item.borderHover} transition-all duration-300 hover:shadow-md cursor-pointer flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${item.bgColor} ${item.iconColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-display text-lg font-bold text-[#341F1A] mb-2 group-hover:text-[#96554B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#705C57] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#F5EBE7] flex items-center justify-between text-xs font-semibold text-[#8C554B] group-hover:text-[#68362E]">
                  <span>Xem chi tiết</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
