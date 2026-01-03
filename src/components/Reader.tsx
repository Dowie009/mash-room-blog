import { X } from 'lucide-react';
import type { Post } from '../data/posts';

interface ReaderProps {
  post: Post | null;
  onClose: () => void;
}

export const Reader = ({ post, onClose }: ReaderProps) => {
  if (!post) return null;
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1c120e]/95 text-orange-100 backdrop-blur-md animate-in slide-in-from-bottom-10 duration-300 font-gothic">
      <div className="max-w-3xl mx-auto min-h-screen relative p-6 md:p-16">
        <button onClick={onClose} className="fixed top-4 right-4 p-3 rounded-full shadow-lg bg-[#2a1b15] hover:bg-orange-900 text-orange-200 transition-colors z-50"><X size={24} /></button>
        <article className="mt-8 md:mt-12">
          {post.image && (
            <div className="w-full h-48 md:h-80 rounded-xl overflow-hidden mb-8 md:mb-12 shadow-2xl shadow-orange-900/20 relative group">
              <img src={post.image} alt="" className="w-full h-full object-cover sepia-[0.2]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c120e] via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                 <span className="inline-block px-3 py-1 text-xs mb-3 rounded-full backdrop-blur-md bg-orange-500/20 text-orange-300 border border-orange-500/30 font-mono">{post.category}</span>
                <h1 className="text-2xl md:text-5xl font-bold leading-tight text-white">{post.title}</h1>
              </div>
            </div>
          )}
          <div className="prose prose-invert prose-p:font-mono prose-headings:text-orange-400 max-w-none text-lg prose-p:text-orange-100/90 prose-p:leading-loose prose-p:mb-6" dangerouslySetInnerHTML={{ __html: post.content }} />
          <hr className="my-16 border-orange-900/30" />
          <div className="text-center"><button onClick={onClose} className="px-8 py-3 rounded-lg font-bold transition-transform hover:scale-105 bg-orange-600 text-white hover:bg-orange-500 shadow-lg shadow-orange-900/50 font-mono">Close System</button></div>
        </article>
      </div>
    </div>
  );
};
