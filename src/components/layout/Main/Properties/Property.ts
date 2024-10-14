export interface Amenity {
  id: number;
  name: string;
}

export const propertyType: { [key: string]: string } = {
  "010": "Residential",
  "020": "Commercial",
};

export const contractType: { [key: string]: string } = {
  "010": "Investment",
  "020": "Management",
  "030": "Self",
};

export interface Amenity {
  id: number;
  name: string;
}

export interface Property {
  id: number;
  name: string;
  type: keyof typeof propertyType;
  type_name: string;
  contract_type: keyof typeof contractType;
  contract_type_name: string;
  local_authority_id: string;
  street: string;
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  units: number;
  created_at: string;
  amenities: Amenity[];
  images: [];
}
