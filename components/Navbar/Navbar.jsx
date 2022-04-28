import Image from 'next/image';
import Link from 'next/link';
import { StyledNavbar } from './NavbarStyles';

// import {useState} from 'react'

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className='container'>
        {' '}
        <h1>
          <Link href='/'>
            <a>Sir_Kafui</a>
          </Link>
        </h1>
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='#about'>
              <a>About Me</a>
            </Link>
          </li>
          <li>
            <Link href='#projects'>
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href='#contact'>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        <div className='mode'>
          <Image
            src='/assets/icons/sun-icon.svg'
            alt='mode-icon'
            width={30}
            height={30}
          />
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
