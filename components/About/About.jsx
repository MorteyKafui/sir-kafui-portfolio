import styles from './About.module.css';

const About = () => {
  return (
    <section id='about' className={styles.about}>
      <div className='main-container'>
        <h2>Who Am I ? 🧐</h2>
        <p className='description'>
          A little gossip about my coding journey... 🐸
        </p>
        <div className={styles.aboutMe}>
          <p className={styles.text}>
            <span className={styles.num}>01</span>
            Hi there, my name is Kafui. I&apos;m a cool 🤓 but curious person
            who is fascinated by tech and science. I had my first PC as a gift
            from my mom 💖 which I used to play computer games. I love games a
            lot. At my young age, my computer was my best friend. I find myself
            spending all day operating it; watching movies,playing games etc.
            Aside spending time with my PC, I love to read a lot. One day, I
            asked myself what else I can do to make myself and the computer
            useful...?
          </p>
          <p className={styles.text}>
            <span className={styles.num}>02</span>
            After watching a serious hacking movie(can&apos;t remember the
            title), I was moved. Due to my curiousity I surf the net about how
            hacking can be done. After reading some Pdfs and watching aome
            tutorials on Youtube, I begun trying things out for myself. I used
            Parrot Sec OS (my first Linux distro I ever used) to start learning
            ethical hacking. I became scared of being caught and I stopped.
            Things were not working out well for me though despite the
            tutorials.
          </p>
          <p className={styles.text}>
            <span className={styles.num}>03</span>I taught of other ways I can
            make my myself useful. I taught of the web. How does it work
            actually? 🤔 After watching a web dev tutorials from Youtube I began
            learning Html and CSS . I became frustrated and stopped. I asked
            myself how do android apps work? 🤔 I surf the net and started
            learning Kotlin for android development. I was scared of Java by
            then🤣 After reading Pdfs and series of Kotlin tutorials, I gave up
            because my PC wasn&pos;t powerful enough to run android studio. It
            just keeps on crashing 20-30 minutes after lauching.😥
          </p>
          <p className={styles.text}>
            <span className={styles.num}>04</span>
            During my out-programme(final year) after college, I stared learning
            Python for web development(2nd attempt). I eventually failed because
            I was learning Django instead of focusing on learning the Python
            very well. There was no one to guide me. I was a just a little nerd
            trying things out. In a nutshell, a friend came to the rescue,
            Joseph. Joseph wanted to buy courses on Udemy and he invited me. We
            put our resources together and bought few web dev courses from good
            teachers like Traversy and Angela Yu. I focused very well on the
            courses learning with my friend, trying to build nice websites. From
            there, we purchased Javascript courses from teachers like Colt
            Steele and Jonas. These courses had great imparted in my coding
            journey. It was not easy. After learning the basics, I moved on to
            learn React and its ecosystem. With this piece,I&apos;ll like to
            work for and work with you to build wonderful web apps together,
            with my skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
