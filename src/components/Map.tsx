import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { HelpRequestData } from "../types/types";

interface MapBlockProps {
  requests: HelpRequestData[];
  onMarkerClick: (id: string) => void;
}

const MapBlock: React.FC<MapBlockProps> = ({ requests, onMarkerClick }) => {
  return (
    <MapContainer
    center={[55.751244, 37.618423]} 
      zoom={5}
      style={{
        height: "100%",
        minHeight: "400px",
        width: "100%",
    }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {requests.map((request) => (
        <Marker
          key={request.id}
          position={[request.location.latitude, request.location.longitude]}
          eventHandlers={{
            click: () => onMarkerClick(request.id),
          }}
        >
          <Popup>{request.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapBlock;
