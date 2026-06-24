import kutijaMediterana from './data/kutija-mediterana';
import zlatnaSkatula from './data/zlatna-skatula';

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
  objectPosition?: string;
}

export interface ProductBox {
  categorySlug: string;
  boxPrice: number;
  descriptionHr: string;
  descriptionEn: string;
  items: BoxItem[];
}

export const boxes: ProductBox[] = [
  kutijaMediterana,
  zlatnaSkatula,
];

export function getBox(categorySlug: string): ProductBox | undefined {
  return boxes.find((b) => b.categorySlug === categorySlug);
}
