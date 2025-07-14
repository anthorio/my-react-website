import React, { useState } from 'react';
import '../../App.css';
import './Products.css';
import Footer from '../Footer';

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    // Electronics
    {
      id: 1,
      name: 'Professional Camera',
      category: 'electronics',
      price: 1299.99,
      rating: 4.8,
      image: '/images/img-1.jpg',
      description: 'High-quality DSLR camera for professional photography'
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      category: 'electronics',
      price: 299.99,
      rating: 4.6,
      image: '/images/img-2.jpg',
      description: 'Premium noise-canceling wireless headphones'
    },
    {
      id: 3,
      name: 'Smart Watch',
      category: 'electronics',
      price: 399.99,
      rating: 4.7,
      image: '/images/img-4.jpg',
      description: 'Feature-rich smartwatch with health monitoring'
    },
    {
      id: 4,
      name: 'Gaming Laptop',
      category: 'electronics',
      price: 1899.99,
      rating: 4.9,
      image: '/images/img-6.jpg',
      description: 'High-performance gaming laptop with RTX graphics'
    },
    {
      id: 5,
      name: 'Bluetooth Speaker',
      category: 'electronics',
      price: 149.99,
      rating: 4.5,
      image: '/images/img-7.jpg',
      description: 'Portable wireless speaker with deep bass'
    },
    {
      id: 6,
      name: 'Tablet Pro',
      category: 'electronics',
      price: 899.99,
      rating: 4.6,
      image: '/images/img-8.jpg',
      description: 'Professional tablet for creative work and productivity'
    },
    {
      id: 7,
      name: 'Wireless Mouse',
      category: 'electronics',
      price: 79.99,
      rating: 4.3,
      image: '/images/img-9.jpg',
      description: 'Ergonomic wireless mouse with precision tracking'
    },
    {
      id: 8,
      name: 'Smartphone Pro',
      category: 'electronics',
      price: 999.99,
      rating: 4.8,
      image: '/images/img-1.jpg',
      description: 'Latest flagship smartphone with advanced camera system'
    },
    
    // Fitness & Sports
    {
      id: 9,
      name: 'Fitness Tracker',
      category: 'fitness',
      price: 199.99,
      rating: 4.4,
      image: '/images/img-3.jpg',
      description: 'Advanced fitness tracker with heart rate monitoring'
    },
    {
      id: 10,
      name: 'Yoga Mat Premium',
      category: 'fitness',
      price: 89.99,
      rating: 4.5,
      image: '/images/img-5.jpg',
      description: 'Eco-friendly premium yoga mat for all practices'
    },
    {
      id: 11,
      name: 'Resistance Bands Set',
      category: 'fitness',
      price: 34.99,
      rating: 4.6,
      image: '/images/img-2.jpg',
      description: 'Complete set of resistance bands for strength training'
    },
    {
      id: 12,
      name: 'Adjustable Dumbbells',
      category: 'fitness',
      price: 299.99,
      rating: 4.7,
      image: '/images/img-4.jpg',
      description: 'Space-saving adjustable dumbbells for home workouts'
    },
    {
      id: 13,
      name: 'Exercise Bike',
      category: 'fitness',
      price: 599.99,
      rating: 4.3,
      image: '/images/img-6.jpg',
      description: 'Indoor cycling bike with digital display and programs'
    },
    {
      id: 14,
      name: 'Protein Powder',
      category: 'fitness',
      price: 49.99,
      rating: 4.5,
      image: '/images/img-7.jpg',
      description: 'High-quality whey protein powder for muscle building'
    },
    
    // Home & Garden
    {
      id: 15,
      name: 'Coffee Maker Pro',
      category: 'home',
      price: 249.99,
      rating: 4.6,
      image: '/images/img-8.jpg',
      description: 'Professional espresso machine for perfect coffee'
    },
    {
      id: 16,
      name: 'Air Purifier',
      category: 'home',
      price: 199.99,
      rating: 4.4,
      image: '/images/img-9.jpg',
      description: 'HEPA air purifier for clean and fresh indoor air'
    },
    {
      id: 17,
      name: 'Smart Thermostat',
      category: 'home',
      price: 179.99,
      rating: 4.7,
      image: '/images/img-1.jpg',
      description: 'WiFi-enabled smart thermostat with energy saving features'
    },
    {
      id: 18,
      name: 'Robot Vacuum',
      category: 'home',
      price: 399.99,
      rating: 4.5,
      image: '/images/img-2.jpg',
      description: 'Intelligent robot vacuum with mapping technology'
    },
    {
      id: 19,
      name: 'Garden Tool Set',
      category: 'home',
      price: 89.99,
      rating: 4.3,
      image: '/images/img-3.jpg',
      description: 'Complete gardening tool set with ergonomic handles'
    },
    {
      id: 20,
      name: 'LED Desk Lamp',
      category: 'home',
      price: 59.99,
      rating: 4.4,
      image: '/images/img-4.jpg',
      description: 'Adjustable LED desk lamp with wireless charging base'
    },
    
    // Fashion & Accessories
    {
      id: 21,
      name: 'Designer Sunglasses',
      category: 'fashion',
      price: 199.99,
      rating: 4.6,
      image: '/images/img-5.jpg',
      description: 'Premium designer sunglasses with UV protection'
    },
    {
      id: 22,
      name: 'Leather Wallet',
      category: 'fashion',
      price: 79.99,
      rating: 4.5,
      image: '/images/img-6.jpg',
      description: 'Genuine leather wallet with RFID blocking technology'
    },
    {
      id: 23,
      name: 'Sports Sneakers',
      category: 'fashion',
      price: 129.99,
      rating: 4.7,
      image: '/images/img-7.jpg',
      description: 'Comfortable sports sneakers for running and training'
    },
    {
      id: 24,
      name: 'Backpack Travel',
      category: 'fashion',
      price: 89.99,
      rating: 4.4,
      image: '/images/img-8.jpg',
      description: 'Durable travel backpack with multiple compartments'
    },
    {
      id: 25,
      name: 'Silk Scarf',
      category: 'fashion',
      price: 59.99,
      rating: 4.3,
      image: '/images/img-9.jpg',
      description: 'Elegant silk scarf with premium finishing'
    },
    
    // Books & Education
    {
      id: 26,
      name: 'Programming Guide',
      category: 'books',
      price: 39.99,
      rating: 4.8,
      image: '/images/img-1.jpg',
      description: 'Comprehensive guide to modern web development'
    },
    {
      id: 27,
      name: 'Business Strategy Book',
      category: 'books',
      price: 29.99,
      rating: 4.6,
      image: '/images/img-2.jpg',
      description: 'Essential strategies for business growth and success'
    },
    {
      id: 28,
      name: 'Design Thinking Manual',
      category: 'books',
      price: 34.99,
      rating: 4.5,
      image: '/images/img-3.jpg',
      description: 'Complete guide to design thinking methodology'
    },
    {
      id: 29,
      name: 'Digital Marketing Handbook',
      category: 'books',
      price: 44.99,
      rating: 4.7,
      image: '/images/img-4.jpg',
      description: 'Modern digital marketing strategies and techniques'
    },
    {
      id: 30,
      name: 'Leadership Essentials',
      category: 'books',
      price: 32.99,
      rating: 4.4,
      image: '/images/img-5.jpg',
      description: 'Essential leadership skills for the modern workplace'
    },
    
    // Automotive
    {
      id: 31,
      name: 'Car Phone Mount',
      category: 'automotive',
      price: 24.99,
      rating: 4.3,
      image: '/images/img-6.jpg',
      description: 'Universal magnetic phone mount for car dashboard'
    },
    {
      id: 32,
      name: 'Dash Camera',
      category: 'automotive',
      price: 149.99,
      rating: 4.5,
      image: '/images/img-7.jpg',
      description: 'HD dash camera with night vision and GPS tracking'
    },
    {
      id: 33,
      name: 'Car Charger',
      category: 'automotive',
      price: 19.99,
      rating: 4.2,
      image: '/images/img-8.jpg',
      description: 'Fast charging car adapter with dual USB ports'
    },
    {
      id: 34,
      name: 'Tire Pressure Monitor',
      category: 'automotive',
      price: 89.99,
      rating: 4.4,
      image: '/images/img-9.jpg',
      description: 'Wireless tire pressure monitoring system'
    },
    {
      id: 35,
      name: 'Car Emergency Kit',
      category: 'automotive',
      price: 59.99,
      rating: 4.6,
      image: '/images/img-1.jpg',
      description: 'Complete emergency kit for roadside assistance'
    }
  ];

  const categories = ['all', 'electronics', 'fitness', 'home', 'fashion', 'books', 'automotive'];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star full">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<span key={i} className="star empty">☆</span>);
    }
    return stars;
  };

  return (
    <>
      <div className='products-container'>
        <div className='products-header'>
          <h1>Our Products</h1>
          <p>Discover our premium collection of technology and fitness products</p>
        </div>

        <div className='products-filters'>
          <div className='search-bar'>
            <input
              type='text'
              placeholder='Search products...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='search-input'
            />
          </div>
          
          <div className='category-filters'>
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className='products-grid'>
          {filteredProducts.map(product => (
            <div key={product.id} className='product-card'>
              <div className='product-image'>
                <img src={product.image} alt={product.name} />
                <div className='product-overlay'>
                  <button className='quick-view-btn'>Quick View</button>
                </div>
              </div>
              <div className='product-info'>
                <h3>{product.name}</h3>
                <p className='product-description'>{product.description}</p>
                <div className='product-rating'>
                  {renderStars(product.rating)}
                  <span className='rating-number'>({product.rating})</span>
                </div>
                <div className='product-price'>
                  <span className='price'>${product.price}</span>
                  <button className='add-to-cart-btn'>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className='no-products'>
            <h3>No products found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Products;
