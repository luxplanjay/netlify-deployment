import React from 'react';
import './PostList.css';

const PostList = ({ items }) => (
  <ul className="PostList">
    {items.map(({ id, title, text, image }) => (
      <li key={id}>
        <h2>{title}</h2>
        <img src={image} alt={title} width={480} />
        <p>{text.slice(0, 480)}...</p>
      </li>
    ))}
  </ul>
);

export default PostList;
