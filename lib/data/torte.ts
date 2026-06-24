import type { Pastry } from '../pastries';

const torte: Pastry[] = [
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
];

export default torte;
