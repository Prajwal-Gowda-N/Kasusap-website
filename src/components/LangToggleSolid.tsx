// src/components/LangToggleSolid.tsx
import { lang, switchLang } from '../lib/lang';
import { createEffect } from 'solid-js';

export default function LangToggle() {
  // Force re-render on lang change
  createEffect(() => {
    lang(); // Subscribe to signal
  });

  return (
    <div class="flex gap-2 items-center bg-gray-100 p-1 rounded-lg">
      <button
        class={`px-4 py-2 rounded-md transition-all duration-200 font-medium text-sm
          ${lang() === 'en'
            ? 'bg-blue-600 text-white shadow-sm'
            : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
          }`}
        onClick={() => switchLang('en')}
      >
        English
      </button>

      <button
        class={`px-4 py-2 rounded-md transition-all duration-200 font-medium text-sm
          ${lang() === 'kn'
            ? 'bg-blue-600 text-white shadow-sm'
            : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
          }`}
        onClick={() => switchLang('kn')}
      >
        ಕನ್ನಡ
      </button>
    </div>
  );
}