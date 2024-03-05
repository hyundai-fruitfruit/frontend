/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-13 02:24:26
 * @modify date 2024-03-04 17:30:43
 * @desc gps 인증시 현재위치와 더현대 위치 비교 hook
 */
import { useState, useEffect } from 'react';

const useCurrentLocation = (currentLocation) => {
  const [isOutOfArea, setIsOutOfArea] = useState(false);
  const [error, setError] = useState(null);

  const targetArea = { latitude: 37.5603248, longitude: 127.0645185 };
  const allowedDistance = 50; // 미터 단위

  useEffect(() => {
    if (!currentLocation || !currentLocation.latitude || !currentLocation.longitude) {
      setError('Current location is not provided or incomplete');
      return;
    }

    try {
      const distance = calculateDistance(
        currentLocation.latitude,
        currentLocation.longitude,
        targetArea.latitude,
        targetArea.longitude,
      );

      setIsOutOfArea(distance > allowedDistance);
    } catch (err) {
      setError(err.message);
    }
  }, [currentLocation]);

  return { isOutOfArea, error };
};

function calculateDistance(lat1, lon1, lat2, lon2) {
  var R = 6371000; // 지구의 반지름 (미터)
  var dLat = deg2rad(lat2 - lat1);
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // 거리 (미터)
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

export default useCurrentLocation;
