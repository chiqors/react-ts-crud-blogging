import axios from 'axios';
import { CommentNoId } from '../types/Comment';

export const storeComment = async (data: CommentNoId) => {
  axios.post('http://localhost:3001/comments', {
    postId: data.postId,
    userId: data.userId,
    body: data.body,
    created_at: data.created_at,
  });
};
