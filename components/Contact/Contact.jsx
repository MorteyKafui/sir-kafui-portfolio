import Link from 'next/link';
import { StyledContact } from './ContactStyles';

const Contact = () => {
  return (
    <StyledContact id='contact'>
      <div className='main-container'>
        <h2>Let&apos;s Connect and Build Together 🤩</h2>
        <p className='description'>
          What are you waiting for, I&apos;m just a click away...
        </p>
        <div className='connect'>
          <p>
            Email:{' '}
            <Link href='mail:morteykafui@gmail.com'>
              <a>morteykafui@gmail.com</a>
            </Link>{' '}
          </p>
          <p>
            Twitter:{' '}
            <Link href='mail:morteykafui@gmail.com'>
              <a>Twitter</a>
            </Link>{' '}
          </p>
          <p>
            Tel:{' '}
            <Link href='mail:morteykafui@gmail.com'>
              <a>0240599136</a>
            </Link>{' '}
          </p>
        </div>
        <p className='description'>I&apos;ll be glad to hear from you... 🤗</p>
      </div>
    </StyledContact>
  );
};

export default Contact;
