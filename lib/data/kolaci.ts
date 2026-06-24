import type { Pastry } from '../pastries';

const kolaci: Pastry[] = [
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
    compositionHr: 'Pâte à choux · Craquelin · Confit od jagode · Krema od pistacije',
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
  {
    slug: 'azure-bloom',
    category: 'kolaci',
    nameHr: 'Azure Bloom',
    nameEn: 'Azure Bloom',
    compositionHr:
      'Ganache od lavande · Mousse od lavande · Biskvit Sablé od lavande · Mirror glazura',
    ingredientsHr:
      'Krem sir, šećer, mlijeko, vrhnje 35%mm, želatina, čokolada, lavanda, glukoza, brašno, jaja, badem brašno',
    allergensHr: 'Gluten, jaja, mlijeko i mliječni proizvodi, orašasti plodovi',
    price: 4.8,
    coverImage: '/pastries/kutija-mediterana/azure-bloom/image1.jpeg',
    images: [
      '/pastries/kutija-mediterana/azure-bloom/image1.jpeg',
      '/pastries/kutija-mediterana/azure-bloom/image2.jpeg',
      '/pastries/kutija-mediterana/azure-bloom/image3.jpeg',
      '/pastries/kutija-mediterana/azure-bloom/image4.jpeg',
    ],
  },
  {
    slug: 'carob-noir',
    category: 'kolaci',
    nameHr: 'Carob Noir',
    nameEn: 'Carob Noir',
    compositionHr:
      'Ganache od rogača i tamne čokolade · Mousse od rogača · Hrskava baza · Mirror glazura',
    ingredientsHr:
      'Rogač, tamna čokolada, vrhnje 35%mm, šećer, jaja, brašno, maslac, badem brašno, želatina, glukoza',
    allergensHr: 'Gluten, jaja, mlijeko i mliječni proizvodi, orašasti plodovi',
    price: 4.8,
    coverImage: '/pastries/kutija-mediterana/carob-noir/image1.jpeg',
    images: [
      '/pastries/kutija-mediterana/carob-noir/image1.jpeg',
      '/pastries/kutija-mediterana/carob-noir/image2.jpeg',
      '/pastries/kutija-mediterana/carob-noir/image3.jpeg',
      '/pastries/kutija-mediterana/carob-noir/image4.jpeg',
    ],
  },
  {
    slug: 'green-harmony',
    category: 'kolaci',
    nameHr: 'Green Harmony (GF)',
    nameEn: 'Green Harmony (GF)',
    compositionHr:
      'Biskvit od badema · Insert/gel od Kombuche · Insert od kremaste zelene jabuke i Kombuche · Chantilly s kaduljom · Mirror glazura',
    ingredientsHr:
      'Pire jabuke, kombucha, šećer, jaja, želatina, maslac, mascarpone, vrhnje 35%mm, limun, rižino brašno, gluten free brašno, badem brašno, med, ulje, pektin',
    allergensHr: 'Orašidi, mliječni proizvodi, jaja. Može sadržavati gluten u tragovima',
    price: 5.3,
    isGlutenFree: true,
    coverImage: '/pastries/kutija-mediterana/green-harmony/image1.jpeg',
    images: [
      '/pastries/kutija-mediterana/green-harmony/image1.jpeg',
      '/pastries/kutija-mediterana/green-harmony/image2.jpeg',
      '/pastries/kutija-mediterana/green-harmony/image3.jpeg',
      '/pastries/kutija-mediterana/green-harmony/image4.jpeg',
      '/pastries/kutija-mediterana/green-harmony/image5.jpeg',
    ],
  },
  {
    slug: 'limone-di-dalmacija',
    category: 'kolaci',
    nameHr: 'Limone di Dalmacija',
    nameEn: 'Limone di Dalmacija',
    compositionHr: 'Limun krema · Limun pjena · Biskvit · Sablé',
    ingredientsHr:
      'Želatina, šećer, limun, jaja, maslac, mlijeko, bijela čokolada, vrhnje 35%mm, maslinovo ulje, ružmarin, badem brašno',
    allergensHr: 'Jaja, mlijeko i mliječni proizvodi, gluten, orašasti plodovi',
    price: 5.3,
    coverImage: '/pastries/kutija-mediterana/limone-di-dalmacija/image1.jpeg',
    images: [
      '/pastries/kutija-mediterana/limone-di-dalmacija/image1.jpeg',
      '/pastries/kutija-mediterana/limone-di-dalmacija/image2.jpeg',
      '/pastries/kutija-mediterana/limone-di-dalmacija/image3.jpeg',
      '/pastries/kutija-mediterana/limone-di-dalmacija/image4.jpeg',
      '/pastries/kutija-mediterana/limone-di-dalmacija/image5.jpeg',
    ],
  },
  {
    slug: 'oro-verde',
    category: 'kolaci',
    nameHr: 'Oro Verde',
    nameEn: 'Oro Verde',
    compositionHr:
      'Mousse od maslinovog ulja · Insert od maslinova likera i bijele čokolade · Biskvit · Sablé podloga · Mirror glazura',
    ingredientsHr:
      'Slatko vrhnje 35%mm, bijela čokolada, maslinov liker, maslinovo ulje, želatina, limun sok, vanilija štapić, kakao maslac, brašno, jaja',
    allergensHr: 'Orašasti plodovi, mlijeko i mliječni proizvodi, gluten, jaja',
    price: 5.3,
    coverImage: '/pastries/kutija-mediterana/oro-verde/image1.jpeg',
    images: [
      '/pastries/kutija-mediterana/oro-verde/image1.jpeg',
      '/pastries/kutija-mediterana/oro-verde/image2.jpeg',
      '/pastries/kutija-mediterana/oro-verde/image3.jpeg',
    ],
  },
];

export default kolaci;
