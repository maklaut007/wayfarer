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
    photo:
      'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/san-francisco-golden-gate-bridge-1x1-gregory-ballos.jpg',
    country: 'USA',
  },

  {
    id: 2,
    name: 'London',
    photo:
      'https://i2-prod.mirror.co.uk/incoming/article28871026.ece/ALTERNATES/s1200c/0_London-at-sunset.jpg',
    country: 'UK',
  },

  {
    id: 3,
    name: 'Seattle',
    photo:
      'https://imageio.forbes.com/i-forbesimg/media/lists/places/seattle-wa_416x416.jpg?format=jpg&height=416&width=416&fit=bounds',
    country: 'USA',
  },

  {
    id: 4,
    name: 'Sydney',
    photo:
      'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/1600/90/media/abd/refresh/asia-pacific/3-night-sydney-vacations/harbour-1x1.jpg?cb=5',
    country: 'Australia',
  },
];
