import skatulaMediterana from './data/skatula-mediterana';
import zlatnaSkatula from './data/zlatna-skatula';

export interface BoxItem {
  slug: string;
  nameHr: string;
  nameEn: string;
  compositionHr: string;
  compositionEn?: string;
  ingredientsHr: string;
  ingredientsEn?: string;
  allergensHr: string;
  allergensEn?: string;
  individualPrice: number;
  isGlutenFree?: boolean;
  coverImage?: string;
  images: string[];
  objectPosition?: string;
}

export interface ProductBox {
  categorySlug: string;
  boxPrice: number;
  descriptionHr: string;
  descriptionEn: string;
  showcaseImages?: { src: string; objectPosition?: string }[];
  items: BoxItem[];
}

export const boxes: ProductBox[] = [
  skatulaMediterana,
  zlatnaSkatula,
];

export function getBox(categorySlug: string): ProductBox | undefined {
  return boxes.find((b) => b.categorySlug === categorySlug);
}

export function boxItemToPastry(
  item: BoxItem,
  overrides?: { coverImage?: string; objectPosition?: string; category?: import('./pastries').CategorySlug }
) {
  return {
    slug: item.slug,
    category: (overrides?.category ?? 'kolaci') as import('./pastries').CategorySlug,
    nameHr: item.nameHr,
    nameEn: item.nameEn,
    compositionHr: item.compositionHr,
    compositionEn: item.compositionEn,
    ingredientsHr: item.ingredientsHr,
    ingredientsEn: item.ingredientsEn,
    allergensHr: item.allergensHr,
    allergensEn: item.allergensEn,
    price: item.individualPrice,
    isGlutenFree: item.isGlutenFree,
    coverImage: overrides?.coverImage ?? item.coverImage ?? item.images[0],
    images: item.images,
    objectPosition: overrides?.objectPosition ?? item.objectPosition,
  };
}
