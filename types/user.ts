export interface UserProps {
  id: string;
  name: string;
  email: string | null;
  emailVerified: Date | null;
  createdAt: Date;
  updatedAt: Date;
  image: string | null;
}
