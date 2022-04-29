/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { StyledHeader } from './IntroStyles';

const Intro = () => {
  return (
    <StyledHeader>
      <div className='container'>
        <h1>Hello World!</h1>
        <br />
        <p>I'm Mortey Kakfui</p>
        <br />
        <p>
          a self taught <span>Front-End Developer</span> 🤗
        </p>
        <br />
        <Link href='#contact'>
          <a>Contact me</a>
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Intro;
