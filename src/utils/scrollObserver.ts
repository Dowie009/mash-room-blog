/**
 * スクロール連動フェードイン用のIntersectionObserver
 * prefers-reduced-motionに対応
 */
export function initScrollFade() {
  // prefers-reduced-motion チェック
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    // アニメーション無効化：すべての要素を即座に表示
    document.querySelectorAll('[data-scroll-fade]').forEach((el) => {
      el.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // 一度表示したら監視を解除（パフォーマンス最適化）
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px 0px -10% 0px', // 10%入ったら発火
      threshold: 0.1,
    }
  );

  // すべての [data-scroll-fade] 要素を監視
  document.querySelectorAll('[data-scroll-fade]').forEach((el) => {
    observer.observe(el);
  });

  return () => {
    // クリーンアップ関数（必要に応じて）
    observer.disconnect();
  };
}
