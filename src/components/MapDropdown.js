import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const items = [
  "Kasaragod",
  "Kanuur",
  "Wayanad",
  "Kozhikode",
  "Malappuram",
  "Ernakulam",
  "Thrissur",
  "Trivandrum",

  // Add more items here...
];

const MapDropdown = () => {
  const [selectedItem, setSelectedItem] = useState(null);  
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  return (
    <div style={{ position: 'relative', display: 'inline-block', width:'70px' }}>
      <FontAwesomeIcon icon={faMapMarkerAlt} onClick={toggleDropdown} style={{ cursor: 'pointer'}} />
      {selectedItem && (
                <div style={{ marginTop:'8px',fontSize:'12px',color:'#333'}}>
                    {selectedItem}
                </div>
            )}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '30px',
          left: -120,
          width: '200px',
          background: 'white',
          border: '1px solid #ccc',
          borderRadius: '4px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          zIndex: 1000,
          padding: '10px'
        }}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '5px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          />
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {filteredItems.map((item, index) => (
              <li
                key={index}
                style={{
                  padding: '5px 0',
                  borderBottom: '1px solid #eee',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  setSelectedItem(item);
                  setIsOpen(false); // Close dropdown on selection
                }}
              >
                {item}
              </li>
            ))}
            {filteredItems.length === 0 && (
              <li style={{ padding: '5px 0', color: '#999' }}>No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MapDropdown;
