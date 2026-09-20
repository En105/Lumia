export type NavPage = 
  | 'home' 
  | 'articles' 
  | 'article-detail' 
  | 'skin-knowledge' 
  | 'reviews' 
  | 'discussions' 
  | 'about' 
  | 'contact'
  | 'privacy'
  | 'terms';

export type ArticleCategory = 
  | 'all' 
  | 'skincare' 
  | 'makeup' 
  | 'review' 
  | 'ingredients' 
  | 'tips' 
  | 'trends' 
  | 'lifestyle';

export interface ReferenceItem {
  title: string;
  source: string;
  year?: string;
  url?: string;
}

export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}

export interface Comment {
  id: string;
  authorName: string;
  authorAvatar: string;
  date: string;
  content: string;
  likes: number;
  userLiked?: boolean;
  isDemo?: boolean;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: ArticleCategory;
  categoryName: string;
  excerpt: string;
  content: string[];
  coverImage: string;
  author: Author;
  date: string;
  readTime: string;
  likes: number;
  views: number;
  tags: string[];
  comments: Comment[];
  isFeatured?: boolean;
  keyTakeaways?: string[];
  highlightQuote?: string;
  relatedIds?: string[];
  references?: ReferenceItem[];
  medicalDisclaimer?: string;
  targetSkinTypes?: string[];
  skinConcerns?: string[];
  isDemo?: boolean;
}

export interface SkinType {
  id: string;
  name: string;
  vietnameseName: string;
  tagline: string;
  description: string;
  characteristics: string[];
  signs: string[];
  recommendedIngredients: string[];
  avoidIngredients: string[];
  routineTips: string[];
  image: string;
  accentColor: string;
}

export interface ReviewProduct {
  id: string;
  name: string;
  brand: string;
  category: string;
  rating?: number;
  reviewCount?: number;
  summary: string;
  detailedReview: string;
  tags: string[];
  image: string;
  skinTypes: string[];
  pros: string[];
  cons: string[];
  texture: string;
  verdict: string;
  priceRange?: string;
  keyIngredients?: string[];
  usageTips?: string[];
  references?: ReferenceItem[];
  isDemo?: boolean;
}

export interface DiscussionReply {
  id: string;
  authorName: string;
  authorAvatar: string;
  authorBadge?: string;
  date: string;
  content: string;
  likes: number;
  userLiked?: boolean;
  isDemo?: boolean;
}

export interface Discussion {
  id: string;
  title: string;
  author: {
    name: string;
    avatar: string;
    badge: string;
  };
  category: string;
  content: string;
  date: string;
  repliesCount: number;
  views: number;
  likes: number;
  userLiked?: boolean;
  tags: string[];
  isSolved?: boolean;
  isPinned?: boolean;
  replies: DiscussionReply[];
  isDemo?: boolean;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'comment' | 'discussion' | 'article';
}
