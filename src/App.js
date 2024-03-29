/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-18 10:18:42
 * @modify date 2024-03-07 09:50:19
 * @desc App.js
 */
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from 'store/Store';

import Login from './pages/Login/Login';
import Onboarding from 'pages/Onboarding/Onboarding';
import MyRoom from './pages/MyRoom/MyRoom';
import KakaoCallback from './pages/Login/KakaoCallback';
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
import EventNotice from 'pages/MainPage/EventNotice';
import Mbti from 'pages/Mbti/Mbti.jsx';
import MbtiResult from 'pages/Mbti/MbtiResult';
import CaptainHeendy from 'pages/CaptainHeendy/CaptainHeendy';
import FriendGame from 'pages/FriendGame/FriendGame';
import Dice from 'pages/FriendGame/Dice';
import GetExp from 'pages/FriendGame/GetExp';
import LevelUp from 'pages/FriendGame/LevelUp';
import TheHyundaiMap from 'pages/TheHyundaiMap/TheHyundaiMap';
import RandomsSpotPush from 'pages/RandomEventSpot/RandomsSpotPush';
import RandomSpotResult from 'pages/RandomEventSpot/RandomSpotResult';
import EventDetail from 'pages/RandomEventSpot/EventDetail';

import ChatBot from 'pages/ChatBot/ChatBot';
import LevelUpModal from 'components/ModalComponent/LevelUpModal';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <Login /> },
      { path: 'login', element: <KakaoCallback /> },
      { path: 'onboarding', element: <Onboarding /> },
      { path: 'main', element: <MainPage /> },
      { path: 'location', element: <LocationPage /> },
      { path: 'login', element: <Login /> },
      { path: 'qrscanner', element: <QRScannerPage /> },
      { path: 'randomEventSpot', element: <RandomEventSpot /> },
      { path: 'storeDetail/:id', element: <StoreDetail /> },
      { path: 'reviewCreation', element: <ReviewCreation /> },
      { path: 'reviewEditor', element: <ReviewEditor /> },
      { path: 'Test', element: <Test /> },
      { path: 'randomEventSpotQR', element: <RandomEventSpotQR /> },
      { path: 'randomEventSpotQRSuccess', element: <RandomEventSpotQRSuccess /> },
      { path: 'heendyLayout', element: <HeendyLayout /> },
      { path: 'myroom', element: <MyRoom /> },
      { path: 'couponTab', element: <CouponTab /> },
      { path: 'eventNotice', element: <EventNotice /> },
      { path: 'mbti', element: <Mbti /> },
      { path: 'mbtiResult', element: <MbtiResult /> },
      { path: 'captainHeendy', element: <CaptainHeendy /> },
      { path: 'friendGame', element: <FriendGame /> },
      { path: 'dice', element: <Dice /> },
      { path: 'getExp/:type', element: <GetExp /> },
      { path: 'levelUp/:id', element: <LevelUp /> },
      { path: 'theHyundaiMap', element: <TheHyundaiMap /> },
      { path: 'chatBot', element: <ChatBot /> },
      { path: 'randomsSpotPush', element: <RandomsSpotPush /> },
      { path: 'randomSpotResult', element: <RandomSpotResult /> },
      { path: 'eventDetail', element: <EventDetail /> },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <LevelUpModal />
    </Provider>
  );
};
export default App;
