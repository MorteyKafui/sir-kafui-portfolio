import Link from 'next/link';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id='contact' className={styles.contact}>
      <div className='main-container'>
        <h2 className={styles.subTitle}>
          Let&apos;s Connect and Build Together 🤩
        </h2>
        <p className={`description ${styles.text}`}>
          What are you waiting for, I&apos;m just a click away...
        </p>
        <div className={styles.connect}>
          <p>
            Email:{' '}
            <Link href='mail:morteykafui@gmail.com'>
              <a className={styles.contactLink}>morteykafui@gmail.com</a>
            </Link>{' '}
          </p>
          <p>
            Twitter:{' '}
            <Link href='mail:morteykafui@gmail.com'>
              <a className={styles.contactLink}>Twitter</a>
            </Link>{' '}
          </p>
          <p>
            Tel:{' '}
            <Link href='mail:morteykafui@gmail.com'>
              <a className={styles.contactLink}>0240599136</a>
            </Link>{' '}
          </p>
        </div>
        <p className={`description ${styles.text}`}>
          I&apos;ll be glad to hear from you... 🤗
        </p>
      </div>
    </section>
  );
};

export default Contact;
