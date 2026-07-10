export interface Alojamiento {
  id: string;
  title: string;
  pricePerNight: number;
  rating: number;
  reviewsCount: number;
  category: string;
  location: string;
  lat: number;
  lng: number;
  imagePlaceholder: string;
}