import React, { useState } from 'react';
import Item from './Item';

function Items({ href, title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-item dropdown">
      <a href={href} className="nav-link dropdown-toggle" onClick={toggle}>
        {title}
      </a>
      <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default Items;
