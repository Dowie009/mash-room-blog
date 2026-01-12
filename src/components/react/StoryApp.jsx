import React, { useState, useEffect, useRef } from 'react';
import {
  Home,
  AlignVerticalJustifyCenter, AlignHorizontalJustifyCenter,
  ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Play, Pause,
  Feather, Coffee, BookOpen, Type, X, Maximize2, Minimize2, RotateCcw,
  Music, Cpu, ExternalLink
} from 'lucide-react';
import { POSTS } from '../../data/noke-posts.js';

// --- FONT & STYLE LOADER ---
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600;700&family=Zen+Old+Mincho:wght@400;600;700;900&family=Klee+One:wght@400;600&family=Yuji+Syuku&family=Kaisei+Decol:wght@400;700&family=Caveat:wght@400;700&display=swap');

    :root {
      --paper-bg: #f7f4eb;
      --ink-color: #2b2321;
      --accent-color: #8c3a26;
      --sub-color: #a89f91;
    }

    body {
      background-color: var(--paper-bg);
      color: var(--ink-color);
    }

    .font-shippori { font-family: 'Shippori Mincho', serif; }
    .font-zenold { font-family: 'Zen Old Mincho', serif; }
    .font-klee { font-family: 'Klee One', cursive; }
    .font-yuji { font-family: 'Yuji Syuku', serif; }
    .font-kaisei { font-family: 'Kaisei Decol', serif; }
    .font-handwriting { font-family: 'Caveat', cursive; }

    .vertical-writing {
      writing-mode: vertical-rl;
      text-orientation: upright;
      overflow-x: auto;
      overflow-y: hidden;
      height: 100%;
      width: 100%;
      line-height: 2.2;
      letter-spacing: 0.15em;
      text-align: left;
      padding: 2em 1em;
    }
    .vertical-writing::-webkit-scrollbar { height: 6px; }
    .vertical-writing::-webkit-scrollbar-track { background: transparent; }
    .vertical-writing::-webkit-scrollbar-thumb { background-color: rgba(140, 58, 38, 0.3); border-radius: 3px; }
    .vertical-writing p { margin-left: 2em; margin-bottom: 0; text-indent: 0; }
    .vertical-writing h1 { margin-left: 3em; font-size: 2.4em; font-weight: 700; line-height: 1.4; text-indent: 0; }
    .vertical-writing h2 { margin-left: 2.5em; font-size: 1.6em; margin-top: 1.5em; text-indent: 0; }

    .paper-texture {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
      opacity: 0.6;
      pointer-events: none;
      z-index: 1;
    }

    .film-grain {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: url('https://www.transparenttextures.com/patterns/stardust.png');
      opacity: 0.08;
      pointer-events: none;
      z-index: 2;
    }

    .custom-scrollbar::-webkit-scrollbar { width: 4px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(43, 35, 33, 0.2); }

    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-entry { animation: fade-in-up 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }

    @keyframes fade-in {
      from { opacity: 0; transform: scale(0.98); }
      to { opacity: 1; transform: scale(1); }
    }
    .animate-preview { animation: fade-in 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }

    @keyframes slow-zoom {
      from { transform: scale(1.0); }
      to { transform: scale(1.05); }
    }
    .animate-slow-zoom { animation: slow-zoom 10s ease-out forwards; }

    .polaroid {
      background: white;
      padding: 12px 12px 40px 12px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.15);
      transform: rotate(-1deg);
      transition: transform 0.5s ease;
    }
    .polaroid:hover {
      transform: rotate(0deg) scale(1.02);
      box-shadow: 0 8px 25px rgba(0,0,0,0.2);
    }

    .polaroid-large {
      background: white;
      padding: 20px 20px 80px 20px;
      box-shadow: 0 25px 50px rgba(0,0,0,0.25);
      transform: rotate(2deg);
      max-width: 80%;
      width: 500px;
      transition: transform 0.8s ease;
    }
    .polaroid-large:hover {
      transform: rotate(0deg) scale(1.01);
    }
  `}</style>
);

// --- FONT OPTIONS ---
const FONTS = [
  { id: 'shippori', name: 'しっぽり明朝', class: 'font-shippori' },
  { id: 'zenold', name: 'Zenオールド', class: 'font-zenold' },
  { id: 'klee', name: 'クレー', class: 'font-klee' },
  { id: 'yuji', name: '游字', class: 'font-yuji' },
  { id: 'kaisei', name: '解星デコール', class: 'font-kaisei' },
];

// --- COMPONENTS ---

const FontSwitcher = ({ currentFont, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-50" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 rounded-full hover:bg-[#a89f91]/20 flex items-center justify-center text-[#8c3a26] transition-colors"
        title="フォント変更"
      >
        <span className="font-zenold font-bold text-lg">あ</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-10 bg-[#fffcf5] rounded-none shadow-xl border border-[#e6e2d8] w-48 animate-entry overflow-hidden">
          {FONTS.map(font => (
            <button
              key={font.id}
              onClick={() => { onChange(font); setIsOpen(false); }}
              className={`w-full text-left px-4 py-3 text-sm transition-colors border-b border-[#e6e2d8]/50 last:border-0 ${font.class} ${currentFont.id === font.id ? 'bg-[#8c3a26] text-white' : 'text-[#2b2321] hover:bg-[#f2f0e9]'}`}
            >
              {font.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const EmbeddedAudioPlayer = ({ post, fontClass }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => (prev < 100 ? prev + 0.5 : 100));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-10 h-10 rounded-full bg-[#8c3a26] flex items-center justify-center text-[#f7f4eb] hover:bg-[#a64d38] transition-colors shadow-sm shrink-0"
        >
          {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="ml-0.5" />}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-baseline mb-1">
             <span className={`text-[10px] text-[#a89f91] font-bold tracking-widest truncate mr-2 ${fontClass}`}>
               Now Reading
             </span>
             <span className="text-[10px] text-[#a89f91] font-mono tabular-nums">
               {post?.audioLength || "--:--"}
             </span>
          </div>
          <div className="h-[2px] bg-[#e6e2d8] w-full rounded-full overflow-hidden">
            <div className={`h-full bg-[#8c3a26] transition-all duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`} style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TocItem = ({ post, isActive, onClick, onMouseEnter, onMouseLeave, fontClass }) => (
  <div
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`
      group cursor-pointer py-5 px-6 relative overflow-hidden transition-all duration-700
      ${isActive ? 'opacity-100 bg-[#efece4]' : 'opacity-40 hover:opacity-100 hover:bg-[#fcfbf7]'}
    `}
  >
    <div className="relative z-10">
      <div className="flex items-baseline justify-between mb-2">
        <span className={`text-xs font-bold tracking-widest transition-colors duration-300 ${isActive ? 'text-[#8c3a26]' : 'text-[#a89f91]'}`}>
          {post.id === 31 ? '序章' : `第${post.chapter}話`}
        </span>
        <span className={`text-[10px] text-[#a89f91] ${fontClass}`}>{post.readTime}</span>
      </div>

      <h3 className={`${fontClass} text-lg leading-relaxed transition-all duration-500 transform ${isActive ? 'text-[#2b2321] font-bold' : 'text-[#5d5553]'}`}>
        {post.title.replace(/中学校編・第\d+話|少年期編・第\d+話|幼少期編・第\d+話/g, '')}
      </h3>

      {isActive && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#8c3a26]"></div>
      )}
    </div>
  </div>
);

const PreviewArea = ({ post, fontClass }) => {
  if (!post) return null;
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center p-8 animate-preview bg-[#f7f4eb]/60 backdrop-blur-[2px] pointer-events-none">
       <div className="polaroid-large">
          <div className="w-full aspect-[4/3] overflow-hidden bg-gray-200">
             <img src={post.image} className="w-full h-full object-cover sepia-[0.3] opacity-90" alt="" />
          </div>
          <div className="text-center pt-8">
             <h2 className={`${fontClass} text-2xl text-[#2b2321] mb-2 font-bold`}>{post.title}</h2>
             <p className="font-handwriting text-xl text-[#8c3a26] opacity-80">{post.caption || "記憶の欠片"}</p>
          </div>
       </div>
    </div>
  );
};

const StoryLayout = ({ posts, onSelect, activeId }) => {
  const [activePost, setActivePost] = useState(null);
  const [hoveredPostId, setHoveredPostId] = useState(null);
  const [viewMode, setViewMode] = useState('toc');
  const [isVertical, setIsVertical] = useState(false);
  const [currentFont, setCurrentFont] = useState(FONTS[0]);
  const [isTocScrolling, setIsTocScrolling] = useState(false);
  const [isReadingMode, setIsReadingMode] = useState(false);
  const [showTocOverlay, setShowTocOverlay] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const tocScrollTimeoutRef = useRef(null);
  const readerRef = useRef(null);

  useEffect(() => {
    if (activeId) {
      const found = posts.find(p => p.id === activeId);
      if (found) {
        setActivePost(found);
        setViewMode('reader');
      }
    }
  }, [posts, activeId]);

  const handleSelect = (post) => {
    setActivePost(post);
    setHoveredPostId(null);
    setViewMode('reader');
    onSelect(post);
  };

  const handleBackToToc = () => {
    setViewMode('toc');
  }

  const toggleLayout = () => setIsVertical(!isVertical);
  const toggleReadingMode = () => setIsReadingMode(!isReadingMode);

  // 前後の話へ移動
  const currentIndex = activePost ? posts.findIndex(p => p.id === activePost.id) : -1;
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  const goToPrev = () => {
    if (prevPost) {
      handleSelect(prevPost);
      if (readerRef.current) readerRef.current.scrollTop = 0;
    }
  };

  const goToNext = () => {
    if (nextPost) {
      handleSelect(nextPost);
      if (readerRef.current) readerRef.current.scrollTop = 0;
    }
  };

  const scrollToTop = () => {
    if (readerRef.current) {
      readerRef.current.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  const handleTocScroll = () => {
    setIsTocScrolling(true);
    if (tocScrollTimeoutRef.current) {
      clearTimeout(tocScrollTimeoutRef.current);
    }
    tocScrollTimeoutRef.current = setTimeout(() => {
      setIsTocScrolling(false);
    }, 1000);
  };

  const hoveredPost = posts.find(p => p.id === hoveredPostId);
  const showPreview = hoveredPost;

  return (
    <div className={`h-screen w-full flex overflow-hidden relative ${currentFont.class}`}>
      <div className="paper-texture" />
      <div className="film-grain" />

      {/* 読書モード時のオーバーレイ目次 */}
      {isReadingMode && showTocOverlay && (
        <div
          className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
          onClick={() => setShowTocOverlay(false)}
        >
          <div
            className="absolute left-0 top-0 h-full w-[350px] bg-[#f7f4eb] shadow-2xl overflow-y-auto animate-entry"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-[#e6e2d8] flex justify-between items-center">
              <h2 className="text-xl font-bold text-[#2b2321]">目次</h2>
              <button
                onClick={() => setShowTocOverlay(false)}
                className="w-8 h-8 rounded-full hover:bg-[#a89f91]/20 flex items-center justify-center"
              >
                <X size={18} className="text-[#8c3a26]" />
              </button>
            </div>
            <div className="pb-20">
              {posts.map((post) => (
                <TocItem
                  key={post.id}
                  post={post}
                  isActive={activePost?.id === post.id}
                  onClick={() => { handleSelect(post); setShowTocOverlay(false); }}
                  onMouseEnter={() => {}}
                  onMouseLeave={() => {}}
                  fontClass={currentFont.class}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* LEFT: SIDEBAR */}
      <div className={`
        absolute inset-0 z-40 bg-[#f7f4eb] transition-all duration-500 transform shadow-xl
        md:relative md:translate-x-0 md:border-r border-[#e6e2d8] flex flex-col md:shadow-none
        ${viewMode === 'reader' && activePost ? '-translate-x-full md:translate-x-0' : 'translate-x-0'}
        ${isReadingMode ? 'md:w-0 md:opacity-0 md:overflow-hidden' : 'md:w-[400px] md:opacity-100'}
      `}>
        <div className="p-8 pb-4 border-b border-[#e6e2d8] bg-[#f7f4eb] sticky top-0 z-20 flex justify-between items-start shrink-0">
          <div>
            <a href="/" className="flex items-center gap-3 mb-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer group">
              <Home size={16} className="text-[#8c3a26] group-hover:scale-110 transition-transform" />
              <span className="text-xs tracking-[0.3em] font-bold uppercase text-[#8c3a26]">NOKE MONOGATARI</span>
            </a>
            <h1 className="text-2xl font-bold text-[#2b2321] tracking-widest">目次</h1>
          </div>
          <FontSwitcher currentFont={currentFont} onChange={setCurrentFont} />
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar relative z-0" onScroll={handleTocScroll}>
          <div className="pb-40">
            {posts.map((post) => (
              <TocItem
                key={post.id}
                post={post}
                isActive={activePost?.id === post.id}
                onClick={() => handleSelect(post)}
                onMouseEnter={() => setHoveredPostId(post.id)}
                onMouseLeave={() => setHoveredPostId(null)}
                fontClass={currentFont.class}
              />
            ))}
          </div>
        </div>

        <div className={`
          absolute bottom-0 left-0 right-0 z-10
          p-6 border-t border-[#e6e2d8] bg-[#fcfbf7]/95 backdrop-blur-sm transition-all duration-500
          ${isTocScrolling ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}
        `}>
          {activePost && (
            <div className="mb-4 pt-2 animate-entry">
              <EmbeddedAudioPlayer post={activePost} fontClass={currentFont.class} />
            </div>
          )}
          <div className={`${activePost ? 'pt-4 border-t border-[#e6e2d8]/50' : ''}`}>
             {/* ナビゲーションスイッチャー - 横1列 */}
             <div className="flex items-center justify-center gap-1.5 mb-3">
               <a
                 href="/"
                 className="group flex items-center gap-1 px-2 py-1 rounded-full bg-[#f7f4eb] border border-[#e6e2d8] text-[#a89f91] hover:text-[#2b2321] hover:border-[#2b2321] hover:bg-[#2b2321]/5 transition-all duration-300"
               >
                 <Home size={10} className="group-hover:scale-110 transition-transform" />
                 <span className="text-[9px] font-bold tracking-wide">HOME</span>
               </a>
               {/* STORY - 現在地（アクティブ表示） */}
               <button
                 onClick={scrollToTop}
                 className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#8c3a26] border border-[#8c3a26] text-white transition-all duration-300 cursor-pointer hover:opacity-80"
               >
                 <BookOpen size={10} />
                 <span className="text-[9px] font-bold tracking-wide">STORY</span>
                 <span className="text-[7px] opacity-70">●</span>
               </button>
               <div className="relative group">
                 <a
                   href="/dtm"
                   className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#f7f4eb] border border-[#e6e2d8] text-[#a89f91] hover:text-[#ff6b35] hover:border-[#ff6b35] hover:bg-[#ff6b35]/5 transition-all duration-300"
                 >
                   <Music size={10} className="group-hover:scale-110 transition-transform" />
                   <span className="text-[9px] font-bold tracking-wide">DTM</span>
                 </a>
                 {/* ホバープレビュー */}
                 <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-44 p-2.5 bg-white rounded-lg shadow-lg border border-[#e6e2d8] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none z-50">
                   <p className="text-[9px] text-[#ff6b35] font-bold mb-0.5">DTM LAB</p>
                   <p className="text-[10px] text-[#5d5553] leading-relaxed">機材レビューや制作Tips</p>
                 </div>
               </div>
               <div className="relative group">
                 <a
                   href="/tech"
                   className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#f7f4eb] border border-[#e6e2d8] text-[#a89f91] hover:text-[#00ffff] hover:border-[#00ffff] hover:bg-[#00ffff]/5 transition-all duration-300"
                 >
                   <Cpu size={10} className="group-hover:scale-110 transition-transform" />
                   <span className="text-[9px] font-bold tracking-wide">TECH</span>
                 </a>
                 {/* ホバープレビュー */}
                 <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-44 p-2.5 bg-white rounded-lg shadow-lg border border-[#e6e2d8] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none z-50">
                   <p className="text-[9px] text-[#00ffff] font-bold mb-0.5">TECH LAB</p>
                   <p className="text-[10px] text-[#5d5553] leading-relaxed">AI・コード・技術の実験記録</p>
                 </div>
               </div>
             </div>
             <p className="text-[10px] text-[#a89f91] tracking-widest uppercase font-sans text-center">SAPPORO MASHROOM STUDIO</p>
          </div>
        </div>
      </div>

      {/* RIGHT: READER */}
      <div className="flex-1 relative bg-[#f7f4eb] h-full flex flex-col min-w-0">
        {showPreview && <PreviewArea post={hoveredPost} fontClass={currentFont.class} />}

        {activePost ? (
          <>
            <div className="absolute top-0 right-0 p-6 flex flex-col gap-3 z-30 transition-opacity duration-500 pointer-events-none">
               <button
                 onClick={toggleReadingMode}
                 className="w-10 h-10 rounded-full bg-[#f7f4eb]/80 border border-[#e6e2d8] flex items-center justify-center text-[#a89f91] hover:text-[#8c3a26] transition-colors pointer-events-auto backdrop-blur-sm shadow-sm"
                 title={isReadingMode ? "通常モードに戻る" : "読書モード"}
               >
                 {isReadingMode ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
               </button>
               <button
                 onClick={toggleLayout}
                 className="w-10 h-10 rounded-full bg-[#f7f4eb]/80 border border-[#e6e2d8] flex items-center justify-center text-[#a89f91] hover:text-[#8c3a26] transition-colors pointer-events-auto backdrop-blur-sm shadow-sm"
                 title={isVertical ? "横書きにする" : "縦書きにする"}
               >
                 {isVertical ? <AlignHorizontalJustifyCenter size={18} /> : <AlignVerticalJustifyCenter size={18} />}
               </button>
            </div>

            <div className="absolute top-4 left-4 z-50 flex items-center gap-2">
              {isReadingMode ? (
                <>
                  <button
                    onClick={() => setShowTocOverlay(true)}
                    className="flex items-center gap-1 text-[#8c3a26] font-bold text-xs bg-[#f7f4eb]/90 px-3 py-2 rounded-full border border-[#e6e2d8] shadow-sm hover:bg-[#f7f4eb] transition-colors"
                  >
                    <BookOpen size={14} /> 目次
                  </button>
                  {activePost && (
                    <button
                      onClick={() => setIsAudioPlaying(!isAudioPlaying)}
                      className="flex items-center gap-1 text-[#a89f91] hover:text-[#8c3a26] text-xs bg-[#f7f4eb]/90 px-3 py-2 rounded-full border border-[#e6e2d8] shadow-sm hover:bg-[#f7f4eb] transition-colors"
                      title="ポッドキャスト"
                    >
                      {isAudioPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
                    </button>
                  )}
                </>
              ) : (
                <button
                  onClick={handleBackToToc}
                  className="md:hidden flex items-center gap-1 text-[#8c3a26] font-bold text-xs bg-[#f7f4eb]/90 px-3 py-2 rounded-full border border-[#e6e2d8] shadow-sm"
                >
                  <ChevronLeft size={14} /> 目次
                </button>
              )}
            </div>

            <div
              ref={readerRef}
              className={`
              flex-1 overflow-auto custom-scrollbar transition-all duration-500
              ${isVertical ? 'vertical-writing bg-[#fffdf5]' : 'h-full py-12 px-6 md:px-24'}
              ${showPreview ? 'opacity-30 blur-sm scale-[0.98]' : 'opacity-100 blur-0 scale-100'}
            `}>
              <div className={`max-w-3xl mx-auto animate-entry ${isVertical ? 'h-full pl-8 md:pl-0 py-8' : 'pb-32'}`}>
                <div className={`${isVertical ? 'ml-24 mt-10 shrink-0' : 'mb-20 text-center'}`}>
                  <span className={`block text-[#8c3a26] font-bold tracking-widest text-xs mb-4 ${isVertical ? 'mb-6' : ''}`}>
                    {activePost.id === 31 ? 'Prologue' : `Chapter ${activePost.chapter}`}
                  </span>
                  <h1 className={`font-bold text-[#2b2321] leading-relaxed ${isVertical ? '' : 'text-3xl md:text-5xl'}`}>
                    {activePost.title}
                  </h1>
                  {!isVertical && <div className="w-8 h-1 bg-[#8c3a26] mx-auto mt-10 opacity-20"></div>}
                </div>

                <div
                  className={`prose prose-stone prose-lg max-w-none prose-p:text-[#4a3f3d] prose-p:leading-loose ${currentFont.class} prose-headings:font-normal prose-headings:text-[#2b2321] ${isVertical ? 'h-full text-justify' : ''}`}
                  dangerouslySetInnerHTML={{ __html: activePost.content }}
                />

                {isVertical ? (
                  /* 縦書きモード用の読了セクション */
                  <div className="flex flex-row items-start gap-8 mr-16" style={{ writingMode: 'horizontal-tb' }}>
                     {/* ナビゲーション */}
                     <div className="flex flex-col gap-2">
                       {nextPost ? (
                         <button
                           onClick={goToNext}
                           className="group flex flex-col items-center gap-1 px-4 py-3 rounded-lg border border-[#e6e2d8] bg-[#fcfbf7] hover:bg-[#8c3a26] hover:text-white hover:border-[#8c3a26] transition-all duration-300 text-[#5d5553]"
                         >
                           <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                           <span className="text-xs">次の話</span>
                         </button>
                       ) : (
                         <div className="px-4 py-3 text-[#a89f91] text-xs opacity-50 text-center">最新話</div>
                       )}

                       <button
                         onClick={scrollToTop}
                         className="group flex flex-col items-center gap-1 px-4 py-3 rounded-lg border border-[#8c3a26]/30 bg-[#fcfbf7] hover:bg-[#8c3a26] hover:text-white hover:border-[#8c3a26] transition-all duration-300 text-[#8c3a26]"
                       >
                         <RotateCcw size={16} className="group-hover:rotate-[-360deg] transition-transform duration-500" />
                         <span className="text-xs">もう一度</span>
                       </button>

                       {prevPost ? (
                         <button
                           onClick={goToPrev}
                           className="group flex flex-col items-center gap-1 px-4 py-3 rounded-lg border border-[#e6e2d8] bg-[#fcfbf7] hover:bg-[#8c3a26] hover:text-white hover:border-[#8c3a26] transition-all duration-300 text-[#5d5553]"
                         >
                           <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                           <span className="text-xs">前の話</span>
                         </button>
                       ) : (
                         <div className="px-4 py-3 text-[#a89f91] text-xs opacity-50 text-center">最初の話</div>
                       )}
                     </div>

                     {/* 読了 & サムネイル */}
                     <div className="flex flex-col items-center gap-6">
                       <div className="flex flex-col items-center gap-2 text-[#a89f91]">
                          <Feather size={20} className="opacity-50" />
                          <span className="text-[10px] tracking-widest">読了</span>
                       </div>
                       {activePost.image && (
                         <div className="polaroid group w-48 rotate-1">
                           <div className="w-full aspect-[4/3] overflow-hidden bg-gray-200">
                             <img src={activePost.image} className="w-full h-full object-cover sepia-[0.3] opacity-90 animate-slow-zoom" alt="" />
                           </div>
                           <div className="text-center pt-4 font-handwriting text-[#5d5553] text-sm italic">
                             {activePost.caption || "記憶の欠片"}
                           </div>
                         </div>
                       )}
                     </div>
                  </div>
                ) : (
                  /* 横書きモード用の読了セクション */
                  <div className="mt-32 text-center">
                  <div className="flex flex-col items-center gap-12">
                     <div className="flex flex-col items-center gap-2 text-[#a89f91]">
                        <Feather size={20} className="opacity-50" />
                        <span className="text-[10px] tracking-widest">読了</span>
                     </div>
                     {activePost.image && (
                       <div className="polaroid group max-w-xs rotate-1">
                         <div className="w-full aspect-[4/3] overflow-hidden bg-gray-200">
                           <img src={activePost.image} className="w-full h-full object-cover sepia-[0.3] opacity-90 animate-slow-zoom" alt="" />
                         </div>
                         <div className="text-center pt-4 font-handwriting text-[#5d5553] text-sm italic">
                           {activePost.caption || "記憶の欠片"}
                         </div>
                       </div>
                     )}

                     {/* 横書きモード用ナビゲーション */}
                     <div className="flex flex-row gap-4 mt-8 flex-wrap justify-center">
                       {prevPost ? (
                         <button
                           onClick={goToPrev}
                           className="group flex items-center gap-2 px-5 py-3 rounded-full border border-[#e6e2d8] bg-[#fcfbf7] hover:bg-[#8c3a26] hover:text-white hover:border-[#8c3a26] transition-all duration-300 text-[#5d5553]"
                         >
                           <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                           <span className="text-sm">前の話へ</span>
                         </button>
                       ) : (
                         <div className="px-5 py-3 text-[#a89f91] text-sm opacity-50">最初の話</div>
                       )}

                       <button
                         onClick={scrollToTop}
                         className="group flex items-center gap-2 px-5 py-3 rounded-full border border-[#8c3a26]/30 bg-[#fcfbf7] hover:bg-[#8c3a26] hover:text-white hover:border-[#8c3a26] transition-all duration-300 text-[#8c3a26]"
                       >
                         <RotateCcw size={16} className="group-hover:rotate-[-360deg] transition-transform duration-500" />
                         <span className="text-sm">もう一度読む</span>
                       </button>

                       {nextPost ? (
                         <button
                           onClick={goToNext}
                           className="group flex items-center gap-2 px-5 py-3 rounded-full border border-[#e6e2d8] bg-[#fcfbf7] hover:bg-[#8c3a26] hover:text-white hover:border-[#8c3a26] transition-all duration-300 text-[#5d5553]"
                         >
                           <span className="text-sm">次の話へ</span>
                           <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                         </button>
                       ) : (
                         <div className="px-5 py-3 text-[#a89f91] text-sm opacity-50">最新話</div>
                       )}
                     </div>
                  </div>
                </div>
                )}
              </div>
            </div>
          </>
        ) : (
          !showPreview && (
            <div className="h-full flex flex-col items-center justify-center text-[#a89f91] opacity-60">
              <BookOpen size={48} strokeWidth={1} />
              <p className={`mt-6 tracking-[0.2em] text-sm ${currentFont.class}`}>物語を選択してください</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default function StoryApp() {
  const [selectedPost, setSelectedPost] = useState(null);
  return (
    <>
      <FontLoader />
      <StoryLayout posts={POSTS} onSelect={setSelectedPost} activeId={selectedPost?.id} />
    </>
  );
}
