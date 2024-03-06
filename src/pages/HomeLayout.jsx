import { Outlet, useNavigation } from 'react-router-dom';
import { Navbar, Header, Loading } from '../components';

export default function HomeLayout() {
  const { state } = useNavigation();
  const isPageLoading = state === 'loading';

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      {isPageLoading ? (
        <Loading></Loading>
      ) : (
        <section className="align-center py-20">
          <Outlet></Outlet>
        </section>
      )}
    </>
  );
}
