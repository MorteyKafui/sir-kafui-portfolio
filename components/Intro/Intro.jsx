/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import styles from './Intro.module.css';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <header className={styles.header}>
      <motion.div
        className={styles.headerContainer}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 3 }}
      >
        <h1>Hello World!</h1>
        <p>I'm Mortey_Kafui</p>
        <p>
          a self taught <span>Front-End Developer</span> 🤗
        </p>
        <Link href='#contact'>
          <motion.a
            initial={{
              x: '-100vw',
            }}
            animate={{
              x: 0,
            }}
            transition={{
              duration: 2,
              type: 'spring',
              stiffness: 300,
            }}
          >
            Contact me
          </motion.a>
        </Link>
      </motion.div>
    </header>
  );
};

export default Intro;
