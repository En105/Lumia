import { Article, SkinType, ReviewProduct, Discussion, NotificationItem } from '../types';

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
      'Vỗ toner dưỡng ẩm tầng lớp (7-skin method nhẹ nhàng) khi da còn ẩm',
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
    image: 'https://images.unsplash.com/photo-1512290900672-1f4a9b5f5439?auto=format&fit=crop&w=800&q=80',
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
      'Tối giản chu trình còn 3 bước: Làm sạch dịu nhẹ - Phục hồi - Chống nắng vật lý',
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
      'Tẩy da chết hóa học AHA 1 lần/tuần để duy trì làn da căng bóng'
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
      role: 'Beauty Editor & Dược sĩ Mỹ phẩm',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      bio: 'Hơn 6 năm nghiên cứu công thức mỹ phẩm và chia sẻ lối sống làm đẹp khoa học.'
    },
    date: '14 Tháng 9, 2026',
    readTime: '6 phút đọc',
    likes: 428,
    views: 3890,
    tags: ['Skincare cơ bản', 'Người mới bắt đầu', 'Routine', 'Làm sạch'],
    isFeatured: true,
    keyTakeaways: [
      'Làm sạch đúng cách là nền tảng của mọi làn da không mụn',
      'Đừng lạm dụng quá nhiều hoạt chất treatment khi da chưa đủ ẩm',
      'Kem chống nắng là bước chống lão hóa quan trọng nhất mỗi ngày'
    ],
    highlightQuote: 'Làm đẹp không phải là phủ lên da thật nhiều lớp dưỡng, mà là lắng nghe và thấu hiểu đúng điều làn da đang khao khát.',
    relatedIds: ['art-2', 'art-4', 'art-5'],
    comments: [
      {
        id: 'c-1',
        authorName: 'Hoàng Lan',
        authorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
        date: '14 Tháng 9, 2026',
        content: 'Bài viết rất hữu ích cho người mới tập tành như mình. Nhờ Lumia mà mình biết không nên rửa mặt bằng nước quá ấm!',
        likes: 19
      },
      {
        id: 'c-2',
        authorName: 'Minh Trang',
        authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
        date: '14 Tháng 9, 2026',
        content: 'Cho mình hỏi da dầu thì bước kem dưỡng ẩm ban ngày có thể bỏ qua và dùng luôn kem chống nắng có dưỡng được không ạ?',
        likes: 8
      }
    ],
    content: [
      'Bước vào thế giới skincare lần đầu tiên giống như lạc vào một mê cung vô tận. Từ toner, essence, ampoule, serum cho đến mặt nạ ngủ, bạn rất dễ bị choáng ngợp và chi tiêu lãng phí vào những món đồ chưa thực sự cần thiết.',
      'Thực chất, các bác sĩ da liễu hàng đầu đều đồng thuận rằng: Một làn da khỏe đẹp bắt đầu từ sự đơn giản và nhất quán. Dưới đây là 5 bước tối giản nhưng mang lại hiệu quả bền vững nhất.',
      'Bước 1: Tẩy trang dịu nhẹ. Ngay cả khi bạn không trang điểm, kem chống nắng và bụi mịn PM2.5 trong không khí vẫn bám chặt vào lỗ chân lông. Nước tẩy trang micellar hoặc sáp tẩy trang nhũ hóa kỹ sẽ giúp loại bỏ sạch tạp chất mà không làm tổn hại màng lipid.',
      'Bước 2: Sữa rửa mặt có độ pH 5.0 - 5.5. Hãy từ bỏ ngay những loại sữa rửa mặt tạo cảm giác "sạch kin kít". Cảm giác đó chứng tỏ hàng rào bảo vệ tự nhiên của bạn vừa bị tước đoạt. Hãy chọn sản phẩm dịu nhẹ, tạo bọt mịn vừa phải.',
      'Bước 3: Cân bằng & cấp nước tầng nông. Toner hoặc xịt khoáng không cồn giúp khôi phục độ pH tức thì và tạo môi trường ẩm để các dưỡng chất sau thẩm thấu tốt hơn gấp 3 lần.',
      'Bước 4: Khóa ẩm (Moisturizer). Dù bạn thuộc tuýp da dầu hay da khô, nước bên dưới biểu bì luôn có xu hướng bốc hơi qua da. Kem dưỡng mỏng nhẹ đóng vai trò như một lớp màng bảo vệ ngăn ngừa sự mất nước vô hình.',
      'Bước 5: Kem chống nắng quang phổ rộng (Ban ngày). Không có kem chống nắng, mọi nỗ lực dưỡng sáng hay chống lão hóa của bạn đều trở nên vô nghĩa. Hãy tạo thói quen thoa kem chống nắng đủ 2 ngón tay mỗi sáng trước khi ra ngoài 20 phút.'
    ]
  },
  {
    id: 'art-2',
    slug: 'niacinamide-la-gi-cong-dung-va-cach-su-dung-dung',
    title: 'Niacinamide là gì? Công dụng và cách sử dụng đúng chuẩn khoa học',
    category: 'ingredients',
    categoryName: 'Thành phần',
    excerpt: 'Khám phá hoạt chất vàng trong làng chăm sóc da: từ khả năng thu nhỏ lỗ chân lông, làm đều màu da đến phục hồi hàng rào ẩm.',
    coverImage: 'https://images.unsplash.com/photo-1608248597359-57e0344d416b?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'TS. Lê Anh Thư',
      role: 'Chuyên gia Hóa mỹ phẩm',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      bio: 'Tiến sĩ Hóa Sinh, người phân tích minh bạch các thành phần mỹ phẩm phổ biến.'
    },
    date: '12 Tháng 9, 2026',
    readTime: '8 phút đọc',
    likes: 512,
    views: 4520,
    tags: ['Niacinamide', 'Vitamin B3', 'Thành phần', 'Thu nhỏ lỗ chân lông'],
    isFeatured: true,
    keyTakeaways: [
      'Niacinamide là dạng amide hoạt tính của Vitamin B3 rất bền vững với ánh sáng và nhiệt độ',
      'Nồng độ lý tưởng cho người mới là từ 2% đến 5%, không nhất thiết phải 10% - 20%',
      'Hoàn toàn có thể kết hợp an toàn cùng Hyaluronic Acid, Retinol và Salicylic Acid'
    ],
    highlightQuote: 'Nồng độ cao hơn không đồng nghĩa với làn da đẹp nhanh hơn; sự tương thích sinh học mới là chìa khóa của sự chuyển biến.',
    relatedIds: ['art-1', 'art-7', 'art-5'],
    comments: [
      {
        id: 'c-3',
        authorName: 'Bảo Trâm',
        authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
        date: '12 Tháng 9, 2026',
        content: 'Trước dùng 10% bị ngứa đỏ, đọc bài này mình hạ xuống 3% thì da êm ru và giảm dầu rõ rệt!',
        likes: 14
      }
    ],
    content: [
      'Trong ngành công nghiệp mỹ phẩm hiện đại, hiếm có thành phần nào nhận được nhiều nghiên cứu lâm sàng chứng minh hiệu quả toàn diện như Niacinamide (Vitamin B3).',
      'Cơ chế hoạt động của Niacinamide: Khi thẩm thấu vào tế bào da, Niacinamide kích thích sản sinh hai coenzyme quan trọng là NAD+ và NADP+. Hai hợp chất này đóng vai trò sống còn trong việc tái tạo năng lượng tế bào, kích thích tổng hợp Ceramide tự nhiên.',
      'Công dụng nổi bật: 1) Kiểm soát dầu thừa và hỗ trợ thu nhỏ lỗ chân lông quang học; 2) Ức chế chuyển melanosome từ tế bào hắc tố lên biểu bì, làm mờ thâm mụn; 3) Tăng sinh Collagen loại I giúp tăng độ đàn hồi; 4) Kháng viêm mạnh mẽ cho da mụn trứng cá.',
      'Chọn nồng độ phù hợp: Nghiên cứu của đại học Tokyo cho thấy nồng độ 2% - 5% đã phát huy tối đa lợi ích cải thiện màng ẩm và giảm tăng sắc tố mà không gây đỏ ngứa do giãn mạch. Tránh chạy theo trào lưu 15% - 20% nếu da bạn nhạy cảm.'
    ]
  },
  {
    id: 'art-3',
    slug: 'review-5-loai-kem-chong-nang-duoc-yeu-thich-hien-nay',
    title: 'Review 5 loại kem chống nắng được yêu thích hiện nay: Đâu là chân ái?',
    category: 'review',
    categoryName: 'Review mỹ phẩm',
    excerpt: 'Phân tích chi tiết màng lọc chống nắng, độ kiềm dầu, cảm giác trên da và khả năng chống trôi thực tế trong khí hậu nóng ẩm Việt Nam.',
    coverImage: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'Vũ Hải Yến',
      role: 'Senior Skincare Reviewer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      bio: 'Trải nghiệm hơn 100 loại kem chống nắng qua các mùa và khí hậu khác nhau.'
    },
    date: '10 Tháng 9, 2026',
    readTime: '7 phút đọc',
    likes: 673,
    views: 6120,
    tags: ['Kem chống nắng', 'Review chân thật', 'Màng lọc quang phổ', 'Da dầu mụn'],
    isFeatured: true,
    keyTakeaways: [
      'Màng lọc quang phổ rộng Tinosorb S, Mexoryl 400 và Uvinul A Plus bảo vệ vượt trội tia UVA dài',
      'Độ vón cục (pilling) thường do xung đột giữa chất tạo màng polymer với kem dưỡng lót bên dưới',
      'Nên chọn finish ráo mịn cho mùa hè oi bức'
    ],
    highlightQuote: 'Kem chống nắng tốt nhất không phải là tuýp đắt tiền nhất, mà là tuýp bạn sẵn sàng bôi đủ lượng và bôi đều đặn mỗi ngày.',
    relatedIds: ['art-1', 'art-4'],
    comments: [
      {
        id: 'c-4',
        authorName: 'Đức Huy',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
        date: '11 Tháng 9, 2026',
        content: 'Bài review rất khách quan, phân tích rõ ưu nhược điểm chứ không hề tâng bốc nhãn hàng.',
        likes: 22
      }
    ],
    content: [
      'Tìm được một tuýp kem chống nắng không vón, không bóng nhẫy và không làm cay mắt là hành trình gian nan của bất kỳ tín đồ làm đẹp nào.',
      'Trong bài viết này, Lumia đem đến bài kiểm tra thực nghiệm 5 đại diện tiêu biểu nhất phân khúc hiện nay, đánh giá trực tiếp trên da mộc trong môi trường văn phòng máy lạnh kết hợp di chuyển ngoài trời 35 độ C.',
      'Sản phẩm 1: La Roche-Posay Anthelios UVMune 400 Oil Control Gel-Cream. Với màng lọc độc quyền Mexoryl 400 chặn tia UVA bước sóng 380-400nm, chất kem kiềm dầu đến 6 tiếng mà không để lại vệt trắng bệt.',
      'Sản phẩm 2: Skin1004 Madagascar Centella Hyalu-Cica Water-Fit Sun Serum. Chất gel nước mát lạnh như thoa serum cấp ẩm, lý tưởng cho da hỗn hợp và da khô, lớp finish mọng nước cực kỳ tự nhiên.',
      'Sản phẩm 3: Anessa Perfect UV Sunscreen Skincare Milk. Khả năng chống nước và mồ hôi hàng đầu nhờ công nghệ Thermo Booster và Aqua Booster EX.',
      'Lời khuyên chung: Hãy thoa kem chống nắng 15 phút trước khi ra ngoài và đừng quên thoa cả vùng cổ và mang tai!'
    ]
  },
  {
    id: 'art-4',
    slug: 'lam-the-nao-de-xac-dinh-dung-loai-da-cua-ban',
    title: 'Làm thế nào để xác định đúng loại da của bạn? Hướng dẫn tự test tại nhà',
    category: 'tips',
    categoryName: 'Tips & Mẹo',
    excerpt: 'Phương pháp tự kiểm tra bằng giấy thấm dầu và quan sát cảm giác mộc sau 30 phút giúp bạn nhận diện chính xác tuýp da hiện tại.',
    coverImage: 'https://images.unsplash.com/photo-1512290900672-1f4a9b5f5439?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'Thảo My',
      role: 'Beauty Editor & Dược sĩ Mỹ phẩm',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      bio: 'Chia sẻ kiến thức chăm sóc da dựa trên bằng chứng khoa học.'
    },
    date: '08 Tháng 9, 2026',
    readTime: '5 phút đọc',
    likes: 389,
    views: 3410,
    tags: ['Xác định loại da', 'Test da tại nhà', 'Da dầu', 'Da khô', 'Da nhạy cảm'],
    isFeatured: true,
    keyTakeaways: [
      'Loại da di truyền có thể thay đổi theo tuổi tác, thời tiết và hormone cơ thể',
      'Đừng nhầm lẫn giữa da thiếu nước (tình trạng da tạm thời) và da khô bẩm sinh (loại da di truyền)',
      'Thử nghiệm "Mặt mộc 30 phút" là cách đơn giản và chính xác nhất tại nhà'
    ],
    highlightQuote: 'Bạn không thể chọn đúng thuốc nếu chẩn đoán sai bệnh; tương tự, bạn không thể chọn đúng mỹ phẩm nếu chưa hiểu làn da mình là ai.',
    relatedIds: ['art-1', 'art-5', 'art-2'],
    comments: [],
    content: [
      'Rất nhiều bạn mua những hũ kem đắt tiền nhưng càng dùng da càng nổi mụn hoặc sần sùi. Nguyên nhân 80% đến từ việc xác định sai loại da.',
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
      role: 'Chuyên gia Hóa mỹ phẩm',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      bio: 'Tiến sĩ Hóa Sinh'
    },
    date: '05 Tháng 9, 2026',
    readTime: '6 phút đọc',
    likes: 345,
    views: 2980,
    tags: ['Phục hồi da', 'Skin Barrier', 'Ceramide', 'B5 Panthenol'],
    comments: [],
    content: [
      'Màng bảo vệ da giống như bức tường gạch vữa: tế bào sừng là viên gạch, còn lipids (Ceramide, Cholesterol, Axit béo tự do) là lớp vữa liên kết.',
      'Khi lạm dụng acid AHA/BHA, Retinol nồng độ cao hoặc cọ rửa quá mức, lớp vữa bị rửa trôi, khiến vi khuẩn xâm nhập và nước bốc hơi nhanh chóng.',
      'Giải pháp: Tạm dừng toàn bộ active treatment trong ít nhất 2 tuần. Bổ sung các sản phẩm có tỷ lệ sinh học 3:1:1 (Ceramide : Cholesterol : Fatty acids) cùng Vitamin B5 để thúc đẩy tăng sinh tế bào mới.'
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
      role: 'Beauty Trend Researcher',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      bio: 'Nghiên cứu xu hướng làm đẹp bền vững tại Châu Á.'
    },
    date: '02 Tháng 9, 2026',
    readTime: '5 phút đọc',
    likes: 290,
    views: 2310,
    tags: ['Clean Beauty', 'Bền vững', 'Mỹ phẩm thuần chay', 'Xu hướng 2026'],
    comments: [],
    content: [
      'Năm 2026 chứng kiến sự trưởng thành của cộng đồng người tiêu dùng mỹ phẩm tại Việt Nam. Không còn tin vào những lời quảng cáo vô căn cứ, người dùng đòi hỏi bằng chứng minh bạch về nguồn gốc thành phần.',
      'Clean Beauty hiện đại tôn vinh sự kết hợp giữa các chiết xuất thực vật hữu cơ và công nghệ lên men vi sinh sinh học (Bio-fermentation), giúp hoạt chất ổn định và giảm thiểu gánh nặng lên môi trường biển.'
    ]
  },
  {
    id: 'art-7',
    slug: 'cach-ket-hop-bha-va-retinol-an-toan',
    title: 'Cách kết hợp BHA và Retinol an toàn mà không lo kích ứng hay breakout',
    category: 'ingredients',
    categoryName: 'Thành phần',
    excerpt: 'Liệu hai "ngôi sao" quyền lực có thể đứng chung trong một chu trình? Quy tắc xen kẽ ngày và đệm ẩm chuẩn y khoa.',
    coverImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'Vũ Hải Yến',
      role: 'Senior Skincare Reviewer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
    },
    date: '28 Tháng 8, 2026',
    readTime: '7 phút đọc',
    likes: 412,
    views: 3670,
    tags: ['BHA', 'Retinol', 'Treatment', 'Chống lão hóa'],
    comments: [],
    content: [
      'Cả BHA (Salicylic Acid) và Retinol đều là những thành phần biến đổi làn da ngoạn mục. Tuy nhiên, việc thoa chồng trực tiếp hai hoạt chất này cùng lúc là sai lầm phổ biến khiến hàng triệu màng da bị cháy rát.',
      'Giải pháp chuẩn: Sử dụng theo lịch xen kẽ: Tối thứ 2-4-6 dùng BHA nhẹ, Tối thứ 3-5-7 dùng Retinol, và Chủ Nhật chỉ tập trung phục hồi cấp ẩm sâu.'
    ]
  },
  {
    id: 'art-8',
    slug: 'cham-soc-da-tu-ben-trong-dinh-duong-cho-da-khoe',
    title: 'Chăm sóc làn da từ bên trong: Chế độ dinh dưỡng khoa học cho làn da sáng khỏe',
    category: 'lifestyle',
    categoryName: 'Phong cách sống',
    excerpt: 'Mỹ phẩm chỉ tác động 30% lớp biểu bì ngoài cùng; 70% độ rạng rỡ của làn da bắt nguồn từ đường ruột và dinh dưỡng tế bào.',
    coverImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'Thảo My',
      role: 'Beauty Editor & Dược sĩ Mỹ phẩm',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    date: '24 Tháng 8, 2026',
    readTime: '6 phút đọc',
    likes: 278,
    views: 2190,
    tags: ['Dinh dưỡng', 'Nội sinh', 'Collagen', 'Trà xanh'],
    comments: [],
    content: [
      'Các nghiên cứu về trục Não - Ruột - Da (Gut-Skin Axis) đã chứng minh tình trạng viêm mạn tính ở đường ruột biểu hiện trực tiếp qua các cơn bùng phát mụn trên mặt.',
      'Bổ sung polyphenol từ trà xanh, axit béo Omega-3 từ cá béo và hạn chế đường tinh luyện (gây hiện tượng đứt gãy Collagen qua phản ứng Glycation) là bước dưỡng da thông minh nhất bạn có thể làm cho bản thân.'
    ]
  }
];

export const mockReviews: ReviewProduct[] = [
  {
    id: 'rev-1',
    name: 'Anthelios UVMune 400 Oil Control Gel-Cream',
    brand: 'La Roche-Posay',
    category: 'Kem chống nắng',
    rating: 4.8,
    reviewCount: 342,
    summary: 'Kem chống nắng kiểm soát dầu vượt trội với màng lọc phổ rộng Mexoryl 400 đỉnh cao.',
    detailedReview: 'Sản phẩm giải quyết triệt để nỗi lo bóng dầu cho khí hậu Việt Nam. Kết cấu mỏng nhẹ, tệp nhanh vào da trong 30 giây mà không để lại vệt trắng hay bết dính. Khả năng kiềm dầu duy trì tốt suốt 5-6 tiếng làm việc.',
    tags: ['Đáng thử', 'Phù hợp da dầu', 'Được yêu thích'],
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80',
    skinTypes: ['Da dầu', 'Da hỗn hợp thiên dầu', 'Da mụn'],
    pros: ['Màng lọc tia cực tím tối tân', 'Khô ráo tức thì', 'Không gây cay mắt', 'Kháng nước tốt'],
    cons: ['Khô khá nhanh nên cần tán thao tác dứt khoát', 'Giá thành phân khúc cao cấp'],
    texture: 'Gel-cream mịn nhẹ, khô thoáng',
    verdict: 'Lựa chọn số 1 cho người có làn da dầu mụn cần chống nắng bảo vệ toàn diện.',
    priceRange: '450.000đ - 520.000đ'
  },
  {
    id: 'rev-2',
    name: 'Madagascar Centella Hyalu-Cica Water-Fit Sun Serum SPF50+',
    brand: 'Skin1004',
    category: 'Kem chống nắng',
    rating: 4.9,
    reviewCount: 489,
    summary: 'Chất serum mỏng nhẹ như nước, cấp ẩm mọng màng và dịu da nhạy cảm tức thì.',
    detailedReview: 'Nếu bạn ghét cảm giác nặng mặt của kem chống nắng truyền thống thì đây là vị cứu tinh. Chứa chiết xuất rau má vùng Madagascar kết hợp phức hợp Hyaluronic Acid, lên da êm dịu, tạo hiệu ứng căng bóng tự nhiên.',
    tags: ['Được yêu thích', 'Phù hợp da nhạy cảm', 'Căng bóng'],
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
    skinTypes: ['Da khô', 'Da nhạy cảm', 'Da hỗn hợp'],
    pros: ['Cảm giác thoa như kem dưỡng nhẹ tênh', 'Không vón cục dưới lớp makeup', 'Dịu đỏ và cấp ẩm sâu'],
    cons: ['Kiềm dầu mức độ trung bình với da cực dầu'],
    texture: 'Serum nước mướt mịn, thấm sâu',
    verdict: 'Tuýp kem chống nắng quốc dân cho phong cách no-makeup và da nhạy cảm.',
    priceRange: '320.000đ - 380.000đ'
  },
  {
    id: 'rev-3',
    name: 'Skin Perfecting 2% BHA Liquid Exfoliant',
    brand: "Paula's Choice",
    category: 'Tẩy tế bào chết',
    rating: 4.7,
    reviewCount: 620,
    summary: 'Huyền thoại làm sạch sâu lỗ chân lông, đẩy lùi mụn ẩn và làm mịn màng bề mặt da ráp.',
    detailedReview: 'Salicylic Acid 2% gốc dầu len lỏi vào sâu từng nang lông để hòa tan bã nhờn cô đặc. Sử dụng đều đặn 2-3 lần/tuần sẽ thấy vùng cánh mũi giảm hẳn sợi bã nhờn và mụn đầu đen.',
    tags: ['Đáng thử', 'Thu nhỏ lỗ chân lông', 'Được yêu thích'],
    image: 'https://images.unsplash.com/photo-1608248597359-57e0344d416b?auto=format&fit=crop&w=600&q=80',
    skinTypes: ['Da dầu', 'Da hỗn hợp', 'Da mụn đầu đen'],
    pros: ['Hiệu quả mụn ẩn rõ rệt sau 4 tuần', 'Lỗ chân lông thông thoáng', 'Công thức ổn định cao'],
    cons: ['Cần dưỡng ẩm kỹ để tránh bong tróc', 'Cần làm quen từ tần suất thấp'],
    texture: 'Dung dịch lỏng trong suốt hơi trơn nhẹ',
    verdict: 'Biểu tượng kinh điển không thể thiếu nếu bạn muốn dọn sạch mụn ẩn và dầu thừa.',
    priceRange: '800.000đ - 950.000đ'
  },
  {
    id: 'rev-4',
    name: 'Hydrating Cleanser Barriere Protectrice',
    brand: 'CeraVe',
    category: 'Sữa rửa mặt',
    rating: 4.8,
    reviewCount: 512,
    summary: 'Sữa rửa mặt dịu lành chứa 3 loại Ceramide thiết yếu, bảo vệ trọn vẹn màng ẩm.',
    detailedReview: 'Công nghệ MVE giải phóng dưỡng chất chậm giúp nuôi dưỡng hàng rào da ngay trong lúc làm sạch. Không bọt gắt, không làm khô căng, cực kỳ êm dịu cho những ngày da đang treatment rát buốt.',
    tags: ['Phục hồi màng ẩm', 'Phù hợp da khô', 'Đáng thử'],
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    skinTypes: ['Da khô', 'Da nhạy cảm', 'Da thường', 'Da sau treatment'],
    pros: ['Bảo toàn 100% độ ẩm tự nhiên', 'Không hương liệu, cồn khô', 'Dung tích lớn kinh tế'],
    cons: ['Khả năng làm sạch lớp makeup đậm còn hạn chế, cần tẩy trang trước'],
    texture: 'Dạng kem lỏng mịn như lotion',
    verdict: 'Chân ái cho những ai đang đau đầu vì da bị khô rát do sửa rửa mặt thông thường.',
    priceRange: '350.000đ - 420.000đ'
  },
  {
    id: 'rev-5',
    name: 'DIVE-IN Low Molecule Hyaluronic Acid Serum',
    brand: 'Torriden',
    category: 'Serum dưỡng ẩm',
    rating: 4.9,
    reviewCount: 390,
    summary: 'Serum cấp nước 5 tầng Hyaluronic Acid với phân tử siêu nhỏ thẩm thấu cực nhanh.',
    detailedReview: 'Màu xanh pastel tự nhiên của Malachite Extract làm dịu mắt, kết cấu lỏng nhẹ thấm vào da chỉ sau 10 giây. Không hề dính nhờn rít, tạo độ căng bóng ẩm mượt như ngậm nước cả ngày dài.',
    tags: ['Cấp ẩm sâu', 'Được yêu thích', 'Làm dịu da'],
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80',
    skinTypes: ['Mọi loại da', 'Da dầu thiếu nước', 'Da nhạy cảm'],
    pros: ['Cực kỳ nhẹ thoáng không bí bách', 'Giảm nhiệt độ da tức thì', 'Bảng thành phần sạch'],
    cons: ['Cần kết hợp kem khóa ẩm ở vùng khí hậu lạnh khô'],
    texture: 'Nước serum lỏng nhẹ màu xanh ngọc dịu mắt',
    verdict: 'Serum cấp nước đa năng được yêu thích nhất tại các giải thưởng Beauty Châu Á.',
    priceRange: '380.000đ - 460.000đ'
  },
  {
    id: 'rev-6',
    name: 'Supple Preparation Unscented Toner',
    brand: 'Klairs',
    category: 'Nước hoa hồng (Toner)',
    rating: 4.8,
    reviewCount: 425,
    summary: 'Nước hoa hồng không mùi, giàu Lipidure và Axit Amin cấp ẩm tức thì sau bước rửa mặt.',
    detailedReview: 'Phiên bản không mùi (Unscented) loại bỏ hoàn toàn tinh dầu thơm, phù hợp tuyệt đối cho làn da dễ kích ứng nhất. Kết cấu hơi sệt nhẹ cho độ trượt êm ái khi vỗ lên mặt.',
    tags: ['Không hương liệu', 'Phù hợp da nhạy cảm', 'Lành tính'],
    image: 'https://images.unsplash.com/photo-1512290900672-1f4a9b5f5439?auto=format&fit=crop&w=600&q=80',
    skinTypes: ['Da nhạy cảm', 'Da khô', 'Da hỗn hợp'],
    pros: ['Làm dịu cơn căng kích tức thì', 'Cân bằng độ pH chuẩn xác', 'Dễ dàng layer nhiều lớp'],
    cons: ['Thấm hơi lâu hơn toner dạng nước khoáng'],
    texture: 'Dung dịch sệt trong suốt, êm mượt',
    verdict: 'Chai nước cân bằng cơ bản nhưng mang lại cảm giác an tâm tuyệt đối mỗi ngày.',
    priceRange: '280.000đ - 340.000đ'
  }
];

export const mockDiscussions: Discussion[] = [
  {
    id: 'disc-1',
    title: 'Skincare cho người mới: Xin routine tối giản trị thâm đỏ sau mụn cho da hỗn hợp?',
    author: {
      name: 'Phương Linh',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
      badge: 'Thành viên mới'
    },
    category: 'Skincare cho người mới',
    content: 'Chào cả nhà Lumia ạ! Em vừa hết đợt mụn viêm nhưng giờ để lại rất nhiều vết thâm đỏ (PIE) ở 2 bên má. Em đang dùng sữa rửa mặt CeraVe và kem chống nắng rồi, giờ em muốn thêm 1 serum trị thâm thì nên dùng Niacinamide hay Azelaic Acid ạ? Em cảm ơn mọi người nhiều!',
    date: '2 giờ trước',
    repliesCount: 14,
    views: 290,
    likes: 38,
    tags: ['Da hỗn hợp', 'Thâm đỏ PIE', 'Azelaic Acid', 'Niacinamide'],
    isSolved: true,
    replies: [
      {
        id: 'rep-1',
        authorName: 'Dược sĩ Thu Hà',
        authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
        authorBadge: 'Chuyên gia Lumia',
        date: '1 giờ trước',
        content: 'Chào Linh nhé! Với vết thâm đỏ (PIE - do giãn mạch máu vi thể sau viêm), Azelaic Acid nồng độ 10-15% là lựa chọn số 1 vì có tác dụng kháng viêm và co mạch rất tốt. Em có thể dùng kết hợp cùng Niacinamide 4-5% để tăng hiệu quả phục hồi nhé!',
        likes: 18
      },
      {
        id: 'rep-2',
        authorName: 'Minh Thư',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
        authorBadge: 'Skincare Lover',
        date: '45 phút trước',
        content: 'Mình từng bị giống bạn, vote dùng Derma Forte hoặc Skinoren nhé, nhớ chống nắng kỹ là 3-4 tuần thấy mờ hẳn luôn á!',
        likes: 9
      }
    ]
  },
  {
    id: 'disc-2',
    title: 'Da dầu, mụn: Có ai dùng BHA bị đẩy mụn ồ ạt mà không thấy dừng không?',
    author: {
      name: 'Quang Khải',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      badge: 'Thành viên tích cực'
    },
    category: 'Da dầu, mụn',
    content: 'Mình dùng BHA 2% được 6 tuần rồi, tuần dùng 2 lần nhưng mụn mủ vẫn tiếp tục nổi ở những vùng trước đây chưa từng có mụn. Như vậy là đang Purging hay là bị Breakout kích ứng vậy mọi người? Nên dừng hay tiếp tục ạ?',
    date: '5 giờ trước',
    repliesCount: 22,
    views: 540,
    likes: 45,
    tags: ['BHA', 'Purging vs Breakout', 'Da dầu mụn', 'Tư vấn'],
    isPinned: true,
    replies: [
      {
        id: 'rep-3',
        authorName: 'Vũ Hải Yến',
        authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
        authorBadge: 'Moderator',
        date: '4 giờ trước',
        content: 'Khải ơi, quy tắc vàng để phân biệt: Nếu mụn nổi ở vùng TRƯỚC ĐÂY CHƯA TỪNG CÓ MỤN và kéo dài quá 6 tuần, đó là BREAKOUT chứ không phải purging. Bạn nên ngưng BHA ngay lập tức và tập trung làm dịu bằng B5/Centella nhé!',
        likes: 27
      }
    ]
  },
  {
    id: 'disc-3',
    title: 'Da khô và nhạy cảm: Review kem dưỡng Ceramide phục hồi đỉnh nhất mọi người từng thử?',
    author: {
      name: 'Bảo Ngọc',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
      badge: 'Thành viên'
    },
    category: 'Da khô và nhạy cảm',
    content: 'Mùa thu đông sắp tới da mình khô tróc dữ dội quanh cánh mũi và miệng. Nhờ mọi người tư vấn hũ kem dưỡng phục hồi chân ái không chứa cồn hay hương liệu với ạ!',
    date: '1 ngày trước',
    repliesCount: 19,
    views: 410,
    likes: 31,
    tags: ['Da khô', 'Ceramide', 'Dưỡng ẩm', 'Mùa đông'],
    replies: []
  },
  {
    id: 'disc-4',
    title: 'Mỹ phẩm makeup: Tip đánh nền mỏng mịn không mốc cho da dầu nhiều lỗ chân lông?',
    author: {
      name: 'Trang Nguyễn',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80',
      badge: 'Beauty Creator'
    },
    category: 'Mỹ phẩm makeup',
    content: 'Cứ đánh kem nền hoặc cushion được 2 tiếng là mũi mình bị đọng phấn vào lỗ chân lông trắng xóa. Mình đã dưỡng ẩm và dùng kem lót kiềm dầu rồi mà vẫn bị. Có bí quyết gì xử lý không các nàng?',
    date: '2 ngày trước',
    repliesCount: 16,
    views: 380,
    likes: 29,
    tags: ['Makeup', 'Đánh nền', 'Lỗ chân lông to', 'Cushion'],
    replies: []
  },
  {
    id: 'disc-5',
    title: 'Review sản phẩm: Có bạn nào thử kem chống nắng Skin1004 mới chưa?',
    author: {
      name: 'Hà My',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      badge: 'Thành viên mới'
    },
    category: 'Review sản phẩm',
    content: 'Thấy rần rần trên các diễn đàn làm đẹp, chất serum lỏng mướt. Không biết có nâng tông trắng bệch không ạ? Da ngăm dùng được không?',
    date: '3 ngày trước',
    repliesCount: 25,
    views: 620,
    likes: 54,
    tags: ['Skin1004', 'Review', 'Kem chống nắng', 'Da ngăm'],
    replies: []
  },
  {
    id: 'disc-6',
    title: 'Thành phần mỹ phẩm: Peptide có thực sự thay thế được Retinol trong chống lão hóa?',
    author: {
      name: 'Thanh Hương',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
      badge: 'Thành viên VIP'
    },
    category: 'Thành phần mỹ phẩm',
    content: 'Mình đang mang thai nên phải ngưng hoàn toàn Retinoids. Nghe nói Matrixyl 3000 và Đồng Peptide (Copper Tripeptide-1) an toàn cho mẹ bầu và chống nhăn tốt. Có ai trải nghiệm thực tế chưa cho mình xin review với ạ!',
    date: '4 ngày trước',
    repliesCount: 18,
    views: 470,
    likes: 41,
    tags: ['Peptide', 'Chống lão hóa', 'Mẹ bầu', 'Retinol thay thế'],
    replies: []
  },
  {
    id: 'disc-7',
    title: 'Chăm sóc tóc: Routine phục hồi tóc tẩy xơ rối và da đầu dầu bết sau 1 ngày',
    author: {
      name: 'Yến Nhi',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
      badge: 'Thành viên'
    },
    category: 'Chăm sóc tóc',
    content: 'Da đầu mình siêu nhiều dầu nhưng ngọn tóc tẩy lại khô như rơm. Đổi sang dầu gội kiềm dầu thì ngọn gãy rụng, dùng dầu dưỡng thì da đầu bết dí. Cứu mình với!',
    date: '5 ngày trước',
    repliesCount: 11,
    views: 310,
    likes: 22,
    tags: ['Chăm sóc tóc', 'Tóc tẩy', 'Da đầu dầu'],
    replies: []
  },
  {
    id: 'disc-8',
    title: 'Kinh nghiệm làm đẹp: Thói quen nhỏ nhưng thay đổi hoàn toàn làn da của mình',
    author: {
      name: 'Hải An',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
      badge: 'Skincare Lover'
    },
    category: 'Kinh nghiệm làm đẹp',
    content: 'Sau 4 năm vật lộn với mụn bọc, điều giúp da mình cải thiện 80% không phải serum triệu bạc mà là: Giặt vỏ gối 3 ngày/lần, không bao giờ đưa tay lên mặt sờ nặn, và uống đủ 2.5 lít nước ấm mỗi ngày. Muốn chia sẻ động lực đến các bạn đang nản lòng!',
    date: '1 tuần trước',
    repliesCount: 34,
    views: 890,
    likes: 96,
    tags: ['Thói quen tốt', 'Động lực', 'Trị mụn', 'Lối sống đẹp'],
    isPinned: true,
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
    title: 'Bài viết nổi bật tuần',
    message: 'Bài viết "5 bước skincare cơ bản" vừa đạt mốc 3,500 lượt đọc.',
    time: '2 giờ trước',
    read: false,
    type: 'article'
  },
  {
    id: 'notif-3',
    title: 'Đánh giá mới',
    message: 'Kem chống nắng La Roche-Posay Anthelios vừa có thêm 12 đánh giá mới.',
    time: '1 ngày trước',
    read: true,
    type: 'comment'
  }
];
