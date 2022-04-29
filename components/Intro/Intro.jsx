/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import styles from './Intro.module.css';

const Intro = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1>Hello World!</h1>
        <p>I'm Mortey_Kafui</p>
        <p>
          a self taught <span>Front-End Developer</span> 🤗
        </p>
        <Link href='#contact'>
          <a>Contact me</a>
        </Link>
      </div>
    </header>
  );
};

export default Intro;
