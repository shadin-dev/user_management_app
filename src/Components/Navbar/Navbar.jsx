import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const navStyle = {
    backgroundColor: '#000', // Choose your desired background color
    padding: '10px',
    textAlign: 'center',
  };

  const linkStyle = {
    color: '#fff', // Choose your desired text color
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '18px',
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/users" style={linkStyle}>Users</Link>
    </nav>
  );
};

export default Navigation;
