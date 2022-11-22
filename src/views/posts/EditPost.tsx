import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updatePost } from '../../utils/PostUtils';
import moment from 'moment';

export const EditPost = () => {
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3001/posts?id=' + id
        );
        setTitle(response.data[0].title);
        setBody(response.data[0].body);
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  const onPostUpdate = async () => {
    updatePost({
      id: parseInt(id?.toString() || '0'),
      title,
      body,
      userId: 1,
      created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
    });
    navigate('/');
  };

  return (
    <div className="mx-auto w-full max-w-[550px] pt-5">
      <h1 className="text-3xl font-bold pb-5">Edit Post #{id}</h1>
      <div className="mb-5">
        <label className="mb-3 block text-base font-medium text-[#07074D]">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={title}
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
          value={body}
          onChange={onChangeBody}
          placeholder="Type your body here..."
          className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>
      <div>
        <button
          className="hover:shadow-form rounded-md bg-[#b3c41f] py-3 px-8 text-base font-semibold text-white outline-none"
          onClick={onPostUpdate}
        >
          Update
        </button>
      </div>
    </div>
  );
};
