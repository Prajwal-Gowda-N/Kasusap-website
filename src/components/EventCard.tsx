// src/components/EventCard.tsx
import { tEvent } from '../lib/districtnames';
import { lang } from '../lib/lang';
import Carousel from './Carousel.tsx';
import { createEffect } from 'solid-js';

interface Props {
  event: {
    title: { en: string; kn: string };
    description: { en: string; kn: string };
    images: string[];
  };
}

export default function EventCard(props: Props) {
  const translated = () => tEvent(props.event);

  createEffect(() => {
    lang(); // Subscribe
    translated();
  });

  return (
    <div class="w-full max-w-2xl mx-auto">
      <div class="bg-white rounded-xl shadow-md overflow-hidden w-full">
        <Carousel images={props.event.images} />
        <div class="p-5">
          <h3 class="text-xl font-bold text-gray-800">{translated().title}</h3>
          <p class="mt-2 text-gray-600">{translated().description}</p>
        </div>
      </div>
    </div>
  );
}