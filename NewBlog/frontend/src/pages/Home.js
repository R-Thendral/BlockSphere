import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/axios';
import LikeButton from '../components/LikeButton';
import ShareButton from '../components/ShareButton';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await api.get('/api/posts');
      setPosts(response.data);
      setError(null);
    } catch (err) {
      if (err.code === 'ECONNREFUSED' || err.message === 'Network Error') {
        setError('Cannot connect to server. Please make sure the backend server is running on port 5000.');
      } else {
        setError('Failed to load posts');
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-xl">Loading posts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Latest Posts</h1>
      
      {posts.length === 0 ? (
        <div className="text-center text-gray-500 py-12">
          <p className="text-xl">No posts yet. Be the first to create one!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6"
            >
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.content.substring(0, 150)}...
              </p>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-500">
                  By {post.author?.username || 'Unknown'}
                </span>
                <Link
                  to={`/post/${post._id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read More →
                </Link>
              </div>
              
              {/* Like and Share Buttons */}
              <div className="flex items-center space-x-3 mt-3 pt-3 border-t border-gray-200">
                <LikeButton postId={post._id} initialLikesCount={post.likesCount || 0} />
                <ShareButton postId={post._id} postTitle={post.title} />
              </div>
              
              <div className="mt-2 text-xs text-gray-400">
                {new Date(post.createdAt).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

