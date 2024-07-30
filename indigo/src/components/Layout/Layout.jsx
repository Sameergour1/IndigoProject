
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* This will render the child routes */}
      <Footer />
    </>
  );
};

export default Layout;
