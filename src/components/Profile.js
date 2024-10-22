import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  // Example user data (could be fetched from an API)
  const [user, setUser] = useState({
    name: "AJMAL M",
    email: "ajmalmnk@example.com",
    profilePicture: "https://via.placeholder.com/150", // Placeholder image
    phoneNumber: "9045671234",
    address: "123 Main St, abcd",
    loyaltyPoints:100,
    points: 350,       // Example points
    tier: "Gold",      // Membership tier
    nextTierPoints: 500,
    
  });

  const progress = (user.points / user.nextTierPoints) * 100;
   
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={user.profilePicture} alt="Profile" className="profile-picture" />
        <h2>{user.name}</h2>
        <p className="profile-email">{user.email}</p>
        <p className="profile-phone">{user.phoneNumber}</p>
      </div>

      <div className="profile-details">
        <h3>Address</h3>
        <p>{user.address}</p>
      </div>

      <div className="profile-actions">
        <button className="profile-button">Edit Profile</button>
        <button className="profile-button">View Rental History</button>
        <button className="profile-button">Settings</button>
      </div>
      <div className="loyalty-field">
      <div className="loyalty-header">
        <h2>Loyalty Program</h2>
        <p className="loyalty-tier">{user.tier} Member</p>
      </div>
      
      <div className="loyalty-details">
        <p className="loyalty-points">
          Points: <strong>{user.points}</strong>
        </p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <button className="redeem-button">Redeem Points</button>
      </div>
    </div>
    </div>
  );
};

export default Profile;
