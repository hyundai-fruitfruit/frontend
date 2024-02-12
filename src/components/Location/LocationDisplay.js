/**
 * @author OHsooyoung
 * @email osy9757@gmai.com
 * @create date 2024-02-13 02:24:37
 * @modify date 2024-02-13 02:24:38
 * @desc [description]
 */
import React from 'react';
import useCurrentLocation from '../../hooks/useCurrentLocation';

const LocationDisplay = () => {
  const { location, error } = useCurrentLocation();

  console.log('LocationDisplay 렌더링...', { location, error });

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default LocationDisplay;
