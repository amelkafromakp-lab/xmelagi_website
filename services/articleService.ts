import { Article, Category } from '../types';

let articles: Article[] = [
  {
    id: '1',
    title: 'Suno v5: Tworzenie Symfonii z Prostych Poleceń',
    slug: 'suno-v5-tworzenie-symfonii',
    category: Category.MUSIC,
    excerpt: 'Odkryj, jak najnowszy model Suno, v5, rewolucjonizuje tworzenie muzyki, pozwalając każdemu generować dźwięk o wysokiej jakości.',
    content: `
      <h2>Orkiestra na wyciągnięcie ręki</h2>
      <p>Suno v5 stanowi monumentalny skok w generowaniu muzyki przez AI. W przeciwieństwie do swoich poprzedników, które często produkowały generyczne lub powtarzalne melodie, v5 rozumie złożoną teorię muzyczną, niuanse gatunkowe i ton emocjonalny. Użytkownicy mogą po prostu wpisać polecenie, takie jak "Wzruszający utwór orkiestrowy do hitu science fiction, z nutą melancholii", a Suno v5 dostarczy kompletną, wolną od opłat licencyjnych kompozycję w ciągu kilku minut.</p>
      <p>Ta technologia demokratyzuje produkcję muzyczną, dając filmowcom, twórcom gier i treści dostęp do nieograniczonej biblioteki niestandardowych ścieżek dźwiękowych. Jakość jest tak wysoka, że coraz trudniej odróżnić muzykę generowaną przez AI od tej skomponowanej przez człowieka, co zwiastuje nową erę kreatywnej współpracy.</p>
    `,
    imageUrl: 'https://picsum.photos/seed/music1/800/600',
    featured: true,
    author: 'Entuzjasta AI',
    date: '26 października 2023',
  },
  {
    id: '2',
    title: 'Google Veo 3.1: Reżyserowanie Kinowych Arcydzieł z AI',
    slug: 'google-veo-3-1-kinowe-arcydziela',
    category: Category.VIDEO,
    excerpt: 'Zanurz się w możliwościach Google Veo 3.1, modelu text-to-video, który tworzy oszałamiające, spójne sekwencje wideo w wysokiej rozdzielczości.',
    content: `
      <h2>Od scenariusza do ekranu, natychmiast</h2>
      <p>Google Veo 3.1 to nie tylko kolejny generator wideo; to wirtualne studio filmowe. Przetwarzając polecenia w języku naturalnym, Veo może generować klipy wideo o długości do minuty z niesamowitą wiernością wizualną i spójnością narracyjną. Niezależnie od tego, czy potrzebujesz "szczeniaka golden retrievera goniącego motyla na skąpanej w słońcu łące, kinowe 4K", czy "futurystycznej panoramy miasta nocą z latającymi samochodami", Veo dostarcza zapierający dech w piersiach realizm.</p>
      <p>Utrzymuje spójność postaci w różnych ujęciach i rozumie ruchy kamery, takie jak "dolly zoom" czy "ujęcie panoramiczne". To narzędzie ma na nowo zdefiniować tworzenie scenorysów, prewizualizację, a nawet ostateczną produkcję dla twórców na całym świecie.</p>
    `,
    imageUrl: 'https://picsum.photos/seed/video1/800/600',
    featured: true,
    author: 'Wizjoner Technologii',
    date: '25 października 2023',
  },
  {
    id: '3',
    title: 'Powstanie Nano Banana: Hiperrealistyczne Obrazy od Google',
    slug: 'powstanie-nano-banana-hiperrealistyczne-obrazy',
    category: Category.IMAGES,
    excerpt: 'Model Nano Banana od Google ustanawia nowy standard w generowaniu obrazów przez AI, tworząc wizualizacje praktycznie nie do odróżnienia od fotografii.',
    content: `
      <h2>Nowa rzeczywistość w pikselach</h2>
      <p>Zapomnij o dolinie niesamowitości. Model generowania obrazów od Google, o nazwie kodowej Nano Banana, doskonale radzi sobie z tworzeniem fotorealistycznych obrazów z zadziwiającym poziomem szczegółowości. Rozumie złożone interakcje światła, tekstury i fizyki, co pozwala mu generować wszystko, od skomplikowanych portretów po rozległe krajobrazy.</p>
      <p>Jego unikalna architektura pozwala na in-painting, out-painting i transfer stylu z niespotykaną dotąd kontrolą. Dla projektantów, marketerów i artystów Nano Banana to rewolucja, zapewniająca nieskończone płótno do realizacji ich najambitniejszych pomysłów wizualnych.</p>
    `,
    imageUrl: 'https://picsum.photos/seed/image1/800/600',
    featured: true,
    author: 'Artysta Cyfrowy',
    date: '24 października 2023',
  },
  {
    id: '4',
    title: 'ChatGPT-5: Świt Ludzkiej Konwersacji i Rozumowania',
    slug: 'chatgpt-5-ludzka-konwersacja',
    category: Category.TEXT,
    excerpt: 'Następna iteracja ChatGPT to nie tylko ulepszenie; to skok w kierunku prawdziwej Ogólnej Sztucznej Inteligencji, zdolnej do subtelnego rozumowania i kreatywności.',
    content: `
      <h2>Więcej niż model językowy</h2>
      <p>Nadchodzący ChatGPT-5 ma zatrzeć granice między inteligencją ludzką a maszynową. Dzięki znacznie rozszerzonemu zestawowi parametrów i nowatorskiej architekturze rozumowania, może rozwiązywać złożone, wieloetapowe problemy, pisać profesjonalny kod, a nawet tworzyć poezję, która wywołuje prawdziwe emocje.</p>
      <p>Służy jako uniwersalny asystent, kreatywny partner i potężne narzędzie badawcze w jednym. Jego zdolność do rozumienia kontekstu i generowania spójnego, wnikliwego tekstu przyspieszy innowacje w każdej branży, od nauki i medycyny po edukację i rozrywkę.</p>
    `,
    imageUrl: 'https://picsum.photos/seed/text1/800/600',
    featured: false,
    author: 'Myśliciel Przyszłości',
    date: '23 października 2023',
  },
  {
    id: '5',
    title: 'Jak AGI Komponuje Następną Generację Przebojów',
    slug: 'agi-komponuje-przeboje',
    category: Category.MUSIC,
    excerpt: 'AI nie jest już tylko narzędziem dla producentów; staje się kompozytorem. Odkryj, jak modele analizują trendy, aby tworzyć muzykę na szczyty list przebojów.',
    content: `
      <h2>Algorytm melodii</h2>
      <p>Platformy muzyczne AI są teraz w stanie analizować dziesięciolecia danych muzycznych, aby zrozumieć struktury, progresje akordów i wzorce melodyczne, które decydują o sukcesie piosenki. Przekazując tę wiedzę do modeli generatywnych, mogą one produkować nieskończony strumień oryginalnych kompozycji dostosowanych do określonych gatunków i nastrojów. Nie chodzi o zastępowanie artystów, ale o dostarczenie im potężnego, nowego instrumentu do inspiracji i współpracy.</p>
    `,
    imageUrl: 'https://picsum.photos/seed/music2/800/600',
    author: 'Producent Muzyczny',
    date: '22 października 2023',
  },
  {
    id: '6',
    title: 'Niezależne Kino na Nowo z Sora 2 i Veo 3.1',
    slug: 'niezalezne-kino-na-nowo',
    category: Category.VIDEO,
    excerpt: 'Wysokobudżetowe efekty specjalne nie są już poza zasięgiem. Zobacz, jak niezależni twórcy używają AI do produkcji wizualizacji o jakości kinowej przy minimalnym budżecie.',
    content: `
      <h2>Efekty z blockbusterów dla każdego</h2>
      <p>Narzędzia takie jak Sora 2 od OpenAI i Veo 3.1 od Google wyrównują szanse w produkcji filmowej. Niezależny twórca może teraz generować złożone sekwencje efektów wizualnych, obce krajobrazy lub historyczne scenografie, które wcześniej wymagałyby ogromnego budżetu studyjnego i zespołu artystów VFX. Ta swoboda pozwala twórcom skupić się na tym, co najważniejsze: narracji, wiedząc, że ich wizualne ambicje mogą wreszcie zostać zrealizowane.</p>
    `,
    imageUrl: 'https://picsum.photos/seed/video2/800/600',
    author: 'Niezależny Filmowiec',
    date: '21 października 2023',
  }
];

export const getArticles = (): Article[] => {
  return articles;
};

export const getFeaturedArticles = (): Article[] => {
  return articles.filter(article => article.featured);
};

export const getArticlesByCategory = (category: Category): Article[] => {
  return articles.filter(article => article.category === category);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const addArticle = (newArticleData: Omit<Article, 'id' | 'date' | 'slug'>): Article => {
  const slug = newArticleData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  
  const newArticle: Article = {
    ...newArticleData,
    id: String(new Date().getTime()), // More unique ID
    date: new Date().toLocaleDateString('pl-PL', { month: 'long', day: 'numeric', year: 'numeric' }),
    slug: slug,
  };

  articles.unshift(newArticle); // Add to the beginning to see it first
  return newArticle;
};