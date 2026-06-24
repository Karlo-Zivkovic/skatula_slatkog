import type { ProductBox } from '../boxes';

const kutijaMediterana: ProductBox = {
  categorySlug: 'kutija-mediterana',
  boxPrice: 26.0,
  descriptionHr:
    'Pažljivo sastavljen odabir od pet mediteranskih slastica u elegantnoj kutiji. Svaki komad ručno je izrađen od najfinijih sastojaka, inspiriran aromama i bojama mediteranske obale. Savršen poklon ili slatki trenutak za sebe.',
  descriptionEn:
    'A carefully curated selection of five Mediterranean pastries in an elegant box. Each piece is handcrafted from the finest ingredients, inspired by the aromas and colours of the Mediterranean coast. The perfect gift or a sweet moment for yourself.',
  items: [
    {
      slug: 'azure-bloom',
      nameHr: 'Azure Bloom',
      nameEn: 'Azure Bloom',
      compositionHr:
        'Ganache od lavande · Mousse od lavande · Biskvit Sablé od lavande · Mirror glazura',
      ingredientsHr:
        'Krem sir, šećer, mlijeko, vrhnje 35%mm, želatina, čokolada, lavanda, glukoza, brašno, jaja, badem brašno',
      allergensHr: 'Gluten, jaja, mlijeko i mliječni proizvodi, orašasti plodovi',
      individualPrice: 4.8,
      objectPosition: 'center 60%',
      images: [
        '/pastries/kutija-mediterana/azure-bloom/image1.jpeg',
        '/pastries/kutija-mediterana/azure-bloom/image2.jpeg',
        '/pastries/kutija-mediterana/azure-bloom/image3.jpeg',
        '/pastries/kutija-mediterana/azure-bloom/image4.jpeg',
      ],
    },
    {
      slug: 'carob-noir',
      nameHr: 'Carob Noir',
      nameEn: 'Carob Noir',
      compositionHr:
        'Ganache od rogača i tamne čokolade · Mousse od rogača · Hrskava baza · Mirror glazura',
      ingredientsHr:
        'Rogač, tamna čokolada, vrhnje 35%mm, šećer, jaja, brašno, maslac, badem brašno, želatina, glukoza',
      allergensHr: 'Gluten, jaja, mlijeko i mliječni proizvodi, orašasti plodovi',
      individualPrice: 4.8,
      images: [
        '/pastries/kutija-mediterana/carob-noir/image1.jpeg',
        '/pastries/kutija-mediterana/carob-noir/image2.jpeg',
        '/pastries/kutija-mediterana/carob-noir/image3.jpeg',
        '/pastries/kutija-mediterana/carob-noir/image4.jpeg',
      ],
    },
    {
      slug: 'green-harmony',
      nameHr: 'Green Harmony (GF)',
      nameEn: 'Green Harmony (GF)',
      compositionHr:
        'Biskvit od badema · Insert/gel od Kombuche · Insert od kremaste zelene jabuke i Kombuche · Chantilly s kaduljom · Mirror glazura',
      ingredientsHr:
        'Pire jabuke, kombucha, šećer, jaja, želatina, maslac, mascarpone, vrhnje 35%mm, limun, rižino brašno, gluten free brašno, badem brašno, med, ulje, pektin',
      allergensHr: 'Orašidi, mliječni proizvodi, jaja. Može sadržavati gluten u tragovima',
      individualPrice: 5.3,
      isGlutenFree: true,
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
      nameHr: 'Limone di Dalmacija',
      nameEn: 'Limone di Dalmacija',
      compositionHr: 'Limun krema · Limun pjena · Biskvit · Sablé',
      ingredientsHr:
        'Želatina, šećer, limun, jaja, maslac, mlijeko, bijela čokolada, vrhnje 35%mm, maslinovo ulje, ružmarin, badem brašno',
      allergensHr: 'Jaja, mlijeko i mliječni proizvodi, gluten, orašasti plodovi',
      individualPrice: 5.3,
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
      nameHr: 'Oro Verde',
      nameEn: 'Oro Verde',
      compositionHr:
        'Mousse od maslinovog ulja · Insert od maslinova likera i bijele čokolade · Biskvit · Sablé podloga · Mirror glazura',
      ingredientsHr:
        'Slatko vrhnje 35%mm, bijela čokolada, maslinov liker, maslinovo ulje, želatina, limun sok, vanilija štapić, kakao maslac, brašno, jaja',
      allergensHr: 'Orašasti plodovi, mlijeko i mliječni proizvodi, gluten, jaja',
      individualPrice: 5.3,
      images: [
        '/pastries/kutija-mediterana/oro-verde/image1.jpeg',
        '/pastries/kutija-mediterana/oro-verde/image2.jpeg',
        '/pastries/kutija-mediterana/oro-verde/image3.jpeg',
      ],
    },
  ],
};

export default kutijaMediterana;
