import React from 'react';
import { useNavigate } from 'react-router-dom';
import { storePost } from '../../utils/PostUtils';
import moment from 'moment';

export const AddPost = () => {
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const navigate = useNavigate();

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const onPostStore = async() => {
    storePost({
      title: title,
      body: body,
      userId: 1,
      created_at: moment().format('YYYY-MM-DD HH:mm:ss')
    });
    navigate('/');
  };

  return (
    <div className="mx-auto w-full max-w-[550px] pt-5">
      <h1 className="text-3xl font-bold pb-5">Add Post</h1>
      <div className="mb-5">
        <label className="mb-3 block text-base font-medium text-[#07074D]">
          Title
        </label>
        <input
          type="text"
          name="title"
          onChange={onChangeTitle}
          placeholder="Title of the post"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label className="mb-3 block text-base font-medium text-[#07074D]">
          Body
        </label>
        <textarea
          rows={4}
          name="body"
          onChange={onChangeBody}
          placeholder="Type your body here..."
          className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>
      <div>
        <button 
          className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
          onClick={onPostStore}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
