// Layout.js
import React from 'react';
import backgroundImage from './assets/Background.jpg' // import your background image

const Layout = ({ children }) => {
  const layoutStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  return <div style={layoutStyle}>{children}</div>;
};

export default Layout;
