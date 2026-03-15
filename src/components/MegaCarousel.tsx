// src/components/Carousel.tsx
import { createSignal, onMount, For } from 'solid-js';

interface Props {
  images: string[] | readonly string[];
  height?: string;
  autoPlay?: boolean;
  interval?: number;
  fullWidth?: boolean;
}

export default function Carousel(props: Props) {
  const [index, setIndex] = createSignal(0);
  const images = () => [...props.images];

  onMount(() => {
    if (!(props.autoPlay ?? true) || images().length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images().length);
    }, props.interval || 2000);  // ← Faster: 2 seconds
    return () => clearInterval(id);
  });

  return (
    <div class={`relative overflow-hidden bg-gray-100 ${props.fullWidth ? 'w-full' : 'max-w-5xl mx-auto'} ${props.height || 'h-80'}`}>
      <For each={images()}>
        {(src, i) => (
          <img
            src={src}
            alt={`Slide ${i() + 1}`}
            class={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i() === index() ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
          />
        )}
      </For>

      {images().length > 1 && (
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          <For each={images()}>
            {(_, i) => (
              <button
                class={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i() === index() ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
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