import React from 'react'
import './notfound.css'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const NotFound = () => {
  return (
    <div>
        <Navbar />
        <div className="not-found">
          <div className="the-404-container">
            <h1>404</h1>
          </div>
          <h2 className='oops-text'>oops! no such page exists</h2>
          <p>
            The page you're trying to look for either never existed or has been changed or removed.
          </p>
        </div>
        <Footer />
    </div>
  )
}

export default NotFound