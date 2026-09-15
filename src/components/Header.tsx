import React, { useState } from 'react';
import { Search, Bell, User, MessageSquarePlus, Menu, X, Sparkles, Check } from 'lucide-react';
import { NavPage, NotificationItem } from '../types';

interface HeaderProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage, data?: any) => void;
  onOpenSearch: () => void;
  onOpenCreateDiscussion?: () => void;
  onOpenSkinQuiz?: () => void;
  notifications?: NotificationItem[];
  onMarkNotificationsAsRead?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
  onOpenCreateDiscussion,
  onOpenSkinQuiz,
  notifications = [],
  onMarkNotificationsAsRead,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const safeNotifications = notifications || [];
  const unreadCount = safeNotifications.filter(n => !n.read).length;

  const navLinks: { id: NavPage; label: string }[] = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'articles', label: 'Bài viết' },
    { id: 'skin-knowledge', label: 'Kiến thức làn da' },
    { id: 'reviews', label: 'Review mỹ phẩm' },
    { id: 'discussions', label: 'Thảo luận' },
    { id: 'about', label: 'Về Lumia' },
    { id: 'contact', label: 'Liên hệ' },
  ];

  const handleNavClick = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FCFAF8]/95 backdrop-blur-md border-b border-[#F0E4DF] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Slogan */}
          <div 
            id="brand-logo"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F5D5CE] via-[#FCEAE6] to-[#EAE0D8] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300 border border-[#F2DDD7]">
              <Sparkles className="w-5 h-5 text-[#8C5E58]" />
            </div>
            <div>
              <span className="font-serif-display text-2xl sm:text-3xl font-bold tracking-tight text-[#3E2723] block leading-none">
                Lumia
              </span>
              <span className="text-[11px] sm:text-xs font-normal text-[#93726B] tracking-wide mt-1 block">
                Chạm vào vẻ đẹp, hiểu về làn da
              </span>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => {
              const isActive = currentPage === item.id || (item.id === 'articles' && currentPage === 'article-detail');
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#F5E6E1] text-[#633831] shadow-xs font-semibold'
                      : 'text-[#6D5A56] hover:text-[#3E2723] hover:bg-[#F9ECE8]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Icons & CTA */}
          <div className="hidden sm:flex items-center gap-2 md:gap-3">
            {/* Search Icon */}
            <button
              id="header-search-btn"
              onClick={onOpenSearch}
              className="p-2.5 rounded-full text-[#6D5A56] hover:text-[#3E2723] hover:bg-[#F5ECE8] transition-colors"
              title="Tìm kiếm bài viết, sản phẩm, thảo luận"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Notification Icon & Dropdown */}
            <div className="relative">
              <button
                id="header-notification-btn"
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  if (!showNotifications && unreadCount > 0 && onMarkNotificationsAsRead) {
                    onMarkNotificationsAsRead();
                  }
                }}
                className="relative p-2.5 rounded-full text-[#6D5A56] hover:text-[#3E2723] hover:bg-[#F5ECE8] transition-colors"
                title="Thông báo"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#D97768] rounded-full ring-2 ring-[#FCFAF8]" />
                )}
              </button>

              {/* Notification Popup */}
              {showNotifications && (
                <div 
                  id="notifications-popover"
                  className="absolute right-0 mt-3 w-80 sm:w-88 bg-white rounded-2xl shadow-xl border border-[#F0E4DF] py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="px-4 py-2 border-b border-[#F7EFEA] flex items-center justify-between">
                    <span className="font-semibold text-sm text-[#3E2723]">Thông báo Lumia</span>
                    <span className="text-xs text-[#8C7672] bg-[#F7ECE8] px-2 py-0.5 rounded-full">
                      {safeNotifications.length} tin
                    </span>
                  </div>
                  <div className="max-h-80 overflow-y-auto divide-y divide-[#FAF4F0]">
                    {safeNotifications.length === 0 ? (
                      <div className="p-4 text-center text-xs text-[#8C7672]">
                        Không có thông báo mới nào.
                      </div>
                    ) : (
                      safeNotifications.map((n) => (
                        <div key={n.id} className="p-3.5 hover:bg-[#FDF9F7] transition-colors">
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-xs font-semibold text-[#4A3531]">{n.title}</p>
                            <span className="text-[10px] text-[#A68F8B] shrink-0">{n.time}</span>
                          </div>
                          <p className="text-xs text-[#6F5B57] mt-1 line-clamp-2 leading-relaxed">{n.message}</p>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="px-4 pt-2 border-t border-[#F7EFEA] text-center">
                    <button 
                      onClick={() => setShowNotifications(false)}
                      className="text-xs text-[#8C5E58] hover:text-[#633831] font-medium"
                    >
                      Đóng
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Avatar & Mini Modal */}
            <div className="relative">
              <button
                id="header-user-btn"
                onClick={() => setShowProfileModal(!showProfileModal)}
                className="p-2 rounded-full text-[#6D5A56] hover:text-[#3E2723] hover:bg-[#F5ECE8] transition-colors flex items-center gap-1.5"
                title="Tài khoản cá nhân"
              >
                <div className="w-7 h-7 rounded-full bg-[#EAD8D2] flex items-center justify-center text-[#6B4B44] text-xs font-semibold overflow-hidden">
                  <User className="w-4 h-4" />
                </div>
              </button>

              {showProfileModal && (
                <div 
                  id="profile-popover"
                  className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-xl border border-[#F0E4DF] p-4 z-50 animate-in fade-in duration-200"
                >
                  <div className="flex items-center gap-3 pb-3 border-b border-[#F7EFEA]">
                    <div className="w-11 h-11 rounded-full bg-[#F5D8D0] flex items-center justify-center font-bold text-[#6D3F37]">
                      LM
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#3E2723]">Bạn đọc Lumia</h4>
                      <p className="text-xs text-[#8C7672]">ban.doc@lumia.vn</p>
                    </div>
                  </div>
                  <div className="py-2.5 space-y-1 text-xs text-[#5D4641]">
                    <div className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-[#FDF8F6]">
                      <span>Loại da đã lưu</span>
                      <span className="font-semibold text-[#8C5E58] bg-[#F9ECE8] px-2 py-0.5 rounded-full">Da hỗn hợp</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-[#FDF8F6]">
                      <span>Bài viết đã lưu</span>
                      <span className="font-semibold text-[#4A3531]">6 bài</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-[#FDF8F6]">
                      <span>Câu hỏi cộng đồng</span>
                      <span className="font-semibold text-[#4A3531]">2 câu</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowProfileModal(false)}
                    className="w-full mt-2 py-1.5 text-xs text-center font-medium bg-[#F9EFEA] text-[#633831] rounded-xl hover:bg-[#F5E6DF] transition-colors"
                  >
                    Đóng
                  </button>
                </div>
              )}
            </div>

            {/* Highlight CTA "Tham gia thảo luận" */}
            <button
              id="header-join-community-cta"
              onClick={onOpenCreateDiscussion}
              className="ml-1 sm:ml-2 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-[#B86B62] to-[#A2564D] hover:from-[#A85B52] hover:to-[#91463D] shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" />
              <span>Tham gia thảo luận</span>
            </button>
          </div>

          {/* Mobile hamburger & search */}
          <div className="flex items-center gap-1 sm:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-full text-[#6D5A56] hover:bg-[#F5ECE8]"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[#6D5A56] hover:bg-[#F5ECE8]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden bg-[#FCFAF8] border-b border-[#F0E4DF] px-4 pt-2 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#F5E6E1] text-[#633831] font-bold'
                      : 'text-[#6D5A56] hover:bg-[#F9ECE8]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="pt-4 border-t border-[#F0E4DF] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCreateDiscussion();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-[#B86B62] hover:bg-[#A85B52] shadow-sm"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Tham gia thảo luận ngay</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
