import About from '../components/About/About';
import Intro from '../components/Intro/Intro';
import Layout from '../components/Layout/Layout';

export default function Home() {
  return (
    <Layout title='Sir_Kafui | Welcome to my portfolio'>
      <Intro />
      <About />
    </Layout>
  );
}
