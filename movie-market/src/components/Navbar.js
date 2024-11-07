import { useState } from 'react';
import logo from "../assests/logo.png";
import './Navbar.css';

const Nav = () => {
  const [activeItem, setActiveItem] = useState('Home'); 
  const handleMenuClick = (item) => {
    setActiveItem(item); 
  };


  return (
    <div className="nav-container">
      <div>
        <img src={logo}  className="nav-logo" alt='Hotel Logo'/>
      </div>
      <ul>
        <li
          className={activeItem === 'Home' ? 'active' : ''}
          onClick={() => handleMenuClick('Home')}
        >
          Home
        </li>
        <li
          className={activeItem === 'About' ? 'active' : ''}
          onClick={() =>{

           handleMenuClick('About')}}
        >
          About
        </li>
        <li
          className={activeItem === 'Services' ? 'active' : ''}
          onClick={() =>{

           handleMenuClick('Services')}}
        >
          Services
        </li>
        <li
          className={activeItem === 'Contact' ? 'active' : ''}
          onClick={() =>{

           handleMenuClick('Contact')}}
        >
          Contact
        </li>
        <li
          className={activeItem === 'UserProfile' ? 'active' : ''}
          onClick={() =>{ 
     
            handleMenuClick('UserProfile')}}
        >
          UserProfile
        </li>
        <li
          className={activeItem === '/' ? 'active' : ''}
          onClick={() =>{
      
            handleMenuClick('/')}}

        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Nav;
