/**
 * @author OHsooyoung
 * @email osy9757@gmail.com
 * @create date 2024-02-13 02:24:26
 * @modify date 2024-02-13 12:30:46
 * @desc [description]
 */
import { useState, useEffect } from 'react';

const useCurrentLocation = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [isOutOfArea, setIsOutOfArea] = useState(false);
  const [error, setError] = useState(null);
  const [lastChecked, setLastChecked] = useState(null);

  let outOfAreaCounts = 0;
  let distance = 0;

  const targetArea = { latitude: 37.560319, longitude: 127.0645393 };
  const allowedDistance = 50; //미터단위
  const checkInterval = 3000;

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported');
      return;
    }

    const checkLocation = () => {
      for (let i = 0; i < 3; i++) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLastChecked(new Date());

            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });

            distance = calculateDistance(
              position.coords.latitude,
              position.coords.longitude,
              targetArea.latitude,
              targetArea.longitude,
            );
            if (distance > allowedDistance) {
              outOfAreaCounts++;
            } else {
              outOfAreaCounts = 0;
              setIsOutOfArea(false);
            }

            if (outOfAreaCounts >= 3) {
              setIsOutOfArea(true);
              outOfAreaCounts = 0;
            }
          },
          (err) => {
            setError(err.message);
          },
        );
      }
    };

    const intervalId = setInterval(checkLocation, checkInterval);

    return () => clearInterval(intervalId);
  }, []);

  return { location, isOutOfArea, error, lastChecked, targetArea };
};

function calculateDistance(lat1, lon1, lat2, lon2) {
  var R = 6371000; // 지구의 반지름 (미터)
  var dLat = deg2rad(lat2 - lat1);
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // 거리 (미터)
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

export default useCurrentLocation;
