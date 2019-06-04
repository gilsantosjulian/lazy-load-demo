import React from "react";
import "./App.css";
import data from "./data";
import LazyLoad from "react-lazyload";

const Loading = () => {
  return (
    <div className="post loading">
      <h5>Loading...</h5>
    </div>
  );
};

const Post = ({ id, title, body }) => {
  return (
    <div className="post">
      <div className="post-body">
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h2>LazyLoad Demo</h2>
      <div className="post-container">
        {data.map(post => (
          <LazyLoad
            key={post.id}
            placeholder={<Loading />}
            height={100}
            offset={[-100, 100]}
          >
            <Post key={post.id} {...post} />
          </LazyLoad>
        ))}
      </div>
    </div>
  );
};

export default App;
