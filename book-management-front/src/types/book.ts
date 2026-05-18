export interface Book {
  id: number;
  title: string;
  author: string;
  price: number | null;
  available: boolean;
}