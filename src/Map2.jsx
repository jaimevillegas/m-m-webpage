/* eslint-disable react/prop-types */
import GoogleMapReact from "google-map-react";
import "./map.css";
import LocationPin from "./LocationPin";

function Map2({ location, zoomLevel }) {
  return (
    <div className="map">
      <h2 className="map-h2">
        Estamos ubicados en la Calle 15A Nro. 36-04, en el barrio Bella suiza -
        Acacías, Meta
      </h2>
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCfd1va1bA7jsdxoTwa8yPCYQK7HXGjepc" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default Map2;
