/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-17 11:41:12
 * @modify date 2024-02-22 01:35:27
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
