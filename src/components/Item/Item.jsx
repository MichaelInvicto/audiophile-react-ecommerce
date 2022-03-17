import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';
import shadow from '../../assets/home/desktop/shadow.webp';

const Item = (props) => {
  return (
    <Link to={props.link_to}>
            <div className='item'>
            <div className="item-image">
                <div className="item-image-container">
                    <img src={props.image} alt="item" />
                </div>
            </div>
            <div className="item-shadow">
                <div className="shadow-container">
                    <img src={shadow} alt="" />
                </div>
            </div>
            <h3 className='item-name'>{props.name}</h3>
            <div className="item-link">
                <Link to={props.link_to}>shop <span><i className='fas fa-chevron-right'></i></span></Link>
            </div>
        </div>
    </Link>
    
  )
}

export default Item