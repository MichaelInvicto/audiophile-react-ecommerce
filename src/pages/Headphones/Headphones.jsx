import React, { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import PageId from '../../components/PageId/PageId';
import Product from '../../components/Product/Product';
import Items from '../../containers/Items/Items';
import Gear from '../../components/Gear/Gear';
import products from './data';


const Headphones = () => {

  const title = 'Headphones Shop | Audiophile'

  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div>
      <Navbar name='headphones' />
      <PageId name='headphones' />
      {products.map(product => (
          <Product 
          key={product.id}
          image={product.image}
          direction={product.direction}
          transform={product.transform}
          type={product.type}
          product_name={product.product_name}
          product_description={product.product_desciption}
          link={product.link}
          />
        ))}
      <Items />
      <Gear />
      <Footer name='headphones' />
    </div>
  )
}

export default Headphones