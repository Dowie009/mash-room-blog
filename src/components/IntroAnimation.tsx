import { useEffect } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  useEffect(() => {
    console.log('🎬 IntroAnimation mounted!');
    // 2.5秒後にイントロ終了
    const timer = setTimeout(() => {
      console.log('✅ Intro complete!');
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  console.log('🎨 Rendering IntroAnimation');

  return (
    <div className="intro-overlay">
      {/* イントロ動画 */}
      <video
        autoPlay
        muted
        playsInline
        className="intro-video"
      >
        <source src="/images/into3.mp4" type="video/mp4" />
      </video>

      {/* MASHROOMロゴ（動画の上に重ねる） */}
      <div className="intro-logo">
        <img
          src="/images/MASHROOM_Logo.png"
          alt="MASHROOM"
          className="intro-logo-image"
        />
      </div>
    </div>
  );
};
