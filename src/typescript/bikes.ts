export interface Bike {
  id: number;
  cover: string;
  images: string[];
  name: string;
  description: string;
  engine: string;
  price: number;
  features: BikeFeature[];
}

export interface BikeFeature {
  title: string;
  description: string;
}
