import React from 'react';

function Item({ href, children }) {
  return (
    <a href={href} className="nav-item nav-link">{children}</a>
  );
}

export default Item;
