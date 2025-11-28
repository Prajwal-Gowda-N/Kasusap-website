// src/lib/lang.ts
import { createSignal, createRoot } from 'solid-js';

// Global reactive store
const [lang, setLang] = createRoot(() => createSignal<Lang>('en'));

export type Lang = 'en' | 'kn';

// Load from localStorage
const getInitialLang = (): Lang => {
  if (typeof window === 'undefined') return 'kn';
  const saved = localStorage.getItem('lang');
  return saved === 'en' || saved === 'kn' ? saved : 'kn';
};

// Initialize
setLang(getInitialLang());

// Export
export { lang };

// Switch + persist + notify
export const switchLang = (newLang: Lang) => {
  setLang(newLang);
  localStorage.setItem('lang', newLang);
  window.dispatchEvent(new Event('langchange'));
};

// Listen globally
if (typeof window !== 'undefined') {
  window.addEventListener('langchange', () => {
    // Force re-render in all Solid components
    document.body.dispatchEvent(new Event('lang-updated'));
  });
}