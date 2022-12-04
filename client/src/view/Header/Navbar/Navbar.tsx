import React from 'react';
import './Navbar.scss';

type Props = {}

const Navbar: React.FC = (props: Props) => {
  return (
    <div className="header__container">
      <div className="header__navbar navbar">
        <div className="navbar__container">    
          <ul className="navbar__list">
            <li className="navbar__item"> 
              <a href="/" className="navbar__logo-link">
                <img className='navbar__logo' src="/svg/Group 1.svg" alt="logo" />
              </a>
            </li>
            <li className="navbar__item navbar__item_desktop"> 
              <a href="/" className="navbar__link">+7 (495) 495-49-54</a>
            </li>
            <li className='navbar__tel'>
              <a href="/" className="navbar__tel-link">
                <img src="/svg/Group.svg" alt="123" className='navbar__tel-image' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar