import React from 'react';
import { CommentWithUserProps } from '../types/Comment';
import moment from 'moment';

export const CommentComponent = ({ comment }: CommentWithUserProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="https://randomuser.me/api/portraits/men/22.jpg"
            alt="user"
            className="w-8 h-8 rounded-full"
          />
          <p className="text-base font-medium text-[#07074D]">
            {comment.user?.name}
          </p>
        </div>
        <div className="inline-flex items-end">
          <span className="text-sm text-gray-500">
            {moment(comment.created_at).fromNow()}
          </span>
        </div>
      </div>
      <p className="text-base text-[#6B7280]">{comment.body}</p>
    </div>
  );
};
