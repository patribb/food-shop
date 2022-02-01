import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

const EmptyCart = () => {
    const history = useHistory()
  return (
      <div className='emptyCart'>
      <img src='https://merchlist.co/assets/emptycart.png' alt="empty" />
      <button onClick={() => history.push('/')}>
          <i className="fas fa-long-arrow-alt-left"></i> Shop Now
      </button>
      </div>
  )
};

export default EmptyCart;
