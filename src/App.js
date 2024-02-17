import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Layouts/RootLayout';
import Login from './pages/Login/Login';
import MainPage from './pages/MainPage/Mainpage';
import LocationPage from './pages/Location/LocationPage';
import QRScannerPage from './pages/QRScannerPage/QRScannerPage';

const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'location', element: <LocationPage /> },
      // { path: 'qrscanner', element: <QRScannerPage /> },
    ],
  },
  { path: '/qrscanner', element: <QRScannerPage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
