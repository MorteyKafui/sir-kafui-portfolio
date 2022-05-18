/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import styles from './Projects.module.css';

const Projects = ({ results }) => {
  return (
    <section id='projects' className={styles.projects}>
      <h2>Sample Projects I Built 🖥️</h2>
      <p className='description'>
        These are projects built with from scratch with the skills I&apos;ve
        learned. It was difficult 😥 and fun 😂 building them.
      </p>
      <div className='main-container'>
        <div className={styles.cards}>
          {results.map(el => (
            <div className={`${styles.card} card-1`} key={el.id}>
              <div className={styles.cardImage}>
                <Image
                  src={el.frontmatter.image}
                  alt={el.title}
                  width={550}
                  height={400}
                  priority
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className='title'>{el.frontmatter.title}</h3>
                <p className='project-desc'>{el.description}</p>
                <div className={styles.links}>
                  <Link href={el.frontmatter.repo}>
                    <a className={styles.link} target='_blank'>
                      <i className='fa-brands fa-github'></i> Code
                    </a>
                  </Link>
                  <Link href={el.frontmatter.live}>
                    <a className={styles.link} target='_blank'>
                      <i className='fa-solid fa-code'></i> Live
                    </a>
                  </Link>
                </div>
                <Link href={`/projects/${el.slug}`}>
                  <a className={styles.btn}>
                    View details <i className='fa-solid fa-angles-right'></i>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
