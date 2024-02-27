/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-18 10:18:42
 * @modify date 2024-02-28 01:30:46
 * @desc App.js
 */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login/Login';
import MainPage from './pages/MainPage/Mainpage';
import LocationPage from './pages/Location/LocationPage';
import QRScannerPage from './pages/QRScannerPage/QRScannerPage';
import RandomEventSpot from './pages/RandomEventSpot/RandomEventSpot';
import StoreDetail from './pages/StoreDetail/StoreDetail';
import ReviewCreation from 'pages/ReviewCreation/ReviewCreation';
import ReviewEditor from 'pages/ReviewCreation/ReviewEditor';
import Test from 'pages/Test/TestPage';
import RandomEventSpotQR from 'pages/RandomEventSpot/RandomEventSpotQR';
import RandomEventSpotQRSuccess from 'pages/RandomEventSpot/RandomEventSpotQRSuccess';
import HeendyLayout from 'pages/Layouts/HeendyLayout/HeendyLayout';
import CouponTab from 'pages/CouponTab/CouponTab';

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
      { path: 'reviewCreation', element: <ReviewCreation /> },
      { path: 'reviewEditor', element: <ReviewEditor /> },
      { path: 'Test', element: <Test /> },
      { path: 'randomEventSpotQR', element: <RandomEventSpotQR /> },
      { path: 'randomEventSpotQRSuccess', element: <RandomEventSpotQRSuccess /> },
      { path: 'heendyLayout', element: <HeendyLayout /> },
      { path: 'couponTab', element: <CouponTab /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
