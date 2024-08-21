import { NavLink} from 'react-router-dom';
import { HomeIcon, LocationIcon, BookIcon, BellIcon } from './icons/Myicon';
import './Footer.css';

const Footer = () => {
    const notificationCount = 0;
     return (
        <div className="footer">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}><HomeIcon />Home</NavLink>
        <NavLink to="/Bookings" className={({ isActive }) => isActive ? 'active' : ''}><BookIcon/>Bookings</NavLink>
        <NavLink to="/Notification" className={({ isActive }) => isActive ? 'active' : ''}><BellIcon notificationCount={notificationCount} />Notifiaction</NavLink>
        
        {/* Add a logout button or link */}
        {/* <button className="mono" onClick={handleLogout}>Logout</button>*/}
      </div>
    );
  };
  
  export default Footer;