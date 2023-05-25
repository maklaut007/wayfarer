interface Cities {
  id: number;
  name: string;
  photo: string;
  country: string;
}

// This the
export const cities: Cities[] = [
  {
    id: 1,
    name: 'San Francisco',
    photo: './assets/images/san-francisco-mini.jpg',
    country: 'USA',
  },

  {
    id: 2,
    name: 'London',
    photo: './assets/images/london-mini.jpg',
    country: 'UK',
  },

  {
    id: 3,
    name: 'Seattle',
    photo: './assets/images/seattle-mini.webp',
    country: 'USA',
  },

  {
    id: 4,
    name: 'Sydney',
    photo: './assets/images/sydney-mini.webp',
    country: 'Australia',
  },
];
