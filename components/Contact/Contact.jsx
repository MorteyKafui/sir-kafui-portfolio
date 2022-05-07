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
          Feel free to contact me if you need a developer to build your next
          project or if you just want to connect. What are you waiting for,
          I&apos;m just a click away...
        </p>
        <div className={styles.connect}>
          <p>
            Email:{' '}
            <Link href='mailto:morteykafui@gmail.com'>
              <a className={styles.contactLink} target='_blank'>
                morteykafui@gmail.com
              </a>
            </Link>{' '}
          </p>
          <p>
            Twitter:{' '}
            <Link href='https://twitter.com/MorteyKafui'>
              <a className={styles.contactLink} target='_blank'>
                @MorteyKafui
              </a>
            </Link>{' '}
          </p>
          <p>
            WhatsApp/Call:{' '}
            <Link href='https://api.whatsapp.com/send?phone=0240599136'>
              <a className={styles.contactLink} target='_blank'>
                0240599136
              </a>
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
