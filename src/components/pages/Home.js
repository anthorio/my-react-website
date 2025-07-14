import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Testimonials from '../Testimonials';
import Newsletter from '../Newsletter';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
