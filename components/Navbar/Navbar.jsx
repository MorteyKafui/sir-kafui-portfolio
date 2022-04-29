import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navbarNav}>
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
