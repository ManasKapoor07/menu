import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

import './Navbar.css';

function Navbar({ onSearch }) {
  const [click, setClick] = useState(false);
  const [query, setQuery] = useState('');
  const [menuItems, setMenuItems] = useState([]);
  const [moreItems, setMoreItems] = useState([]);
  const [dropdown, setDropdown] = useState(false);

  const closeMobView = () => {
    setClick(false);
    setDropdown(false);
  };

  const handleClick = () => {
    setClick(!click);
    setDropdown(false);
  };

  const handleDropdownClick = () => {
    setDropdown(!dropdown);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    // Pass the search query to the parent component
    onSearch(query);
  };

  useEffect(() => {
    const items = [
      { id: 1, label: 'Home' },
      { id: 2, label: 'Electronics' },
      { id: 3, label: 'Books' },
      { id: 4, label: 'Music' },
      { id: 5, label: 'Clothing' },
      { id: 6, label: 'Games' },
      { id: 7, label: 'Furniture' },
      { id: 8, label: 'Botanical' },
    ];

    const calculateMenuItems = () => {
      const menuItemWidth = 175;
      const availableWidth = window.innerWidth - 175; 

      const visibleItemsCount = Math.floor(availableWidth / menuItemWidth);
      const itemsToShow = items.slice(0, visibleItemsCount);
      const itemsToHide = items.slice(visibleItemsCount);

      setMenuItems(itemsToShow);
      setMoreItems(itemsToHide);
    };

    calculateMenuItems();

    const handleResize = () => {
      calculateMenuItems();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <nav className='navbar'>
      <Link to='/' className='navbar-logo'>
          <img src='images/Intersect.png' alt='logo' className='logo-img'></img>
          E-COMM
        </Link>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {menuItems.map((item) => (
            <li key={item.id} className='nav-item'>
              <Link to={`/${item.label.toLowerCase()}`} className='nav-links' onClick={closeMobView}>
                {item.label}
              </Link>
            </li>
          ))}

          {moreItems.length > 0 && (
            <li className='nav-item'>
              <Link
                to='/more'  // Add the link to your "more" page
                className={`nav-links ${dropdown ? 'active-dropdown' : ''} more-option`} // Add the "more-option" class
                onClick={handleDropdownClick}
              >
                More <i className='fas fa-caret-down' />
              </Link>
              {dropdown && <Dropdown items={moreItems} />}
            </li>
          )}

          <div className='search-container'>
            <div className='search-icon' >
            </div>
            <input
              type='text'
              className='search-input'
              placeholder='Search Something'
              value={query}
              onChange={handleInputChange}
            />
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
