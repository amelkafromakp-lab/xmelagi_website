import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { authService } from '../../auth/authService';

const AdminHeader: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        authService.logout();
        navigate('/admin/login');
    };

    return (
        <header className="bg-surface p-4 rounded-xl shadow-md mb-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">XMELAGI Panel Admina</h1>
            <nav className="flex items-center space-x-6">
                <NavLink 
                    to="/admin/dashboard" 
                    className={({isActive}) => `font-semibold text-lg transition-colors ${isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
                >
                    Panel
                </NavLink>
                <NavLink 
                    to="/admin/new-post" 
                    className={({isActive}) => `font-semibold text-lg transition-colors ${isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
                >
                    Nowy post
                </NavLink>
                <button 
                    onClick={handleLogout}
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 transition-colors"
                >
                    Wyloguj
                </button>
            </nav>
        </header>
    );
};

export default AdminHeader;