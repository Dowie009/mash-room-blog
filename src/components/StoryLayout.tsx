import { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  AlignVerticalJustifyCenter, 
  AlignHorizontalJustifyCenter,
  BookOpen,
  Volume2,
  VolumeX,
  Sparkles
} from 'lucide-react';
import type { Post } from '../data/posts';
import { AudioPlayer } from './AudioPlayer';

interface StoryLayoutProps {
  posts: Post[];
  onSelect: (post: Post) => void;
  activeId?: number;
  lastReadId?: number;
}

export const StoryLayout = ({ posts, onSelect, activeId, lastReadId }: StoryLayoutProps) => {
  const [isVertical, setIsVertical] = useState(false);
  const [activePost, setActivePost] = useState<Post | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'reader'>('list');
  const [showPlayer, setShowPlayer] = useState(false);
  const [bgmEnabled, setBgmEnabled] = useState(false);

  useEffect(() => {
    if (activeId) {
      const found = posts.find(p => p.id === activeId);
      if (found) {
        setActivePost(found);
        setViewMode('reader');
      }
    } else if (window.innerWidth >= 768 && !activePost && posts.length > 0) {
      setActivePost(posts[0]);
    }
  }, [posts, activeId]);

  const handleSelect = (post: Post) => {
    setActivePost(post);
    setViewMode('reader'); 
    onSelect(post);
    // Auto show player when opening a story
    setShowPlayer(true); 
    
    setTimeout(() => {
      const reader = document.getElementById('story-reader-content');
      if (reader) {
        reader.scrollTop = 0;
        if (isVertical) reader.scrollLeft = reader.scrollWidth;
      }
    }, 100);
  };

  const handleBackToList = () => {
    setViewMode('list');
  };

  const storyPosts = posts.filter(p => p.category === 'Story');

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col md:flex-row bg-[#fff7ed] text-[#431407] font-mincho overflow-hidden transition-all duration-500">
      <div className="fixed inset-0 pointer-events-none opacity-40 mix-blend-multiply z-0" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cream-paper.png")` }}></div>

      {/* LEFT: Spine / List */}
      <div className={`md:w-[320px] h-full overflow-y-auto border-r border-orange-200/50 bg-[#ffedd5]/30 relative z-10 custom-scrollbar shadow-lg shrink-0 ${viewMode === 'reader' ? 'hidden md:block' : 'block w-full'}`}>
        <div className="p-4 sticky top-0 bg-[#fff7ed]/95 backdrop-blur-sm z-20 border-b border-orange-200/50 flex justify-between items-center">
          <h1 className="text-lg font-bold text-[#7c2d12] tracking-widest">ノケ物語 目次</h1>
          <span className="text-xs text-[#c2410c]">{storyPosts.length} 話</span>
        </div>
        <div className="pb-20 p-4 space-y-4">
          {storyPosts.map((post) => (
            <div 
              key={post.id} 
              className={`cursor-pointer transition-all duration-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-orange-100 bg-white group ${activePost?.id === post.id ? 'ring-2 ring-[#c2410c] ring-offset-2' : ''}`}
              onClick={() => handleSelect(post)}
            >
              <div className="flex gap-4">
                {/* Large Thumbnail */}
                <div className="w-24 h-24 shrink-0 bg-gray-200">
                   {post.image && <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="" />}
                </div>
                <div className="p-3 flex-1 min-w-0 flex flex-col justify-center">
                  <span className="block text-[10px] font-bold text-[#ea580c] mb-1">{post.id === 31 ? '序章' : `第 ${post.chapter} 話`}</span>
                  <h3 className={`text-sm font-bold leading-relaxed line-clamp-2 ${activePost?.id === post.id ? 'text-[#c2410c]' : 'text-[#7c2d12]'}`}>{post.title.replace(/中学校編・第\d+話|少年期編・第\d+話|幼少期編・第\d+話/g, '')}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: Reader */}
      <div className={`flex-1 h-full relative z-10 bg-[#fff7ed] flex flex-col min-w-0 ${viewMode === 'list' ? 'hidden md:flex' : 'flex w-full'}`}>
        
        {/* Reader Toolbar with BGM Switch */}
        <div className="h-12 border-b border-orange-200/50 flex items-center justify-between px-4 gap-4 bg-[#fff7ed]/95 backdrop-blur-sm z-30 shrink-0">
          <button onClick={handleBackToList} className="md:hidden flex items-center gap-1 text-[#c2410c] font-bold text-xs">
            <ChevronLeft size={16} /> 一覧へ
          </button>

          <span className="text-xs font-bold text-[#c2410c] hidden md:block truncate flex-1">{activePost?.title}</span>

          <div className="flex items-center gap-4 ml-auto text-[#9a3412]">
            {/* BGM Toggle */}
            <button 
              onClick={() => setBgmEnabled(!bgmEnabled)}
              className={`flex items-center gap-2 text-[10px] font-bold border border-orange-200 px-3 py-1 rounded-full transition-all ${bgmEnabled ? 'bg-orange-100 text-[#c2410c] border-[#c2410c]' : 'text-gray-400'}`}
            >
              {bgmEnabled ? <Volume2 size={12} /> : <VolumeX size={12} />}
              <span>環境音 {bgmEnabled ? 'ON' : 'OFF'}</span>
            </button>

            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsVertical(false)}
                className={`p-1.5 rounded transition-colors ${!isVertical ? 'bg-orange-100 text-[#c2410c]' : 'hover:bg-orange-50'}`}
                title="横書き"
              >
                <AlignHorizontalJustifyCenter size={16} />
              </button>
              <button 
                onClick={() => setIsVertical(true)}
                className={`p-1.5 rounded transition-colors ${isVertical ? 'bg-orange-100 text-[#c2410c]' : 'hover:bg-orange-50'}`}
                title="縦書き"
              >
                <AlignVerticalJustifyCenter size={16} />
              </button>
            </div>
          </div>
        </div>
        
        <div id="story-reader-content" className={`flex-1 overflow-auto scroll-smooth ${isVertical ? 'vertical-writing p-4' : 'p-6 md:p-16'} ${showPlayer ? 'pb-32' : ''}`}>
          {activePost ? (
            <div className={`max-w-2xl mx-auto w-full blog-content ${isVertical ? 'h-full py-8 px-6' : 'pb-32'}`}>
              <article className={`animate-in fade-in duration-700 ${isVertical ? 'h-full flex flex-col gap-10' : ''}`}>
                <div className={`${isVertical ? 'ml-12 shrink-0' : 'mb-12 text-center'}`}>
                  {!isVertical && activePost.image && (
                    <div className="w-full h-56 md:h-72 rounded-lg overflow-hidden mb-8 shadow-md">
                      <img src={activePost.image} className="w-full h-full object-cover opacity-90 sepia-[0.2]" alt="" />
                    </div>
                  )}
                  <h1 className={`font-bold text-[#431407] leading-relaxed ${isVertical ? 'text-2xl min-h-[300px] tracking-widest' : 'text-2xl md:text-4xl'}`}>
                    {activePost.title}
                  </h1>
                </div>
                
                <div 
                  className={`prose prose-stone prose-p:text-[#573022] max-w-none w-full text-lg prose-p:mb-8 prose-headings:font-normal prose-headings:text-[#7c2d12] prose-headings:mt-12 prose-headings:mb-6 ${isVertical ? 'h-full column-fill-auto text-justify' : ''}`} 
                  dangerouslySetInnerHTML={{ __html: activePost.content }} 
                />

                {/* Resonance Button (Like) */}
                <div className="mt-20 text-center">
                   <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#c2410c] text-white rounded-full font-bold shadow-lg hover:bg-[#9a3412] hover:scale-105 transition-all active:scale-95">
                     <Sparkles size={20} className="animate-pulse" />
                     <span>共鳴する</span>
                     <span className="absolute -top-2 -right-2 bg-white text-[#c2410c] text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border border-[#c2410c]">12</span>
                   </button>
                   <p className="text-xs text-[#8c7b75] mt-4 tracking-widest">感想をAIに伝える</p>
                </div>
              </article>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-orange-300 flex-col gap-4 opacity-50"><BookOpen size={48} /><p className="tracking-widest text-sm text-[#9a3412]">物語を選択してください</p></div>
          )}
        </div>
      </div>
      
      {/* Audio Player Overlay */}
      {showPlayer && activePost && (
        <AudioPlayer post={activePost} />
      )}
    </div>
  );
};
