import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Intro from '../components/Intro/Intro';
import Layout from '../components/Layout/Layout';
import Projects from '../components/ProjectSection/Projects';
import Skills from '../components/Skills/Skills';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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
  const files = fs.readdirSync(path.join('projectsData'));

  const results = files.map(filename => {
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(
      path.join('projectsData', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: { results },
    revalidate: 1,
  };
};
