/**
 * GEMINIのHTMLコードから画像パスを抽出するスクリプト
 * 
 * 使用方法:
 * 1. GEMINIのHTMLコードを gemini-output.html に保存
 * 2. このスクリプトを実行: node extract-paths.js
 * 3. 抽出されたパスが paths.txt に出力されます
 */

const fs = require('fs');
const path = require('path');

// GEMINIのHTMLファイルを読み込む
const htmlFile = 'gemini-output.html';
const outputFile = 'extracted-paths.txt';

if (!fs.existsSync(htmlFile)) {
  console.error(`❌ ${htmlFile} が見つかりません`);
  console.log('💡 GEMINIのHTMLコードを gemini-output.html に保存してください');
  process.exit(1);
}

const html = fs.readFileSync(htmlFile, 'utf-8');

// パスを抽出する正規表現パターン
const patterns = [
  // <img src="...">
  /<img[^>]+src=["']([^"']+)["']/gi,
  // <video src="...">
  /<video[^>]+src=["']([^"']+)["']/gi,
  // <source src="...">
  /<source[^>]+src=["']([^"']+)["']/gi,
  // CSS url()
  /url\(["']?([^"')]+)["']?\)/gi,
  // background-image: url(...)
  /background-image:\s*url\(["']?([^"')]+)["']?\)/gi,
  // style属性内のurl()
  /style=["'][^"']*url\(["']?([^"')]+)["']?\)[^"']*["']/gi,
];

const extractedPaths = new Set();

// 各パターンでパスを抽出
patterns.forEach((pattern, index) => {
  let match;
  while ((match = pattern.exec(html)) !== null) {
    const extractedPath = match[1];
    // 相対パスや絶対パスをそのまま記録
    if (extractedPath && !extractedPath.startsWith('data:')) {
      extractedPaths.add(extractedPath);
    }
  }
});

// 結果をソート
const sortedPaths = Array.from(extractedPaths).sort();

// 出力ファイルに書き込む
const output = [
  '='.repeat(60),
  'GEMINI HTMLコードから抽出された画像パス',
  '='.repeat(60),
  '',
  `抽出日時: ${new Date().toLocaleString('ja-JP')}`,
  `抽出数: ${sortedPaths.length}`,
  '',
  '='.repeat(60),
  '',
  ...sortedPaths.map((path, index) => `${index + 1}. ${path}`),
  '',
  '='.repeat(60),
  '',
  '💡 次のステップ:',
  '1. このリストを確認',
  '2. ASSETS_MAPPING_TEMPLATE.md にマッピング表を作成',
  '3. 既存素材と対応付け',
  '4. パスを置き換え',
  '',
].join('\n');

fs.writeFileSync(outputFile, output, 'utf-8');

console.log('✅ パス抽出完了！');
console.log(`📄 結果は ${outputFile} に保存されました`);
console.log(`📊 抽出されたパス数: ${sortedPaths.length}`);
console.log('');
console.log('抽出されたパス:');
sortedPaths.forEach((path, index) => {
  console.log(`  ${index + 1}. ${path}`);
});
