import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CONTENT.mdを読み込む
const contentMd = fs.readFileSync(
  path.join(__dirname, '../CONTENT.md'),
  'utf-8'
);

// コードブロックからテキストを抽出するヘルパー関数
function extractCodeBlock(text, start) {
  const startIndex = text.indexOf('```', start);
  if (startIndex === -1) return null;

  const endIndex = text.indexOf('```', startIndex + 3);
  if (endIndex === -1) return null;

  const content = text
    .substring(startIndex + 3, endIndex)
    .trim()
    .split('\n')
    .filter(line => line.trim());

  return {
    content,
    nextIndex: endIndex + 3
  };
}

// セクションを抽出
const sections = contentMd.split(/^## /m).filter(s => s.trim());

const content = {
  hero: {},
  floor1: {},
  chapters: [],
  newPost: {
    posts: []
  }
};

let currentChapter = null;
let currentPost = null;

sections.forEach(section => {
  const lines = section.split('\n');
  const title = lines[0].trim();

  if (title.includes('HEROセクション')) {
    let idx = 0;
    let block;

    block = extractCodeBlock(section, idx);
    if (block) {
      content.hero.subtitle = block.content.join(' ');
      idx = block.nextIndex;
    }

    block = extractCodeBlock(section, idx);
    if (block) {
      content.hero.title = block.content;
      idx = block.nextIndex;
    }

    block = extractCodeBlock(section, idx);
    if (block) {
      content.hero.scrollText = block.content.join(' ');
    }
  }

  else if (title.includes('FLOOR 1')) {
    let idx = 0;
    let block;

    block = extractCodeBlock(section, idx);
    if (block) {
      content.floor1.floorNumber = block.content.join(' ');
      idx = block.nextIndex;
    }

    block = extractCodeBlock(section, idx);
    if (block) {
      content.floor1.title = block.content;
      idx = block.nextIndex;
    }

    block = extractCodeBlock(section, idx);
    if (block) {
      content.floor1.description = block.content;
      idx = block.nextIndex;
    }

    block = extractCodeBlock(section, idx);
    if (block) {
      content.floor1.scrollText = block.content.join(' ');
    }
  }

  else if (title.includes('CHAPTER')) {
    const chapterData = {
      id: '',
      number: '',
      title: [],
      description: [],
      image: '',
      buttonText: ''
    };

    if (title.includes('01')) chapterData.id = 'story';
    else if (title.includes('02')) chapterData.id = 'gear';
    else if (title.includes('03')) chapterData.id = 'tech';

    let idx = 0;
    let block;

    block = extractCodeBlock(section, idx);
    if (block) {
      chapterData.number = block.content.join(' ');
      idx = block.nextIndex;
    }

    block = extractCodeBlock(section, idx);
    if (block) {
      chapterData.title = block.content;
      idx = block.nextIndex;
    }

    block = extractCodeBlock(section, idx);
    if (block) {
      chapterData.description = block.content;
      idx = block.nextIndex;
    }

    block = extractCodeBlock(section, idx);
    if (block) {
      chapterData.image = block.content.join('');
      idx = block.nextIndex;
    }

    block = extractCodeBlock(section, idx);
    if (block) {
      chapterData.buttonText = block.content.join(' ');
    }

    content.chapters.push(chapterData);
  }

  else if (title.includes('NEW_POST セクション')) {
    let idx = 0;
    let block;

    block = extractCodeBlock(section, idx);
    if (block) {
      content.newPost.title = block.content.join(' ');
      idx = block.nextIndex;
    }

    block = extractCodeBlock(section, idx);
    if (block) {
      content.newPost.titleJa = block.content.join(' ');
      idx = block.nextIndex;
    }

    block = extractCodeBlock(section, idx);
    if (block) {
      content.newPost.subtitle = block.content.join(' ');
    }
  }

  else if (title.includes('記事')) {
    const postData = {
      category: '',
      image: '',
      date: '',
      title: ''
    };

    let idx = 0;
    let block;

    block = extractCodeBlock(section, idx);
    if (block) {
      postData.category = block.content.join(' ');
      idx = block.nextIndex;
    }

    block = extractCodeBlock(section, idx);
    if (block) {
      postData.image = block.content.join('');
      idx = block.nextIndex;
    }

    block = extractCodeBlock(section, idx);
    if (block) {
      postData.date = block.content.join(' ');
      idx = block.nextIndex;
    }

    block = extractCodeBlock(section, idx);
    if (block) {
      postData.title = block.content.join(' ');
    }

    content.newPost.posts.push(postData);
  }
});

// JSONファイルに書き込み
fs.writeFileSync(
  path.join(__dirname, '../src/data/content.json'),
  JSON.stringify(content, null, 2),
  'utf-8'
);

console.log('✅ コンテンツを更新しました!');
console.log('📝 src/data/content.json に保存されました');
