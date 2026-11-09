// All page copy. English and Arabic share one shape.
// Food prices are from The Chosen's Talabat menu (November 2026), in AED. Drink prices weren't published online.
import type { Lang } from './site';

type MenuItem = { name: string; price?: string; note?: string };
type MenuGroup = { title: string; items: MenuItem[] };

const en = {
  meta: {
    title: 'The Chosen Speciality Coffee · Muwaileh, Sharjah',
    description:
      'Speciality coffee, slow brews, the viral Cloud Coffee and brioche toasts in Muwaileh Commercial, Sharjah. Open 7 AM to midnight. Order on Talabat or drive through.',
  },
  nav: {
    label: 'Main',
    links: [
      { href: '#cloud', label: 'Cloud Coffee' },
      { href: '#menu', label: 'Menu' },
      { href: '#ritual', label: 'Your day' },
      { href: '#visit', label: 'Visit' },
    ],
    switchLabel: 'ع',
    switchLabelFull: 'العربية',
    switchLang: 'ar' as Lang,
    skip: 'Skip to content',
    home: 'The Chosen, home',
  },
  cta: { order: 'Order', orderLong: 'Order on Talabat', directions: 'Directions', driveThru: 'Drive-thru on Drivu', whatsapp: 'WhatsApp us' },
  concept: 'Concept preview',
  hero: {
    eyebrow: 'Speciality coffee · Muwaileh, Sharjah',
    lines: ['Keep moving', 'forward.'],
    sub: 'Speciality beans, slow brews and the Cloud Coffee everyone talks about. Relocated, reopened, and pouring from 7 AM to midnight.',
    trust: ['4.9 ★ on Google', 'Open 7 AM – 12 AM', 'Drive-thru on Drivu'],
    badge: 'Relocated · Reopened · Brewing',
    imageAlt: 'Espresso pouring into a cobalt-blue takeaway cup against a dark background.',
  },
  ticker: ['Cloud Coffee', 'Spanish Latte', 'Iced V60', 'The Ohio', 'Flat White', 'Piccolo', 'Iced Matcha', 'The Tiramisu', 'Cortado'],
  cloud: {
    eyebrow: 'The one everyone asks for',
    title: 'Cloud Coffee.',
    sub: 'Served cold. Coffee whipped with coconut water until it’s light as air, finished with a dusting of chocolate.',
    tags: ['Served cold', 'Coconut water', 'Crowd favourite'],
    quote: 'Only what I can describe as fluffy blended coffee. Delicious.',
    quoteBy: 'Google review',
    imageAlt: 'A tall iced Cloud Coffee with a fluffy whipped top dusted with cocoa.',
  },
  signatures: {
    eyebrow: 'Only at The Chosen',
    title: 'The “The” list.',
    sub: 'Our house signatures. Each one starts with “The”.',
    items: [
      { name: 'The Ohio', note: 'Our signature hot chocolate.' },
      { name: 'The Iced Ohio', note: 'The same chocolate, cold.' },
      { name: 'The Tiramisu', note: 'Dessert, in a cup.' },
      { name: 'The Golden Espresso', note: 'Espresso with a golden twist.' },
      { name: 'The Peach Iced Tea', note: 'Bright, cold, easy.' },
      { name: 'The Cascara', note: 'Brewed from the coffee cherry.' },
      { name: 'The Chilli', note: 'For the brave.' },
    ],
    imageAlt: 'A cup of thick hot chocolate in a cobalt cup on a dark stone table.',
  },
  menu: {
    eyebrow: 'The menu',
    title: 'Pull a chair, or pull up.',
    note: 'Bites priced in AED as on Talabat. Drink prices at the counter.',
    groups: [
      {
        title: 'Espresso bar',
        items: [
          { name: 'Spanish Latte', note: 'Hot or iced' },
          { name: 'Latte', note: 'Hot or iced' },
          { name: 'Flat White' },
          { name: 'Cappuccino', note: 'Hot or iced' },
          { name: 'Cortado' },
          { name: 'Piccolo' },
          { name: 'Espresso Macchiato' },
          { name: 'Americano', note: 'Hot or iced' },
          { name: 'Espresso', note: 'Single or double' },
        ],
      },
      {
        title: 'Slow bar & matcha',
        items: [
          { name: 'V60', note: 'Try the Ethiopian, iced' },
          { name: 'Aeropress' },
          { name: 'Iced Matcha' },
          { name: 'Hot Matcha' },
        ],
      },
      {
        title: 'Brioche & bowls',
        items: [
          { name: 'Spiced Crispy Labneh', price: '37' },
          { name: 'Labneh Zaatar Brioche', price: '37' },
          { name: 'Nutella Brioche', price: '34' },
          { name: 'Nutella Sando', price: '28' },
          { name: 'Greek Yogurt Bowl', price: '46' },
          { name: 'Oat Bowl', price: '45' },
          { name: 'Acai Bowl', price: '42' },
        ],
      },
      {
        title: 'Grilled sandos',
        items: [
          { name: 'The Chosen One', price: '32', note: 'Smoked turkey, cheese, sun-dried tomato pesto' },
          { name: 'The Turkey Cheese', price: '32' },
          { name: 'The Pesto Cheese', price: '29' },
          { name: 'The Say Cheese', price: '29' },
          { name: 'Fresh Orange Juice', price: '26' },
        ],
      },
    ] as MenuGroup[],
    imageAlt: 'Brioche toast topped with labneh, chili oil and crispy onions.',
  },
  craft: {
    eyebrow: 'Why The Chosen',
    title: 'Chosen, on purpose.',
    items: [
      { num: '01', title: 'The beans', text: 'Speciality-grade coffee, also bagged so you can brew it at home.', image: 'beans-bag', alt: 'A matte bag of The Chosen coffee beans.' },
      { num: '02', title: 'The bar', text: 'Espresso, V60 and Aeropress, made to order, hot or over ice.', image: 'iced-v60', alt: 'Iced V60 coffee poured over ice in a glass.' },
      { num: '03', title: 'The table', text: 'A calm corner to work or study, from the first pour to the last.', image: 'the-table', alt: 'A café table with a laptop, notebook and iced coffee in soft light.' },
    ],
  },
  ritual: {
    eyebrow: 'Your day here',
    title: 'From first pour to last cup.',
    steps: [
      { time: '07:00', title: 'Doors open', text: 'A flat white and a brioche on the way in.' },
      { time: '13:00', title: 'Study hours', text: 'Grab the corner table. Order a Cloud Coffee. Stay a while.' },
      { time: '00:00', title: 'Last cup', text: 'One more piccolo for the road.' },
    ],
  },
  reviews: {
    eyebrow: 'Don’t take our word for it',
    title: '4.9 on Google.',
    items: [
      { text: 'We all got the Cloud Coffee since it’s their crowd favourite, and we totally understand why.' },
      { text: 'Ethiopian beans iced V60 is a must at The Chosen. Highly recommend.' },
      { text: 'I had the most delicious croissant. The best one I’ve had.' },
      { text: 'Loved their coconut mango drink, super refreshing. Staff were so helpful and friendly.' },
      { text: 'Love the coffee and everything, but especially the staff’s friendliness.' },
    ],
    source: 'Google review',
    prev: 'Previous review',
    next: 'Next review',
    cta: 'Leave a review',
  },
  takeHome: {
    eyebrow: 'Take it with you',
    title: 'For the office, the road, and home.',
    items: [
      { title: 'Bottle boxes', text: '12, 16 or 20 bottles of your favourite drinks. Made for meetings and gatherings.' },
      { title: 'Beans to go', text: 'Our coffee, bagged. Ask the bar what’s fresh this week.' },
      { title: 'Loyalty app', text: 'Collect on every cup. Ask at the counter to join.' },
    ],
  },
  visit: {
    eyebrow: 'Visit',
    title: 'Come in, or drive through.',
    addressLabel: 'Address',
    address: 'Sheikh Khalifa Bin Zayed Al Nahyan St, Muwaileh Commercial, Sharjah',
    hoursLabel: 'Hours',
    hours: 'Every day · 7 AM – 12 AM',
    orderLabel: 'Order',
    order: 'Talabat · Noon · Drivu drive-thru',
  },
  footer: {
    tagline: 'Speciality coffee, crafted and served with care.',
    rights: '© 2026 The Chosen Speciality Coffee',
    conceptNote: 'Concept website proposal. Not the official The Chosen site.',
    top: 'Back to top',
  },
};

export type Content = typeof en;

const ar: Content = {
  meta: {
    title: 'ذا تشوزن للقهوة المختصة · مويلح، الشارقة',
    description:
      'قهوة مختصة، وتحضير يدوي، وكلاود كوفي الشهيرة، وتوست البريوش في مويلح التجارية بالشارقة. مفتوح من ٧ صباحًا حتى منتصف الليل.',
  },
  nav: {
    label: 'القائمة الرئيسية',
    links: [
      { href: '#cloud', label: 'كلاود كوفي' },
      { href: '#menu', label: 'المنيو' },
      { href: '#ritual', label: 'يومك' },
      { href: '#visit', label: 'زورونا' },
    ],
    switchLabel: 'EN',
    switchLabelFull: 'English',
    switchLang: 'en',
    skip: 'انتقل إلى المحتوى',
    home: 'ذا تشوزن، الصفحة الرئيسية',
  },
  cta: { order: 'اطلب', orderLong: 'اطلب عبر طلبات', directions: 'الاتجاهات', driveThru: 'درايف ثرو عبر درايفو', whatsapp: 'راسلنا واتساب' },
  concept: 'نسخة تجريبية',
  hero: {
    eyebrow: 'قهوة مختصة · مويلح، الشارقة',
    lines: ['استمر', 'للأمام.'],
    sub: 'حبوب مختصة، وتحضير على مهل، وكلاود كوفي اللي الكل يتكلم عنها. انتقلنا، وفتحنا من جديد، ونصبّ من ٧ الصبح حتى منتصف الليل.',
    trust: ['٤٫٩ ★ على جوجل', 'مفتوح ٧ ص – ١٢ م', 'درايف ثرو عبر درايفو'],
    badge: 'انتقلنا · فتحنا · نحضّر',
    imageAlt: 'إسبريسو يُسكب في كوب سفري أزرق كوبالت على خلفية داكنة.',
  },
  ticker: ['كلاود كوفي', 'سبانش لاتيه', 'آيسد V60', 'ذا أوهايو', 'فلات وايت', 'بيكولو', 'آيسد ماتشا', 'ذا تيراميسو', 'كورتادو'],
  cloud: {
    eyebrow: 'المشروب اللي الكل يسأل عنه',
    title: 'كلاود كوفي.',
    sub: 'تُقدَّم باردة. قهوة مخفوقة مع ماء جوز الهند حتى تصير خفيفة كالغيمة، ومرشوشة بالشوكولاتة.',
    tags: ['تُقدَّم باردة', 'ماء جوز الهند', 'المفضلة عند الكل'],
    quote: 'ما أقدر أوصفها إلا قهوة مخفوقة كالغيمة. لذيذة.',
    quoteBy: 'تقييم على جوجل (مترجم)',
    imageAlt: 'كوب كلاود كوفي مثلّج بطبقة علوية مخفوقة ومرشوشة بالكاكاو.',
  },
  signatures: {
    eyebrow: 'فقط في ذا تشوزن',
    title: 'قائمة «ذا».',
    sub: 'مشروباتنا الخاصة، وكل واحد منها يبدأ بـ «ذا».',
    items: [
      { name: 'ذا أوهايو', note: 'الشوكولاتة الساخنة الخاصة بنا.' },
      { name: 'ذا آيسد أوهايو', note: 'نفس الشوكولاتة، باردة.' },
      { name: 'ذا تيراميسو', note: 'حلى في كوب.' },
      { name: 'ذا غولدن إسبريسو', note: 'إسبريسو بلمسة ذهبية.' },
      { name: 'ذا بيتش آيس تي', note: 'منعش، بارد، وسهل.' },
      { name: 'ذا كاسكارا', note: 'من قشر ثمرة البن.' },
      { name: 'ذا تشيلي', note: 'للجريئين.' },
    ],
    imageAlt: 'كوب شوكولاتة ساخنة كثيفة في كوب كوبالت على طاولة حجرية داكنة.',
  },
  menu: {
    eyebrow: 'المنيو',
    title: 'اسحب كرسي، أو مرّ بسيارتك.',
    note: 'أسعار الأكل بالدرهم كما على طلبات. أسعار المشروبات عند الكاونتر.',
    groups: [
      {
        title: 'بار الإسبريسو',
        items: [
          { name: 'سبانش لاتيه', note: 'حار أو بارد' },
          { name: 'لاتيه', note: 'حار أو بارد' },
          { name: 'فلات وايت' },
          { name: 'كابتشينو', note: 'حار أو بارد' },
          { name: 'كورتادو' },
          { name: 'بيكولو' },
          { name: 'إسبريسو ماكياتو' },
          { name: 'أمريكانو', note: 'حار أو بارد' },
          { name: 'إسبريسو', note: 'سنجل أو دبل' },
        ],
      },
      {
        title: 'التحضير اليدوي والماتشا',
        items: [
          { name: 'V60', note: 'جرّب الإثيوبي بارد' },
          { name: 'إيروبرس' },
          { name: 'آيسد ماتشا' },
          { name: 'ماتشا حارة' },
        ],
      },
      {
        title: 'البريوش والبولات',
        items: [
          { name: 'لبنة مقرمشة متبّلة', price: '٣٧' },
          { name: 'بريوش لبنة وزعتر', price: '٣٧' },
          { name: 'بريوش نوتيلا', price: '٣٤' },
          { name: 'ساندو نوتيلا', price: '٢٨' },
          { name: 'بول زبادي يوناني', price: '٤٦' },
          { name: 'بول الشوفان', price: '٤٥' },
          { name: 'بول أساي', price: '٤٢' },
        ],
      },
      {
        title: 'ساندوتشات مشوية',
        items: [
          { name: 'ذا تشوزن ون', price: '٣٢', note: 'تيركي مدخّن، جبن، وبيستو طماطم مجففة' },
          { name: 'ذا تيركي تشيز', price: '٣٢' },
          { name: 'ذا بيستو تشيز', price: '٢٩' },
          { name: 'ذا سي تشيز', price: '٢٩' },
          { name: 'عصير برتقال طازج', price: '٢٦' },
        ],
      },
    ] as MenuGroup[],
    imageAlt: 'توست بريوش مع لبنة وزيت الفلفل الحار والبصل المقرمش.',
  },
  craft: {
    eyebrow: 'ليش ذا تشوزن',
    title: 'مختارة، عن قصد.',
    items: [
      { num: '٠١', title: 'الحبوب', text: 'قهوة مختصة، ومعبّأة كمان عشان تحضّرها في البيت.', image: 'beans-bag', alt: 'كيس حبوب قهوة ذا تشوزن.' },
      { num: '٠٢', title: 'البار', text: 'إسبريسو، وV60، وإيروبرس، تُحضَّر عند الطلب، حارة أو على الثلج.', image: 'iced-v60', alt: 'قهوة V60 تُسكب على الثلج في كوب زجاجي.' },
      { num: '٠٣', title: 'الطاولة', text: 'ركن هادئ للشغل أو الدراسة، من أول كوب لآخر كوب.', image: 'the-table', alt: 'طاولة مقهى عليها لابتوب ودفتر وقهوة مثلّجة في ضوء ناعم.' },
    ],
  },
  ritual: {
    eyebrow: 'يومك عندنا',
    title: 'من أول صبّة لآخر كوب.',
    steps: [
      { time: '٠٧:٠٠', title: 'نفتح الأبواب', text: 'فلات وايت وبريوش وأنت في طريقك.' },
      { time: '١٣:٠٠', title: 'وقت الدراسة', text: 'خذ طاولة الزاوية، واطلب كلاود كوفي، وخذ راحتك.' },
      { time: '٠٠:٠٠', title: 'آخر كوب', text: 'بيكولو أخير للطريق.' },
    ],
  },
  reviews: {
    eyebrow: 'لا تاخذها منّا',
    title: '٤٫٩ على جوجل.',
    items: [
      { text: 'كلنا طلبنا كلاود كوفي لأنها المفضلة عند الكل، وفهمنا السبب تمامًا.' },
      { text: 'V60 بارد بالحبوب الإثيوبية لازم تجربه في ذا تشوزن. أنصح فيه بقوة.' },
      { text: 'أكلت ألذ كرواسون، أفضل واحد جربته.' },
      { text: 'حبيت مشروب جوز الهند والمانجو، منعش جدًا. والموظفين متعاونين ولطيفين.' },
      { text: 'أحب القهوة وكل شي، بس أكثر شي لطف الموظفين.' },
    ],
    source: 'تقييم على جوجل (مترجم)',
    prev: 'التقييم السابق',
    next: 'التقييم التالي',
    cta: 'اكتب تقييمك',
  },
  takeHome: {
    eyebrow: 'خذها معك',
    title: 'للمكتب، وللطريق، وللبيت.',
    items: [
      { title: 'صناديق العبوات', text: '١٢ أو ١٦ أو ٢٠ عبوة من مشروباتك المفضلة. مثالية للاجتماعات والجمعات.' },
      { title: 'حبوب للبيت', text: 'قهوتنا معبّأة. اسأل البار عن المحصول الطازج هالأسبوع.' },
      { title: 'تطبيق الولاء', text: 'اجمع مع كل كوب. اسأل عند الكاونتر للتسجيل.' },
    ],
  },
  visit: {
    eyebrow: 'زورونا',
    title: 'ادخل، أو مرّ بالسيارة.',
    addressLabel: 'العنوان',
    address: 'شارع الشيخ خليفة بن زايد آل نهيان، مويلح التجارية، الشارقة',
    hoursLabel: 'المواعيد',
    hours: 'يوميًا · ٧ صباحًا – ١٢ منتصف الليل',
    orderLabel: 'الطلب',
    order: 'طلبات · نون · درايف ثرو عبر درايفو',
  },
  footer: {
    tagline: 'قهوة مختصة، تُحضَّر وتُقدَّم بعناية.',
    rights: '© ٢٠٢٦ ذا تشوزن للقهوة المختصة',
    conceptNote: 'مقترح تصميم موقع. ليس الموقع الرسمي لذا تشوزن.',
    top: 'العودة للأعلى',
  },
};

export const content: Record<Lang, Content> = { en, ar };
