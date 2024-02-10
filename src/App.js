import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from 'pages/layout/RootLayout';
import Login from 'pages/Login/Login';
import MainPage from 'pages/MainPage/MainPage';
import { ReduxProvider } from 'store/provider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'login', element: <Login /> },
    ],
  },
]);

const App = () => {
  return (
    <ReduxProvider>
      <RouterProvider router={router} />
    </ReduxProvider>
  );
};

export default App;
