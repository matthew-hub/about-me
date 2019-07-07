import React from 'react';
import './Footer.scss';
const Footer = () => {

  const date = new Date().getFullYear();
  return (
    <div className="footer">@ {date} Matthew
    </div>
  );
}

export default Footer;
