import React from 'react';
import { storeComment } from '../utils/CommentUtils';
import moment from 'moment';
import { CommentInputProps } from '../types/Comment';
import { useNavigate } from 'react-router-dom';

export const CommentInputComment = ({ postId, userId }: CommentInputProps) => {
  const [comment, setComment] = React.useState<string>('');
  const userLocalLogin = localStorage.getItem('userLogin');
  const userLogin = JSON.parse(userLocalLogin || '{}');
  const navigate = useNavigate();

  const onCommentStore = async () => {
    if (Object.keys(userLogin).length == 0) {
      alert('Please login first!');
      navigate('/login');
      return;
    }
    storeComment({
      body: comment,
      postId,
      userId: userLogin.user.id,
      created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
    });
    window.location.reload();
  };

  return (
    // Input field
    <div className="flex flex-col space-y-2 mb-5">
      <div className="flex items-center space-x-2">
        <img
          src="https://randomuser.me/api/portraits/men/22.jpg"
          alt="user"
          className="w-8 h-8 rounded-full"
        />
        <input
          type="text"
          name="inputComment"
          onChange={(e) => setComment(e.target.value)}
          className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          placeholder="Add a comment..."
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onCommentStore}
      >
        Post
      </button>
      <hr />
    </div>
  );
};
