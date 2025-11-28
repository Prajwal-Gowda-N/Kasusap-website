// src/components/ReactiveText.tsx
import { lang } from '../lib/lang';
import { createEffect } from 'solid-js';

interface Props {
  en: string;
  kn: string;
  class?: string;
}

export default function ReactiveText(props: Props) {
  createEffect(() => {
    lang(); // subscribe to language changes
  });

  return (
    <p class={props.class ?? ''}>
      {lang() === 'en' ? props.en : props.kn}
    </p>
  );
}