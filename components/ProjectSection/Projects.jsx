import Link from 'next/link';
import Image from 'next/image';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section id='projects' className={styles.projects}>
      <h2>Sample Projects I Built 🖥️</h2>
      <p className='description'>
        These are projects built with from scratch with the skills I&apos;ve
        learned. It was difficult 😥 and fun 😂 building them.
      </p>
      <div className='main-container'>
        <div className={styles.cards}>
          <div className={`${styles.card} card-1`}>
            <div className={styles.cardImage}>
              <Image
                src='/assets/project-img.png'
                alt='project-img'
                width={500}
                height={300}
                layout='intrinsic'
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className='title'>Project name</h3>
              <p className='project-desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                sequi?
              </p>
              <div className={styles.links}>
                <Link href='/'>
                  <a className={styles.link}>
                    <i className='fa-brands fa-github'></i> Code
                  </a>
                </Link>
                <Link href='/'>
                  <a className={styles.link}>
                    <i className='fa-solid fa-code'></i> Live
                  </a>
                </Link>
              </div>
              <Link href='/'>
                <a className={styles.btn}>
                  View details <i className='fa-solid fa-angles-right'></i>
                </a>
              </Link>
            </div>
          </div>
          <div className={`${styles.card} card-1`}>
            <div className={styles.cardImage}>
              <Image
                src='/assets/project-img.png'
                alt='project-img'
                width={500}
                height={300}
                layout='intrinsic'
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className='title'>Project name</h3>
              <p className='project-desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                sequi?
              </p>
              <div className={styles.links}>
                <Link href='/'>
                  <a className={styles.link}>
                    <i className='fa-brands fa-github'></i> Code
                  </a>
                </Link>
                <Link href='/'>
                  <a className={styles.link}>
                    <i className='fa-solid fa-code'></i> Live
                  </a>
                </Link>
              </div>
              <Link href='/'>
                <a className={styles.btn}>
                  View details <i className='fa-solid fa-angles-right'></i>
                </a>
              </Link>
            </div>
          </div>
          <div className={`${styles.card} card-1`}>
            <div className={styles.cardImage}>
              <Image
                src='/assets/project-img.png'
                alt='project-img'
                width={500}
                height={300}
                layout='intrinsic'
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className='title'>Project name</h3>
              <p className='project-desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                sequi?
              </p>
              <div className={styles.links}>
                <Link href='/'>
                  <a className={styles.link}>
                    <i className='fa-brands fa-github'></i> Code
                  </a>
                </Link>
                <Link href='/'>
                  <a className={styles.link}>
                    <i className='fa-solid fa-code'></i> Live
                  </a>
                </Link>
              </div>
              <Link href='/'>
                <a className={styles.btn}>
                  View details <i className='fa-solid fa-angles-right'></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
