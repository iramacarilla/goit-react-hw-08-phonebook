import React from 'react';
import AppBar from '../appBar/AppBar';




const Layout = ({ children }) => (
  <div >
    <AppBar />
    {children}
  </div>
);

export default Layout;