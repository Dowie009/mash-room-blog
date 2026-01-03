import { useState, useEffect } from 'react';
import { Play, Pause, SkipForward } from 'lucide-react';
import type { Post } from '../data/posts';

interface AudioPlayerProps {
  post: Post;
  onNext?: () => void;
}

export const AudioPlayer = ({ post, onNext }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Simulation of audio playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => (prev < 100 ? prev + 0.5 : 100));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div 
      data-astro-transition-persist="audio-player"
      className="fixed bottom-0 left-0 right-0 bg-[#1c120e]/95 backdrop-blur-md border-t border-orange-900/50 p-4 pb-6 z-50 player-slide-up shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
    >
      <div className="max-w-3xl mx-auto flex items-center gap-4">
        {/* Play/Pause */}
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white hover:bg-orange-500 transition-colors shadow-lg shrink-0"
        >
          {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
        </button>

        {/* Info & Progress */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between text-[10px] text-orange-200/70 mb-1 font-mono tracking-wider">
            <span>READING: {post.title}</span>
            <span>{post.readTime || '05:00'}</span>
          </div>
          {/* Progress Bar */}
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-orange-500 transition-all duration-100" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        {/* Visualizer (Fake) */}
        <div className={`flex gap-1 items-end h-8 ${isPlaying ? 'playing' : ''}`}>
          <div className="bar w-1 bg-orange-500/50 rounded-full h-2"></div>
          <div className="bar w-1 bg-orange-500/80 rounded-full h-4"></div>
          <div className="bar w-1 bg-orange-500/50 rounded-full h-3"></div>
          <div className="bar w-1 bg-orange-500/30 rounded-full h-2"></div>
        </div>

        {/* Next Button (Playlist) */}
        {onNext && (
          <button 
            onClick={onNext}
            className="text-orange-200/50 hover:text-orange-100 transition-colors"
          >
            <SkipForward size={24} />
          </button>
        )}
      </div>
    </div>
  );
};
