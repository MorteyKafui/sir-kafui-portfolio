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

const ProjectsDetails = ({ results: { title, description } }) => {
  return (
    <Layout>
      <div className='main-container'>
        {' '}
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </Layout>
  );
};

export default ProjectsDetails;
