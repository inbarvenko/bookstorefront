export type SignInData = {
  email: string;
  password: string;
};

export interface IUser {
  username?: string | null;
  email: string | undefined;
  photoUrl?: string;
  access_token: string;
}

export type SignUpData = {
  username?: string;
  email: string;
  password: string;
  repeatPassword?: string;
};

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

export type Comment = {
  author: {
    first_name: string;
    last_name: string;
    photoUrl?: string;
  };
  comment_text: string;
  created_at: string;
};
