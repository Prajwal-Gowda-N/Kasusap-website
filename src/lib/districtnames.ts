// src/lib/i18n.ts
import { lang } from './lang';

export const districts = [
  { en: 'Bagalkot', kn: 'ಬಾಗಲಕೋಟೆ', slug: 'bagalkot' },
  { en: 'Ballari', kn: 'ಬಳ್ಳಾರಿ', slug: 'ballari' },
  { en: 'Belagavi', kn: 'ಬೆಳಗಾವಿ', slug: 'belagavi' },
  { en: 'Bengaluru Rural', kn: 'ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ', slug: 'bengaluru-rural' },
  { en: 'Bengaluru Urban', kn: 'ಬೆಂಗಳೂರು ನಗರ', slug: 'bengaluru-urban' },
  { en: 'Bidar', kn: 'ಬೀದರ್', slug: 'bidar' },
  { en: 'Chamarajanagar', kn: 'ಚಾಮರಾಜನಗರ', slug: 'chamarajanagar' },
  { en: 'Chikkaballapur', kn: 'ಚಿಕ್ಕಬಳ್ಳಾಪುರ', slug: 'chikkaballapur' },
  { en: 'Chikkamagaluru', kn: 'ಚಿಕ್ಕಮಗಳೂರು', slug: 'chikkamagaluru' },
  { en: 'Chitradurga', kn: 'ಚಿತ್ರದುರ್ಗ', slug: 'chitradurga' },
  { en: 'Dakshina Kannada', kn: 'ದಕ್ಷಿಣ ಕನ್ನಡ', slug: 'dakshina-kannada' },
  { en: 'Davanagere', kn: 'ದಾವಣಗೆರೆ', slug: 'davanagere' },
  { en: 'Dharwad', kn: 'ಧಾರವಾಡ', slug: 'dharwad' },
  { en: 'Gadag', kn: 'ಗದಗ', slug: 'gadag' },
  { en: 'Hassan', kn: 'ಹಾಸನ', slug: 'hassan' },
  { en: 'Haveri', kn: 'ಹಾವೇರಿ', slug: 'haveri' },
  { en: 'Kalaburagi', kn: 'ಕಲಬುರಗಿ', slug: 'kalaburagi' },
  { en: 'Kodagu', kn: 'ಕೊಡಗು', slug: 'kodagu' },
  { en: 'Kolar', kn: 'ಕೋಲಾರ', slug: 'kolar' },
  { en: 'Koppal', kn: 'ಕೊಪ್ಪಳ', slug: 'koppal' },
  { en: 'Mandya', kn: 'ಮಂಡ್ಯ', slug: 'mandya' },
  { en: 'Mysuru', kn: 'ಮೈಸೂರು', slug: 'mysuru' },
  { en: 'Raichur', kn: 'ರಾಯಚೂರು', slug: 'raichur' },
  { en: 'Ramanagara', kn: 'ರಾಮನಗರ', slug: 'ramanagara' },
  { en: 'Shivamogga', kn: 'ಶಿವಮೊಗ್ಗ', slug: 'shivamogga' },
  { en:  'Tumakuru', kn: 'ತುಮಕೂರು', slug: 'tumakuru' },
  { en: 'Udupi', kn: 'ಉಡುಪಿ', slug: 'udupi' },
  { en: 'Uttara Kannada', kn: 'ಉತ್ತರ ಕನ್ನಡ', slug: 'uttara-kannada' },
  { en: 'Vijayanagara', kn: 'ವಿಜಯನಗರ', slug: 'vijayanagara' },
  { en: 'Vijayapura', kn: 'ವಿಜಯಪುರ', slug: 'vijayapura' },
  { en: 'Yadgir', kn: 'ಯಾದಗಿರಿ', slug: 'yadgir' },
] as const;

export const t = (en: string, kn: string) => (lang() === 'en' ? en : kn);

export const districtName = (slug: string) => {
  const d = districts.find(d => d.slug === slug);
  return d ? t(d.en, d.kn) : slug;
};

export const tEvent = (event: {
  title: { en: string; kn: string };
  description: { en: string; kn: string };
}) => ({
  title: t(event.title.en, event.title.kn),
  description: t(event.description.en, event.description.kn),
});

export const nav = {
  home: { en: "Home", kn: "ಮುಖಪುಟ" },
  events: { en: "Events", kn: "ಕಾರ್ಯಕ್ರಮಗಳು" },
  about: { en: "About", kn: "ಬಗ್ಗೆ" },
  contact: { en: "Contact", kn: "ಸಂಪರ್ಕಿಸಿ" },
};

export const hero = {
  title: { en: "Classical Kannada Poetry", kn: "ಶಾಸ್ತ್ರೀಯ ಕನ್ನಡ ಕಾವ್ಯ" },
  subtitle: { en: "Preserving Literary Heritage", kn: "ಸಾಹಿತ್ಯ ಪರಂಪರೆಯ ಸಂರಕ್ಷಣೆ" },
};

// CONTACT PAGE TRANSLATIONS ADDED HERE
export const contactPage = {
  title: { en: "Our Leadership", kn: "ನಮ್ಮ ನಾಯಕತ್ವ" },
  description: {
    en: "The Kannada Poetry Council promotes literature, poetry, and cultural exchange under the guidance of our esteemed members.",
    kn: "ಕನ್ನಡ ಕಾವ್ಯ ಪರಿಷತ್ತು ಸಾಹಿತ್ಯ, ಕಾವ್ಯ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ವಿನಿಮಯವನ್ನು ನಮ್ಮ ಗಣ್ಯ ಸದಸ್ಯರ ಮಾರ್ಗದರ್ಶನದಡಿ ಪ್ರೋತ್ಸಾಹಿಸುತ್ತದೆ."
  }
};

export const leadership = [
  {
    name: { en: "Dr. Manjunath Bhatt", kn: "ಡಾ. ಮಂಜುನಾಥ ಭಟ್" },
    title: { en: "State President", kn: "ರಾಜ್ಯಾಧ್ಯಕ್ಷರು" },
    description: {
      en: "Our literary head who has contributed over 30 years to Kannada poetry, research, and cultural preservation.",
      kn: "ಕನ್ನಡ ಕಾವ್ಯ, ಸಂಶೋಧನೆ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಸಂರಕ್ಷಣೆಗೆ ೩೦ ವರ್ಷಗಳಿಗಿಂತ ಹೆಚ್ಚು ಸೇವೆ ಸಲ್ಲಿಸಿದ ನಮ್ಮ ಸಾಹಿತ್ಯ ಮುಖ್ಯಸ್ಥರು."
    },
    location: "ಬೆಂಗಳೂರು / Bengaluru",
    phone: "+91 98765 00001",
    email: "president@kannadapoetry.org",
    image: "/images/president.jpg",   // ← ADD THIS
  },
  {
    name: { en: "Smt. Vidya Shankar", kn: "ಶ್ರೀಮತಿ ವಿದ್ಯಾ ಶಂಕರ್" },
    title: { en: "State Vice President", kn: "ರాజ್ಯ ಉಪಾಧ್ಯಕ್ಷೆ" },
    description: {
      en: "Youth-oriented cultural leader dedicated to promoting Kannada literature through poetry and education.",
      kn: "ಕನ್ನಡ ಸಾಹಿತ್ಯವನ್ನು ಕಾವ್ಯ ಮತ್ತು ಶಿಕ್ಷಣದ ಮೂಲಕ ಪ್ರಚಾರಗೊಳಿಸುವ ಯುವ ಸಾಂಸ್ಕೃತಿಕ ನಾಯಕಿ."
    },
    location: "ಮೈಸೂರು / Mysuru",
    phone: "+91 98765 00002",
    email: "vp@kannadapoetry.org",
    image: "/images/vp.jpg",          // ← ADD THIS
  },
  {
    name: { en: "Prof. Suresh Babu", kn: "ಪ್ರೊ. ಸುರೇಶ್ ಬಾಬು" },
    title: { en: "Secretary", kn: "ಕಾರ್ಯದರ್ಶಿ" },
    description: {
      en: "A passionate advocate for classical poetry and cultural awareness.",
      kn: "ಶಾಸ್ತ್ರೀಯ ಕಾವ್ಯ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಜಾಗೃತಿಯ ಉತ್ಸಾಹಿ ಪ್ರತಿಪಾದಕ."
    },
    location: "ಹುಬ್ಬಳ್ಳಿ / Hubballi",
    phone: "+91 98765 00003",
    email: "secretary@kannadapoetry.org",
    image: "/images/secretary.jpg",   // ← ADD THIS
  },
];