import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Intro from '../components/Intro/Intro';
import Layout from '../components/Layout/Layout';
import Projects from '../components/ProjectSection/Projects';
import Skills from '../components/Skills/Skills';

export default function Home() {
  return (
    <Layout title='Sir_Kafui | Welcome to my portfolio'>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}
