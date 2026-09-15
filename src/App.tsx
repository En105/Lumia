import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Home Sections
import { HeroSection } from './components/home/HeroSection';
import { ExploreLumiaSection } from './components/home/ExploreLumiaSection';
import { FeaturedArticlesSection } from './components/home/FeaturedArticlesSection';
import { SkinKnowledgeSection } from './components/home/SkinKnowledgeSection';
import { ReviewsSection } from './components/home/ReviewsSection';
import { CommunitySection } from './components/home/CommunitySection';
import { NewsletterSection } from './components/home/NewsletterSection';

// Dedicated Pages
import { ArticlesPage } from './components/pages/ArticlesPage';
import { ArticleDetailPage } from './components/pages/ArticleDetailPage';
import { SkinKnowledgePage } from './components/pages/SkinKnowledgePage';
import { ReviewsPage } from './components/pages/ReviewsPage';
import { DiscussionsPage } from './components/pages/DiscussionsPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';

// Modals
import { ReviewDetailModal } from './components/modals/ReviewDetailModal';
import { SkinQuizModal } from './components/modals/SkinQuizModal';
import { SkinTypeDetailModal } from './components/modals/SkinTypeDetailModal';
import { CreateDiscussionModal } from './components/modals/CreateDiscussionModal';
import { SearchModal } from './components/modals/SearchModal';

// Mock Data & Types
import { 
  mockArticles, 
  mockSkinTypes, 
  mockReviews, 
  mockDiscussions,
  mockNotifications
} from './data/mockData';
import { Article, ReviewProduct, SkinType, Discussion, DiscussionReply, NavPage, NotificationItem } from './types';

export default function App() {
  // Navigation State
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Data State
  const [articles, setArticles] = useState<Article[]>(mockArticles);
  const [reviews] = useState<ReviewProduct[]>(mockReviews);
  const [skinTypes] = useState<SkinType[]>(mockSkinTypes);
  const [discussions, setDiscussions] = useState<Discussion[]>(mockDiscussions);
  const [notifications, setNotifications] = useState<NotificationItem[]>(mockNotifications);

  // User interactions: Liked articles & discussions
  const [likedArticleIds, setLikedArticleIds] = useState<Set<string>>(new Set(['art-1']));
  const [likedDiscussionIds, setLikedDiscussionIds] = useState<Set<string>>(new Set());

  // Modal States
  const [selectedReviewProduct, setSelectedReviewProduct] = useState<ReviewProduct | null>(null);
  const [selectedSkinTypeModal, setSelectedSkinTypeModal] = useState<SkinType | null>(null);
  const [isSkinQuizOpen, setIsSkinQuizOpen] = useState(false);
  const [isCreateDiscussionOpen, setIsCreateDiscussionOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Scroll to top on page change
  const navigateTo = (page: NavPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Article selection handler
  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
    setCurrentPage('article-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle Like Article
  const handleToggleLikeArticle = (articleId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLikedArticleIds((prev) => {
      const next = new Set(prev);
      if (next.has(articleId)) {
        next.delete(articleId);
      } else {
        next.add(articleId);
      }
      return next;
    });
  };

  // Toggle Like Discussion
  const handleToggleLikeDiscussion = (discussionId: string) => {
    setDiscussions((prev) =>
      prev.map((d) => {
        if (d.id === discussionId) {
          const isLiked = likedDiscussionIds.has(discussionId);
          return {
            ...d,
            likes: isLiked ? d.likes - 1 : d.likes + 1,
          };
        }
        return d;
      })
    );
    setLikedDiscussionIds((prev) => {
      const next = new Set(prev);
      if (next.has(discussionId)) {
        next.delete(discussionId);
      } else {
        next.add(discussionId);
      }
      return next;
    });
  };

  // Add new discussion
  const handleCreateDiscussion = (newDiscussion: Discussion) => {
    setDiscussions([newDiscussion, ...discussions]);
    navigateTo('discussions');
  };

  // Add reply to discussion
  const handleAddReplyToDiscussion = (discussionId: string, reply: DiscussionReply) => {
    setDiscussions((prev) =>
      prev.map((d) => {
        if (d.id === discussionId) {
          return {
            ...d,
            repliesCount: d.repliesCount + 1,
            replies: [...d.replies, reply],
          };
        }
        return d;
      })
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF8] text-[#2D2422] selection:bg-[#EED5CC] selection:text-[#341F1A]">
      {/* Global Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSkinQuiz={() => setIsSkinQuizOpen(true)}
        onOpenCreateDiscussion={() => setIsCreateDiscussionOpen(true)}
        notifications={notifications}
        onMarkNotificationsAsRead={() => {
          setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
        }}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <div className="animate-in fade-in duration-200">
            {/* 1. Hero Banner */}
            <HeroSection
              onExploreArticles={() => navigateTo('articles')}
              onOpenSkinQuiz={() => setIsSkinQuizOpen(true)}
            />

            {/* 2. Explore Lumia 4 Pillars */}
            <ExploreLumiaSection
              onSelectPillar={(pillar) => {
                if (pillar === 'knowledge') navigateTo('articles');
                else if (pillar === 'reviews') navigateTo('reviews');
                else if (pillar === 'community') navigateTo('discussions');
                else if (pillar === 'skintype') navigateTo('skin-knowledge');
              }}
            />

            {/* 3. Featured Articles */}
            <FeaturedArticlesSection
              articles={articles}
              onSelectArticle={handleSelectArticle}
              onViewAllArticles={() => navigateTo('articles')}
              onToggleLikeArticle={handleToggleLikeArticle}
              likedArticleIds={likedArticleIds}
            />

            {/* 4. Skin Knowledge (5 Skin Types) */}
            <SkinKnowledgeSection
              skinTypes={skinTypes}
              onSelectSkinType={(skin) => setSelectedSkinTypeModal(skin)}
              onOpenSkinQuiz={() => setIsSkinQuizOpen(true)}
              onViewAllSkinKnowledge={() => navigateTo('skin-knowledge')}
            />

            {/* 5. Product Reviews */}
            <ReviewsSection
              reviews={reviews}
              onSelectReview={(product) => setSelectedReviewProduct(product)}
              onViewAllReviews={() => navigateTo('reviews')}
            />

            {/* 6. Community Forum */}
            <CommunitySection
              discussions={discussions}
              onSelectDiscussion={() => navigateTo('discussions')}
              onViewAllDiscussions={() => navigateTo('discussions')}
              onOpenCreateDiscussion={() => setIsCreateDiscussionOpen(true)}
              onToggleLikeDiscussion={handleToggleLikeDiscussion}
            />

            {/* 7. Newsletter Subscription */}
            <NewsletterSection />
          </div>
        )}

        {/* Dedicated Articles List Page */}
        {currentPage === 'articles' && (
          <div className="animate-in fade-in duration-200">
            <ArticlesPage
              articles={articles}
              onSelectArticle={handleSelectArticle}
              onToggleLikeArticle={handleToggleLikeArticle}
              likedArticleIds={likedArticleIds}
            />
          </div>
        )}

        {/* Dedicated Article Detail Page */}
        {currentPage === 'article-detail' && selectedArticle && (
          <div className="animate-in fade-in duration-200">
            <ArticleDetailPage
              article={selectedArticle}
              allArticles={articles}
              onNavigate={navigateTo}
              onSelectArticle={handleSelectArticle}
              onToggleLikeArticle={handleToggleLikeArticle}
              isLiked={likedArticleIds.has(selectedArticle.id)}
            />
          </div>
        )}

        {/* Dedicated Skin Knowledge Page */}
        {currentPage === 'skin-knowledge' && (
          <div className="animate-in fade-in duration-200">
            <SkinKnowledgePage
              skinTypes={skinTypes}
              onSelectSkinType={(skin) => setSelectedSkinTypeModal(skin)}
              onOpenSkinQuiz={() => setIsSkinQuizOpen(true)}
            />
          </div>
        )}

        {/* Dedicated Reviews Page */}
        {currentPage === 'reviews' && (
          <div className="animate-in fade-in duration-200">
            <ReviewsPage
              reviews={reviews}
              onSelectReview={(product) => setSelectedReviewProduct(product)}
            />
          </div>
        )}

        {/* Dedicated Discussions/Community Page */}
        {currentPage === 'discussions' && (
          <div className="animate-in fade-in duration-200">
            <DiscussionsPage
              discussions={discussions}
              onOpenCreateDiscussion={() => setIsCreateDiscussionOpen(true)}
              onAddReplyToDiscussion={handleAddReplyToDiscussion}
              onToggleLikeDiscussion={handleToggleLikeDiscussion}
            />
          </div>
        )}

        {/* Dedicated About Page */}
        {currentPage === 'about' && (
          <div className="animate-in fade-in duration-200">
            <AboutPage onNavigate={navigateTo} />
          </div>
        )}

        {/* Dedicated Contact Page */}
        {currentPage === 'contact' && (
          <div className="animate-in fade-in duration-200">
            <ContactPage />
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Product Review Detail Modal */}
      <ReviewDetailModal
        product={selectedReviewProduct}
        onClose={() => setSelectedReviewProduct(null)}
      />

      {/* Skin Type In-depth Modal */}
      <SkinTypeDetailModal
        skinType={selectedSkinTypeModal}
        onClose={() => setSelectedSkinTypeModal(null)}
        onNavigateToArticles={() => navigateTo('articles')}
      />

      {/* 4-Step Skin Quiz Modal */}
      <SkinQuizModal
        isOpen={isSkinQuizOpen}
        onClose={() => setIsSkinQuizOpen(false)}
        skinTypes={skinTypes}
        onSelectSkinType={(skin) => setSelectedSkinTypeModal(skin)}
      />

      {/* Create Discussion Modal */}
      <CreateDiscussionModal
        isOpen={isCreateDiscussionOpen}
        onClose={() => setIsCreateDiscussionOpen(false)}
        onCreateDiscussion={handleCreateDiscussion}
      />

      {/* Global Real-time Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        articles={articles}
        reviews={reviews}
        discussions={discussions}
        onSelectArticle={handleSelectArticle}
        onSelectReview={(product) => setSelectedReviewProduct(product)}
        onSelectDiscussion={() => {
          navigateTo('discussions');
        }}
      />
    </div>
  );
}
