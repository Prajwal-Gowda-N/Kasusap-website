// src/components/Carousel.tsx
import { For, createSignal, onMount } from 'solid-js';

interface Props {
  images: string[];
}

export default function Carousel(props: Props) {
  const [index, setIndex] = createSignal(0);

  // Auto-rotate every 3 seconds
  onMount(() => {
    if (props.images.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % props.images.length);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div class="relative overflow-hidden rounded-t-xl h-48">
      <For each={props.images}>
        {(img, i) => (
          <img
            src={img}
            alt="Event"
            class={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i() === index() ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
      </For>

      {/* Optional: Dots */}
      {props.images.length > 1 && (
        <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
          <For each={props.images}>
            {(_, i) => (
              <button
                class={`w-2 h-2 rounded-full transition ${
                  i() === index() ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setIndex(i())}
              />
            )}
          </For>
        </div>
      )}
    </div>
  );
}