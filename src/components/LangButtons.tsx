import { lang, switchLang } from '../lib/lang';

export default function LangButtons() {
  return (
    <div class="flex gap-1 bg-gray-100 p-1 rounded-lg">
      <button
        class={`px-3 py-1 text-xs rounded transition ${lang() === 'en' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
        onClick={() => switchLang('en')}
      >EN</button>
      <button
        class={`px-3 py-1 text-xs rounded transition ${lang() === 'kn' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
        onClick={() => switchLang('kn')}
      >ಕನ್ನಡ</button>
    </div>
  );
}