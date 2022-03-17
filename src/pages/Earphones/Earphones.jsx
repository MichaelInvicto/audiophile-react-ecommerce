import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PageId from '../../components/PageId/PageId';
import Items from '../../containers/Items/Items';
import Product from '../../components/Product/Product';
import Gear from '../../components/Gear/Gear';
import image from '../../assets/shared/desktop/image-yx1-wireless-earphone.jpg';

const Earphones = () => {

  const title = 'Earphones Shop | Audiophile'

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <Navbar name='earphones' />
      <PageId name='earphones' />
      <Product 
        image={image}
        direction='forward'
        transform='no'
        type="new product"
        product_name="YX1 Wireless Earphones"
        product_description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        link="/product/yx1-earphones"
      />
      <Items />
      <Gear />
      <Footer name='earphones' />
    </div>
  )
}

export default Earphones