import React from 'react';
import './gear.css';
import gear_image_desktop from '../../assets/shared/desktop/image-best-gear.jpg';
import gear_image_tablet from '../../assets/shared/tablet/image-best-gear.jpg';
import gear_image_mobile from '../../assets/shared/mobile/image-best-gear.jpg';



const Gear = () => {
  return (
    <section className="gear-section">
        <div className="gear-container">
            <div className="gear-description">
                <div className="gear-text">
                    <h2>bringing you the <span>best</span> audio gear</h2>
                    <p>
                        Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
                        earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
                        rooms available for you to browse and experience a wide range of our products. Stop by our 
                        store to meet some of the fantastic people who make Audiophile the best place to buy your 
                        portable audio equipment.
                    </p>
                </div>
            </div>
            <div className="gear-image">
                <div className="gear-image-container">
                    <img className='gear-image-desktop' src={gear_image_desktop} alt="gear" />
                    <img className='gear-image-tablet' src={gear_image_tablet} alt="gear" />
                    <img className='gear-image-mobile' src={gear_image_mobile} alt="gear" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Gear