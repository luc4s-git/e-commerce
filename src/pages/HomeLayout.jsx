import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';

export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
