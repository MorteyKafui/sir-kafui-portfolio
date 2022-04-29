import React from 'react';
import { StyledAbout } from './AboutStyles';

const About = () => {
  return (
    <StyledAbout id='about'>
      <div className='main-container'>
        <h2>Who Am I ? 🧐</h2>
        <div className='about-me'>
          <p className='p-1'>
            <span>01</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            provident eaque odio, nobis possimus debitis? Sequi minus ipsam rem
            assumenda similique eligendi voluptate, ad quasi cupiditate hic
            magni perspiciatis aliquid.
          </p>
          <p className='p-2'>
            <span>02</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            nesciunt odio beatae vero saepe, natus perspiciatis est doloremque,
            quibusdam magnam reiciendis, porro id quis non corporis consectetur
            commodi numquam! Voluptatum.
          </p>
          <p className='p-3'>
            <span>03</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis blanditiis quo magni deserunt doloribus quaerat beatae?
            Iure doloribus soluta, deserunt perferendis recusandae consectetur
            dolor natus laudantium, voluptatum, unde amet reprehenderit sint
            labore. Minima illo earum necessitatibus! Consequatur consequuntur
            nostrum dolorem.
          </p>
          <p className='p-4'>
            <span>04</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quae placeat nobis, repellat tempora eos earum maiores minima
            consectetur nulla, nihil, laboriosam commodi fugiat odit suscipit
            architecto quidem ipsam non modi rem maxime? Molestias, laboriosam
            possimus maxime dolorum aliquid distinctio exercitationem quos
            voluptate eveniet doloribus illum assumenda, ipsam quas cumque.
          </p>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
