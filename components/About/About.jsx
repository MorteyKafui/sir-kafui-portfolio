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
            Aside spending time with my PC, I love to read a lot. I also love to
            discuss tech and science stuff with my friends to make mother Earth
            a better place to live. My favorite personality is Elon Musk. I like
            him a lot. One day, I asked myself what else I can do to make myself
            and the computer useful...?
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
        </div>
      </div>
    </section>
  );
};

export default About;
