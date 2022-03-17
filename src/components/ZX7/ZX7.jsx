import React from 'react';
import './zx7.css';
import { Link } from 'react-router-dom';

const ZX7 = () => {
  return (
    <section className='zx7-speaker-section'>
        <div className="zx7-container">
            <div className="zx7-heading">
                <div>
                    <h2>zx7 speaker</h2>
                    <div className="zx7-link">
                        <Link to='/product/zx7-speaker'>see product</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ZX7