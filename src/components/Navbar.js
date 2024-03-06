import React from 'react';
import classnames from 'classnames';

function Navbar({ className, children }) {
  return (
    <nav className={classnames('navbar', className)}>
      {children}
    </nav>
  );
}

export default Navbar;
