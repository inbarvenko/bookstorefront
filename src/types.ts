export type SignInData = {
    email: string;
    password:string;
  }
  
  export interface IUser {
    id?: number | null,
    username?: string | null,
    email?: string | null,
  }
  
  export type SignUpData = {
    username?: string;
    email: string;
    password: string;
    repeatPassword?: string;
  };