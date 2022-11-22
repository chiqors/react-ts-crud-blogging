import axios from 'axios';
import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updatePost } from '../../utils/PostUtils';
import moment from 'moment';

export const EditPost = () => {
  const [formData, setFormData] = React.useState({
    title: '',
    body: '',
    userId: 0,
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const userLocalLogin = localStorage.getItem('userLogin');
  const userLogin = JSON.parse(userLocalLogin || '{}');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3001/posts?id=' + id
        );
        setFormData({
          title: response.data[0].title,
          body: response.data[0].body,
          userId: response.data[0].userId,
        });
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  const onPostUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.keys(userLogin).length == 0) {
      alert('Please login first!');
      navigate('/login');
      return;
    } else if (userLogin.user.id !== formData.userId) {
      alert('You are not authorized to edit this post!');
      navigate('/');
      return;
    }
    updatePost({
      id: parseInt(id?.toString() || '0'),
      title: formData.title,
      body: formData.body,
      userId: userLogin.user.id,
      created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
    });
    navigate('/');
  };

  return (
    <form onSubmit={onPostUpdate} className="mx-auto w-full max-w-[550px] pt-5">
      <h1 className="text-3xl font-bold pb-5">Edit Post #{id}</h1>
      <div className="mb-5">
        <label className="mb-3 block text-base font-medium text-[#07074D]">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
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
          value={formData.body}
          onChange={handleAreaChange}
          placeholder="Type your body here..."
          className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>
      <div>
        <button
          className="hover:shadow-form rounded-md bg-[#b3c41f] py-3 px-8 text-base font-semibold text-white outline-none"
          type="submit"
        >
          Update
        </button>
      </div>
    </form>
  );
};
