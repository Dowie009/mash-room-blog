// Firebase SDK 統合の準備ファイル
// このファイルを firebase.ts にリネームして使用してください

/*
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Firebase を初期化
const app = initializeApp(firebaseConfig);

// Firestore と Auth をエクスポート
export const db = getFirestore(app);
export const auth = getAuth(app);
*/

// しおり機能の実装例
/*
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase';

export interface Bookmark {
  postId: number;
  userId: string;
  createdAt: Date;
}

export async function addBookmark(postId: number, userId: string) {
  try {
    await addDoc(collection(db, 'bookmarks'), {
      postId,
      userId,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error('Error adding bookmark:', error);
  }
}

export async function getBookmarks(userId: string): Promise<Bookmark[]> {
  try {
    const q = query(collection(db, 'bookmarks'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Bookmark[];
  } catch (error) {
    console.error('Error getting bookmarks:', error);
    return [];
  }
}
*/
