import { Link, useNavigate } from 'react-router-dom';
import { PostProps as PostType } from '../types/Post';
import { deletePost } from '../utils/PostUtils';

export const Post = ({ post }: PostType) => {
  const navigate = useNavigate();

  return (
    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-full mb-3">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </h2>
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
        {post.body}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            className="w-7 h-7 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
            alt="Bonnie Green avatar"
          />
          <span className="font-medium dark:text-white">Bonnie Green</span>
        </div>
        <div className="inline-flex items-end">
          <Link
            to={`/post/edit/${post.id}`}
            className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-yellow-600 border border-transparent rounded-lg active:bg-yellow-800 hover:bg-yellow-700 focus:outline-none focus:shadow-outline-yellow"
          >
            Edit
          </Link>
          <button
            className="px-4 py-2 ml-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-red-800 hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
            onClick={() => {
              deletePost(post.id);
              window.location.reload();
            }}>
              Delete
          </button>
        </div>
      </div>
    </article>
  );
};

export default Post;
