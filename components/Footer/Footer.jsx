import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer id='footer' className={styles.footer}>
      <div className={styles.footerContainer}>
        <h4>✨little_coder ✨</h4>
        <p>Ready to build with and for you 🔥</p>
        <p>
          &copy; {new Date().getFullYear()}{' '}
          <span>Everything is permissible! 💡</span>{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
