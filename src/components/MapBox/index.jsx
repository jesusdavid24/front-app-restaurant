import React, { useEffect, useRef } from 'react';
import { Map, NavigationControl, Marker } from 'mapbox-gl';
import './index.scss';

const MapBox = ({ coordinates }) => {
  const mapDiv = useRef(null);
  useEffect(() => {
    if (mapDiv.current) {
      const map = new Map({
        container: mapDiv.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: coordinates,
        zoom: 12,
      });
      map.addControl(new NavigationControl());

      const marker = new Marker({ color: 'red' })
        .setLngLat(coordinates)
        .addTo(map);
    }
  }, [mapDiv]);

  return <div ref={mapDiv} className='map-container'></div>;
};

export default MapBox;
