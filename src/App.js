import React from 'react';
import Navbar from './components/Navbar';
import Collapse from './components/Collapse';
import Logo from './components/Logo';
import Item from './components/Item';
import Items from './components/Items';
import classnames from 'classnames';
import './App.css'; 

function App() {
  return (
    <div className='main_container'>
      <Navbar className={classnames('navbar-light', 'bg-white')}>
        <Logo href="/">Logo</Logo>
        <Collapse>
          <Item href={'#home'}>Home</Item>
          <Items href={'#articles'} title="Articles">
            <Items href={'#power-plant'} title="Power plant">
              <Item href={'#turbine'}>Turbine</Item>
            </Items>
          </Items>
          <Items href={'#about'} title="About">
            <Item href={'#introduction'}>Introduction</Item>
          </Items>
          <Item href={'#pricing'}>Pricing</Item>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default App;

