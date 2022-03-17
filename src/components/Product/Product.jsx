import React from 'react';
import { Link } from 'react-router-dom';
import './product.css';


const Product = (props) => {
  return (
    <section className='product-section'>
        <div className={`product-container ${props.direction}`}>
            <div className="product-image-container">
                <div className="product-image">
                    <div className="product-image-main">
                        <img src={props.image} alt="product" />
                    </div>
                </div>
            </div>
            <div className="product-description-container">
                <div className={`product-description ${props.transform}`}>
                    <p className='product-new-product'>{props.type}</p>
                    <h2>{props.product_name}</h2>
                    <p className='product-main-description'>
                        {props.product_description}
                    </p>
                    <div className="product-button">
                        <Link to={props.link}>see product</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Product