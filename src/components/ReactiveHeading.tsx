// src/components/ReactiveHeading.tsx
import { lang } from '../lib/lang';
import { createEffect } from 'solid-js';

interface Props {
  en: string;
  kn: string;
  class?: string;
}

export default function ReactiveHeading(props: Props) {
  createEffect(() => {
    lang(); // subscribe
  });

  return (
    <h2 class={props.class ?? ''}>
      {lang() === 'en' ? props.en : props.kn}
    </h2>
  );
}