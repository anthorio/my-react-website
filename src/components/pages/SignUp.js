import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../App.css';
import './SignUp.css';
import Footer from '../Footer';

function SignUp() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    role: '',
    interests: [],
    newsletter: false,
    terms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const interests = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'Digital Marketing',
    'Cloud Solutions',
    'Data Analytics',
    'E-commerce',
    'Consulting'
  ];

  const roles = [
    'CEO/Founder',
    'CTO/Technical Lead',
    'Product Manager',
    'Designer',
    'Developer',
    'Marketing Manager',
    'Business Owner',
    'Student',
    'Other'
  ];

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

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.role) {
      newErrors.role = 'Please select your role';
    }

    if (!formData.terms) {
      newErrors.terms = 'You must accept the terms and conditions';
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
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSuccess(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoToDashboard = () => {
    // Store user data in localStorage for the dashboard
    const userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      company: formData.company,
      role: formData.role,
      interests: formData.interests,
      joinDate: new Date().toISOString(),
      isLoggedIn: true,
      loginTime: new Date().toISOString()
    };
    
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('isLoggedIn', 'true');
    history.push('/dashboard');
  };

  const handleLoginRedirect = () => {
    history.push('/login');
  };

  if (isSuccess) {
    return (
      <div className='signup-container'>
        <div className='success-message'>
          <div className='success-icon'>
            <span role="img" aria-label="Success">✅</span>
          </div>
          <h2>Welcome aboard!</h2>
          <p>Your account has been created successfully. We've sent a confirmation email to {formData.email}</p>
          <div className='success-actions'>
            <button 
              className='signup-btn-primary'
              onClick={() => {
                setIsSuccess(false);
                setFormData({
                  firstName: '',
                  lastName: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
                  company: '',
                  role: '',
                  interests: [],
                  newsletter: false,
                  terms: false
                });
              }}
            >
              Create Another Account
            </button>
            <button className='signup-btn-secondary' onClick={handleGoToDashboard}>
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className='signup-container'>
        <div className='signup-header'>
          <h1>Join Our Community</h1>
          <p>Create your account and start your journey with us today</p>
          <div className='auth-switch'>
            <p>Already have an account? 
              <button 
                type='button' 
                className='auth-link-btn'
                onClick={handleLoginRedirect}
              >
                Sign in here
              </button>
            </p>
          </div>
        </div>          <div className='signup-content'>
          <div className='signup-benefits'>
            <h3>Why Join Us?</h3>
            <div className='benefits-list'>
              <div className='signup-benefit-item'>
                <span className='signup-benefit-icon' role="img" aria-label="Rocket">🚀</span>
                <div>
                  <h4>Fast Project Delivery</h4>
                  <p>Get your projects completed on time with our agile methodology</p>
                </div>
              </div>
              <div className='signup-benefit-item'>
                <span className='signup-benefit-icon' role="img" aria-label="Light bulb">💡</span>
                <div>
                  <h4>Expert Consultation</h4>
                  <p>Access to industry experts and personalized guidance</p>
                </div>
              </div>
              <div className='signup-benefit-item'>
                <span className='signup-benefit-icon' role="img" aria-label="Lock">🔒</span>
                <div>
                  <h4>Secure & Reliable</h4>
                  <p>Enterprise-grade security and 99.9% uptime guarantee</p>
                </div>
              </div>
              <div className='signup-benefit-item'>
                <span className='signup-benefit-icon' role="img" aria-label="Target">🎯</span>
                <div>
                  <h4>Tailored Solutions</h4>
                  <p>Custom solutions designed specifically for your business needs</p>
                </div>
              </div>
            </div>
          </div>

          <div className='signup-form-container'>
            <form className='signup-form' onSubmit={handleSubmit}>
              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor='firstName'>First Name *</label>
                  <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={errors.firstName ? 'error' : ''}
                    placeholder='Enter your first name'
                    data-testid='signup-firstname-input'
                  />
                  {errors.firstName && <span className='error-message' data-testid='signup-firstname-error'>{errors.firstName}</span>}
                </div>

                <div className='form-group'>
                  <label htmlFor='lastName'>Last Name *</label>
                  <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={errors.lastName ? 'error' : ''}
                    placeholder='Enter your last name'
                    data-testid='signup-lastname-input'
                  />
                  {errors.lastName && <span className='error-message' data-testid='signup-lastname-error'>{errors.lastName}</span>}
                </div>
              </div>

              <div className='form-group'>
                <label htmlFor='email'>Email Address *</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'error' : ''}
                  placeholder='Enter your email address'
                  data-testid='signup-email-input'
                />
                {errors.email && <span className='error-message' data-testid='signup-email-error'>{errors.email}</span>}
              </div>

              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor='password'>Password *</label>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    value={formData.password}
                    onChange={handleInputChange}
                    className={errors.password ? 'error' : ''}
                    placeholder='Create a password'
                    data-testid='signup-password-input'
                  />
                  {errors.password && <span className='error-message' data-testid='signup-password-error'>{errors.password}</span>}
                </div>

                <div className='form-group'>
                  <label htmlFor='confirmPassword'>Confirm Password *</label>
                  <input
                    type='password'
                    id='confirmPassword'
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={errors.confirmPassword ? 'error' : ''}
                    placeholder='Confirm your password'
                    data-testid='signup-confirm-password-input'
                  />
                  {errors.confirmPassword && <span className='error-message' data-testid='signup-confirm-password-error'>{errors.confirmPassword}</span>}
                </div>
              </div>

              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor='company'>Company</label>
                  <input
                    type='text'
                    id='company'
                    name='company'
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder='Your company name (optional)'
                    data-testid='signup-company-input'
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='role'>Role *</label>
                  <select
                    id='role'
                    name='role'
                    value={formData.role}
                    onChange={handleInputChange}
                    className={errors.role ? 'error' : ''}
                    data-testid='signup-role-select'
                  >
                    <option value=''>Select your role</option>
                    {roles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                  {errors.role && <span className='error-message' data-testid='signup-role-error'>{errors.role}</span>}
                </div>
              </div>

              <div className='form-group'>
                <label>Areas of Interest</label>
                <div className='signup-interests-grid'>
                  {interests.map(interest => (
                    <label key={interest} className='signup-interest-checkbox'>
                      <input
                        type='checkbox'
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                        data-testid={`signup-interest-${interest.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      />
                      <span className='signup-checkmark'></span>
                      {interest}
                    </label>
                  ))}
                </div>
              </div>

              <div className='form-group'>
                <label className='signup-checkbox-label'>
                  <input
                    type='checkbox'
                    name='newsletter'
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    data-testid='signup-newsletter-checkbox'
                  />
                  <span className='signup-checkmark'></span>
                  Subscribe to our newsletter for updates and tips
                </label>
              </div>

              <div className='form-group'>
                <label className='signup-checkbox-label'>
                  <input
                    type='checkbox'
                    name='terms'
                    checked={formData.terms}
                    onChange={handleInputChange}
                    data-testid='signup-terms-checkbox'
                  />
                  <span className='signup-checkmark'></span>
                  I agree to the <button type='button' className='signup-link' data-testid='signup-terms-link' onClick={() => console.log('Terms clicked')}>Terms of Service</button> and <button type='button' className='signup-link' data-testid='signup-privacy-link' onClick={() => console.log('Privacy clicked')}>Privacy Policy</button> *
                </label>
                {errors.terms && <span className='error-message' data-testid='signup-terms-error'>{errors.terms}</span>}
              </div>

              <button 
                type='submit' 
                className='signup-submit-btn'
                disabled={isSubmitting}
                data-testid='signup-submit-button'
              >
                {isSubmitting ? (
                  <span className='signup-loading'>
                    <span className='signup-spinner'></span>
                    Creating Account...
                  </span>
                ) : (
                  'Create Account'
                )}
              </button>

              <div className='form-footer'>
                <p>Already have an account? 
                  <button 
                    type='button' 
                    className='signup-link-btn'
                    onClick={handleLoginRedirect}
                    data-testid='signup-login-redirect-button'
                  >
                    Sign in here
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

export default SignUp;
