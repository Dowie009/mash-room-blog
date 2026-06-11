# NOKE MONOGATARI - Astro化 引き継ぎ書

## プロジェクト情報
- **プロジェクトパス**: `/Users/dowie009/Documents/01　真柴道ゐ/Active/blog`
- **フレームワーク**: Astro v5.x + React + Tailwind CSS
- **開発サーバー**: `npm run dev` (localhost:4321)
- **ビルド**: `npm run build`

---

## タスク概要

React単一ファイル（App.jsx）で作成された「縦書きリーダー」をAstroプロジェクトに移植する。

---

## 現在のプロジェクト構造

```
src/
├── components/
│   ├── Hero.astro
│   ├── HorizontalScroll.astro
│   ├── Footer.astro
│   └── ...
├── content/
│   ├── dtm/          ← DTM記事（Markdown 10記事）
│   └── tech/         ← Tech記事（Markdown 2記事）
├── layouts/
│   └── Layout.astro  ← 共通レイアウト
├── pages/
│   ├── index.astro   ← トップページ（横スクロール）
│   ├── dtm.astro     ← DTM一覧
│   ├── dtm/[slug].astro  ← DTM記事ページ
│   └── tech/[slug].astro ← Tech記事ページ
└── styles/
    └── global.css
```

**`/story` は空いています** → ここにNOKE MONOGATARIを配置

---

## 作成が必要なファイル

### 1. `src/pages/story.astro`
```astro
---
import Layout from '../layouts/Layout.astro';
import StoryApp from '../components/react/StoryApp.jsx';
---

<Layout title="NOKE MONOGATARI">
  <StoryApp client:load />
</Layout>
```

### 2. `src/components/react/StoryApp.jsx`
下記のApp.jsxコードを移植

### 3. `src/data/noke-posts.js`
POSTSデータを分離（App.jsx内のPOSTS配列を移動）

### 4. `src/styles/noke.css`（オプション）
FontLoader内のスタイルを分離

---

## 移植元コード（App.jsx）

以下のコードをAstroプロジェクトに移植してください：

```jsx
import React, { useState, useEffect, useRef } from 'react';
import {
  Home,
  AlignVerticalJustifyCenter, AlignHorizontalJustifyCenter,
  ChevronLeft, Play, Pause,
  Feather, Coffee, BookOpen, Type, X
} from 'lucide-react';

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
      text-align: justify;
      padding: 2em 1em;
    }
    .vertical-writing::-webkit-scrollbar { height: 6px; }
    .vertical-writing::-webkit-scrollbar-track { background: transparent; }
    .vertical-writing::-webkit-scrollbar-thumb { background-color: rgba(140, 58, 38, 0.3); border-radius: 3px; }
    .vertical-writing p { margin-left: 2.5em; margin-bottom: 0; text-indent: 1em; }
    .vertical-writing h1 { margin-left: 4em; font-size: 2.4em; font-weight: 700; line-height: 1.4; }
    .vertical-writing h2 { margin-left: 3em; font-size: 1.6em; margin-top: 2em; }

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

// --- DATA ---
const POSTS = [
  {
    id: 31,
    title: "プロローグ「再会」",
    category: "Story",
    chapter: 0,
    readTime: "3 min",
    excerpt: "2025年、冬。札幌、ススキノ。俺は、高級寿司屋の個室にいた。",
    audioLength: "03:12",
    image: "http://xn--3-sj5c.jp/blog/wp-content/uploads/2025/12/ノケ物語サムネ.png",
    caption: "あの日のススキノの夜景",
    content: `<p>2025年、冬。<br>札幌、ススキノ。</p><p>俺は、高級寿司屋の個室にいた。</p><p>目の前には、S氏がいる。<br>60代前半。<br>やっぱり、すごいオーラだ。</p><p>何千人ものアーティストを見てきた男だけが持つ、静かな威厳。<br>部屋全体を支配するような存在感。</p><p>S氏は、俺の人生を変えた男だ。</p><p>そして、もう一人。<br>小川真理子（おがわ まりこ）。50代後半。<br>噂には聞いていた。<br>彼女もまた、この業界で名の知れた人物だ。</p><p>個室には、ただならぬ空気が漂っていた。<br>沈黙が、重くのしかかる。</p><p>俺は、あの日のことを思い出していた。</p><div style="margin: 4em 1em; padding: 0 1em; border-top: 1px solid #a89f91; border-bottom: 1px solid #a89f91; padding: 2em 0;">渋谷。<br><br>ど真ん中のビルの高層階。<br><br>窓の外には、東京の街が広がっていた。</div><p>夕暮れ時。<br>高層ビルのガラスが、夕日を反射して、街全体がオレンジ色に染まっていた。</p><p>でも、音は何も聞こえない。<br>車のクラクションも、人の声も、電車の音も。<br>すべてが、静まり返っている。</p><p>S氏は、窓の外を指差した。<br>そして、静かに言った。</p><div style="font-size: 1.4em; font-weight: 700; text-align: center; margin: 3em 0; color: #8c3a26;">「ソロだったら契約するよ」</div><p>その瞬間、俺の心臓が止まった。</p><p>ソロ。</p><p>俺は、仲間と一緒に夢を追いかけてきた。<br>でも、S氏は、俺一人で勝負しろと言った。</p><div style="text-align: center; margin: 4em 0;"><span style="font-size: 0.9em; color: #a89f91; letter-spacing: 0.2em;">（つづく）</span></div>`
  },
  {
    id: 36,
    title: "幼少期編・第1話「三角屋根の秘密基地」",
    category: "Story",
    chapter: 1,
    readTime: "4 min",
    excerpt: "7歳の僕には、王国があった。場所は札幌。3階建てのログハウスの、三角屋根の部屋。",
    audioLength: "04:12",
    image: "http://xn--3-sj5c.jp/blog/wp-content/uploads/2025/12/幼少期編-サムネ.png",
    caption: "天窓から見た空",
    content: `<p>7歳の僕には、王国があった。<br>場所は札幌。3階建てのログハウスの、三角屋根の部屋。</p><p>国民は僕だけ。<br>人口1人。<br>GDP、0円。<br>主な産業、妄想。</p><p>いや、王国は言いすぎたかもしれない。<br>秘密基地。うん、秘密基地のほうがしっくりくる。</p><div style="font-size: 1.2em; text-align: center; margin: 3em 0; color: #555;">3階建て。ログハウス。天窓。</div><p>その部屋は、屋根裏と部屋の中間みたいな場所だった。<br>天窓がひとつだけあって、そこから光が斜めに落ちてくる。<br>僕はその光に手を入れるのが好きだった。</p><p>なんか、、、いい感じだった。<br>勇者が伝説の剣を見つける直前みたいな気持ちになれた。</p><div style="background-color: rgba(140, 58, 38, 0.05); padding: 2em; margin: 3em 0; font-style: italic;">友達？<br><br><strong>いない (^ ^)</strong><br><br>でも関係なかった。<br>だって僕には妄想があった。</div><p>設定が決まったら、天窓からの光をダークネス・アイに当てる。<br>心の中で叫ぶ。<br>「うわあああああ！！」</p><p>魔王、倒した。<br>世界、救った。</p><div style="font-size: 1.1em; text-align: center; margin: 3em 0;">7歳、札幌、屋根裏。<br><br><strong>世界、何回救ったか分からない。</strong><br><br>誰にも感謝されたことないけど (-_-)</div>`
  },
  {
    id: 39,
    title: "幼少期編・第2話「レイガンと夕暮れ」",
    category: "Story",
    chapter: 2,
    readTime: "5 min",
    excerpt: "僕の妄想力は、日々進化していた。",
    audioLength: "05:00",
    image: "http://xn--3-sj5c.jp/blog/wp-content/uploads/2025/12/幼少期編-サムネ.png",
    caption: "夕暮れの公園にて",
    content: `<p>僕の妄想力は、日々進化していた。</p><p>三角屋根の秘密基地で「設定を作る遊び」を覚えた僕は、次のステージに進んでいた。</p><p>人形遊び。</p><p>といっても、大量の人形があったわけじゃない。<br>ヒーローの人形が、ひとつ。<br>たったひとつ。</p><div style="border-left: 2px solid #8c3a26; padding-left: 1.5em; margin: 2em 0; color: #5d5553;">人形はひとつ。<br>世界観は関ヶ原くらい広がった。</div><p>当時、幽☆遊☆白書が流行っていた。<br>主人公の浦飯幽助が使う必殺技、霊丸（レイガン）。<br>指先から霊気を発射するやつ。</p><p>あれが撃ちたかった。</p><p>ある日、近所の子が言った。<br>「……なあ、レイガンの撃ち方、知りたい？」</p><div style="font-size: 1.3em; font-weight: 700; text-align: center; margin: 3em 0;">「30分間、温めろ」</div><p>僕は信じた。<br>その日から、学校帰りの30分間、僕はずっとレイガンを温めていた。</p><p>夕方5時。<br>外で遊んでいると、あちこちから声が聞こえてくる。<br>みんな、名前を呼ばれて帰っていく。</p><p>僕は、呼ばれない。<br>だって、家には誰もいないから。</p><div style="text-align: center; margin: 4em 0; color: #8c3a26;">あの寂しさが、全部、力になった。</div>`
  },
  {
    id: 42,
    title: "幼少期編・第3話「ゲンちゃんと夜の温泉」",
    category: "Story",
    chapter: 3,
    readTime: "5 min",
    excerpt: "ゲンちゃん。お父さんの親友。大人なのに、「ゲンちゃん」と呼んでいい人だった。",
    audioLength: "04:45",
    image: "http://xn--3-sj5c.jp/blog/wp-content/uploads/2025/12/幼少期編-サムネ.png",
    caption: "最高のキャンプ",
    content: `<p>僕の人生で、一番楽しみにしていたこと。<br>それは、ゲンちゃんと家族でキャンプに行くことだった。</p><p>ゲンちゃん。<br>お父さんの親友。<br>大人なのに、「ゲンちゃん」と呼んでいい人だった。</p><p>キャンプ場に着いたら、さらに妄想は加速する。<br>テントを張る場所を決めるだけで、冒険だった。<br>「ここは敵に見つかりにくい」とか言って。</p><p>でも、僕の中でキャンプの醍醐味は、実は別のところにあった。</p><div style="font-size: 1.5em; text-align: center; margin: 2em 0; letter-spacing: 0.2em;">帰り道。</div><p>夜の温泉。<br>露天風呂。<br>外は寒い。<br>でも湯船はあったかい。<br>星が見える。</p><div style="text-align: center; margin: 3em 0;"> <span style="font-size: 1.1em;">疲れた体に、お湯が染みる。</span><br><br> <span style="color: #666;">子供ながらに、「生きてるって最高だな」と思った。</span> </div>`
  },
  {
    id: 44,
    title: "少年期編・第4話「A面とB面」",
    category: "Story",
    chapter: 4,
    readTime: "4 min",
    excerpt: "僕には、A面とB面がある。A面はサッカー少年団の僕。B面はそれ以外の僕。",
    audioLength: "04:00",
    image: "http://xn--3-sj5c.jp/blog/wp-content/uploads/2025/12/少年期編サムネ.png",
    caption: "ボールを追いかけた日々",
    content: `<p>僕は引っ越しが多い子供だった。<br>ログハウス → 平屋 → 庭付き一軒家。</p><p>西野に来て、サッカー少年団に入った。</p><p>でも、ここで僕はあることに気づく。</p><div style="font-size: 1.3em; font-weight: bold; text-align: center; margin: 2em 0; border-bottom: 1px solid #8c3a26; display: inline-block; padding-bottom: 0.5em;">僕には、A面とB面がある。</div><p>A面。サッカー少年団でやるサッカー。<br>B面。それ以外でやるサッカー。</p><p>この2つが、全然違った。</p><p>A面の僕は、ダメだった。<br>緊張する。体が固まる。<br>「ちゃんとやらなきゃ」「見られている」</p><p>でも、B面は違った。</p><p>体が勝手に動いた。<br>褒められると、もっと動ける。</p><div style="background-color: #f0ebe5; padding: 2em; margin: 3em 0;">今思えば、これが僕の「本番に弱い」の始まりだったのかもしれない。<br>見られると、固まる。<br>評価されると、動けなくなる。</div>`
  },
  {
    id: 62,
    title: "中学校編・第7話「1,2,3,4の魔法」",
    category: "Story",
    chapter: 7,
    readTime: "5 min",
    excerpt: "中学1年生。ツネの部屋には、大きなドラムセットがあった。",
    audioLength: "05:10",
    image: "http://xn--3-sj5c.jp/blog/wp-content/uploads/2025/12/中学校-前編.png",
    caption: "魔法がかかった瞬間",
    content: `<p>中学1年生になった。</p><p>登校メンバーに、<strong>「ツネ」</strong>が参加することになった。</p><p>そして、流れで<strong>ツネがサッカー部に入部</strong>した。<br>部活が終わったら、5〜6人でツネの家に行ってゲームやミニ四駆をすることがルーティンとなった。</p><p>ツネの部屋には、<strong>大きなドラムセット</strong>があった。</p><h2>運命の日</h2><p>たまたま<strong>ドラムのあるツネの部屋</strong>でみんなが集まっていた。</p><p>珍しく本を読む俺。<br>ベースを弾くやつ。<br>ギターを弾く加藤。<br>ドラムを叩くツネ。</p><p>そんな中、加藤が言葉を発する。</p><div style="font-size: 1.2em; text-align: center; margin: 2em 0;">「少し、合わせるか」</div><p>そして、<br>キョトン顔のツネが表情を変え、</p><div style="text-align: center; margin: 3em 0;"><span style="font-size: 2em; font-weight: 900; color: #8c3a26;">1, 2, 3, 4</span></div><p>とカウントを始める。</p><p>その瞬間、</p><p><strong>音の塊が、僕の全身を駆け巡った。</strong></p><p>なんだ、これ。<br><strong>ヤバい。</strong></p><p>ツネの部屋での<strong>1,2,3,4のカウント</strong>。<br>深夜番組での<strong>モト冬樹のギター</strong>。<br>この2つが、俺を変えた。</p>`
  },
  {
    id: 84,
    title: "中学校編・第11話「メカラウロコと、僕らの東京ドーム」",
    category: "Story",
    chapter: 11,
    readTime: "7 min",
    excerpt: "2001年1月8日。東京ドーム。THE YELLOW MONKEYのラストライブ。",
    audioLength: "07:20",
    image: "http://xn--3-sj5c.jp/blog/wp-content/uploads/2025/12/中学校-後編.png",
    caption: "公民館で見た夢",
    content: `<p>2001年1月8日。<br>この日付を、僕は一生忘れない。</p><div style="border: 4px double #8c3a26; padding: 2em; text-align: center; margin: 3em 0;"><div style="font-size: 1.2em;">THE YELLOW MONKEY<br>「メカラ ウロコ・8」<br>東京ドーム</div></div><p>事実上の、ラストライブだった。<br>ビデオを見ていたら、ある曲が流れた。<br>イントロが始まった瞬間、体が固まった。</p><div style="font-size: 1.3em; font-weight: bold; text-align: center; margin: 2em 0;">「外国で飛行機が落ちました」</div><p>あの曲だ。<br>あの先輩が歌っていたのは、<strong>JAM</strong>という曲だった。</p><p>消去法で選んだはずのバンド。<br>でも、僕は知らないうちに、もうこのバンドに出会っていた。</p><h2>俺らも、やろう</h2><p>このビデオに感化されて、僕らは決めた。</p><div style="font-size: 1.5em; font-weight: bold; text-align: center; margin: 2em 0; color: #8c3a26;">「ライブ、やろう」</div><p>場所は公民館。<br>近くの、同じ地域にある公民館。<br>数千円で借りれる。</p><p>ライブ当日。<br>公民館に、お客さんが集まってきた。</p><p>セットリストは、メカラウロコ・8の丸パクリ。<br>でも、関係なかった。<br>僕らは、僕らの東京ドームをやっていた。</p><div style="text-align: center; margin: 4em 0;"><span style="font-size: 1.3em; font-weight: bold;">中学校編、完。</span><br><br><span style="color: #a89f91;">高校編へ続く——</span></div>`
  }
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
  const tocScrollTimeoutRef = useRef(null);

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

      {/* LEFT: SIDEBAR */}
      <div className={`
        absolute inset-0 z-40 bg-[#f7f4eb] transition-transform duration-500 transform shadow-xl
        md:relative md:translate-x-0 md:w-[400px] md:border-r border-[#e6e2d8] flex flex-col md:shadow-none
        ${viewMode === 'reader' && activePost ? '-translate-x-full md:translate-x-0' : 'translate-x-0'}
      `}>
        <div className="p-8 pb-4 border-b border-[#e6e2d8] bg-[#f7f4eb] sticky top-0 z-20 flex justify-between items-start shrink-0">
          <div>
            <div className="flex items-center gap-3 mb-2 opacity-50">
              <Home size={16} className="text-[#8c3a26]" />
              <span className="text-xs tracking-[0.3em] font-bold uppercase text-[#8c3a26]">NOKE MONOGATARI</span>
            </div>
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
          <div className={`${activePost ? 'pt-4 border-t border-[#e6e2d8]/50' : ''} text-center`}>
             <p className="text-[10px] text-[#a89f91] tracking-widest uppercase font-sans">SAPPORO MASHROOM STUDIO</p>
          </div>
        </div>
      </div>

      {/* RIGHT: READER */}
      <div className="flex-1 relative bg-[#f7f4eb] h-full flex flex-col min-w-0">
        {showPreview && <PreviewArea post={hoveredPost} fontClass={currentFont.class} />}

        {activePost ? (
          <>
            <div className="absolute top-0 right-0 p-6 flex flex-col gap-4 z-30 transition-opacity duration-500 pointer-events-none">
               <button
                 onClick={toggleLayout}
                 className="w-10 h-10 rounded-full bg-[#f7f4eb]/50 border border-[#e6e2d8] flex items-center justify-center text-[#a89f91] hover:text-[#8c3a26] transition-colors pointer-events-auto backdrop-blur-sm"
                 title={isVertical ? "横書きにする" : "縦書きにする"}
               >
                 {isVertical ? <AlignHorizontalJustifyCenter size={18} /> : <AlignVerticalJustifyCenter size={18} />}
               </button>
            </div>

            <div className="md:hidden absolute top-4 left-4 z-50">
               <button
                onClick={handleBackToToc}
                className="flex items-center gap-1 text-[#8c3a26] font-bold text-xs bg-[#f7f4eb]/90 px-3 py-2 rounded-full border border-[#e6e2d8] shadow-sm"
              >
                <ChevronLeft size={14} /> 目次
              </button>
            </div>

            <div className={`
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

                <div className={`${isVertical ? 'mr-24 flex items-center justify-center' : 'mt-32 text-center'}`}>
                  <div className="flex flex-col items-center gap-12">
                     <div className="flex flex-col items-center gap-2 text-[#a89f91]">
                        <Feather size={20} className="opacity-50" />
                        <span className={`text-[10px] tracking-widest ${isVertical ? 'writing-vertical-rl' : ''}`}>読了</span>
                     </div>
                     {activePost.image && (
                       <div className={`polaroid group max-w-xs ${isVertical ? 'writing-vertical-rl rotate-1 mt-0 mr-12' : 'rotate-1'}`}>
                         <div className="w-full aspect-[4/3] overflow-hidden bg-gray-200">
                           <img src={activePost.image} className="w-full h-full object-cover sepia-[0.3] opacity-90 animate-slow-zoom" alt="" />
                         </div>
                         <div className={`text-center pt-4 font-handwriting text-[#5d5553] text-sm italic ${isVertical ? 'writing-vertical-rl pt-0 pr-4' : ''}`}>
                           {activePost.caption || "記憶の欠片"}
                         </div>
                       </div>
                     )}
                  </div>
                </div>
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

export default function App() {
  const [selectedPost, setSelectedPost] = useState(null);
  return (
    <>
      <FontLoader />
      <StoryLayout posts={POSTS} onSelect={setSelectedPost} activeId={selectedPost?.id} />
    </>
  );
}
```

---

## 主要機能

1. **縦書き/横書き切り替え** - ボタンでトグル
2. **フォント切り替え** - 5種類の日本語フォント
3. **目次** - 左サイドバー、ザッピング機能
4. **ホバープレビュー** - ポラロイド風プレビュー
5. **オーディオプレイヤー** - モック実装

---

## 注意事項

1. **client:load必須**: `<StoryApp client:load />` でReactをハイドレート
2. **lucide-react**: 既にインストール済みか確認 (`npm install lucide-react`)
3. **Tailwind**: 既に設定済み
4. **スタイル競合回避**: NOKEのスタイルは`.noke-`プレフィックス推奨

---

## バックアップ情報

- **場所**: `_backup/20260110_172301/`
- 復元が必要な場合はここから取得可能
