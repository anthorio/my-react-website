import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
              data-testid='footer-email-input'
            />
            <Button buttonStyle='btn--outline' data-testid='footer-subscribe-button'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up' data-testid='footer-how-it-works'>How it works</Link>
            <Link to='/' data-testid='footer-testimonials'>Testimonials</Link>
            <Link to='/' data-testid='footer-careers'>Careers</Link>
            <Link to='/' data-testid='footer-investors'>Investors</Link>
            <Link to='/' data-testid='footer-terms'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/' data-testid='footer-contact'>Contact</Link>
            <Link to='/' data-testid='footer-support'>Support</Link>
            <Link to='/' data-testid='footer-destinations'>Destinations</Link>
            <Link to='/' data-testid='footer-sponsorships'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/' data-testid='footer-submit-video'>Submit Video</Link>
            <Link to='/' data-testid='footer-ambassadors'>Ambassadors</Link>
            <Link to='/' data-testid='footer-agency'>Agency</Link>
            <Link to='/' data-testid='footer-influencer'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/' data-testid='footer-instagram-link'>Instagram</Link>
            <Link to='/' data-testid='footer-facebook-link'>Facebook</Link>
            <Link to='/' data-testid='footer-youtube-link'>Youtube</Link>
            <Link to='/' data-testid='footer-twitter-link'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo' data-testid='footer-logo'>
              TRVL
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>TRVL © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
              data-testid='footer-social-facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
              data-testid='footer-social-instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
              data-testid='footer-social-youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
              data-testid='footer-social-twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
              data-testid='footer-social-linkedin'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
