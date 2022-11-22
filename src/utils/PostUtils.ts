import axios from 'axios';
import { Post, PostNoId } from '../types/Post';

export const storePost = async (data: PostNoId) => {
  axios.post('http://localhost:3001/posts', {
    title: data.title,
    body: data.body,
    userId: data.userId,
    created_at: data.created_at,
  });
};

export const updatePost = async (data: Post) => {
  axios.put('http://localhost:3001/posts/' + data.id, {
    title: data.title,
    body: data.body,
    userId: data.userId,
    created_at: data.created_at,
  });
};

export const deletePost = async (id: number) => {
  await axios.delete(`http://localhost:3001/posts/${id}`);
};
