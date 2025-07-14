import React, { useState } from 'react';
import '../../App.css';
import './Services.css';
import Footer from '../Footer';

function Services() {
  const [activeService, setActiveService] = useState(null);
  const [showQuotePopup, setShowQuotePopup] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState(''); // 'success' or 'info'

  const services = [
    {
      id: 1,
      title: 'Web Development',
      icon: '🌐',
      price: 'Starting at $2,999',
      description: 'Custom web applications built with modern technologies',
      features: [
        'Responsive Design',
        'SEO Optimization',
        'Performance Optimization',
        'Cross-browser Compatibility',
        'Content Management System',
        '6 months support'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS']
    },
    {
      id: 2,
      title: 'Mobile App Development',
      icon: '📱',
      price: 'Starting at $4,999',
      description: 'Native and cross-platform mobile applications',
      features: [
        'iOS & Android Apps',
        'Push Notifications',
        'Offline Functionality',
        'App Store Optimization',
        'Analytics Integration',
        '1 year support'
      ],
      technologies: ['React Native', 'Flutter', 'Firebase', 'Redux']
    },
    {
      id: 3,
      title: 'UI/UX Design',
      icon: '🎨',
      price: 'Starting at $1,999',
      description: 'Beautiful and intuitive user interface designs',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Visual Design',
        'Usability Testing',
        'Design System Creation'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision']
    },
    {
      id: 4,
      title: 'Digital Marketing',
      icon: '📈',
      price: 'Starting at $1,499/month',
      description: 'Comprehensive digital marketing strategies',
      features: [
        'SEO & SEM',
        'Social Media Marketing',
        'Content Strategy',
        'Email Marketing',
        'Analytics & Reporting',
        'Brand Development'
      ],
      technologies: ['Google Ads', 'Facebook Ads', 'Analytics', 'Mailchimp']
    },
    {
      id: 5,
      title: 'Cloud Solutions',
      icon: '☁️',
      price: 'Starting at $999/month',
      description: 'Scalable cloud infrastructure and DevOps',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'CI/CD Pipelines',
        'Monitoring & Logging',
        'Security Implementation',
        '24/7 Support'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      id: 6,
      title: 'Data Analytics',
      icon: '📊',
      price: 'Starting at $3,499',
      description: 'Transform your data into actionable insights',
      features: [
        'Data Visualization',
        'Business Intelligence',
        'Predictive Analytics',
        'Real-time Dashboards',
        'Data Pipeline Setup',
        'Training & Documentation'
      ],
      technologies: ['Python', 'Tableau', 'Power BI', 'Apache Spark']
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      text: 'Exceptional service! They delivered our web application ahead of schedule and exceeded our expectations.',
      rating: 5,
      avatar: '/images/img-7.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Global Solutions',
      text: 'The mobile app they built for us has significantly improved our customer engagement.',
      rating: 5,
      avatar: '/images/img-8.jpg'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'Creative Agency',
      text: 'Outstanding UI/UX design work. Our conversion rates increased by 40% after the redesign.',
      rating: 5,
      avatar: '/images/img-9.jpg'
    }
  ];

  const toggleService = (serviceId) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  const handleGetQuote = (service) => {
    setSelectedService(service);
    setShowQuotePopup(true);
  };

  const handleAcceptQuote = () => {
    setShowQuotePopup(false);
    setToastMessage(`Quote request sent for ${selectedService.title}! We'll contact you soon.`);
    setToastType('success');
    setShowToast(true);
    
    // Auto-hide toast after 4 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  const handleCancelQuote = () => {
    setShowQuotePopup(false);
    setToastMessage('Quote request cancelled.');
    setToastType('info');
    setShowToast(true);
    
    // Auto-hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const closePopup = () => {
    setShowQuotePopup(false);
    setSelectedService(null);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <>
      <div className='services-container'>
        <div className='services-header'>
          <h1>Our Services</h1>
          <p>Comprehensive digital solutions to help your business grow and succeed in the modern world</p>
        </div>

        <div className='services-grid'>
          {services.map(service => (
            <div key={service.id} className='service-card'>
              <div className='service-icon'>{service.icon}</div>
              <h3>{service.title}</h3>
              <p className='service-description'>{service.description}</p>
              <div className='service-price'>{service.price}</div>
              
              <button 
                className='service-toggle-btn'
                onClick={() => toggleService(service.id)}
              >
                {activeService === service.id ? 'Hide Details' : 'View Details'}
              </button>

              {activeService === service.id && (
                <div className='service-details'>
                  <h4>What's Included:</h4>
                  <ul className='service-features'>
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <h4>Technologies:</h4>
                  <div className='service-technologies'>
                    {service.technologies.map((tech, index) => (
                      <span key={index} className='tech-tag'>{tech}</span>
                    ))}
                  </div>
                  <button 
                    className='get-quote-btn'
                    onClick={() => handleGetQuote(service)}
                  >
                    Get Quote
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className='process-section'>
          <h2>Our Process</h2>
          <div className='process-steps'>
            <div className='process-step'>
              <div className='step-number'>1</div>
              <h3>Discovery</h3>
              <p>We understand your business needs and project requirements</p>
            </div>
            <div className='process-step'>
              <div className='step-number'>2</div>
              <h3>Planning</h3>
              <p>We create a detailed project plan and timeline</p>
            </div>
            <div className='process-step'>
              <div className='step-number'>3</div>
              <h3>Development</h3>
              <p>We build your solution using best practices and modern technologies</p>
            </div>
            <div className='process-step'>
              <div className='step-number'>4</div>
              <h3>Launch</h3>
              <p>We deploy your solution and provide ongoing support</p>
            </div>
          </div>
        </div>

        <div className='testimonials-section'>
          <h2>What Our Clients Say</h2>
          <div className='testimonials-grid'>
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className='testimonial-card'>
                <div className='testimonial-header'>
                  <img src={testimonial.avatar} alt={testimonial.name} className='testimonial-avatar' />
                  <div className='testimonial-info'>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.company}</p>
                    <div className='testimonial-rating'>
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className='testimonial-text'>"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>

        <div className='cta-section'>
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how we can help bring your vision to life</p>
          <div className='cta-buttons'>
            <button className='cta-primary'>Get Free Consultation</button>
            <button className='cta-secondary'>View Portfolio</button>
          </div>
        </div>

        {/* Quote Popup */}
        {showQuotePopup && (
          <div className='popup-overlay' onClick={closePopup}>
            <div className='popup-content' onClick={(e) => e.stopPropagation()}>
              <button className='popup-close' onClick={closePopup}>×</button>
              <div className='popup-header'>
                <div className='popup-icon'>{selectedService?.icon}</div>
                <h3>Request Quote</h3>
              </div>
              <div className='popup-body'>
                <h4>{selectedService?.title}</h4>
                <p className='popup-description'>{selectedService?.description}</p>
                <div className='popup-price'>
                  <strong>{selectedService?.price}</strong>
                </div>
                <p className='popup-question'>
                  Would you like to request a detailed quote for this service? 
                  Our team will contact you within 24 hours with a personalized proposal.
                </p>
                <div className='popup-features'>
                  <h5>What's included:</h5>
                  <ul>
                    {selectedService?.features.slice(0, 3).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                    {selectedService?.features.length > 3 && (
                      <li>+ {selectedService.features.length - 3} more features</li>
                    )}
                  </ul>
                </div>
              </div>
              <div className='popup-actions'>
                <button className='popup-btn popup-btn-accept' onClick={handleAcceptQuote}>
                  Yes, Send Quote Request
                </button>
                <button className='popup-btn popup-btn-cancel' onClick={handleCancelQuote}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Toast Notification */}
        {showToast && (
          <div className={`toast-notification toast-${toastType}`}>
            <div className='toast-content'>
              <span className='toast-icon'>
                {toastType === 'success' ? '✅' : 'ℹ️'}
              </span>
              <span className='toast-message'>{toastMessage}</span>
              <button className='toast-close' onClick={() => setShowToast(false)}>×</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Services;
