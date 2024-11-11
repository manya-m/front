import React, { useState } from 'react';
import './style.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="auth-container">
      <div className="auth-content">
        <h2>{isLogin ? 'Welcome Back!' : 'Join Us Today!'}</h2>
        <form>
          {!isLogin && (
            <>
              <div className="form-group">
                <input type="text" placeholder="First Name" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Last Name" required />
              </div>
            </>
          )}
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" required />
          </div>
          {!isLogin && (
            <div className="form-group">
              <input type="password" placeholder="Confirm Password" required />
            </div>
          )}
          <button type="submit">{isLogin ? 'Log In' : 'Sign Up'}</button>
        </form>
        <p onClick={toggleForm} className="toggle-link">
          {isLogin ? 'New here? Create an account' : 'Already a member? Log In'}
        </p>
      </div>
    </div>
  );
};

export default AuthPage;





