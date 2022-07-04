import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Home';
import React from "react";
import { NavbarWrapper } from "./Styles/NavbarStyles";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);
function Navbar({ open }) {
  return (
    <NavbarWrapper open={open}>
      <a href="#">Link</a>
      <a href="#">Link</a>
      <a href="#">Link</a>
      <a href="#">Link</a>
    </NavbarWrapper>
  );
}

export default Navbar;

