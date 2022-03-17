import React from 'react';
import Item from '../../components/Item/Item';
import items from './data.js';
import './items.css';

const Items = () => {
  return (
    <div className='container'>
        {items.map(item => (
            <Item
              key={item.id}
              image={item.image}
              name={item.name}
              link_to={item.link_to}
            />
          ))}
    </div>
  )
}

export default Items