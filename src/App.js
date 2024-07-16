import React from "react";
import PostList from "./components/PostList";
import CreatePost from './components/CreatePost';

const App = () => {
  return (
    <div className="App">
        <h1>Community</h1>
       
        <PostList />
    </div>
  );
};

export default App;