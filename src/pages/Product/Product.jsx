import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Gear from '../../components/Gear/Gear'
import Navbar from '../../components/Navbar/Navbar'
import Items from '../../containers/Items/Items'
import NotFound from '../../components/NotFound/NotFound'
import ProductDetail from '../../containers/ProductDetail/ProductDetail'
import products from './products'

function valid_link(link) {

  var is_link_valid = false;
  var index;
  for (var i=0; i<products.length; i++) {
    if (link === products[i].slug) {
      is_link_valid = true;
      index = i;
      break;
    }
  }
  return [is_link_valid, index];
}


const Product = () => {

  // All the links available
  
  const {name} = useParams();
  const title = name + ' | Audiophile';
  
  useEffect(() => {
    document.title = title;
  }, [title]);
  
  // To find out if the link exists
  const valid_product = valid_link(name);
  // Remember that valid_product is a list that contains a boolean to tell us if the item exists and the index
  // Therefore products[valid_products[1]] is basically the product itself

  const the_product = products[valid_product[1]];

  return valid_product[0] ? (
    <>
      <Navbar />
      <ProductDetail product={the_product} />
      <Items />
      <Gear />
      <Footer />
    </>
  )
  : (
    <NotFound />
  )
}

export default Product