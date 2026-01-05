import type { Post } from '../data/posts';

/**
 * 日付文字列をDateオブジェクトに変換
 */
function parseDate(dateStr: string): Date {
  return new Date(dateStr);
}

/**
 * 2つの日付の差分（日数）を計算
 */
function getDateDiff(date1: Date, date2: Date): number {
  return Math.abs(date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24);
}

/**
 * 記事の関連度スコアを計算
 * スコアが低いほど関連度が高い
 */
function calculateRelevanceScore(
  currentPost: Post,
  candidatePost: Post,
  currentDate: Date
): number {
  // 同じ記事は除外（呼び出し側でフィルタリング済みを前提）
  
  // 優先度1: タグ一致（現状タグがないため、カテゴリで代替）
  // 優先度2: カテゴリ一致
  const categoryMatch = candidatePost.category === currentPost.category ? 0 : 1000;
  
  // 優先度3: 公開日が近い順（日数差をスコアに加算）
  const candidateDate = parseDate(candidatePost.date);
  const dateDiff = getDateDiff(currentDate, candidateDate);
  
  return categoryMatch + dateDiff;
}

/**
 * 関連記事を取得（安定した結果を返す）
 * 
 * @param currentPost - 現在の記事
 * @param allPosts - すべての記事配列
 * @param count - 取得件数（デフォルト: 3）
 * @returns 関連記事の配列
 */
export function getRelatedPosts(
  currentPost: Post,
  allPosts: Post[],
  count: number = 3
): Post[] {
  // 現在の記事を除外
  const candidates = allPosts.filter((p) => p.id !== currentPost.id);
  
  if (candidates.length === 0) {
    return [];
  }

  const currentDate = parseDate(currentPost.date);

  // スコアを計算してソート
  const scored = candidates
    .map((post) => ({
      post,
      score: calculateRelevanceScore(currentPost, post, currentDate),
    }))
    .sort((a, b) => {
      // スコアが低い順（関連度が高い順）
      if (a.score !== b.score) {
        return a.score - b.score;
      }
      // スコアが同じ場合はIDで安定ソート
      return a.post.id - b.post.id;
    });

  // 上位count件を取得
  const related = scored.slice(0, count).map((item) => item.post);

  // 足りない場合は最新記事で補完（既に取得した記事は除外）
  if (related.length < count) {
    const relatedIds = new Set(related.map((p) => p.id));
    const latest = candidates
      .filter((p) => !relatedIds.has(p.id))
      .sort((a, b) => {
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        return dateB.getTime() - dateA.getTime(); // 新しい順
      })
      .slice(0, count - related.length);
    
    related.push(...latest);
  }

  return related;
}
