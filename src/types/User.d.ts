export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  status: string;
  created_at: string;
}

export interface UserNoId {
  name: string;
  email: string;
  password: string;
  status: string;
  created_at: string;
}

// Auth

export interface Auth {
  id: number;
  name: string;
  email: string;
  password: string;
  status: string;
}
