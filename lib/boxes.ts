export interface BoxItem {
  slug: string;
  nameHr: string;
  nameEn: string;
  compositionHr: string;
  ingredientsHr: string;
  allergensHr: string;
  individualPrice: number;
  isGlutenFree?: boolean;
  images: string[];
}

export interface ProductBox {
  categorySlug: string;
  boxPrice: number;
  descriptionHr: string;
  descriptionEn: string;
  items: BoxItem[];
}

export const boxes: ProductBox[] = [
  {
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
  },
  {
    categorySlug: 'zlatna-skatula',
    boxPrice: 32.0,
    descriptionHr:
      'Ekskluzivni odabir šest premium slastica — bezvremenski klasici preneseni u suvremenu entremet formu. Svaki komad priča priču o dalmatinskoj baštini, tradiciji i majstorstvu slastičarstva. Zlatna škatula je poklon koji se pamti.',
    descriptionEn:
      'An exclusive selection of six premium pastries — timeless classics reinterpreted in a contemporary entremet form. Each piece tells a story of Dalmatian heritage, tradition, and pastry mastery. The Golden Box is a gift to remember.',
    items: [
      {
        slug: 'cloud-nine',
        nameHr: 'Cloud Nine',
        nameEn: 'Cloud Nine',
        compositionHr:
          'Lagani vanilija mousse s petit beurre keksom · Nježan biskvit od vanilije · Oblak od talijanske meringe · Sablé podloga',
        ingredientsHr:
          'Mlijeko, jaja, šećer, vrhnje 35%mm, želatina, vanilija, brašno, maslac, prašak za pecivo, badem brašno',
        allergensHr: 'Gluten, jaja, mlijeko, orašasti plodovi',
        individualPrice: 5.2,
        images: [
          '/pastries/zlatna-skatula/cloud-nine/image1.jpeg',
          '/pastries/zlatna-skatula/cloud-nine/image2.jpeg',
          '/pastries/zlatna-skatula/cloud-nine/image3.jpeg',
        ],
      },
      {
        slug: 'heritage',
        nameHr: 'Heritage',
        nameEn: 'Heritage',
        compositionHr:
          'GF biskvit od badema · Mousse od badema · Hrskavi sloj od badem pralina i čokolade · Ganache insert od čokolade i mascarpone · Fluid gel od marascina',
        ingredientsHr:
          'Badem brašno, jaja, šećer, limun, mlijeko, pasta od badema, želatina, slatko vrhnje 35%mm, maraschino, bijela čokolada, karamel čokolada, glukoza, agar, mascarpone',
        allergensHr:
          'Mlijeko i mliječni proizvodi, jaja, orašasti plodovi. Može sadržavati gluten u tragovima',
        individualPrice: 5.3,
        isGlutenFree: true,
        images: [
          '/pastries/zlatna-skatula/heritage/image1.jpeg',
          '/pastries/zlatna-skatula/heritage/image2.jpeg',
          '/pastries/zlatna-skatula/heritage/image3.jpeg',
          '/pastries/zlatna-skatula/heritage/image4.jpeg',
        ],
      },
      {
        slug: 'dalmatian-jewel',
        nameHr: 'Dalmatian Jewel (GF)',
        nameEn: 'Dalmatian Jewel (GF)',
        compositionHr:
          'GF biskvit od badema · Mousse od badema · Hrskavi sloj od badem pralina i čokolade · Ganache insert od čokolade i mascarpone · Fluid gel od marascina',
        ingredientsHr:
          'Badem brašno, jaja, šećer, limun, mlijeko, pasta od badema, želatina, slatko vrhnje 35%mm, maraschino, bijela čokolada, karamel čokolada, glukoza, agar, mascarpone',
        allergensHr:
          'Mlijeko i mliječni proizvodi, jaja, orašasti plodovi. Može sadržavati gluten u tragovima',
        individualPrice: 5.3,
        isGlutenFree: true,
        images: [
          '/pastries/zlatna-skatula/dalmatian-jewel/image1.jpeg',
          '/pastries/zlatna-skatula/dalmatian-jewel/image2.jpeg',
          '/pastries/zlatna-skatula/dalmatian-jewel/image3.jpeg',
          '/pastries/zlatna-skatula/dalmatian-jewel/image4.jpeg',
        ],
      },
      {
        slug: 'bracki-hrap',
        nameHr: 'Brački Hrap No.1',
        nameEn: 'Brački Hrap No.1',
        compositionHr:
          'Hrskava orašasta baza · Biskvit od oraha · Sloj karameliziranih oraha s medom · Crémeux od oraha s tamnim rumom · Mousse od oraha · Tuile od oraha',
        ingredientsHr:
          'Orasi, mliječna čokolada, bijela čokolada, maslac, jaja, šećer, med, badem, vrhnje 35%mm, brašno, kukuruzni škrob, kakao maslac, želatina, tamni rum',
        allergensHr: 'Gluten, jaja, orašasti plodovi. Može sadržavati tragove soje',
        individualPrice: 5.3,
        images: [
          '/pastries/zlatna-skatula/bracki-hrap-no1/image1.jpeg',
          '/pastries/zlatna-skatula/bracki-hrap-no1/image2.jpeg',
          '/pastries/zlatna-skatula/bracki-hrap-no1/image3.jpeg',
          '/pastries/zlatna-skatula/bracki-hrap-no1/image4.jpeg',
          '/pastries/zlatna-skatula/bracki-hrap-no1/image5.jpeg',
          '/pastries/zlatna-skatula/bracki-hrap-no1/image6.jpeg',
          '/pastries/zlatna-skatula/bracki-hrap-no1/image7.jpeg',
        ],
      },
      {
        slug: 'priska',
        nameHr: 'Priska',
        nameEn: 'Priska',
        compositionHr:
          'Hrskavi biskvit od suhog voća, badema i bjelanjaka · Krema od vanilije · Glazura · Dekoracija od kandiranih citrusa',
        ingredientsHr:
          'Bijela čokolada, slatko vrhnje 35%mm, mlijeko, jaja, šećer, badem, limun, naranča, suho voće (grožđice, smokve), maslac, želatina, rum',
        allergensHr: 'Jaja, mlijeko i mliječni proizvodi, orašasti plodovi',
        individualPrice: 5.4,
        images: [
          '/pastries/zlatna-skatula/priska/image1.jpeg',
          '/pastries/zlatna-skatula/priska/image2.jpeg',
          '/pastries/zlatna-skatula/priska/image3.jpeg',
          '/pastries/zlatna-skatula/priska/image4.jpeg',
        ],
      },
      {
        slug: 'noisette-royal',
        nameHr: 'Noisette Royal',
        nameEn: 'Noisette Royal',
        compositionHr:
          'Čokoladni dacquise · Čokoladni crémeux · Krema od pralina · Čokoladna krema',
        ingredientsHr:
          'Jaja, šećer, brašno, kakao, maslac, čokolada, vrhnje 35%mm, liker, želatina, lješnjak praline, glukoza',
        allergensHr: 'Gluten, mliječni proizvodi, orašidi, jaja',
        individualPrice: 5.5,
        images: [
          '/pastries/zlatna-skatula/noisette-royal/image1.jpeg',
          '/pastries/zlatna-skatula/noisette-royal/image2.jpeg',
          '/pastries/zlatna-skatula/noisette-royal/image3.jpeg',
          '/pastries/zlatna-skatula/noisette-royal/image4.jpeg',
        ],
      },
    ],
  },
];

export function getBox(categorySlug: string): ProductBox | undefined {
  return boxes.find((b) => b.categorySlug === categorySlug);
}
