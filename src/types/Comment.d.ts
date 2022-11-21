import { User } from "./User";

export interface Comment {
  id: number;
  postId: number;
  userId: number;
  body: string;
  created_at: string;
}

export interface CommentNoId {
  postId: number;
  userId: number;
  body: string;
  created_at: string;
}

export interface CommentWithUser {
  id: number;
  postId: number;
  userId: number;
  body: string;
  created_at: string;
  user: User;
}