import { Comment } from "./Comment";
import { User } from "./User";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  created_at: string;
}

export interface PostProps {
  post: Post;
}

export interface PostNoId {
  title: string;
  body: string;
  userId: number;
  created_at: string;
}

export interface PostWithUser {
  id: number;
  title: string;
  body: string;
  userId: number;
  created_at: string;
  user: User;
}

export interface PostWithComments {
  id: number;
  title: string;
  body: string;
  userId: number;
  created_at: string;
  comments: Comment[];
}

export interface PostWithUserAndComments {
  id: number;
  title: string;
  body: string;
  userId: number;
  created_at: string;
  user: User;
  comments: Comment[];
}

export interface PostWithUserProps {
  post: PostWithUser;
}