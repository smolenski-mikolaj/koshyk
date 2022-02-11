export interface User {
  id?: string;
  googleId: string;
  email: string;
  firstname: string;
  lastname: string;
  name: string;
  avatar: string;
  lists?: Array<{
    id: number;
    name: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
}
