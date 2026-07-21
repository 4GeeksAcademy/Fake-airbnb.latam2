export interface HabitacionDetalle {
  id: string;
  photos: string[];
  description: string;
  host: {
    name: string;
    yearsHosting: number;
    avatarPlaceholder: string;
  };
  amenities: {
    icon: string;
    label: string;
  }[];
  guestsMin: number;
  guestsMax: number;
}
