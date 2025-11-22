// src/components/Carousel.tsx
import { createSignal, onMount, For } from 'solid-js';

interface Props {
  images: string[] | readonly string[];  // Accept both
  height?: string;
  autoPlay?: boolean;
  interval?: number;
}

export default function Carousel(props: Props) {
  const [index, setIndex] = createSignal(0);

  // FIX: Copy array to make it mutable
  const images = () => [...props.images];  // ← THIS LINE KILLS THE ERROR

  onMount(() => {
    if (!props.autoPlay || images().length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images().length);
    }, props.interval || 3000);
    return () => clearInterval(id);
  });

  return (
    <div class={`relative overflow-hidden rounded-2xl ${props.height || 'h-80'} bg-gray-100`}>
      <For each={images()}>
        {(src, i) => (
          <img
            src={src}
            alt="Event"
            class={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i() === index() ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
          />
        )}
      </For>

      {images().length > 1 && (
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          <For each={images()}>
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