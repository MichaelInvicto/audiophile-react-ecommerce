import React from 'react';
import './yx1.css';
import { Link } from 'react-router-dom'

const YX1 = () => {
  return (
    <section className="yx1-section">
        <div className="yx1-container">
            <div className="yx1-image"></div>
            <div className="yx1-text-container">
                <div className="yx1-text">
                    <h2>yx1 earphones</h2>
                    <div className="yx1-link">
                        <Link to='/product/yx1-earphones'>see product</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default YX1