/**
 * Gemini API Thumbnail Generator
 *
 * このスクリプトはGemini APIを使用してブログ記事のサムネイルを自動生成します。
 *
 * 使い方:
 * 1. Google AI Studioから APIキーを取得
 * 2. 環境変数に設定: export GEMINI_API_KEY="your-api-key"
 * 3. 実行: node scripts/generate-thumbnails.js
 *
 * スタイル: レトロイラスト風、フラットデザイン、音楽制作・テック系
 */

import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs/promises";
import path from "path";

// 設定
const CONFIG = {
  outputDir: "./public/images/thumbnails",
  articlesDir: "./src/content",
  imageWidth: 800,
  imageHeight: 450,
};

// 共通のイラストスタイル
const ILLUSTRATION_STYLE = `
Retro flat illustration style, warm muted color palette (beige, cream, soft greens, warm oranges),
hand-drawn aesthetic with clean lines, vintage 70s-80s Japanese illustration vibes,
cozy home studio atmosphere, plants and indoor elements, soft shadows,
similar to editorial illustration or magazine cover art.
NO photorealistic, NO 3D rendering, NO dark moody lighting.
Horizontal 16:9 aspect ratio, no text in the image.
`;

// 記事データ - DTM
const dtmArticles = [
  {
    slug: "analog-comp-1176",
    title: "実機コンプの魔力",
    description: "1176LN倍音分析",
    category: "dtm",
    prompt: "A person adjusting knobs on a vintage 1176 compressor in a cozy home studio, VU meters glowing warmly, keyboard and plants nearby",
  },
  {
    slug: "automation-aesthetics",
    title: "オートメーションの美学",
    description: "サビ前で「引く」技術",
    category: "dtm",
    prompt: "A music producer looking at a computer screen showing DAW automation curves, hand on mouse, headphones around neck, warm lighting, plants on desk",
  },
  {
    slug: "cable-management",
    title: "スタジオのケーブル配線術",
    description: "美しい配線とノイズ対策",
    category: "dtm",
    prompt: "A person organizing colorful audio cables in a home studio, patch bay visible, neatly coiled cables, satisfaction expression, plants and monitors in background",
  },
  {
    slug: "mic-preamp-neve-api",
    title: "マイクプリアンプ比較：NEVE vs API",
    description: "クラシックなマイクプリの特性比較",
    category: "dtm",
    prompt: "Two vintage preamp units side by side on a wooden desk, one labeled NEVE style (blue/gray), one API style (orange/black), person comparing them thoughtfully",
  },
  {
    slug: "pro-q3-master",
    title: "Pro-Q3 最強説",
    description: "ミックスの8割はこれ",
    category: "dtm",
    prompt: "A music producer intensely focused on an EQ plugin on screen showing colorful frequency bands, headphones on, coffee cup nearby, cozy studio setup",
  },
  {
    slug: "reverb-space-design",
    title: "リバーブで「空間」をデザインする",
    description: "空間を創造するツールとしての使い方",
    category: "dtm",
    prompt: "A producer in a home studio with visual representation of sound waves and reverb echoing in the room, dreamy atmosphere, speakers and keyboard visible",
  },
  {
    slug: "song-completion-cure",
    title: "曲が完成しない病の処方箋",
    description: "8小節ループからの脱却法",
    category: "dtm",
    prompt: "A frustrated but hopeful music producer breaking free from a repeating loop visualization, light bulb moment, DAW showing arrangement view extending forward",
  },
  {
    slug: "studio-one-65",
    title: "Studio One 6.5 時短術",
    description: "Studio One 6.5の時短テクニック",
    category: "dtm",
    prompt: "A happy producer working efficiently in Studio One DAW, multiple shortcuts floating around, clock showing saved time, clean modern home studio",
  },
  {
    slug: "studio-one-65-macro",
    title: "Studio One 6.5 時短術：マクロで世界を変える",
    description: "レコーディング準備時間を半減させる技術",
    category: "dtm",
    prompt: "A producer setting up macros with keyboard shortcuts visualized as floating icons, recording equipment ready, satisfied expression, home studio setup",
  },
  {
    slug: "subsidy-business",
    title: "補助金と経営",
    description: "事業再構築補助金の実録ドキュメント",
    category: "dtm",
    prompt: "A music studio owner reviewing business documents at a desk, calculator and papers, music equipment in background, professional but creative atmosphere",
  },
  {
    slug: "waves-wup-guide",
    title: "WAVES更新料の話：WUPとの付き合い方",
    description: "Waves Update Planの賢い活用方法",
    category: "dtm",
    prompt: "A producer looking at multiple Waves plugin windows on screen, thinking pose, plugin collection visualization, home studio with keyboard and monitors",
  },
];

// 記事データ - TECH
const techArticles = [
  {
    slug: "chatgpt-searched-myself",
    title: "ChatGPTに自分のことを調べさせたら感動した話",
    description: "ChatGPTに「真柴道ゐ」を調べてもらった",
    category: "tech",
    prompt: "A person amazed looking at a laptop screen showing AI chat interface, warm glow from screen, self-discovery moment, cozy room with plants",
  },
  {
    slug: "ai-as-sparring-partner",
    title: "AIは壁打ち相手として最強だった",
    description: "壁打ち相手としてのAI活用法",
    category: "tech",
    prompt: "A person having a conversation with AI visualized as friendly robot icon on screen, brainstorming with floating idea bubbles, creative home office",
  },
  {
    slug: "astro-content-collections",
    title: "Astro Content Collectionsで記事管理システムを構築した話",
    description: "型安全な記事管理システムを構築",
    category: "tech",
    prompt: "A developer organizing file folder icons floating around, Astro rocket logo style element, clean organized code on screen, plants and coffee",
  },
  {
    slug: "claude-code-first-week",
    title: "Claude Codeを1週間使ってわかったこと",
    description: "AIペアプログラマーとしてのClaude Codeの実力",
    category: "tech",
    prompt: "A developer pair programming with AI assistant, terminal window with code, collaborative atmosphere, one week calendar visible, cozy workspace",
  },
  {
    slug: "vibe-coding-philosophy",
    title: "Vibe Codingという新しい開発スタイル",
    description: "AIと一緒にコードを書く時代の開発哲学",
    category: "tech",
    prompt: "A relaxed developer coding with music playing, headphones on, lo-fi aesthetic, code and music notes mixing together, plants and warm lighting",
  },
  {
    slug: "first-tech-post",
    title: "TECH LAB システム構築開始",
    description: "リアルタイムPJ発信システムを構築中",
    category: "tech",
    prompt: "A developer launching a new project, rocket launch visualization from computer, blueprints and code mixing, excited expression, lab-like home office",
  },
];

const articles = [...dtmArticles, ...techArticles];

async function generateThumbnail(article, genAI) {
  const fullPrompt = `${article.prompt}. ${ILLUSTRATION_STYLE}`;

  console.log(`\n📸 Generating: ${article.title}`);
  console.log(`   Category: ${article.category}`);

  try {
    // Imagen 4 モデルを使用
    const model = genAI.getGenerativeModel({
      model: "imagen-4.0-generate-001",
    });

    const result = await model.generateContent({
      contents: [{
        role: "user",
        parts: [{ text: fullPrompt }]
      }],
      generationConfig: {
        responseModalities: ["TEXT", "IMAGE"],
      },
    });

    const response = result.response;

    // 画像データを保存
    const outputPath = path.join(
      CONFIG.outputDir,
      article.category,
      `${article.slug}.png`
    );

    // 出力ディレクトリを確保
    await fs.mkdir(path.dirname(outputPath), { recursive: true });

    // 画像データの取得と保存
    if (response.candidates && response.candidates[0]) {
      const parts = response.candidates[0].content.parts;
      for (const part of parts) {
        if (part.inlineData && part.inlineData.mimeType.startsWith("image/")) {
          const buffer = Buffer.from(part.inlineData.data, "base64");
          await fs.writeFile(outputPath, buffer);
          console.log(`   ✅ Saved: ${outputPath}`);
          return outputPath;
        }
      }
    }

    console.log(`   ⚠️ No image data received`);
    return null;
  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    return null;
  }
}

async function updateFrontmatter(article, thumbnailPath) {
  const mdPath = path.join(CONFIG.articlesDir, article.category, `${article.slug}.md`);

  try {
    let content = await fs.readFile(mdPath, "utf-8");
    const newThumbnail = `/images/thumbnails/${article.category}/${article.slug}.png`;

    // thumbnail行を更新
    content = content.replace(
      /^thumbnail:.*$/m,
      `thumbnail: ${newThumbnail}`
    );

    await fs.writeFile(mdPath, content);
    console.log(`   📝 Updated frontmatter: ${mdPath}`);
    return true;
  } catch (error) {
    console.error(`   ⚠️ Could not update frontmatter: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log("🎨 Gemini Thumbnail Generator");
  console.log("================================");
  console.log("Style: Retro flat illustration, warm colors, cozy studio vibes\n");

  // APIキーの確認
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("❌ GEMINI_API_KEY environment variable is not set");
    console.log("\n📝 To set up:");
    console.log("1. Go to https://aistudio.google.com/apikey");
    console.log("2. Create an API key");
    console.log("3. Run: export GEMINI_API_KEY='your-api-key'");
    console.log("4. Then run this script again");
    process.exit(1);
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  console.log(`📂 Output directory: ${CONFIG.outputDir}`);
  console.log(`📝 Articles to process: ${articles.length}`);
  console.log(`   - DTM: ${dtmArticles.length}`);
  console.log(`   - TECH: ${techArticles.length}\n`);

  // 各記事のサムネイルを生成
  const results = {
    success: [],
    failed: [],
  };

  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    console.log(`\n[${i + 1}/${articles.length}]`);

    const result = await generateThumbnail(article, genAI);
    if (result) {
      results.success.push(article.slug);
      // フロントマターも自動更新
      await updateFrontmatter(article, result);
    } else {
      results.failed.push(article.slug);
    }

    // レート制限対策で少し待機（3秒）
    if (i < articles.length - 1) {
      console.log("   ⏳ Waiting 3 seconds...");
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  }

  // 結果サマリー
  console.log("\n================================");
  console.log("📊 Generation Complete!");
  console.log(`   ✅ Success: ${results.success.length}/${articles.length}`);
  console.log(`   ❌ Failed: ${results.failed.length}`);

  if (results.failed.length > 0) {
    console.log(`\n   Failed articles:`);
    results.failed.forEach(slug => console.log(`   - ${slug}`));
  }

  console.log("\n🎉 Done! Check your thumbnails at:");
  console.log(`   ${CONFIG.outputDir}/dtm/`);
  console.log(`   ${CONFIG.outputDir}/tech/`);
}

main().catch(console.error);
