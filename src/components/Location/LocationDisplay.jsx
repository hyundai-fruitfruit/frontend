/**
 * @author OHsooyoung
 * @email osy9757@gmail.com
 * @create date 2024-02-13 02:24:37
 * @modify date 2024-02-13 12:12:06
 * @desc [description]
 */
import React from 'react';
import useCurrentLocation from '../../hooks/useCurrentLocation';

const LocationDisplay = () => {
  const { location, isOutOfArea, error, lastChecked, targetArea } =
    useCurrentLocation();

  console.log('LocationDisplay 렌더링...', { location, error });

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <p>
            Last Checked: {lastChecked ? lastChecked.toString() : 'Checking...'}
          </p>
          <p>
            Target Coordinates:{' '}
            {`Latitude: ${targetArea.latitude}, Longitude: ${targetArea.longitude}`}
          </p>
          <p>
            Your Coordinates:{' '}
            {`Latitude: ${location.latitude}, Longitude: ${location.longitude}`}
          </p>
          <p>Out of Area: {isOutOfArea ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
};

export default LocationDisplay;
