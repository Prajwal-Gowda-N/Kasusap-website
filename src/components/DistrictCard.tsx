// src/components/DistrictCard.tsx
import { districtName } from '../lib/districtnames';
import { lang } from '../lib/lang';
import { createEffect } from 'solid-js';

interface Props {
  slug: string;
}

export default function DistrictCard(props: Props) {
  const name = () => districtName(props.slug);

  createEffect(() => {
    lang();
    name();
  });

  return (
    <a href={`/${props.slug}`} class="group block">
      <div class="relative overflow-hidden rounded-xl shadow-lg transition-transform group-hover:scale-105">
        <img
          src={`/images/districts/${props.slug}.jpg`}
          alt={name()}
          class="w-full h-48 object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
        <h3 class="absolute bottom-4 left-4 text-white font-semibold text-lg">
          {name()}
        </h3>
      </div>
    </a>
  );
}