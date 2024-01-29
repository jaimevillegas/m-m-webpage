import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

function Map3() {
  const position = { lat: 3.8301766, lng: -73.69300098 };

  return (
    <APIProvider apiKey={"AIzaSyCfd1va1bA7jsdxoTwa8yPCYQK7HXGjepc"}>
      <Map center={position} zoom={17}>
        <Marker position={position} />
      </Map>
    </APIProvider>
  );
}

export default Map3;
