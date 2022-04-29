import Link from 'next/link';
import Image from 'next/image';
import { StyledProjects } from './ProjectStyles';

const Projects = () => {
  return (
    <StyledProjects id='projects'>
      <h2>Sample Projects I Built 🖥️</h2>
      <p className='description'>
        These are projects built with from scratch with the skills I&apos;ve
        learned. It was difficult 😥 and fun 😂 building them.
      </p>
      <div className='main-container'>
        <div className='cards'>
          <div className='card card-1'>
            <div className='card-img'>
              <Image
                src='/assets/project-img.png'
                alt='project-img'
                width={500}
                height={300}
                layout='intrinsic'
              />
            </div>
            <div className='card-content'>
              <h3 className='title'>Project name</h3>
              <p className='project-desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                sequi?
              </p>
              <div className='links'>
                <Link href='/'>
                  <a>
                    <i className='fa-brands fa-github'></i> View code
                  </a>
                </Link>
                <Link href='/'>
                  <a>
                    <i className='fa-solid fa-code'></i> Live site
                  </a>
                </Link>
              </div>
              <Link href='/'>
                <a className='view'>
                  View details <i className='fa-solid fa-angles-right'></i>
                </a>
              </Link>
            </div>
          </div>
          <div className='card card-2'>
            <div className='card-img'>
              <Image
                src='/assets/project-img.png'
                alt='project-img'
                width={500}
                height={300}
                layout='intrinsic'
              />
            </div>
            <div className='card-content'>
              <h3 className='title'>Project name</h3>
              <p className='project-desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                sequi?
              </p>
              <div className='links'>
                <Link href='/'>
                  <a>
                    <i className='fa-brands fa-github'></i> View code
                  </a>
                </Link>
                <Link href='/'>
                  <a>
                    <i className='fa-solid fa-code'></i> Live site
                  </a>
                </Link>
              </div>
              <Link href='/'>
                <a className='view'>
                  View details <i className='fa-solid fa-angles-right'></i>
                </a>
              </Link>
            </div>
          </div>
          <div className='card card-3'>
            <div className='card-img'>
              <Image
                src='/assets/project-img.png'
                alt='project-img'
                width={500}
                height={300}
                layout='intrinsic'
              />
            </div>
            <div className='card-content'>
              <h3 className='title'>Project name</h3>
              <p className='project-desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                sequi?
              </p>
              <div className='links'>
                <Link href='/'>
                  <a>
                    <i className='fa-brands fa-github'></i> View code
                  </a>
                </Link>
                <Link href='/'>
                  <a>
                    <i className='fa-solid fa-code'></i> Live site
                  </a>
                </Link>
              </div>
              <Link href='/'>
                <a className='view'>
                  View details <i className='fa-solid fa-angles-right'></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </StyledProjects>
  );
};

export default Projects;
