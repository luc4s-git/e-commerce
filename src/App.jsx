import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  HomeLayout,
  Landing,
  Error,
  About,
  Products,
  SingleProduct,
  Cart,
  Checkout,
  Orders,
  Login,
  Register,
} from './pages';

import { ErrorElement } from './components';

import { loader as LandingLoader } from './pages/loaders/LandingLoader';
import { loader as SingleProductLoader } from './pages/loaders/SingleProductLoader';
import { loader as ProductsLoader } from './pages/loaders/ProductsLoader';
import { action as RegisterAction } from './pages/actions/RegisterAction';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: LandingLoader,
      },
      { path: 'about', element: <About /> },
      {
        path: 'products',
        element: <Products />,
        loader: ProductsLoader,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        loader: SingleProductLoader,
      },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'orders', element: <Orders /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: RegisterAction,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
