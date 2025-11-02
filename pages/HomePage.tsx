import React from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedArticles, getArticles } from '../services/articleService';
import { Article } from '../types';
import { ArrowRightIcon } from '../components/Icons';

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
    <Link to={`/article/${article.slug}`} className="block group bg-surface rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="w-full h-48 bg-gray-200">
            <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
            <span className="text-sm font-semibold text-primary uppercase">{article.category}</span>
            <h3 className="text-xl font-bold mt-2 text-on-surface group-hover:text-primary transition-colors duration-200">{article.title}</h3>
            <p className="mt-2 text-on-surface-variant text-sm">{article.excerpt}</p>
        </div>
    </Link>
);

const HeroSection: React.FC = () => (
    <section className="bg-surface rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface tracking-tighter">XMELAGI</h1>
            <p className="mt-4 text-lg text-on-surface-variant max-w-lg">
                Nadeszła następna generacja Sztucznej Inteligencji. Odkryj modele, które dorównują, a nawet przewyższają ludzką kreatywność i pomysłowość.
            </p>
            <Link to="/articles">
                <button className="mt-8 bg-primary text-white font-bold py-3 px-6 rounded-full hover:bg-primary-hover transition-transform duration-200 hover:scale-105 flex items-center">
                    Zaczynajmy <ArrowRightIcon className="w-5 h-5 ml-2" />
                </button>
            </Link>
        </div>
        <div className="md:w-2/5 h-64 md:h-auto md:self-stretch rounded-2xl bg-gradient-to-br from-purple-400 via-orange-400 to-rose-500">
            {/* Placeholder for abstract graphic */}
        </div>
    </section>
);

const DefinitionCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="bg-surface p-6 rounded-2xl">
        <h3 className="font-bold text-lg text-primary">{title}</h3>
        <p className="mt-2 text-on-surface-variant">{description}</p>
    </div>
);

const DefinitionsSection: React.FC = () => (
    <section className="mt-16">
        <h2 className="text-4xl font-bold text-center mb-8">Zrozumieć AGI i Kluczowe Narzędzia</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DefinitionCard 
                title="Ogólna Sztuczna Inteligencja (AGI)" 
                description="AGI to rodzaj AI, który posiada zdolność rozumienia, uczenia się i stosowania swojej inteligencji do rozwiązywania każdego problemu, z którym może zmierzyć się człowiek. To szczyt rozwoju AI."
            />
            <DefinitionCard 
                title="ChatGPT" 
                description="Wiodąca tekstowa AI od OpenAI, zdolna do generowania tekstu podobnego do ludzkiego, pisania kodu i odpowiadania na złożone pytania z niezwykłą zdolnością konwersacyjną."
            />
            <DefinitionCard 
                title="Nano Banana (Google)" 
                description="Najnowocześniejszy model generowania obrazów od Google, tworzący oszałamiająco realistyczne i kreatywne wizualizacje z prostych opisów tekstowych."
            />
            <DefinitionCard 
                title="Sora 2 / Google Veo 3.1" 
                description="Rewolucyjne modele text-to-video, które generują spójne klipy wideo w wysokiej rozdzielczości, umożliwiając tworzenie filmów na podstawie poleceń."
            />
            <DefinitionCard 
                title="Suno v5" 
                description="Zaawansowany generator muzyki AI, który komponuje wysokiej jakości, pełnometrażowe utwory z wokalem i instrumentami w dowolnym gatunku."
            />
        </div>
    </section>
);

const HomePage: React.FC = () => {
    const featuredArticles = getFeaturedArticles();
    const recentArticles = getArticles().slice(0, 3);

    return (
        <div className="space-y-16">
            <HeroSection />
            
            <section>
                <h2 className="text-4xl font-bold text-center mb-8">Nowości i premiery</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentArticles.map(article => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            </section>

            <DefinitionsSection />
        </div>
    );
};

export default HomePage;