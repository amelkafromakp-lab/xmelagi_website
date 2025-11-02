import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getArticles, getArticlesByCategory } from '../services/articleService';
import { Article, Category } from '../types';

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
    <Link to={`/article/${article.slug}`} className="block group bg-surface rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="w-full h-56 bg-gray-200">
            <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
            <span className="text-sm font-semibold text-primary uppercase">{article.category}</span>
            <h3 className="text-xl font-bold mt-2 text-on-surface group-hover:text-primary transition-colors duration-200">{article.title}</h3>
            <p className="mt-2 text-on-surface-variant text-sm">{article.excerpt}</p>
        </div>
    </Link>
);

const categoryTranslations: { [key in Category]: string } = {
    [Category.MUSIC]: 'Muzyka',
    [Category.VIDEO]: 'Wideo',
    [Category.IMAGES]: 'Obrazy',
    [Category.TEXT]: 'Tekst',
};

const ArticlesListPage: React.FC = () => {
    const { category } = useParams<{ category?: Category }>();
    const [articles, setArticles] = useState<Article[]>([]);
    const [title, setTitle] = useState('Wszystkie artykuły');

    useEffect(() => {
        if (category && categoryTranslations[category]) {
            setArticles(getArticlesByCategory(category));
            setTitle(`Artykuły: ${categoryTranslations[category]}`);
        } else {
            setArticles(getArticles());
            setTitle('Wszystkie artykuły');
        }
    }, [category]);

    return (
        <div>
            <h1 className="text-5xl font-extrabold text-on-surface tracking-tight mb-8">{title}</h1>
            <p className="text-lg text-on-surface-variant mb-12">Odkryj najnowsze przełomy i analizy w świecie Ogólnej Sztucznej Inteligencji.</p>
            {articles.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map(article => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            ) : (
                <p>Nie znaleziono artykułów w tej kategorii.</p>
            )}
        </div>
    );
};

export default ArticlesListPage;