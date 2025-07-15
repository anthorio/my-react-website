import React, { useState } from 'react';
import './Newsletter.css';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    {
      icon: '📧',
      title: 'Weekly Insights',
      description: 'Get the latest industry trends and tips delivered to your inbox'
    },
    {
      icon: '🎯',
      title: 'Exclusive Content',
      description: 'Access to premium resources and case studies'
    },
    {
      icon: '🚀',
      title: 'Early Access',
      description: 'Be the first to know about new services and special offers'
    },
    {
      icon: '💡',
      title: 'Expert Tips',
      description: 'Practical advice from industry professionals'
    }
  ];

  if (isSubscribed) {
    return (
      <div className='newsletter-section'>
        <div className='newsletter-container'>
          <div className='newsletter-success'>
            <div className='success-animation'>
              <div className='checkmark'>✓</div>
            </div>
            <h2>Welcome to our community!</h2>
            <p>Thank you for subscribing! You'll receive your first newsletter within the next few days.</p>
            <div className='social-follow'>
              <p>Follow us on social media for daily updates:</p>
              <div className='social-links'>
                <button type='button' className='social-link' data-testid='newsletter-social-facebook' onClick={() => console.log('Facebook clicked')}>
                  <span role="img" aria-label="Facebook">📘</span> Facebook
                </button>
                <button type='button' className='social-link' data-testid='newsletter-social-twitter' onClick={() => console.log('Twitter clicked')}>
                  <span role="img" aria-label="Twitter">🐦</span> Twitter
                </button>
                <button type='button' className='social-link' data-testid='newsletter-social-linkedin' onClick={() => console.log('LinkedIn clicked')}>
                  <span role="img" aria-label="LinkedIn">💼</span> LinkedIn
                </button>
                <button type='button' className='social-link' data-testid='newsletter-social-instagram' onClick={() => console.log('Instagram clicked')}>
                  <span role="img" aria-label="Instagram">📷</span> Instagram
                </button>
              </div>
            </div>
            <button 
              className='reset-btn'
              onClick={() => {
                setIsSubscribed(false);
                setEmail('');
              }}
              data-testid='newsletter-subscribe-another-button'
            >
              Subscribe Another Email
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='newsletter-section'>
      <div className='newsletter-container'>
        <div className='newsletter-content'>
          <div className='newsletter-info'>
            <h2>Stay Updated with Our Newsletter</h2>
            <p>Join over 10,000 professionals who get the latest insights on web development, design trends, and digital marketing strategies.</p>
            
            <div className='newsletter-benefits'>
              {benefits.map((benefit, index) => (
                <div key={index} className='benefit-item'>
                  <span className='benefit-icon'>{benefit.icon}</span>
                  <div className='benefit-content'>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='newsletter-form-container'>
            <div className='newsletter-form-header'>
              <h3>Subscribe Now</h3>
              <p>Get weekly insights delivered to your inbox</p>
            </div>

            <form className='newsletter-form' onSubmit={handleSubmit}>
              <div className='form-group'>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email address'
                  className={error ? 'error' : ''}
                  disabled={isLoading}
                  data-testid='newsletter-email-input'
                />
                <button 
                  type='submit' 
                  className='subscribe-btn'
                  disabled={isLoading}
                  data-testid='newsletter-subscribe-button'
                >
                  {isLoading ? (
                    <span className='loading'>
                      <span className='spinner'></span>
                      Subscribing...
                    </span>
                  ) : (
                    'Subscribe Free'
                  )}
                </button>
              </div>
              {error && <span className='error-message' data-testid='newsletter-error-message'>{error}</span>}
            </form>

            <div className='newsletter-features'>
              <div className='feature'>
                <span className='feature-icon'>✓</span>
                <span>No spam, unsubscribe anytime</span>
              </div>
              <div className='feature'>
                <span className='feature-icon'>✓</span>
                <span>Weekly updates only</span>
              </div>
              <div className='feature'>
                <span className='feature-icon'>✓</span>
                <span>Premium content included</span>
              </div>
            </div>

            <div className='newsletter-stats'>
              <div className='stat'>
                <strong>10,000+</strong>
                <span>Subscribers</span>
              </div>
              <div className='stat'>
                <strong>4.9/5</strong>
                <span>Rating</span>
              </div>
              <div className='stat'>
                <strong>Weekly</strong>
                <span>Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
