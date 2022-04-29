import Head from 'next/head';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { MainContainer } from './LayoutStyles';

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <MainContainer> {children}</MainContainer>
      <Footer />
    </>
  );
};

export default Layout;
