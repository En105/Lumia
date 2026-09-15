import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, RotateCcw, ArrowRight, BookOpen } from 'lucide-react';
import { SkinType } from '../../types';

interface SkinQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  skinTypes: SkinType[];
  onSelectSkinType: (skin: SkinType) => void;
}

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    type: 'oily' | 'dry' | 'combination' | 'sensitive' | 'normal';
  }[];
}

export const SkinQuizModal: React.FC<SkinQuizModalProps> = ({
  isOpen,
  onClose,
  skinTypes,
  onSelectSkinType,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<SkinType | null>(null);

  if (!isOpen) return null;

  const questions: Question[] = [
    {
      id: 1,
      question: 'Sau khi rửa mặt 30 phút và để mặt mộc hoàn toàn, bạn cảm thấy da như thế nào?',
      options: [
        { text: 'Toàn bộ khuôn mặt bóng nhẫy dầu, đặc biệt vùng trán và mũi', type: 'oily' },
        { text: 'Cảm giác căng rát, hơi châm chích và bề mặt khô ráp', type: 'dry' },
        { text: 'Trán và mũi đổ dầu nhẹ, nhưng hai bên má bình thường hoặc hơi khô', type: 'combination' },
        { text: 'Da ửng đỏ, ngứa ngáy hoặc châm chích khó chịu', type: 'sensitive' },
        { text: 'Da mềm mại, không đổ quá nhiều dầu và không căng rát', type: 'normal' },
      ],
    },
    {
      id: 2,
      question: 'Vào khoảng 2-3 giờ chiều, vùng chữ T (trán, mũi, cằm) của bạn trông như thế nào?',
      options: [
        { text: 'Rất nhiều dầu nhờn, có thể dùng 2-3 tờ giấy thấm dầu ướt đẫm', type: 'oily' },
        { text: 'Hầu như không có dầu, phấn nền hay da mặt có dấu hiệu mốc hoặc tróc vảy', type: 'dry' },
        { text: 'Đổ dầu bóng vừa phải ở mũi và trán, nhưng má vẫn ráo', type: 'combination' },
        { text: 'Da dễ ửng đỏ theo nhiệt độ phòng điều hòa hoặc thời tiết bên ngoài', type: 'sensitive' },
        { text: 'Chỉ có lớp dầu tự nhiên nhẹ nhàng, nhìn da khỏe khoắn', type: 'normal' },
      ],
    },
    {
      id: 3,
      question: 'Khi bạn thử một loại kem dưỡng hoặc serum mới, phản ứng của da thường là:',
      options: [
        { text: 'Dễ bị bít tắc lỗ chân lông và nổi mụn ẩn nếu kem quá đặc', type: 'oily' },
        { text: 'Da hút ẩm rất nhanh, nếu kem lỏng quá thì vẫn cảm giác chưa đủ ẩm', type: 'dry' },
        { text: 'Vùng má êm nhưng vùng mũi dễ bị nhờn nếu dùng kem dày', type: 'combination' },
        { text: 'Rất dễ bị châm chích, nổi mẩn đỏ li ti hoặc nóng rát', type: 'sensitive' },
        { text: 'Hiếm khi bị kích ứng, thích ứng tốt với hầu hết sản phẩm', type: 'normal' },
      ],
    },
    {
      id: 4,
      question: 'Tình trạng lỗ chân lông và khuyết điểm lớn nhất bạn thường gặp:',
      options: [
        { text: 'Lỗ chân lông to rõ rệt, nhiều mụn đầu đen và mụn bọc', type: 'oily' },
        { text: 'Lỗ chân lông rất nhỏ, nhưng dễ xuất hiện nếp nhăn li ti và da xỉn màu', type: 'dry' },
        { text: 'Lỗ chân lông to ở cánh mũi và cằm, hai má mịn', type: 'combination' },
        { text: 'Hàng rào da mỏng manh, nhìn thấy rõ các mao mạch nhỏ dưới da', type: 'sensitive' },
        { text: 'Da đều màu, bề mặt mịn màng và rất ít khi có mụn', type: 'normal' },
      ],
    },
  ];

  const handleSelectOption = (type: string) => {
    const updatedAnswers = [...answers, type];
    setAnswers(updatedAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate majority answer
      const counts: Record<string, number> = {};
      updatedAnswers.forEach((t) => {
        counts[t] = (counts[t] || 0) + 1;
      });

      let highestType = 'combination';
      let highestCount = 0;
      for (const t in counts) {
        if (counts[t] > highestCount) {
          highestCount = counts[t];
          highestType = t;
        }
      }

      const matchedSkin = skinTypes.find((s) => s.id === highestType) || skinTypes[0];
      setResult(matchedSkin);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div 
        id="skin-quiz-modal"
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-[#ECDCD6] shadow-2xl relative animate-in zoom-in-95 duration-200"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF2EE] text-[#7A635E] hover:text-[#341F1A] hover:bg-[#F2E5DF] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!result ? (
          <div>
            {/* Header */}
            <div className="space-y-1.5 mb-6">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#96554B]">
                <Sparkles className="w-4 h-4 text-[#B86B62]" />
                <span>Trắc nghiệm nhận diện làn da (Câu {currentStep + 1} / {questions.length})</span>
              </div>
              <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#341F1A]">
                {questions[currentStep].question}
              </h3>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-[#F5ECE8] h-2 rounded-full overflow-hidden mb-6">
              <div
                className="bg-[#A85B52] h-full transition-all duration-300 rounded-full"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              />
            </div>

            {/* Options */}
            <div className="space-y-3">
              {questions[currentStep].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt.type)}
                  className="w-full text-left p-4 rounded-2xl bg-[#FCFAF8] border border-[#ECDCD6] hover:border-[#B86B62] hover:bg-[#FAF0EB] transition-all text-xs sm:text-sm text-[#4A3531] font-medium leading-relaxed group flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-[#FAF0EB] text-[#8C5248] group-hover:bg-[#A85B52] group-hover:text-white flex items-center justify-center text-xs font-bold shrink-0 transition-colors">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{opt.text}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Result Screen */
          <div className="text-center space-y-5 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-[#FCEBE7] text-[#A85B52] flex items-center justify-center mx-auto shadow-xs">
              <Sparkles className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C5248]">
                Kết quả chẩn đoán từ Lumia
              </span>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#341F1A] mt-1">
                Làn da của bạn thuộc nhóm: <span className="text-[#A85B52]">{result.vietnameseName}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#6E5853] mt-2 italic">
                "{result.tagline}"
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF1ED] border border-[#ECD8D0] text-left text-xs sm:text-sm text-[#5C4540] space-y-3">
              <p className="leading-relaxed">
                {result.description}
              </p>
              <div>
                <span className="font-bold text-[#341F1A] block mb-1">Hoạt chất khuyên dùng cho bạn:</span>
                <div className="flex flex-wrap gap-1.5">
                  {result.recommendedIngredients.map((ing, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md bg-white text-[#7A4B42] text-[11px] font-medium border border-[#E8D4CD]">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  onSelectSkinType(result);
                  onClose();
                }}
                className="flex-1 py-3 px-5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#A85B52] hover:bg-[#91463D] shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Xem cẩm nang chi tiết cho {result.vietnameseName}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleReset}
                className="py-3 px-5 rounded-full text-xs sm:text-sm font-semibold text-[#66524E] bg-[#FAF2EE] hover:bg-[#F2E5DF] transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Làm lại trắc nghiệm</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
