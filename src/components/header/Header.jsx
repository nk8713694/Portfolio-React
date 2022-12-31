import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id="header">
      <div className="container header_container">
        <h5>Hello I'm gg</h5>
        <h1>Nitish Prasad</h1>
        <h5 className="text-light"> Full-stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="cartoon">
          <div className="bubble b r hb">
            Hello World!
            <br />
            Welcome to my Portfolio..
          </div>
        </div>

        {/* <Avatar /> */}

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;