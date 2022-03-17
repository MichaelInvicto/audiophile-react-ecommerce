import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/shared/desktop/logo.svg';
import './footer.css';

const Footer = (props) => {
  return (
    <footer>
        <div className="footer-container">
            <div className="footer-decor">
                <div className="decor-line"></div>
            </div>
            <div className="footer-header">
                <div className="footer-logo-section">
                    <div className="footer-logo-container">
                        <Link to='/'>
                            <div className='footer-logo'>
                                <img src={logo} alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
                <nav className='footer-nav'>
                    <ul>
                    <li><Link className={props.name === 'home' ? 'active' : ''} to='/'>HOME</Link></li>
                    <li><Link className={props.name === 'headphones' ? 'active' : ''} to='/headphones'>HEADPHONES</Link></li>
                    <li><Link className={props.name === 'speakers' ? 'active' : ''} to='/speakers'>SPEAKERS</Link></li>
                    <li><Link className={props.name === 'earphones' ? 'active' : ''} to='/earphones'>EARPHONES</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="footer-body">
                <div className="footer-description">
                    <p>
                        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
                        and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
                        visit our demo facility - we're open 7 days a week.
                    </p>
                </div>
                <div className="footer-social-links">
                    <ul>
                        <li><a href="https://www.facebook.com"><i className='fab fa-facebook-square'></i></a></li>
                        <li><a href="https://www.twitter.com"><i className='fab fa-twitter-square'></i></a></li>
                        <li><a href="https://www.instagram.com"><i className='fab fa-instagram'></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-footer">
                <div className="footer-copyright">
                    <p>Copyright 2022. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer