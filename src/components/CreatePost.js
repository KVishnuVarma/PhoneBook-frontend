import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/posts', { title, content });
      console.log('Post created:', response.data);
      setTitle('');
      setContent('');
      setError(null);
      if (onPostCreated) {
        onPostCreated(response.data);
      }
    } catch (err) {
      console.error('Error creating post:', err);
      setError('Failed to create post. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titlex"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
