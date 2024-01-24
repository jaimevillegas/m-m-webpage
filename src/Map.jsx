/* eslint-disable react/prop-types */
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "red",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {text}
  </div>
);

export default function Map() {
  const markerPosition = {
    lat: 3.9898524284362793,
    lng: -73.77669525146484,
  };

  const defaultProps = {
    center: markerPosition,
    zoom: 18,
  };

  return (
    // Important! Always set the container height explicitly
    <div className="px-24" style={{ height: "60vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCfd1va1bA7jsdxoTwa8yPCYQK7HXGjepc" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          // lat={3.9898524284362793}
          // lng={-73.77669525146484}
          lat={markerPosition.lat}
          lng={markerPosition.lng}
          text="M&M"
        />
      </GoogleMapReact>
    </div>
  );
}
