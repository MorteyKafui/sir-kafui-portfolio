import Head from 'next/head';
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
      {/* footer */}
    </>
  );
};

export default Layout;
