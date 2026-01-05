import { ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import type { Post } from '../data/posts';
import { POSTS } from '../data/posts';

interface LandingPageProps {
  onEnter: (destination: string, directPost?: Post) => void;
  lastReadPost: Post | null;
}

// 最新記事を取得（日付順）
const getLatestPosts = (count: number = 3): Post[] => {
  return [...POSTS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

// ランダム記事を取得（安定した結果）
const getRandomPost = (): Post => {
  const sorted = [...POSTS].sort((a, b) => a.id - b.id);
  const index = Math.floor(Date.now() / (1000 * 60 * 60 * 24)) % sorted.length; // 日単位で変化
  return sorted[index];
};

// 縦書きテキストを15文字程度で分割して配列に変換
const splitVerticalText = (text: string, charsPerColumn: number = 15): string[] => {
  const columns: string[] = [];
  let currentColumn = '';
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    currentColumn += char;
    
    // 15文字に達したら、または句読点・改行が来たら列を区切る
    if (currentColumn.length >= charsPerColumn || char === '。' || char === '、' || char === '\n') {
      if (currentColumn.trim()) {
        columns.push(currentColumn.trim());
        currentColumn = '';
      }
    }
  }
  
  // 残りの文字を追加
  if (currentColumn.trim()) {
    columns.push(currentColumn.trim());
  }
  
  return columns;
};

// スライドショーのデータ（3つのカテゴリー対応）
const slides = [
  {
    image: '/images/Blog_00.png',
    title: '感じる力が、\n未来を動かす。',
    description: '世の中にある商品、サービス、コンテンツ。それらは「おいしい」「楽しい」「かわいい」など、人のポジティブな感情を引き起こすために作られたものと言えます。このブログでは「感じる→考える→表現する」というプロセスを通して、物語と技術の融合による新しい価値を探求します。',
    category: 'Story'
  },
  {
    image: '/images/カテゴリサムネ　ノケ物語.png',
    title: '機材と音楽、\n創造する。',
    description: 'PLUGINS、DAW、TIPS。最新の機材情報と音楽制作のノウハウを共有します。技術と感性が融合する瞬間を、一緒に探求していきましょう。',
    category: 'Gear'
  },
  {
    image: '/images/ノケ物語イラスト.png',
    title: '技術と未来、\n革新する。',
    description: 'FUTURE、AI。最先端の技術と未来への展望を探求します。テクノロジーがもたらす新しい可能性を、一緒に考えていきましょう。',
    category: 'Tech'
  }
];

export const LandingPage = ({ onEnter, lastReadPost }: LandingPageProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0); // 0-1の値（スクロール進捗）
  const aboutSectionRef = useRef<HTMLElement | null>(null);

  // 自動スライド機能（3.5秒ごと）
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // スクロール位置に応じてStage 1.5のアニメーション進捗を計算
  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        const scrollContainer = document.querySelector('.scroll-snap-wrapper') as HTMLElement;
        const scrollY = scrollContainer ? scrollContainer.scrollTop : window.scrollY;
        const windowHeight = window.innerHeight;

        // Stage 1.5アニメーション: scrollY 100vh ~ 200vhの範囲で実行
        // 0vh: Stage 1開始（progress = 0）
        // 100vh: Stage 1終了、Stage 1.5開始（progress = 0）
        // 200vh: Stage 1.5終了（progress = 1）
        const animationStart = windowHeight; // 100vh: Stage 1の終了位置
        const animationEnd = windowHeight * 2; // 200vh: Stage 1.5の終了位置
        const animationRange = animationEnd - animationStart; // 100vh: アニメーションの範囲

        let progress = 0;

        if (scrollY < animationStart) {
          // Stage 1の間（0vh ~ 100vh）: 完全に非表示
          progress = 0;
        } else if (scrollY >= animationEnd) {
          // Stage 1.5のアニメーション完了後（200vh以降）: 完全に表示
          progress = 1;
        } else {
          // アニメーション中（100vh ~ 200vhの範囲）
          // scrollYが100vhから200vhまでの間で、0から1にイージング補間
          const rawProgress = (scrollY - animationStart) / animationRange;
          
          // イージング関数: ease-out-cubic（開始は速く、終了はゆっくり）
          // f(t) = 1 - (1 - t)^3
          const easedProgress = 1 - Math.pow(1 - rawProgress, 3);
          
          progress = Math.max(0, Math.min(1, easedProgress));
        }

        setScrollProgress(progress);
      });
    };

    // 初期状態は確実に0にする
    setScrollProgress(0);

    // 初期スクロール位置を計算
    handleScroll();

    // スクロールイベントを監視
    const scrollContainer = document.querySelector('.scroll-snap-wrapper');
    const scrollTarget = scrollContainer || window;

    scrollTarget.addEventListener('scroll', handleScroll, { passive: true });

    // リサイズ時も再計算
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      scrollTarget.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // カテゴリ別の件数を計算
  const storyCount = POSTS.filter(p => p.category === 'Story').length;
  const gearCount = POSTS.filter(p => p.category === 'Gear').length;
  const techCount = POSTS.filter(p => p.category === 'AI').length;

  // 各カテゴリの代表サムネイルを取得（最新記事のサムネイルを使用）
  const getCategoryThumbnail = (category: 'Story' | 'Gear' | 'AI'): string | undefined => {
    const categoryPosts = POSTS.filter(p => p.category === category && p.image);
    if (categoryPosts.length === 0) return undefined;
    // 最新記事のサムネイルを取得
    const latest = [...categoryPosts].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )[0];
    return latest.image;
  };

  const storyThumbnail = getCategoryThumbnail('Story');
  const gearThumbnail = getCategoryThumbnail('Gear');
  const techThumbnail = getCategoryThumbnail('AI');

  // 日付フォーマット関数
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
  };

  // カテゴリ名を日本語に変換
  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'Story': return '物語';
      case 'Gear': return '機材';
      case 'AI': return '技術';
      default: return category;
    }
  };

  // カテゴリーに応じた色設定を取得
  const getCategoryColors = (category: string) => {
    switch (category) {
      case 'Story':
        return {
          border: 'border-amber-500/40 hover:border-amber-400/70',
          badge: 'from-amber-400 to-yellow-500',
          categoryBg: 'bg-amber-900/50 border-amber-500/30',
          categoryText: 'text-amber-300',
          titleText: 'text-amber-100 group-hover:text-amber-50',
          metaText: 'text-amber-300/80',
          arrow: 'text-amber-400 group-hover:text-amber-300',
          borderAccent: 'border-amber-500/30',
          gradient: 'from-amber-950/85 to-yellow-950/90',
          shadow: 'hover:shadow-amber-900/40',
          overlay: 'from-amber-950/90 via-amber-950/40'
        };
      case 'Gear':
        return {
          border: 'border-emerald-500/40 hover:border-emerald-400/70',
          badge: 'from-emerald-400 to-emerald-500',
          categoryBg: 'bg-emerald-900/50 border-emerald-500/30',
          categoryText: 'text-emerald-300',
          titleText: 'text-emerald-100 group-hover:text-emerald-50',
          metaText: 'text-emerald-300/80',
          arrow: 'text-emerald-400 group-hover:text-emerald-300',
          borderAccent: 'border-emerald-500/30',
          gradient: 'from-emerald-950/85 to-green-950/90',
          shadow: 'hover:shadow-emerald-900/40',
          overlay: 'from-emerald-950/90 via-emerald-950/40'
        };
      case 'AI':
        return {
          border: 'border-cyan-500/40 hover:border-cyan-400/70',
          badge: 'from-cyan-400 to-cyan-500',
          categoryBg: 'bg-cyan-900/50 border-cyan-500/30',
          categoryText: 'text-cyan-300',
          titleText: 'text-cyan-100 group-hover:text-cyan-50',
          metaText: 'text-cyan-300/80',
          arrow: 'text-cyan-400 group-hover:text-cyan-300',
          borderAccent: 'border-cyan-500/30',
          gradient: 'from-cyan-950/85 to-blue-950/90',
          shadow: 'hover:shadow-cyan-900/40',
          overlay: 'from-cyan-950/90 via-cyan-950/40'
        };
      default:
        return {
          border: 'border-yellow-500/40 hover:border-yellow-400/70',
          badge: 'from-yellow-400 to-yellow-500',
          categoryBg: 'bg-yellow-900/50 border-yellow-500/30',
          categoryText: 'text-yellow-300',
          titleText: 'text-yellow-100 group-hover:text-yellow-50',
          metaText: 'text-yellow-300/80',
          arrow: 'text-yellow-400 group-hover:text-yellow-300',
          borderAccent: 'border-yellow-500/30',
          gradient: 'from-amber-950/85 to-yellow-950/90',
          shadow: 'hover:shadow-yellow-900/40',
          overlay: 'from-amber-950/90 via-amber-950/40'
        };
    }
  };

  return (
    <div className="bg-[#1a0f0a] text-[#fff7ed] font-mincho relative transition-colors duration-1000 scroll-snap-wrapper">
      {/* Background Video - 固定背景 */}
      <div className="fixed inset-0 z-0 landing-bg-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/images/ブログ背景01.png"
          className="absolute inset-0 w-full h-full object-cover landing-bg-video"
        >
          <source src="/images/sunset-bg.mp4" type="video/mp4" />
          {/* フォールバック: 動画が読み込めない場合は静止画 */}
          <img
            src="/images/ブログ背景01.png"
            alt="Atmosphere"
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Header - 固定 */}
      <div className="fixed top-0 left-0 right-0 z-10 p-8 flex justify-between items-start pointer-events-none">
        {/* 左上: ロゴ */}
        <div className="flex items-center pointer-events-auto landing-fade-in-0">
          <img
            src="/images/MASHROOM_Logo.png"
            alt="MASHROOM STUDIO"
            className="h-16 md:h-20 w-auto opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* 右上: スタジオ名 + BLOG / ARCHIVE */}
        <div className="text-right pointer-events-auto landing-fade-in-0 flex flex-col items-center">
          <div className="text-[10px] tracking-[0.3em] opacity-70 writing-vertical-rl text-cyan-100 mb-2">
            SAPPORO<br/>MASHROOM STUDIO
          </div>
          <div className="border-t border-cyan-500/30 pt-2 mt-2">
            <div className="text-[9px] tracking-[0.2em] text-cyan-200/60 writing-vertical-rl">
              BLOG / ARCHIVE
            </div>
          </div>
        </div>
      </div>

      {/* スクロールコンテナ - スクロールスナップ対応 */}
      <div className="relative z-10 scroll-snap-container">
        
        {/* Stage 1: Hero Section（メインテーマ） - Parallax Effect */}
        <section className="stage stage--hero">
          <div className="panel panel--hero">
            {/* 共通言語: Stage 1 ラベル */}
            <div className="absolute top-4 left-4 z-50 bg-black/60 text-white text-xs px-3 py-1 rounded backdrop-blur-sm border border-white/20">
              STAGE 1: HERO
            </div>
            <div className="panel-content">
              <div className="text-center w-full">
                <p className="text-2xl md:text-4xl font-bold tracking-[0.15em] mb-3 text-orange-100 leading-relaxed">
                  ほぼ実話の物語と、<br className="md:hidden"/>音の研究。BLOG
                </p>
                <p className="text-sm md:text-base text-orange-200/70 tracking-widest font-sans mt-2">
                  NOSTALGIA & TECHNOLOGY
                </p>
              </div>
            </div>
            {/* スクロール誘導マーカー */}
            <div className="panel-scroll-indicator text-orange-300 landing-fade-in-2">
              <span className="panel-scroll-indicator__text">Category</span>
              <div className="panel-scroll-indicator__arrow"></div>
            </div>
          </div>
        </section>

        {/* DEBUG PANEL - 開発時のみ表示（本番では削除または条件付き表示） */}
        {typeof window !== 'undefined' && window.location.hash === '#debug-stage1.5' && (
          <div style={{ position: 'fixed', top: '10px', left: '10px', zIndex: 99999, background: 'rgba(0, 0, 0, 0.8)', color: 'white', padding: '15px', fontSize: '14px', fontFamily: 'monospace', border: '2px solid #fbbf24', borderRadius: '8px', backdropFilter: 'blur(10px)' }}>
            <div style={{ marginBottom: '8px', fontWeight: 'bold', color: '#fbbf24' }}>Stage 1.5 Debug</div>
            <div>scrollProgress: {scrollProgress.toFixed(4)}</div>
            <div>scrollY: {typeof window !== 'undefined' && document.querySelector('.scroll-snap-wrapper') ? (document.querySelector('.scroll-snap-wrapper') as HTMLElement).scrollTop.toFixed(0) : 'N/A'}px</div>
            <div>windowHeight: {typeof window !== 'undefined' ? window.innerHeight : 'N/A'}px</div>
            <div>animationStart: {typeof window !== 'undefined' ? window.innerHeight : 'N/A'}px (100vh)</div>
            <div>animationEnd: {typeof window !== 'undefined' ? (window.innerHeight * 2).toFixed(0) : 'N/A'}px (200vh)</div>
            <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              <div style={{ fontWeight: 'bold', color: scrollProgress > 0 ? '#10b981' : '#ef4444' }}>
                Stage 1.5: {scrollProgress > 0 ? 'VISIBLE ✅' : 'HIDDEN ❌'}
              </div>
            </div>
          </div>
        )}

        {/* Stage 1.5: About Section（新規追加 - カテゴリー前） */}
        <section
          ref={aboutSectionRef}
          className="stage stage--about"
          style={{
            pointerEvents: scrollProgress > 0.01 ? 'auto' : 'none'
          }}
        >
          <div className="panel panel--about">
            {/* 共通言語: Stage 1.5 ラベル */}
            <div className="absolute top-4 left-4 z-50 bg-black/60 text-white text-xs px-3 py-1 rounded backdrop-blur-sm border border-white/20">
              STAGE 1.5: ABOUT
            </div>
            <div className="panel-content">
              <div className="w-full h-full flex items-center min-h-[85vh]">
                {/* 2カラムレイアウト - 左40% : 右60% */}
                <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-0 items-stretch w-full h-full min-h-[85vh]">
                  
                  {/* 左側: 写真エリア（下から上にスクロールに合わせて動く） */}
                  <div
                    className="relative w-full h-full min-h-[85vh] bg-zinc-900 overflow-hidden"
                    style={{
                      transform: `translateY(${(1 - scrollProgress) * 100}vh)`,
                      opacity: scrollProgress,
                      visibility: scrollProgress > 0.01 ? 'visible' : 'hidden',
                      pointerEvents: scrollProgress > 0.01 ? 'auto' : 'none',
                      transition: 'opacity 0.3s ease-out, visibility 0.3s ease-out',
                      willChange: 'transform, opacity'
                    }}
                  >
                    {/* スライド画像 */}
                    {slides.map((slide, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                      >
                        <img 
                          src={slide.image} 
                          alt={`${slide.category} Slide`} 
                          className="w-full h-full object-cover" 
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    ))}
                  </div>

                  {/* 右側: テキストエリア（上から下にスクロールに合わせて動く - 天井から現れる） */}
                  <div
                    className="relative bg-white md:bg-gray-50 flex flex-col justify-center p-8 md:p-12 lg:p-16 overflow-hidden min-h-[85vh]"
                    style={{
                      transform: `translateY(${-(1 - scrollProgress) * 100}vh)`,
                      opacity: scrollProgress,
                      visibility: scrollProgress > 0.01 ? 'visible' : 'hidden',
                      pointerEvents: scrollProgress > 0.01 ? 'auto' : 'none',
                      transition: 'opacity 0.3s ease-out, visibility 0.3s ease-out',
                      willChange: 'transform, opacity'
                    }}
                  >
                    {/* 右端: 小さいラベル */}
                    <div className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center gap-2 text-[9px] md:text-[10px] text-gray-400 uppercase tracking-wider">
                      <span>Department</span>
                      <span className="text-gray-300">/</span>
                      <span>学科について</span>
                    </div>

                    {/* コンテンツエリア - 縦書きテキスト（スライド対応） */}
                    <div className="relative flex flex-row gap-8 md:gap-12 items-start justify-start mt-8">
                      {slides.map((slide, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 flex flex-row gap-8 md:gap-12 items-start justify-start transition-opacity duration-500 ${
                            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                          }`}
                        >
                          {/* メインコピー（縦書き、大きく） */}
                          <div className="flex-shrink-0">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight vertical-text-title whitespace-pre-line">
                              {slide.title}
                            </h2>
                          </div>

                          {/* 説明文（縦書き、小さめ、右側に配置） */}
                          <div className="flex-1 flex flex-row gap-4 md:gap-6 text-gray-700 items-start">
                            {splitVerticalText(slide.description, 15).map((column, colIndex) => (
                              <p key={colIndex} className="text-sm md:text-base vertical-text-body-light">
                                {column}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* 「物語を読む」ボタン */}
                    <div className="mt-8 md:mt-12 relative z-20">
                      <button
                        onClick={() => onEnter(slides[currentSlide].category as 'Story' | 'Gear' | 'Tech')}
                        className="group inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm md:text-base rounded-lg transition-all duration-300 hover:shadow-lg"
                      >
                        <span>{slides[currentSlide].category === 'Story' ? '物語を読む' : slides[currentSlide].category === 'Gear' ? '機材を見る' : '技術を探る'}</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* スクロール誘導マーカー */}
            <div className="panel-scroll-indicator text-cyan-300 landing-fade-in-2">
              <span className="panel-scroll-indicator__text">Category</span>
              <div className="panel-scroll-indicator__arrow"></div>
            </div>
          </div>
        </section>

        {/* Stage 2: Category Section */}
        <section className="stage stage--category">
          <div className="panel panel--category">
            {/* 共通言語: Stage 2 ラベル */}
            <div className="absolute top-4 left-4 z-50 bg-black/60 text-white text-xs px-3 py-1 rounded backdrop-blur-sm border border-white/20">
              STAGE 2: CATEGORY
            </div>
            <div className="panel-content">
              {/* セクションタイトル */}
              <div className="mb-10 text-center w-full">
                <h2 className="text-xl md:text-2xl font-bold text-orange-200/90 tracking-widest mb-2 text-center mx-auto">CATEGORY / カテゴリー</h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-orange-400/60 to-transparent mx-auto"></div>
              </div>
              
              {/* 3 Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 w-full max-w-5xl mx-auto">
          {/* 1. Story - オレンジ系（夕方っぽい） */}
          <button
            onClick={() => onEnter('Story')}
            className="category-button group relative flex flex-col p-8 md:p-10 bg-orange-950/80 border-l-4 border-orange-500 hover:border-orange-400 hover:bg-orange-950/90 transition-all rounded-lg backdrop-blur-sm"
            data-category="Story"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl md:text-4xl font-bold text-orange-400/60 group-hover:text-orange-300 transition-colors">01</span>
              <ArrowRight size={24} className="text-orange-400/60 group-hover:text-orange-300 group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-orange-200 group-hover:text-orange-100 transition-colors mb-3">物語</h3>
            <p className="text-sm md:text-base text-orange-300/80 mb-6">漫画、小説のような</p>
            
            {/* サムネイルと縦線のコンテナ */}
            <div className="mb-6 flex items-center gap-3 md:gap-4">
              {/* 縦線（サムネイルの左に配置） */}
              <div className="relative z-10 w-[1px] h-16 md:h-20 bg-orange-500/50 group-hover:bg-orange-400/70 group-hover:scale-150 transition-transform shrink-0"></div>
              
              {/* サムネイル */}
              {storyThumbnail && (
                <div className="category-thumbnail w-40 h-20 md:w-48 md:h-24 rounded-lg overflow-hidden shadow-lg border border-orange-500/30 group-hover:border-orange-400/60 transition-all duration-500 bg-[#1a0f0a]/80">
                  <img 
                    src={storyThumbnail} 
                    alt="物語" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 group-hover:from-orange-900/10 to-transparent transition-all duration-500"></div>
                </div>
              )}
            </div>
            
            <div className="mt-auto pt-4 border-t border-orange-500/30">
              <span className="text-base md:text-lg font-semibold text-orange-400">{storyCount} 記事</span>
            </div>
          </button>

          {/* 2. Gear - 緑系 */}
          <button
            onClick={() => onEnter('Gear')}
            className="category-button group relative flex flex-col p-8 md:p-10 bg-emerald-950/80 border-l-4 border-emerald-500 hover:border-emerald-400 hover:bg-emerald-950/90 transition-all rounded-lg backdrop-blur-sm"
            data-category="Gear"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl md:text-4xl font-bold text-emerald-400/60 group-hover:text-emerald-300 transition-colors">02</span>
              <ArrowRight size={24} className="text-emerald-400/60 group-hover:text-emerald-300 group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-emerald-200 group-hover:text-emerald-100 transition-colors mb-3">機材</h3>
            <p className="text-sm md:text-base text-emerald-300/80 mb-6">PLUGINS / DAW / TIPS</p>
            
            {/* サムネイルと縦線のコンテナ */}
            <div className="mb-6 flex items-center gap-3 md:gap-4">
              {/* 縦線（サムネイルの左に配置） */}
              <div className="relative z-10 w-[1px] h-16 md:h-20 bg-emerald-500/50 group-hover:bg-emerald-400/70 group-hover:scale-150 transition-transform shrink-0"></div>
              
              {/* サムネイル */}
              {gearThumbnail && (
                <div className="category-thumbnail w-40 h-20 md:w-48 md:h-24 rounded-lg overflow-hidden shadow-lg border border-emerald-500/30 group-hover:border-emerald-400/60 transition-all duration-500 bg-[#1a0f0a]/80">
                  <img 
                    src={gearThumbnail} 
                    alt="機材" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 group-hover:from-emerald-900/10 to-transparent transition-all duration-500"></div>
                </div>
              )}
            </div>
            
            <div className="mt-auto pt-4 border-t border-emerald-500/30">
              <span className="text-base md:text-lg font-semibold text-emerald-400">{gearCount} 記事</span>
            </div>
          </button>

          {/* 3. Tech - シアン系 */}
          <button
            onClick={() => onEnter('Tech')}
            className="category-button group relative flex flex-col p-8 md:p-10 bg-cyan-950/80 border-l-4 border-cyan-500 hover:border-cyan-400 hover:bg-cyan-950/90 transition-all rounded-lg backdrop-blur-sm"
            data-category="Tech"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl md:text-4xl font-bold text-cyan-400/60 group-hover:text-cyan-300 transition-colors">03</span>
              <ArrowRight size={24} className="text-cyan-400/60 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-cyan-200 group-hover:text-cyan-100 transition-colors mb-3">技術</h3>
            <p className="text-sm md:text-base text-cyan-300/80 mb-6">FUTURE / AI</p>
            
            {/* サムネイルと縦線のコンテナ */}
            <div className="mb-6 flex items-center gap-3 md:gap-4">
              {/* 縦線（サムネイルの左に配置） */}
              <div className="relative z-10 w-[1px] h-16 md:h-20 bg-cyan-500/50 group-hover:bg-cyan-400/70 group-hover:scale-150 transition-transform shrink-0"></div>
              
              {/* サムネイル */}
              {techThumbnail && (
                <div className="category-thumbnail w-40 h-20 md:w-48 md:h-24 rounded-lg overflow-hidden shadow-lg border border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-500 bg-[#1a0f0a]/80">
                  <img 
                    src={techThumbnail} 
                    alt="技術" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 group-hover:from-cyan-900/10 to-transparent transition-all duration-500"></div>
                </div>
              )}
            </div>
            
            <div className="mt-auto pt-4 border-t border-cyan-500/30">
              <span className="text-base md:text-lg font-semibold text-cyan-400">{techCount} 記事</span>
            </div>
          </button>
          </div>
            </div>
            {/* スクロール誘導マーカー */}
            <div className="panel-scroll-indicator text-yellow-300">
              <span className="panel-scroll-indicator__text">New Post</span>
              <div className="panel-scroll-indicator__arrow"></div>
            </div>
          </div>
        </section>

        {/* Stage 3: New Post Section */}
        {getLatestPosts(3).length > 0 && (
          <section className="stage stage--newpost">
            <div className="panel panel--newpost">
              {/* 共通言語: Stage 3 ラベル */}
              <div className="absolute top-4 left-4 z-50 bg-black/60 text-white text-xs px-3 py-1 rounded backdrop-blur-sm border border-white/20">
                STAGE 3: NEW POST
              </div>
              <div className="panel-content">
                {/* セクションタイトル */}
                <div className="mb-10 text-center w-full">
                  <h2 className="text-xl md:text-2xl font-bold text-yellow-200/90 tracking-widest mb-2">NEW POST / 最新記事</h2>
                  <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent mx-auto"></div>
                </div>
                
                {/* 記事カードグリッド - SEIWA CERAMICS風 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 w-full">
              {getLatestPosts(3).map((post, index) => {
                return (
                  <button
                    key={post.id}
                    onClick={() => onEnter(post.category, post)}
                    className="group relative bg-black/90 border-4 border-white/40 rounded-none overflow-hidden transition-all duration-500 hover:bg-black/95 hover:border-white/60 hover:translate-x-2 hover:translate-y-2 hover:shadow-[8px_8px_0_0_rgba(255,255,255,0.2)] text-left"
                  >
                    {/* サムネイル画像 - シンプルに上に配置 */}
                    {post.image && (
                      <div className="relative w-full h-56 md:h-64 overflow-hidden border-b-4 border-white/40">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover grayscale-[80%] group-hover:grayscale-0 transition-all duration-700 opacity-50 group-hover:opacity-70"
                          loading="lazy"
                        />
                        {/* プレースホルダー素材 [A] 用のコメント */}
                        {/* 後で追加: <div className="absolute inset-0 bg-[url('/images/seiwa-pattern-[A].png')] opacity-10"></div> */}
                      </div>
                    )}

                    {/* コンテンツ - 非常に広い余白 */}
                    <div className="p-10 md:p-12">
                      {/* カテゴリ - 極小 */}
                      <div className="mb-8">
                        <span className="inline-block text-[8px] font-medium text-white/20 uppercase tracking-[0.3em]">
                          {getCategoryLabel(post.category)}
                        </span>
                      </div>

                      {/* タイトル - 非常に大きく太く（SEIWA風の核心） */}
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-[-0.02em] line-clamp-3 mb-8 group-hover:text-white transition-colors">
                        {post.title}
                      </h3>

                      {/* 抜粋 - 階層中位、余白多め */}
                      {post.excerpt && (
                        <p className="text-base md:text-lg text-white/50 leading-relaxed mb-10 line-clamp-2 font-light">
                          {post.excerpt}
                        </p>
                      )}

                      {/* メタ情報 - 極小、下部に配置 */}
                      <div className="flex items-center justify-between pt-8 border-t-4 border-white/20">
                        <div className="flex items-center gap-3 text-[8px] text-white/15 font-normal uppercase tracking-[0.2em]">
                          <span>{formatDate(post.date)}</span>
                          {post.readTime && (
                            <>
                              <span className="text-white/10">•</span>
                              <span>{post.readTime}</span>
                            </>
                          )}
                        </div>
                        {/* 矢印 - hoverでオフセット */}
                        <ArrowRight size={16} className="text-white/20 group-hover:text-white/50 group-hover:translate-x-3 transition-all duration-500" />
                      </div>
                    </div>

                    {/* プレースホルダー素材 [B] 用のコメント */}
                    {/* 後で追加: <div className="absolute top-4 right-4 w-20 h-20 bg-[url('/images/seiwa-decor-[B].png')] opacity-5"></div> */}
                  </button>
                );
              })}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Stage 4: Footer Section */}
        <section className="stage stage--footer">
            <div className="panel panel--footer">
              {/* 共通言語: Stage 4 ラベル */}
              <div className="absolute top-4 left-4 z-50 bg-black/60 text-white text-xs px-3 py-1 rounded backdrop-blur-sm border border-white/20">
                STAGE 4: FOOTER
              </div>
              <div className="panel-content text-center">
                {/* セクションタイトル */}
                <div className="mb-8">
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-200/90 tracking-widest mb-2">LINKS / リンク</h2>
                  <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent mx-auto"></div>
                </div>

                {/* リンクボタングリッド */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
                  {/* ホームページ */}
                  <a
                    href="https://mashroom-studio.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-between p-6 bg-gradient-to-br from-cyan-950/80 to-blue-950/85 border-2 border-cyan-500/40 hover:border-cyan-400/70 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-900/40 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-bold text-cyan-300">HOMEPAGE</p>
                        <p className="text-xs text-cyan-200/60">公式ウェブサイト</p>
                      </div>
                    </div>
                    <ArrowRight size={20} className="text-cyan-400 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all" />
                  </a>

                  {/* Twitter/X */}
                  <a
                    href="https://twitter.com/mashroom_studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-between p-6 bg-gradient-to-br from-slate-950/80 to-gray-950/85 border-2 border-slate-500/40 hover:border-slate-400/70 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/40 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-400 to-slate-500 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-bold text-slate-300">X (TWITTER)</p>
                        <p className="text-xs text-slate-200/60">@mashroom_studio</p>
                      </div>
                    </div>
                    <ArrowRight size={20} className="text-slate-400 group-hover:text-slate-300 group-hover:translate-x-1 transition-all" />
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://youtube.com/@mashroom_studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-between p-6 bg-gradient-to-br from-red-950/80 to-rose-950/85 border-2 border-red-500/40 hover:border-red-400/70 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-900/40 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-bold text-red-300">YOUTUBE</p>
                        <p className="text-xs text-red-200/60">動画チャンネル</p>
                      </div>
                    </div>
                    <ArrowRight size={20} className="text-red-400 group-hover:text-red-300 group-hover:translate-x-1 transition-all" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com/mashroom_studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-between p-6 bg-gradient-to-br from-pink-950/80 to-purple-950/85 border-2 border-pink-500/40 hover:border-pink-400/70 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-900/40 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-bold text-pink-300">INSTAGRAM</p>
                        <p className="text-xs text-pink-200/60">写真・動画</p>
                      </div>
                    </div>
                    <ArrowRight size={20} className="text-pink-400 group-hover:text-pink-300 group-hover:translate-x-1 transition-all" />
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://tiktok.com/@mashroom_studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-between p-6 bg-gradient-to-br from-fuchsia-950/80 to-purple-950/85 border-2 border-fuchsia-500/40 hover:border-fuchsia-400/70 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-fuchsia-900/40 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-bold text-fuchsia-300">TIKTOK</p>
                        <p className="text-xs text-fuchsia-200/60">ショート動画</p>
                      </div>
                    </div>
                    <ArrowRight size={20} className="text-fuchsia-400 group-hover:text-fuchsia-300 group-hover:translate-x-1 transition-all" />
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://facebook.com/mashroom.studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-between p-6 bg-gradient-to-br from-blue-950/80 to-indigo-950/85 border-2 border-blue-500/40 hover:border-blue-400/70 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/40 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-bold text-blue-300">FACEBOOK</p>
                        <p className="text-xs text-blue-200/60">コミュニティ</p>
                      </div>
                    </div>
                    <ArrowRight size={20} className="text-blue-400 group-hover:text-blue-300 group-hover:translate-x-1 transition-all" />
                  </a>
                </div>

                {/* コピーライト */}
                <p className="text-xs text-cyan-200/40 font-sans tracking-widest">&copy; 2025 SAPPORO MASHROOM STUDIO</p>
              </div>
            </div>
          </section>

      </div>
    </div>
  );
};
