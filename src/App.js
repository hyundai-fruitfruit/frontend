/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-18 10:18:42
 * @modify date 2024-02-19 11:36:10
 * @desc [description]
 */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login/Login';
import MainPage from './pages/MainPage/Mainpage';
import LocationPage from './pages/Location/LocationPage';
import QRScannerPage from './pages/QRScannerPage/QRScannerPage';
import RandomEventSpot from './pages/RandomEventSpot/RandomEventSpot';
import StoreDetail from './pages/StoreDetail/StoreDetail';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <Login /> },
      { path: 'main', element: <MainPage /> },
      { path: 'location', element: <LocationPage /> },
      { path: 'login', element: <Login /> },
      { path: 'qrscanner', element: <QRScannerPage /> },
      { path: 'randomEventSpot', element: <RandomEventSpot /> },
      { path: 'storeDetail', element: <StoreDetail /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
