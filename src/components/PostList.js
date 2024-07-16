import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreatePost from './CreatePost';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts. Please try again later.');
      }
    };

    fetchPosts();
  }, []);

  const handlePostCreated = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <div>
      <h1>Posts</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        posts.map((post) => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))
      )}
      <CreatePost onPostCreated={handlePostCreated} />
    </div>
  );
};

export default PostList;
