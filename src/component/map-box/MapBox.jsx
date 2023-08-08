import React, { useEffect, useRef } from "react";
import { Map, NavigationControl, Marker } from "mapbox-gl";
import "./mapBox.scss";

const MapBox = () => {
  const mapDiv = useRef(null);
  useEffect(() => {
    if (mapDiv.current) {
      const map = new Map({
        container: mapDiv.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [-73.9999, 40.6892],
        zoom: 12,
      });
      map.addControl(new NavigationControl());

      const marker2 = new Marker({ color: "red" })
        .setLngLat([-73.999, 40.6892])
        .addTo(map);
    }
  }, [mapDiv]);

  return <div ref={mapDiv} className="map-container"></div>;
};

export default MapBox;
