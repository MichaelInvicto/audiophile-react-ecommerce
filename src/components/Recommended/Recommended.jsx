import React from 'react';
import { Link } from 'react-router-dom';
import './recommended.css';

const Recommended = (props) => {
  return (
    <section className='recommended-section'>
    <div className="may-like">
      <h2>you may also like</h2>
    </div>
    <div className="recommended-products-container">
       <div className='recommended-product'>
          <div className="recommended-product-image-container">
              <div className="recommended-product-image">
                <img src={require(`../../assets/${props.recommended[0].image.desktop}`)} alt="" />
              </div>
          </div>
          <h3 className="recommended-product-name">{props.recommended[0].name}</h3>
          <div className="recommended-product-link">
            <Link to={props.recommended[0].link}>see product</Link>
          </div>
       </div>
       <div className='recommended-product'>
          <div className="recommended-product-image-container">
              <div className="recommended-product-image">
                <img src={require(`../../assets/${props.recommended[1].image.desktop}`)} alt="" />
              </div>
          </div>
          <h3 className="recommended-product-name">{props.recommended[1].name}</h3>
          <div className="recommended-product-link">
            <Link to={props.recommended[1].link}>see product</Link>
          </div>
       </div>
       <div className='recommended-product'>
          <div className="recommended-product-image-container">
              <div className="recommended-product-image">
                <img src={require(`../../assets/${props.recommended[2].image.desktop}`)} alt="mark 2 headphones" />
              </div>
          </div>
          <h3 className="recommended-product-name">{props.recommended[2].name}</h3>
          <div className="recommended-product-link">
            <Link to={props.recommended[2].link}>see product</Link>
          </div>
       </div>
    </div>
    </section>
  )
}

export default Recommended