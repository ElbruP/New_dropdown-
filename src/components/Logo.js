import React from 'react';

function Logo({ href, children }) {
  return (
    <a href={href} className="navbar-brand">{children}</a>
  );
}

export default Logo;
