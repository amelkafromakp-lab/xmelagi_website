import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleBySlug } from '../services/articleService';
import { Article } from '../types';

const ArticleDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [article, setArticle] = useState<Article | null>(null);

    useEffect(() => {
        if (slug) {
            const foundArticle = getArticleBySlug(slug);
            setArticle(foundArticle || null);
        }
    }, [slug]);

    if (!article) {
        return (
            <div className="text-center py-20">
                <h1 className="text-3xl font-bold">Nie znaleziono artykułu</h1>
                <Link to="/" className="mt-4 inline-block text-primary hover:underline">Wróć na stronę główną</Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <header className="mb-12 text-center">
                <Link to={`/articles/${article.category}`} className="font-bold text-primary uppercase tracking-widest hover:underline">
                    {article.category}
                </Link>
                <h1 className="text-4xl md:text-6xl font-extrabold text-on-surface tracking-tighter mt-4">{article.title}</h1>
                <p className="text-on-surface-variant mt-4 text-lg">{`Autor: ${article.author} | Data: ${article.date}`}</p>
            </header>

            <div className="w-full h-96 rounded-3xl overflow-hidden mb-12 shadow-lg">
                <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
            </div>

            <article 
                className="prose lg:prose-xl max-w-none text-on-surface-variant prose-headings:text-on-surface prose-h2:font-bold"
                dangerouslySetInnerHTML={{ __html: article.content }} 
            />
        </div>
    );
};

export default ArticleDetailPage;