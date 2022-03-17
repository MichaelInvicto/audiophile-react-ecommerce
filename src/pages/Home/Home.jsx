import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Items from '../../containers/Items/Items';
import ZX9 from '../../components/ZX9/ZX9';
import ZX7 from '../../components/ZX7/ZX7';
import YX1 from '../../components/YX1/YX1';
import Gear from '../../components/Gear/Gear';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const title = 'Audiophile | Audio E-commerce';

  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div>
      <Navbar name='home' />
      <Hero />
      <Items />
      <ZX9 />
      <ZX7 />
      <YX1 />
      <Gear />
      <Footer name='home' />
    </div>
  )
}

export default Home