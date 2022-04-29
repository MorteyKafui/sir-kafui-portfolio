import React from 'react';
import { StyledSkills } from './SkillsStyles';

const Skills = () => {
  return (
    <StyledSkills id='about'>
      <div className='main-container'>
        <h2>Tools I Work With 🔨</h2>
        <p className='description'>
          These are the tech tools I&apos;ve been learning to better my skills
          day by day. Learning never stops...{' '}
        </p>
        <div className='tools'>
          <div className='tool-1'>
            {/* icon */}
            <h3>Html/CSS</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className='tool-2'>
            {/* icon */}
            <h3>JavaScript</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className='tool-3'>
            {/* icon */}
            <h3>Reactjs</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className='tool-4'>
            {/* icon */}
            <h3>Nextjs</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className='tool-5'>
            {/* icon */}
            <h3>TailwindCSS</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className='tool-6'>
            {/* icon */}
            <h3>Framer Motion</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className='tool-7'>
            {/* icon */}
            <h3>Git</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur, explicabo.
            </p>
          </div>
        </div>
      </div>
    </StyledSkills>
  );
};

export default Skills;
