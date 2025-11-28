// src/components/ContactCard.tsx
import { lang } from '../lib/lang';
import { leadership } from '../lib/districtnames';
import { createSignal, onMount } from 'solid-js';

interface Props {
  index: number;   // 0, 1, 2 → matches order in leadership[]
}

export default function ContactCard(props: Props) {
  const person = leadership[props.index];

  // Optional: force re-render on lang change (Solid automatically tracks lang())
  const currentLang = lang;

  return (
    <div class="contact-card flex items-center gap-5 p-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-xl border border-white/30">
      {/* Image */}
      <img
        src={person.image || '/images/avatar.jpg'}
        alt={currentLang() === 'en' ? person.name.en : person.name.kn}
        class="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full border-4 border-white shadow-lg"
        loading="lazy"
      />

      {/* Info */}
      <div class="flex-1 text-left">
        {/* Name */}
        <h3 class="text-xl md:text-2xl font-bold text-gray-900">
          {currentLang() === 'en' ? person.name.en : person.name.kn}
        </h3>

        {/* Title */}
        <p class="text-orange-600 font-semibold text-sm md:text-base mt-1">
          {currentLang() === 'en' ? person.title.en : person.title.kn}
        </p>

        {/* Description */}
        <p class="text-gray-700 text-sm md:text-base mt-2 leading-relaxed line-clamp-3">
          {currentLang() === 'en' ? person.description.en : person.description.kn}
        </p>

        {/* Contact Details */}
        <div class="mt-4 space-y-2 text-sm text-gray-800">
          <p class="flex items-center gap-2">
            Location: <span class="font-medium">{person.location}</span>
          </p>
          <p class="flex items-center gap-2">
            Phone: <a href={`tel:${person.phone}`} class="text-blue-600 hover:underline font-medium">
              {person.phone}
            </a>
          </p>
          <p class="flex items-center gap-2">
            Email: <a href={`mailto:${person.email}`} class="text-blue-600 hover:underline break-all font-medium">
              {person.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}