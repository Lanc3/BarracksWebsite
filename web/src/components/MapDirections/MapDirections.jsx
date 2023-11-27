import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const MapDirections = () => {
  const [directions, setDirections] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const storeLocation = { lat: 52.8360147, lng: -6.9325717 }; // Replace with your store's location

  useEffect(() => {
    // Get user's location using Geolocation API

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          console.log(position)
        },

      );

  }, []);

  const directionsCallback = (response) => {
    if (response !== null && response.status === 'OK') {
      setDirections(response);
    } else {
      console.error('Error fetching directions:', response);
    }
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBT_ab0dAHxrv6JuOAa1q_2Ykl54Kz_flM">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        zoom={14}
        center={userLocation || storeLocation}
      >
        {userLocation && (
          <DirectionsService
            options={{
              destination: storeLocation,
              origin: userLocation,
              travelMode: 'WALKING',
            }}
            callback={directionsCallback}
          />
        )}

        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapDirections;
