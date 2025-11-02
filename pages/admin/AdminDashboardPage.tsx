import React from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '../../services/articleService';
import AdminHeader from './AdminHeader';

const AdminDashboardPage: React.FC = () => {
    const articles = getArticles();

    return (
        <div className="w-full">
            <AdminHeader />
            <div className="bg-surface p-6 rounded-2xl">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-on-surface">Zarządzaj artykułami</h2>
                    <Link
                        to="/admin/new-post"
                        className="bg-primary text-white font-bold py-2 px-4 rounded-full hover:bg-primary-hover transition-colors"
                    >
                        + Dodaj nowy post
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="border-b-2 border-surface-container">
                            <tr>
                                <th className="p-4 text-sm font-semibold text-on-surface-variant">Tytuł</th>
                                <th className="p-4 text-sm font-semibold text-on-surface-variant">Kategoria</th>
                                <th className="p-4 text-sm font-semibold text-on-surface-variant">Autor</th>
                                <th className="p-4 text-sm font-semibold text-on-surface-variant">Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.map((article, index) => (
                                <tr key={article.id} className={`border-b border-surface-container ${index % 2 === 0 ? 'bg-black/5' : ''}`}>
                                    <td className="p-4 font-medium text-on-surface">{article.title}</td>
                                    <td className="p-4 text-on-surface-variant capitalize">{article.category}</td>
                                    <td className="p-4 text-on-surface-variant">{article.author}</td>
                                    <td className="p-4 text-on-surface-variant">{article.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardPage;