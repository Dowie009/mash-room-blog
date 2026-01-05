import { useState, useEffect } from 'react';
import { Book, Cpu, Music, Home } from 'lucide-react';
import { POSTS, type Post } from '../data/posts';
import { LandingPage } from './LandingPage';
import { DebugSticky } from './DebugSticky';
import { IntroAnimation } from './IntroAnimation';
import { StoryLayout } from './StoryLayout';
import { TechLayout } from './TechLayout';
import { Reader } from './Reader';

export default function App() {
  const [showIntro, setShowIntro] = useState(() => {
    // デバッグモードではイントロをスキップ
    if (typeof window !== 'undefined' && window.location.hash === '#debug-sticky') {
      console.log('🔧 Debug mode - skipping intro');
      return false;
    }
    // テスト中は常にイントロを表示
    console.log('🎬 Showing intro for testing');
    return true;

    // 本番用（後で戻す）
    // if (typeof window !== 'undefined') {
    //   const played = sessionStorage.getItem('intro-played');
    //   console.log('🎭 Intro played?', played, '-> showIntro:', !played);
    //   return !played;
    // }
    // return true;
  });

  const [view, setView] = useState<'Landing' | 'Story' | 'Tech' | 'DebugSticky'>(() => {
    // URL検査でデバッグモードを有効化
    if (typeof window !== 'undefined' && window.location.hash === '#debug-sticky') {
      return 'DebugSticky';
    }
    return 'Landing';
  });
  const [techFilter, setTechFilter] = useState<'Gear' | 'AI' | 'All'>('All');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [lastReadPost, setLastReadPost] = useState<Post | null>(null);

  const handleIntroComplete = () => {
    setShowIntro(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('intro-played', 'true');
    }
  };

  // --- FIREBASE SIMULATION FOR DEMO ---
  useEffect(() => {
    // Simulating loading a "last read" post for demo purposes
    const demoLastRead = POSTS.find(p => p.id === 36);
    if (demoLastRead) setLastReadPost(demoLastRead);
  }, []);

  const handleEnter = (destination: string, directPost?: Post) => {
    if (directPost) {
      setSelectedPost(directPost);
      setView(directPost.category === 'Story' ? 'Story' : 'Tech');
      if (directPost.category === 'AI') setTechFilter('AI');
      if (directPost.category === 'Gear') setTechFilter('Gear');
    } else {
      if (destination === 'Story') {
        setView('Story');
      } else {
        setView('Tech');
        setTechFilter(destination === 'Tech' ? 'AI' : 'Gear');
      }
    }
  };

  const goHome = () => {
    setView('Landing');
    setSelectedPost(null);
  };

  return (
    <>
      {/* イントロアニメーション */}
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}

      {/* メインコンテンツ（イントロ中はフェードイン待ち） */}
      <div className={showIntro ? 'intro-content-fade' : ''}>
        {view === 'Landing' && <LandingPage onEnter={handleEnter} lastReadPost={lastReadPost} />}
        {view === 'DebugSticky' && <DebugSticky />}

      {view !== 'Landing' && view !== 'DebugSticky' && (
        <>
          <nav className={`fixed top-0 left-0 right-0 z-40 px-4 py-3 flex justify-between items-center transition-colors duration-500 ${view === 'Tech' ? 'bg-[#1c120e]/90 border-b border-orange-900/50' : 'bg-[#fff7ed]/90 border-b border-orange-200/50'} backdrop-blur-md h-16`}>
            <div className="flex items-center gap-3 cursor-pointer" onClick={goHome}>
              <div className={`p-2 rounded hover:bg-black/5 transition-colors ${view === 'Tech' ? 'text-orange-100 hover:bg-white/5' : 'text-[#7c2d12]'}`}>
                <Home size={20} />
              </div>
              <span className={`font-bold tracking-widest hidden md:inline ${view === 'Tech' ? 'text-orange-100' : 'text-[#7c2d12]'} font-sans`}>SAPPORO MASH ROOM STUDIO</span>
            </div>

            <div className="flex bg-black/5 p-1 rounded-full backdrop-blur-sm border border-black/5 overflow-hidden">
              <button
                onClick={() => {setView('Story'); setSelectedPost(null);}}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 font-sans ${view === 'Story' ? 'bg-[#c2410c] text-white shadow-md' : 'text-gray-500 hover:text-[#c2410c]'}`}
              >
                <Book size={14} />
                <span>物語</span>
              </button>
              <button
                onClick={() => {setView('Tech'); setTechFilter('AI'); setSelectedPost(null);}}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 font-sans ${view === 'Tech' && techFilter === 'AI' ? 'bg-orange-600 text-white shadow-md' : 'text-gray-500 hover:text-orange-600'}`}
              >
                <Cpu size={14} />
                <span>AI</span>
              </button>
              <button
                onClick={() => {setView('Tech'); setTechFilter('Gear'); setSelectedPost(null);}}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 font-sans ${view === 'Tech' && techFilter === 'Gear' ? 'bg-red-600 text-white shadow-md' : 'text-gray-500 hover:text-red-600'}`}
              >
                <Music size={14} />
                <span>機材</span>
              </button>
            </div>
          </nav>

          <main className="pt-16 h-screen overflow-hidden">
            {view === 'Story' ? (
              <StoryLayout posts={POSTS} onSelect={setSelectedPost} activeId={selectedPost?.id} lastReadId={lastReadPost?.id} />
            ) : (
              <div className="h-full overflow-y-auto">
                <TechLayout posts={POSTS} onSelect={setSelectedPost} activeId={selectedPost?.id} filter={techFilter} />
              </div>
            )}
          </main>

          {selectedPost && view === 'Tech' && (
            <Reader post={selectedPost} onClose={() => setSelectedPost(null)} />
          )}
        </>
      )}
      </div>
    </>
  );
}
