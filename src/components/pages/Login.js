import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../App.css';
import './Login.css';
import Footer from '../Footer';

function Login() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock user data based on email (simple simulation)
      const mockUserData = {
        firstName: formData.email.split('@')[0].split('.')[0] || 'John',
        lastName: formData.email.split('@')[0].split('.')[1] || 'Doe',
        email: formData.email,
        company: 'Tech Solutions Inc.',
        role: 'Developer',
        interests: ['Web Development', 'Mobile Apps'],
        joinDate: new Date().toISOString(),
        isLoggedIn: true,
        loginTime: new Date().toISOString()
      };
      
      // Store user data and login state
      localStorage.setItem('userData', JSON.stringify(mockUserData));
      localStorage.setItem('isLoggedIn', 'true');
      
      // Redirect to dashboard
      history.push('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ general: 'Login failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignUpRedirect = () => {
    history.push('/sign-up');
  };

  return (
    <>
      <div className='login-container'>
        <div className='login-header'>
          <h1>Welcome Back</h1>
          <p>Sign in to your account to continue your journey</p>
        </div>

        <div className='login-content'>
          <div className='login-benefits'>
            <h3>Access Your Dashboard</h3>
            <div className='benefits-list'>
              <div className='benefit-item'>
                <span className='benefit-icon' role="img" aria-label="Chart">📊</span>
                <div>
                  <h4>Project Management</h4>
                  <p>Track your projects and monitor progress in real-time</p>
                </div>
              </div>
              <div className='benefit-item'>
                <span className='benefit-icon' role="img" aria-label="Bell">🔔</span>
                <div>
                  <h4>Notifications</h4>
                  <p>Stay updated with important alerts and messages</p>
                </div>
              </div>
              <div className='benefit-item'>
                <span className='benefit-icon' role="img" aria-label="Settings">⚙️</span>
                <div>
                  <h4>Settings & Profile</h4>
                  <p>Customize your experience and manage your preferences</p>
                </div>
              </div>
              <div className='benefit-item'>
                <span className='benefit-icon' role="img" aria-label="Analytics">📈</span>
                <div>
                  <h4>Analytics</h4>
                  <p>View detailed insights and performance metrics</p>
                </div>
              </div>
            </div>
          </div>

          <div className='login-form-container'>
            <form className='login-form' onSubmit={handleSubmit}>
              {errors.general && (
                <div className='error-banner'>
                  {errors.general}
                </div>
              )}

              <div className='form-group'>
                <label htmlFor='email'>Email Address</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'error' : ''}
                  placeholder='Enter your email address'
                  data-testid='login-email-input'
                />
                {errors.email && <span className='error-message' data-testid='login-email-error'>{errors.email}</span>}
              </div>

              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleInputChange}
                  className={errors.password ? 'error' : ''}
                  placeholder='Enter your password'
                  data-testid='login-password-input'
                />
                {errors.password && <span className='error-message' data-testid='login-password-error'>{errors.password}</span>}
              </div>

              <div className='form-row'>
                <label className='checkbox-label'>
                  <input
                    type='checkbox'
                    name='rememberMe'
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    data-testid='login-remember-checkbox'
                  /> 
                  Remember me
                </label>
                <button 
                  type='button'
                  className='link forgot-password' 
                  data-testid='forgot-password-link'
                  onClick={() => console.log('Forgot password clicked')}
                >
                  Forgot password?
                </button>
              </div>

              <button 
                type='submit' 
                className='submit-btn'
                disabled={isSubmitting}
                data-testid='login-submit-button'
              >
                {isSubmitting ? (
                  <span className='loading'>
                    <span className='spinner'></span>
                    Signing In...
                  </span>
                ) : (
                  'Sign In'
                )}
              </button>

              <div className='divider'>
                <span>or</span>
              </div>

              <div className='social-login'>
                <button type='button' className='social-btn google-btn' data-testid='google-login-button'>
                  <span role="img" aria-label="Link">🔗</span>
                  Continue with Google
                </button>
                <button type='button' className='social-btn github-btn' data-testid='github-login-button'>
                  <span role="img" aria-label="Link">🔗</span>
                  Continue with GitHub
                </button>
              </div>

              <div className='form-footer'>
                <p>
                  Don't have an account? 
                  <button 
                    type='button' 
                    className='link-btn'
                    onClick={handleSignUpRedirect}
                    data-testid='signup-redirect-button'
                  >
                    Create one here
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
