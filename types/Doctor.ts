export interface Schedule {
  _id: string;
  day: string;
  from: string;
  to: string;
}

export interface Doctor {
  _id: string;
  name: string;
  phone: string;
  specialty: string;
  clinic: string;
  price: number;
  rating: number;
  totalReviews: number;
  image: string;
  schedule: Schedule[];
  certificates: { title: string }[];
  intro: string;
}
