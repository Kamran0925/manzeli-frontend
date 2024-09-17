export interface Property {
  id: number;
  type: string;
  title: string;
  location: string;
  beds?: number;
  baths?: number;
  area?: number;
  floors?: number;
  apartments?: number;
  features?: string[];
  geoPoints?: {};
}

export const properties: Property[] = [
  {
    id: 1,
    type: "Villa",
    title: "221 Franklin State Residence London",
    location: "Gunnersbury House, London",
    beds: 3,
    baths: 2,
    area: 500,
    floors: 2,
    apartments: 1,
    features: ["Gym Available", "Swimming Pool", "Parking Spaces"],
  },
  {
    id: 2,
    type: "Villa",
    title: "221 Franklin State Residence London",
    location: "Gunnersbury House, London",
    beds: 3,
    baths: 2,
    area: 500,
    floors: 2,
    apartments: 1,
    features: ["Gym Available", "Swimming Pool", "Parking Spaces"],
  },
  {
    id: 3,
    type: "Villa",
    title: "221 Franklin State Residence London",
    location: "Gunnersbury House, London",
    beds: 3,
    baths: 2,
    area: 500,
    floors: 2,
    apartments: 1,
    features: ["Gym Available", "Swimming Pool", "Parking Spaces"],
  },
];
