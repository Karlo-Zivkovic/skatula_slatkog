export type CategoryType = 'box' | 'individual' | 'collection';

export interface CategoryInfo {
  slug: string;
  type: CategoryType;
  nameHr: string;
  nameEn: string;
  descriptionHr: string;
  descriptionEn: string;
  gradient: string;
  coverImage: string;
}

export const categories: CategoryInfo[] = [
  {
    slug: 'kutija-mediterana',
    type: 'box',
    nameHr: 'Kutija mediterana',
    nameEn: 'Mediterranean Box',
    descriptionHr: 'Pet mediteranskih slastica u elegantnoj kutiji',
    descriptionEn: 'Five Mediterranean pastries in an elegant box',
    gradient: 'linear-gradient(135deg, #E8C87A 0%, #C9973A 100%)',
    coverImage: '/pastries/kutija-mediterana/azure-bloom/image1.jpeg',
  },
  {
    slug: 'kolaci',
    type: 'individual',
    nameHr: 'Kolači',
    nameEn: 'Pastries',
    descriptionHr: 'Ručno rađeni kolači od najfinijih sastojaka',
    descriptionEn: 'Handcrafted pastries from the finest ingredients',
    gradient: 'linear-gradient(135deg, #F5E6D3 0%, #DFB05C 100%)',
    coverImage: '/pastries/kolaci/golden-globe/image1.jpeg',
  },
  {
    slug: 'torte',
    type: 'individual',
    nameHr: 'Torte',
    nameEn: 'Cakes',
    descriptionHr: 'Raskošne torte za svaku posebnu prigodu',
    descriptionEn: 'Luxurious cakes for every special occasion',
    gradient: 'linear-gradient(135deg, #4A3728 0%, #1C1008 100%)',
    coverImage: '/pastries/torte/cheesecake/image1.jpeg',
  },
  {
    slug: 'petit-fours',
    type: 'collection',
    nameHr: 'Petit fours',
    nameEn: 'Petit fours',
    descriptionHr: 'Elegantni mali zalogaji savršenog okusa',
    descriptionEn: 'Elegant little bites of perfect flavour',
    gradient: 'linear-gradient(135deg, #FBF0E0 0%, #C9973A 80%)',
    coverImage: '/pastries/petit-fours/petit-fours/image1.jpeg',
  },
  {
    slug: 'zlatna-skatula',
    type: 'box',
    nameHr: 'Zlatna škatula',
    nameEn: 'Golden Box',
    descriptionHr: 'Šest premium slastica — bezvremenski klasici u suvremenoj formi',
    descriptionEn: 'Six premium pastries — timeless classics in a contemporary form',
    gradient: 'linear-gradient(135deg, #C9973A 0%, #7A5010 100%)',
    coverImage: '/pastries/zlatna-skatula/heritage/image1.jpeg',
  },
];
