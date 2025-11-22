// src/components/DistrictGrid.tsx
import { For } from 'solid-js';
import DistrictCard from './DistrictCard.tsx';

interface Props {
  districtsWithEvents: string[];
}

export default function DistrictGrid(props: Props) {
  return (
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      <For each={props.districtsWithEvents}>
        {(slug) => <DistrictCard slug={slug} />}
      </For>
    </div>
  );
}