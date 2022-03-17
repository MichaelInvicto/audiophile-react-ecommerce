import React from 'react'
import { Link } from 'react-router-dom';
import './hero.css';

const Hero = () => {
  return (
    <section className='hero-section'>
        <section className="hero-container">
            <div className="hero-text">
                <p className='hero-text-heading'>New product</p>
                <h1 className='hero-text-product-name'>xx99 mark ii headphones</h1>
                <p className='hero-text-description'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <div className="hero-button">
                    <button><Link to='/product/xx99-mark-two-headphones'>see product</Link></button>
                </div>
            </div>
            <div className="hero-image"></div>
        </section>
    </section>
  )
}

export default Hero