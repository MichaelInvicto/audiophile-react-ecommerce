import React from 'react';
import './pageId.css';

const PageId = (props) => {
  return (
    <section className='page-id-section'>
        <h1 className='page-name'>{props.name}</h1>
    </section>
  )
}

export default PageId