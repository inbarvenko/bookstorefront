export type SignUpData = {
  username?: string;
  email: string;
  password: string;
  repeatPassword?: string;
};

export type SignInData = {
  email: string;
  password: string;
};
