interface Cities {
  id: number;
  name: string;
  photoSmall: string;
  photoLarge: string;
  country: string;
}

// This the
export const cities: Cities[] = [
  {
    id: 1,
    name: 'San Francisco',
    photoSmall: './assets/images/san-francisco-mini.jpg',
    photoLarge: './assets/images/san-francisco-large.jpg',
    country: 'USA',
  },

  {
    id: 2,
    name: 'London',
    photoSmall: './assets/images/london-mini.jpg',
    photoLarge: './assets/images/london-large.jpg',
    country: 'UK',
  },

  

  {
    id: 3,
    name: 'Seattle',
    photoSmall: './assets/images/seattle-mini.webp',
    photoLarge: './assets/images/seattle-large.jpg',
    country: 'USA',
  },

  {
    id: 4,
    name: 'Sydney',
    photoSmall: './assets/images/sydney-mini.webp',
    photoLarge: './assets/images/sydney-large.png',
    country: 'Australia',
  },
];
