/**
 * Debug Sticky Component
 * 最小再現: タイトルが途中位置でsticky → 次セクションが押し上げる体験
 */

export const DebugSticky = () => {
  return (
    <div className="bg-[#1a0f0a] text-white min-h-screen">
      {/* Hero Stage */}
      <section className="debug-stage debug-stage--hero">
        <div className="debug-panel debug-panel--hero">
          <div className="debug-content">
            <h1 className="text-4xl md:text-6xl font-bold text-center">
              ほぼ実話の物語と、音の研究。Blog
            </h1>
            <p className="text-center text-orange-200/70 mt-4">NOSTALGIA & TECHNOLOGY</p>
          </div>
        </div>
      </section>

      {/* Category Stage */}
      <section className="debug-stage debug-stage--category">
        <div className="debug-panel debug-panel--category">
          <div className="debug-content">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
              CATEGORY / カテゴリー
            </h2>
            <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-orange-950/40 border-l-4 border-orange-500 p-8 rounded-lg">
                <h3 className="text-2xl font-bold">物語</h3>
              </div>
              <div className="bg-emerald-950/40 border-l-4 border-emerald-500 p-8 rounded-lg">
                <h3 className="text-2xl font-bold">機材</h3>
              </div>
              <div className="bg-cyan-950/40 border-l-4 border-cyan-500 p-8 rounded-lg">
                <h3 className="text-2xl font-bold">技術</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Post Stage */}
      <section className="debug-stage debug-stage--newpost">
        <div className="debug-panel debug-panel--newpost">
          <div className="debug-content">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
              NEW POST / 最新記事
            </h2>
            <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-yellow-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900">記事 1</h3>
              </div>
              <div className="bg-yellow-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900">記事 2</h3>
              </div>
              <div className="bg-yellow-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900">記事 3</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 調整パラメータの説明 */}
      <div className="fixed bottom-4 right-4 bg-black/80 p-4 rounded text-xs max-w-xs z-50">
        <h4 className="font-bold mb-2">調整パラメータ:</h4>
        <ul className="space-y-1 text-gray-300">
          <li>• min-height: スクロール距離（160svh）</li>
          <li>• top: sticky位置（28vh デスクトップ, 22svh モバイル）</li>
          <li>• z-index: 重なり順（10/20/30）</li>
          <li>• box-shadow: 境界線の視認性</li>
        </ul>
      </div>
    </div>
  );
};
