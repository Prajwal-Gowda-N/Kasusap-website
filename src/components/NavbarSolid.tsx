// src/components/NavbarSolid.tsx
import { lang, switchLang } from '../lib/lang';
import { createEffect } from 'solid-js';

const nav = {
  home: { en: "Home", kn: "ಮುಖಪುಟ" },
  events: { en: "Events", kn: "ಕಾರ್ಯಕ್ರಮಗಳು" },
  about: { en: "About", kn: "ಬಗ್ಗೆ" },
  contact: { en: "Contact", kn: "ಸಂಪರ್ಕಿಸಿ" },
};

const t = (item: { en: string; kn: string }) => 
  lang() === 'en' ? item.en : item.kn;

export default function NavbarSolid() {
  createEffect(() => lang()); // ← Makes everything reactive

  return (
    <nav class="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t z-50 md:static md:shadow-none">
      <div class="max-w-7xl mx-auto">

        {/* MOBILE */}
        <div class="flex md:hidden justify-around items-center py-3">
          <a href="/" class="flex flex-col items-center text-blue-600">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2L3 7v11h14V7l-7-5z"/></svg>
            <span class="text-xs">{t(nav.home)}</span>
          </a>

          <a href="/districts" class="flex flex-col items-center text-orange-600 font-bold">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M6 2v2H4v14h12V4h-2V2h-2v2H8V2H6z"/></svg>
            <span class="text-xs">{t(nav.events)}</span>
          </a>

          <a href="/about" class="flex flex-col items-center text-gray-700">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 20a10 10 0 110-20 10 10 0 010 20zm1-11h1v5h-1v-5zm0-3h1v1h-1V6z"/></svg>
            <span class="text-xs">{t(nav.about)}</span>
          </a>

          <div class="flex gap-1 bg-gray-100 p-1 rounded-lg">
            <button
              class={`px-3 py-1 text-xs rounded ${lang() === 'en' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
              onClick={() => switchLang('en')}
            >EN</button>
            <button
              class={`px-3 py-1 text-xs rounded ${lang() === 'kn' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
              onClick={() => switchLang('kn')}
            >ಕನ್ನಡ</button>
          </div>
        </div>

        {/* DESKTOP */}
        <div class="hidden md:flex justify-between items-center py-4 px-6">
          <a href="/" class="text-2xl font-bold text-blue-800">KASUSAP</a>
          <div class="flex items-center gap-8">
            <a href="/" class="hover:text-blue-600">{t(nav.home)}</a>
            <a href="/about" class="hover:text-blue-800">{t(nav.about)}</a>
            <a href="/districts" class="hover:text-blue-800">
              {t(nav.events)}
            </a>
            <a href="/contact" class="hover:text-blue-800">{t(nav.contact)}</a>
            <div class="flex gap-1 bg-gray-100 p-1 rounded-lg">
              <button class={`px-3 py-1 ${lang() === 'en' ? 'bg-blue-600 text-white' : ''}`}
                      onClick={() => switchLang('en')}>English</button>
              <button class={`px-3 py-1 ${lang() === 'kn' ? 'bg-blue-600 text-white' : ''}`}
                      onClick={() => switchLang('kn')}>ಕನ್ನಡ</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}