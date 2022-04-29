import React from 'react';
import { StyledFooter } from './FooterStyles';

const Footer = () => {
  return (
    <StyledFooter id='footer'>
      <div className='footer-container'>
        <h4>✨little_coder ✨</h4>
        <p>Ready to build with and for you 🔥</p>
        <p>
          &copy; {new Date().getFullYear()}{' '}
          <span>Everything is permissible! 💡</span>{' '}
        </p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
