import React from 'react';
import { HashRouter, Routes, Route, NavLink, useLocation, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminNewPostPage from './pages/admin/AdminNewPostPage';
import ProtectedRoute from './components/ProtectedRoute';

import { Category } from './types';
import { 
    SearchIcon, 
    HomeIcon, 
    GridIcon,
    GeneratorIcon,
    MusicIcon,
    VideoIcon,
    ImageIcon,
    TextIcon
} from './components/Icons';

const navItems = [
    { name: 'Główna', path: '/', icon: HomeIcon },
    { name: 'Artykuły', path: '/articles', icon: GridIcon },
    { name: 'Generator', path: 'https://editor.xmelagi.com', icon: GeneratorIcon, external: true },
];

const categoryNavItems = [
    { name: 'Muzyka', path: `/articles/${Category.MUSIC}`, icon: MusicIcon },
    { name: 'Wideo', path: `/articles/${Category.VIDEO}`, icon: VideoIcon },
    { name: 'Obrazy', path: `/articles/${Category.IMAGES}`, icon: ImageIcon },
    { name: 'Tekst', path: `/articles/${Category.TEXT}`, icon: TextIcon },
];

const Sidebar: React.FC = () => {
    const location = useLocation();

    const NavItem: React.FC<{item: {name: string, path: string, icon: React.FC<any>, external?: boolean}, isSelected: boolean}> = ({ item, isSelected }) => {
        const commonClasses = `flex flex-col items-center justify-center p-2 rounded-xl transition-colors duration-200 ${isSelected ? 'bg-primary/10 text-primary' : 'hover:bg-black/5'}`;
        
        if (item.external) {
            return (
                <a 
                    href={item.path} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={commonClasses}
                >
                    <item.icon className="w-6 h-6" />
                    <span className="text-xs mt-1 font-medium">{item.name}</span>
                </a>
            );
        }

        return (
            <NavLink 
                to={item.path} 
                className={commonClasses}
            >
                <item.icon className="w-6 h-6" />
                <span className="text-xs mt-1 font-medium">{item.name}</span>
            </NavLink>
        );
    };

    return (
        <aside className="w-24 bg-surface-container p-3 flex flex-col items-center space-y-4 fixed top-0 left-0 h-full z-10">
            <div className="p-2.5 rounded-2xl bg-primary/10 mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#6750A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="#6750A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="#6750A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            
            <button className="p-2.5 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-200">
                <SearchIcon className="w-6 h-6 text-on-surface-variant" />
            </button>

            <nav className="flex flex-col space-y-2 w-full">
                {navItems.map(item => (
                    <NavItem key={item.name} item={item} isSelected={location.pathname === item.path} />
                ))}
                <div className="pt-4 border-t border-black/10">
                    <p className="text-xs text-center text-on-surface-variant mb-2 font-semibold">Kategorie</p>
                    {categoryNavItems.map(item => (
                        <NavItem key={item.name} item={item} isSelected={location.pathname === item.path} />
                    ))}
                </div>
            </nav>
        </aside>
    );
};

const AppContent: React.FC = () => {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith('/admin');

    return (
        <div className="flex font-sans w-full">
            {!isAdminRoute && <Sidebar />}
            <main className={`flex-1 ${isAdminRoute ? '' : 'ml-24'} p-4 md:p-8 lg:p-12 text-on-surface w-full`}>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/articles" element={<ArticlesListPage />} />
                    <Route path="/articles/:category" element={<ArticlesListPage />} />
                    <Route path="/article/:slug" element={<ArticleDetailPage />} />

                    {/* Admin Routes */}
                    <Route path="/admin/login" element={<AdminLoginPage />} />
                    <Route 
                        path="/admin/dashboard" 
                        element={<ProtectedRoute><AdminDashboardPage /></ProtectedRoute>} 
                    />
                    <Route 
                        path="/admin/new-post" 
                        element={<ProtectedRoute><AdminNewPostPage /></ProtectedRoute>} 
                    />
                    <Route 
                        path="/admin"
                        element={<ProtectedRoute><Navigate to="/admin/dashboard" /></ProtectedRoute>}
                    />
                </Routes>
            </main>
        </div>
    );
};

const App: React.FC = () => {
  return (
    <HashRouter>
        <AppContent />
    </HashRouter>
  );
};

export default App;