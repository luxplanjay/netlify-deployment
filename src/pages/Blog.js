import React from 'react';
import PostList from '../components/PostList';
import posts from '../posts.json';

const Blog = () => (
  <>
    <PostList items={posts} />
  </>
);

export default Blog;
