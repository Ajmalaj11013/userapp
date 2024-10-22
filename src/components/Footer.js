import { NavLink} from 'react-router-dom';
import { HomeIcon, LocationIcon, BookIcon, BellIcon,CartIcon } from './icons/Myicon';
import './Footer.css';
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Footer = () => {
    
    const { countItems} = useContext(CartContext);
     return (
        <div className="footer">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}><HomeIcon />Home</NavLink>
        <NavLink to="/Bookings" className={({ isActive }) => isActive ? 'active' : ''}><BookIcon/>Bookings</NavLink>
        <NavLink to="/Notification" className={({ isActive }) => isActive ? 'active' : ''}><BellIcon/>Notifiaction</NavLink>
        <NavLink to="/Cart" className={({ isActive }) => isActive ? 'active' : ''}><CartIcon notificationCount={countItems()} />Cart</NavLink>
        
        {/* Add a logout button or link */}
        {/* <button className="mono" onClick={handleLogout}>Logout</button>*/}
      </div>
    );
  };
  
  export default Footer;