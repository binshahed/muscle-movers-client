export type TUserSignUp = {
  name: string;
  email: string;
  password: string;
  phone: string;
  role?: "user" | "admin";
  address: string;
};
