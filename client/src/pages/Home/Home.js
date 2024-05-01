// components/Home.js

import React from 'react';
import About from '../../components/about';
import Services from '../../components/services';
import Contact from '../../components/contact';

const Home = () => {
  return (
    <div className="page-wrap">
      <div className="md-content">
        <About />
        <Services />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
