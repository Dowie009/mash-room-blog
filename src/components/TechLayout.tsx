import { Monitor } from 'lucide-react';
import type { Post } from '../data/posts';

interface TechLayoutProps {
  posts: Post[];
  onSelect: (post: Post) => void;
  activeId?: number;
  filter?: 'Gear' | 'AI' | 'All';
}

export const TechLayout = ({ posts, onSelect, activeId, filter = 'All' }: TechLayoutProps) => {
  const displayPosts = posts.filter(p => {
    if (filter === 'Gear') return p.category === 'Gear';
    if (filter === 'AI') return p.category === 'AI';
    return p.category !== 'Story';
  });

  return (
    <div className="min-h-screen bg-[#1c120e] text-[#fed7aa] font-gothic relative overflow-hidden transition-colors duration-1000 ease-in-out">
      <div className="fixed inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'linear-gradient(#ea580c 1px, transparent 1px), linear-gradient(90deg, #ea580c 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        <header className="mb-8 flex justify-between items-end border-b border-orange-900/50 pb-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-1 font-sans">
              MASH<span className="text-orange-500">.ROOM</span>
            </h1>
            <p className="text-orange-400/60 text-[10px] md:text-xs font-mono">ARCHIVE: {filter === 'Gear' ? 'GEAR & MUSIC' : filter === 'AI' ? 'AI EXPERIMENTS' : 'ALL LOGS'}</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayPosts.map((post) => (
            <div 
              key={post.id}
              onClick={() => onSelect(post)}
              className="group relative aspect-[16/10] rounded-xl overflow-hidden cursor-pointer border border-orange-900/30 hover:border-orange-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,88,12,0.3)] hover:-translate-y-1 bg-[#2a1b15]"
            >
              {post.image ? (
                <img src={post.image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50 group-hover:opacity-80 sepia-[0.2]" />
              ) : (
                <div className="absolute inset-0 bg-[#2a1b15] flex items-center justify-center"><Monitor size={48} className="text-orange-900" /></div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c120e] via-[#1c120e]/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end h-full">
                <div className="flex justify-between items-start mb-auto pt-2">
                   <span className={`px-2 py-0.5 text-[10px] font-bold rounded border backdrop-blur-md font-mono ${post.category === 'AI' ? 'border-orange-500 text-orange-400 bg-orange-900/40' : 'border-red-500 text-red-400 bg-red-900/40'}`}>
                    {post.category}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-orange-400/60 font-mono mb-1 block">{post.date}</span>
                  <h2 className="text-lg font-bold text-white leading-tight line-clamp-2 group-hover:text-orange-300 transition-colors">
                    {post.title}
                  </h2>
                  <div className="h-0.5 bg-orange-500 w-0 group-hover:w-full transition-all duration-500 mt-3"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
