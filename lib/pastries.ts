export interface Pastry {
  slug: string;
  nameHr: string;
  nameEn: string;
  descriptionHr: string;
  descriptionEn: string;
  coverImage: string;
  images: string[];
}

export const pastries: Pastry[] = [
  {
    slug: 'limun-kolac',
    nameHr: 'Kolač od limuna',
    nameEn: 'Lemon cake',
    descriptionHr: 'Opis ovog kolača dolazi uskoro. Obratite nam se za više informacija.',
    descriptionEn: 'Description coming soon. Contact us for more information.',
    coverImage: '/hero_background.jpg',
    images: ['/hero_background.jpg'],
  },
  {
    slug: 'cokoladni-kolac',
    nameHr: 'Čokoladni kolač',
    nameEn: 'Chocolate cake',
    descriptionHr: 'Opis ovog kolača dolazi uskoro. Obratite nam se za više informacija.',
    descriptionEn: 'Description coming soon. Contact us for more information.',
    coverImage: '/hero_background.jpg',
    images: ['/hero_background.jpg'],
  },
  {
    slug: 'kremsnita',
    nameHr: 'Kremsnita',
    nameEn: 'Cream cake',
    descriptionHr: 'Opis ovog kolača dolazi uskoro. Obratite nam se za više informacija.',
    descriptionEn: 'Description coming soon. Contact us for more information.',
    coverImage: '/hero_background.jpg',
    images: ['/hero_background.jpg'],
  },
];
