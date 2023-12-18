import React from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css'
const Dropdown = ({ items }) => {
  return (
    <div className="dropdown">
      <ul className="dropdown-menu">
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/${item.label.toLowerCase()}`} className="dropdown-link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
