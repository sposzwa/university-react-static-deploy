import Browsers from './Browsers';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';
import React from 'react';

export default function App({ browsers }) {
  const navLinks = ['Home', 'About', 'Contact'];

  return (
    <div>
      <Navigation links={navLinks} />
      <main>
        <Header title={'Popular web browsers'} />
        <Browsers browsers={browsers} />
      </main>
      <Footer />
    </div>
  );
}
