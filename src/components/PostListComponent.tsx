import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { parseLinkHeader } from '../utils/Helper';
import { Post } from './PostComponent';
import { PostWithUser } from '../types/Post';
import axios from 'axios';

export const PostList = () => {
  const [posts, setPosts] = useState<PostWithUser[]>([]);
  const [loadPage, setLoadPage] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/posts?_page=1&_limit=3&_sort=created_at&_order=desc&_expand=user');
        if (response.headers.link) {
          const links = parseLinkHeader(response.headers.link);
          setLoadPage(links.next);
        }
        setPosts(response.data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-around mt-6 w-full">
      <Link to="/post/create" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5">
        Add Post
      </Link>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
      {loadPage && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={async () => {
            try {
              const response = await axios.get(loadPage);
              const linkHeader = response.headers.link;
              const parsedLinkHeader = parseLinkHeader(linkHeader);
              setLoadPage(parsedLinkHeader.next);
              setPosts([...posts, ...response.data]);
            } catch (error: any) {
              setError(error.message);
            }
          }}
        >
          Load More
        </button>
      )}
    </div>
  );
};
