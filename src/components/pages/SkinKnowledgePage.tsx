import React, { useState } from 'react';
import { Microscope, HelpCircle, CheckCircle2, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';
import { SkinType } from '../../types';

interface SkinKnowledgePageProps {
  skinTypes: SkinType[];
  onSelectSkinType: (skin: SkinType) => void;
  onOpenSkinQuiz: () => void;
}

export const SkinKnowledgePage: React.FC<SkinKnowledgePageProps> = ({
  skinTypes = [],
  onSelectSkinType,
  onOpenSkinQuiz,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const safeSkinTypes = skinTypes || [];
  const filtered = activeTab === 'all' 
    ? safeSkinTypes 
    : safeSkinTypes.filter(s => s.id === activeTab);

  return (
    <div className="bg-[#FCFAF8] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#935A51] bg-[#F9ECE7] px-3.5 py-1 rounded-full">
            Khoa học biểu bì
          </span>
          <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#341F1A]">
            Hiểu làn da của bạn
          </h1>
          <p className="text-sm sm:text-base text-[#6E5853] leading-relaxed">
            Làn da là cơ quan sống lớn nhất của cơ thể. Thấu hiểu cơ chế tiết bã nhờn, khả năng giữ nước và độ dày màng sừng sẽ giúp bạn xây dựng chu trình dưỡng da chuẩn xác nhất.
          </p>

          <div className="pt-3">
            <button
              onClick={onOpenSkinQuiz}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#A85B52] hover:bg-[#91463D] shadow-xs hover:shadow-md transition-all"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Làm bài trắc nghiệm xác định loại da (60 giây)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'all'
                ? 'bg-[#A85B52] text-white shadow-xs'
                : 'bg-white text-[#6E5853] border border-[#ECD9D2] hover:bg-[#F9ECE7]'
            }`}
          >
            Tất cả 5 loại da
          </button>
          {skinTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(type.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === type.id
                  ? 'bg-[#A85B52] text-white shadow-xs'
                  : 'bg-white text-[#6E5853] border border-[#ECD9D2] hover:bg-[#F9ECE7]'
              }`}
            >
              {type.vietnameseName}
            </button>
          ))}
        </div>

        {/* Skin Cards Grid */}
        <div className="space-y-8">
          {filtered.map((type) => (
            <div
              key={type.id}
              id={`skin-type-block-${type.id}`}
              className="bg-white rounded-3xl border border-[#EDE1DB] overflow-hidden shadow-xs hover:shadow-md transition-all p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Photo */}
                <div className="lg:col-span-4 aspect-[4/3] rounded-2xl overflow-hidden bg-[#F2E6E1] relative shadow-xs">
                  <img
                    src={type.image}
                    alt={type.vietnameseName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-xs uppercase tracking-wider font-semibold opacity-90">
                      {type.name}
                    </span>
                    <h3 className="font-serif-display text-2xl font-bold">
                      {type.vietnameseName}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-8 space-y-4">
                  <p className="text-sm font-semibold text-[#8C5248] italic">
                    "{type.tagline}"
                  </p>
                  <p className="text-sm text-[#5C4642] leading-relaxed">
                    {type.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {/* Signs */}
                    <div className="p-4 rounded-2xl bg-[#FCFAF8] border border-[#F2E6E1]">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#341F1A] mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4A7253]" />
                        <span>Dấu hiệu nhận biết</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[#6B5550]">
                        {type.signs.map((sign, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-[#A85B52]">•</span>
                            <span>{sign}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ingredients */}
                    <div className="p-4 rounded-2xl bg-[#FCFAF8] border border-[#F2E6E1]">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#341F1A] mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#B86B62]" />
                        <span>Hoạt chất nên & tránh</span>
                      </h4>
                      <div className="space-y-2 text-xs">
                        <div>
                          <span className="font-medium text-[#4A7253] block">Khuyên dùng:</span>
                          <span className="text-[#6B5550]">{type.recommendedIngredients.slice(0, 3).join(', ')}</span>
                        </div>
                        <div>
                          <span className="font-medium text-[#C0392B] block">Cần hạn chế:</span>
                          <span className="text-[#6B5550]">{type.avoidIngredients.slice(0, 2).join(', ')}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => onSelectSkinType(type)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#8C5248] bg-[#FAF0EB] hover:bg-[#F3DDD5] transition-colors"
                    >
                      <span>Xem cẩm nang chu trình dưỡng da chi tiết</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
