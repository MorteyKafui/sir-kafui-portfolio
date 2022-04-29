import styles from './About.module.css';

const About = () => {
  return (
    <section id='about' className={styles.about}>
      <div className='main-container'>
        <h2>Who Am I ? 🧐</h2>
        <div className={styles.aboutMe}>
          <p className={styles.text}>
            <span>01</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            provident eaque odio, nobis possimus debitis? Sequi minus ipsam rem
            assumenda similique eligendi voluptate, ad quasi cupiditate hic
            magni perspiciatis aliquid.
          </p>
          <p className={styles.text}>
            <span>02</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            nesciunt odio beatae vero saepe, natus perspiciatis est doloremque,
            quibusdam magnam reiciendis, porro id quis non corporis consectetur
            commodi numquam! Voluptatum.
          </p>
          <p className={styles.text}>
            <span>03</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis blanditiis quo magni deserunt doloribus quaerat beatae?
            Iure doloribus soluta, deserunt perferendis recusandae consectetur
            dolor natus laudantium, voluptatum, unde amet reprehenderit sint
            labore. Minima illo earum necessitatibus! Consequatur consequuntur
            nostrum dolorem.
          </p>
          <p className={styles.text}>
            <span>04</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quae placeat nobis, repellat tempora eos earum maiores minima
            consectetur nulla, nihil, laboriosam commodi fugiat odit suscipit
            architecto quidem ipsam non modi rem maxime? Molestias, laboriosam
            possimus maxime dolorum aliquid distinctio exercitationem quos
            voluptate eveniet doloribus illum assumenda, ipsam quas cumque.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
