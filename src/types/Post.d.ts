export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostProps {
  post: Post;
}

export interface PostNoId {
  title: string;
  body: string;
}