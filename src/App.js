import './App.css';
import { CartProvider } from './components/CartContext.js'
import React, {useState}  from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Bookings from './components/Bookings.js';
import Notification from './components/Notification';
import Profile from './components/Profile';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import Cart from './components/Cart.js';


function App() {
  const [notificationCount, setNotificationCount] = useState(0);

  const handleNotification = (count) => {
    setNotificationCount(count);
  };

  
  return (
    <CartProvider>
    <Router>
      <div className="app">
            <Header />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Bookings" element={<Bookings handleNotification={handleNotification} />} />
                <Route path="/Notification" element={<Notification />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="*" element={<Home />} /> {/* Catch-all route */}
              </Routes>
            </div>
            <Footer/>
       
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
