import React, { useState, useEffect } from 'react';
import './Testimonials.css';

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Jennifer Walsh',
      company: 'TechStart Solutions',
      role: 'CEO',
      text: 'Working with this team has been absolutely transformative for our business. Their expertise in web development and digital strategy helped us increase our online presence by 300%. The attention to detail and commitment to delivering quality work is unmatched.',
      rating: 5,
      avatar: '/images/img-1.jpg'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      company: 'Global Innovations',
      role: 'CTO',
      text: 'The mobile app they developed for us has completely revolutionized how we connect with our customers. The user experience is seamless, and the technical implementation is robust. Our customer engagement increased by 250% within the first month.',
      rating: 5,
      avatar: '/images/img-2.jpg'
    },
    {
      id: 3,
      name: 'Sarah Chen',
      company: 'Creative Design Studio',
      role: 'Creative Director',
      text: 'Their UI/UX design work is simply outstanding. They took our vision and transformed it into something even better than we imagined. The new design increased our conversion rate by 180% and received incredible feedback from our users.',
      rating: 5,
      avatar: '/images/img-3.jpg'
    },
    {
      id: 4,
      name: 'David Thompson',
      company: 'E-commerce Plus',
      role: 'Marketing Director',
      text: 'The digital marketing strategy they implemented for us has been a game-changer. Our ROI improved by 400%, and we\'re now reaching audiences we never thought possible. Their data-driven approach and creativity make them invaluable partners.',
      rating: 5,
      avatar: '/images/img-4.jpg'
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      company: 'FinTech Innovations',
      role: 'Product Manager',
      text: 'Security and reliability were our top priorities, and they delivered beyond expectations. The cloud infrastructure they set up is scalable, secure, and has maintained 99.9% uptime. Their ongoing support has been exceptional.',
      rating: 5,
      avatar: '/images/img-5.jpg'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <div className='testimonials-section'>
      <div className='testimonials-container'>
        <div className='testimonials-header'>
          <h2>What Our Clients Say</h2>
          <p>Don't just take our word for it - hear from the businesses we've helped transform</p>
        </div>

        <div className='testimonials-carousel'>
          <button className='carousel-btn prev-btn' onClick={prevSlide} data-testid='testimonials-prev-button'>
            ‹
          </button>

          <div className='testimonials-track'>
            <div 
              className='testimonials-slides'
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className='testimonial-slide'>
                  <div className='testimonial-content'>
                    <div className='quote-icon'>"</div>
                    <p className='testimonial-text'>{testimonial.text}</p>
                    <div className='testimonial-rating'>
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <div className='testimonial-author'>
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className='author-avatar'
                    />
                    <div className='author-info'>
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                      <p className='company-name'>{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className='carousel-btn next-btn' onClick={nextSlide} data-testid='testimonials-next-button'>
            ›
          </button>
        </div>

        <div className='testimonials-dots'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              data-testid={`testimonials-dot-${index}`}
            />
          ))}
        </div>

        <div className='testimonials-stats'>
          <div className='stat-item'>
            <h3>500+</h3>
            <p>Happy Clients</p>
          </div>
          <div className='stat-item'>
            <h3>1000+</h3>
            <p>Projects Completed</p>
          </div>
          <div className='stat-item'>
            <h3>99.9%</h3>
            <p>Client Satisfaction</p>
          </div>
          <div className='stat-item'>
            <h3>24/7</h3>
            <p>Support Available</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
