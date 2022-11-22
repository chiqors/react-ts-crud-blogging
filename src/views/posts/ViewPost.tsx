import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CommentComponent } from '../../components/CommentComponent';
import { CommentInputComment } from '../../components/CommentInputComment';

import { CommentWithUser } from '../../types/Comment';
import { PostWithUser } from '../../types/Post';
import { parseLinkHeader } from '../../utils/Helper';

export const ViewPost = () => {
  const [post, setPost] = useState<PostWithUser>();
  const [comments, setComments] = useState<CommentWithUser[]>([]);
  const [commentPage, setCommentPage] = useState('');
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response_post = await axios.get(
          `http://127.0.0.1:3001/posts/${id}?_expand=user`
        );
        const response_comments = await axios.get(
          `http://127.0.0.1:3001/comments?_expand=user&_limit=3&_page=1&_sort=created_at&_order=desc&postId=${id}`
        );
        setPost(response_post.data);
        if (response_comments.headers.link) {
          const links = parseLinkHeader(response_comments.headers.link);
          setCommentPage(links.next);
        }
        setComments(response_comments.data);
        setLoading(false);
      } catch (error: any) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <div className="mx-auto w-full max-w-[550px] pt-5">
        <h1 className="text-3xl font-bold pb-5">{post?.title}</h1>
        <p className="text-base text-[#6B7280]">{post?.body}</p>
        <button
          className="bg-[#F87171] text-white px-4 py-2 rounded-md mt-5"
          onClick={() => navigate(-1)}
        >
          Back
        </button>

        <hr className="my-5" />

        <h1 className="text-2xl font-bold pb-5">
          Comments ({comments.length})
        </h1>
        <CommentInputComment postId={post?.id as number} userId={1} />
        <div className="flex flex-col space-y-5">
          {comments.map((comment) => (
            <CommentComponent key={comment.id} comment={comment} />
          ))}
        </div>
        {commentPage && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5 w-full"
            onClick={async () => {
              try {
                const response = await axios.get(commentPage);
                const linkHeader = response.headers.link;
                const parsedLinkHeader = parseLinkHeader(linkHeader);
                setCommentPage(parsedLinkHeader.next);
                setComments([...comments, ...response.data]);
              } catch (error: any) {
                console.log(error);
              }
            }}
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
};
