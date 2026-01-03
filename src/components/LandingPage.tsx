import { Bookmark, ArrowRight } from 'lucide-react';
import type { Post } from '../data/posts';

interface LandingPageProps {
  onEnter: (destination: string, directPost?: Post) => void;
  lastReadPost: Post | null;
}

export const LandingPage = ({ onEnter, lastReadPost }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-[#1a0f0a] text-[#fff7ed] font-mincho relative overflow-hidden flex flex-col justify-between transition-colors duration-1000">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/ブログ背景01.png" 
          alt="Atmosphere" 
          className="w-full h-full object-cover opacity-60 mix-blend-overlay grayscale-[30%] contrast-125 scale-105 animate-[pulse_15s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-red-900/30 to-black/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a] via-transparent to-transparent"></div>
        <div className="absolute inset-0 vignette"></div>
        <div className="noise-overlay"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 p-8 flex justify-between items-start animate-fade-up">
        <div className="w-10 h-10 border border-orange-500/50 rounded-full flex items-center justify-center text-xl text-orange-200">ゐ</div>
        <div className="text-[10px] tracking-[0.3em] opacity-70 writing-vertical-rl text-right h-24 text-orange-100">
          SAPPORO<br/>MASH ROOM STUDIO<br/>ARCHIVE
        </div>
      </div>

      {/* Main Menu - The Hub */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-6">
        
        {/* Concept Copy */}
        <div className="mb-16 text-center animate-fade-up">
          <p className="text-xl md:text-2xl font-bold tracking-[0.2em] mb-4 text-orange-100">
            過去を紐解き、<br className="md:hidden"/>未来を実装する。
          </p>
          <p className="text-xs md:text-sm text-orange-200/60 tracking-widest font-sans">
            NOSTALGIA & TECHNOLOGY
          </p>
        </div>

        {/* Continue Button */}
        {lastReadPost && (
          <button 
            onClick={() => onEnter(lastReadPost.category, lastReadPost)}
            className="animate-fade-up bg-orange-900/40 backdrop-blur-md border border-orange-500/30 px-8 py-4 rounded-full flex items-center gap-4 hover:bg-orange-800/50 transition-all group mb-12 shadow-lg shadow-orange-900/50"
          >
            <Bookmark size={18} className="text-orange-400 group-hover:text-white transition-colors" />
            <div className="text-left">
              <span className="block text-[9px] text-orange-300 tracking-widest">CONTINUE READING</span>
              <span className="block text-sm font-bold text-orange-50 group-hover:text-white line-clamp-1 max-w-[200px]">{lastReadPost.title}</span>
            </div>
            <ArrowRight size={16} className="text-orange-400 group-hover:translate-x-1 transition-transform" />
          </button>
        )}

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 w-full animate-fade-up delay-1">
          {/* Story */}
          <button 
            onClick={() => onEnter('Story')}
            className="group flex flex-row md:flex-col items-center justify-center gap-6 p-6 border-t border-b border-orange-500/20 hover:border-orange-500/80 transition-all"
          >
            <div className="text-left md:text-center">
               <span className="text-[10px] tracking-widest text-orange-200/50 block mb-2">PAST / 過去</span>
               <span className="text-3xl font-bold tracking-[0.2em] text-orange-50 group-hover:text-orange-400 transition-colors">物語</span>
            </div>
            <div className="w-12 h-[1px] md:w-[1px] md:h-12 bg-orange-500/50 group-hover:scale-150 transition-transform"></div>
            <span className="text-xs text-orange-200/40 font-sans tracking-widest group-hover:text-orange-200">NOKE STORY</span>
          </button>

          {/* Gear */}
          <button 
             onClick={() => onEnter('Gear')}
             className="group flex flex-row md:flex-col items-center justify-center gap-6 p-6 border-t border-b border-orange-500/20 hover:border-orange-500/80 transition-all"
          >
             <div className="text-left md:text-center">
               <span className="text-[10px] tracking-widest text-orange-200/50 block mb-2">PRESENT / 現在</span>
               <span className="text-3xl font-bold tracking-[0.2em] text-orange-50 group-hover:text-orange-400 transition-colors">機材</span>
            </div>
            <div className="w-12 h-[1px] md:w-[1px] md:h-12 bg-orange-500/50 group-hover:scale-150 transition-transform"></div>
            <span className="text-xs text-orange-200/40 font-sans tracking-widest group-hover:text-orange-200">GEAR & MUSIC</span>
          </button>

           {/* Tech */}
           <button 
             onClick={() => onEnter('Tech')}
             className="group flex flex-row md:flex-col items-center justify-center gap-6 p-6 border-t border-b border-orange-500/20 hover:border-orange-500/80 transition-all"
          >
             <div className="text-left md:text-center">
               <span className="text-[10px] tracking-widest text-orange-200/50 block mb-2">FUTURE / 未来</span>
               <span className="text-3xl font-bold tracking-[0.2em] text-orange-50 group-hover:text-orange-400 transition-colors">技術</span>
            </div>
            <div className="w-12 h-[1px] md:w-[1px] md:h-12 bg-orange-500/50 group-hover:scale-150 transition-transform"></div>
            <span className="text-xs text-orange-200/40 font-sans tracking-widest group-hover:text-orange-200">AI EXPERIMENT</span>
          </button>
        </div>
      </div>

      <div className="relative z-10 p-8 text-center">
        <p className="text-xs text-orange-200/40 font-sans tracking-widest">&copy; 2025 SAPPORO MASH ROOM STUDIO</p>
      </div>
    </div>
  );
};
