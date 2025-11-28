// src/components/MegaEventCard.tsx
import { createEffect } from 'solid-js';
import { lang } from '../lib/lang';

interface Props {
  slug: string;
  titleEn: string;
  titleKn: string;
  image: string;
}

export default function MegaEventCard(props: Props) {
  createEffect(() => lang());
  const title = () => lang() === 'kn' ? props.titleKn : props.titleEn;

  return (
    <a href={`/mega/${props.slug}`} class="block group">
      <div class="bg-white rounded-2xl shadow-xl overflow-hidden transform transition group-hover:scale-105">
        <img src={props.image} alt={title()} class="w-full h-64 object-cover" />
        <div class="p-6 text-center">
          <h3 class="text-2xl font-bold text-blue-800">{title()}</h3>
        </div>
      </div>
    </a>
  );
}