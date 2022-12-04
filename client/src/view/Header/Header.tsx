import React from 'react'
import Navbar from './Navbar/Navbar';

const Header : React.FC = () => {
  return (
    <header className='app__header header'>
        <Navbar/>
    </header>
  )
}

export default Header;