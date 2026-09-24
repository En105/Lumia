import { Article, SkinType, ReviewProduct, Discussion, NotificationItem } from '../types';

export const STANDARD_MEDICAL_DISCLAIMER = 
  "Nội dung trên Lumia nhằm mục đích cung cấp thông tin và kiến thức tham khảo, không thay thế cho chẩn đoán hoặc tư vấn y khoa từ bác sĩ/chuyên gia da liễu. Nếu bạn có vấn đề về da kéo dài hoặc nghiêm trọng, hãy tìm kiếm sự tư vấn từ chuyên gia y tế.";

export const mockSkinTypes: SkinType[] = [
  {
    id: 'oily',
    name: 'Oily Skin',
    vietnameseName: 'Da Dầu',
    tagline: 'Kiểm soát bóng nhờn, thông thoáng lỗ chân lông',
    description: 'Làn da tiết nhiều bã nhờn, bề mặt da thường bóng loáng, lỗ chân lông to và dễ phát triển mụn đầu đen, mụn viêm.',
    characteristics: [
      'Bề mặt da thường bóng dầu sau 1-2 giờ sau rửa mặt',
      'Lỗ chân lông rõ rệt ở vùng chữ T và hai bên má',
      'Dễ bị bít tắc, hình thành mụn đầu đen và mụn ẩn',
      'Ít xuất hiện nếp nhăn sớm hơn so với da khô'
    ],
    signs: [
      'Vùng chữ T (trán, mũi, cằm) bóng dầu suốt cả ngày',
      'Lớp trang điểm nhanh trôi hoặc xuống tông',
      'Cảm giác nặng mặt khi dùng dưỡng ẩm đặc'
    ],
    recommendedIngredients: ['Niacinamide', 'Salicylic Acid (BHA)', 'Zinc PCA', 'Hyaluronic Acid dạng lỏng', 'Tràm trà (Tea Tree)'],
    avoidIngredients: ['Dầu khoáng nặng', 'Cồn khô nồng độ cao', 'Silicones dày gây bí bách', 'Bơ hạt mỡ quá dày'],
    routineTips: [
      'Rửa mặt 2 lần/ngày bằng gel rửa mặt pH cân bằng 5.5',
      'Sử dụng toner hoặc serum chứa BHA 1-2% 2-3 lần mỗi tuần để làm sạch sâu lỗ chân lông',
      'Chọn kem dưỡng ẩm dạng gel-cream mỏng nhẹ, không chứa dầu (oil-free)',
      'Dùng kem chống nắng quang phổ rộng dạng sữa hoặc gel kiềm dầu'
    ],
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
    accentColor: '#D97706'
  },
  {
    id: 'dry',
    name: 'Dry Skin',
    vietnameseName: 'Da Khô',
    tagline: 'Cấp ẩm sâu, tái tạo hàng rào bảo vệ màng lipid',
    description: 'Làn da thiếu hụt độ ẩm và lipid tự nhiên, bề mặt thường ráp, bong tróc li ti, dễ cảm thấy căng tức sau khi làm sạch.',
    characteristics: [
      'Da thiếu độ ẩm tự nhiên, cảm giác căng ráp',
      'Bề mặt xuất hiện mảng da khô hoặc vảy nhỏ',
      'Lỗ chân lông rất nhỏ, hầu như không nhìn rõ',
      'Dễ xuất hiện nếp nhăn li ti quanh mắt và khóe miệng'
    ],
    signs: [
      'Cảm giác châm chích, căng tức sau khi rửa mặt',
      'Đánh nền thường bị mốc hoặc cakey',
      'Da xỉn màu và kém mịn màng khi trời lạnh'
    ],
    recommendedIngredients: ['Ceramides', 'Hyaluronic Acid đa tầng', 'Glycerin', 'Squalane', 'Shea Butter', 'Panthenol (B5)'],
    avoidIngredients: ['Sữa rửa mặt tạo bọt mạnh chứa SLS', 'Cồn khô (Alcohol Denat)', 'AHA nồng độ quá cao khi chưa phục hồi'],
    routineTips: [
      'Sử dụng sữa rửa mặt dạng kem hoặc sữa dịu nhẹ không bọt',
      'Vỗ toner dưỡng ẩm tầng lớp khi da còn ẩm',
      'Khóa ẩm bằng kem dưỡng giàu Ceramide và dầu dưỡng thực vật như Squalane',
      'Bổ sung xịt khoáng cấp ẩm dịu nhẹ trong ngày'
    ],
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    accentColor: '#9333EA'
  },
  {
    id: 'combination',
    name: 'Combination Skin',
    vietnameseName: 'Da Hỗn Hợp',
    tagline: 'Cân bằng vùng chữ T dầu và vùng chữ U khô',
    description: 'Loại da phổ biến nhất tại khí hậu nhiệt đới Việt Nam, kết hợp vùng chữ T (trán, mũi, cằm) bóng dầu với vùng má khô hoặc thường.',
    characteristics: [
      'Vùng chữ T đổ dầu và có lỗ chân lông to',
      'Vùng chữ U (hai bên má) bình thường hoặc khô ráp',
      'Dễ xuất hiện mụn ở mũi và cằm, nhưng má lại dễ nẻ',
      'Thay đổi tính chất theo mùa: hè dầu hơn, đông khô hơn'
    ],
    signs: [
      'Vùng trán và mũi bóng dầu sau buổi trưa',
      'Hai bên má đôi khi cảm thấy căng khô nếu dùng sản phẩm kiềm dầu toàn mặt'
    ],
    recommendedIngredients: ['Niacinamide 2-5%', 'Axit Hyaluronic', 'Chiết xuất trà xanh', 'Centella Asiatica (Rau má)'],
    avoidIngredients: ['Sản phẩm kiềm dầu quá gắt cho toàn mặt', 'Kem dưỡng quá đặc lên vùng chữ T'],
    routineTips: [
      'Phân vùng chăm sóc: thoa lượng mỏng serum kiềm dầu vùng chữ T và kem dưỡng ẩm nhiều hơn ở má',
      'Làm sạch nhẹ nhàng, không chà xát mạnh vùng má',
      'Tẩy tế bào chết BHA tập trung cho vùng mũi và cằm'
    ],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    accentColor: '#0D9488'
  },
  {
    id: 'sensitive',
    name: 'Sensitive Skin',
    vietnameseName: 'Da Nhạy Cảm',
    tagline: 'Làm dịu tức thì, phục hồi màng bảo vệ dịu nhẹ',
    description: 'Làn da có hàng rào bảo vệ mỏng manh, phản ứng nhanh với các tác nhân môi trường, mỹ phẩm mới, nhiệt độ hoặc căng thẳng.',
    characteristics: [
      'Dễ ửng đỏ, ngứa ngáy, nóng rát khi tiếp xúc hóa chất lạ',
      'Hàng rào bảo vệ da yếu, màng biểu bì mỏng',
      'Dễ phản ứng với hương liệu, chất bảo quản và cồn',
      'Thường thấy mạch máu li ti dưới da'
    ],
    signs: [
      'Da ửng đỏ khi ra nắng hoặc rửa nước hơi ấm',
      'Cảm giác châm chích khi thoa sản phẩm mới',
      'Dễ nổi mẩn đỏ nhỏ li ti không có nhân'
    ],
    recommendedIngredients: ['Madecassoside (Rau má)', 'Panthenol (Vitamin B5)', 'Allantoin', 'Oat Extract (Chiết xuất yến mạch)', 'Ectoin'],
    avoidIngredients: ['Hương liệu (Fragrance/Parfum)', 'Essential Oils (tinh dầu thơm)', 'Cồn khô', 'Chất tẩy da chết hạt to'],
    routineTips: [
      'Tối giản chu trình còn 3 bước: Làm sạch dịu nhẹ - Phục hồi - Chống nắng quang phổ rộng',
      'Luôn patch test sản phẩm mới ở vùng da dưới quai hàm trong 48 giờ',
      'Chọn sản phẩm đạt chứng nhận Hypoallergenic và không hương liệu'
    ],
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    accentColor: '#E11D48'
  },
  {
    id: 'normal',
    name: 'Normal Skin',
    vietnameseName: 'Da Thường',
    tagline: 'Duy trì độ ẩm tự nhiên, bảo vệ nét rạng rỡ vốn có',
    description: 'Làn da lý tưởng với sự cân bằng tuyệt hảo giữa lượng dầu và nước. Da mịn màng, đàn hồi tốt và ít khi gặp vấn đề bệnh lý.',
    characteristics: [
      'Độ ẩm cân bằng, không quá khô cũng không quá dầu',
      'Lỗ chân lông nhỏ mịn, kết cấu da đồng đều',
      'Sắc tố da tươi sáng, tuần hoàn máu tốt',
      'Ít khi bị kích ứng hay mụn nghiêm trọng'
    ],
    signs: [
      'Da mềm mịn tự nhiên sau cả ngày hoạt động',
      'Ít bị phản ứng với hầu hết các dòng mỹ phẩm phổ biến'
    ],
    recommendedIngredients: ['Vitamin C (chống oxy hóa)', 'Peptides', 'Hyaluronic Acid', 'Niacinamide'],
    avoidIngredients: ['Sản phẩm tẩy rửa tính kiềm cao làm mất cân bằng tự nhiên'],
    routineTips: [
      'Tập trung vào bước bảo vệ chống lão hóa và duy trì độ ẩm',
      'Sử dụng serum chống oxy hóa vào buổi sáng trước kem chống nắng',
      'Tẩy da chết hóa học nhẹ nhàng 1 lần/tuần để duy trì làn da căng bóng'
    ],
    image: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=800&q=80',
    accentColor: '#059669'
  }
];

export const mockArticles: Article[] = [
  {
    id: 'art-1',
    slug: '5-buoc-xay-dung-chu-trinh-skincare-co-ban',
    title: '5 bước xây dựng chu trình skincare cơ bản cho người mới bắt đầu',
    category: 'skincare',
    categoryName: 'Chăm sóc da',
    excerpt: 'Đừng để vô vàn sản phẩm trên thị trường làm bạn bối rối. Hãy bắt đầu với 5 bước thiết yếu giúp nuôi dưỡng làn da khỏe mạnh từ gốc.',
    coverImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'Thảo My',
      role: 'Dược sĩ & Chuyên viên nghiên cứu sinh học da',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      bio: 'Hơn 6 năm nghiên cứu công thức mỹ phẩm và chia sẻ lối sống làm đẹp khoa học.'
    },
    date: '14 Tháng 9, 2026',
    readTime: '6 phút đọc',
    likes: 428,
    views: 3890,
    tags: ['Skincare cơ bản', 'Người mới bắt đầu', 'Routine', 'Làm sạch'],
    isFeatured: true,
    isDemo: true,
    targetSkinTypes: ['Da dầu', 'Da khô', 'Da hỗn hợp', 'Da nhạy cảm', 'Da thường'],
    skinConcerns: ['Mụn & bít tắc', 'Hàng rào bảo vệ da & Phục hồi'],
    references: [
      {
        title: 'Skin Care Basics & Dermatologist Recommended Daily Routines',
        source: 'American Academy of Dermatology (AAD)',
        year: '2024'
      },
      {
        title: 'The role of moisturization in epidermal barrier function',
        source: 'Journal of Clinical and Aesthetic Dermatology (PubMed Central)',
        year: '2022'
      },
      {
        title: 'Hướng dẫn chăm sóc và phục hồi màng lipid sinh học',
        source: 'Tài liệu đào tạo Bệnh viện Da liễu Trung ương',
        year: '2023'
      }
    ],
    medicalDisclaimer: STANDARD_MEDICAL_DISCLAIMER,
    keyTakeaways: [
      'Làm sạch đúng cách với sữa rửa mặt pH 5.0 - 5.5 là nền tảng của mọi làn da khỏe',
      'Không lạm dụng quá nhiều hoạt chất treatment khi hàng rào biểu bì chưa vững chắc',
      'Kem chống nắng quang phổ rộng là bước bảo vệ da cốt lõi mỗi ngày'
    ],
    highlightQuote: 'Làm đẹp không phải là phủ lên da thật nhiều lớp dưỡng, mà là lắng nghe và thấu hiểu đúng điều làn da đang khao khát.',
    relatedIds: ['art-2', 'art-4', 'art-5'],
    comments: [
      {
        id: 'c-1',
        authorName: 'Hoàng Lan',
        authorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
        date: '14 Tháng 9, 2026',
        content: 'Bài viết phân tích rất dễ hiểu cho người mới bắt đầu. Nhờ bài viết mà mình không còn rửa mặt bằng nước nóng làm khô màng da nữa!',
        likes: 19,
        isDemo: true
      },
      {
        id: 'c-2',
        authorName: 'Minh Trang',
        authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
        date: '14 Tháng 9, 2026',
        content: 'Cho mình hỏi da dầu thì bước kem dưỡng ẩm ban ngày có thể tối giản nếu kem chống nắng đã có sẵn thành phần giữ ẩm không ạ?',
        likes: 8,
        isDemo: true
      }
    ],
    content: [
      'Bước vào thế giới skincare lần đầu tiên giống như lạc vào một mê cung vô tận. Từ toner, essence, ampoule, serum cho đến mặt nạ ngủ, bạn rất dễ bị choáng ngợp và sa đà vào những trào lưu chưa thực sự phù hợp với làn da mình.',
      'Thực chất, các bác sĩ da liễu hàng đầu đều đồng thuận rằng: Một làn da khỏe đẹp bắt đầu từ sự tối giản và tính nhất quán. Dưới đây là 5 bước tối giản nhưng mang lại hiệu quả bền vững nhất theo khuyến nghị y khoa.',
      'Bước 1: Tẩy trang dịu nhẹ. Ngay cả khi bạn không trang điểm, kem chống nắng và bụi mịn PM2.5 trong không khí vẫn bám chặt vào lỗ chân lông. Nước tẩy trang micellar hoặc dầu tẩy trang nhũ hóa kỹ sẽ giúp loại bỏ sạch tạp chất mà không làm tổn hại màng lipid.',
      'Bước 2: Sữa rửa mặt có độ pH 5.0 - 5.5. Hãy từ bỏ ngay những loại xà phòng tạo cảm giác "sạch kin kít". Cảm giác đó chứng tỏ hàng rào bảo vệ tự nhiên của bạn vừa bị tước đoạt. Hãy chọn sản phẩm dịu nhẹ, tạo bọt mịn vừa phải.',
      'Bước 3: Cân bằng & cấp nước tầng nông. Toner hoặc xịt khoáng không cồn giúp khôi phục độ pH tức thì và tạo môi trường ẩm để các dưỡng chất sau thẩm thấu tốt hơn gấp 3 lần.',
      'Bước 4: Khóa ẩm (Moisturizer). Dù bạn thuộc tuýp da dầu hay da khô, nước bên dưới biểu bì luôn có xu hướng bốc hơi qua da (TEWL). Kem dưỡng mỏng nhẹ đóng vai trò như một lớp màng bảo vệ ngăn ngừa sự mất nước vô hình.',
      'Bước 5: Kem chống nắng quang phổ rộng (Ban ngày). Không có kem chống nắng, mọi nỗ lực dưỡng sáng hay chống lão hóa của bạn đều trở nên vô nghĩa. Hãy tạo thói quen thoa kem chống nắng đủ lượng mỗi sáng trước khi ra ngoài.'
    ]
  },
  {
    id: 'art-2',
    slug: 'niacinamide-la-gi-cong-dung-va-cach-su-dung-dung',
    title: 'Niacinamide là gì? Cơ chế sinh học và cách sử dụng chuẩn y khoa',
    category: 'ingredients',
    categoryName: 'Thành phần',
    excerpt: 'Khám phá hoạt chất vàng trong da liễu: từ khả năng điều tiết bã nhờn, củng cố Ceramide tự nhiên đến làm đều màu da mụn.',
    coverImage: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'TS. Lê Anh Thư',
      role: 'Tiến sĩ Hóa Sinh & Chuyên gia Phân tích Hoạt chất',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      bio: 'Tiến sĩ Hóa Sinh, người phân tích minh bạch các thành phần mỹ phẩm phổ biến.'
    },
    date: '12 Tháng 9, 2026',
    readTime: '8 phút đọc',
    likes: 512,
    views: 4520,
    tags: ['Niacinamide', 'Vitamin B3', 'Thành phần', 'Kiểm soát bã nhờn'],
    isFeatured: true,
    isDemo: true,
    targetSkinTypes: ['Da dầu', 'Da hỗn hợp', 'Da nhạy cảm', 'Da thường'],
    skinConcerns: ['Mụn & bít tắc', 'Làm sáng & Mờ thâm', 'Hàng rào bảo vệ da & Phục hồi'],
    references: [
      {
        title: 'Nicotinamide: Mechanisms of action and its topical use in dermatology',
        source: 'PubMed / National Center for Biotechnology Information (PMC6786012)',
        year: '2019'
      },
      {
        title: 'Topical niacinamide reduces yellowing, wrinkling, red blotchiness, and hyperpigmented spots in aging facial skin',
        source: 'International Journal of Cosmetic Science',
        year: '2021'
      },
      {
        title: 'Niacinamide in Dermatology: Evidence-based clinical review',
        source: 'British Journal of Dermatology',
        year: '2023'
      }
    ],
    medicalDisclaimer: STANDARD_MEDICAL_DISCLAIMER,
    keyTakeaways: [
      'Niacinamide là dạng amide hoạt tính của Vitamin B3 rất bền vững với ánh sáng và nhiệt độ',
      'Nồng độ sinh học lý tưởng và an toàn nhất là từ 2% đến 5%, không cần thiết phải dùng 15% - 20%',
      'Tương thích sinh học cao khi kết hợp cùng Hyaluronic Acid, Ceramide và Salicylic Acid'
    ],
    highlightQuote: 'Nồng độ cao hơn không đồng nghĩa với làn da đẹp nhanh hơn; sự tương thích sinh học mới là chìa khóa của sự chuyển biến.',
    relatedIds: ['art-1', 'art-7', 'art-5'],
    comments: [
      {
        id: 'c-3',
        authorName: 'Bảo Trâm',
        authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
        date: '12 Tháng 9, 2026',
        content: 'Trước đây mình từng dùng loại 10% bị đỏ ửng quanh mũi, đọc bài này mình hạ xuống 3% - 4% thì da êm hẳn và kiềm dầu tốt.',
        likes: 14,
        isDemo: true
      }
    ],
    content: [
      'Trong ngành da liễu hiện đại, hiếm có thành phần nào nhận được nhiều nghiên cứu lâm sàng chứng minh hiệu quả toàn diện như Niacinamide (dẫn xuất sinh học của Vitamin B3).',
      'Cơ chế hoạt động tế bào: Khi thẩm thấu vào biểu bì, Niacinamide kích thích sản sinh hai coenzyme quan trọng là NAD+ và NADP+. Hai hợp chất này đóng vai trò sống còn trong việc tái tạo năng lượng tế bào, kích thích nguyên bào sợi tự tổng hợp Ceramide và củng cố hàng rào màng lipid tự nhiên.',
      'Công dụng nổi bật đã kiểm chứng: 1) Điều tiết lượng bã nhờn tiết ra từ tuyến dầu; 2) Ức chế quá trình chuyển melanosome từ tế bào hắc tố melanocyte lên bề mặt sừng, từ đó làm mờ dần vết thâm mụn; 3) Kháng viêm sinh học, hỗ trợ giảm sưng tấy cho làn da có mụn viêm.',
      'Lựa chọn nồng độ khoa học: Nhiều thử nghiệm lâm sàng đối chứng mù đôi cho thấy nồng độ từ 2% đến 5% đã đạt hiệu quả tối ưu. Việc chạy theo các công thức 15% - 20% dễ gây hiện tượng giãn mạch vi thể (flushing), châm chích và kích ứng không đáng có.'
    ]
  },
  {
    id: 'art-3',
    slug: 'huong-dan-chon-kem-chong-nang-cho-da-dau-mun',
    title: 'Những điều cần biết khi lựa chọn kem chống nắng cho da dầu mụn',
    category: 'ingredients',
    categoryName: 'Khoa học chống nắng',
    excerpt: 'Hiểu đúng về các màng lọc UV thế hệ mới, cách đọc chỉ số SPF/PPD và các thành phần kiểm soát dầu không gây bít tắc lỗ chân lông.',
    coverImage: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'Vũ Hải Yến',
      role: 'Chuyên viên Nghiên cứu Công thức Mỹ phẩm',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      bio: 'Chuyên nghiên cứu tính ổn định quang học của màng lọc chống nắng thế hệ mới.'
    },
    date: '10 Tháng 9, 2026',
    readTime: '7 phút đọc',
    likes: 673,
    views: 6120,
    tags: ['Kem chống nắng', 'Màng lọc quang phổ', 'Da dầu mụn', 'Kiến thức da liễu'],
    isFeatured: true,
    isDemo: true,
    targetSkinTypes: ['Da dầu', 'Da hỗn hợp', 'Da nhạy cảm'],
    skinConcerns: ['Mụn & bít tắc', 'Chống lão hóa & Nếp nhăn', 'Làm sáng & Mờ thâm'],
    references: [
      {
        title: 'Ultraviolet Radiation and Global Sun Protection Standards',
        source: 'World Health Organization (WHO)',
        year: '2023'
      },
      {
        title: 'How to decode sunscreen labels: Broad spectrum, SPF, and Water resistance',
        source: 'American Academy of Dermatology (AAD)',
        year: '2024'
      },
      {
        title: 'Photostability and absorption spectra of modern broad-spectrum UVA1 filters',
        source: 'British Journal of Dermatology',
        year: '2023'
      }
    ],
    medicalDisclaimer: STANDARD_MEDICAL_DISCLAIMER,
    keyTakeaways: [
      'Da dầu mụn cần ưu tiên màng lọc bền vững như Mexoryl 400, Tinosorb S, Uvinul A Plus',
      'Tránh các gốc dầu khoáng nặng hoặc este dễ sinh nhân mụn (Isopropyl Myristate, Isopropyl Palmitate)',
      'Tìm kiếm các khoáng chất kiềm dầu sinh học như Silica, Perlite và Zinc PCA'
    ],
    highlightQuote: 'Một tuýp chống nắng tốt nhất là sản phẩm bảo vệ toàn diện quang phổ mà không khiến lỗ chân lông bị ngạt thở.',
    relatedIds: ['art-1', 'art-4', 'art-5'],
    comments: [
      {
        id: 'c-4',
        authorName: 'Đức Huy',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
        date: '11 Tháng 9, 2026',
        content: 'Bài viết phân tích màng lọc rất chi tiết, giúp mình biết cách nhìn bảng thành phần INCI thay vì chỉ nhìn vào quảng cáo.',
        likes: 22,
        isDemo: true
      }
    ],
    content: [
      'Da dầu mụn luôn là thách thức lớn nhất khi thoa kem chống nắng. Nếu công thức quá dày sẽ gây bít tắc sinh mụn ẩn; nếu kiềm dầu quá gắt lại khiến da phản ứng tiết thêm nhiều bã nhờn bù trừ.',
      '1. Hiểu về các màng lọc quang phổ rộng: Tia UVA1 (bước sóng 340-400nm) chiếm tới 75% lượng bức xạ mặt trời chạm tới mặt đất và là tác nhân chính gây phá hủy collagen tầng sâu. Các màng lọc thế hệ mới như Mexoryl 400, Tinosorb S và Uvinul A Plus có độ bền quang học cao, ít gây kích ứng và bảo vệ vượt trội.',
      '2. Thành phần hỗ trợ kiểm soát bã nhờn an toàn: Thay vì chọn sản phẩm có cồn khô nồng độ cao (Alcohol Denat đứng đầu bảng thành phần dễ gây rát da mụn), hãy ưu tiên các thành phần hấp thụ dầu vật lý như Silica, đất sét khoáng Kaolin, hạt Perlite và Kẽm PCA (Zinc PCA).',
      '3. Nguyên tắc làm sạch cuối ngày: Dù kem chống nắng có mỏng nhẹ đến đâu, các phân tử chống nắng và chất tạo màng kháng nước vẫn cần được làm sạch bằng nước tẩy trang hoặc dầu tẩy trang nhũ hóa kỹ trước khi dùng sữa rửa mặt.'
    ]
  },
  {
    id: 'art-4',
    slug: 'lam-the-nao-de-xac-dinh-dung-loai-da-cua-ban',
    title: 'Làm thế nào để xác định đúng loại da của bạn? Hướng dẫn tự test tại nhà',
    category: 'tips',
    categoryName: 'Tips & Mẹo',
    excerpt: 'Phương pháp tự kiểm tra bằng quan sát cảm giác mặt mộc sau 30 phút giúp bạn nhận diện chính xác tuýp da hiện tại của mình.',
    coverImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'Thảo My',
      role: 'Dược sĩ & Chuyên viên nghiên cứu sinh học da',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      bio: 'Chia sẻ kiến thức chăm sóc da dựa trên bằng chứng khoa học.'
    },
    date: '08 Tháng 9, 2026',
    readTime: '5 phút đọc',
    likes: 389,
    views: 3410,
    tags: ['Xác định loại da', 'Test da tại nhà', 'Da dầu', 'Da khô', 'Da nhạy cảm'],
    isFeatured: true,
    isDemo: true,
    targetSkinTypes: ['Da dầu', 'Da khô', 'Da hỗn hợp', 'Da nhạy cảm', 'Da thường'],
    skinConcerns: ['Hàng rào bảo vệ da & Phục hồi', 'Mụn & bít tắc', 'Nhạy cảm & Kích ứng'],
    references: [
      {
        title: 'The Baumann Skin Typing System: A validated questionnaire',
        source: 'Journal of Cosmetic Dermatology',
        year: '2021'
      },
      {
        title: 'Skin type evaluation: sebum secretion and barrier integrity',
        source: 'International Journal of Dermatology',
        year: '2022'
      }
    ],
    medicalDisclaimer: STANDARD_MEDICAL_DISCLAIMER,
    keyTakeaways: [
      'Loại da di truyền có thể biến động do khí hậu, nồng độ hormone và cách dưỡng da',
      'Phân biệt rõ da thiếu nước (tình trạng tạm thời) và da khô (loại da di truyền)',
      'Phương pháp mặt mộc 30 phút là công cụ tự kiểm chứng đơn giản và hiệu quả nhất'
    ],
    highlightQuote: 'Bạn không thể chọn đúng thuốc nếu chẩn đoán sai bệnh; tương tự, bạn không thể chọn đúng mỹ phẩm nếu chưa hiểu làn da mình là ai.',
    relatedIds: ['art-1', 'art-5', 'art-2'],
    comments: [],
    content: [
      'Rất nhiều bạn chi tiêu lãng phí vào mỹ phẩm nhưng càng dùng da càng nổi mụn hoặc sần sùi. Nguyên nhân thường gặp đến từ việc ngộ nhận về loại da của chính mình.',
      'Phương pháp kiểm nghiệm chuẩn "Bare-Face Method":',
      'Bước 1: Rửa mặt thật sạch bằng sữa rửa mặt dịu nhẹ, dùng khăn cotton mềm thấm nhẹ cho ráo.',
      'Bước 2: Để mặt mộc hoàn toàn, không thoa bất kỳ toner, serum hay kem dưỡng nào. Ngồi trong phòng nhiệt độ bình thường (25-27 độ C) trong đúng 30 phút.',
      'Bước 3: Quan sát và chạm tay vào da:',
      '- Nếu toàn bộ mặt bóng nhờn, đổ dầu cả vùng trán, má và cằm: Bạn có làn Da Dầu.',
      '- Nếu da cảm thấy căng rát, hơi châm chích, có vảy nhỏ hoặc nhăn nhẹ khi cười: Bạn có làn Da Khô.',
      '- Nếu vùng mũi và trán có dầu nhưng hai má lại bình thường hoặc khô: Bạn sở hữu làn Da Hỗn Hợp.',
      '- Nếu da dễ bị ửng đỏ, ngứa rát, nổi nốt li ti: Bạn có làn Da Nhạy Cảm.',
      '- Nếu da mềm mại, không đổ dầu quá mức cũng không căng rát: Chúc mừng bạn, bạn sở hữu Da Thường!'
    ]
  },
  {
    id: 'art-5',
    slug: 'phuc-hoi-hang-rao-bao-ve-da-ton-thuong',
    title: 'Bí quyết phục hồi hàng rào bảo vệ da bị tổn thương sau mụn và treatment',
    category: 'skincare',
    categoryName: 'Chăm sóc da',
    excerpt: 'Hàng rào bảo vệ da (Skin Barrier) bị suy yếu là nguyên nhân gây mụn tái phát và nhạy cảm kéo dài. Đây là phác đồ phục hồi 14 ngày.',
    coverImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'TS. Lê Anh Thư',
      role: 'Tiến sĩ Hóa Sinh & Chuyên gia Phân tích Hoạt chất',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      bio: 'Tiến sĩ Hóa Sinh'
    },
    date: '05 Tháng 9, 2026',
    readTime: '6 phút đọc',
    likes: 345,
    views: 2980,
    tags: ['Phục hồi da', 'Skin Barrier', 'Ceramide', 'B5 Panthenol'],
    isFeatured: true,
    isDemo: true,
    targetSkinTypes: ['Da nhạy cảm', 'Da khô', 'Da sau treatment', 'Da dầu'],
    skinConcerns: ['Hàng rào bảo vệ da & Phục hồi', 'Nhạy cảm & Kích ứng', 'Mụn & bít tắc'],
    references: [
      {
        title: 'Skin Barrier Function and the Role of Physiological Lipid Replacement Therapy',
        source: 'PubMed / National Center for Biotechnology Information (PMC5605215)',
        year: '2020'
      },
      {
        title: 'Stratum Corneum Lipids: The Essential Chemistry of Skin Barrier Protection',
        source: 'Dermatology Clinics Review',
        year: '2022'
      }
    ],
    medicalDisclaimer: STANDARD_MEDICAL_DISCLAIMER,
    keyTakeaways: [
      'Hàng rào da gồm tế bào sừng (gạch) và màng lipid (vữa: Ceramide, Cholesterol, Axit béo)',
      'Tạm ngừng toàn bộ acid tẩy da chết và retinoids khi da có biểu hiện châm chích, đỏ rát',
      'Bổ sung Panthenol (B5), Madecassoside và tỷ lệ lipid sinh học 3:1:1 để tái thiết lập màng ẩm'
    ],
    highlightQuote: 'Đừng cố trị mụn trên một nền da đang rách toạc màng bảo vệ; phục hồi hàng rào là điều kiện tiên quyết để da tự chữa lành.',
    relatedIds: ['art-1', 'art-2', 'art-7'],
    comments: [],
    content: [
      'Màng bảo vệ da (Stratum Corneum) giống như một bức tường gạch vữa: tế bào sừng là viên gạch, còn lipids sinh học (gồm Ceramide, Cholesterol và Axit béo tự do) là lớp vữa gắn kết bảo vệ.',
      'Khi lạm dụng acid AHA/BHA, Retinol nồng độ cao hoặc cọ rửa bằng máy rửa mặt quá thô bạo, lớp vữa lipid bị hòa tan. Hậu quả là hơi ẩm thoát ra ngoài (hiện tượng TEWL tăng vọt), trong khi vi khuẩn gây mụn C. acnes và chất gây dị ứng tự do xâm nhập sâu.',
      'Phác đồ phục hồi 14 ngày: 1) Tạm dừng toàn bộ active treatment acid/retinoid; 2) Rửa mặt bằng nước mát hoặc sữa rửa mặt không bọt; 3) Thoa serum chứa Panthenol 5% và Centella Asiatica để làm dịu phản ứng viêm đỏ; 4) Khóa ẩm bằng kem dưỡng phục hồi chứa Ceramide 1, 3, 6-II.'
    ]
  },
  {
    id: 'art-6',
    slug: 'xu-huong-clean-beauty-2026',
    title: 'Xu hướng Clean Beauty 2026: Lựa chọn mỹ phẩm an toàn, minh bạch và bền vững',
    category: 'trends',
    categoryName: 'Xu hướng',
    excerpt: 'Khái niệm Clean Beauty đã vượt ra ngoài việc "không chứa hóa chất" để trở thành chuẩn mực về công thức an toàn và tính nhân văn sinh thái.',
    coverImage: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'Ngọc Hân',
      role: 'Chuyên viên Nghiên cứu Xu hướng Làm đẹp Bền vững',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      bio: 'Nghiên cứu xu hướng làm đẹp bền vững tại Châu Á.'
    },
    date: '02 Tháng 9, 2026',
    readTime: '5 phút đọc',
    likes: 290,
    views: 2310,
    tags: ['Clean Beauty', 'Bền vững', 'Mỹ phẩm thuần chay', 'Xu hướng 2026'],
    isDemo: true,
    targetSkinTypes: ['Da nhạy cảm', 'Da thường', 'Mọi loại da'],
    skinConcerns: ['Nhạy cảm & Kích ứng', 'Chống lão hóa & Nếp nhăn'],
    references: [
      {
        title: 'Safety assessment of cosmetic ingredients and sustainable toxicology standards',
        source: 'Cosmetic Ingredient Review (CIR)',
        year: '2024'
      },
      {
        title: 'Green cosmetics and circular economy in personal care formulations',
        source: 'Sustainable Chemistry and Pharmacy Journal',
        year: '2023'
      }
    ],
    medicalDisclaimer: STANDARD_MEDICAL_DISCLAIMER,
    comments: [],
    content: [
      'Năm 2026 chứng kiến sự trưởng thành của cộng đồng người tiêu dùng mỹ phẩm tại Việt Nam. Không còn tin vào những lời quảng cáo giật gân, người dùng đòi hỏi bằng chứng minh bạch về nguồn gốc thành phần.',
      'Clean Beauty hiện đại tôn vinh sự kết hợp giữa các chiết xuất thực vật hữu cơ và công nghệ lên men vi sinh sinh học (Bio-fermentation), giúp hoạt chất ổn định hơn mà giảm thiểu gánh nặng rác thải lên môi trường tự nhiên.'
    ]
  },
  {
    id: 'art-7',
    slug: 'cach-ket-hop-bha-va-retinol-an-toan',
    title: 'Cách kết hợp BHA và Retinol an toàn mà không lo kích ứng hay breakout',
    category: 'ingredients',
    categoryName: 'Thành phần',
    excerpt: 'Liệu hai hoạt chất nồng độ cao có thể đứng chung trong một chu trình? Quy tắc xen kẽ ngày và đệm ẩm chuẩn y khoa.',
    coverImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'Vũ Hải Yến',
      role: 'Chuyên viên Nghiên cứu Công thức Mỹ phẩm',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
    },
    date: '28 Tháng 8, 2026',
    readTime: '7 phút đọc',
    likes: 412,
    views: 3670,
    tags: ['BHA', 'Retinol', 'Treatment', 'Chống lão hóa'],
    isDemo: true,
    targetSkinTypes: ['Da dầu', 'Da mụn', 'Da hỗn hợp'],
    skinConcerns: ['Mụn & bít tắc', 'Chống lão hóa & Nếp nhăn', 'Làm sáng & Mờ thâm'],
    references: [
      {
        title: 'Retinoids in the treatment of skin aging: an overview of clinical efficacy and safety',
        source: 'Clinical Interventions in Aging (PubMed Central)',
        year: '2021'
      },
      {
        title: 'Salicylic acid as a peeling agent: a comprehensive chemical review',
        source: 'Clinical, Cosmetic and Investigational Dermatology',
        year: '2022'
      }
    ],
    medicalDisclaimer: STANDARD_MEDICAL_DISCLAIMER,
    comments: [],
    content: [
      'Cả BHA (Salicylic Acid) và Retinol đều là những hoạt chất có khả năng tái cấu trúc bề mặt da ngoạn mục. Tuy nhiên, việc thoa chồng trực tiếp hai hoạt chất này trong cùng một buổi tối là sai lầm phổ biến khiến hàng rào biểu bì bị phá hủy.',
      'Nguyên tắc vàng: Sử dụng theo lịch xen kẽ: Tối thứ 2-4-6 dùng BHA nồng độ thấp (1-2%), Tối thứ 3-5-7 dùng Retinol nồng độ khởi đầu (0.2-0.5%), và dành riêng Chủ Nhật chỉ để cấp ẩm phục hồi sâu.'
    ]
  },
  {
    id: 'art-8',
    slug: 'cham-soc-da-tu-ben-trong-dinh-duong-cho-da-khoe',
    title: 'Chăm sóc làn da từ bên trong: Chế độ dinh dưỡng khoa học cho làn da sáng khỏe',
    category: 'lifestyle',
    categoryName: 'Phong cách sống',
    excerpt: 'Mỹ phẩm chỉ tác động lớp biểu bì ngoài cùng; độ rạng rỡ của làn da bắt nguồn mật thiết từ hệ tiêu hóa và dinh dưỡng tế bào.',
    coverImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'Thảo My',
      role: 'Dược sĩ & Chuyên viên nghiên cứu sinh học da',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    date: '24 Tháng 8, 2026',
    readTime: '6 phút đọc',
    likes: 278,
    views: 2190,
    tags: ['Dinh dưỡng', 'Nội sinh', 'Collagen', 'Trà xanh'],
    isDemo: true,
    targetSkinTypes: ['Mọi loại da', 'Da mụn', 'Da lão hóa'],
    skinConcerns: ['Chống lão hóa & Nếp nhăn', 'Làm sáng & Mờ thâm', 'Mụn & bít tắc'],
    references: [
      {
        title: 'The Gut-Skin Axis: The Importance of Microbiota in Dermatology',
        source: 'Microorganisms Journal (PubMed)',
        year: '2023'
      },
      {
        title: 'Dietary intake, advanced glycation end-products, and skin elasticity',
        source: 'Journal of Investigative Dermatology',
        year: '2022'
      }
    ],
    medicalDisclaimer: STANDARD_MEDICAL_DISCLAIMER,
    comments: [],
    content: [
      'Các nghiên cứu về trục Não - Ruột - Da (Gut-Skin Axis) đã chứng minh tình trạng mất cân bằng hệ vi sinh vật đường ruột có thể kích hoạt các phản ứng viêm toàn thân, biểu hiện ra các đợt bùng phát mụn trên mặt.',
      'Bổ sung polyphenol từ trà xanh, axit béo Omega-3 từ cá biển sâu và hạn chế đường tinh luyện (thủ phạm gây phản ứng đứt gãy collagen qua liên kết Glycation) là bước hỗ trợ quan trọng cho mọi phác đồ chăm sóc da.'
    ]
  }
];

// Non-commercial Product & Active Ingredient Guide (Phi thương mại, không có giá bán, không link mua hàng)
export const mockReviews: ReviewProduct[] = [
  {
    id: 'rev-1',
    name: 'Phức hợp Màng lọc chống nắng Mexoryl 400 (Dòng Gel-Cream kiềm dầu)',
    brand: 'Nghiên cứu công thức quang học La Roche-Posay',
    category: 'Màng lọc & Kem chống nắng',
    summary: 'Phân tích cơ chế bảo vệ tia cực tím bước sóng siêu dài (380-400nm) và đặc tính kiểm soát bã nhờn.',
    detailedReview: 'Công thức ứng dụng màng lọc độc quyền Mexoryl 400 cùng hợp chất hấp thu bã nhờn Airlicium. Kết cấu gel-cream tạo màng ráo nhanh trên da, hạn chế bóng dầu trong môi trường nhiệt đới nhưng cần thao tác thoa dứt khoát để tránh hiện tượng vón màng.',
    tags: ['Mexoryl 400', 'Quang phổ rộng', 'Không hương liệu', 'Kiểm soát bã nhờn'],
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80',
    skinTypes: ['Da dầu', 'Da hỗn hợp thiên dầu', 'Da dễ nổi mụn'],
    keyIngredients: ['Mexoryl 400 (Drometrizole Trisiloxane)', 'Airlicium (Silica Silylate)', 'Nước khoáng nhiệt làm dịu'],
    usageTips: [
      'Nên dưỡng ẩm bằng lớp mỏng trước đó 5 phút để tránh xung đột chất tạo màng',
      'Thoa vỗ nhẹ theo từng vùng nhỏ, không chà xát miết vòng tròn'
    ],
    pros: [
      'Phổ hấp thụ UV bảo vệ đến bước sóng 400nm (vùng tia UVA1 dài gây sạm nám sâu)',
      'Không chứa cồn khô nồng độ cao gây rát da mụn',
      'Độ bám kháng nước và mồ hôi tốt'
    ],
    cons: [
      'Khô nhanh trên bề mặt nên cần thao tác tán kem tương đối nhanh tay',
      'Không phù hợp với người có nền da đang bong tróc mạnh do thiếu ẩm'
    ],
    texture: 'Gel-cream mịn nhẹ, khô thoáng',
    verdict: 'Tài liệu tham khảo công thức phù hợp cho người có làn da dầu mụn cần chống nắng quang phổ rộng.',
    references: [
      {
        title: 'Photoprotection beyond 380 nm: Clinical evaluation of a novel UV filter',
        source: 'Photodermatology, Photoimmunology & Photomedicine',
        year: '2023'
      }
    ],
    isDemo: true
  },
  {
    id: 'rev-2',
    name: 'Serum Chống Nắng Làm Dịu Chiết Xuất Rau Má Madagascar (Centella & Hyaluronic)',
    brand: 'Nghiên cứu công thức Skin1004',
    category: 'Màng lọc & Kem chống nắng',
    summary: 'Giải mã công thức kết hợp giữa màng lọc hữu cơ thế hệ mới và chiết xuất thảo mộc làm dịu.',
    detailedReview: 'Sản phẩm minh họa cho xu hướng kem chống nắng lai dưỡng ẩm. Sử dụng các màng lọc hóa học thế hệ mới (Uvinul A Plus, Tinosorb M, Iscotrizinol) giúp kết cấu mỏng nhẹ tựa giọt nước, không để lại màng trắng bệch.',
    tags: ['Centella Asiatica', 'Hyaluronic Acid', 'Mỏng nhẹ', 'Làm dịu da'],
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
    skinTypes: ['Da khô', 'Da nhạy cảm', 'Da hỗn hợp thiên khô'],
    keyIngredients: ['Chiết xuất Rau má Centella Asiatica', 'Hyaluronic Acid đa phân tử', 'Niacinamide'],
    usageTips: [
      'Có thể dùng thay thế bước kem dưỡng ban ngày cho da hỗn hợp',
      'Cần thoa lại sau mỗi 2-3 giờ nếu hoạt động ngoài trời'
    ],
    pros: [
      'Độ ẩm mượt tự nhiên, không gây cảm giác bí bách',
      'Không gây cay mắt, phù hợp với vùng da quanh mắt',
      'Độ dung nạp tốt trên làn da nhạy cảm'
    ],
    cons: [
      'Khả năng kiềm dầu chỉ ở mức trung bình với làn da đổ nhiều dầu vùng chữ T',
      'Không có khả năng chống nước cao cho hoạt động bơi lội'
    ],
    texture: 'Serum nước lỏng mịn, thẩm thấu nhanh',
    verdict: 'Ví dụ tiêu biểu cho dạng chống nắng cấp ẩm dịu nhẹ, hạn chế tối đa nguy cơ kích ứng cho da nhạy cảm.',
    references: [
      {
        title: 'Centella asiatica in cosmetology: active compounds and therapeutic applications',
        source: 'Postepy Dermatologii i Alergologii',
        year: '2022'
      }
    ],
    isDemo: true
  },
  {
    id: 'rev-3',
    name: 'Dung Dịch Salicylic Acid (BHA) 2% Dạng Lỏng (Tẩy Tế Bào Chết Hóa Học)',
    brand: "Nghiên cứu công thức Paula's Choice",
    category: 'Tẩy tế bào chết & Hoạt chất',
    summary: 'Cơ chế thâm nhập gốc dầu để làm sạch bã nhờn cô đặc trong nang lông và giảm bít tắc.',
    detailedReview: 'Salicylic Acid là beta-hydroxy acid tan trong lipid, cho phép thâm nhập sâu qua màng dầu tự nhiên vào lỗ chân lông. Công thức dạng lỏng với pH từ 3.2 - 3.8 giúp hoạt chất ở dạng tự do hoạt động tối ưu.',
    tags: ['Salicylic Acid 2%', 'Làm sạch nang lông', 'pH chuẩn', 'Thông thoáng da'],
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80',
    skinTypes: ['Da dầu', 'Da hỗn hợp', 'Da có sợi bã nhờn & mụn ẩn'],
    keyIngredients: ['Salicylic Acid 2%', 'Chiết xuất Trà xanh Camellia Sinensis', 'Methylpropanediol'],
    usageTips: [
      'Bắt đầu với tần suất 1-2 lần/tuần vào buổi tối',
      'Luôn dưỡng ẩm phục hồi và chống nắng kỹ vào ban ngày'
    ],
    pros: [
      'Hỗ trợ giải phóng nhân mụn đầu đen và sợi bã nhờn hiệu quả',
      'Cải thiện độ mịn màng bề mặt sừng',
      'Công thức ổn định không chứa chất tạo mùi'
    ],
    cons: [
      'Có thể gây khô rát hoặc hiện tượng đẩy mụn (purging) trong 2-4 tuần đầu',
      'Chống chỉ định với người có tiền sử dị ứng Salicylate (như Aspirin)'
    ],
    texture: 'Dung dịch lỏng trong suốt hơi trơn nhẹ',
    verdict: 'Hoạt chất tiêu chuẩn vàng trong điều trị bít tắc nang lông, cần sử dụng thận trọng và kiên trì.',
    references: [
      {
        title: 'Salicylic acid peels for the treatment of acne vulgaris in Asian patients',
        source: 'Dermatologic Surgery Journal',
        year: '2021'
      }
    ],
    isDemo: true
  },
  {
    id: 'rev-4',
    name: 'Sữa Rửa Mặt Củng Cố Hàng Rào Lipid Với 3 Loại Ceramide Thiết Yếu',
    brand: 'Nghiên cứu công thức CeraVe',
    category: 'Làm sạch & Bảo vệ màng da',
    summary: 'Phân tích công nghệ phóng thích chậm MVE và vai trò của Ceramide 1, 3, 6-II trong làm sạch.',
    detailedReview: 'Khác với các chất tẩy rửa chứa xà phòng có độ pH kiềm cao làm phá vỡ màng axit bảo vệ da, công thức này sử dụng chất hoạt động bề mặt dịu nhẹ kết hợp tỷ lệ lipid sinh học tương đồng biểu bì.',
    tags: ['Ceramides', 'pH 5.5', 'Không bọt gắt', 'Bảo vệ màng ẩm'],
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    skinTypes: ['Da khô', 'Da nhạy cảm', 'Da thường', 'Da sau treatment'],
    keyIngredients: ['Ceramide NP, AP, EOP', 'Hyaluronic Acid', 'Cholesterol & Phytosphingosine'],
    usageTips: [
      'Mát-xa nhẹ nhàng trên da ẩm trong 30-60 giây',
      'Rửa sạch bằng nước mát hoặc nước ấm nhẹ (không dùng nước nóng)'
    ],
    pros: [
      'Bảo toàn 100% độ ẩm tự nhiên, không gây cảm giác căng rát',
      'Độ pH chuẩn sinh học 5.5',
      'Không chứa hương liệu hay cồn khô'
    ],
    cons: [
      'Không thể làm sạch lớp trang điểm đậm hoặc kem chống nắng kháng nước mạnh (cần tẩy trang trước)'
    ],
    texture: 'Dạng lotion mềm mịn, không bọt',
    verdict: 'Giải pháp làm sạch an toàn cho làn da đang bị suy yếu hoặc kích ứng màng lipid.',
    references: [
      {
        title: 'Ceramides and skin function: Clinical perspectives on barrier repair',
        source: 'American Journal of Clinical Dermatology',
        year: '2022'
      }
    ],
    isDemo: true
  },
  {
    id: 'rev-5',
    name: 'Serum Cấp Nước Hyaluronic Acid Đa Tầng Phân Tử & Malachite',
    brand: 'Nghiên cứu công thức Torriden',
    category: 'Dưỡng ẩm & Tái cấp nước',
    summary: 'Cơ chế thẩm thấu phân tầng của 5 kích thước phân tử Hyaluronic Acid vào các lớp biểu bì.',
    detailedReview: 'Axit Hyaluronic trọng lượng phân tử cao giữ nước trên bề mặt, trong khi các đoạn phân tử cực nhỏ thẩm thấu xuống tầng sâu hơn để duy trì độ trương nở của tế bào sừng.',
    tags: ['Hyaluronic Acid 5 tầng', 'Làm dịu', 'Phục hồi', 'Dạng lỏng thấm nhanh'],
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80',
    skinTypes: ['Mọi loại da', 'Da dầu thiếu nước', 'Da nhạy cảm'],
    keyIngredients: ['5 loại phân tử Hyaluronic Acid', 'Chiết xuất khoáng Malachite', 'Allantoin & D-Panthenol'],
    usageTips: [
      'Thoa trực tiếp khi nền da còn ẩm sau bước toner',
      'Luôn dùng kem dưỡng mỏng nhẹ khóa ẩm để tránh hiện tượng hút ẩm ngược'
    ],
    pros: [
      'Thấm sâu nhanh chóng, không nhờn rít hay bí nang lông',
      'Hỗ trợ hạ nhiệt và làm dịu cơn kích ứng tức thì',
      'Bảng thành phần tối giản, không hương liệu'
    ],
    cons: [
      'Trong môi trường máy lạnh quá khô hoặc mùa hanh khô, nếu không khóa ẩm kỹ có thể gây cảm giác khô căng bề mặt'
    ],
    texture: 'Nước serum lỏng nhẹ màu xanh ngọc tự nhiên',
    verdict: 'Sản phẩm củng cố khả năng ngậm nước tế bào an toàn cho làn da dầu thiếu nước.',
    references: [
      {
        title: 'Hyaluronic acid: A key molecule in skin aging and hydration',
        source: 'Dermato-Endocrinology Journal',
        year: '2021'
      }
    ],
    isDemo: true
  },
  {
    id: 'rev-6',
    name: 'Nước Cân Bằng Không Hương Liệu Cấp Ẩm Thực Vật (Supple Preparation Unscented)',
    brand: 'Nghiên cứu công thức Klairs',
    category: 'Nước hoa hồng & Cân bằng pH',
    summary: 'Phân tích vai trò của Lipidure, Beta-Glucan và Axit Amin trong việc phục hồi độ ẩm sau rửa mặt.',
    detailedReview: 'Phiên bản loại bỏ hoàn toàn các loại tinh dầu thực vật dễ gây dị ứng (Essential Oils), tập trung vào các chất hút ẩm sinh học lành tính giúp làm mềm lớp tế bào sừng và chuẩn bị cho các bước dưỡng tiếp theo.',
    tags: ['Không hương liệu', 'Beta-Glucan', 'Cân bằng pH', 'Lành tính'],
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80',
    skinTypes: ['Da nhạy cảm', 'Da khô', 'Da hỗn hợp'],
    keyIngredients: ['Sodium Hyaluronate', 'Chiết xuất Rau má Centella', 'Beta-Glucan & Lipidure'],
    usageTips: [
      'Có thể vỗ nhẹ 2-3 lớp bằng tay để cấp ẩm sâu mà không cần dùng bông cotton chà xát'
    ],
    pros: [
      'Làm dịu cảm giác khô căng sau khi rửa mặt',
      'Không mùi hương nhân tạo, độ lành tính cao',
      'Tương thích tốt khi phối hợp cùng các hoạt chất treatment khác'
    ],
    cons: [
      'Kết cấu sánh nhẹ nên thời gian ráo mặt lâu hơn toner dạng xịt khoáng thuần nước'
    ],
    texture: 'Dung dịch sệt trong suốt, êm mượt',
    verdict: 'Bước đệm cấp ẩm cơ bản, an toàn cho làn da dễ kích ứng với hương liệu mỹ phẩm.',
    references: [
      {
        title: 'Beta-glucan in dermatology: Healing, anti-aging and moisturizing mechanisms',
        source: 'Journal of Cosmetic Dermatology',
        year: '2022'
      }
    ],
    isDemo: true
  }
];

export const mockDiscussions: Discussion[] = [
  {
    id: 'disc-1',
    title: 'Skincare cho người mới: Xin lời khuyên về thâm đỏ (PIE) sau mụn cho da hỗn hợp?',
    author: {
      name: 'Phương Linh',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
      badge: 'Thành viên mới'
    },
    category: 'Skincare cho người mới',
    content: 'Chào cả nhà Lumia! Em vừa trải qua đợt mụn viêm nhưng giờ để lại rất nhiều vết thâm đỏ (PIE) ở hai bên má. Em đã duy trì làm sạch dịu nhẹ và kem chống nắng rồi, giờ em muốn tìm hiểu thêm về Azelaic Acid hoặc Niacinamide để hỗ trợ co mạch mờ đỏ. Nhờ các bạn chia sẻ kinh nghiệm khoa học với ạ!',
    date: '2 giờ trước',
    repliesCount: 14,
    views: 290,
    likes: 38,
    tags: ['Da hỗn hợp', 'Thâm đỏ PIE', 'Azelaic Acid', 'Niacinamide'],
    isSolved: true,
    isDemo: true,
    replies: [
      {
        id: 'rep-1',
        authorName: 'Dược sĩ Thu Hà',
        authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
        authorBadge: 'Chuyên môn Dược học',
        date: '1 giờ trước',
        content: 'Chào bạn Linh! Với thâm đỏ sau mụn (PIE - nguyên nhân từ giãn mao mạch vi thể sau viêm), Azelaic Acid nồng độ 10-15% là hoạt chất được chứng minh lâm sàng có tác dụng kháng viêm và co mạch hiệu quả. Bạn có thể phối hợp thêm Niacinamide 3-4% để củng cố màng da nhé!',
        likes: 18,
        isDemo: true
      },
      {
        id: 'rep-2',
        authorName: 'Minh Thư',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
        authorBadge: 'Thành viên cộng đồng',
        date: '45 phút trước',
        content: 'Mình từng bị tình trạng này, điều quan trọng nhất là che chắn chống nắng thật kỹ mỗi sáng vì tia UV làm chậm quá trình tự phục hồi của vi mạch máu.',
        likes: 9,
        isDemo: true
      }
    ]
  },
  {
    id: 'disc-2',
    title: 'Da dầu, mụn: Phân biệt hiện tượng đẩy mụn (Purging) và kích ứng bùng phát (Breakout)?',
    author: {
      name: 'Quang Khải',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      badge: 'Thành viên tích cực'
    },
    category: 'Da dầu, mụn',
    content: 'Mình dùng BHA 2% được 4 tuần, tuần dùng 2 lần nhưng mụn mủ vẫn tiếp tục nổi ở những vùng trước đây chưa từng có nhân mụn. Làm sao để phân biệt chính xác đâu là Purging sinh học và đâu là Breakout do kích ứng vậy mọi người?',
    date: '5 giờ trước',
    repliesCount: 22,
    views: 540,
    likes: 45,
    tags: ['BHA', 'Purging vs Breakout', 'Da dầu mụn', 'Kiến thức y khoa'],
    isPinned: true,
    isDemo: true,
    replies: [
      {
        id: 'rep-3',
        authorName: 'Vũ Hải Yến',
        authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
        authorBadge: 'Biên tập viên Lumia',
        date: '4 giờ trước',
        content: 'Chào Khải! Quy tắc y khoa để phân biệt: Purging chỉ xảy ra ở NHỮNG VÙNG VỐN ĐÃ CÓ MỤN ẨN và thường khô cồi sau 2-4 tuần. Nếu mụn nổi ở vùng da trước đó hoàn toàn mịn màng hoặc kéo dài quá 6 tuần, đó là dấu hiệu của Breakout kích ứng. Bạn nên ngưng BHA ngay và phục hồi màng ẩm.',
        likes: 27,
        isDemo: true
      }
    ]
  },
  {
    id: 'disc-3',
    title: 'Da khô và nhạy cảm: Làm thế nào để duy trì độ ẩm khi thời tiết giao mùa hanh khô?',
    author: {
      name: 'Bảo Ngọc',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
      badge: 'Thành viên'
    },
    category: 'Da khô và nhạy cảm',
    content: 'Cứ đến mùa hanh khô là vùng khóe miệng và cánh mũi của mình bị bong vảy trắng và rát khi rửa mặt. Xin kinh nghiệm kết hợp dầu dưỡng thực vật như Squalane cùng kem Ceramide của các bạn trong nhóm!',
    date: '1 ngày trước',
    repliesCount: 19,
    views: 410,
    likes: 31,
    tags: ['Da khô', 'Ceramide', 'Squalane', 'Khí hậu hanh khô'],
    isDemo: true,
    replies: []
  },
  {
    id: 'disc-4',
    title: 'Thành phần mỹ phẩm: Peptide có thực sự thay thế được Retinol trong chống lão hóa?',
    author: {
      name: 'Thanh Hương',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
      badge: 'Thành viên'
    },
    category: 'Thành phần mỹ phẩm',
    content: 'Mình đang mang thai nên phải ngưng hoàn toàn các phái sinh Retinoids. Nghe nói các chuỗi Peptide (như Đồng Peptide Copper Tripeptide-1 và Matrixyl) an toàn cho mẹ bầu và hỗ trợ tăng sinh collagen. Có ai nghiên cứu tài liệu lâm sàng về vấn đề này chưa ạ?',
    date: '2 ngày trước',
    repliesCount: 18,
    views: 470,
    likes: 41,
    tags: ['Peptide', 'Chống lão hóa', 'Mẹ bầu an toàn', 'Retinol thay thế'],
    isDemo: true,
    replies: []
  },
  {
    id: 'disc-5',
    title: 'Kinh nghiệm chăm sóc: Những thói quen đơn giản giúp giảm bít tắc mụn hàng ngày',
    author: {
      name: 'Hải An',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
      badge: 'Thành viên chia sẻ'
    },
    category: 'Kinh nghiệm làm đẹp',
    content: 'Sau nhiều năm cải thiện mụn, mình nhận ra mỹ phẩm chỉ đóng góp một phần. 3 thói quen sinh hoạt tạo nên sự thay đổi lớn: Giặt vỏ gối bằng nước nóng 2 lần/tuần, vệ sinh màn hình điện thoại bằng cồn 70 độ mỗi tối, và tuyệt đối không sờ tay lên cằm khi làm việc.',
    date: '3 ngày trước',
    repliesCount: 34,
    views: 890,
    likes: 96,
    tags: ['Thói quen tốt', 'Vệ sinh da', 'Trị mụn', 'Chia sẻ chân thật'],
    isPinned: true,
    isDemo: true,
    replies: []
  }
];

export const mockNotifications: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Thảo luận mới',
    message: 'Dược sĩ Thu Hà vừa trả lời câu hỏi về Azelaic Acid trong cộng đồng.',
    time: '30 phút trước',
    read: false,
    type: 'discussion'
  },
  {
    id: 'notif-2',
    title: 'Tài liệu kiến thức mới',
    message: 'Bài viết "5 bước skincare cơ bản" đã được cập nhật thêm nguồn y khoa từ AAD.',
    time: '2 giờ trước',
    read: false,
    type: 'article'
  }
];
