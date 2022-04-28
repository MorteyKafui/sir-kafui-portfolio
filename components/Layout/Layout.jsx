import Head from 'next/head';
import { MainContainer } from './LayoutStyles';

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {/* navar */}
      <MainContainer> {children}</MainContainer>
      {/* footer */}
    </>
  );
};

export default Layout;
