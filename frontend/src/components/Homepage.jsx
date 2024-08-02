// import React from 'react';
// import { Button } from 'primereact/button';
// import imgLogo from '../assets/images/logo.png';

// const Homepage = () => {
//   return (
//     <div className="grid grid-nogutter surface-0 text-800 min-h-screen">
//       {/* Hero Section */}
//       <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center min-h-full">
//         <section className="animate__animated animate__fadeInLeft animate__delay-1s">
//           <span className="block text-6xl font-bold mb-1 animate__animated animate__fadeIn animate__delay-1s">Create the screens</span>
//           <div className="text-6xl text-primary font-bold mb-3 animate__animated animate__fadeIn animate__delay-2s">your visitors deserve to see</div>
//           <p className="mt-0 mb-4 text-700 line-height-3 animate__animated animate__fadeIn animate__delay-3s">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//           <Button label="Learn More" type="button" className="mr-3 p-button-raised animate__animated animate__fadeIn animate__delay-4s" />
//           <Button label="About Us" type="button" className="p-button-outlined animate__animated animate__fadeIn animate__delay-4s" />
//         </section>
//       </div>
//       <div className="col-12 md:col-6 overflow-hidden min-h-full">
//         <img
//           src={imgLogo}
//           alt="hero-1"
//           className="md:ml-auto block md:h-full animate__animated animate__zoomIn"
//           style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)', height: '100vh', objectFit: 'cover' }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Homepage;


import React from 'react';
import { Button } from 'primereact/button';
import imgLogo from '../assets/images/logo.png';
import Footer from "./Footer";
import Technologies from "./Technologies";
import ContactUs from "./ContactUs";
import Social from './Social';
import Services from './Services';

const Homepage = () => {
  return (
    <div className="grid grid-nogutter surface-0 text-800 min-h-screen">
      {/* Hero Section */}
      <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center min-h-full shadow-lg">
        <section id="hero" className="animate__animated animate__fadeInLeft animate__delay-1s">
          <span className="block text-6xl font-bold mb-1 animate__animated animate__fadeIn animate__delay-1s">Create the screens</span>
          <div className="text-6xl text-primary font-bold mb-3 animate__animated animate__fadeIn animate__delay-2s">your visitors deserve to see</div>
          <p className="mt-0 mb-4 text-700 line-height-3 animate__animated animate__fadeIn animate__delay-3s">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button label="Learn More" type="button" className="mr-3 p-button-raised animate__animated animate__fadeIn animate__delay-4s" />
          <Button label="About Us" type="button" className="p-button-outlined animate__animated animate__fadeIn animate__delay-4s" />
        </section>
      </div>
      <div className="col-12 md:col-6 overflow-hidden min-h-full shadow-lg">
        <img
          src={imgLogo}
          alt="hero-1"
          className="md:ml-auto block md:h-full animate__animated animate__zoomIn"
          style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)', height: '100vh', objectFit: 'cover' }}
        />
      </div>
      {/* Technologies Section */}
      <div id="technologies" className="col-12 p-6 mt-4 shadow-lg border border-gray-300">
        <Technologies />
      </div>
      {/* Contact Us Section */}
      <div id="contact" className="col-12 p-6 mt-4 shadow-lg border border-gray-300">
        <ContactUs />
      </div>
      {/* Services Section */}
      <div id="services" className="col-12 p-6 mt-4 shadow-lg border border-gray-300">
        <Services />
      </div>
      {/* Footer Section */}
      <div id="footer" className="col-12 p-6 mt-4 shadow-lg border border-gray-300">
        <Footer />
      </div>
      {/* Social Section */}
      <div id="socials" className="col-12 p-6 mt-4 shadow-lg border border-gray-300">
        <Social />
      </div>
    </div>
  );
};

export default Homepage;



