import React from 'react';
import './zx9.css';
import zx9 from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import { Link } from 'react-router-dom';

const ZX9 = () => {
  return (
    <section className='zx9-section'>
        <div className="zx9-container">
            <div className="zx9-image-section">
                <div className="zx9-image-container">
                    <img src={zx9} alt="zx9 speaker" />
                </div>
            </div>
            <div className="zx9-description">
                <div className="zx9-description-body">
                    <h2>zx9 speaker</h2>
                    <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <div className="zx9-speaker-link">
                        <Link to='/product/zx9-speaker'>see product</Link>
                    </div>
                </div> 
            </div>
        </div>
    </section>
  )
}

export default ZX9