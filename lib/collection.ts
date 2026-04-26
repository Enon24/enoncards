import { useSyncExternalStore } from 'react';
const STORAGE_KEY = 'enoncards-collection';
const EVENT_NAME = 'collection-changed';

let cachedCollection: string[] = [];

export function getCollection(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    const parsed = JSON.parse(data ?? '[]');
    const result = Array.isArray(parsed) ? parsed : [];
    if (JSON.stringify(result) !== JSON.stringify(cachedCollection)) {
      cachedCollection = result;
    }
    return cachedCollection;
  } catch {
    return cachedCollection;
  }
}

export function setCollection(ids: string[]): void {
  cachedCollection = ids;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function toggleInCollection(id: string): void {
  const col = getCollection();
  setCollection(col.includes(id) ? col.filter(c => c !== id) : [...col, id]);
}

export function removeFromCollection(id: string): void {
  setCollection(getCollection().filter(c => c !== id));
}

function subscribe(callback: () => void): () => void {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener(EVENT_NAME, callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener(EVENT_NAME, callback);
    window.removeEventListener('storage', callback);
  };
}

export function useCollection(): string[] {
  return useSyncExternalStore(subscribe, getCollection, () => []);
}

export function useCollectionCount(): number {
  return useSyncExternalStore(subscribe, () => getCollection().length, () => 0);
}