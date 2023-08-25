export type SignInData = {
  email: string;
  password: string;
};

export interface IUser {
  id?: number | null;
  username?: string | null;
  email: string | undefined;
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

  price?: string,
  photoUrl?: string;
  rate?: number;

}