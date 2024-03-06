import React from 'react';

function Collapse({ isOpen, toggle, children }) {
  return (
    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
      {children}
    </div>
  );
}

export default Collapse;
