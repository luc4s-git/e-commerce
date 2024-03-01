import { Outlet } from 'react-router-dom';
import { Navbar, Header } from '../components';

export default function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-center">
        <Outlet />
      </section>
    </>
  );
}
