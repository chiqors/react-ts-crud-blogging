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
  accessToken: string;
  user: {
    id: number;
    email: string;
    name: string;
    status: string;
  }
}

export interface AuthRegister {
  name: string;
  email: string;
  password: string;
  status: string;
}

export interface AuthLogin {
  email: string;
  password: string;
}
