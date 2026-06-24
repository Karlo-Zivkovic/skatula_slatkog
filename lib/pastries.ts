import kolaci from './data/kolaci';
import torte from './data/torte';
import petitFours from './data/petit-fours';

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
  priceNote?: string;
  isGlutenFree?: boolean;
  isVegan?: boolean;
  coverImage: string;
  images: string[];
}

export const pastries: Pastry[] = [
  ...kolaci,
  ...torte,
  ...petitFours,
];
