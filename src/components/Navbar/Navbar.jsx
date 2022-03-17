import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/shared/desktop/logo.svg';
import cart from '../../assets/shared/desktop/icon-cart.svg';
import './navbar.css';
import { CartContext } from '../../CartContext';
import Cart from '../../containers/Cart/Cart';

const Navbar = (props) => {

    const { pathname } = useLocation()

    const {value, button} = useContext(CartContext)
    const [the_value, setValue] = value
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
    }, [pathname])

    const [toggleMenu, setToggleMenu] = useState(false);
        return (
    <header>
        <div className='nav-items'>
            <div className="mobile-menu-btn">
                {toggleMenu ?
                    <button className='mobile-btn' onClick={() => setToggleMenu(false)}><i className='fas fa-times'></i></button>
                    : <button className='mobile-btn' onClick={() => setToggleMenu(true)}><i className='fas fa-bars'></i></button>
                }
                {
                    toggleMenu && (
                        <div className="mobile-menu-links scale-up-center">
                            <nav>
                                <ul>
                                    <li><Link className={props.name === 'home' ? 'active' : ''} to='/'>HOME</Link></li>
                                    <li><Link className={props.name === 'headphones' ? 'active' : ''} to='/headphones'>HEADPHONES</Link></li>
                                    <li><Link className={props.name === 'speakers' ? 'active' : ''} to='/speakers'>SPEAKERS</Link></li>
                                    <li><Link className={props.name === 'earphones' ? 'active' : ''} to='/earphones'>EARPHONES</Link></li>
                                </ul>
                            </nav>
                        </div>
                    )
                }
            </div>
            <div className="logo-container">
                <div className="logo-wrapper">
                    <Link to='/'>
                    <img src={logo} alt="logo" />
                    </Link>
                </div>
            </div>
            <div className="desktop-menu-links">
                <nav>
                    <ul>
                        <li><Link className={props.name === 'home' ? 'active' : ''} to='/'>HOME</Link></li>
                        <li><Link className={props.name === 'headphones' ? 'active' : ''} to='/headphones'>HEADPHONES</Link></li>
                        <li><Link className={props.name === 'speakers' ? 'active' : ''} to='/speakers'>SPEAKERS</Link></li>
                        <li><Link className={props.name === 'earphones' ? 'active' : ''} to='/earphones'>EARPHONES</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="cart" onClick={() => setIsOpen(true)}>
                {the_value > 0 && 
                    <div className="cart-quantity">
                        <p>{the_value}</p>
                    </div>
                }
                <img src={cart} alt="cart" />
            </div>
            {isOpen && <Cart setIsOpen={setIsOpen} isCheckout={false} />}
        </div>
    </header>
  )
}

export default Navbar