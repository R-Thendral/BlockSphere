import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold hover:text-blue-200">
            BlogSphere
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className="hover:text-blue-200 transition-colors"
            >
              Home
            </Link>
            
            {user && (user.role === 'author' || user.role === 'admin') && (
              <Link 
                to="/create" 
                className="hover:text-blue-200 transition-colors"
              >
                Create Post
              </Link>
            )}
            
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm">Welcome, {user.username}</span>
                <button
                  onClick={handleLogout}
                  className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

