import React from 'react';
import { Button } from 'primereact/button';
import imgLogo from '../assets/images/logo.png';

const Homepage = () => {
  return (
    <div className="grid grid-nogutter surface-0 text-800 min-h-screen">
      {/* Hero Section */}
      <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center min-h-full">
        <section className="animate__animated animate__fadeInLeft animate__delay-1s">
          <span className="block text-6xl font-bold mb-1 animate__animated animate__fadeIn animate__delay-1s">Create the screens</span>
          <div className="text-6xl text-primary font-bold mb-3 animate__animated animate__fadeIn animate__delay-2s">your visitors deserve to see</div>
          <p className="mt-0 mb-4 text-700 line-height-3 animate__animated animate__fadeIn animate__delay-3s">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button label="Learn More" type="button" className="mr-3 p-button-raised animate__animated animate__fadeIn animate__delay-4s" />
          <Button label="About Us" type="button" className="p-button-outlined animate__animated animate__fadeIn animate__delay-4s" />
        </section>
      </div>
      <div className="col-12 md:col-6 overflow-hidden min-h-full">
        <img
          src={imgLogo}
          alt="hero-1"
          className="md:ml-auto block md:h-full animate__animated animate__zoomIn"
          style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)', height: '100vh', objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default Homepage;

