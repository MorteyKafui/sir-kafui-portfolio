import Link from 'next/link';
import styles from './Navbar.module.css';

import { motion } from 'framer-motion';

const animateNavbar = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: 'all 1s ease',
  },
};

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navbarNav}>
          <motion.h1
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: 'spring', stiffness: 120 }}
          >
            <Link href='/'>
              <a>Sir_Kafui</a>
            </Link>
          </motion.h1>
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
