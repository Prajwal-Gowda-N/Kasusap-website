// src/components/DistrictHeader.tsx
import { t, districtName } from '../lib/districtnames';
import { lang } from '../lib/lang';
import { createEffect } from 'solid-js';

interface Props {
  district: string;
}

export default function DistrictHeader(props: Props) {
  createEffect(() => {
    lang(); // Subscribe
  });

  return (
    <div>
      <a href="/districts" class="text-blue-600 hover:underline inline-flex items-center gap-1">
        <span class="text-lg">←</span> {t("Districts", "ಜಿಲ್ಲೆಗಳು")}
      </a>
      <h1 class="text-3xl font-bold text-blue-800 mt-2">
        {districtName(props.district)}
      </h1>
    </div>
  );
}