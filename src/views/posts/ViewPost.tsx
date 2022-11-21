import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CommentWithUser } from '../../types/Comment';
import { PostWithUser } from '../../types/Post';

export const ViewPost = () => {
  const [post, setPost] = useState<PostWithUser>();
  const [comments, setComments] = useState<CommentWithUser[]>([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response_post = await axios.get(`http://127.0.0.1:3001/posts/${id}?_expand=user`);
        const response_comments = await axios.get(`http://127.0.0.1:3001/comments?_expand=user&postId=${id}`);
        setPost(response_post.data);
        setComments(response_comments.data);
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);
  
  return (
    <>
      <div className="mx-auto w-full max-w-[550px] pt-5">
        <h1 className="text-3xl font-bold pb-5">{post?.title}</h1>
        <p className="text-base text-[#6B7280]">{post?.body}</p>
        <button className="bg-[#F87171] text-white px-4 py-2 rounded-md mt-5" onClick={() => navigate(-1)}>Back</button>
        
        <hr className="my-5" />

        <h1 className="text-2xl font-bold pb-5">Comments ({comments.length})</h1>
        <div className="flex flex-col space-y-5">
          {comments.map((comment) => (
            <div className="flex flex-col space-y-2" key={comment.id}>
              <div className="flex items-center space-x-2">
                <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="user" className="w-8 h-8 rounded-full" />
                <p className="text-base font-medium text-[#07074D]">{comment.user?.name}</p>
              </div>
              <p className="text-base text-[#6B7280]">{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
