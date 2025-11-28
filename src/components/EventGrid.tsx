// src/components/EventGrid.tsx
import { For } from 'solid-js';
import EventCard from './EventCard.tsx';

interface Props {
  events: Array<{
    title: { en: string; kn: string };
    description: { en: string; kn: string };
    images: string[];
  }>;
}

export default function EventGrid(props: Props) {
  return (
    <div class="space-y-8"> {/* ← One card per row, spaced */}
      <For each={props.events}>
        {(event) => <EventCard event={event} />}
      </For>
    </div>
  );
}