import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

const MapComponent = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
  });
  const latitude = parseInt(props.latitude);
  const longitude = parseInt(props.longitude);
  const center = useMemo(() => ({ lat: latitude, lng: longitude }), [latitude, longitude]);

  return (
    <div className="MapComponent">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        >
          <Marker position={{ lat: latitude, lng: longitude }} />
        </GoogleMap>
      )}
    </div>
  );
};

export default MapComponent;