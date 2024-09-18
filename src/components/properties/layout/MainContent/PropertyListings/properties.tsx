import Bed from "../../../../../assets/icons/ui/Bed";
import Bath from "../../../../../assets/icons/ui/Bath";
import Area from "../../../../../assets/icons/ui/Area";
import Apartment from "../../../../../assets/icons/ui/Apartment";
import Stairs from "../../../../../assets/icons/ui/Stairs";
import Property1 from "../../../../../assets/images/property1.png";
import Property2 from "../../../../../assets/images/property2.png";

interface GeoPoints {
  lat: number;
  lng: number;
}

export interface Property {
  id: number;
  type: string;
  title: string;
  location: string;
  beds?: any;
  baths?: any;
  area?: any;
  floors?: any;
  apartments?: any;
  features?: string[];
  geoPoints: GeoPoints;
  images?: any[];
}

export const properties: Property[] = [
  {
    id: 1,
    type: "Villa",
    title: "221 Franklin State Residence London",
    location: "Gunnersbury House, London",
    beds: {
      value: 3,
      icon: <Bed />,
    },
    baths: {
      value: 2,
      icon: <Bath />,
    },
    area: {
      value: 500,
      icon: <Area />,
    },
    floors: {
      value: 2,
      icon: <Stairs />,
    },
    apartments: {
      value: 1,
      icon: <Apartment />,
    },
    features: ["Gym Available", "Swimming Pool", "Parking Spaces"],
    geoPoints: {
      lat: 40.748817,
      lng: -73.985428,
    },
    images: [Property1, Property2],
  },
  {
    id: 2,
    type: "Villa",
    title: "221 Franklin State Residence London",
    location: "Gunnersbury House, London",
    beds: {
      value: 3,
      icon: <Bed />,
    },
    baths: {
      value: 2,
      icon: <Bath />,
    },
    area: {
      value: 500,
      icon: <Area />,
    },
    floors: {
      value: 2,
      icon: <Stairs />,
    },
    apartments: {
      value: 1,
      icon: <Apartment />,
    },
    features: ["Gym Available", "Swimming Pool", "Parking Spaces"],
    geoPoints: {
      lat: 40.748817,
      lng: -73.985428,
    },
  },
  {
    id: 3,
    type: "Villa",
    title: "221 Franklin State Residence London",
    location: "Gunnersbury House, London",
    beds: {
      value: 3,
      icon: <Bed />,
    },
    baths: {
      value: 2,
      icon: <Bath />,
    },
    area: {
      value: 500,
      icon: <Area />,
    },
    floors: {
      value: 2,
      icon: <Stairs />,
    },
    apartments: {
      value: 1,
      icon: <Apartment />,
    },
    features: ["Gym Available", "Swimming Pool", "Parking Spaces"],
    geoPoints: {
      lat: 40.748817,
      lng: -73.985428,
    },
  },
];
