import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Menu = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleClick = (item) => {
    setActiveItem(item);
  };

  const handleDropdownToggle = (dropdown) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
  };

  return (
    <div className="menu">
      <ul>
        <li
          className={activeItem === 'dashboard' ? 'active' : ''}
          onClick={() => handleClick('dashboard')}
        >
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li
          className={activeItem === 'inventory' ? 'active' : ''}
          onClick={() => handleClick('inventory')}
        >
          <Link to="/inventory">Inventory</Link>
        </li>
        <li
          className={activeItem === 'orders' ? 'active' : ''}
          onClick={() => handleClick('orders')}
        >
          <Link to="/orders">Orders</Link>
        </li>
        <li
          className={activeItem === 'returns' ? 'active' : ''}
          onClick={() => handleClick('returns')}
        >
          <Link to="/returns">Returns</Link>
        </li>
        <li
          className={activeItem === 'customers' ? 'active' : ''}
          onClick={() => handleClick('customers')}
        >
          <Link to="/customers">Customers</Link>
        </li>
        <li
          className={activeItem === 'shipping' ? 'active' : ''}
          onClick={() => handleClick('shipping')}
        >
          <Link to="/shipping">Shipping</Link>
        </li>
        <li
          className={activeItem === 'channel' ? 'active' : ''}
          onClick={() => handleClick('channel')}
        >
          <Link to="/channel">Channel</Link>
        </li>
        <li
          className={activeItem === 'integration' ? 'active' : ''}
          onClick={() => handleClick('integration')}
        >
          <Link to="/integration">Integration</Link>
        </li>

        {/* Dropdowns */}
        <li
          className={`dropdown ${dropdownOpen === 'calculators' ? 'open' : ''}`}
          onClick={() => handleDropdownToggle('calculators')}
        >
          Calculators
          {dropdownOpen === 'calculators' && (
            <ul className="dropdown-menu">
              <li><Link to="/calculator1">Calculator 1</Link></li>
              <li><Link to="/calculator2">Calculator 2</Link></li>
            </ul>
          )}
        </li>
        <li
          className={`dropdown ${dropdownOpen === 'reports' ? 'open' : ''}`}
          onClick={() => handleDropdownToggle('reports')}
        >
          Reports
          {dropdownOpen === 'reports' && (
            <ul className="dropdown-menu">
              <li><Link to="/report1">Report 1</Link></li>
              <li><Link to="/report2">Report 2</Link></li>
            </ul>
          )}
        </li>
        <li
          className={`dropdown ${dropdownOpen === 'accounts' ? 'open' : ''}`}
          onClick={() => handleDropdownToggle('accounts')}
        >
          Accounts
          {dropdownOpen === 'accounts' && (
            <ul className="dropdown-menu">
              <li><Link to="/account1">Account 1</Link></li>
              <li><Link to="/account2">Account 2</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Menu;
