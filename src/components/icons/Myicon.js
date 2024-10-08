import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faHome, faHistory,faCheckCircle,faTrash, faEdit,faTimes,faCheck,faMapMarkerAlt, faBookOpen, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Icon.css';

export const BellIcon = ({ notificationCount }) => {
  return (
    <div className="icon-position">
      <FontAwesomeIcon icon={faBell} className="bell-icon" />
      {notificationCount > 0 && (
        <span className="notification-count">{notificationCount}</span>
      )}
    </div>
  );
};
export const HomeIcon = () => {
  return (
    <div className="icon-position">
      <FontAwesomeIcon icon={faHome} className="home-icon" />
    </div>
  );
};

export const LocationIcon = () => (
  <div className="icon-position">
    <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
  </div>
);

export const BookIcon = () => (
  <div className="icon-position">
    <FontAwesomeIcon icon={faBookOpen} className="available-icon" />
  </div>
);
export const DeleteIcon = () => (
  <div className="icon-position">
    <FontAwesomeIcon icon={faTrash} className="delete-icon" />
  </div>
);
export const EditIcon = () => (
  <div className="icon-position">
    <FontAwesomeIcon icon={faEdit} className="edit-icon" />
  </div>
);
export const CancelIcon = () => (
  <div className="icon-position">
    <FontAwesomeIcon icon={faTimes} className="cancel-icon" />
  </div>
);
export const SaveIcon = () => (
  <div className="icon-position">
    <FontAwesomeIcon icon={faCheck} className="save-icon" />
  </div>
);

export const CartIcon = () => (
  <div className="icon-position">
    <FontAwesomeIcon icon={faShoppingCart} className="save-icon" />
  </div>
);
