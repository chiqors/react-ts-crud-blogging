import { User } from "./User";
import { Post } from "./Post";

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

export interface CommentProps {
  comment: Comment;
}

export interface CommentInputProps {
  postId: number;
  userId: number;
}

export interface CommentWithUser {
  id: number;
  postId: number;
  userId: number;
  body: string;
  created_at: string;
  user: User;
}

export interface CommentWithUserProps {
  comment: CommentWithUser;
}