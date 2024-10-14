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

export interface Property {
  id: number;
  name: string;
  type: keyof typeof propertyType;
  contract_type: keyof typeof contractType;
  local_authority_id: string;
  street: string;
  city: string;
  latitude: number;
  longitude: number;
  amenities: Amenity[];
  created_at: string;
}
