import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addArticle } from '../../services/articleService';
import { Category, Article } from '../../types';
import AdminHeader from './AdminHeader';

const categoryTranslations: { [key in Category]: string } = {
    [Category.MUSIC]: 'Muzyka',
    [Category.VIDEO]: 'Wideo',
    [Category.IMAGES]: 'Obrazy',
    [Category.TEXT]: 'Tekst',
};

const AdminNewPostPage: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        category: Category.TEXT,
        excerpt: '',
        content: '',
        imageUrl: '',
        author: 'Admin',
        featured: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addArticle(formData);
        alert('Artykuł utworzony pomyślnie!');
        navigate('/admin/dashboard');
    };

    const inputClass = "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm";
    const labelClass = "block text-sm font-medium text-on-surface-variant";

    return (
        <div className="w-full">
            <AdminHeader />
            <div className="bg-surface p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-on-surface mb-6">Utwórz nowy post</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="title" className={labelClass}>Tytuł</label>
                        <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} className={inputClass} required />
                    </div>
                    <div>
                        <label htmlFor="category" className={labelClass}>Kategoria</label>
                        <select name="category" id="category" value={formData.category} onChange={handleChange} className={inputClass} required>
                            {Object.values(Category).map(cat => (
                                <option key={cat} value={cat}>{categoryTranslations[cat]}</option>
                            ))}
                        </select>
                    </div>
                     <div>
                        <label htmlFor="author" className={labelClass}>Autor</label>
                        <input type="text" name="author" id="author" value={formData.author} onChange={handleChange} className={inputClass} required />
                    </div>
                    <div>
                        <label htmlFor="imageUrl" className={labelClass}>URL obrazka</label>
                        <input type="url" name="imageUrl" id="imageUrl" value={formData.imageUrl} onChange={handleChange} className={inputClass} placeholder="https://example.com/image.jpg" required />
                    </div>
                    <div>
                        <label htmlFor="excerpt" className={labelClass}>Zajawka</label>
                        <textarea name="excerpt" id="excerpt" value={formData.excerpt} onChange={handleChange} rows={3} className={inputClass} required></textarea>
                    </div>
                    <div>
                        <label htmlFor="content" className={labelClass}>Treść (HTML dozwolony)</label>
                        <textarea name="content" id="content" value={formData.content} onChange={handleChange} rows={10} className={inputClass} required></textarea>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" name="featured" id="featured" checked={formData.featured} onChange={handleChange} className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                        <label htmlFor="featured" className="ml-2 block text-sm text-on-surface-variant">
                            Artykuł wyróżniony?
                        </label>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-primary text-white font-bold py-3 px-6 rounded-full hover:bg-primary-hover transition-colors"
                        >
                            Opublikuj artykuł
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminNewPostPage;