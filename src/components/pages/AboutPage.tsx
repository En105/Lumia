import React from 'react';
import { Sparkles, Heart, ShieldCheck, Users, BookOpen, Compass, CheckCircle2, UserCheck, Target, GraduationCap } from 'lucide-react';
import { NavPage } from '../../types';

interface AboutPageProps {
  onNavigate?: (page: NavPage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const values = [
    {
      title: 'Hiểu biết khoa học',
      subtitle: 'Science-First Knowledge',
      description: 'Mọi bước dưỡng da đều dựa trên sinh học màng lipid và cấu trúc sừng. Chúng mình giải mã thuật ngữ phức tạp thành cẩm nang dễ hiểu, có dẫn chứng từ PubMed và AAD.',
      icon: BookOpen,
      bgColor: 'bg-[#FAF0EB]',
      textColor: 'text-[#96554B]'
    },
    {
      title: 'Trung thực & Minh bạch',
      subtitle: 'Honesty & Transparency',
      description: 'Nói không hoàn toàn với seeding quảng cáo, tiếp thị liên kết ẩn hoặc thổi phồng hiệu quả. Đánh giá ưu điểm đi kèm giới hạn công thức khách quan.',
      icon: ShieldCheck,
      bgColor: 'bg-[#F2F5F3]',
      textColor: 'text-[#4A7253]'
    },
    {
      title: 'Phi thương mại',
      subtitle: 'Non-Commercial Purpose',
      description: 'Không bán hàng, không đặt link mua sắm và không thúc giục mua đồ. Mục tiêu duy nhất là giúp bạn làm chủ chu trình làm đẹp và tiết kiệm tài chính.',
      icon: Heart,
      bgColor: 'bg-[#FCEBE7]',
      textColor: 'text-[#B85C50]'
    },
    {
      title: 'Cộng đồng đồng cảm',
      subtitle: 'Empathetic Community',
      description: 'Một không gian trao đổi tử tế, không phán xét. Nơi người từng trải qua giai đoạn mụn, bít tắc hay tổn thương da tìm thấy sự sẻ chia và lời khuyên chuẩn xác.',
      icon: Users,
      bgColor: 'bg-[#F5F1ED]',
      textColor: 'text-[#87584E]'
    }
  ];

  const targetAudiences = [
    {
      title: 'Học sinh & Sinh viên',
      desc: 'Cần một quy trình dưỡng da tối giản, tiết kiệm chi phí, an toàn với ngân sách vừa phải mà vẫn hiệu quả bảo vệ da trước khói bụi học đường.',
      badge: 'Bắt đầu nhẹ nhàng'
    },
    {
      title: 'Người mới bắt đầu Skincare',
      desc: 'Đang lạc lối giữa hàng nghìn video TikTok và quảng cáo mỹ phẩm, muốn tìm hiểu cặn kẽ loại da và từng bước chăm sóc da căn bản.',
      badge: 'Định hình thói quen'
    },
    {
      title: 'Làn da từng bị tổn thương',
      desc: 'Những người từng lạm dụng kem trộn chứa corticoid, peel da sai cách hoặc dị ứng hoạt chất treatment nặng, cần phác đồ phục hồi chậm rãi.',
      badge: 'Chữa lành & Tái tạo'
    },
    {
      title: 'Người tiêu dùng thông thái',
      desc: 'Muốn biết chính xác trong chai serum có hoạt chất gì, nồng độ bao nhiêu, cơ chế tác động sinh học thế nào trước khi bôi lên mặt.',
      badge: 'Đọc vị thành phần'
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
            “Chạm vào vẻ đẹp, hiểu về làn da”
          </h1>

          <p className="text-base sm:text-lg text-[#6E5853] leading-relaxed pt-2">
            Lumia được khởi xướng với khát vọng tạo nên một không gian làm đẹp chân thật, nơi mọi quyết định chăm sóc da đều bắt nguồn từ sự thấu hiểu sinh học thay vì những trào lưu quảng cáo nhất thời.
          </p>
        </div>

        {/* Founder & Origin Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5 text-[#4A3531] text-sm sm:text-base leading-relaxed">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0EB] text-[#8C5248] text-xs font-semibold">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Khởi nguồn từ trải nghiệm thực tế</span>
            </div>
            
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#341F1A]">
              Từ trăn trở của một người từng phá hỏng làn da vì "chạy theo trào lưu"
            </h2>
            
            <p>
              Ý tưởng xây dựng Lumia bắt nguồn từ chính hành trình cá nhân của người sáng lập. Trong những năm đầu đại học, trước áp lực của những video review mỹ phẩm hào nhoáng trên mạng xã hội, người sáng lập đã vội vã kết hợp nhiều hoạt chất treatment mạnh (AHA, BHA, Retinol nồng độ cao) mà không hiểu rõ cơ địa da của mình. Hậu quả là hàng rào bảo vệ da bị tàn phá nặng nề: mụn bùng phát, viêm đỏ kéo dài và cảm giác tự ti suốt nhiều tháng trời.
            </p>
            
            <p>
              Khi tìm đến các nguồn tài liệu y khoa chính thống từ Thư viện Y khoa Quốc gia Hoa Kỳ (PubMed) và Viện Da liễu Hoa Kỳ (AAD), một sự thật được sáng tỏ: <strong>Không có sản phẩm thần thánh nào giải quyết mọi vấn đề; sự khỏe mạnh của làn da đến từ việc phục hồi hàng rào màng lipid tự nhiên và kiên trì với những thói quen căn bản</strong>.
            </p>

            <p>
              Từ trăn trở đó, dự án <strong>Lumia</strong> (lấy cảm hứng từ <em>"Luminosity"</em> — ánh sáng rạng rỡ từ làn da khỏe bên trong) ra đời. Đây không phải là một gian hàng online, mà là một dự án nghiên cứu & cộng đồng phi thương mại giúp những người yêu cái đẹp không còn phải đánh cược làn da của mình vào sự may rủi.
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8D6CE] shadow-md space-y-6">
              <div className="flex items-center gap-4 border-b border-[#F2E5DF] pb-5">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F5D5CE] to-[#ECD8CF] flex items-center justify-center text-[#8C5248] text-xl font-bold font-serif-display border-2 border-white shadow-xs shrink-0">
                  LM
                </div>
                <div>
                  <h3 className="font-serif-display text-lg font-bold text-[#341F1A]">
                    Đội ngũ phát triển dự án Lumia
                  </h3>
                  <p className="text-xs text-[#8C5E58] font-medium">
                    Nhóm sinh viên nghiên cứu & Phát triển nội dung truyền thông y tế
                  </p>
                  <p className="text-[11px] text-[#7A635E] mt-0.5">
                    Email đại diện: lumia.beauty@gmail.com
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#5C4540]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#A85B52] shrink-0 mt-0.5" />
                  <span><strong>Cam kết 100% phi thương mại:</strong> Không nhận tài trợ từ các hãng để đánh giá thiên vị, không đặt link affiliate.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#A85B52] shrink-0 mt-0.5" />
                  <span><strong>Kiểm chứng tài liệu y khoa:</strong> Mọi bài viết chuyên sâu về hoạt chất đều dẫn nguồn từ các tạp chí da liễu quốc tế uy tín.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#A85B52] shrink-0 mt-0.5" />
                  <span><strong>Đồng hành lâu dài:</strong> Giải đáp thắc mắc và hỗ trợ người mới bắt đầu từng bước xây dựng thói quen khoa học.</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF1ED] border border-[#ECDAD2] text-xs text-[#7A4B42] italic">
                “Mục tiêu lớn nhất của chúng mình không phải là khuyên bạn mua thêm sản phẩm, mà là giúp bạn tự tin nói KHÔNG với những thứ làn da bạn không cần.”
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Values Section */}
        <div className="pt-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#935A51] bg-[#F9ECE7] px-3.5 py-1 rounded-full">
              Giá trị cốt lõi
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#341F1A] mt-2">
              4 nguyên tắc bất biến định hình Lumia
            </h2>
            <p className="text-sm text-[#735F5A] mt-1">
              Khoa học – Trung thực – Phi thương mại – Cộng đồng tử tế
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

        {/* Target Audience Section (Đối tượng hướng đến) */}
        <div className="bg-[#FAF3F0] rounded-3xl p-8 sm:p-12 border border-[#EAD7CF]">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#935A51] bg-white px-3.5 py-1 rounded-full border border-[#ECD9D1]">
              Đối tượng cộng đồng
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#341F1A] mt-2">
              Lumia được xây dựng cho ai?
            </h2>
            <p className="text-sm text-[#735F5A] mt-1">
              Dù bạn đang ở giai đoạn nào trên hành trình làm đẹp, Lumia luôn có một góc dành riêng cho bạn
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {targetAudiences.map((aud, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-[#EAE0D9] shadow-xs space-y-2.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#985348] bg-[#FCECE8] px-2.5 py-0.5 rounded-full inline-block">
                  {aud.badge}
                </span>
                <h4 className="font-serif-display font-bold text-base text-[#341F1A]">
                  {aud.title}
                </h4>
                <p className="text-xs text-[#6A5550] leading-relaxed">
                  {aud.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Mission & Call to Action */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#EDE1DB] shadow-xs max-w-4xl mx-auto text-center space-y-5">
          <div className="w-12 h-12 rounded-full bg-[#FAF0EB] text-[#96554B] flex items-center justify-center mx-auto">
            <Target className="w-6 h-6" />
          </div>
          
          <h3 className="font-serif-display text-2xl font-bold text-[#341F1A]">
            Mục tiêu xã hội của dự án Lumia
          </h3>
          
          <p className="text-sm text-[#66524E] leading-relaxed max-w-2xl mx-auto">
            Chúng mình mong muốn từng bước đẩy lùi vấn nạn mỹ phẩm giả, kem trộn corticoid độc hại và những lời quảng cáo dối trá tại Việt Nam bằng sức mạnh của <strong>tri thức mở</strong> và <strong>sự gắn kết cộng đồng</strong>.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => { onNavigate?.('articles'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#A85B52] hover:bg-[#91463D] shadow-xs transition-colors"
            >
              Đọc thư viện bài viết khoa học
            </button>
            <button
              onClick={() => { onNavigate?.('discussions'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#5C3F3A] bg-[#FAF2EE] hover:bg-[#F2E5DE] border border-[#ECD9D1] transition-colors"
            >
              Tham gia cộng đồng thảo luận
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
