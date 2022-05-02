import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Intro from '../components/Intro/Intro';
import Layout from '../components/Layout/Layout';
import Projects from '../components/ProjectSection/Projects';
import Skills from '../components/Skills/Skills';

export default function Home({ results }) {
  return (
    <Layout title='Sir_Kafui | Welcome to my portfolio'>
      <Intro />
      <About />
      <Skills />
      <Projects results={results} />
      <Contact />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = await fetch('http://localhost:3000/api/projects');

  const results = await data.json();

  return {
    props: { results },
    revalidate: 1,
  };
};
