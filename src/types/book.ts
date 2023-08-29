export type Book = {
  id: string;
  author: string;
  name: string;
  description: string;

  price?: string;
  photoUrl?: string;
  rate?: number;

  comments?: string[];
};
