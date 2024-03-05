/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-17 11:41:12
 * @modify date 2024-03-04 19:12:52
 * @desc api 정의
 */

import api from './api';

// 이벤트 타입에 따른 랜덤 스팟 조회
export const getRandomSpotByEventType = async (eventType) => {
  try {
    const response = await api.get(`/api/v1/events/random-spot?eventType=${eventType}`);

    return response.data;
  } catch (error) {
    console.error('Error fetching random spot by event type:', error);
    throw error;
  }
};

// 매장 상세 정보 조회
export const fetchStoreDetails = async (storeId) => {
  try {
    const response = await api.get(`/api/v1/stores/${storeId}`);

    return response.data;
  } catch (error) {
    console.error('Error fetching store details:', error);
    throw error;
  }
};

// 이벤트 목록 출력
export const getEventList = async () => {
  try {
    const response = await api.get('/api/v1/admin/events');

    return response.data;
  } catch (error) {
    console.error('Error get Event List:', error);
    throw error;
  }
};

// 유저 쿠폰 목록 출력
export const getUserCoupontList = async () => {
  try {
    const response = await api.get('/api/v1/coupons');

    return response.data;
  } catch (error) {
    console.error('Error get Event List:', error);
    throw error;
  }
};

//챗봇 api
export const getHeendyGuide = async () => {
  try {
    const response = await api.get('/api/v1/heendy-guide');

    return response.data;
  } catch (error) {
    console.error('Error get Heendy Guide :', error);
    throw error;
  }
};

export const getHeendyGuideType = async (guideType) => {
  try {
    console.log(`/api/v1/heendy-guide/${guideType}`);
    const response = await api.get(`/api/v1/heendy-guide/${guideType}`);

    return response.data;
  } catch (error) {
    console.error('Error get Heendy Guide Type :', error);
    throw error;
  }
};

export const getHeendyGuideHashTag = async (hashtag) => {
  try {
    const response = await api.get(`/api/v1/heendy-guide?hashtag=${hashtag}`);

    return response.data;
  } catch (error) {
    console.error('Error get Heendy Guide HashTag :', error);
    throw error;
  }
};

// 매장 리뷰 작성
export const createReviewForStore = async (storeId, reviewReqDto) => {
  try {
    const response = await api.post(`/api/v1/stores/${storeId}/reviews`, reviewReqDto);

    return response.data;
  } catch (error) {
    console.error('Error creating review for store:', error);
    throw error;
  }
};

/**
 * @author 엄상은
 * @email sangeun.e.9@gmail.com
 * @create date 2024-02-26 19:41:08
 * @modify date 2024-02-26 19:41:08
 * @desc 로그인 api 연결
 */

// 카카오 로그인
export const login = async (accessToken) => {
  try {
    const response = await api.post('/api/v1/auth/login', {
      loginToken: accessToken,
      oauthType: 'KAKAO',
    });
    return response.data.accessToken;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

/**
 * @author 엄상은
 * @email sangeun.e.9@gmail.com
 * @create date 2024-02-27 11:55:34
 * @modify date 2024-02-27 11:55:34
 * @desc QR코드 API 연결
 */

// QR코드 로드
export const findQr = async () => {
  try {
    const response = await api.get('/api/v1/members/qr');
    return response.data.data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

/**
 * @author 황수영
 * @email sooyoung.h8@gmail.com
 * @create date 2024-03-01
 * @modify date 2024-03-01
 * @desc FCM 토큰 요청 및 디바이스 토큰 전송
 */
// FCM 토큰 요청
export const updateDeviceToken = async (deviceToken) => {
  try {
    await api.post(
      '/api/v1/members/token',
      {
        platform: 'Firebase',
        token: deviceToken,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('accessToken'),
        },
      },
    );
  } catch (error) {
    console.error(`updateDeviceToken 에러 발생 : ${error}`);
  }
};

// FCM 푸시 알림 요청1 - 로컬 스토리지에서
export const getPushAlarmByLocalStorage = async () => {
  try {
    const fcmDeviceToken = localStorage.getItem('fcmDeviceToken');
    console.log('getPushAlarmByLocalStorage() fcmDeviceToken : ' + fcmDeviceToken);
    const response = await api.post(
      '/api/v1/fcm-push/random-spot/device-token',
      {
        deviceToken: fcmDeviceToken,
        delayedSeconds: 0,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('accessToken'),
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(`getPushAlarmByLocalStorage 에러 발생 : ${error}`);
  }
};

//const DEVICE_TOKEN = process.env.REACT_APP_API_DEVICE_TOKEN;
// FCM 푸시 알림 요청2 - 각 브라우저별 디바이스 토큰 전송
export const getPushAlarmByDeviceToken = async (token) => {
  try {
    const fcmDeviceToken = localStorage.getItem('fcmDeviceToken');
    console.log('DEVICE_TOKEN : ' + fcmDeviceToken);
    const response = await api.post(
      '/api/v1/fcm-push/random-spot/device-token',
      {
        deviceToken: token,
        delayedSeconds: 0,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('accessToken'),
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(`getPushAlarmByLocalStorage 에러 발생 : ${error}`);
  }
};

// FCM 푸시 알림 요청3 - 유저 로그인 정보로 푸시 알림
export const getPushAlarm = async () => {
  try {
    const response = await api.get('/api/v1/fcm-push', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('accessToken'),
      },
    });
    return response.data;
  } catch (error) {
    console.error(`getPushAlarm 에러 발생 : ${error}`);
  }
};
