// Site-wide constants for The Chosen Speciality Coffee concept site.

export type Lang = 'en' | 'ar';

export const site = {
  /** Concept/proposal mode: adds noindex, a small "Concept preview" tag and a footer note. Set false once approved. */
  isConcept: true,
  brand: { en: 'The Chosen Speciality Coffee', ar: 'ذا تشوزن للقهوة المختصة' },
  /** Public WhatsApp number listed for the café. */
  whatsapp: '971502016000',
  phoneDisplay: '+971 50 201 6000',
  whatsappMessage: { en: 'Hi The Chosen! I have a question.', ar: 'مرحبًا ذا تشوزن، عندي استفسار.' },
  orderUrl: 'https://www.talabat.com/uae/restaurant/710012/the-chosen-speciality-coffee-muwaileh-commercial',
  driveThruUrl: 'https://drivu.co/shops/united-arab-emirates/sharjah/Thechosenuser/Muwaileh',
  instagram: 'https://www.instagram.com/thechosen.coffee/',
  instagramHandle: '@thechosen.coffee',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=The%20Chosen%20Speciality%20Coffee%20Muwaileh&query_place_id=ChIJHb_Q16NfXz4Rz7ZC8JUjryM',
  address: { street: 'Sheikh Khalifa Bin Zayed Al Nahyan St, Muwaileh Commercial', locality: 'Sharjah', country: 'AE' },
  geo: { lat: 25.3056334, lng: 55.4571502 },
  openingHours: 'Mo-Su 07:00-24:00',
  rating: { value: 4.9 },
  themeColor: '#0C0C0D',
} as const;

export const whatsappLink = (lang: Lang) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage[lang])}`;

export const pathFor = (lang: Lang) => (lang === 'ar' ? '/ar/' : '/');
