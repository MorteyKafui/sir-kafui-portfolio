import Image from 'next/image';
import styles from './About.module.css';

const About = () => {
  return (
    <section id='about' className={styles.about}>
      <div className='main-container'>
        <h2>Who Am I ? 🧐</h2>
        <p className='description'>
          A little gossip about me and my coding journey... 🐸
        </p>
        <div className={styles.aboutMe}>
          <p className={styles.text}>
            Hi there, my name is Kafui. I&apos;m a cool 🤓 but curious person
            who is fascinated by the world of tech and science. I am also a
            professional teacher who graduated from St.Francis College of
            Education. After college, I started learning programming, web
            development to be specific.
            <br />
            After several years of hardwork, I was able to gain confidence at
            the basics (Html/CSS). Later on, I moved on to learn JavaScript. Due
            to my curiousity and my quest for knowledge, I decided to learn more
            advanced tech stuff like Reactjs to be a Front-end developer.😋
            <br />
            After several months and years of self tutoring, I&apos;ve gained
            some momentum to work and build cool, beautiful and performant
            websites and web apps for individuals or companies respectively.
            <br />
            Aside coding activities, I like to read books, play games, watch
            movies and hang out with friends. I am cool and fun to be with.
            Contact me and let&apos;s works together!🔥
          </p>
          <Image
            src='/assets/kafui.jpg'
            width={400}
            height={400}
            alt='kafui photo'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
