export type CategorySlug = 'kolaci' | 'torte' | 'petit-fours';

export interface Pastry {
  slug: string;
  category: CategorySlug;
  nameHr: string;
  nameEn: string;
  compositionHr: string;
  ingredientsHr: string;
  allergensHr: string;
  price: number;
  priceNote?: string; // e.g. "/ kom" or "/ torta"
  isGlutenFree?: boolean;
  isVegan?: boolean;
  coverImage: string;
  images: string[];
}

export const pastries: Pastry[] = [
  // ─── Kolači ───────────────────────────────────────────────────────────────
  {
    slug: 'golden-globe',
    category: 'kolaci',
    nameHr: 'Golden Globe',
    nameEn: 'Golden Globe',
    compositionHr:
      'Pâte à choux · Craquelin · Burnt butter whipped ganache · Confit od marelice · Filo tuile · Sablé podloga',
    ingredientsHr:
      'Brašno, slatko vrhnje 35%mm, marelica, jaja, bijela čokolada, šećer, casssonade šećer, bademi, mlijeko, kakao, glukoza, želatina, pektin, vanilija, sol, limun',
    allergensHr: 'Gluten, mlijeko, jaja, bademi, soja',
    price: 5.2,
    coverImage: '/pastries/kolaci/golden-globe/image1.jpeg',
    images: [
      '/pastries/kolaci/golden-globe/image1.jpeg',
      '/pastries/kolaci/golden-globe/image2.jpeg',
      '/pastries/kolaci/golden-globe/image3.jpeg',
      '/pastries/kolaci/golden-globe/image4.jpeg',
    ],
  },
  {
    slug: 'kiss',
    category: 'kolaci',
    nameHr: 'Kiss',
    nameEn: 'Kiss',
    compositionHr:
      'Pâte à choux · Craquelin · Confit od jagode · Krema od pistacije',
    ingredientsHr:
      'Jaja, mlijeko, maslac, brašno, pire od jagode, šećer, invertni sirup, pektin, želatina, limun, bijela čokolada, pasta od pistacije, vrhnje 35%mm',
    allergensHr: 'Mlijeko i mliječni proizvodi, gluten, jaja',
    price: 5.2,
    coverImage: '/pastries/kolaci/kiss/image1.jpeg',
    images: [
      '/pastries/kolaci/kiss/image1.jpeg',
      '/pastries/kolaci/kiss/image2.jpeg',
    ],
  },

  // ─── Torte ────────────────────────────────────────────────────────────────
  {
    slug: 'cheesecake',
    category: 'torte',
    nameHr: 'Cheesecake',
    nameEn: 'Cheesecake',
    compositionHr: 'Podloga od keksa · Nadjev od krem sira · Preljev od mileram',
    ingredientsHr: 'Keksi, maslac, šećer, Philadelphia sir, limun, mileram, jaja',
    allergensHr: 'Gluten, orašidi, mlijeko i mliječni proizvodi, jaja',
    price: 58.0,
    coverImage: '/pastries/torte/cheesecake/image1.jpeg',
    images: [
      '/pastries/torte/cheesecake/image1.jpeg',
      '/pastries/torte/cheesecake/image2.jpeg',
      '/pastries/torte/cheesecake/image3.jpeg',
      '/pastries/torte/cheesecake/image4.jpeg',
    ],
  },
  {
    slug: 'coko-prestige',
    category: 'torte',
    nameHr: 'Choko Prestige',
    nameEn: 'Choko Prestige',
    compositionHr:
      'Biskvit · Sloj tamne čokolade · Sloj mliječne čokolade · Sloj bijele čokolade',
    ingredientsHr:
      'Jaja, brašno, kakao, čokolada, maslac, šećer, badem u prahu, mlijeko, vrhnje 35%mm, želatina',
    allergensHr: 'Mlijeko i mliječni proizvodi, gluten, jaja, orašasti plodovi',
    price: 70.0,
    coverImage: '/pastries/torte/coko-prestige/image1.jpeg',
    images: [
      '/pastries/torte/coko-prestige/image1.jpeg',
      '/pastries/torte/coko-prestige/image2.jpeg',
    ],
  },
  {
    slug: 'fit-fantasy',
    category: 'torte',
    nameHr: 'Fit Fantasy (GF, vegan)',
    nameEn: 'Fit Fantasy (GF, vegan)',
    compositionHr:
      'Podloga od datulja, badema i kokosa · Čokoladni sloj · Borovnica sloj · Malina sloj',
    ingredientsHr:
      'Badem, datulje, kokos listići, indijski orasi, kakao, med, kokos ulje, borovnica pire, malina pire, limun',
    allergensHr: 'Orašasti plodovi',
    price: 70.0,
    isGlutenFree: true,
    isVegan: true,
    coverImage: '/pastries/torte/fit-fantasy-gf/image1.jpeg',
    images: [
      '/pastries/torte/fit-fantasy-gf/image1.jpeg',
      '/pastries/torte/fit-fantasy-gf/image2.jpeg',
      '/pastries/torte/fit-fantasy-gf/image3.jpeg',
    ],
  },
  {
    slug: 'imperial-pistacio',
    category: 'torte',
    nameHr: 'Imperial Pistacio',
    nameEn: 'Imperial Pistacio',
    compositionHr:
      'Pistacija biskvit · Hrskavi sloj od pistacije i bijele čokolade · Confit od jagoda · Krema od pistacije',
    ingredientsHr:
      'Pistacija, čokolada, slatko vrhnje 35%mm, jagode, jaja, šećer, maslac, brašno, mlijeko, invertni sirup, želatina, pektin, limun',
    allergensHr: 'Mlijeko i mliječni proizvodi, jaja, gluten, orašasti plodovi',
    price: 78.0,
    priceNote: 'torta | monoporcija 5,30 €',
    coverImage: '/pastries/hero_background.jpg',
    images: [],
  },
  {
    slug: 'lilly',
    category: 'torte',
    nameHr: "Lilly's Delight",
    nameEn: "Lilly's Delight",
    compositionHr: "Biskvit · Malina curd · Confit maline · Tučeni ganache",
    ingredientsHr:
      'Jaja, šećer, brašno, mlijeko, mahuna vanilije, pire od maline, pektin, limun, želatina, vrhnje 35%mm, čokolada, maslac',
    allergensHr: 'Jaja, gluten, mlijeko i mliječni proizvodi',
    price: 70.0,
    coverImage: '/pastries/torte/lilly/image1.jpeg',
    images: [
      '/pastries/torte/lilly/image1.jpeg',
      '/pastries/torte/lilly/image2.jpeg',
      '/pastries/torte/lilly/image3.jpeg',
      '/pastries/torte/lilly/image4.jpeg',
      '/pastries/torte/lilly/image5.jpeg',
    ],
  },
  {
    slug: 'orange-62',
    category: 'torte',
    nameHr: 'Orange 62',
    nameEn: 'Orange 62',
    compositionHr: 'Biskvit · Čokoladni mousse · Orange confit',
    ingredientsHr:
      'Jaja, šećer, brašno, kakao, ulje, mlijeko, čokolada, želatina, vrhnje 35%mm, naranča pire, maslac',
    allergensHr: 'Mlijeko i mliječni proizvodi, gluten, jaja',
    price: 65.0,
    coverImage: '/pastries/torte/orange-62/image1.jpeg',
    images: [
      '/pastries/torte/orange-62/image1.jpeg',
      '/pastries/torte/orange-62/image2.jpeg',
      '/pastries/torte/orange-62/image3.jpeg',
    ],
  },
  {
    slug: 'stracciatella',
    category: 'torte',
    nameHr: 'Stracciatella',
    nameEn: 'Stracciatella',
    compositionHr: 'Biskvit · Stracciatella krema',
    ingredientsHr:
      'Jaja, šećer, brašno, kakao, čokolada, ulje, mlijeko, želatina, bijeli rum, vrhnje 35%mm',
    allergensHr: 'Mlijeko i mliječni proizvodi, jaja, gluten',
    price: 55.0,
    coverImage: '/pastries/torte/stracciatella/image1.jpeg',
    images: [
      '/pastries/torte/stracciatella/image1.jpeg',
      '/pastries/torte/stracciatella/image2.jpeg',
    ],
  },
  {
    slug: 'tiramisu',
    category: 'torte',
    nameHr: 'Tiramisu',
    nameEn: 'Tiramisu',
    compositionHr: 'Biskvit od kave · Mascarpone krema · Lady fingers',
    ingredientsHr:
      'Jaja, šećer, med, badem u prahu, brašno, slatko vrhnje 35%mm, mascarpone, želatina, kava, liker od kave, piškote, kakao',
    allergensHr: 'Gluten, mlijeko i mliječni proizvodi, orašidi, jaja',
    price: 59.0,
    coverImage: '/pastries/torte/tiramisu/image1.jpeg',
    images: [
      '/pastries/torte/tiramisu/image1.jpeg',
      '/pastries/torte/tiramisu/image2.jpeg',
    ],
  },
  {
    slug: 'tonka-royal',
    category: 'torte',
    nameHr: 'Tonka Royal',
    nameEn: 'Tonka Royal',
    compositionHr:
      'Biskvit · Hrskava podloga · Tonka mousse · Tonka bean ganache · Kakao glazura',
    ingredientsHr:
      'Jaja, šećer, badem brašno, kakao maslac, želatina, glukoza, vrhnje 35%mm, invertni šećer, čokolada, tonka bean, feuilletine, praline pasta',
    allergensHr: 'Jaja, orašasti plodovi, mlijeko i mliječni proizvodi, gluten',
    price: 70.0,
    coverImage: '/pastries/torte/tonka-royal/image1.jpeg',
    images: ['/pastries/torte/tonka-royal/image1.jpeg'],
  },

  // ─── Petit fours ──────────────────────────────────────────────────────────
  {
    slug: 'mini-limone',
    category: 'petit-fours',
    nameHr: 'Mini Limone',
    nameEn: 'Mini Limone',
    compositionHr: 'Mini verzija kolača od limuna',
    ingredientsHr: 'Limun, šećer, jaja, maslac, brašno, vrhnje 35%mm, bijela čokolada',
    allergensHr: 'Gluten, jaja, mlijeko i mliječni proizvodi',
    price: 2.5,
    coverImage: '/pastries/petit-fours/petit-fours/image1.jpeg',
    images: ['/pastries/petit-fours/petit-fours/image1.jpeg'],
  },
  {
    slug: 'choco-mini',
    category: 'petit-fours',
    nameHr: 'Choco Mini',
    nameEn: 'Choco Mini',
    compositionHr: 'Mini čokoladni zalogaj',
    ingredientsHr: 'Čokolada, vrhnje 35%mm, maslac, šećer, jaja, brašno, kakao',
    allergensHr: 'Gluten, jaja, mlijeko i mliječni proizvodi',
    price: 2.8,
    coverImage: '/pastries/petit-fours/petit-fours/image2.jpeg',
    images: ['/pastries/petit-fours/petit-fours/image2.jpeg'],
  },
  {
    slug: 'mini-seafoam',
    category: 'petit-fours',
    nameHr: 'Mini Seafoam',
    nameEn: 'Mini Seafoam',
    compositionHr: 'Lagani mini desert s pjenastom teksturom',
    ingredientsHr: 'Šećer, jaja, bjelanjak, glukoza, vanilija, čokolada',
    allergensHr: 'Jaja, mlijeko i mliječni proizvodi',
    price: 2.5,
    coverImage: '/pastries/petit-fours/petit-fours/image3.jpeg',
    images: ['/pastries/petit-fours/petit-fours/image3.jpeg'],
  },
  {
    slug: 'mini-tiramisu',
    category: 'petit-fours',
    nameHr: 'Mini Tiramisu',
    nameEn: 'Mini Tiramisu',
    compositionHr: 'Mini verzija klasičnog tiramisu',
    ingredientsHr: 'Mascarpone, jaja, šećer, kava, liker od kave, piškote, kakao, vrhnje 35%mm',
    allergensHr: 'Gluten, jaja, mlijeko i mliječni proizvodi',
    price: 2.6,
    coverImage: '/pastries/petit-fours/petit-fours/image4.jpeg',
    images: ['/pastries/petit-fours/petit-fours/image4.jpeg'],
  },
  {
    slug: 'pate-choux-pistacija',
    category: 'petit-fours',
    nameHr: 'Pâte choux pistacija / jagoda',
    nameEn: 'Pâte choux pistachio / strawberry',
    compositionHr: 'Pâte à choux · Krema od pistacije · Confit od jagode',
    ingredientsHr:
      'Jaja, mlijeko, maslac, brašno, pasta od pistacije, bijela čokolada, jagode, pektin, šećer, vrhnje 35%mm',
    allergensHr: 'Gluten, jaja, mlijeko i mliječni proizvodi, orašasti plodovi',
    price: 2.6,
    coverImage: '/pastries/petit-fours/petit-fours/image5.jpeg',
    images: ['/pastries/petit-fours/petit-fours/image5.jpeg'],
  },
  {
    slug: 'pate-choux-marelica',
    category: 'petit-fours',
    nameHr: 'Pâte choux marelica / burnt butter',
    nameEn: 'Pâte choux apricot / burnt butter',
    compositionHr: 'Pâte à choux · Confit od marelice · Burnt butter whipped ganache',
    ingredientsHr:
      'Jaja, mlijeko, maslac, brašno, marelica, bijela čokolada, šećer, pektin, vrhnje 35%mm, limun',
    allergensHr: 'Gluten, jaja, mlijeko i mliječni proizvodi',
    price: 2.6,
    coverImage: '/pastries/petit-fours/petit-fours/image6.jpeg',
    images: ['/pastries/petit-fours/petit-fours/image6.jpeg'],
  },
  {
    slug: 'mini-tartlets',
    category: 'petit-fours',
    nameHr: 'Mini Tartlets',
    nameEn: 'Mini Tartlets',
    compositionHr: 'Mini tartleti s raznim punjenjem',
    ingredientsHr: 'Brašno, maslac, šećer, jaja, vrhnje 35%mm, sezonsko voće, vanilija',
    allergensHr: 'Gluten, jaja, mlijeko i mliječni proizvodi',
    price: 2.5,
    coverImage: '/pastries/petit-fours/petit-fours/image7.jpeg',
    images: ['/pastries/petit-fours/petit-fours/image7.jpeg'],
  },
];
