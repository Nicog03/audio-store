import { ReviewType } from "./review.interface";

export interface ProductType {
    imageUrl: string;
  
    rating: number;
    price: string;
    name: string;
    description: string;
    category: string;
    created_at: string;
    reviews: ReviewType[];
    id: number;
    quantity?: number;
  }