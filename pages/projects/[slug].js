/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout/Layout';

export const getStaticPaths = async () => {
  const data = await fetch('http://localhost:3000/api/projects');

  const results = await data.json();

  const paths = results.map(el => ({
    params: { slug: el.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const data = await fetch(`http://localhost:3000/api/projects/${slug}`);

  const results = await data.json();

  return {
    props: { results: results[0] },
    revalidate: 1,
  };
};

const ProjectsDetails = ({
  results: { title, summary, live, tech, repo, screenshot, problem, lesson },
}) => {
  return (
    <Layout>
      <div className='main-container details'>
        <Link href='/'>
          <a className='back'> &larr; Go Back</a>
        </Link>{' '}
        <h1>{title}</h1>
        <p>{summary}</p>
        <div className='stack'>
          <p>
            Live:{' '}
            <Link href={live}>
              <a target='_blank'>View Live Site</a>
            </Link>{' '}
          </p>
          <p className='tech'>
            Tech Stack:{' '}
            {tech.map(el => (
              <li key={el}>{el}</li>
            ))}
          </p>
          <p>
            Github Repo:{' '}
            <Link href={repo}>
              <a target='_blank'>View Code</a>
            </Link>{' '}
          </p>
        </div>
        <div className='problem'>
          <h2>Challenges</h2>
          <p>{problem}</p>
        </div>
        <h2>Screenshot</h2>
        <img src={screenshot} alt='screenshot' />
        <div className='lesson'>
          <h2>Lessons Learned</h2>
          <p>{lesson}</p>
        </div>
        <h2>Let&apos;s Build Something Together</h2>
        <p>
          Feel free to reach out to me if want a developer to build somwthing,
          or you just want to connect{' '}
          <span>
            <Link href='mailto:morteykafui@gmail.com'>
              <a target='_blank'>morteykafui@gmail.com.</a>
            </Link>
          </span>
        </p>
      </div>
    </Layout>
  );
};

export default ProjectsDetails;
