import React from 'react';
import { Sparkles, Heart, ShieldCheck, Users, BookOpen, Compass, CheckCircle2 } from 'lucide-react';
import { NavPage } from '../../types';

interface AboutPageProps {
  onNavigate?: (page: NavPage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const values = [
    {
      title: 'Hiểu biết',
      subtitle: 'Knowledge & Science',
      description: 'Mọi bước dưỡng da đều cần dựa trên sinh học làn da thực tế. Chúng mình giải mã các thuật ngữ phức tạp thành kiến thức dễ hiểu, ứng dụng được ngay.',
      icon: BookOpen,
      bgColor: 'bg-[#FAF0EB]',
      textColor: 'text-[#96554B]'
    },
    {
      title: 'Chân thật',
      subtitle: 'Honesty & Transparency',
      description: 'Nói không với seeding mỹ phẩm kém chất lượng hay những lời tâng bốc quá đà. Mọi đánh giá tại Lumia đều phản ánh trải nghiệm khách quan và khoa học.',
      icon: ShieldCheck,
      bgColor: 'bg-[#F2F5F3]',
      textColor: 'text-[#4A7253]'
    },
    {
      title: 'Chia sẻ',
      subtitle: 'Open Sharing',
      description: 'Làm đẹp không nên là bí mật giấu kín. Kinh nghiệm thực tế từ người dùng và chuyên môn từ dược sĩ cùng hòa quyện để mang lại giá trị thiết thực.',
      icon: Heart,
      bgColor: 'bg-[#FCEBE7]',
      textColor: 'text-[#B85C50]'
    },
    {
      title: 'Cộng đồng',
      subtitle: 'Inclusive Community',
      description: 'Một không gian văn minh, ấm áp và tôn trọng lẫn nhau. Nơi bạn không bao giờ cảm thấy cô độc trên hành trình lắng nghe và phục hồi làn da.',
      icon: Users,
      bgColor: 'bg-[#F5F1ED]',
      textColor: 'text-[#87584E]'
    }
  ];

  return (
    <div className="bg-[#FCFAF8] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Brand Story */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5E5DF] text-[#78463E] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#A65B52]" />
            <span>Câu chuyện thương hiệu Lumia</span>
          </div>

          <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#341F1A] leading-tight">
            “Lumia được tạo ra với mong muốn xây dựng một không gian nơi việc làm đẹp bắt đầu từ sự hiểu biết về chính làn da của mình.”
          </h1>

          <p className="text-base sm:text-lg text-[#6E5853] leading-relaxed pt-2">
            Chúng mình tin rằng không có làn da nào là hoàn hảo, nhưng mọi làn da đều xứng đáng được lắng nghe, chăm sóc và thấu hiểu đúng cách.
          </p>
        </div>

        {/* Storytelling Grid with High Quality Lifestyle Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5 text-[#4A3531] text-sm sm:text-base leading-relaxed">
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#341F1A]">
              Từ trăn trở giữa ma trận mỹ phẩm đến triết lý làm đẹp khoa học
            </h2>
            <p>
              Giữa hàng ngàn sản phẩm được quảng cáo mỗi ngày cùng vô số trào lưu treatment dồn dập, người yêu làm đẹp tại Việt Nam thường xuyên rơi vào cảnh hoang mang: mua theo người nổi tiếng, dùng sai nồng độ, và khiến hàng rào bảo vệ da bị tàn phá nặng nề.
            </p>
            <p>
              Lumia ra đời như một điểm tựa an tâm. Tên gọi <strong>Lumia</strong> xuất phát từ <em>"Luminosity"</em> — ánh sáng rạng ngời từ một làn da khỏe khoắn nội tại. Chúng mình không bán sản phẩm hay biến bạn thành người tiêu dùng bị động; chúng mình trao cho bạn tri thức để bạn trở thành chuyên gia của chính làn da mình.
            </p>
            <div className="p-4 rounded-2xl bg-[#FAF1ED] border border-[#ECDAD2] text-xs text-[#7A4B42] italic">
              “Vẻ đẹp bền vững nhất không đến từ lớp trang điểm dày cộm, mà đến từ sự tự tin khi hiểu rõ điều gì đang diễn ra dưới từng lớp biểu bì.”
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
                  alt="Chăm sóc da khoa học"
                  className="rounded-2xl shadow-md w-full aspect-[3/4] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1608248597359-57e0344d416b?auto=format&fit=crop&w=600&q=80"
                  alt="Thành phần mỹ phẩm"
                  className="rounded-2xl shadow-md w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="space-y-4 pt-6">
                <img
                  src="https://images.unsplash.com/photo-1512290900672-1f4a9b5f5439?auto=format&fit=crop&w=600&q=80"
                  alt="Lối sống làm đẹp tự nhiên"
                  className="rounded-2xl shadow-md w-full aspect-[4/3] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
                  alt="Cộng đồng Lumia"
                  className="rounded-2xl shadow-md w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Values Section */}
        <div className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#935A51] bg-[#F9ECE7] px-3.5 py-1 rounded-full">
              Giá trị cốt lõi
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#341F1A] mt-2">
              4 trụ cột định hình Lumia
            </h2>
            <p className="text-sm text-[#735F5A] mt-1">
              Hiểu biết – Chân thật – Chia sẻ – Cộng đồng
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-[#EDE1DB] shadow-xs space-y-3"
                >
                  <div className={`w-12 h-12 rounded-2xl ${v.bgColor} ${v.textColor} flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif-display text-lg font-bold text-[#341F1A]">{v.title}</h3>
                    <p className="text-[11px] font-semibold text-[#96554B] uppercase tracking-wider">{v.subtitle}</p>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6E5853] leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Editorial Standards Pledge */}
        <div className="bg-[#FAF3F0] p-8 sm:p-10 rounded-3xl border border-[#EAD7CF] max-w-4xl mx-auto space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="font-serif-display text-2xl font-bold text-[#341F1A]">
              Cam kết biên tập của Lumia
            </h3>
            <p className="text-xs sm:text-sm text-[#735F5A] mt-1">
              Những nguyên tắc chúng mình tuân thủ trong từng dòng chữ xuất bản
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#4D3530]">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#3E8B57] shrink-0 mt-0.5" />
              <span>Dẫn nguồn nghiên cứu khoa học từ các tạp chí da liễu uy tín quốc tế.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#3E8B57] shrink-0 mt-0.5" />
              <span>Minh bạch 100% về thành phần, không nhận bài viết quảng cáo ẩn.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#3E8B57] shrink-0 mt-0.5" />
              <span>Đánh giá khách quan cả ưu điểm lẫn nhược điểm của mọi sản phẩm.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#3E8B57] shrink-0 mt-0.5" />
              <span>Xây dựng cộng đồng thảo luận văn minh, tôn trọng mọi cơ địa da.</span>
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => { onNavigate?.('discussions'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#A85B52] hover:bg-[#91463D] shadow-xs transition-colors"
            >
              <span>Tham gia cộng đồng Lumia ngay</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
