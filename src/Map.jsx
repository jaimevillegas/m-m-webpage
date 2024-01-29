/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export default GoogleApiWrapper({
  apiKey: "AIzaSyCfd1va1bA7jsdxoTwa8yPCYQK7HXGjepc",
})(CompanyMap);

function CompanyMap(props) {
  const mapStyles = {
    position: "absolute",
    width: "95%",
    height: "55%",
  };

  return (
    <div>
      <Map
        google={props.google}
        zoom={17}
        style={mapStyles}
        initialCenter={{ lat: 3.8301766, lng: -73.69300098 }}
      >
        <Marker position={{ lat: 3.8301766, lng: -73.69300098 }} />
      </Map>
    </div>
  );
}
